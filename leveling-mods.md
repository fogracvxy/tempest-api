# Leveling mods for server owners

What the Tempest plugins do with Endless Leveling and MMO Skill Tree, alone or together, and where it is set.

Tempest works with **Endless Leveling** (by Airijko) and **MMO Skill Tree** (by Ziggfreed). Nothing of either mod
is shipped: Tempest Core finds them through their public APIs within half a minute of the server starting. Without
them, nothing changes, and no level requirement ever locks a player out because a mod is missing.

## One mod, or both

| Installed | What happens |
|---|---|
| Endless Leveling only | Its level counts for everything below; its prestige, dungeons, wave gates, raids, classes and mob levels work too |
| MMO Skill Tree only | Its skills become one level (total, combat, power level or the highest skill, as you choose); skill and achievement rewards work too |
| Both | You choose whose level counts ("Leveling mod" on the Leveling tab). Only that mod's level-ups pay level-up money, so nothing is paid twice. Endless Leveling's dungeons, gates and raids and MMO Skill Tree's skill and achievement rewards keep working. "Double leveling XP" raises both |

## Where to set it: `/tempest`

Every amount starts at 0, which is off: installing a mod changes nothing until you choose.

| Tab | Shown | What is on it |
|---|---|---|
| Leveling | With either mod | Which mod counts (with "In use: ..."), money per level-up and milestones, the level bonus on other rewards, chat lines, boards, XP boosts |
| Leveling extras | With either mod | Commands at levels, leveling XP from the economy (daily rewards, crates, contracts, the shop, town projects), levels for paying and gambling (stops alts), town bonuses |
| Endless Leveling | Only with Endless Leveling | Prestige (money, a command, a bonus), dungeon, gate and raid money, mob gold by mob level, elite mobs |
| MMO Skill Tree | Only with MMO Skill Tree | Which number is "the level", which skill gets Tempest's XP, money and items per skill level and at milestones, achievement and server-first rewards |
| Pass leveling, PvP leveling, Events leveling | With their plugin | Pass XP for level-ups (and Endless Leveling clears), PvP rewards by level, events that start with raids (Endless Leveling) |

## What players get

