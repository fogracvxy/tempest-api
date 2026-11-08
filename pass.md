# Battle pass

## Battle pass: `PassAPI` (Pass plugin)

Give pass XP for what players do in your plugin, read their tier, and hear when they reach one
(`PassAPI.API_VERSION`, 1). Declare `"AtomicTempest:Pass": "*"` under OptionalDependencies and check
`PassAPI.isAvailable()`.

```java
PassAPI.addXp(uuid, 50);                         // XP added (not capped per day, no weekend bonus); 0 when off or the season is over
PassAPI.tier(uuid);  PassAPI.tiers();  PassAPI.xp(uuid);  PassAPI.isPremium(uuid);
PassAPI.season();  PassAPI.seasonName();         // 2, "Season 2"
PassAPI.onTier((player, tier) -> { ... });       // once per tier reached, in order
PassAPI.onXp((player, added, total) -> { ... });
PassAPI.stopListening(listener);                 // in your shutdown()
```

Pass itself counts finished quests (through `QuestsAPI.onComplete`), time played, the day's first login and the
Tempest games (`PlayerActions`). A tier's reward can be a server command, so your plugin's rewards (keys, ranks) work
as pass rewards without code: `cratekey {player} gold 1`.
