# Boards, HUD and placeholders

Leaderboards, the money counter and progress bars, placeholders and announcements.

## Leaderboards: `Leaderboards`

Shown on Coins' `/leaderboards` (servers without Coins have no leaderboard screen; registering is still safe).

```java
Leaderboards.register(new Leaderboards.Board("mymod:dragons", Message.translation("server.mymod.board.title"),
        Message.translation("server.mymod.board.hint"), "server.mymod.board.count", uuid -> MyMod.dragonsKilled(uuid)));
// count key: a number with its unit, "{count, plural, one {1 dragon} other {{count} dragons}}"; null = money ("1,250 copper")
```

The board appears on `/leaderboards` after the built-in ones. It ranks every player Coins knows; players with 0 are
left out. Unregister it in your `shutdown()`.


## The coin counter: `HudLines`

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


## A progress bar on the screen: `HudLines.progress` (Core, API version 17)

A bar under the money counter for five seconds: an item icon, a short line and how far along (0 to 1). A newer bar
replaces the one showing. Shown even while the Tempest board replaces the counter, never when the player hid it with
/hud. One HUD for everything, so it never fights another mod's HUD.

```java
HudLines.progress(uuid, "Tool_Pickaxe_Iron", Message.raw("Miner 14   +6 XP"), 0.42f);
HudLines.progress(uuid, "Tool_Pickaxe_Iron", Message.raw("Miner 14"), 0.42f, 8000);   // shown for 8 seconds
```


## Placeholders: `Placeholders`

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
| `contracts_delivered`, `contracts_earned`, `contracts_earned_formatted`, `contracts_rank`, `contracts_open`, `contracts_to_collect`, `contracts_market_items`, `contracts_sold`, `contracts_bounty`, `contracts_bounties_claimed`, `contracts_most_wanted` | Contracts | `120`, `540`, `540 copper`, `Courier`, `7`, `10`, `14`, `320` |
| `events_fund_percent`, `events_fund_total`, `events_stage` | Events | `42`, `10500`, `2` (empty when the fund is off or nothing is on) |
| `town_unlocked`, `town_total`, `town_mayor` | Town | `3`, `5`, `Steve` |


## Announcements: `Announcements`

Big moments (jackpots, big wins, lottery winners, achievements) are posted here for integrations such as the Discord
webhook. Post your own: `Announcements.post("mymod_boss", "Steve defeated the Dragon!")` (shown in Discord when
"News from other mods" is on); listen with `Announcements.listen((category, text) -> ...)`.
