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
| 22 | Show-when rules on settings (`shownWhen`, `shownWhenOn`, `shownWhenAboveZero`, `shownWhenChosen`), followed live in the menu; `Levels.has`, `Leveling.has`. Comes with Core 1.6.0, the next release |
