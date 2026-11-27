# Town projects

The buildings players build together, and their states.

## Town projects: `ProjectsAPI` (Projects plugin)

What is being built and how far each building is, and a word whenever a project changes state
(`ProjectsAPI.API_VERSION`, 2). Tempest Town uses it to unlock features when a building is finished, and (Pro) to
build every project again for a new town season. Declare
`"AtomicTempest:Projects": "*"` under OptionalDependencies, keep the classes that touch it in one file of their own
(as Shop does with Holograms), and check `ProjectsAPI.isAvailable()` first.

```java
for (ProjectsAPI.Building b : ProjectsAPI.buildings()) {   // a copy; empty when Projects is not running
    b.id(); b.name(); b.prefab(); b.world(); b.state(); b.percentDone(); b.finished();
}
ProjectsAPI.building("k3f9");          // one, or null
ProjectsAPI.donors("k3f9");            // different players who donated; -1 when there is no such project
ProjectsAPI.listen(listener);          // listener.changed(building): made, paused, finished, stopped, cancelled, removed
ProjectsAPI.stopListening(listener);   // in your shutdown()
String why = ProjectsAPI.rebuild("k3f9"); // API 2: null when it is being built again from nothing; otherwise why not
ProjectsAPI.seasonRule("k3f9");        // API 2: what a new town season does with it: SEASON_TOWN, _REBUILD, _FINISHED, _KEEP, _REMOVE
ProjectsAPI.takeDown("k3f9");          // API 2: building down, old ground back, off the list (under way: a cancel)
ProjectsAPI.rebuild("k3f9", false);    // API 2: a project under way keeps its donations (takeDown(id, false) too)
// Refunds are reported as the player actions projects_refund (items) and projects_refund_coins (coins)
```

- `state` is the project's state name: `CLEARING`, `OPEN`, `PAUSED`, `FINISHING`, `FINISHED`, `CANCELLING`, `STOPPING`,
  `STOPPED` or (API 2) `WAITING`: cleared, its plan standing, and open for donations once the project it comes after
  (`/projects after`) is finished. A listener hears `ProjectsAPI.REMOVED` for a project taken off the list (after a cancel has put the old
  ground back, or an admin removed a finished or stopped one).
- `percentDone` is how much of the goal was donated (100 once finished). Donations change no state, so listeners are
  not told about them: read `buildings()` again when you need the numbers.
- Listeners are called on Projects' timer thread, within a second of the change and never while Projects holds a
  lock, so a listener may call `buildings()`. Every call may come from any thread; answers never wait for the builder.
- `rebuild(id)` (API 2) takes the building down and opens the project from nothing on the same plot, with its
  plan, materials, goals and rewards as they were. A finished building's donations were spent on it; a project still
  under way gives them back to its donors first. It reads the prefab (50-70 ms), so call it from your own thread, and
  refuses (with a reason in English) when the prefab is gone or changed, so a building never comes down that could
  not go up again. Call it inside a try that catches `LinkageError` when your plugin may meet Projects older than 1.3.
- When Projects stops (or reloads) it forgets every listener: listen again when it is back, or ask `buildings()` on
  a timer, as Town does every minute.
