# Jobs

Paid work with job levels.

## What players read in /guide

The `/guide` pages of this plugin, as a player sees them on a test server (numbers are examples).

### Jobs

- Take a job and get paid for your work: mining ores, cutting trees, harvesting crops, hunting mobs.
- Each job has its own level: the higher it is, the more it pays. /jobs join miner takes one.


## Commands

| Command | Who can use it | What it does |
|---|---|---|
| `/jobs` | Everyone | Jobs: the jobs, your levels, and how to take one |
| `/jobs info` | Everyone | Your jobs and what they paid today |
| `/jobs join` | Everyone | Take a job |
| `/jobs leave` | Everyone | Leave a job |


## Settings

Every setting is changed in game with `/tempest` and saved at once; nothing needs a restart. Amounts of 0 are off unless the setting says otherwise.

### Jobs

`/tempest` → Jobs. Who can change it: `tempest.admin` or `tempest.admin.jobs`.

Players take jobs with /jobs join and are paid for their work, more at higher job levels. What each job pays for is edited on the /jobs page (EDIT tab, for admins).

| Setting | What it does | Values |
|---|---|---|
| Jobs is on | Off: no job pays | On or off |

#### Holding jobs

Players with tempest.jobs.slots.2 (up to .10) hold more.

| Setting | What it does | Values |
|---|---|---|
| Jobs a player holds | How many jobs one player can have at the same time. Players with the permission tempest.jobs.slots.2 (up to .10) can hold that many instead. When all are taken, the /jobs page offers to swap their lowest-level job for the new one. | 1 to 10 |
| Keep the level when leaving | On: a player who leaves a job keeps its level and XP, and has them back when they take it again. Off: leaving starts that job over at level 1. | On or off |
| Minutes before taking a job again | After leaving a job, a player waits this long before taking the same job again. Stops players hopping between jobs for the best pay. 0 lets them take it back at once. | 0 to 43200 |

#### Levels

Job XP for the next level is base x level ^ power.

| Setting | What it does | Values |
|---|---|---|
| Highest job level | No job goes above this level. With Tempest Town, the guild hall setting below can hold levels lower until the town builds it. | 1 to 1000 |
| XP base | The job XP the first levels need. Each level needs base x level ^ power: with 100 and power 1.5, level 10 needs about 3,160 XP. Higher means slower levels. | 1 to 1000000 |
| XP power | 1 is the same XP every level; 1.5 grows | 1 to 3 |
| More pay per level (%) | Level 50 at 2% pays double | 0 to 100 |

#### Paying

Earnings are added up and paid together, held to the caps.

| Setting | What it does | Values |
|---|---|---|
| Pay every (seconds) | Job pay is added up and paid in one go every so many seconds, so the wallet log is not flooded with one line per block. The hourly caps are checked on each payment. | 1 to 60 |
| Most a player earns an hour | 0 is no limit | 0 to 1000000000 |
| Most the server pays an hour | All players together; 0 is no limit | 0 to 1000000000 |
| Town bonus (%) | With Tempest Town, once an unlock gives jobs:town_bonus | 0 to 1000 |
| Pay scale | All job pay times this: 0.5 halves it, 2 doubles it | 0.01 to 100 |
| Highest level without the guild hall | 0 is no such limit; a town unlock (jobs:guild_hall) lifts it | 0 to 1000 |

#### Telling players

| Setting | What it does | Values |
|---|---|---|
| Tell level-ups | On: a chat line ("Miner level 12!") when a job level goes up. The sound is set on its own below. | On or off |
| A chat line for each payment | Off: the money counter shows it | On or off |
| Job XP bar while working | A bar under the money counter for a few seconds after each payment | On or off |
| Job XP bar: seconds shown | How long the job's XP bar stays under the money counter after the last bit of work. | 1 to 60 |
| Level-up sound | The sound a player hears when a job levels up. Pick none for silence. | SFX_Discovery_Z1_Short, None |


### Jobs bonuses

`/tempest` → Jobs bonuses. Who can change it: `tempest.admin` or `tempest.admin.jobsbonuses`.

