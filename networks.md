# Database and server networks

Run several servers with one economy. Money, battle pass, quests and jobs follow players from server to server, through a MySQL or MariaDB database, with no dupes and no losses.

By default every server keeps its own data in files ([Saving and backups](saving-and-backups.html)). With a database,
two or more servers can share it: a player who earns 500 coins on your survival server has them on your lobby and
minigame servers too, with the same battle pass tiers, quests and jobs.

Use a database when:

- two or more servers must share one economy, and players' progress must follow them; or
- a website, a bot or a backup tool must read the data of a server.

A database needs any Tempest Pro plugin on each server. Saving in files, backups and everything on
[Saving and backups](saving-and-backups.html) are free.

## What the servers can share

You choose each part in `/tempest` → Saving. Parts you do not share stay in each server's own files.

| Part | What follows the player |
|---|---|
| Money (shared wallets) | Balance, stats, daily streak, the last changes. Banks stay on each server |
| Battle pass | XP, claimed tiers, premium |
| Quests | Quests, achievements, progress, rerolls |
| Jobs | The jobs the player holds, level and XP of each job, today's pay, explorer places |
| Leaderboards for the whole network | The Pass, Quests and Jobs boards rank the players of all servers |
| One money log for the whole network | Every money change on every server, in one log (`/eco network log`) |

All parts are on when you turn the database on. The money boards (richest, top earners) rank all servers when money
is shared.

These always stay on each server: server quests, the paid places of a quest (first 5 players), the player limit of a
job, shared banks, crates, shops, holograms, the lottery and coinflip rooms.

## No dupes: one owner server at a time

The hard part of a network is that a player can switch servers in a second. If two servers could change the same
wallet, a player could spend the same coins twice, or claim the same reward on each server. The plugins prevent this.

Each player's data has **one owner server at a time**: the server the player is on.

1. When a player joins, that server takes their data from the database.
2. If the previous server still holds it, the new server waits. The player sees "Your wallet is on its way" or a
   similar message. This usually takes less than a second.
3. While the player plays, the owner server saves their data. Before it gives a reward or money, it saves and waits
   until the database has it.
4. When the player leaves, the owner server saves the data and lets it go.

A server that does not own a player's data changes nothing for them and gives no rewards for it. So a reward claimed
on one server can never be claimed again on another.

If a server crashes without letting go, its players' data is free again after 1 minute. Its last save counts.

**Money to a player on another server.** `/pay`, shop sales and other payments go to the owner server, which adds them.
`/pay <name> <amount>` finds the player on any server of the network, and they see the payment on their server. If the
player is offline everywhere, the database is changed directly. Every change carries a code, so it is never counted
twice, even if a server crashes halfway.

## When the database goes down

A database can stop: an outage at the cloud host, a restart, a network problem. The servers keep running and no
player is kicked.

| Time | What players can do | What waits |
|---|---|---|
| The first 30 seconds | Everything | Nothing. The servers keep the changes and save them when the database is back |
| After 30 seconds | Earn money, get pass XP, make quest progress, do jobs (with pay) | Spending money (shops, `/pay`, crates), claiming pass tiers, quest rewards. Players see "The money server cannot be reached right now. Your coins are safe" |
| A player who joins during the outage | Earn money (it is added when the database is back) | Spending, and their pass, quests and jobs: "on its way" |
| When the database is back | Everything | Nothing. Every change goes into the database exactly once |

Spending waits after 30 seconds on purpose: after 60 seconds another server may take over a wallet, and the same coins
must never be spent twice.

If a server restarts while the database is down, it keeps what changed. Coins keeps every money change in
`universe/mods/coins/network-outbox.json`; Pass, Quests and Jobs keep their files up to date and Core remembers which
players' progress the database does not have yet. When the database is back, it all goes in. If another server
changed the same player in the meantime, the database counts.

