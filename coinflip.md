# Coinflip

Rooms, and your own kind of room.

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
