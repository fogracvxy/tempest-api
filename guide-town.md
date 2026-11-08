# Town

Features the town unlocks, and the mayor.

## What players read in /guide

The `/guide` pages of this plugin, as a player sees them on a test server (numbers are examples).

### Town

- The whole server is one town, and it unlocks new features as it grows. /town shows what is unlocked and what is still needed.

**How things unlock**

- Some unlocks wait for a town building to be finished: donate to it with /projects. Others come on a date or after another unlock.


## Commands

| Command | Who can use it | What it does |
|---|---|---|
| `/mayor` | Everyone | Town: who the mayor is and how to become mayor |
| `/mayor boost` | Everyone | Mayor: give everyone a boost for a while |
| `/mayor clear` | Everyone | Admins: the town has no mayor until the term ends |
| `/mayor fine` | Everyone | Mayor: fine a player who misbehaved |
| `/mayor reward` | Everyone | Mayor: reward a player who helped the town |
| `/mayor set` | Everyone | Admins: make an online player mayor until the term ends |
| `/town` | Everyone | Town: what the town has unlocked and what it still needs |
| `/town lock` | Everyone | Admins: keep an unlock locked |
| `/town unlock` | Everyone | Admins: keep an unlock unlocked |


## Settings

Every setting is changed in game with `/tempest` and saved at once; nothing needs a restart. Amounts of 0 are off unless the setting says otherwise.

### Town

`/tempest` → Town. Who can change it: `tempest.admin` or `tempest.admin.town`.

The town unlocks features as it grows. Make and change unlocks in /town, MANAGE tab; this tab is for all of them.

| Setting | What it does | Values |
|---|---|---|
| Town decides what is unlocked | Off: every feature is on, as if Town were not installed. Unlocks keep their state for when it is on again. | On or off |
| Players see locked unlocks | On: /town shows what is still locked and what it needs. Off: only what the town has. | On or off |

#### Telling players

When something is unlocked or locked.

| Setting | What it does | Values |
|---|---|---|
| Announce in chat | On: everyone gets a chat line when the town unlocks something or it is locked again. It also goes to Discord when that is set up. | On or off |
| Seconds before announcing it again | Against chat floods. Console commands of an unlock always run. | 5 to 86400 |
| Chat tag | Tag | Text |
| Colour of the tag | The colour of the town's tag word in front of its chat messages. | A colour |

#### Mayor

Each term the player who gave most to town projects becomes mayor, with a few small powers you limit here. Only in-game donations count. Players see it all with /mayor; admins can /mayor set or /mayor clear.

| Setting | What it does | Values |
|---|---|---|
| The town has a mayor | On: at the end of each term, the player who gave most to town projects in that term becomes mayor for the next one. Off: no mayor and no mayor powers. | On or off |
| A term lasts (days) | How long one mayor's term is. Donations are counted again from 0 for each term. | 1 to 90 |
| Least given to become mayor | In points: one per coin, and the next setting per item. | 0 to 10000000 |
| Points per item given | Points for each item a player gives to a project. Each coin given is one point. | 0 to 10000 |
| The mayor's boost | For everyone online, started with /mayor boost. | Jobs pay, Mob coins, Ore coins, Quest reward, Shop sell, Daily reward, Pass xp, Shop discount, Contract pay |
| Boost (%) | How much the mayor's boost raises what it boosts. | 1 to 100 |
| For (minutes) | How long one mayor's boost lasts. | 1 to 1440 |
| Boosts each term | How many boosts the mayor can start in one term. 0: the mayor cannot start boosts. | 0 to 20 |
| Reward (coins) | /mayor reward <player>: new coins for a player who helped. Never the mayor, each player once a term. | 0 to 1000000 |
| Rewards each term | How many players the mayor can reward in one term. 0: no rewards. | 0 to 20 |
| Fine (coins) | /mayor fine <player>: never more than they have, never an admin; only the two of them are told. Every use is in the admin log. | 0 to 1000000 |
| Fines each term | How many players the mayor can fine in one term. 0: no fines. | 0 to 20 |

#### Buildings

Tempest Projects is installed: an unlock can wait for a building to be finished.
