# Databases and networks

Files or a database, players' data that follows them between servers, outages, backups and snapshots.

## Files or a database: `Storage` (API version 40)

A server saves in files (the default, nothing to set up) or in a MySQL or MariaDB database, chosen in /tempest,
Saving (`universe/mods/atomictempest/storage.json`). The choice counts from the next restart, so data never moves while
a server runs. Several servers pointed at the same database share it: Tempest Economy keeps players' wallets there
(with any Tempest Pro plugin), and your plugin can keep its own tables there too.

```java
if (CoreAPI.runningVersion() >= 40 && Storage.usesDatabase()) {
    Storage.Target db = Storage.target();              // the settings this server started with
    try (Connection c = db.open()) {                   // a new connection; close it yourself
        // tables named db.tablePrefix() + "yourplugin_..."; db.server() is this server's name in the network
    }
}
```

| Method | What it gives |
|---|---|
| `Storage.usesDatabase()` | Whether this server saves in a database since its start |
| `Storage.target()` | The database (null with files): `open()`, `server()`, `tablePrefix()`, `where()` (no password or options) |
| `Storage.test(target)` | "Connected to MariaDB 11.4" or what went wrong; `lastTest()` is the one Core ran after the last change |
| `Storage.check(target)` | API 41: the connection test plus a safety check (`Safety`: `connected()`, `connection()`, `warnings()`): a user with more rights than needed, root, no password, an unencrypted connection over a network, a database or driver without security fixes. `lastSafety()` is Core's last one |
| `target.encrypted()`, `target.local()` | API 41: whether the connection is encrypted (/tempest, Saving, "Encrypt the connection"), and whether the database runs on this machine |

The driver is a jar in `universe/mods/atomictempest/drivers` (Tempest Pro's download has the MariaDB one, which talks to
MySQL too), loaded with only Java's own classes above it: never inside a plugin jar and never through a plugin's class
loader. Every value from the settings is checked before it reaches SQL; use prepared statements for your own values.

Since API 41, every connection has the driver options that let a hostile or hijacked database read the server's files
(`allowLocalInfile`) or run code (`autoDeserialize`) switched off, whatever the settings say; the advanced `url` in
storage.json takes only `jdbc:mariadb://` or `jdbc:mysql://`, hosts, one database and allowlisted options (encryption,
time-outs, character sets). The password may be `env:NAME` to read it from an environment variable, and storage.json is
readable only by the server's own user on Linux.


## Players' data that follows them between servers: `SharedData` (API version 42)

When servers share a database (/tempest, Saving), a plugin's per-player data can follow players from server to
server, held by one server at a time, like the shared wallets: a server takes a player's data when they join, once no
other server holds it, saves it while they play and lets go when they leave. A server that does not hold a player's
data must change nothing for them; so a reward claimed on one server can never be claimed again by switching servers,
and a server that crashed holds nothing after a minute (its last save counts). Tempest Pass and Quests use it.

```java
SharedData shared = CoreAPI.runningVersion() >= 42 ? SharedData.open("yourplugin") : null;  // null: saving in files
shared.claim(uuid);                        // PlayerConnectEvent: taken as soon as no other server holds it
String json = shared.data(uuid);           // null: not held here (change nothing); "": new to the network (your file once)
if (!shared.saveNow(uuid, json)) { ... }   // before giving a reward: true once the database has it (waits up to 5 s)
shared.release(uuid, json);                // PlayerDisconnectEvent: saved and let go for the next server
shared.releaseAll();                       // your plugin's shutdown, after saving your players
```

| Method | What it does |
|---|---|
| `holds(uuid)` | Held here and kept alive: changes may be made. `isHeld(uuid)` is true also while the database is away for a moment (keep your copy, change nothing) |
| `saveNow(uuid, json)` | False when not held, the database is away or another server took it: never give what the data says was given |
| `saveLater(uuid, json)` | API 43: a routine save (an autosave), never waited for. Every player's routine save goes to the database in one transaction about once a second, and only the newest of each player counts, so a database far away keeps up with hundreds of players. Call it while holding the lock you read the data under. `saveNow` drops any routine save of that player still waiting, so an older copy can never land after a reward's save |
| `heldCounts()`, `lastError()` | For status lines (/tempest storage shows them) |

