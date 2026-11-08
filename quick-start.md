# Quick start

From an empty plugin to one that pays players and reads their level, in five steps.

## Checklist

| Step | What to do |
|---|---|
| 1 | Put Tempest Core (and the plugins you use) in your server's `mods` folder, and compile against their jars with `compileOnly` |
| 2 | Depend on `AtomicTempest:Core` in your `manifest.json`; make the other Tempest plugins optional |
| 3 | Make one `Registrations` for your plugin and `close()` it in `shutdown()` |
| 4 | Ask Core for what you need on every use (`Economies.get()`, `Levels.get()`): mods can start after yours |
| 5 | Before using anything newer than the Core you support, check `CoreAPI.runningVersion()` |

## 1. Compile against the jars

Download the jars from the plugins' CurseForge pages, then in `build.gradle`:

```groovy
dependencies {
    compileOnly(files("libs/Core-1.5.0.jar"))
    compileOnly(files("libs/Quests-1.4.0.jar"))   // only if you use it
}
```

`compileOnly` means the jars are not packed into yours: the server loads them from its `mods` folder.

## 2. Declare the dependencies

```json
"Dependencies": { "AtomicTempest:Core": "*" },
"OptionalDependencies": { "AtomicTempest:Coins": "*", "AtomicTempest:Quests": "*" }
```

> **Note:** With an optional dependency, check that the plugin is there (`QuestsAPI.isAvailable()`,
> `CoinsAPI.get() != null`) and touch its classes in one class of yours only, so your plugin still loads without it.

## 3. Register with Core

```java
public class DragonsPlugin extends JavaPlugin {
    private final Registrations core = new Registrations("Dragons");

    public DragonsPlugin(JavaPluginInit init) {
        super(init);
    }

    @Override
    protected void setup() {
        core.placeholder("dragons_slain", uuid -> String.valueOf(slain(uuid)));
        core.onAction((player, action, amount) -> {
            if (action.equals(PlayerActions.CRATE_OPEN)) { /* a crate was opened */ }
        });
    }

    @Override
    public void shutdown() {
        core.close();   // takes back everything registered above
        super.shutdown();
    }
}
```

## 4. Pay a player, read their level

```java
Economy money = Economies.get();                     // null while no economy is installed
if (money != null) {
    money.deposit(player, 250, "Dragons: a dragon slain");   // the reason shows in the economy log
}

Levels.Leveling leveling = Levels.get();             // Endless Leveling or MMO Skill Tree, or null
if (leveling != null && leveling.level(player) >= 20) {
    leveling.giveXp(player, 100, "Dragons: a dragon slain");
}
```

## 5. Check the Core version

```java
if (CoreAPI.runningVersion() >= 19 && Skills.available()) {
    int mining = Skills.level(player, "Mining");     // MMO Skill Tree skills (API 19)
}
```

> **Tip:** Keep code that needs a newer Core in a class of its own and call it only after the check: on an older Core
> the class is then never loaded, and your plugin keeps working.

Next: [Setting up a plugin](setup.html) has every option, and [Player actions](actions.html) lists everything the
Tempest plugins report.
