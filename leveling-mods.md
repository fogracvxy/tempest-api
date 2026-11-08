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
