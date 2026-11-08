# Map, town and demand

Places on the world map, features the town unlocks and items the server wants.

## Places on the world map: `MapPlaces` (API version 7)

Register a kind of place and Core does the rest: a tab in `/tempest` (on or off, icon, colour, name, size, compass, who
sees it, how far away, which worlds), changing or hiding one place from `/places`, and each player picking what their
map shows.

```java
// Blocks: Core remembers each one when it is placed or used, and forgets it when it goes
core.mapKind(new MapPlaces.Kind("nest", "Dragon nests", Message.translation("server.dragons.map.nest"))
        .icon("Tempest_Star.png").color("#E74C3C").item("Rock_Gem_Ruby")
        .blocks(id -> id.equals("Dragon_Nest")));

// Or your own list, asked for every few seconds on any thread, so keep it quick
core.mapKind(new MapPlaces.Kind("dragon", "Dragons", Message.translation("server.dragons.map.dragon"))
        .places(() -> dragons.stream()
                .map(d -> new MapPlaces.Place(d.id(), d.world(), d.x(), d.y(), d.z(), d.name())).toList()));

MapPlaces.refresh();   // after a change that should show at once
```

`Kind.startOff()` leaves a kind off until an admin turns it on. A place's `key` must stay the same, as admins' changes
are kept under it. The second argument of `Kind` is what admins read in `/tempest`; the third is what players read.
Icons are files in `Common/UI/WorldMap/MapMarkers`, so an asset pack can add its own: `MapPlaces.ICONS` lists what every
server has. Paint them white with a dark edge and the admin's colour tints them.


## Features the town unlocks: `Unlocks` (API version 8)

Some features should wait until the server has earned them: savings interest once the town has a bank, market stalls
once the market hall stands. Describe each such feature, and ask Core before using it:

```java
core.unlockFeature(new Unlocks.Feature("dragons:nest_rewards", "Dragon nest rewards",       // Registrations
        Message.translation("server.dragons.unlock.nests"), "Rock_Gem_Ruby"));
if (Unlocks.isOn("dragons:nest_rewards")) { payNestReward(); }
core.onUnlock((feature, on) -> { if (feature.equals("dragons:nest_rewards")) refreshNests(); });
```

- The id is your plugin's name and the feature; keep it the same, as admins' choices are kept under it. The second
  argument is what admins read in menus, the third what players read on `/town`.
- **Without a provider every feature is on**, so a server without Tempest Town works as before and your plugin's own
  settings decide. Tempest Town is the provider (`tempest:town`): an admin ties features to unlocks there (always on,
  always off, or once a building is finished, a date has come or another unlock came first). A feature no unlock names
  stays on.
- `isOn` is asked from any thread and answers from memory, so call it as often as you like. A listener hears a feature
  switched on or off on the thread that changed it.
- Your own provider (a plugin that decides unlocks some other way): `core.unlockProvider("mymod", feature -> ...)`
  returns `TRUE`, `FALSE`, or `null` to leave the feature on. A feature is off when any provider says off. Tell the
  plugins with `Unlocks.fire(feature, on)` when your answer changes.
- `Unlocks.features()` lists every described feature (Town's editor shows them); check `CoreAPI.runningVersion() >= 8`
  first when your plugin may run with an older Core.


## Items the server wants: `Demand` (Core, API version 17)

A plugin with orders tells Core what is wanted; any plugin asks Core, so neither depends on the other. Tempest
Contracts provides the items of its open server orders (players' own contracts do not count, so a cheap one cannot
raise everyone's pay); Tempest Jobs pays more for work that brings one in.

```java
core.demandSource("myplugin", () -> Set.of("Ore_Iron", "Wood_Oak_Trunk"));   // removed by core.close()
Demand.isWanted("Ore_Iron_Stone");   // true: the id contains a wanted id ("_Item" endings are ignored)
Demand.wanted();                     // every wanted id now, from every source (kept for 10 seconds)
```
