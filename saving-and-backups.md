# Saving and backups

How the Tempest plugins keep your server's data safe in files, through crashes, power cuts and full disks, and how to make and restore backups. Free, with no setup.

Every Tempest plugin saves in files under `universe/mods`. This is the default, it needs no setup, and it is safe
for big servers on Windows and Linux. A database (MySQL or MariaDB) is only needed when several servers share one
economy: see [Database and server networks](networks.html).

## How a save stays safe

A save can be cut off at any moment: a crash, a power cut, a host that kills the server. The plugins never write
over the old file directly, so a save is either fully done or not done at all.

1. The new text goes to `name.tmp` and is flushed to the disk.
2. The old file becomes `name.bak`.
3. The new file takes its place in one step.

When a file is read, the plugins use the newest complete copy. A file that cannot be read is kept as
`name.broken-<time>` (so nothing is ever thrown away) and the backup copy is used instead.

| Danger | What the plugins do |
|---|---|
| A crash or power cut in the middle of a save | The old file or the `.bak` copy is still whole. The next start uses it |
| Two saves of the same file at the same moment | Saves and reads of one file never overlap. The newest data always wins |
| Windows: a virus scanner, backup tool or sync program has the file open | The save waits a moment and tries again, instead of failing |
| Linux: the disk loses the new name after a power cut | The folder is synced too, so the new file is really on the disk |
| A server stopping while saving | The save still finishes. A stop cannot cut a file in half |
| A file edited by hand with a mistake | It is kept as `name.broken-<time>`, the last good copy is used, and the error is logged |
| Two server processes on the same folder | Found and named to admins (see below) |

**What a crash can lose.** Rewards, purchases and claims are saved before they are given, so a crash never gives
anything twice. Routine progress is saved every few seconds (money about every 5 seconds, battle pass XP every 10,
job XP every 30), so a crash can lose at most those last seconds of earning.

## Backups

The plugins make a backup of all Tempest data every 12 hours. Backups are free and work with files and with a
database.

Each backup is a zip file in `universe/tempest-backups` with:

- the files of all Tempest plugins (`universe/mods/...`), but no jar files and never the database password;
- with a database: each shared table as text (`database/<table>.jsonl`);
- `about.txt`: when, why, and how to restore.

| Setting (`/tempest` → Saving) | Default | What it does |
|---|---|---|
| Hours between backups | 12 | 0 to 168. 0 turns automatic backups off |
| Backups kept | 14 | 1 to 1000. The oldest Tempest backups are deleted, nothing else |
| Backup folder | `universe/tempest-backups` | A folder in the server folder, or a full path such as `D:/backups/tempest` |
| Back up the database too | On | The shared tables go into each backup |
| Back up the network money log too | Off | The money log of all servers. It can be large |

These settings work at once, with no restart.

**Make a backup now:** `/tempest backup`. It also lists the newest backups.

**A full disk never breaks the server.** A backup is not made if it would leave less than 512 MB free, because the
plugins need room to save. Admins get a message in game (and on Discord, if Coins' Discord alerts are set up). Keep
fewer backups, or move the backup folder to another disk.

**Backups are private.** They never contain the database password. On Linux only the server's own user can read
them. They do contain every player's data and the network's `seal.key`, so keep the backup folder as private as the
server itself.

### Restore a backup

1. Stop the server.
2. Open the zip and copy `files/universe/mods` over the server's `universe/mods`.
3. If you save in a database, type the password again in `/tempest` → Saving (or use `env:NAME`).
4. Start the server.

### Good habits

- Put the backup folder on a different disk, or in a folder that a sync program copies somewhere else.
- Follow the 3-2-1 rule: 3 copies of the data, on 2 kinds of storage, 1 copy in another place.
- With a database, also turn on your database host's own backups (for example automated backups with point-in-time
  recovery). On a network, one server that backs up the database is enough: turn "Back up the database too" off on the
  others.

## One server process per folder

Only one server process may use a server folder. Some hosting panels can start the same server twice after a crash
or a restart, and two processes writing the same files would lose data.

The plugins notice this. The second process names the first one in its log, and every admin gets a message in game
and on Discord: "Another server process is using this server's folder". The message repeats every 10 minutes until
one of the two is stopped. Stop one of them.

## Is file saving enough for a big server?

Yes, for one server. The safe-save steps above are tested on Windows and on Linux, including saves cut off half way
and saves on a server that is stopping. You need a database only when:

- two or more servers must share one economy and players' progress, or
- a website, a bot or another tool must read the data while the server runs.

See [Big servers](big-servers.html) for the load tests with hundreds of players.
