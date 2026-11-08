# Jobs

Pay job work from any mod.

## Jobs: `JobsAPI` (Jobs plugin)

Which jobs there are, who holds them and their levels, and a way for any mod to pay job work Jobs cannot see itself
(`JobsAPI.API_VERSION`, 2). Declare `"AtomicTempest:Jobs": "*"` under OptionalDependencies and check
`JobsAPI.get() != null` (null while Jobs is not running).

```java
JobsAPI jobs = JobsAPI.get();
if (jobs != null && jobs.holds(uuid, "miner") && jobs.level(uuid, "miner") >= 10) { ... }
jobs.xp(uuid, "miner"); jobs.earned(uuid, "miner"); jobs.earnedToday(uuid);     // API 2
// A fishing mod's catch, paid to a "fisher" job the admin made: the level bonus, boosts and caps apply
if (jobs != null && JobsAPI.API_VERSION >= 2) {
    jobs.reward(uuid, "fisher", 3, 5);        // false when the player does not hold it; at most 10,000 a call
}
```

Core's `PlayerActions` tells of `jobs_paid` (amount paid), `jobs_level` (the new level), `jobs_tree` (a whole tree
felled, 1) and `jobs_found` (a place found for the first time, 1). Placeholders: `{jobs_list}`, `{jobs_count}`,
`{jobs_earned_today}`, and for each job `{jobs_<id>_level}`, `_xp`, `_percent` (to the next level) and `_earned`.
