# Quests

Your own kinds of goals, goals shipped with your mod, progress and custom triggers.

## Quests: `QuestsAPI`

### Your own kind of goal

```java
// setup(): admins can now pick "Catch fish" in the editor (/quests, Edit tab)
QuestsAPI.registerObjective("fishing:catch", "Catch fish", "Catch", "fish", true,
        "Fish id or part of it, e.g. Salmon. Empty: any fish.");

// whenever a player catches a fish
QuestsAPI.progress(playerUuid, "fishing:catch", fishItemId, 1);
```

Goals made with it are kept while your mod is not installed, but they do not count. You can also count the
built-in kinds yourself, for example `QuestsAPI.progress(uuid, "KILL", "Dragon", 1)` for a mob the game does not
report.

### Shipping goals with your mod

```java
QuestsAPI.addGoal(GoalInfo.achievement("fishing:first_catch", "First catch", "Food_Fish_Raw",
        "fishing:catch", "", 1, 50));
QuestsAPI.addGoal(GoalInfo.quest("fishing:daily", "Daily angler", "Food_Fish_Raw",
        "fishing:catch", "", 10, 80, "daily"));
```

`addGoal` does nothing if a goal with that id exists, so it is safe on every start and keeps the admin's changes.

### Reading progress and hearing about it

```java
QuestsAPI.isDone(uuid, "fishing:first_catch");
QuestsAPI.progressOf(uuid, "fishing:daily");
QuestsAPI.goals();                                  // every goal, as GoalInfo
QuestsAPI.onComplete((uuid, goal) -> { ... });      // after the reward was paid
QuestsAPI.givesPassXp(goal.id());                   // version 2: false when the admin switched pass XP off for it
```

`givesPassXp` is new in `QuestsAPI.API_VERSION` 2; against an older Quests catch `NoSuchMethodError` and treat it as
true.

### Custom triggers (no new objective needed)

Admins can make a goal of the kind **Custom trigger** and type a name in "Which one", for example `visit_shrine`.
It counts whenever that trigger fires, from any of these:

- Java: `QuestsAPI.trigger(uuid, "visit_shrine", 1)`
- A command (console, admins, other plugins): `/questtrigger <player> visit_shrine 1` (permission `quests.admin`)
- A content mod's item, block or NPC: the `Quests_Trigger` interaction (below)
