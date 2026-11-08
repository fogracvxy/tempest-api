# Setting up a plugin

Dependencies, Registrations, config files and which Core is installed.

## Setting up a plugin

1. Compile against the jars you use, without bundling them; the server loads them from Mods:

   ```groovy
   dependencies {
       compileOnly(files("$hytaleHome/UserData/Mods/Core-1.0.0.jar"))
       compileOnly(files("$hytaleHome/UserData/Mods/Quests-1.1.0.jar"))   // only if you use it
   }
   ```

   Download the jars from the plugins' CurseForge pages (https://www.curseforge.com/hytale/mods/search?search=tempest).

2. In your `manifest.json`, depend on what you use so it starts before your plugin:

   ```json
   "Dependencies": { "AtomicTempest:Core": "*" },
   "OptionalDependencies": { "AtomicTempest:Coins": "*", "AtomicTempest:Quests": "*" }
   ```

   With an optional dependency, check `CoinsAPI.get() != null` or `QuestsAPI.isAvailable()` (or
   `LotteryAPI.isAvailable()` ...) before use, and keep the classes that touch it apart from the rest, so your plugin
   still loads when it is missing.

3. Use the APIs in your plugin's `setup()` or later.

### The shortest way: `Registrations` and `JsonFiles` (Core)

`Registrations` registers with Core's registries and remembers how to undo each one; one `close()` in `shutdown()`
takes it all back, so a reload never leaves a settings tab, help page, listener or timer behind:

```java
private final Registrations core = new Registrations("Dragons");

protected void setup() {
    config = DragonsConfig.load();
    core.settingsTab(new SettingsTab("Dragons", settings(config), config::save));
    core.helpTopic(new HelpTopic("dragons", 80, Message.translation("server.dragons.help.title"), "Rock_Gem_Ruby", uuid -> lines(uuid)));
    core.helpCommand("server.dragons.help.mod", "/dragons", Message.translation("server.dragons.help.command"));
    core.hudLine("dragons.next", uuid -> Message.translation("server.dragons.hud.next"));
    core.placeholder("dragons_slain", uuid -> String.valueOf(slain(uuid)));
    core.mapKind(new MapPlaces.Kind("nest", "Dragon nests", Message.translation("server.dragons.map.nest")).blocks("Dragon_Nest"::equals));
    core.leaderboard(board);  core.onWallet(listener);  core.veto(veto);  core.onAction(listener);
    core.onAnnouncement(listener);  core.restrictCraft("Dragon_Egg", () -> config.playersCanCraft());
    core.edition(isPro, PRO_ADDS, licensedTo);     // plugins with a free and a Pro jar
    core.every(60, TimeUnit.SECONDS, () -> spawnDragons());        // its own daemon timer thread; errors are logged
    core.later(5, TimeUnit.SECONDS, () -> greet());
    core.onClose(() -> config.save());                             // anything else for shutdown()
}

public void shutdown() {
    core.close();                                                  // newest first; calling it twice does nothing
    super.shutdown();
}
```

`JsonFiles` loads and saves a config or data file with `SafeFiles` (crash-safe) and Gson, pretty-printed. Fields the
file does not have keep the class's defaults, so new settings never break old files:

```java
static DragonsConfig load() { return JsonFiles.loadAndSave(PATH, DragonsConfig.class, DragonsConfig::new); }
void save() { JsonFiles.save(PATH, this); }
Map<String, Long> times = JsonFiles.load(PATH, new TypeToken<Map<String, Long>>() {}.getType(), HashMap::new);
```

A setting renamed or moved later keeps the server's value with config versions (API 12): give the class an
`int configVersion` field and list the steps; a file runs only the steps it has not had yet.

```java
JsonFiles.loadAndSave(PATH, DragonsConfig.class, DragonsConfig::new, List.of(
        json -> JsonFiles.rename(json, "dragonsPerHour", "spawnsPerHour")));     // version 1
```


## Which Core is installed: `CoreAPI` (Core)

`CoreAPI.runningVersion()` is the API version of the Core on the server (`CoreAPI.API_VERSION` is the one you
compiled against; it is copied into your plugin, so ask `runningVersion()` at run time). Version 1 is Core 1.0.0.

Core's **stable API**, safe to build on: the classes directly in `com.atomictempest.core` (except `Main`) and the
packages `economy`, `help` and `settings`. These only grow. Core's `command`, `config`, `listener`, `player` and `ui`
packages and `Main` are internal and may change in any release; do not use them. The other plugins' APIs are their
`api` packages (`Holograms.API_VERSION`, `QuestsAPI.API_VERSION`, `CoinsAPI.VERSION`, `CoinflipAPI.VERSION` ...).

```java
if (CoreAPI.runningVersion() < 1) { /* a Core older than the one you built against */ }
```
