# Link your mod to Tempest

Make your leveling, party, claims or gameplay mod work with all 16 Tempest plugins by talking to Tempest Core once.

You make a leveling, party, claims or gameplay mod and want it to work with the whole Tempest suite (quests, the battle
pass, events, jobs, crates, the shop, rewards, the board). You do not need to add support for sixteen plugins: you talk
to **Tempest Core** once, and every Tempest plugin sees it.

Everything here is optional for you and for the server: declare Core as an **optional** dependency, check that it runs,
and your mod works the same without it.

```json
"OptionalDependencies": { "AtomicTempest:Core": "*" }
```

```java
boolean tempest = CoreAPI.runningVersion() >= 14;   // Core is there and new enough (see API versions)
```

Keep every call to Tempest in one class of yours, loaded only when Core runs, so your mod never needs Core's classes.

## A leveling mod: your levels in the whole suite

Implement `Levels.Leveling` and register it. From then on Tempest's level rewards, level and class limits on shop items,
crates and quests, "reach level" quests, battle pass XP, the level board and Tempest's own XP (jobs, quests, crates,
contracts, projects) all use your mod.

```java
final class TempestLink implements Levels.Leveling {
    public String name() { return "My Leveling"; }
    public int level(UUID player) { return MyLeveling.level(player); }
    public int prestige(UUID player) { return 0; }                        // 0 when your mod has none
    public boolean giveXp(UUID player, double amount, String reason) {     // Tempest giving your XP
        return MyLeveling.addXp(player, amount);                           // with your own bonuses and cap
    }
    // Optional, all with defaults: xp, xpForNext, levelCap, playerClass, secondClass, race, classTier, mobLevel, inPartyWith
}

// In setup() or start(), while Core runs:
TempestLink link = new TempestLink();
Levels.register(link);
// In shutdown():
Levels.unregister(link);
```

Tell Tempest when a player levels up (once per level-up, even when several levels were crossed):

```java
Levels.fireLevelUp(uuid, oldLevel, newLevel);
Levels.firePrestige(uuid, oldPrestige, newPrestige);   // if your mod has prestige
```

Your mod then shows by its `name()` in the admin's "Leveling mod" choice on the /tempest Leveling tab (Core API 21),
next to Endless Leveling, RPG Leveling and MMO Skill Tree, which Core links by itself. So a server with several leveling
mods picks the one that gives "the level". On "Automatic" a registered mod comes first. Keep `name()` the same between
versions: the admin's choice is kept by it.

If your mod has classes with tiers, return the tier from `classTier(player)` (API 21): quests and items can then ask for
it. Say what your mod has with `has(feature)` (API 22): return false for `Levels.PRESTIGE`, `Levels.MOB_LEVELS` and the
others it lacks, and the admin's menus hide the settings that would do nothing on their server.

## Any mod: count in quests, the pass and events

Report what players do in your mod. Tempest Quests can turn any of these into a goal, and other Tempest plugins listen
too:

```java
PlayerActions.fire(uuid, "mymod:boss_kill", 1);     // your own name, "mod:what"
QuestsAPI.trigger(uuid, "visit_shrine", 1);         // a "Custom trigger" goal the admin made in /quests
```

`QuestsAPI` belongs to Tempest Quests: declare `"AtomicTempest:Quests": "*"` as an optional dependency too, and call it
only when `QuestsAPI.isAvailable()` (the **Quests** page).

Hear what players do in the Tempest plugins (a shop purchase, a quest finished, a job level, a crate opened), with the
full list on the **Player actions** page:

```java
PlayerActions.listen((player, action, amount) -> { ... });
```

## Money

Use the server's economy, whichever plugin keeps it, through `Economies.get()` (the **Money** page). Tempest Economy also
registers as VaultUnlocked's and Cassaforte's economy, so a mod that already uses those works with Tempest coins without
any of this.

## Rewards, announcements, settings

| Want | Use | Page |
|---|---|---|
| Give items safely (a full inventory goes to the mailbox) | `Rewards.giveItems` | Rewards, mail and boosts |
| A big moment on the server's Discord (Tempest Economy posts it when Discord is set up) | `Announcements.post("mymod", text)` | Boards, HUD and placeholders |
| A tab in the server's `/tempest` settings, with rows that show only when they mean something (`shownWhenOn`...) | `CasinoSettings.register(new SettingsTab(...))` | Settings and menus |
| Places on the world map | `MapPlaces` | Map, town and demand |
| A line on the player's Tempest board | `HudLines` | Boards, HUD and placeholders |

## Rules that keep servers safe

- Check `CoreAPI.runningVersion()` before using anything newer than the version you built against.
- Unregister everything you registered in `shutdown()`: servers reload plugins.
- Event listeners run on the thread that fired them: keep them quick; do world work with `world.execute(...)`.
- Never give money or items twice for one thing: Tempest's own rewards are saved before they are given; do the same.

Questions or something missing: ask on our Discord. We add what mod authors need, and say so in **API versions**.
