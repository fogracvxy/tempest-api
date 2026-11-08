# Rewards, mail and boosts

Item and command rewards, the mailbox, boosts for a while and rank perks.

## Item and command rewards: `Rewards` (API version 18)

The same rewards in every plugin. Admins type items as one line (`Ingredient_Bar_Iron x16, Food_Bread x5`; `16
Food_Bread` and a bare id for one work too), at most `Rewards.MAX_KINDS` (8) kinds and `MAX_AMOUNT` (1000) of each.
`giveItems` puts them in the inventory; what does not fit, and everything for a player who is offline, waits in the
mailbox. The parcel is saved before anything is given, so a crash can neither lose nor double it. Any thread.

```java
if (CoreAPI.runningVersion() >= 18) {
    String problem = Rewards.itemsProblem(text);              // in the editor: null when it can be saved
    List<Mailbox.Item> items = Rewards.parseItems(text);      // the same ids added together, junk left out
    Rewards.describe(items);                                  // "16 Ingredient Bar Iron, 5 Food Bread", for players
    Rewards.giveItems(uuid, "Dragons", "server.dragons.mail.reward", Map.of("dragon", "Ember"), items);
    Rewards.commandProblem(command);                          // one line, at most MAX_COMMAND (200) characters
    Rewards.runCommand(uuid, name, "cratekey give {player} vote 1");   // as the console; name null: looked up online
}
```


## One mailbox for every plugin: `Mailbox` (API version 6)

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


## Boosts for a while: `Boosts` (API version 5)

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

Personal boosters need no code: `/booster <player> <kind> <percent> <minutes>` (permission `tempest.boosters`, also
from the console) gives one player a boost of any described kind for a while, so a crate's command prize, a quest or a
vote plugin can hand them out. They count like any other source and show under the coin counter with the time left.
`/booster <player> clear 0 0` takes them away.


## Rank perks: `Perks`

Admins set up to four perks in `/tempest` (Rank Perks tab), each tied to a permission such as `coins.perk.vip`, which a
permissions plugin gives to a rank. Read them for your own rewards:

```java
Perks.percent(uuid, Perks.Bonus.DAILY_REWARD);            // 25.0 = 25% more
Perks.boosted(uuid, Perks.Bonus.QUEST_REWARD, 100);       // 125
Perks.discounted(uuid, Perks.Bonus.SHOP_DISCOUNT, 100);   // 90
Perks.name(uuid);                                         // "VIP", or "" without a perk
```

Perks are checked against the player's permissions while they are online; offline players get none.

`Perks.highestPercent(Perks.Bonus.SHOP_DISCOUNT)` (API version 9) is the best value any perk on the server gives,
whoever has it. Cap what you pay players with it, so someone with a discount cannot buy for a friend who sells back.

`Perks.Bonus.PASS_XP` (API version 10) is a rank's pass XP bonus; Tempest Pass (Pro) adds it to every XP gain.
Check `CoreAPI.runningVersion() >= 10` before using it.