**Admins are told.** When the database is unreachable for 15 seconds, every admin in game gets a message, and Coins
sends it to your Discord alerts channel (Coins' Discord tab, "Database outages and failed backups"). A second message
comes when it is back. `/tempest storage` shows how fast the database answers and the last 5 outages.

**Retries.** The servers try again after 1, 2, 4, 8 seconds and so on, up to 1 minute, with a random part, so many
servers coming back at once do not all hit the database in the same moment.

## What you need

| Item | Details |
|---|---|
| Database | MySQL 8.4 or newer, or MariaDB 10.11 or newer. Both are tested |
| Driver | `mariadb-java-client-3.5.11.jar`, in the Pro download under `Drivers/`. It works with MySQL too |
| Distance | Best in the same region or data centre as the game servers (under 5 ms). A database farther away works (tested at 80 ms), but players wait longer when they join or switch servers |
| Database user | A user for Tempest only, with rights on its own database only |
| Pro plugin | Any Tempest Pro plugin, on each server |

## Set up

### 1. Make the database and the user

On the database server (change the password):

```sql
CREATE DATABASE tempest CHARACTER SET utf8mb4;
CREATE USER 'tempest'@'%' IDENTIFIED BY 'a-long-random-password';
GRANT SELECT, INSERT, UPDATE, DELETE, CREATE, ALTER, INDEX ON tempest.* TO 'tempest'@'%';
```

If the database runs on the same machine as the game server, use `'tempest'@'localhost'` instead of `'tempest'@'%'`.
A hosting panel can make the database and user for you: give the user rights on its own database only.

Never use the root user. If its password leaks, every database on that machine leaks.

### 2. Set up one server

1. Stop the server.
2. Put `mariadb-java-client-3.5.11.jar` in `universe/mods/atomictempest/drivers/`.
3. Start the server.
4. In `/tempest` → Saving, turn on "Save in a database".
5. Type the address, port, database name, user and password.
6. If the database is on another machine, set "Encrypt the connection" to On.
7. Turn off the parts you do not want shared.
8. Run `/tempest storage`. It should say "Connected" and "Safety check: nothing to fix".
9. Restart the server.

At the first start with the database, Coins backs up the wallet files, then copies the wallets into the database. It
never writes over a wallet that is already there.

### 3. Add more servers

1. Do step 2 on each server, with the same address, database, user, password and table prefix.
2. Give each server its own name ("This server's name"), for example `survival` and `lobby`.
3. Restart each server.
4. Run `/eco network` on one server. "Servers running now" should list them all.

If a player had wallet files on two servers before the network, the first copy in the database counts. Players with a
different amount are listed in `universe/mods/coins/network-differences.csv`, and the backup has the other amount.

Several networks can use one database: give each network its own table prefix.

## Settings

All in `/tempest` → Saving. The settings file is `universe/mods/atomictempest/storage.json`; on Linux only the
server's own user can read it.

| Setting | Default | What it does |
|---|---|---|
| Save in a database (MySQL or MariaDB) | Off | Off: files. On: the database. Needs a Pro plugin to turn on |
| Address | `localhost` | Host name or IP. Several addresses, with commas, for a database with a standby copy |
| Port | 3306 | The database port |
| Database name | `tempest` | |
| User | `tempest` | |
| Password | Empty | Never shown again. Type `env:NAME` to read it from the environment variable `NAME` |
| Encrypt the connection | Off | Off, On, or On with a check of the database's certificate |
| This server's name | Random | A different name on each server |
| Table prefix | `tempest_` | The same on every server of one network |
| What the servers share | All on | See the table above |
| Days the network log keeps | 90 | 1 to 3650 |
| Snapshots kept per player | 16 | 0 to 100. 0 turns snapshots off. Pinned snapshots are always kept |
| Snapshot when a player leaves | On | Off: only snapshots that admins make |
| Minutes between snapshots of a player | 30 | 0 to 1440. A player who hops between servers gets one snapshot in this time |
| Days snapshots are kept | 30 | 0 to 3650. 0: no limit. Pinned snapshots are never deleted |
| Tell admins after (seconds) | 15 | 5 to 600 |
| Tell admins in game | On | Players with `tempest.admin` get outage messages |
| Longest wait between tries (seconds) | 60 | 5 to 300 |

The backup settings are on [Saving and backups](saving-and-backups.html).

The snapshot, backup and outage settings work at once. **The connection and the shared parts need a restart**: the
plugins keep the settings they started with, so data never moves while a server runs.

## Snapshots and rollback

With a database, the plugins keep snapshots of each player: a few seconds after they leave a server, and whenever an
admin runs `/tempest snapshot <player>`. A snapshot holds the player's shared wallet, battle pass, quests and jobs.

To put a player back to an earlier state (after a scam, a bug or a mistake):

1. Run `/tempest snapshots <player>`. The list shows the number, time and reason of each snapshot.
2. Make sure the player is offline on every server.
3. Run `/tempest rollback <player> <number>`.

The player now has that snapshot's data on every server. First, the plugins keep a pinned "before rollback" snapshot,
so a rollback can always be undone: roll back to that one.

A rollback never runs while the player is online anywhere: the plugins never change data a server is using. With
tamper seals on, a snapshot that was changed in the database is refused.

## A database with a standby copy (failover)

- **A cloud database with automatic failover** (for example Amazon RDS Multi-AZ, or DigitalOcean with standby nodes):
  use its one address. The host moves the address to the standby.
- **Your own database servers that always hold the same data** (Galera, or synchronous replication): type every
  address in "Address", with commas: `db1.example.com,db2.example.com`. The plugins use the first one that answers.

Do not use a replica that runs behind the main database (asynchronous replication): players could get old money and
progress from it.

## Tamper seals

Anyone who can write to the database (a leaked password, a staff member with a database panel, a website) could
change numbers in it. Tamper seals catch this. A seal is a code that only a server with the seal key can make, and the
key is in the servers' files, not in the database.

1. Run `/eco network seal on` on one server.
2. If it says "Not yet", copy `universe/mods/coins/seal.key` from this server to each server it names. They read it
   within 10 seconds, no restart needed.
3. Run `/eco network seal on` again. It should say "Seals are on".
4. Copy `seal.key` to each new server before it joins the network.

| What was changed in the database | What happens |
|---|---|
| A wallet | The wallet is frozen: the player can earn but not spend. Admins are told in game and on Discord |
| A money change between servers | It is refused and deleted. Nobody's money changes |
| A pass, quest or job record | It is not used. The player's progress waits. Admins are told |

Then run `/eco network tampered` to see what changed. `/eco network accept <player>` keeps the change (if it was
yours); `/eco network restore <player>` takes back only that change, and money the player earned after it stays.

Keep `seal.key` secret: anyone with it can make seals that fit. A server without the right key waits instead of
writing data nobody can check.

## Turning a part off, or the database off

You can turn one part off, or the whole database, at any time, and on again later. Players lose no progress and
nobody can claim a reward twice.

- **Off:** at the next start, the server copies the newest data of that part from the database into its files (with
  money players got while away), after a backup of the wallet files. Then it runs from files.
- **On again:** players who only played here while it was off keep this server's data. Players another server changed
  in the meantime keep the database's data; they are listed in `universe/mods/coins/network-conflicts.csv`, and the
  backup has this server's amount.

**Remove a server from the network:** run `/eco network download` (it should say "wallets written"), turn off "Save
in a database", and restart.

## Commands

| Command | Permission | What it does |
|---|---|---|
| `/tempest storage` | `tempest.admin` | Tests the connection. Shows the safety check, how fast the database answers, the last outages and the players' data this server holds |
| `/tempest backup` | `tempest.admin` | Makes a backup now and lists the newest backups |
| `/tempest snapshots <player>` | `tempest.admin` | Lists a player's snapshots |
| `/tempest snapshot <player>` | `tempest.admin` | Makes a pinned snapshot of a player now |
| `/tempest rollback <player> <number>` | `tempest.admin` | Puts a player back to a snapshot on all servers (the player must be offline) |
| `/eco network` | `coins.admin.economy` | Whether the shared wallets work, the servers running, and the seal status |
| `/eco network download` | `coins.admin.economy` | Writes all shared wallets into this server's files (after a backup) |
| `/eco network seal on\|off` | `coins.admin.economy` | Turns tamper seals on or off for the whole network |
| `/eco network tampered` | `coins.admin.economy` | Wallets, money changes and records changed outside the game |
| `/eco network accept <player>` | `coins.admin.economy` | Keeps the player's data as it is now, and unfreezes it |
| `/eco network restore <player>` | `coins.admin.economy` | Takes back a wallet change made outside the game, and unfreezes it |
| `/eco network log <player>` | `coins.admin.economy` | The player's last 20 money changes on all servers. A red "NOT SEALED" line was written by hand |

## Security

| Risk | What the plugins do | What you do |
|---|---|---|
| A hostile or hijacked database asks the game server for files | The driver option that allows it is always off. The driver in the Pro download has the security fixes | Use the driver from the newest Pro download. The safety check tells you if yours is old |
| Dangerous options in the address | The address is built from the fields. An advanced url accepts only `jdbc:mariadb://` or `jdbc:mysql://` and a short list of options | Use the fields in the menu |
| A database user with too many rights | The safety check warns about root, FILE, SUPER, ALL PRIVILEGES on all databases and WITH GRANT OPTION | Make the user as shown above |
| Data sent unencrypted over a network | The safety check warns, and says whether the database can encrypt | Set "Encrypt the connection" to On |
| A password in a file | The menu never shows it, and support reports leave it out | Use `env:NAME` and a variable of your hosting panel |
| Numbers changed in the database outside the game | Tamper seals | Turn on the seals and keep `seal.key` secret |
| An old database version | The safety check warns about MariaDB before 10.11 and MySQL before 8.4 | Update the database |
| A snapshot changed to get money through a rollback | Snapshots are sealed. With seals on, a rollback refuses a broken seal | Turn on the seals |
| A backup copied by someone else | Backups never hold the database password. On Linux only the server's user can read them | Keep the backup folder private |

## Tables

All tables start with the table prefix. The plugins make them and add new columns themselves: never change them by
hand, use the commands.

| Table | Plugin | Holds |
|---|---|---|
| `meta` | Coins | The version of the tables and the seal fingerprint |
| `wallets` | Coins | One row per wallet: balance, data, owner server, seal |
| `wallet_changes` | Coins | Money changes on their way to the owner server |
| `servers` | Coins | The servers running, and the fingerprint of their seal key |
| `saves` | Coins | Receipts of saves (kept 1 hour), so a save is never counted twice |
| `tampered` | Coins | Wallets and changes found changed outside the game |
| `ledger` | Coins | The money log of all servers |
| `player_data` | Core | Players' data of Pass, Quests, Jobs and other plugins: owner server, seal |
| `scores` | Core | The numbers of the network leaderboards |
| `snapshots` | Core | Players' snapshots for rollback, with a seal |

## Problems and fixes

| Problem | Cause | Fix |
|---|---|---|
| `/tempest storage` says "Could not connect" | Wrong address, port, user or password | Correct them and run `/tempest storage` again |
| | The database is off, or a firewall blocks the port | Start the database. Open the port for the game servers only |
| | "No database driver" | Put the driver jar in `universe/mods/atomictempest/drivers/` and restart |
| | "the url ... is not allowed" | Remove the option from the url in `storage.json`, or use the fields |
| | An SSL error with encryption on | The database has no encryption. Turn it on there, or set the setting to Off on a private network |
| "Your wallet is on its way" for a long time | The last server stopped without letting go | Wait 1 minute |
| | The database is down | Check `/eco network` and `/tempest storage` |
| Players cannot spend on one server | The database was down for 30 seconds or more | Spending starts again when it is back |
| | The network seals and this server has no `seal.key` | Copy `seal.key` from another server |
| `/pay` says payments to other servers are switched off | "Pay players on other servers" is off | Turn it on in `/tempest` → Coins, Payments |
| A player's pass, quests or jobs do not come | The record was changed outside the game | `/eco network tampered`, then accept or restore |
| `/eco network` says "Another running server is called ..." | Two servers have the same name | Give each server its own name |
| A server rejoins and players' money is old | It left the network without `/eco network download` | Restore the backup in `universe/mods/coins/backup-...`, or set the right amounts |
| Leaderboards show only this server's players | "Leaderboards for the whole network" is off, or the part is not shared | Turn it on in `/tempest` → Saving, then restart |
| Admins get "Another server process is using this server's folder" | The server was started twice on one folder | Stop one of the two |