The data is one text (your JSON) per plugin and player, in the table `<prefix>player_data`. Since API 43 the admin chooses in /tempest, Saving what the servers share: `Storage.shares("wallets" | "pass" | "quests" | "jobs" | "leaderboards" | "log")`; `SharedData.open` returns null for a part that is off (another author's plugin id is shared whenever the database is).

**Leaderboards for the whole network (API 43).** With that option on, every board in `Leaderboards` ranks the players of all servers: Core writes the numbers of the players online here once a minute (never a 0, so a server that does not hold a player's data never lowers their number) and reads everyone's back; `Leaderboards.all()` gives each board the larger of this server's number and the network's. A board that starts everyone at 0 again (a new season) calls `Leaderboards.resetShared(id)`. Only boards of data that follows players rank the network: Pass, Quests and Jobs (while shared), and boards a plugin marks with `Leaderboards.networkWide(id)`; a board of data each server keeps for itself (land, crates opened here) stays this server's.

**A part turned off and on again (API 43).** While a part is shared, keep writing your own files too (your file first, then `saveNow`). At the first start with the part off (`Storage.justPaused(part)`), call `SharedData.download(plugin, writer)` before anyone plays: it writes every player's newest record into your files through `writer`. When the part is shared again, read your own file for a player when `shared.useOwnFile(uuid, file)` is true (their file changed here during the pause and nobody wrote their record since), else the shared data; `useOwnFile(uuid, changedHere)` is for a plugin that keeps several players in one file.

**Sealed records (API 43).** While the network seals (/eco network seal on), every record carries an HMAC made with the servers' seal.key. A record changed in the database by hand is never taken: `data` stays null for that player (their progress waits) until an admin accepts it (`/eco network accept`). Keep the class that calls
`SharedData` apart, loaded only when `CoreAPI.runningVersion() >= 42`.


## Outages, backups and snapshots (API version 43)

Core watches the database, makes backups and keeps players' snapshots for rollbacks (/tempest backup, snapshots,
rollback). A plugin can hear about outages, ask for a backup, and put its own data into snapshots.

```java
if (CoreAPI.runningVersion() >= 43) {
    StorageHealth.listen(text -> myDiscord.send(text));     // an outage started or ended, a backup failed
    long ms = StorageHealth.latencyMs();                     // how fast the database answered last
    Backups.now("before the season reset").thenAccept(result -> log(result));   // in the background
}
```

| Method | What it does |
|---|---|
| `StorageHealth.listen(listener)`, `stopListening` | Hears every admin alert: an outage starts or ends (after the admin's "Tell admins after" time), a backup failed, a second server process on the folder. Coins sends them to Discord |
| `StorageHealth.outage()`, `history()`, `latencyMs()` | Whether the database is away now; the last outages (`Outage`: `from`, `to`, `error`, `millis()`); the last answer time |
| `StorageHealth.notice(text)` | Tells admins in game and every listener with the next tick (use it for a fault the admin must act on) |
| `Storage.retryDelay(attempts)` | How long to wait before the next try: 1, 2, 4, 8 s ... up to the admin's longest wait, with a random part. Use it for your own tables so many servers never retry at the same moment |
| `Backups.now(why)` | A backup now, in the background; the future says where it went or why not. `list()`, `folder()`, `last()` |
| `PlayerSnapshots.part(name, part)` | Puts your own per-player data into every snapshot (a `Part`: `capture(player)` gives it as text, `restore(player, data)` writes it back and returns null, or why not). Data kept through `SharedData` is in snapshots already. `removePart(name)` when your plugin stops |
| `PlayerSnapshots.take(player, name, reason, pinned)` | A snapshot now (a pinned one is never deleted); -1 when the player has nothing. `on()`: whether snapshots are kept on this server |
| `PlayerSnapshots.list(player)`, `find(name)`, `pin(player, id, pinned)` | A player's snapshots (`Snapshot`: `id`, `made`, `server`, `reason`, `pinned`, `summary`), a player by name, pinning |
| `PlayerSnapshots.rollback(player, id)` | Null when done, else why not. The player must be offline on every server; a pinned "before rollback" snapshot is taken first, so it can be undone. With tamper seals on, a snapshot changed in the database is refused |

`restore` runs while the player's records are locked: it must not wait for another server. `take`, `list`, `pin` and
`rollback` use the database: call them off the world thread (`PlayerSnapshots.background(work)` runs them on Core's
snapshot thread).
