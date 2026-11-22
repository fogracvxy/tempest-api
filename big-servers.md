# Big servers

How the Tempest plugins hold up with hundreds of players, what was tested, and how to set up a big server or network.

The Tempest plugins are built for big servers: hundreds of players earning, spending, paying each other, levelling
the battle pass, doing quests and jobs, and switching servers, all at once.

## What was tested

Each test runs real Hytale servers with the Tempest plugins, two servers sharing one database, and simulated players
that join and play the whole time. Every player does something every 2 seconds: earns, spends, pays a player on the
same or the other server, gets pass XP, does a quest step or job work. Some keep switching servers. At the end, every
player's money, pass XP, quest and job pay is compared with everything both servers recorded: one coin or XP point too
many or too few would be a dupe or a loss.

| Test | Result |
|---|---|
| 100 players on two servers, 5 minutes, 144 server switches | About 13,000 money actions. Every coin and XP point adds up. Actions take 0.1 ms on average. No lag from the plugins. 0.8-0.9 GB of memory per server |
| 300 players, 150 per server, 5 minutes | All 300 joined in 7 seconds. About 38,000 money actions plus 6,600 pass XP, 2,200 quest and 2,200 job actions. Every coin and XP point adds up. Actions 0.1 ms on average, the slowest 24 ms. No lag from the plugins. 284 database queries a second |
| A database 80 ms away (another data centre) | Every coin and XP point adds up. Switching servers takes about 8 seconds |
| The database goes down while players play | Nobody is kicked. Earning goes on; spending waits; every change arrives once when it is back |
| A shared part turned off and on again while players play on both servers | No dupes, no lost progress, no reward claimed twice |
| A player rolled back on a network | The right data on every server; the rollback can be undone |
| MySQL 8.4 and MariaDB | Both pass every test |
| Windows and Linux | Saving passes on both |

## How it stays fast

- **Nothing waits on the game thread.** Earning money, pass XP and quest progress never wait for the disk or the
  database, so the world never stutters because of a save.
- **Saves are grouped.** On a network, routine saves of all players go to the database together, about once a second,
  in one go. 300 players cost about as much as a few.
- **Only rewards wait.** Before a reward or money is given, its save is confirmed. This is what makes dupes
  impossible.
- **Files are saved safely and in the background.** See [Saving and backups](saving-and-backups.html).

## Setting up a big server

**One server:** files are enough. Turn on backups to another disk (they are on by default, every 12 hours).

**A network:**

- Put the database in the same region or data centre as the game servers. Under 5 ms is best. A database far away
  works, but players wait longer when they join or switch servers, and finishing a quest can wait up to 2 seconds.
- Use MySQL 8.4+ or MariaDB 10.11+, with a database user that has rights on the Tempest database only.
- For a database with a standby copy, see [failover](networks.html#a-database-with-a-standby-copy-failover).
- Let one server back up the database; turn "Back up the database too" off on the others, and turn on your database
  host's own backups.
- Set up Coins' Discord alerts, so you hear about database outages and failed backups at once.
- Turn on [tamper seals](networks.html#tamper-seals) if anyone besides the servers can write to the database.

## Known limits

With a database far away (tens of milliseconds), two things are slower. Neither loses anything; players only wait.

| Situation | What players notice |
|---|---|
| Many players joining in the same second (after a restart) | Their wallet and progress can take several seconds to arrive ("on its way") |
| Finishing a quest | Up to 2 seconds before the reward is given |

A database in the same region as the game servers has neither. Both are being improved.
