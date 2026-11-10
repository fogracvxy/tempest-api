# Money

The server's economy, whichever plugin keeps it, and what only Tempest Economy (Coins) has.

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

// VERSION 5: shared banks (/bank) for other plugins
CoinsAPI.BankView bank = coins.bank("Harbour");       // by name, or coins.bank(id); null when there is none
coins.bankCanUse(bank.id(), player);                 // its owner or a member
coins.bankCanWithdraw(bank.id(), player);            // its owner, or a member the owner allows
coins.bankDeposit(bank.id(), 120, "Taxes");          // coins your plugin already holds go in
coins.bankWithdraw(bank.id(), 40, "Upkeep");         // coins come out for your plugin
```

The bank's history shows your reason. Tempest Claims keeps a party's money in a bank this way, so it earns the
bank's savings interest. Check `CoinsAPI.VERSION >= 5` at compile time and catch `LinkageError` around these calls
when your plugin may meet an older Coins.

When your plugin pays out coin items instead of money (dropped, put in a tray), call `paidAsCoins` with the reason you
would give a wallet change: the balance does not change, but the economy screen (`/eco`) and the leaderboards count
the payout under its kind. Without it the money shows up only later, as "Deposited coins".

**Town unlock:** Coins describes the feature `coins:bank_interest` ("Bank savings interest") with Core's `Unlocks`
(Core API 8) and pays savings interest only while `Unlocks.isOn("coins:bank_interest")` and the admin has switched it
on. A plugin that decides the unlocks (`Registrations.unlockProvider`) can keep it off, for example until a bank
building is finished; without one, Coins' own setting decides. Interest is paid into banks with the history line
"Savings interest" (no wallet changes, so no `WalletEvents`).


## Stopping payments: `WalletEvents.addVeto`

A veto is asked before coins **leave** a wallet (bets, crates, shop purchases, payments) and can refuse with a
sentence for the player. Coins coming in cannot be refused, because the player may already have handed something
over for them.

```java
WalletEvents.addVeto((uuid, amount, reason) -> jail.contains(uuid) ? "You cannot spend coins in jail." : null);
String why = WalletEvents.checkRemoval(uuid, 100, "Ferry ticket");   // ask first to show the reason
```
