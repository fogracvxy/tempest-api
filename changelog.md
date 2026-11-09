# Changelog

Every release of the Tempest plugins, newest first.

## 2026-11-09

### Core 1.6.0

- settings rows show only when they mean something, live as the admin changes them (API 22)
- mob gold by level and elite mobs work with RPG Leveling; texts name all three leveling mods
- a rank perk "Leveling XP (%)" raises leveling XP in any leveling mod
- RPG Leveling as a leveling mod, class tiers, and linked mods in the admin's choice (API 21)
- console commands and granted permissions need tempest.admin (#193)
- (?) icon with a longer explanation on /tempest settings rows
- leveling settings split by mod, with clearer explanations
- Skills, MMO Skill Tree's skills for every plugin (API 19)
- MMO Skill Tree skill-level and achievement rewards; both leveling mods work side by side
- works with MMO Skill Tree as a leveling mod, next to Endless Leveling

### Holograms 1.2.2

- console commands and granted permissions need tempest.admin (#193)

### Coins 2.4.1

- explanations behind the (?) for every setting that had none

### Lottery 1.1.3

- explanations behind the (?) for every setting that had none

### SlotMachine 1.2.3

- explanations behind the (?) for every setting that had none

### Shop 1.5.1

- explanations behind the (?) for every setting that had none

### Quests 1.5.0

- mob gold by level and elite mobs work with RPG Leveling; texts name all three leveling mods
- explanations behind the (?) for every setting that had none
- goals for MMO Skill Tree skills, achievements, quests and NPC talks
- leveling settings name Endless Leveling or MMO Skill Tree, whichever applies

### Crates 1.4.1

- console commands and granted permissions need tempest.admin (#193)
- explanations behind the (?) for every setting that had none

### Coinflip 1.0.4

- explanations behind the (?) for every setting that had none
- StopTest's stuck refund ignores interrupts, so it guards the stop fix

### Pass 1.3.0

- settings rows show only when they mean something, live as the admin changes them (API 22)
- mob gold by level and elite mobs work with RPG Leveling; texts name all three leveling mods
- explanations behind the (?) for every setting that had none
- leveling settings say which mod they need
- leveling settings name Endless Leveling or MMO Skill Tree, whichever applies

### Events 1.2.1

- explanations behind the (?) for every setting that had none
- leveling settings say which mod they need
- leveling settings name Endless Leveling or MMO Skill Tree, whichever applies

### Contracts 1.3.1

- mob gold by level and elite mobs work with RPG Leveling; texts name all three leveling mods
- console commands and granted permissions need tempest.admin (#193)
- explanations behind the (?) for every setting that had none
- leveling settings say which mod they need
- leveling settings name Endless Leveling or MMO Skill Tree, whichever applies

### Projects 1.1.1

- explanations behind the (?) for every setting that had none

### Town 1.2.2

- console commands and granted permissions need tempest.admin (#193)
- explanations behind the (?) for every setting that had none

### Jobs 1.1.1

- mob gold by level and elite mobs work with RPG Leveling; texts name all three leveling mods
- the pay table's money, XP and X button in one line
- the level reward rows in the job editor fit their hints
- explanations behind the (?) for every setting that had none
- leveling settings say which mod they need
- leveling settings name Endless Leveling or MMO Skill Tree, whichever applies

### Trade 1.0.2

- explanations behind the (?) for every setting that had none

## 2026-11-08

### Core 1.5.0

- Smaller fixes and improvements.

### Quests 1.4.0

- goals for events, server orders, town projects, coinflips, trades and the mayor
- rewards can give items and run a server command

### Pass 1.2.1

- only a full Tempest admin can set command rewards

### Events 1.2.0

- item prizes, and only a full Tempest admin sets console commands

### Projects 1.1.0

- finish rewards can give items; only a full admin adds finish commands

### Town 1.2.1

- Smaller fixes and improvements.

### Jobs 1.1.0

- a job can have a player limit ("only 2 miners"), set on the EDIT tab
- level rewards can give items

### Trade 1.0.1

- Smaller fixes and improvements.

## 2026-11-07

### Holograms 1.2.1

- works on Hytale 0.8.0-pre.4 (#189)

### Shop 1.5.0

- prices that move with supply and demand (Pro) (#38)

### Quests 1.3.1

- selling back what you bought at the shop no longer counts as earning

### Town 1.2.0

- a mayor chosen by donations to town projects (#192)

### Trade 1.0.0

- First release.

## 2026-11-06

### Core 1.4.0

- texts that were cut off now fit, in every language: wider pages and tabs, the Projects plan button on its own row, shorter labels
- Italian as an eighth language (#158)
- HudLines.progress with a display time (API 17)
- Demand and a progress bar under the money counter (API 17)
- Endless Leveling features a town can unlock, town bonuses, leveling XP for town projects, server-wide level, clear and prestige counts
- leveling extras tab with level reward commands, leveling XP from the economy, alt protection for paying and games, elite mobs
- Endless Leveling XP, class, race, mob level and party readings, raid starts, requirements, mob gold and prestige bonus, four boards, eleven placeholders, tabs shown only with a leveling mod
- Leveling tab settings for level-up scaling, milestones, rank bonus, gate and raid waves, chat lines, board and boost switches
- Endless Leveling dungeon, gate and raid clears, money for them, level leaderboard, Leveling XP boost
- player levels from Endless Leveling, with money per level-up and prestige (API 14)
- a plugin's shutdown never waits long for a stuck timer
- race tests and a test for each fixed security finding
- /tempest doctor finds ways players could make money from nothing (#144)
- tell admins when a newer version of a Tempest plugin is out (#22)
- a What's new note for admins after an update, from the release notes (#18)
- config versions in JsonFiles, renamed settings keep the server's value (#24)
- Server info, the server's own rules and info page, and /serverinfo (#156)
- personal boosters for one player, with /booster (#44)
- Reset to defaults on each /tempest tab (#120)

### Holograms 1.2.0

- texts that were cut off now fit, in every language: wider pages and tabs, the Projects plan button on its own row, shorter labels
- Italian as an eighth language (#158)
- click boxes use the game's own open-page interaction, which its client offers F for
- clickable holograms show the F prompt
- the engine stops without a lock
- shown only at set times of the game's day (#163)

### Coins 2.4.0

- texts that were cut off now fit, in every language: wider pages and tabs, the Projects plan button on its own row, shorter labels
- Italian as an eighth language (#158)
- elite mob kills are announced
- mob gold follows Endless Leveling's mob levels
- the last save at shutdown waits for a running autosave
- race tests and a test for each fixed security finding
- /tempest doctor finds ways players could make money from nothing (#144)
- wallet history with All, Income and Expenses, a total and pages (#84)

### Lottery 1.1.2

- Italian as an eighth language (#158)
- race tests and a test for each fixed security finding
- /tempest doctor finds ways players could make money from nothing (#144)

### SlotMachine 1.2.2

- Italian as an eighth language (#158)
- race tests and a test for each fixed security finding
- default slots and Lucky Crate no longer pay back more than they take
- /tempest doctor finds ways players could make money from nothing (#144)

### Shop 1.4.0

- texts that were cut off now fit, in every language: wider pages and tabs, the Projects plan button on its own row, shorter labels
- Italian as an eighth language (#158)
- items can need a level or a class (Endless Leveling)
- the stall shelves stop without a lock
- race tests and a test for each fixed security finding
- /tempest doctor finds ways players could make money from nothing (#144)
- any block as a shop with /shop link, vending machines and counters from other mods (#178)

### Quests 1.3.0

- texts that were cut off now fit, in every language: wider pages and tabs, the Projects plan button on its own row, shorter labels
- Italian as an eighth language (#158)
- goals to fell whole trees and find new places (Tempest Jobs)
- goals to reach a job level and earn from jobs, offered with Tempest Jobs
- quests can need a level or a class, strong mob goals, leveling options hidden without Endless Leveling
- dungeon, wave gate and raid goals, and leveling XP as a reward
- goals to reach a level and to prestige, from Endless Leveling
- the last save at shutdown waits for the timer
- the daily sweep is saved before its bonus is paid
- default slots and Lucky Crate no longer pay back more than they take
- /tempest doctor finds ways players could make money from nothing (#144)
- quest chains, a goal opens once the one it names is done (Pro, #28)
- pass XP can be switched off per quest (#135)
- paid places, only the first players to finish a quest are paid (#113)
- lets go of saved progress of players who are away (#94)

### Crates 1.4.0

- Italian as an eighth language (#158)
- crates can need a level or a class (Endless Leveling)
- a reload during a key party no longer freezes the server
- race tests and a test for each fixed security finding
- default slots and Lucky Crate no longer pay back more than they take
- /tempest doctor finds ways players could make money from nothing (#144)
- opening limits, a cooldown per crate and prizes a player wins only so often (Pro, #34)
- an opening log and /crates log <player> for admins (#35)

### Coinflip 1.0.3

- Italian as an eighth language (#158)
- a reload while a room is refunded no longer freezes the server
- a test that a flip is saved as finished before the winner is paid

### Pass 1.2.0

- texts that were cut off now fit, in every language: wider pages and tabs, the Projects plan button on its own row, shorter labels
- Italian as an eighth language (#158)
- XP for every job level gained
- Pass XP from leveling, raid events and PvP level rewards can be town unlocks
- leveling tab and reward kind shown only with Endless Leveling
- its own leveling tab with Pass XP per level-up, prestige, dungeon, gate and raid, and a daily limit
- leveling XP as a tier reward
- XP for level-ups in Endless Leveling
- season results, the top players kept, told and paid when a season ends (#100)
- catch-up XP for players far behind (Pro, #101)
- a rank's pass XP bonus through Core's rank perks (Pro, #98)

### Events 1.1.0

- texts that were cut off now fit, in every language: wider pages and tabs, the Projects plan button on its own row, shorter labels
- Italian as an eighth language (#158)
- a community goal for job pay, and job pay counts as money earned
- Pass XP from leveling, raid events and PvP level rewards can be town unlocks
- dungeon, gate and raid goals, and an event that starts with every raid
- race tests and a test for each fixed security finding

### Contracts 1.3.0

- texts that were cut off now fit, in every language: wider pages and tabs, the Projects plan button on its own row, shorter labels
- Italian as an eighth language (#158)
- only server orders raise job pay
- tell Core which items the board wants
- Pass XP from leveling, raid events and PvP level rewards can be town unlocks
- PvP by level, with underdog rewards, bully fines and fair bounties
- race tests and a test for each fixed security finding
- /tempest doctor finds ways players could make money from nothing (#144)

### Projects 1.0.1

- texts that were cut off now fit, in every language: wider pages and tabs, the Projects plan button on its own row, shorter labels
- Italian as an eighth language (#158)

### Town 1.1.0

- texts that were cut off now fit, in every language: wider pages and tabs, the Projects plan button on its own row, shorter labels
- Italian as an eighth language (#158)
- unlocks that wait for players at a level, server clears and prestige, and seven ready-made leveling buildings

### Jobs 1.0.0

- First release.

## 2026-11-03

### Holograms 1.1.1

- compiles against Hytale 0.8.0-pre.3 (#142)

### Quests 1.2.2

- the quest board updates live while open, for payments and server quests (#131)

## 2026-11-03

### Core 1.3.0

- who is really playing for playtime rewards, and the best shop discount any perk gives (API 9)
- town unlocks, features a server switches on as its town grows (API 8)

### Holograms 1.1.0

- click commands fill in only plain player names
- clickable holograms, sharper text, no black flash, and a choice of how far they are seen
- coloured text uses a texture size the game accepts, keeps full detail at a distance, and new servers show it from 64 blocks (#161)

### Coins 2.3.0

- a closed bank stays closed after a restart, and coin deposits and bank transfers count only what really moved (#92)
- savings interest for banks, off by default and a town unlock (#42)

### Lottery 1.1.1

- a crash during the drawing can no longer pay the pot twice, and huge rounds keep drawing

### SlotMachine 1.2.1

- wins come up as often as the settings say, and the jackpot pot is safe across worlds

### Shop 1.3.1

- what the shop pays never beats the cheapest anyone with a rank perk could buy it for
- an item that can be a daily deal never sells back above its deal price
- stall items are the right size and stand up properly

### Quests 1.2.1

- a finished server quest is saved before its helpers are paid

### Crates 1.3.1

- block-only crates open only at their blocks, and an opening cut short by a stop still gives its prize

### Coinflip 1.0.2

- a finished flip is saved before the winner is paid

### Pass 1.1.1

- minutes played count only while the player turns their view, and premium is bought once at a time

### Events 1.0.1

- playtime goals count only players who are really playing
- the help page says the goal reward needs 1% of the goal
- the goal reward needs 1% of the goal; placed blocks always remembered; rewards saved before paying

### Contracts 1.2.0

- a server order pays at most 1,000,000,000 per item
- items given to a town project count towards the ranks, and a tab opens the projects

### Projects 1.0.0

- First release.

### Town 1.0.0

- First release.

## 2026-11-01

### Core 1.2.0

- Tempest places on the world map, each kind fully configurable, and /places (#143)
- the chosen language also covers Events, Contracts, stall and ATM names
- what's on when players join, and tips that come once each

### Holograms 1.0.2

- no more doubled floating text and items after joining a world

### Coins 2.2.0

- Tempest places on the world map, each kind fully configurable, and /places (#143)
- four new ATM designs, /atm to place one, crouch + F to change one

### SlotMachine 1.2.0

- Tempest places on the world map, each kind fully configurable, and /places (#143)
- Pirate, Frost, Dragon and Arcane machine themes
- Pro machine themes, starting with a Medieval machine

### Shop 1.3.0

- Tempest places on the world map, each kind fully configurable, and /places (#143)
- themed 3D stalls that sell their own goods, with real items on their shelves
- choose the daily deals: a pool, items that are always a deal, or never
- amounts stop at an item's daily limit, and the lists fit their boxes
- new menu with search, sorting, categories, item cards and a details panel

### Crates 1.3.0

- Tempest places on the world map, each kind fully configurable, and /places (#143)
- new menu with the crates beside their prizes, and an editor in tabs
- smoother crate blocks, and the circling prizes can be set up in /tempest

### Contracts 1.1.0

- player bounties, money held up front and paid to the hunter (#149)

## 2026-10-30

### Core 1.1.0

- one mailbox for every plugin (/mail), rewards that do not fit or come while away wait in a parcel (API 6) (#45)
- contract_deliver player action (API 5)
- Boosts, more of something for a while, asked for at every payout (API 5)

### Coins 2.1.0

- Smaller fixes and improvements.

### Shop 1.2.0

- the daily deal line starts off on the Tempest board, so it pushes no other line off
- daily deals, a few items cheaper each day for everyone, with a limit per player and a line on the board (#39)

### Quests 1.2.0

- the daily sweep and streak use the same clock as the daily quests
- a quest journal with ranks, the daily sweep and streaks, a featured quest of the day and server quests, in a new look

### Crates 1.2.0

- keys for players who are not in a world go to their mailbox
- key parties, everyone online gets crate keys after a countdown, with /keyparty or every few hours (Pro) (#32)

### Pass 1.1.0

- Smaller fixes and improvements.

### Events 1.0.0

- First release.

### Contracts 1.0.0

- First release.

## Before the first release

Work done before the plugins were first released, for the record:

- **2026-10-12** Updated for Hytale Update 7 (0.7.0).
- **2026-10-21** Core split out of Coins: every add-on works with any economy (Tempest Coins or VaultUnlocked).
  Holograms and Coinflip added. 7 languages. Coins rewritten under its own licence.
- **2026-10-22**
  - Free and Pro editions of Crates, Quests and Holograms.
  - Pro: pity counters, Open x10, rank prizes, free openings every N hours, the daily quest rotation, hologram pages, and no limits.
  - Core's API versioned (`CoreAPI`), with `Registrations`, `JsonFiles` and `Editions`; `/tempest report` for support.
  - Checked against Hytale 0.7.2: nothing the plugins use changed.
