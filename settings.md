# Settings and menus

A /tempest settings tab for your plugin, menu themes, editions, languages and help pages.

## Admin settings: `CasinoSettings`

```java
CasinoSettings.register(new SettingsTab("Dragons", List.of(
        Setting.heading("Bounties", "What players earn for dragons."),
        Setting.number("Bounty", 0, 1_000_000, 0, () -> config.bounty, v -> config.bounty = (long) v)
                .hint("Per dragon.").preview(() -> Message.raw("= " + Currency.format(config.bounty))),
        Setting.toggle("Announce kills", () -> config.announce, v -> config.announce = v),
        Setting.text("Chat tag", true, () -> config.tag, v -> config.tag = v).icon("Weapon_Sword_Iron").caption("Tag"),
        Setting.color("Colour", () -> config.tagColor, v -> config.tagColor = v).inline()
), config::save));
```

Your tab appears in `/tempest` for admins (permission `tempest.admin`), up to 40 settings. Staff with
`tempest.admin.<group>` see only that group's tabs. The group is the title in lower case without spaces
(`tempest.admin.dragons`); give it yourself when your plugin has more than one tab, so one permission covers them all
(API 2): `new SettingsTab("Dragon Loot", "dragons", settings, config::save)`.

A longer explanation goes behind a yellow (?) beside the label, shown when the admin points at it, and a setting
that runs something as the server console (a command) should need more than the tab's own permission (API 20):

```java
Setting.number("Bounty", 0, 1_000_000, 0, () -> config.bounty, v -> config.bounty = (long) v)
        .info("What a player earns for each dragon they kill. 0: no bounty."),
Setting.text("Command per kill", true, () -> config.command, v -> config.command = v)
        .permission("tempest.admin")   // staff with only tempest.admin.dragons see it but cannot change it
```

Where there are only a few right answers, give admins a dropdown instead of a number or a code (API 3):

```java
Setting.choice("Difficulty", List.of(Setting.option("easy", "Easy"), Setting.option("hard", "Hard")),
        () -> config.difficulty, v -> config.difficulty = v),
Setting.choiceNumber("Corner", List.of(Setting.option("1", "Top right"), Setting.option("2", "Left")),
        () -> config.corner, v -> config.corner = v),             // a setting kept as a whole number
Setting.item("Reward item", () -> config.item, v -> config.item = v),   // every item, with a search box
Setting.choice("Crate", () -> crateChoices(), true, () -> config.crate, v -> config.crate = v)  // worked out each time
```

A dropdown only saves one of its own entries. Give your tab an icon for the menu's side bar (API 3):
`new SettingsTab("Dragons", settings, config::save).icon("Weapon_Sword_Iron")`. The side bar lists Core's tabs, then
plugins with several tabs under their name, then the rest under "Plugins".

Show a row only when it means something (API 22). The menu hides and shows it the moment the admin changes the field
it follows, before saving; a hidden row keeps its value and is saved as it is. On a heading, the rule covers its whole
section, up to the next heading:

```java
Setting.toggle("Announce kills", () -> config.announce, v -> config.announce = v),
Setting.text("Announcement", true, () -> config.text, v -> config.text = v)
        .shownWhenOn("Announce kills"),                           // only while that toggle is on
Setting.number("Bonus (%)", 0, 100, 0, () -> config.bonus, v -> config.bonus = v)
        .shownWhenAboveZero("Bounty"),                            // only while that number is above 0
Setting.color("Own colour", () -> config.own, v -> config.own = v)
        .shownWhenChosen("Style", "own"),                         // only while that dropdown has this value
Setting.heading("Dragon riders", "").shownWhen(() -> RidersMod.installed()),  // a whole section, while a mod is there
Setting.number("XP per prestige", 0, 1000, 0, () -> config.prestigeXp, v -> config.prestigeXp = v)
        .shownWhen(() -> Levels.has(Levels.PRESTIGE))             // only with a leveling mod that has prestige
```

The rule names the other field by its label in the same tab. A rule that names a field the tab does not have, or that
fails, shows the row: hiding a setting by mistake is worse than showing one. Guard it for older Cores
(`CoreAPI.runningVersion() >= 22`), as Tempest Pass does in `PassLevels.rules`.