#### Bonuses

Streaks, felled trees and what the server's contracts want pay more.

| Setting | What it does | Values |
|---|---|---|
| Streak: seconds between blocks | 0 is no streaks | 0 to 60 |
| Streak: more per block (%) | Each block mined or chopped within the streak time of the last one adds this much to its pay, so steady work pays more. Example: 5% makes the 4th block in a row pay 15% more. | 0 to 100 |
| Streak: the most (%) | A streak never adds more than this, however long it runs. | 0 to 500 |
| Streak sound | On: a chime that rises with each block of a streak, so players hear it building. | On or off |
| Streak sound | Plays higher with each block | SFX_Crystal_Hit, None |
| Tool tiers, worst first | Each tier above the first adds a job's tool bonus once | Text |
| Felled tree: more per log (%) | Cutting a whole tree (its last log) pays this much more of what its logs paid, for each log. Example: 2.5% on a 20-log tree adds 50%. | 0 to 100 |
| Felled tree: the most (%) | 0 is no tree bonus | 0 to 500 |
| Felled tree: blocks around a log | How far sideways from a cut log the rest of the tree is looked for. Larger finds wide trees, but can join two trees standing close together. | 1 to 8 |
| Felled tree: blocks above a log | How far up from a cut log the rest of the tree is looked for. Raise it for very tall trees. | 4 to 64 |
| Wanted by contracts (%) | With Tempest Contracts: work bringing in an item on the board pays this much more | 0 to 1000 |
| Builder: minutes a block must stand | A builder is paid for a block only when it is still standing this many minutes after it was placed, so placing and breaking blocks over and over pays nothing. | 1 to 120 |

#### Mob farms

Many kills of one kind of mob in one spot pay less and less.

| Setting | What it does | Values |
|---|---|---|
| Minutes counted | Mob farms: kills of one kind of mob in one spot are counted over this many minutes. Older kills are forgotten. | 1 to 240 |
| Kills that pay in full | Mob farms: this many kills of one kind of mob in one spot pay in full; after that, each kill pays less. | 1 to 10000 |
| Size of a spot (blocks) | Mob farms: kills this close together count as one spot. A farm usually kills in a small area; normal hunting moves around. | 4 to 256 |
| Each kill after pays less (%) | Mob farms: after the kills that pay in full, each further kill in the same spot pays this much less than the one before. | 0 to 100 |
| Never under (%) | Mob farms: a kill never pays less than this share of its normal pay, however many there were. | 0 to 100 |
| Mobs that never pay | Parts of mob names, commas between: Chicken, Dummy | Text |

#### Jobs on this server

Pay tables are edited on the /jobs page (EDIT tab).

| Setting | What it does | Values |
|---|---|---|
| Miner job | On: players can join the Miner job and are paid for its work. Off: players do not see it in /jobs, nobody can join it, and those who hold it are not paid for it until it is on again. | On or off |
| Woodcutter job | On: players can join the Woodcutter job and are paid for its work. Off: players do not see it in /jobs, nobody can join it, and those who hold it are not paid for it until it is on again. | On or off |
| Farmer job | On: players can join the Farmer job and are paid for its work. Off: players do not see it in /jobs, nobody can join it, and those who hold it are not paid for it until it is on again. | On or off |
| Hunter job | On: players can join the Hunter job and are paid for its work. Off: players do not see it in /jobs, nobody can join it, and those who hold it are not paid for it until it is on again. | On or off |
| Crafter job | On: players can join the Crafter job and are paid for its work. Off: players do not see it in /jobs, nobody can join it, and those who hold it are not paid for it until it is on again. | On or off |
| Builder job | On: players can join the Builder job and are paid for its work. Off: players do not see it in /jobs, nobody can join it, and those who hold it are not paid for it until it is on again. | On or off |
| Explorer job | On: players can join the Explorer job and are paid for its work. Off: players do not see it in /jobs, nobody can join it, and those who hold it are not paid for it until it is on again. | On or off |
