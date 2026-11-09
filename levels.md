# Player levels

Levels from Endless Leveling or MMO Skill Tree, through one API.

## Player levels: `Levels` (API version 14)

Player levels from whichever leveling mod the server runs, as `Economies` is for money: **Endless Leveling**, **RPG
Leveling** (since 21) or **MMO Skill Tree**, found by themselves through their public APIs (nothing of them is shipped).
Another mod's bridge can `Levels.register` its own `Leveling`. With several installed, the admin picks the one that gives
"the level" on the /tempest Leveling tab, registered mods included (since 21); on "Automatic" a registered mod comes
first, then Endless Leveling, RPG Leveling, MMO Skill Tree.

```java
Levels.Leveling leveling = Levels.get();            // null without a leveling mod
if (leveling != null) {
    int level = leveling.level(uuid);
    int prestige = leveling.prestige(uuid);          // 0 with MMO Skill Tree and RPG Leveling
    leveling.giveXp(uuid, 250, "Quest: Miner");      // with the mod's own bonuses and level cap
}
if (!Levels.meets(uuid, 20)) { ... }                 // true without a leveling mod: nobody is locked out by a missing mod
```

> **Note:** With MMO Skill Tree, `level` is the number the admin chose on its tab (total, combat or power level, or the
> highest skill), and leveling XP goes into the skill chosen there. Its skills one by one are in `Skills` (below).

### `Levels` (static)

| Method | Returns | Since | What it does |
|---|---|---|---|
| `get()` | `Leveling` | 14 | The leveling mod in use, or null. Asked again on every call |
| `register(leveling)` / `unregister(leveling)` | | 14 | A bridge for another leveling mod. Since 21 several may register, each a choice in the admin's "Leveling mod"; on "Automatic" the first comes before the ones Core finds |
| `listen(listener)` / `stopListening(listener)` | | 14 | Hear level-ups, prestige and clears (below) |
| `available()` | `boolean` | 16 | A leveling mod runs |
| `level(uuid)` | `int` | 16 | The player's level, 0 without a leveling mod |
| `meets(uuid, minLevel)` | `boolean` | 16 | The player has at least this level; true without a leveling mod |
| `hasClass(uuid, wanted)` | `boolean` | 16 | The player's class (or second class) is this one; true without a mod or a class |
| `classTier(uuid)` | `int` | 21 | The tier of the player's class (RPG Leveling: 0 to 4), 0 without |
| `has(feature)` | `boolean` | 22 | The mod in use has `PRESTIGE`, `CLASSES`, `CLASS_TIERS`, `RACES`, `MOB_LEVELS`, `CLEARS` or `PARTIES`; false without a mod. For settings and editors that show only what means something |
| `mobLevel(ref, store, buffer)` | `int` | 16 | A mob's level (Endless Leveling, RPG Leveling), 0 when not known. On the mob's world thread |
| `mobGold(amount, killer, mobLevel)` | `long` | 16 | Mob gold raised by the mob's level, as the admin set it |
| `mobKilled(killer, mobName, mobLevel)` | | 16 | Tell Core of a kill (elite mob announcements) |
| `playersAtLevel(level)` | `int` | 16 | Players seen at this level or higher (for town conditions) |
| `serverClears()` / `serverPrestige()` | `long` | 16 | Dungeons, gates and raids cleared by everyone; everyone's highest prestige added up |
| `pretty(id)` | `String` | 16 | "dark_knight" becomes "Dark Knight" |
| `describe()` | `String` | 14 | "Endless Leveling", "RPG Leveling", "MMO Skill Tree", a registered mod's name, or "none" |
| `fireLevelUp`, `firePrestige`, `fireDungeonCleared`, `fireGateCleared`, `fireRaidCleared`, `fireRaidStarted` | | 14-16 | For a bridge: tell Core and every listener |

### `Levels.Leveling` (one leveling mod)

| Method | Returns | Since | What it does |
|---|---|---|---|
| `name()` | `String` | 14 | "Endless Leveling", "RPG Leveling", "MMO Skill Tree"; a registered mod's name is its choice in the admin's dropdown |
| `level(uuid)` / `prestige(uuid)` | `int` | 14 | Level and prestige (0 when the mod does not know the player) |
| `giveXp(uuid, amount, reason)` | `boolean` | 14 | XP with the mod's bonuses and cap; false when it could not |
| `xp(uuid)` / `xpForNext(uuid)` | `double` | 16 | XP toward the next level, and what it needs (0 when the mod does not say) |
| `levelCap(uuid)` | `int` | 16 | The highest level this player can reach (0: not said) |
| `playerClass(uuid)` / `secondClass(uuid)` / `race(uuid)` | `String` | 16 | Class, second class and race ids ("mage"), "" for none |
| `mobLevel(ref, store, buffer)` | `int` | 16 | A mob's level, on its world thread |
| `inPartyWith(one, other)` | `boolean` | 16 | The two players are in one party |
| `classTier(uuid)` | `int` | 21 | The tier of the player's class, 0 for none or a mod without tiers |
| `has(feature)` | `boolean` | 22 | Whether this mod has a feature (`Levels.PRESTIGE`...). Default true, so a linked mod that does not say hides nothing |

### `Levels.Listener` events

All default methods: override what you need. They run on the thread the leveling mod fires on, so keep them quick.

| Event | Fires when | Carries | Since |
|---|---|---|---|
| `levelUp` | A player's level went up (once, even when several levels were crossed) | player, oldLevel, newLevel | 14 |
| `prestige` | A player prestiged (Endless Leveling) | player, oldPrestige, newPrestige | 14 |
| `dungeonCleared` | A dungeon the player was in was cleared | player, rank ("E" to "S", "" without) | 15 |
| `gateCleared` | A wave gate or fate zone the player fought in was cleared | player, rank, waves | 15 |
| `raidCleared` | The player finished a raid | player, waves | 15 |
| `raidStarted` | A raid started for everyone | name, world, waves | 16 |

```java
Levels.listen(new Levels.Listener() {                  // stopListening in shutdown (or Registrations.onClose)
    @Override
    public void levelUp(UUID player, int oldLevel, int newLevel) { ... }
    @Override
    public void dungeonCleared(UUID player, String rank) { ... }
});
```

> **Note:** With both mods installed only the chosen mod's level-ups and prestige reach listeners, so nothing counts
> twice. Endless Leveling's dungeons, gates and raids are told either way: only it has them.

### What Core does with it, and tabs for your plugin

Core pays the admin's money per level-up (with a bonus at milestones), gives the placeholders `{leveling_level}`,
`{leveling_prestige}`, `{leveling_xp}` and more, raises rewards by level (the level bonus), and shows a "Highest levels"
board while a leveling mod runs. Its settings are on three /tempest tabs: **Leveling** (with either mod), **Endless
Leveling** (only while it runs: prestige, dungeons, gates, raids, mob gold by level, elite mobs) and **MMO Skill Tree**
(only while it runs).

| Method | Since | What it does |
|---|---|---|
| `Registrations.levelingTab(tab)` | 16 | A /tempest tab shown only while a leveling mod runs |
| `Registrations.endlessTab(tab)` | 19 | A tab shown only while Endless Leveling runs (for what only it has) |
| `Registrations.levelingFeature(feature)` | 16 | A town unlock feature offered only while a leveling mod runs |

`Boosts.LEVELING_XP` (15) raises leveling XP: Core gives the extra through the mod each time it gives a player XP
(Endless Leveling, or MMO Skill Tree in the same skill), so Tempest Events, rank perks and boosters can run "double
leveling XP". With both mods installed it raises both. The extra is never boosted again.