A Reset to defaults button (API 11): give the tab the same settings built on a fresh config. An admin clicks it twice,
every value is copied over, logged and saved through your save action. Guard it for older Cores:

```java
SettingsTab tab = new SettingsTab("Dragons", settings(config), config::save);
if (CoreAPI.runningVersion() >= 11) {
    tab.defaults(() -> settings(new DragonsConfig()));
}
```


## Menu themes: `Themes` (API version 3)

The admin picks the look of every Tempest menu (`/tempest`, General, "Menu theme"): Tempest gold (the plugins' own
look), Dark crimson, Elven emerald, Frostbite, Amethyst, Cyberpunk neon, Cozy parchment, or their own two colours.
Use it on your pages so they match:

Put your `.ui` files in a folder with your own name in it (`Common/UI/Custom/Pages/MyName_Dragons/`), never straight
in `Pages/` or in a folder named after a feature (`Pages/Quests/`): every mod's UI files and the game's share one
folder tree in the client, and a file at the same path as another mod's replaces it. Tempest's own are in
`Pages/AtomicTempest_<Plugin>/` and `Hud/AtomicTempest_*`.

```java
cmd.append("Pages/MyName_Dragons/DragonsPage.ui");
Themes.tint(cmd, "#Content");                            // the page's body in the theme's colour
cmd.set("#Heading.TextSpans", Themes.accent("Bounties")); // titles and highlights
Themes.row(cmd, "#List[0]");                             // a row in the theme's row colour
```

The default theme paints nothing, so a page looks as its `.ui` file says until an admin picks a theme.


## Free and Pro editions: `Editions`

For plugins that come as a free and a Pro jar (Crates, Quests and Holograms do; yours can too). Register the edition
in `setup()`, unregister it in `shutdown()`. Only admins ever see these texts.

```java
Editions.register("MyPlugin", isPro, List.of("any number of arenas", "team modes"), licensedTo);
settings.add(Editions.heading("MyPlugin"));          // "Free edition: the Pro edition adds ..." at the end of your /tempest tab
String why = Editions.limitReached("MyPlugin", "5 arenas"); // "The free edition of MyPlugin has up to 5 arenas. ..."
String what = Editions.proOnly("MyPlugin", "Team modes");   // "Team modes are in the Pro edition of MyPlugin."
Editions.isPro("Crates");                            // which edition another plugin runs
```

`licensedTo` is shown in the Pro heading ("Licensed to ..."); pass "" when there is none. Keep your API the same in both
editions, and let free limits only stop making more, never break what a server already has.


## Languages: `Lang`

Texts are Hytale translation keys. Put them in `src/main/resources/Server/Languages/<locale>/server.lang` (prefix them with
your plugin's id, so `mymod.help.title = Dragons` is `server.mymod.help.title`), set `"IncludesAssetPack": true`, and
send `Message.translation(key).param(...)`. The game fills in English for keys a language lacks. `Message.raw(text)`
still works for text that needs no translation.

```java
String language = Lang.languageOf(playerRef);                  // the language the plugins use for this player
String text = Lang.text(language, Message.translation("server.mymod.hud.bounty").param("amount", "250")); // for logs, signs, placeholders
```

The admin can pick one language for everyone (`/tempest` → General → Language), for languages Hytale does not offer
yet (German, Italian, Polish). That only covers keys under the Tempest plugins' own prefixes.


## The help screen: `HelpTopics`

```java
HelpTopics.register(new HelpTopic("mymod", 80, Message.translation("server.mymod.help.title"), "Weapon_Sword_Iron",
                uuid -> List.of(
                        HelpTopic.heading("server.mymod.help.bounties"),
                        Message.translation("server.mymod.help.earn").param("amount", Currency.format(250))))
        .button(Message.translation("server.mymod.help.open"), (player, ref, store) -> { openPage(player, ref, store); return false; }));
HelpTopics.registerCommand("server.mymod.help.mod", "/bounties", Message.translation("server.mymod.help.bountiesCmd"));
```

`HelpTopics.open(playerRef, ref, store)` opens the help screen (for a command like `/coins`).
`HelpTopics.justWelcomed(uuid)` is true for a minute after the help screen opened by itself for a new player: a page you
would open on join should wait, so the two do not cover each other.

`HelpTopic.heading(key)` makes a heading line (bold). Shown in `/guide` (and `/coins` with Coins) for every player.
