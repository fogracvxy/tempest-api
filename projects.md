# Town projects

The buildings players build together, and their states.

## Town projects: `ProjectsAPI` (Projects plugin)

What is being built and how far each building is, and a word whenever a project changes state
(`ProjectsAPI.API_VERSION`, 1). Tempest Town uses it to unlock features when a building is finished. Declare
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
```

- `state` is the project's state name: `CLEARING`, `OPEN`, `PAUSED`, `FINISHING`, `FINISHED`, `CANCELLING`, `STOPPING`
  or `STOPPED`. A listener hears `ProjectsAPI.REMOVED` for a project taken off the list (after a cancel has put the old
  ground back, or an admin removed a finished or stopped one).
- `percentDone` is how much of the goal was donated (100 once finished). Donations change no state, so listeners are
  not told about them: read `buildings()` again when you need the numbers.
- Listeners are called on Projects' timer thread, within a second of the change and never while Projects holds a
  lock, so a listener may call `buildings()`. Every call may come from any thread; answers never wait for the builder.
- When Projects stops (or reloads) it forgets every listener: listen again when it is back, or ask `buildings()` on
  a timer, as Town does every minute.
