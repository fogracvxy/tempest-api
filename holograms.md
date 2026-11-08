# Holograms

Floating text, items, statues and rankings.

## Holograms: `Holograms` (Holograms plugin)

Floating text, coloured text pictures, floating show-only items and player statues, from any plugin (`Holograms.API_VERSION`, 3). Holograms placed through this
API have no limit in either edition; the free edition limits only the ones admins place with `/holo`. Add `"AtomicTempest:Holograms": "*"` to your manifest's
dependencies (or `OptionalDependencies`, as Crates does) and compile against the Holograms jar (the Maven repository above, `compileOnly`).

```java
Hologram sign = Holograms.text("myplugin", world, new Vector3d(10.5, 66, 4.5),
        List.of(Message.raw("Welcome!"), Message.translation("server.myplugin.sign.hint")));
sign.setLines(...);          // players see the new text within a moment
sign.moveTo(...);  sign.remove();
FloatingItem gem = Holograms.item("myplugin", world, position, "Rock_Gem_Ruby");
gem.glow("#FF4060");         // a coloured light on it (null = none)
gem.moveTo(...);             // on the world thread it moves at once: call it every tick to animate
Statue champion = Holograms.statue("myplugin", worldName, feet, playerUuid);   // API_VERSION 2
champion.show(otherUuid);    // another player; null shows nobody
TextImage banner = Holograms.coloured("myplugin", worldName, feet,
        () -> List.of(Message.raw("<gradient:#FF4040:#40C0FF>Welcome</gradient>"), Message.raw("&aShop &7open")));  // API_VERSION 3
banner.setSize(1.5f);  banner.setFacing(false, yaw);   // a fixed yaw instead of facing every player
Holograms.texts();           // every plugin's floating text now (API_VERSION 3; /holo menu lists them)
Colours.strip("&cRed");      // "Red"; Colours.runs(...) splits a line into coloured pieces for menus
Holograms.removeAll("myplugin");   // in shutdown()
```

- Coloured text (API_VERSION 3): `Holograms.coloured` draws the lines into a picture (the game's interface font,
  Nunito Sans, OFL) and hangs it on one flat two-sided model; the picture and model are sent to every player while
  they play, and to each player who joins. Codes: `&c` and the other 15 classic colours, `&#FF8800` or `<#FF8800>`,
  `<red>`..`</red>`, `<gradient:#F00:#00F>text</gradient>`, `<rainbow>text</rainbow>`. Everyone sees the same
  picture: the server's language, placeholders for nobody (server-wide ones work). A changed text is drawn again
  at most every 15 s, and only while a player is near. By default it faces every player at once: each player's copy
  of its turn is rewritten on the way out (the same packet watcher as the languages), 20 times a second while players move. Plain floating text leaves the codes out, since the game draws it in white.

- A statue is a life-size figure of a player as they looked when they last joined (Holograms keeps each player's
  skin in `universe/mods/holograms/skins.json`), turning to face the nearest player. It shows nothing for a player
  Holograms has not seen join. Leaderboard holograms placed with `/holo` can stand their first place on top
  ("Statue of 1st" in the menu).

- Lines are `Message`s: translation keys (with parameters, even nested ones) are shown in each player's language, and
  placeholders (`{lottery_pot}`) are filled in for each player. The game draws it in white; for colours use
  `Holograms.coloured`. The last line is at the position, the others above it (`/tempest` → Holograms sets the spacing).
- Entities exist only while a player is within the view distance and the chunk is loaded; they are never saved and
  vanish by themselves a minute after the plugin stops renewing them. Any thread may call the API.
- How it works: each line is an invisible model (`Server/Models/Holograms_Anchor.json`) with a `Nameplate`; an
  outbound packet watcher swaps the nameplate text in each player's own `EntityUpdates` for their language. Floating
  items are item drops without a `Velocity` (so item physics leave them alone), with `PreventPickup` and
  `PreventItemMerging`.
- Admins place their own with `/holo create|edit|move|delete` or the `/holo menu` page (`holograms.admin`), saved
  in `universe/mods/holograms/holograms.json`.
- Lines worked out again on every refresh (only while a player is near; at most every 5 s):
  `Holograms.live("myplugin", worldName, position, () -> List.of(...))` or `hologram.setSource(...)`. The supplier
  runs on the Holograms timer thread.
- Top lists for leaderboard holograms (`/holo create <name> top:<list> [places]`): Holograms offers Core's
  `Leaderboards` boards and every per-player number placeholder by itself (`top:money`, `top:coins_balance`,
  `top:quests:achievements`), ranking the players it has seen join. A plugin that knows every player (online or
  not) can register its own list:

```java
Rankings.register("mymod_dragons", new Rankings.Ranking() {
    public Message title() { return Message.translation("server.mymod.board.title"); }
    public List<Rankings.Entry> top(int count) { ... new Rankings.Entry(name, Message.raw("12 dragons")) ... }
});
Rankings.unregister("mymod_dragons");   // in shutdown()
```

- Coloured text is not possible with nameplates; `Holograms.coloured` draws pictures instead (above).
