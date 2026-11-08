# Player actions

Hear what players do in every Tempest plugin, and report your own.

All in `com.atomictempest.core`, available whether or not Coins is installed.


## Hearing about money: `WalletEvents` and `PlayerActions`

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
Contracts for every delivery to a server order), `events_top` (the place, 1 to 3, when an event ends), `events_helped`
(a goal reached and the helper paid), `trade_done` (to each side of a finished trade that moved something; the amount is
a number that always stands for the same other player), `town_mayor` (elected at the end of a term).

Listeners run on the thread that made the change: keep them quick, and do world or UI work with `world.execute(...)`.


## Reference: every player action

Everything the Tempest plugins report through `PlayerActions` (Core), in one place. Listen once and count what you
need; the amount means what the table says. Listeners run on the thread that reported: keep them quick and
thread-safe.

```java
PlayerActions.listen((player, action, amount) -> {
    switch (action) {
        case PlayerActions.CRATE_OPEN -> ...;     // a constant on PlayerActions
        case "jobs_level" -> ...;                 // the other plugins' actions are plain strings
        default -> { }
    }
});
```

| Action | From | Fires when | Amount |
|---|---|---|---|
| `slot_spin` (`PlayerActions.SLOT_SPIN`) | Slots | A slot machine spin | The bet |
| `slot_win` (`SLOT_WIN`) | Slots | A win, paid or dropped as coins | The winnings |
| `slot_jackpot` (`SLOT_JACKPOT`) | Slots | A jackpot (also reported as a win) | The winnings |
| `lottery_tickets` (`LOTTERY_TICKETS`) | Lottery | Tickets bought | How many |
| `lottery_win` (`LOTTERY_WIN`) | Lottery | A lottery win | The prize |
| `shop_buy` (`SHOP_BUY`) | Shop | Bought from the shop | What it cost |
| `shop_sell` (`SHOP_SELL`) | Shop | Sold to the shop | What it paid |
| `daily_reward` (`DAILY_REWARD`) | Coins | A daily reward claimed | The reward |
| `pay` (`PAY`) | Coins | A payment to another player | What was paid |
| `crate_open` (`CRATE_OPEN`) | Crates | A crate opened | What it cost (0 when free) |
| `quest_complete` (`QUEST_COMPLETE`, API 5) | Quests | A quest or achievement finished | The reward paid, 0 if none |
| `contract_deliver` (`CONTRACT_DELIVER`, API 5) | Contracts | Items delivered to a contract or server order | How many items |
| `coinflip_bet` (`CoinflipAPI.ACTION_BET`) | Coinflip | A stake put into a room | The stake |
| `coinflip_win` (`CoinflipAPI.ACTION_WIN`) | Coinflip | A flip won | The payout |
| `coinflip_loss` (`CoinflipAPI.ACTION_LOSS`) | Coinflip | A flip lost | The stake |
| `jobs_paid` | Jobs | Pay for job work | What was paid |
| `jobs_level` | Jobs | A job level reached | The level |
| `jobs_tree` | Jobs | A whole tree felled as a woodcutter | 1 |
| `jobs_found` | Jobs | A new place found as an explorer | 1 |
| `events_top` | Events | Finished in an event's top three | The place (1 to 3) |
| `events_helped` | Events | Helped enough when a goal (or overdrive stage) was reached | 1 |
| `projects_donate` | Projects | Items given to a town project | How many items |
| `projects_coins` | Projects | Coins given to a town project | The coins |
| `trade_done` | Trade | A finished trade that moved something (to both sides) | A number that stands for the other player, the same every time |
| `town_mayor` | Town | Elected mayor (not set by an admin) | 1 |
| `mmo_skill_level:<id> <name>` (`Skills.SKILL_LEVEL`, API 19) | Core, with MMO Skill Tree | A skill's level went up | The new level |
| `mmo_skill_xp:<id> <name>` (`Skills.SKILL_XP`, API 19) | Core, with MMO Skill Tree | Skill XP from play | The XP |
| `mmo_achievement:<id>` (`Skills.ACHIEVEMENT`, API 19) | Core, with MMO Skill Tree | An achievement unlocked | 1 |
| `mmo_quest:<id>` (`Skills.QUEST`, API 19) | Core, with MMO Skill Tree | One of its quests finished | 1 |
| `npc_talk:<character id> <aliases>` (`Skills.NPC_TALK`, API 19) | Core, with MMO Skill Tree | A credited conversation with a character | 1 |

> **Tip:** Your own plugin can report actions too: `PlayerActions.fire(player, "mymod_dragon_slain", 1)`. Use a
> prefix of your own so names never clash; Tempest Quests' custom triggers can count them.