| Plugin | With a leveling mod |
|---|---|
| Core | Money for level-ups, commands and items at levels, a bonus on other rewards by level, placeholders and a "Highest levels" board |
| Quests | Goals: reach a level; with Endless Leveling also prestige, dungeons, gates, raids and strong mobs; with MMO Skill Tree reach a skill level, gain skill XP, earn achievements, finish its quests, talk to characters. Rewards can give leveling XP (a goal about one skill gives that skill's XP) |
| Shop, Crates, Quests | Items, crates and quests that need a level (and with Endless Leveling a class) |
| Pass | Pass XP for level-ups; tiers can give leveling XP |
| Jobs | Job work gives leveling XP; a job can need a level |
| Contracts | PvP rewards for underdogs and fines for bullies, by level |
| Events | "Double leveling XP" events; with Endless Leveling community goals for dungeons, gates and raids |

## MMO Skill Tree rewards

| Reward | How it works |
|---|---|
| Money per skill level | Paid for every level gained in a skill, more at higher levels; only above the highest level ever paid, so a reset pays nothing again |
| Skill milestones | A bonus, items (what does not fit goes to `/mail`) and a line for everyone every so many levels |
| Only these skills | Limit the rewards to the skills you list |
| Achievements | Money per achievement and per achievement point, once each |
| Server firsts | A bonus, items and a line for everyone for an achievement only the first player can earn |

Placeholders: `{leveling_level}` (the level that counts), `{mmo_total_level}`, `{mmo_combat_level}`, `{mmo_power}`.

> **Note:** MMO Skill Tree reads a player when they join, every half minute and after every XP gain. A player who has
> just joined may show no level for a moment.

## Every leveling setting

The tabs as a server with both Endless Leveling and MMO Skill Tree shows them; with one mod, only its tabs and the shared ones appear.

### Leveling

`/tempest` → Leveling. Who can change it: `tempest.admin` or `tempest.admin.core`.

#### How leveling works

Tempest reads each player's level from a leveling mod and can pay for it: money for level-ups, commands and items at levels, a bonus on other rewards. Endless Leveling, RPG Leveling and MMO Skill Tree all work, alone or together, and so does any mod that links itself to Tempest. What only one of them has is on its own tab, shown only while it is installed. With several installed, "Leveling mod" picks whose level counts for level-up money, "needs level", the Pass and the board. Every amount starts at 0, which is off.

| Setting | What it does | Values |
|---|---|---|
| Leveling mod | Whose level counts. Automatic: a linked mod, else Endless Leveling, RPG Leveling, MMO Skill Tree | Automatic, Endless Leveling, RPG Leveling, MMO Skill Tree |

#### Money for level-ups

Paid each time a player's level goes up. Example: 50 a level, 2 more for each level reached and 500 every 10 levels: going from level 9 to 10 pays 570 (50 + 20 + 500).

| Setting | What it does | Values |
|---|---|---|
| Money per level-up | Paid for every level a player gains; 0 is off | 0 to 1000000000 |
| More for each level reached | Level 30 pays 30 times this on top, so higher levels pay more; 0 is off | 0 to 1000000000 |
| Milestone every | A bonus at levels 10, 20, 30... with 10; 0 is off | 0 to 10000 |
| Milestone bonus | Paid on top at each milestone level | 0 to 1000000000 |

#### Level bonus on other rewards

A higher level raises the rewards ticked below, as rank perks do. Example: 2% for every 10 levels makes a level 40 player earn 8% more.

| Setting | What it does | Values |
|---|---|---|
| Bonus per 10 levels (%) | 0 is off | 0 to 1000 |
| Highest bonus (%) | Never more than this, prestige bonus included | 0 to 1000 |
| Raises mob gold | On: the level bonus also raises the coins mobs drop (Tempest Economy). | On or off |
| Raises quest rewards | On: the level bonus also raises the money from quests and achievements (Tempest Quests). | On or off |
| Raises daily rewards | On: the level bonus also raises daily rewards. | On or off |
| Raises battle pass XP | On: the level bonus also raises the XP players get for the battle pass (Tempest Pass). | On or off |
| Raises what the shop pays | Never above the shop's own buying price | On or off |

#### Chat, boards and XP boosts

What players see, and the "double leveling XP" of Tempest Events, rank perks and boosters (with both mods installed it raises both mods' XP).

| Setting | What it does | Values |
|---|---|---|
| Tell players what they got | A chat line with the money for each level-up, skill level or clear | On or off |
| Leveling leaderboards | Highest levels; with Endless Leveling also prestige, dungeons, gates | On or off |
| Leveling XP boosts | Off: events, perks and boosters never add leveling XP | On or off |
| Highest Leveling XP boost (%) | All boosts together never give more than this: 100 is double XP | 0 to 1000 |


### Leveling extras

`/tempest` → Leveling extras. Who can change it: `tempest.admin` or `tempest.admin.core`.

More rewards for levels, with any leveling mod (Endless Leveling, RPG Leveling or MMO Skill Tree). Money for level-ups is on the Leveling tab.

#### Commands at levels

Run by the server console when a player reaches a level: ranks, kits, titles from other plugins. {player}, {uuid} and {level} are filled in. Example: level 25, rank give {player} adept. Level 0 turns a reward off. Only a full admin (tempest.admin) can change the commands.

| Setting | What it does | Values |
|---|---|---|
| Reward 1 at level | The level at which the command below runs. 0: this reward is off. | 0 to 100000 |
| Reward 1 command | Run by the server console when a player reaches the level above, such as: rank give {player} adept. {player}, {uuid} and {level} are filled in. | Text |
| Reward 2 at level | The level at which the command below runs. 0: this reward is off. | 0 to 100000 |
| Reward 2 command | Run by the server console when a player reaches the level above, such as: rank give {player} adept. {player}, {uuid} and {level} are filled in. | Text |
| Reward 3 at level | The level at which the command below runs. 0: this reward is off. | 0 to 100000 |
| Reward 3 command | Run by the server console when a player reaches the level above, such as: rank give {player} adept. {player}, {uuid} and {level} are filled in. | Text |
| Reward 4 at level | The level at which the command below runs. 0: this reward is off. | 0 to 100000 |
| Reward 4 command | Run by the server console when a player reaches the level above, such as: rank give {player} adept. {player}, {uuid} and {level} are filled in. | Text |
| Reward 5 at level | The level at which the command below runs. 0: this reward is off. | 0 to 100000 |
| Reward 5 command | Run by the server console when a player reaches the level above, such as: rank give {player} adept. {player}, {uuid} and {level} are filled in. | Text |

#### Leveling XP from the economy

Leveling XP for what players do in the Tempest plugins, with the leveling mod's own bonuses. With MMO Skill Tree it goes into the skill chosen on its tab. 0 turns one off.

| Setting | What it does | Values |
|---|---|---|
| XP per daily reward | Leveling XP each time a player claims their daily reward. | 0 to 1000000 |
| XP per crate opened | Leveling XP for each crate a player opens. | 0 to 1000000 |
| XP per contract delivery | Leveling XP for each delivery to a contract or a server order (Tempest Contracts), however many items it holds. | 0 to 1000000 |
| XP per 100 the shop pays | Selling 500 worth at 2 gives 10 XP | 0 to 1000000 |
| XP per item given to a town project | Tempest Projects: building the town levels you up | 0 to 1000000 |
| XP per 100 coins given to a project | Leveling XP for every 100 coins a player gives to a town project (Tempest Projects). 250 coins at 2 gives 5 XP. | 0 to 1000000 |

#### Stopping alts

New characters made only to feed money to a main cannot pay or gamble until they reach a level.

| Setting | What it does | Values |
|---|---|---|
| Pay other players from level | 0 is off | 0 to 100000 |
| Games of chance from level | Slots, lottery and coinflip; 0 is off | 0 to 100000 |

#### Mob gold by mob level

Tempest Economy's mob gold grows with the mob's level, with a leveling mod that gives mobs levels (Endless Leveling, RPG Leveling). Stronger mobs already have more health and gold follows health, so start low. Nothing changes with a mod without mob levels.

| Setting | What it does | Values |
|---|---|---|
| More gold per mob level (%) | A level 20 mob at 5% drops double; 0 is off | 0 to 1000 |
| Most extra gold (%) | However high the mob's level | 0 to 10000 |
| No gold from mobs this far below | Levels below the killer: stops farming weak mobs; 0 is off | 0 to 10000 |

#### Elite mobs

Mobs from a level on are elite: more gold, and the server hears who defeated one.

| Setting | What it does | Values |
|---|---|---|
| Elite from mob level | 0 is off | 0 to 100000 |
| Elite gold bonus (%) | On top of the gold per mob level | 0 to 10000 |
| Tell everyone about elite kills | On: when a player defeats an elite mob, the whole server reads a line such as "Steve defeated an elite level 60 Trork Warlord!". Nothing happens while "Elite from mob level" is 0. | On or off |

#### Town bonuses

With Tempest Town: these work only once a town unlock gives them (its editor, Features). Every other leveling feature can be made to wait for an unlock too.

| Setting | What it does | Values |
|---|---|---|
| Town XP bonus (%) | More leveling XP for everyone, e.g. once Training Grounds are built | 0 to 1000 |
| Town clear money bonus (%) | More money for Endless Leveling dungeon, gate and raid clears | 0 to 10000 |
| Town mob gold bonus (%) | More gold from every mob | 0 to 1000 |


### Endless Leveling

`/tempest` → Endless Leveling. Who can change it: `tempest.admin` or `tempest.admin.core`.

What only Endless Leveling has. This tab shows only while it is installed (also next to MMO Skill Tree); level-up money and everything else about levels is on the Leveling tab. Every amount starts at 0, which is off.

#### Prestige

Rewards each time a player prestiges. Paid while Endless Leveling gives the level (the Leveling tab's choice).

| Setting | What it does | Values |
|---|---|---|
| Money per prestige | 0 is off | 0 to 1000000000 |
| Command at each prestige | Run by the console; {player}, {uuid}, {prestige} filled in; empty is off Run by the server console each time a player prestiges, such as: rank give {player} veteran. Only a full admin (tempest.admin) can change it, as it runs with every power. | Text |
| Bonus per prestige (%) | 10 makes prestige 3 earn 30% more (rewards ticked on Leveling); 0 is off | 0 to 1000 |

#### Dungeons, gates and raids

Paid when Endless Leveling announces a clear, to every player who was in it. Example: 100 a dungeon and a 20% rank bonus pay 200 for an S rank dungeon.

| Setting | What it does | Values |
|---|---|---|
| Money per dungeon clear | Paid to every player in a dungeon when it is cleared; 0 is off | 0 to 1000000000 |
| Money per wave gate clear | Paid to everyone who fought in a cleared wave gate; 0 is off | 0 to 1000000000 |
| Gate money per wave | On top, for every wave the gate lasted | 0 to 1000000000 |
| Fewest waves for gate money | A gate given up sooner pays nothing; 0 pays every gate | 0 to 1000 |
| Rank bonus (%) | More for each rank above E, for dungeons and gates: 20 makes S pay double | 0 to 1000 |
| Money per raid clear | Paid to a player who finishes a raid; 0 is off | 0 to 1000000000 |
| Raid money per wave | On top, for every raid wave finished | 0 to 1000000000 |


### MMO Skill Tree

`/tempest` → MMO Skill Tree. Who can change it: `tempest.admin` or `tempest.admin.core`.

What only MMO Skill Tree has: its skills and achievements. This tab shows only while it is installed (also next to Endless Leveling); level-up money and everything else about levels is on the Leveling tab. Every amount starts at 0, which is off.

#### One level from many skills

Tempest needs one level per player (for level-up money, "needs level", the Pass, the level board). Choose which of MMO Skill Tree's numbers that is. Used while MMO Skill Tree gives the level (the Leveling tab's "Leveling mod").

| Setting | What it does | Values |
|---|---|---|
| The level is | Total, combat or power level (1-200) | Total level, Combat level, Power level (1-200), Highest skill |
| Leveling XP goes to | Gets XP from quests, crates and the Pass | Last skill used |

#### Skill levels

Money for each level of a skill. Example: 20 a level, 1 more for each level reached and 300 every 10 levels: Mining 9 to 10 pays 330 (20 + 10 + 300). A skill pays only above the highest level ever paid for it: a reset pays nothing again.

| Setting | What it does | Values |
|---|---|---|
| Money per skill level | Paid for every level gained in any skill; 0 is off | 0 to 1000000000 |
| More for each level reached | Mining 30 pays 30 times this on top, so higher levels pay more; 0 is off | 0 to 1000000000 |
| Skill milestone every | Levels 10, 20, 30... with 10; 0 is no milestones | 0 to 10000 |
| Milestone bonus | Paid on top at each milestone | 0 to 1000000000 |
| Milestone items | e.g. Ingredient_Bar_Iron x16, Food_Bread x5; what does not fit goes to /mail | Text |
| Tell everyone at milestones | "Steve reached Mining level 50!" for the whole server | On or off |
| Only these skills | Skills that pay, by id or name, with commas (Mining, Swords); blank is every skill | Text |

#### Achievements

Money when a player earns an MMO Skill Tree achievement, once per achievement. Server firsts (achievements only the first player can earn) can pay more.

| Setting | What it does | Values |
|---|---|---|
| Money per achievement | 0 is off | 0 to 1000000000 |
| Money per achievement point | Times the achievement's points: harder achievements pay more; 0 is off | 0 to 1000000000 |
| Server first bonus | On top, for a server first; 0 is off | 0 to 1000000000 |
| Server first items | Given for a server first, e.g. Ingredient_Bar_Gold x10 | Text |
| Tell everyone about server firsts | "Steve is the first on the server to earn Dragon Slayer!" | On or off |


### Pass leveling

`/tempest` → Pass leveling. Who can change it: `tempest.admin` or `tempest.admin.pass`.

#### Pass XP from leveling

Battle pass XP for what players do in the server's leveling mod (Endless Leveling, RPG Leveling or MMO Skill Tree; dungeons, gates and raids only with Endless Leveling). 0 turns one off.

| Setting | What it does | Values |
|---|---|---|
| XP per level-up | For every level a player gains, in the mod chosen on Core's Leveling tab | 0 to 1000000 |
| XP per prestige | Endless Leveling only | 0 to 1000000 |
| XP per dungeon clear | Endless Leveling only: to every player in the dungeon | 0 to 1000000 |
| XP per wave gate clear | Endless Leveling only: to everyone who fought in the gate | 0 to 1000000 |
| XP per raid clear | Endless Leveling only | 0 to 1000000 |
| Most of this XP a day | All of the above together, per player; 0 is no limit | 0 to 1000000 |


### Jobs leveling

`/tempest` → Jobs leveling. Who can change it: `tempest.admin` or `tempest.admin.jobsleveling`.

#### Jobs with a leveling mod

Work gives leveling XP too (Endless Leveling, or MMO Skill Tree in the skill chosen on its tab); with Endless Leveling, stronger mobs also pay hunters more.

| Setting | What it does | Values |
|---|---|---|
| Leveling XP per job XP | 0.5 gives 5 leveling XP for 10 job XP; 0 is off | 0 to 1000 |
| Hunter pay per mob level (%) | Endless Leveling only: a level 20 mob at 2% pays 40% more; 0 is off | 0 to 100 |


### PvP leveling

`/tempest` → PvP leveling. Who can change it: `tempest.admin` or `tempest.admin.pvpleveling`.

#### PvP with levels

Levels from the server's leveling mod (Endless Leveling, RPG Leveling or MMO Skill Tree) decide what a PvP kill is worth. Everything here is off at 0.

#### Bounties

Who may claim a bounty.

| Setting | What it does | Values |
|---|---|---|
| Bounty level gap | A hunter this many levels above the target cannot claim it: no bounty farming on new players | 0 to 10000 |
| No bounties between party members | Endless Leveling parties: friends cannot claim bounties on each other | On or off |

#### Underdog reward

The server pays a player who defeats someone of a higher level. Party members never count.

| Setting | What it does | Values |
|---|---|---|
| Reward per level above | For each level the defeated player was higher | 0 to 1000000000 |
| Lowest level gap | Fewer levels between them pay nothing | 0 to 10000 |
| Most for one kill | 0 is no limit | 0 to 1000000000 |
| Hours before the same pair pays again | Stops two players trading kills for money | 0 to 720 |
| Most a player gets a day | All underdog rewards together; 0 is no limit | 0 to 1000000000 |

#### Bully fine

A player who defeats someone far below their level pays them. The money moves from the killer to the victim, never made.

| Setting | What it does | Values |
|---|---|---|
| Fine per level below | For each level the victim was lower | 0 to 1000000000 |
| Lowest level gap for a fine | The killer pays only when the victim was at least this many levels lower. 10: a level 30 player who kills a level 20 pays; one who kills a level 25 does not. The fine counts every level of the gap. | 0 to 10000 |
| Highest fine | Never more than the killer has; 0 is no limit | 0 to 1000000000 |


### Events leveling

`/tempest` → Events leveling. Who can change it: `tempest.admin` or `tempest.admin.eventsleveling`.

#### Events with Endless Leveling

Only with Endless Leveling: community goals for dungeons, wave gates and raids are in each event's editor (/events, Manage). Here: an event that starts by itself with every raid.

| Setting | What it does | Values |
|---|---|---|
| Start an event when a raid starts | Only when no other event is on. Events must be switched on. | On or off |
| Event it starts | The event that starts by itself when an Endless Leveling raid starts. Make and change events in /events, Manage. | Gold Rush, Monster Hunt, XP Frenzy, Market Day, Lucky Hour |
| For how long (minutes) | 0: the event's own length | 0 to 10080 |
