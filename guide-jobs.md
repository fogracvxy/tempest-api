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
| Jobs a player holds |  | 1 to 10 |
| Keep the level when leaving |  | On or off |
| Minutes before taking a job again |  | 0 to 43200 |

#### Levels

Job XP for the next level is base x level ^ power.

| Setting | What it does | Values |
|---|---|---|
| Highest job level |  | 1 to 1000 |
| XP base |  | 1 to 1000000 |
| XP power | 1 is the same XP every level; 1.5 grows | 1 to 3 |
| More pay per level (%) | Level 50 at 2% pays double | 0 to 100 |

#### Paying

Earnings are added up and paid together, held to the caps.

| Setting | What it does | Values |
|---|---|---|
| Pay every (seconds) |  | 1 to 60 |
| Most a player earns an hour | 0 is no limit | 0 to 1000000000 |
| Most the server pays an hour | All players together; 0 is no limit | 0 to 1000000000 |
| Town bonus (%) | With Tempest Town, once an unlock gives jobs:town_bonus | 0 to 1000 |
| Pay scale | All job pay times this: 0.5 halves it, 2 doubles it | 0.01 to 100 |
| Highest level without the guild hall | 0 is no such limit; a town unlock (jobs:guild_hall) lifts it | 0 to 1000 |

#### Telling players

| Setting | What it does | Values |
|---|---|---|
| Tell level-ups |  | On or off |
| A chat line for each payment | Off: the money counter shows it | On or off |
| Job XP bar while working | A bar under the money counter for a few seconds after each payment | On or off |
| Job XP bar: seconds shown |  | 1 to 60 |
| Level-up sound |  | SFX_Discovery_Z1_Short, None |


### Jobs bonuses

`/tempest` → Jobs bonuses. Who can change it: `tempest.admin` or `tempest.admin.jobsbonuses`.

#### Bonuses

Streaks, felled trees and what the server's contracts want pay more.

| Setting | What it does | Values |
|---|---|---|
| Streak: seconds between blocks | 0 is no streaks | 0 to 60 |
| Streak: more per block (%) |  | 0 to 100 |
| Streak: the most (%) |  | 0 to 500 |
| Streak sound |  | On or off |
| Streak sound | Plays higher with each block | SFX_Crystal_Hit, None |
| Tool tiers, worst first | Each tier above the first adds a job's tool bonus once | Text |
| Felled tree: more per log (%) |  | 0 to 100 |
| Felled tree: the most (%) | 0 is no tree bonus | 0 to 500 |
| Felled tree: blocks around a log |  | 1 to 8 |
| Felled tree: blocks above a log |  | 4 to 64 |
| Wanted by contracts (%) | With Tempest Contracts: work bringing in an item on the board pays this much more | 0 to 1000 |
| Builder: minutes a block must stand |  | 1 to 120 |

#### Mob farms

Many kills of one kind of mob in one spot pay less and less.

| Setting | What it does | Values |
|---|---|---|
| Minutes counted |  | 1 to 240 |
| Kills that pay in full |  | 1 to 10000 |
| Size of a spot (blocks) |  | 4 to 256 |
| Each kill after pays less (%) |  | 0 to 100 |
| Never under (%) |  | 0 to 100 |
| Mobs that never pay | Parts of mob names, commas between: Chicken, Dummy | Text |

#### Jobs on this server

Pay tables are edited on the /jobs page (EDIT tab).

| Setting | What it does | Values |
|---|---|---|
| Miner job |  | On or off |
| Woodcutter job |  | On or off |
| Farmer job |  | On or off |
| Hunter job |  | On or off |
| Crafter job |  | On or off |
| Builder job |  | On or off |
| Explorer job |  | On or off |
