# Safety and helpers

Admin logs, rate limits, play limits, AFK checks, the doctor and crash-safe files.

## Who changed what: `AdminLog` (API version 2)

Record admin changes so servers with several staff can see who did what. Lines go to
`universe/mods/atomictempest/admin-log/<day>.log`; `/tempest log` shows the newest. Line breaks in the text are
removed, so a typed name cannot add a false line.

```java
AdminLog.record(player.getUsername(), "Dragons", "Bounty: 250 -> 500");
AdminLog.record(AdminLog.CONSOLE, "Dragons", "Reset every dragon");
```


## Stopping floods: `RateLimit` (API version 2)

At most once in a while per key, for announcements, payments and messages a player could repeat:

```java
if (RateLimit.allow("dragons:announce:" + player, 30_000)) { announce(...); }
```


## A daily limit for games of chance: `PlayLimits` (API version 3)

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


## Who is really playing: `Activity` (API version 9)

Pay for time played only to players who are there. A player counts as active while they turned their view in the last
`Activity.AFK_MINUTES` (5) minutes; water pushing them or standing in a farm moves them but never turns their head.
A player who has just joined counts as active.

```java
if (Activity.isActive(uuid)) { addMinutePlayed(uuid); }
Activity.idleMillis(uuid);   // how long they have not turned their view
```

Tempest Pass (minutes played) and Tempest Events (playtime goals) use it. Check `CoreAPI.runningVersion() >= 9` first.


## Catching money from nothing: `Doctor` (API version 13)

`/tempest doctor` looks through every plugin's settings for ways players could make money from nothing, before they
find them. A plugin that pays coins or takes items for coins adds a check, and its prices take part in every check the
doctor runs across plugins:

```java
core.doctor(new Doctor.Check() {                                     // Registrations
    public void prices(Doctor.Market market) {
        // where players buy items for coins, and get coins for items, with the settings as they are now
        market.buy("my stall", "Ingredient_Bar_Iron", 12, 0, "/mystall");        // 0 = no daily limit
        market.sell("my bounty board", "Ingredient_Bar_Iron", 20, 64, "/bounties");
        market.play(Doctor.CRATE_OPENS, averageLossPerOpening, "my crate");    // for quests that count openings
    }
    public void check(Doctor.Market market, Doctor.Findings findings) {
        long worth = market.worth("Rock_Gem_Diamond");                // the most any plugin pays for one
        if (myPrize > myPrice) findings.problem("prize", "My prize is worth more than it costs.", "My price");
    }
});
```

Core itself finds every item bought cheaper in one place than it sells for in another, and every game recipe whose
parts, bought at their cheapest, cost less than what it makes sells for (items only admins may craft are left out).
A finding is `problem` (money from nothing), `warning` (easy to farm) or `hint`. Its key must stay the same between
checks, as the admin can mark it "on purpose". A fix is a command (`"/shop"`) or the label of a setting in /tempest,
which the FIX button searches for. Texts are for admins and may be English. Give the most a player can get (rank perks
and running `Boosts` included): the doctor is there for the worst case. `new Doctor.Findings(list)` collects findings in a
plugin's own tests. Check `CoreAPI.runningVersion() >= 13` first, and keep the check in a class of its own.


## Saving files safely: `SafeFiles`

All six plugins save through it, and other plugins may too. A save survives a crash or power cut at any moment:
the text goes to `name.tmp` (flushed to disk), the old file becomes `name.bak`, then the new one takes its place.

```java
SafeFiles.write(path, gson.toJson(data));                          // throws IOException if it could not save
MyData data = SafeFiles.load(path, reader -> gson.fromJson(reader, MyData.class));  // null if no copy can be read
SafeFiles.exists(path);                                            // also true if only the .tmp or .bak is left
```

`load` uses the newest complete copy; a file that cannot be read is kept as `name.broken-<time>` and the backup is
used instead.


## Other helpers

- `Currency`: the money's name (`format`, `name`, `singular`, `plural`). Use it instead of writing "copper".
- `ChatPrefix.of(text, "#RRGGBB")`: a coloured chat tag such as "[Dragons]".
- `ItemIcons.safe(itemId)`: an item id that is safe to draw; Coins' coin items fall back to similar game items when
  Coins is not installed.
- `CoinStacks.of(amount)` (in Coins): the coin items that make up an amount (for dropping coins).
- `ReservedDrops.spawn(...)`: dropped items only one player can pick up for a while.
- `CraftRestrictions.restrict(itemId, () -> allowed)`: admin-only crafting with an on/off switch.
