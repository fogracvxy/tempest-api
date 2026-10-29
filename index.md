---
title: Tempest plugins API
---

**API reference (javadoc):** [Coinflip 1.0.1](javadoc/coinflip/) · [Coins 2.0.1](javadoc/coins/) · [Core 1.0.1](javadoc/core/) · [Holograms 1.0.1](javadoc/holograms/) · [Lottery 1.1.0](javadoc/lottery/) · [Pass 1.0.1](javadoc/pass/) · [Quests 1.1.1](javadoc/quests/) · [Shop 1.1.1](javadoc/shop/) · [SlotMachine 1.1.1](javadoc/slotmachine/)

**Jars:** from the plugins' [CurseForge pages](https://www.curseforge.com/hytale/mods/search?search=tempest); compile against them with `compileOnly`.

**Questions and help:** [Discord](https://discord.gg/Q9PNVCMZXK)

# AtomicTempest plugins: API for other plugins and mods

The plugins (Core, Coins, Shop, Crates, Quests, SlotMachine, Lottery, Holograms, Coinflip) can be used from other plugins (Java) and from
content mods that have no code (JSON assets). **Core** is the base: everything shared is in `com.atomictempest.core`
(events, leaderboards, help, settings, HUD lines, perks, and the economy bridge). Each plugin has its own small `api`
package.

| Plugin | Manifest id | API |
|---|---|---|
| Core | `AtomicTempest:Core` | `com.atomictempest.core` (`economy.Economies`, events, leaderboards, help, settings, HUD lines, perks) |
| Coins | `AtomicTempest:Coins` | `com.atomictempest.coins.api.CoinsAPI` (what only Coins has), `CoinStacks` |
| Quests | `AtomicTempest:Quests` | `com.atomictempest.quests.api.QuestsAPI` |
| Lottery | `AtomicTempest:Lottery` | `com.atomictempest.lottery.api.LotteryAPI` |
| SlotMachine | `AtomicTempest:SlotMachine` | `com.atomictempest.slotmachine.api.SlotMachineAPI` |
| Shop | `AtomicTempest:Shop` | `com.atomictempest.shop.api.ShopAPI` |
| Coinflip | `AtomicTempest:Coinflip` | `com.atomictempest.coinflip.api.CoinflipAPI`, `RoomMode` |
| Events | `AtomicTempest:Events` | no API of its own: it turns on Core's `Boosts` (below) and has placeholders |
| Contracts | `AtomicTempest:Contracts` | no API of its own: the `contract_deliver` action, the `contract_pay` boost kind and placeholders |

Every API class has a version constant that goes up when something is added. Everything in these APIs is safe to call
from any thread unless it says otherwise.

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

## Money: `Economies` (Core)

The server's money, whichever plugin keeps it: Coins when it is installed, otherwise any economy VaultUnlocked offers
(Ecotale, TheEconomy, EliteEssentials...). Ask for it on every use: an economy can start after your plugin.

```java
Economy money = Economies.get();                    // com.atomictempest.core.economy; null when there is none

long balance = money.balance(uuid);
money.deposit(uuid, 250, "Dragon bounty");           // false if refused; the reason shows in Coins' wallet history
if (money.withdraw(uuid, 100, "Ferry ticket")) { /* paid */ }   // false (nothing taken) if too little or vetoed
money.has(uuid, 100);
money.format(1250);                                  // "1,250 copper", or "$1,250.00" from another economy
```

Amounts are whole numbers of the economy's smallest unit (an economy with decimals shows balances rounded down).
Always give a reason. `withdraw` asks the `WalletEvents` vetoes first, and every change through any economy reaches
`WalletEvents` listeners. Coins the player holds as items are not in the wallet until deposited.

## Coins: `CoinsAPI`

What only Coins has. `CoinsAPI` is also an `Economy`, so everything above works on it too.

```java
CoinsAPI coins = CoinsAPI.get();                    // null when Coins is not installed

coins.setBalance(uuid, 1000);                        // "Set by an admin" in the history
coins.transfer(from, to, 50, "Trade");               // "Paid: Trade" / "Received: Trade"
coins.paidAsCoins(uuid, 250, "Slot machine win");    // VERSION 4: you paid coin items instead of the wallet
List<ItemStack> items = CoinStacks.of(1250);         // coin items worth an amount, most valuable first
```

When your plugin pays out coin items instead of money (dropped, put in a tray), call `paidAsCoins` with the reason you
would give a wallet change: the balance does not change, but the economy screen (`/eco`) and the leaderboards count
the payout under its kind. Without it the money shows up only later, as "Deposited coins".

## Core: shared helpers

All in `com.atomictempest.core`, available whether or not Coins is installed.

### Hearing about money: `WalletEvents` and `PlayerActions`

```java
// Every change of any wallet (after it happened)
WalletEvents.listen((player, amount, reason, balanceAfter) -> { ... });

// What players do in the economy mods: spins, wins, tickets, shop trades, daily rewards, payments
PlayerActions.listen((player, action, amount) -> {
    if (PlayerActions.SLOT_JACKPOT.equals(action)) { ... }
});

// Report your own (other listeners, such as Quests, may count them)
PlayerActions.fire(uuid, "mymod:bounty", 250);
```

Actions: `slot_spin` (bet), `slot_win` (winnings, also when dropped as coins), `slot_jackpot`, `lottery_tickets`
(how many), `lottery_win`, `shop_buy` (cost), `shop_sell` (paid), `daily_reward`, `pay`, `crate_open` (price),
`coinflip_bet` (stake), `coinflip_win` (paid), `coinflip_loss` (stake), `quest_complete` (reward paid; Core API 5,
reported by Quests for every quest and achievement finished), `contract_deliver` (items delivered; Core API 5, reported by
Contracts for every delivery to a contract or server order).

Listeners run on the thread that made the change: keep them quick, and do world or UI work with `world.execute(...)`.

### Leaderboards: `Leaderboards`

Shown on Coins' `/leaderboards` (servers without Coins have no leaderboard screen; registering is still safe).

```java
Leaderboards.register(new Leaderboards.Board("mymod:dragons", Message.translation("server.mymod.board.title"),
        Message.translation("server.mymod.board.hint"), "server.mymod.board.count", uuid -> MyMod.dragonsKilled(uuid)));
// count key: a number with its unit, "{count, plural, one {1 dragon} other {{count} dragons}}"; null = money ("1,250 copper")
```

The board appears on `/leaderboards` after the built-in ones. It ranks every player Coins knows; players with 0 are
left out. Unregister it in your `shutdown()`.

### The coin counter: `HudLines`

```java
HudLines.register("mymod:bounty", uuid -> hasBounty(uuid)
        ? Message.translation("server.mymod.hud.bounty").param("amount", HudLines.format(bounty(uuid))) : null);
```

Up to three lines show under each player's coin counter; return null to show nothing. Called every two seconds from a
timer thread. With the Tempest board on (Core's panel on the right of the screen), every line shows there instead, and
each player picks which ones in `/board`. Give your line a name for that menu (API version 4):

```java
HudLines.name("mymod:bounty", Message.translation("server.mymod.board.bounty"));   // "Bounty"
HudLines.keys();  HudLines.nameOf(key);  HudLines.lineFor(key, uuid);              // API version 4
```

A line that is nice to have but should not push others off a full board can start off; each player switches it on in
`/board` (API version 6; Shop's daily deal does this):

```java
if (CoreAPI.runningVersion() >= 6) HudLines.startOff("mymod:bounty");
```

An economy plugin calls `HudLines.moneyChanged(player, change)` when a balance changes, so the counter shows the new
amount and the change at once instead of at its next refresh, and `HudLines.refreshMoney()` after the currency's name or
look changed (Coins does both).

### The help screen: `HelpTopics`

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

### Languages: `Lang`

Texts are Hytale translation keys. Put them in `src/main/resources/Server/Languages/<locale>/server.lang` (prefix them with
your plugin's id, so `mymod.help.title = Dragons` is `server.mymod.help.title`), set `"IncludesAssetPack": true`, and
send `Message.translation(key).param(...)`. The game fills in English for keys a language lacks. `Message.raw(text)`
still works for text that needs no translation.

```java
String language = Lang.languageOf(playerRef);                  // the language the plugins use for this player
String text = Lang.text(language, Message.translation("server.mymod.hud.bounty").param("amount", "250")); // for logs, signs, placeholders
```

The admin can pick one language for everyone (`/tempest` → General → Language), for languages Hytale does not offer
yet (German, Polish). That only covers keys under the Tempest plugins' own prefixes.

### Admin settings: `CasinoSettings`

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

### Menu themes: `Themes` (API version 3)

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

### Free and Pro editions: `Editions`

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

### Other helpers

- `Currency`: the money's name (`format`, `name`, `singular`, `plural`). Use it instead of writing "copper".
- `ChatPrefix.of(text, "#RRGGBB")`: a coloured chat tag such as "[Dragons]".
- `ItemIcons.safe(itemId)`: an item id that is safe to draw; Coins' coin items fall back to similar game items when
  Coins is not installed.
- `CoinStacks.of(amount)` (in Coins): the coin items that make up an amount (for dropping coins).
- `ReservedDrops.spawn(...)`: dropped items only one player can pick up for a while.
- `CraftRestrictions.restrict(itemId, () -> allowed)`: admin-only crafting with an on/off switch.

### Who changed what: `AdminLog` (API version 2)

Record admin changes so servers with several staff can see who did what. Lines go to
`universe/mods/atomictempest/admin-log/<day>.log`; `/tempest log` shows the newest. Line breaks in the text are
removed, so a typed name cannot add a false line.

```java
AdminLog.record(player.getUsername(), "Dragons", "Bounty: 250 -> 500");
AdminLog.record(AdminLog.CONSOLE, "Dragons", "Reset every dragon");
```

### Stopping floods: `RateLimit` (API version 2)

At most once in a while per key, for announcements, payments and messages a player could repeat:

```java
if (RateLimit.allow("dragons:announce:" + player, 30_000)) { announce(...); }
```

### A daily limit for games of chance: `PlayLimits` (API version 3)

The admin sets one daily limit per player for every game of chance together (`/tempest`, General, "Daily limit for
games"; 0 = none). A game counts each stake before it takes the money, and gives it back if the money is not taken
or the stake is refunded:

```java
Message stop = PlayLimits.reserve(player, bet);   // counts the bet, or says why not (shown to the player)
if (stop != null) { player.sendMessage(stop); return; }
if (!economy.withdraw(player, bet, "Dragon dice")) { PlayLimits.release(player, bet); return; }
```

`PlayLimits.check(player, amount)` says why without counting (for a price shown before buying);
`PlayLimits.leftToday(player)` is what the player may still stake today.

### Placeholders: `Placeholders`

Named values per player, for scoreboards, chat formats and placeholder plugins:

```java
Placeholders.value(uuid, "coins_balance_formatted");             // "1,250 copper"
Placeholders.apply(uuid, "Balance: {coins_balance_formatted}");    // {name} and %name% both work
Placeholders.register("mymod_bounty", uuid -> String.valueOf(bounty(uuid)));
```

| Placeholder | From | Example |
|---|---|---|
| `money_balance`, `money_balance_formatted`, `money_balance_short`, `money_perk` | Core (any economy) | `1250`, `1,250 copper`, `12.5K`, `VIP` |
| `coins_balance`, `coins_balance_formatted`, `coins_balance_short` | Coins | `1250`, `1,250 copper`, `1,250` |
| `coins_currency`, `coins_rank`, `coins_daily_streak`, `coins_daily_ready` | Coins | `copper`, `3`, `5`, `yes` |
| `lottery_pot`, `lottery_pot_raw`, `lottery_time_left`, `lottery_ticket_price`, `lottery_tickets` | Lottery | `5,000 copper`, `12 minutes`, `3` |
| `slots_jackpot`, `slots_jackpot_raw`, `slots_bet` | SlotMachine | `2,400 copper`, `50 copper` |
| `achievements_unlocked`, `achievements_total`, `quests_active`, `quests_current`, `quests_points`, `quests_rank`, `quests_streak` | Quests | `7`, `19`, `2`, `Daily miner  40%`, `230`, `Adventurer`, `3` |
| `coinflip_wins`, `coinflip_losses`, `coinflip_profit`, `coinflip_profit_formatted`, `coinflip_staked`, `coinflip_rooms` | Coinflip | `12`, `9`, `850`, `850 copper`, `4000`, `3` |
| `events_name`, `events_time_left`, `events_goal_percent`, `events_next` | Events | `Gold Rush`, `1h 5m`, `42`, `Monster Hunt` (empty when nothing is on) |
| `contracts_delivered`, `contracts_earned`, `contracts_earned_formatted`, `contracts_rank`, `contracts_open`, `contracts_to_collect`, `contracts_market_items`, `contracts_sold` | Contracts | `120`, `540`, `540 copper`, `Courier`, `7`, `10`, `14`, `320` |
| `events_fund_percent`, `events_fund_total`, `events_stage` | Events | `42`, `10500`, `2` (empty when the fund is off or nothing is on) |

### Announcements: `Announcements`

Big moments (jackpots, big wins, lottery winners, achievements) are posted here for integrations such as the Discord
webhook. Post your own: `Announcements.post("mymod_boss", "Steve defeated the Dragon!")` (shown in Discord when
"News from other mods" is on); listen with `Announcements.listen((category, text) -> ...)`.

### Stopping payments: `WalletEvents.addVeto`

A veto is asked before coins **leave** a wallet (bets, crates, shop purchases, payments) and can refuse with a
sentence for the player. Coins coming in cannot be refused, because the player may already have handed something
over for them.

```java
WalletEvents.addVeto((uuid, amount, reason) -> jail.contains(uuid) ? "You cannot spend coins in jail." : null);
String why = WalletEvents.checkRemoval(uuid, 100, "Ferry ticket");   // ask first to show the reason
```

### Rank perks: `Perks`

Admins set up to four perks in `/tempest` (Rank Perks tab), each tied to a permission such as `coins.perk.vip`, which a
permissions plugin gives to a rank. Read them for your own rewards:

```java
Perks.percent(uuid, Perks.Bonus.DAILY_REWARD);            // 25.0 = 25% more
Perks.boosted(uuid, Perks.Bonus.QUEST_REWARD, 100);       // 125
Perks.discounted(uuid, Perks.Bonus.SHOP_DISCOUNT, 100);   // 90
Perks.name(uuid);                                         // "VIP", or "" without a perk
```

Perks are checked against the player's permissions while they are online; offline players get none.

### One mailbox for every plugin: `Mailbox` (API version 6)

Instead of dropping a reward at a player's feet (full inventory) or keeping it in your own file until they come back
(offline), send it to their mailbox. Players open it with `/mail`, are told when a parcel arrives and when they join,
and see "Mail: 2" on the Tempest board. Claiming gives what fits; the rest stays in the parcel, and money is paid
through the server's economy.

```java
if (CoreAPI.runningVersion() >= 6) {
    String id = Mailbox.send(uuid, "Dragons", "server.dragons.mail.reward",
            Map.of("dragon", "%server.dragons.name.ember"),          // a value starting with % is a translation key
            List.of(new Mailbox.Item("Rock_Gem_Ruby", 3)), 500);   // items and money
    if (id == null) { ... }   // nothing in it, or the mailbox is full (Mailbox.MAX_PARCELS): keep the reward yourself
}
Mailbox.count(uuid);   Mailbox.of(uuid);   // what is waiting
```

The title is a key in your plugin's `server.lang`, so each player reads it in their language. Crates sends keys from
`/cratekey` and key parties there when the player is not in a world.

### Boosts for a while: `Boosts` (API version 5)

More of something for a while: monster and ore gold, daily and quest rewards, battle pass XP, shop prices. Tempest
Events turns them on during an event; your plugin can too (a full moon, a boss kill, a vote party). The plugins that pay
out ask for the boost at the moment they pay, in percent like `Perks` (100 = double). Several sources add up, to at
most 1000%; a discount takes at most 90% off.

```java
core.boost("mymod:full-moon", (kind, player) -> Boosts.MOB_COINS.equals(kind) && fullMoon() ? 50 : 0);   // Registrations
long paid = Boosts.boosted(Boosts.MOB_COINS, killer, amount);   // what Coins does for each monster
long price = Boosts.discounted(Boosts.SHOP_DISCOUNT, player, price);
Boosts.percent(Boosts.PASS_XP, player);                         // 50.0
```

| Kind | Used by | What it raises |
|---|---|---|
| `MOB_COINS` | Coins | coins a monster drops (after the admin's cap) |
| `ORE_COINS` | Coins | coins found in ores |
| `DAILY_REWARD` | Coins | the daily reward (after rank perks) |
| `QUEST_REWARD` | Quests | quest and achievement rewards (after rank perks) |
| `PASS_XP` | Pass | battle pass XP (added to the Pro weekend boost) |
| `SHOP_SELL` | Shop | what the shop pays (never more than its buying price) |
| `SHOP_DISCOUNT` | Shop | off the shop's prices |
| `"contract_pay"` | Contracts | what server orders pay (players' contracts pay what their poster put up, never boosted) |

Your own kind: pay out through `Boosts.boosted("mymod_bounty", player, amount)` and describe it with
`Boosts.describe("mymod_bounty", Message.translation("server.mymod.boost"), "Weapon_Sword_Iron")`, so Tempest Events'
editor lists it and admins can boost it in their events. Games of chance (slots, lottery, coinflip) are never boosted:
it would change the odds players were shown.

A plugin built against Core 1.0.x and run with an older Core must not touch `Boosts`; check first:
`if (CoreAPI.runningVersion() >= 5) { ... }`.

### Saving files safely: `SafeFiles`

All six plugins save through it, and other plugins may too. A save survives a crash or power cut at any moment:
the text goes to `name.tmp` (flushed to disk), the old file becomes `name.bak`, then the new one takes its place.

```java
SafeFiles.write(path, gson.toJson(data));                          // throws IOException if it could not save
MyData data = SafeFiles.load(path, reader -> gson.fromJson(reader, MyData.class));  // null if no copy can be read
SafeFiles.exists(path);                                            // also true if only the .tmp or .bak is left
```

`load` uses the newest complete copy; a file that cannot be read is kept as `name.broken-<time>` and the backup is
used instead.

## Integrations with other plugins

Set up in `/tempest`, Integrations tab.

- **VaultUnlocked**: when it is installed, Coins registers as its economy, so every VaultUnlocked plugin (player
  shops, auction houses, jobs, land claims, scoreboards' balance placeholders) uses these coins. Coins are whole
  numbers: decimal amounts are rounded in the server's favour (charges round up, payments round down), negative and
  absurd amounts are refused, transfers are all-or-nothing, and wallets cannot be deleted by other plugins. Payments
  show in wallets and the `/eco` log under the calling plugin's name. Can be switched off without a restart.
- **Cassaforte**: when it is installed, Coins registers as its economy too (the first plugin to register wins, so
  switch it off in the Integrations tab if another economy should be used). Same rules as VaultUnlocked.
- **Shared banks** (`/bank`) are the "shared accounts" of both: VaultUnlocked and Cassaforte plugins can pay into and
  out of a bank by its name. Banks are kept by Coins in `universe/mods/coins/banks`.
- **Discord**: paste a channel webhook link; jackpots, big wins, lottery winners, achievements and other mods'
  announcements are posted (each can be switched off). Only real Discord webhook links are accepted, mentions are
  disabled, Discord formatting in player names is escaped, and messages are sent one at a time (a burst is cut off
  instead of flooding the channel).

## Quests: `QuestsAPI`

### Your own kind of goal

```java
// setup(): admins can now pick "Catch fish" in the editor (/quests, Edit tab)
QuestsAPI.registerObjective("fishing:catch", "Catch fish", "Catch", "fish", true,
        "Fish id or part of it, e.g. Salmon. Empty: any fish.");

// whenever a player catches a fish
QuestsAPI.progress(playerUuid, "fishing:catch", fishItemId, 1);
```

Goals made with it are kept while your mod is not installed, but they do not count. You can also count the
built-in kinds yourself, for example `QuestsAPI.progress(uuid, "KILL", "Dragon", 1)` for a mob the game does not
report.

### Shipping goals with your mod

```java
QuestsAPI.addGoal(GoalInfo.achievement("fishing:first_catch", "First catch", "Food_Fish_Raw",
        "fishing:catch", "", 1, 50));
QuestsAPI.addGoal(GoalInfo.quest("fishing:daily", "Daily angler", "Food_Fish_Raw",
        "fishing:catch", "", 10, 80, "daily"));
```

`addGoal` does nothing if a goal with that id exists, so it is safe on every start and keeps the admin's changes.

### Reading progress and hearing about it

```java
QuestsAPI.isDone(uuid, "fishing:first_catch");
QuestsAPI.progressOf(uuid, "fishing:daily");
QuestsAPI.goals();                                  // every goal, as GoalInfo
QuestsAPI.onComplete((uuid, goal) -> { ... });      // after the reward was paid
```

### Custom triggers (no new objective needed)

Admins can make a goal of the kind **Custom trigger** and type a name in "Which one", for example `visit_shrine`.
It counts whenever that trigger fires, from any of these:

- Java: `QuestsAPI.trigger(uuid, "visit_shrine", 1)`
- A command (console, admins, other plugins): `/questtrigger <player> visit_shrine 1` (permission `quests.admin`)
- A content mod's item, block or NPC: the `Quests_Trigger` interaction (below)

## Lottery, slot machines, shop

```java
LotteryAPI.getPot();  LotteryAPI.addToPot(1000);      // a sponsored round
LotteryAPI.buyTickets(uuid, name, 5);                 // null when bought, otherwise why not
SlotMachineAPI.getJackpot();  SlotMachineAPI.addToJackpot(500);
ShopAPI.setOffer("Food_Fish_Raw", 20, 8, "Food");     // add or reprice; false if the shop is full
ShopAPI.removeOffer("Food_Fish_Raw");
ShopAPI.buyPrice("Food_Bread");                       // with the server's sale percentage
```

## Crates

Crates are made by admins in game (`/crates`, Edit crates, permission `crates.admin`) and saved in
`universe/mods/crates/crates.json`. Each opening is reported as `PlayerActions.CRATE_OPEN` (amount: the price), which
the Quests mod counts for "Open crates" goals; prizes rarer than the admin's threshold are posted to
`Announcements.BIG_WIN`. The price is taken (and can be vetoed) before the prize is drawn.

- Keys: a crate can need `keyAmount` of an item (`keyItem`), usually `Crate_Key_Bronze`, `Crate_Key_Silver` or
  `Crate_Key_Gold`. Give them from other plugins or the console with `/cratekey <player> <bronze|silver|gold|item id>
  <amount>` (permission `crates.admin`); right-clicking a key opens `/crates` (page id `Crates_Page`).
- A crate can be locked to a permission (`permission`, such as `crates.vip`).
- Prizes can be a permission or a permissions group ("rank"), for some days or for good, given through the server's
  `PermissionsModule` and taken back when they run out (unless the player already had them), or a console command
  with `{player}` and `{uuid}`.

- Crate blocks (`Crate_Block_Wooden`, `Crate_Block_Iron`, `Crate_Block_Golden`): which crate each one opens is in
  `universe/mods/crates/places.json` (with each crate's last Rare or better win). Admins set it by right-clicking the
  block (crouch + right-click to change it). The text, circling prizes and floating prizes of openings over them use
  Holograms (below), which is optional for Crates: without it the lid, sparkles and sounds still play. To use Holograms as an
  optional dependency, touch its classes in one class of yours only, after checking that they exist.

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

## Coinflip: `CoinflipAPI` and `RoomMode` (Coinflip plugin)

Coinflip rooms: a player makes a room with a stake, others join, the coin decides. Add `"AtomicTempest:Coinflip": "*"`
to your manifest's dependencies and compile against the Coinflip jar (the Maven repository above, `compileOnly`).

```java
CoinflipAPI flips = CoinflipAPI.get();               // null while Coinflip is not running
List<Room> open = flips.rooms();                      // open and flipping rooms, oldest first
CoinflipAPI.Result made = flips.create(player, CoinflipAPI.COINS_1V1, Bet.coins(500, Side.HEADS));
if (!made.isOk()) player.sendMessage(made.problem());
flips.join(other, made.room().id(), flips.mode(CoinflipAPI.COINS_1V1).matching(made.room(), other.getUuid()));
flips.cancel(roomId);                                 // every stake goes back; check who asks first
flips.stats(uuid).profit();                           // wins, losses, staked, won
flips.listen(new CoinflipAPI.Listener() {
    public void flipped(Room room) { ... }            // full: winner fixed, coin in the air
    public void finished(Room room) { ... room.winner().name() ... room.payout() ... }
    public void closed(Room room, CoinflipAPI.CloseReason reason) { ... }   // CANCELLED, EXPIRED, RESTART
});
```

- A `Room` has an id, its mode, its `entries()` (player, name, side, value, data; the first made the room), its state
  (`OPEN`, `FLIPPING`, `DONE`, `CLOSED`), `pot()`, `fee()`, `payout()`, `winner()`, and the fairness data: `hash()`
  from the start, `seed()` once the coin has landed, `roll()` once it is full.
- **Provably fair:** the seed is 32 random bytes (hex) from `SecureRandom`; `hash` is SHA-256(seed). The roll is the
  first 13 hex digits of SHA-256(seed + ":" + room id) divided by 16^13 (0 to 1). The mode turns the roll into a
  winner; the coins mode: under 0.5 is heads.
- **Escrow:** stakes are taken when a player makes or joins a room and stay with the room. Open rooms are saved in
  `universe/mods/coinflip/rooms.json`: on the next start (after a stop or a crash) their stakes go back, and a flip
  that was in the air is paid. What cannot be paid or refunded yet (no economy, or the mode's plugin is missing) is
  kept and tried again every few seconds. Stats are in `stats.json`.
- Every flip is reported through `PlayerActions` (`coinflip_bet`, `coinflip_win`, `coinflip_loss`), big wins through
  `Announcements.BIG_WIN`, and profit is a `Leaderboards` board (`coinflip:profit`).

### Your own kind of room: `RoomMode`

Coinflip comes with one mode, `coins_1v1`. A mode decides what players stake, how many play, how the winner is
chosen and how the pot is paid; Coinflip does the rest the same for every mode (the room list, joining and watching,
escrow bookkeeping, the fair roll, the animation, the fee setting, stats, news). Item rooms valued by Shop prices,
jackpot rooms for many players, private invite-only rooms or tournaments are all modes.

```java
public final class JackpotMode implements RoomMode {
    public String id() { return "myplugin_jackpot"; }                 // saved with its rooms
    public Message title() { return Message.translation("server.myplugin.jackpot"); }
    public int maxPlayers() { return 8; }
    public Message describe(Room room) { return Message.raw(Currency.format(room.pot())); }
    public boolean canSee(Room room, UUID viewer) { return true; }    // private rooms: only invited players
    public Bet matching(Room room, UUID joiner) { return Bet.coins(room.creator().value(), null); }  // null: not from the list
    public Taken take(PlayerRef player, Room room, Bet bet) {         // room is null when making a room
        // check the bet, take the stake; nothing may be kept when refused
        return Economies.get().withdraw(player.getUuid(), bet.amount(), "Jackpot stake")
                ? Taken.ok(bet) : Taken.refused(Message.raw("Not enough money"));
    }
    public boolean refund(Room room, Room.Entry entry) {              // false: tried again later
        return Economies.get() != null && Economies.get().deposit(entry.player(), entry.value(), "Jackpot refund");
    }
    public Room.Entry pick(Room room, double roll) { ... }            // weighted by entry.value(), say
    public boolean pay(Room room, Room.Entry winner) {                // false: tried again later
        return Economies.get() != null && Economies.get().deposit(winner.player(), room.payout(), "Jackpot win");
    }
    public boolean full(Room room) { return room.entries().size() >= maxPlayers(); }  // the default
}

CoinflipAPI.get().registerMode(new JackpotMode());   // in setup(); unregisterMode("myplugin_jackpot") in shutdown()
```

- `Bet(amount, side, data)`: `amount` is money (or the worth of what is staked), `side` is null in modes without
  sides, `data` is text for anything else (item ids, an invited player). What `take` returns becomes the entry: its
  amount is the entry's `value()`, used for the pot, stats and news.
- `fee(room, percent)` defaults to the server's fee setting applied to the pot; override it for stakes that are not
  money.
- Every method may be called from any thread, and a player being refunded or paid may be offline. Rooms of a mode
  that is not registered stay saved and are settled once it is registered again.
- The Rooms page lists rooms of every mode (with the mode's title on the row) and lets players join with
  `matching`; `/cf create` and the Create room tab make `coins_1v1` rooms. A mode that needs its own way to make or
  join rooms (choosing items) calls `create` and `join` from its own page or command.

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

## Content mods without code (JSON)

These interaction types can be used in any item, block or NPC interaction once the plugin is installed:

```json
{ "Type": "Coins_Give", "Amount": 50, "Reason": "Found a treasure chest" }
{ "Type": "Coins_Take", "Amount": 20, "Reason": "Ferry ticket", "Message": "Have a nice trip!" }
{ "Type": "Quests_Trigger", "Trigger": "visit_shrine", "Amount": 1 }
```

- `Coins_Give` adds coins to the player who used it. `Message` is optional (otherwise they are told the amount).
- `Coins_Take` takes coins, or **fails** when the player has too little: nothing is taken, the player is told what
  they need, and the interactions after it in the same chain do not run. Put it before what is being paid for
  (opening a door, giving an item).
- `Quests_Trigger` counts a custom trigger for the player (see above).
- These run every time the interaction does. For anything that should not be farmed (a reward chest, a shrine),
  give the interaction a cooldown in your JSON, or have the goal count once (an achievement with amount 1), so a
  player cannot click it a thousand times.

Example: an item that gives a reward once used (in `Server/Item/Items/Treasure_Map.json`):

```json
"Interactions": {
  "Secondary": {
    "Interactions": [
      { "Type": "Coins_Give", "Amount": 100, "Reason": "Treasure map" },
      { "Type": "Quests_Trigger", "Trigger": "treasure_map" }
    ]
  }
}
```

## Rules of thumb

- Check results: `withdraw` returns false when the player has too little; give nothing in that case.
- Take first, give second (coins, then items; items, then coins), and pay only for what was really taken.
- A reward that can be had once (a claim, a finished goal): mark it and write it to disk first, then give it; take the
  mark back only if giving failed. Two clicks, two pages or a crash in between then never give it twice (Pass, Quests).
- Keep one lock per thing (a player's data, a room), and call the economy or another plugin while holding it only
  when no listener can ever wait for that lock: economies call their listeners (Quests, Pass), and a listener
  waiting for your lock would freeze both. Coinflip takes stakes under its room lock, which nothing else takes;
  Pass gives rewards after its player lock is let go.
- Never trust numbers from a page's event data: clamp amounts on the server to what your page offers.
- Never let something be sold back for more than it costs, and keep coin items out of shops.

- Never tie coins to real money.
- Give every coin change a reason.
- Unregister what you registered (leaderboards, HUD lines, help topics, settings tabs, listeners) in `shutdown()`.
- Prefer `PlayerActions` over parsing wallet reasons: reasons are for people and may change.


---

Tempest plugins for Hytale by AtomicTempest. Not made or endorsed by Hypixel Studios.
