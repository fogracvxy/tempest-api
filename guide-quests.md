# Quests

Quests, achievements, ranks, the daily sweep and server quests.

## What players read in /guide

The `/guide` pages of this plugin, as a player sees them on a test server (numbers are examples).

### Quests and achievements


**Achievements**

- Goals for the whole time you play, like mining 100 ores or hitting the jackpot. They count by themselves, and each pays a reward once. Some are secret until you find them.

**Quests**

- Pick quests from the quest board in /quests: you can do 3 at a time. Daily and weekly quests come back when they reset, so you can earn them again.

**Quest journal**

- Every finished quest and achievement gives quest points: your rank grows from Wanderer to Legend, and higher ranks earn more from quests. Finish 3 daily quests in a day for the daily sweep bonus, bigger for every day in a row. The featured quest of the day pays more.

**Server quests**

- Server quests count everyone's progress together. When the target is reached, everyone who helped enough is paid, and the top helper gets more.

**Progress**

- The bars show how far along you are. When you finish, the reward goes straight into your wallet. Your first quest also shows under your coin counter.


## Commands

| Command | Who can use it | What it does |
|---|---|---|
| `/achievements` (/achievement, /ach) | Everyone | Your achievements and how close you are |
| `/quests` (/quest) | Everyone | Your quests and the quest board |
| `/questtrigger` | `quests.admin` | Count a custom quest trigger for a player |


## Settings

Every setting is changed in game with `/tempest` and saved at once; nothing needs a restart. Amounts of 0 are off unless the setting says otherwise.

### Quests

`/tempest` → Quests. Who can change it: `tempest.admin` or `tempest.admin.quests`.

#### Making achievements and quests

Open /quests and use the Edit (admin) tab. Admins need the permission quests.admin.

| Setting | What it does | Values |
|---|---|---|
| Players choose their quests | From the quest board. Off: every quest counts at once. | On or off |
| Most quests at once | While players choose their quests. | 1 to 50 |
| Play time only while moving | Standing still (AFK) does not count towards play time goals. | On or off |

#### Quest journal

Ranks, the daily sweep, the featured quest and server quests: what brings players back each day.

| Setting | What it does | Values |
|---|---|---|
| Quest points and ranks | Every finished goal gives points; Wanderer, Adventurer, Pathfinder, Hero, Champion and Legend. A new rank is told to everyone. | On or off |
| Ranks raise quest rewards | From +2% for Adventurers to +10% for Legends. | On or off |
| Daily sweep: daily quests to finish | Finish this many of the day's daily quests for a bonus. 0 = off. | 0 to 20 |
| Daily sweep bonus | Extra money once a day for a player who finishes enough of that day's daily quests (the number is set above). 0: no sweep bonus. | 0 to 1000000000 |
| Streak: more each day in a row (%) | The sweep bonus grows for each day in a row a player earns it. 10: day 2 pays 10% more, day 3 20% more, and so on. | 0 to 500 |
| Streak grows for (days) | After this many days in a row the sweep bonus stops growing and stays at its highest. | 1 to 60 |
| Featured quest pays (times) | One daily quest a day, the same for everyone. 1 = no featured quest. | 1 to 10 |
| Server quests: top helper gets more (%) | When the server finishes a server quest together, the player who did the most gets this much more than the others. | 0 to 1000 |
| Server quests: least share to be paid (%) | Of the target. Players who did less are thanked but not paid, so nobody earns by doing one thing. | 0 to 100 |

#### Achievements

| Setting | What it does | Values |
|---|---|---|
| Announce unlocks to everyone | Each goal can override this in the editor. Secret goals stay secret. | On or off |

#### On screen

| Setting | What it does | Values |
|---|---|---|
| Big title when something is done | "QUEST COMPLETE" or "ACHIEVEMENT UNLOCKED". | On or off |
| Pop-up with the icon | A small notice at the side of the screen when something is done. | On or off |
| Sounds | A short jingle when something is done, and coins when it pays. | On or off |
| Quest under the coin counter | The player's first quest and how far along it is. | On or off |
| Chat tag | Tag | Text |
| Colour | The colour of the quests' tag word in front of their chat messages. | A colour |

#### Free edition

The Pro edition adds: any number of achievements and quests, a daily rotation: a few daily quests a day, picked from all of yours.
