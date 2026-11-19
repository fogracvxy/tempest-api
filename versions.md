# API versions

What each Core API version added, to check before you use it.

## Reference: Core API versions

`CoreAPI.API_VERSION` is the version a plugin was built against; `CoreAPI.runningVersion()` is the one installed on
the server. Check the running version before touching anything newer than your lowest supported Core, and keep that
code in a class of its own.

| Version | Added |
|---|---|
| 1 | Core 1.0.0: `Registrations`, `JsonFiles`, `Economies`, `CasinoSettings`, `HelpTopics`, `HudLines`, `Leaderboards`, `Placeholders`, `PlayerActions`, `WalletEvents` and the rest of the first release |
| 2 | `AdminLog`, `RateLimit`, and settings tab groups (`tempest.admin.<group>`) |
| 3 | `PlayLimits`, `HudLines.compact`, `Themes`, dropdowns and item pickers in settings (`Setting.choice`, `Setting.item`), tab icons, `ItemIcons.ids` and `pretty` |
| 4 | The Tempest board's line names and keys (`HudLines.name`, `nameOf`, `keys`, `lineFor`) |
| 5 | `Boosts` and `Registrations.boost`; `PlayerActions.QUEST_COMPLETE` and `CONTRACT_DELIVER` |
| 6 | `Mailbox` (/mail) and `HudLines.startOff` |
| 7 | `MapPlaces` and `Registrations.mapKind` |
| 8 | `Unlocks` and `Registrations.unlockFeature`, `unlockProvider`, `onUnlock` |
| 9 | `Activity` and `Perks.highestPercent` |
| 10 | `Perks.Bonus.PASS_XP` |
| 11 | `SettingsTab.defaults` (Reset to defaults) |
| 12 | `JsonFiles` config versions with migrations, and `JsonFiles.rename` |
| 13 | `Doctor` (/tempest doctor) and `Registrations.doctor` |
| 14 | `Levels`: player levels from a leveling mod |
| 15 | `Levels` dungeon, wave gate and raid clears; `Boosts.LEVELING_XP` |
| 16 | `Levels` XP, level cap, class, race, mob level, parties, raid starts, `meets`, `hasClass`, `mobGold`, `mobKilled`, `playersAtLevel`, `serverClears`, `serverPrestige`; `Registrations.levelingTab`, `levelingFeature`; `Unlocks.isUnlocked` |
| 17 | `Demand` and `Registrations.demandSource`; `HudLines.progress` |
| 18 | `Rewards`: item and command rewards the same in every plugin |
| 19 | `Skills` (MMO Skill Tree) and its moments as `PlayerActions`; MMO Skill Tree as a leveling mod next to Endless Leveling; `Registrations.endlessTab` |
| 20 | `Setting.info` (a (?) explanation beside a setting) and `Setting.permission` (a setting only players with that permission may change) |
| 21 | RPG Leveling found by `Levels`; `Leveling.classTier`, `Levels.classTier`; several mods may `Levels.register`, each a choice in the admin's "Leveling mod"; `Perks.Bonus.LEVELING_XP` |
| 22 | Show-when rules on settings (`shownWhen`, `shownWhenOn`, `shownWhenAboveZero`, `shownWhenChosen`), followed live in the menu; `Levels.has`, `Leveling.has` |
| 23 | `Hub`: the Tempest hub (`/tempest hub`); plugins add their row and signs with `Registrations.hubArea` and `hubPage`. Comes with the next Core release |
| 24 | `Claims`: land claims for every plugin (who owns a place, what a player may do there), answered by Tempest Claims or read from Simple Claims; `Registrations.claimsProvider` and `publicBlocks`. Comes with the next Core release |
| 25 | `PartyHud`: party frames on the screen drawn by Core from a plugin's parties; `Registrations.partyHud` |
| 26 | Party renown in `Claims`: `renownLevel`, `seasonRenown`, `addRenown` (inside Claims' daily cap for other plugins) and `partiesAtLevel`, answered by Tempest Claims |
| 27 | `SettingsTab.MOST_SETTINGS`: a settings tab holds up to 250 settings, for tables of rows made of a dropdown and the fields it shows; `ItemRows`, a list of items as rows of item pickers |
| 28 | `Setting.items`: a list of items shown as one "add an item" dropdown with the items under it (count, X to take one out); `ItemRows.of` now makes one, and `ItemRows.read/add/remove/amount` change its text; `CommandLists`, console commands in a menu as a list (a line per command with an X, one "+ Add a command" dropdown with ready-made rewards: crate keys, coins, a message) |
| 29 | `ItemLists`, a list of items in a page (a row per item with its count and an X, one "add an item" dropdown); `CommandLists.split` and `join` for commands kept as one line |
| 30 | `Targets`, a searchable "which one" dropdown of the game's blocks, items or monsters, with families ("Any Ore") |
| 31 | `Setting.adder`, a searchable "Add..." dropdown that adds names to a list kept as text with commas (shown with the list's own field) |
| 32 | `ItemData` (`special`, `encode`, `decode`, `describe`): items that carry more than their id (enchantments, other mods' data) kept whole; `Mailbox.Item(id, amount, stack)` and `stack()`, so mail gives them back whole |
| 33 | Kept exact items for prizes and rewards: `ItemData.problem` (a backpack must be empty, an item a mod tracks by its own id is never copied), `keep`, `kept`, `make`, `tokenOf`, `itemOf`; item lines hold a kept item's token (`Weapon_Sword_Iron#1a2b3c4d x1`); `ItemLists.HAND` and `ItemLists.change(..., held)` |
| 34 | `ItemData.bookkeeping` and `identity` (a mod's own fields such as ItemDisplay, hashes and versions are never part of what an item is); `ItemData.kindOf`, one key for the same exact item however worn and in whatever order it was written |
| 35 | The admin's rules for other mods' item fields (`ItemData.rules`, /tempest -> Custom items): fields that change with use (shown, never matched), more bookkeeping, fields that hold items or make an item one of a kind; `ItemData.visible`, `changes`, `displayName` (a mod's own name for the item), `fields` (the inspector, `/tempest item`) |
| 36 | `Steady`: a page's scrolling lists keep the rows that did not change (same file, same click data), so a click never takes the player back to the top; `new Steady("#List")`, `apply(cmd, events)` before `sendUpdate`, `reset()` in `build` |
