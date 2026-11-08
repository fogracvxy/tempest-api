# Skills (MMO Skill Tree)

Skill levels, skill XP, achievements, quests and NPC talks.

## Skills: `Skills` (Core, API version 19)

MMO Skill Tree's skills, while it runs: one level per skill (Mining, Swords, custom skills too), skill XP, and what
happens there. Found by itself, nothing of it is shipped. Works next to Endless Leveling: skills are MMO Skill Tree's
own, whichever mod gives "the level".

```java
if (CoreAPI.runningVersion() >= 19 && Skills.available()) {
    int mining = Skills.level(player, "Mining");        // by id or name; 0 when not known yet
    Map<String, Integer> all = Skills.levels(player);   // "MINING" -> 34, ...
    Skills.giveXp(player, "Mining", 500, "My mod: a task");   // blank skill: the one the admin chose in Core
}
```

| Method | Returns | What it does |
|---|---|---|
| `available()` | `boolean` | MMO Skill Tree runs |
| `ids()` | `List<String>` | The server's skill ids, custom ones too ("MINING", "HERBALISM") |
| `name(id)` | `String` | The skill's name for players ("Mining") |
| `find(typed)` | `String` | The id a typed name or id stands for ("light armor" gives "LIGHT_ARMOR"), "" for none |
| `subject(id)` | `String` | "MINING Mining": the id and name, as in the actions below |
| `levels(uuid)` | `Map<String, Integer>` | Every skill's level, as last read; empty when not known |
| `level(uuid, skill)` | `int` | One skill's level (id or name), 0 when not known |
| `giveXp(uuid, skill, amount, reason)` | `boolean` | Skill XP with the mod's XP banner; false when the mod is not running or the player is offline |

### Its moments, as `PlayerActions`

What players do there is fired as `PlayerActions`, with the skill, achievement, quest or character after the colon.
Tempest Quests counts them as goals; any plugin can.

| Action (prefix constant) | Fires when | Amount |
|---|---|---|
| `mmo_skill_level:<id> <name>` (`Skills.SKILL_LEVEL`) | A skill's level went up | The new level |
| `mmo_skill_xp:<id> <name>` (`Skills.SKILL_XP`) | XP from play (not XP Tempest gave) | The XP |
| `mmo_achievement:<id>` (`Skills.ACHIEVEMENT`) | An achievement was unlocked | 1 |
| `mmo_quest:<id>` (`Skills.QUEST`) | One of its own quests was finished | 1 |
| `npc_talk:<character id> <aliases>` (`Skills.NPC_TALK`) | A credited conversation with a character | 1 |

```java
PlayerActions.listen((player, action, amount) -> {
    if (action.startsWith(Skills.SKILL_LEVEL)) {
        String skill = action.substring(Skills.SKILL_LEVEL.length());   // "MINING Mining"
        // ...
    }
});
```

> **Note:** Levels are read when a player joins, every half minute and after every XP gain; a player who has just
> joined may have none for a moment. Core pays its own skill-level and achievement rewards (the MMO Skill Tree tab),
> each level and each achievement once ever.
