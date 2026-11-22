# Economies for server owners

Which economy the Tempest plugins pay into: Tempest Economy, or one you already run through VaultUnlocked. Tested with Ecotale, YAS Currency, PJ Money, EssentialsPlus, EliteEssentials and GlymeraMerchant.

Every Tempest plugin pays and charges through Tempest Core, never through an economy directly. Core uses the first of
these that runs:

| Order | Economy | What you need |
|---|---|---|
| 1 | **Tempest Economy** (Coins) | Its jar in `mods`. Wallets, coin items, banks (`/bank`), ATMs, daily rewards, mob and ore gold |
| 2 | **Any economy through VaultUnlocked** | [VaultUnlocked](https://github.com/TheNewEconomy/VaultUnlocked-Hytale) in `mods`, next to an economy mod that registers with it |
| none | No economy | The plugins run; prices, paid rewards, taxes and upkeep simply wait |

`/tempest` → General shows which one is in use ("Coins", "VaultUnlocked: GlymeraMerchant"...).

## Using the economy you already have

Install **VaultUnlocked** and your economy mod, and leave Tempest Economy (Coins) out: with Coins installed, Coins is
the economy (and it registers itself with VaultUnlocked for other mods).

| Economy mod | Works | Notes |
|---|---|---|
| **Ecotale** 1.2.1 | Yes, tested | Through VaultUnlocked. Switching to Coins later: `/eco import Ecotale` copies every balance |
| **YAS Currency** 1.95 | Yes, tested | Through VaultUnlocked |
| **PJ Money** 1.3.2 | Yes, tested | Through VaultUnlocked. Needs PJ-CoreLib, as always |
| **EssentialsPlus** 1.21.0 | Yes, tested | Its economy is on by default and registers with VaultUnlocked |
| **EliteEssentials** 2.0.12 | Yes, tested | Turn its economy on first: `"economy": { "enabled": true }` in `mods/EliteEssentials/config.json` (off by default) |
| **GlymeraMerchant** | Yes, tested in game | Registers with VaultUnlocked by itself. Jobs pay, shop prices, crate keys, quest rewards, claim prices and party taxes all use its gold |
| **Coins & Markets** 3.0.4 | No | Its coins are not shared with other plugins (it has no VaultUnlocked economy). It runs fine next to Tempest Economy |
| Any other VaultUnlocked economy | Yes | It must register an economy with VaultUnlocked |

"Tested" means on real servers with test players, 2026-11-22: the shop paid for sales and charged for purchases, a sale
the economy refused gave the items back, quest and event rewards, the premium pass, slot bets, crates and coinflips were
paid, and every coin added up at the end.

**What changes without Tempest Economy:** the money counter on the board, coin items, `/bank`, ATMs, daily rewards
and mob and ore gold are part of Tempest Economy, so they are not there; your economy mod shows its own balance. A
Tempest Claims party keeps its money inside Claims instead of a `/bank` account.

**Amounts:** Tempest works in whole coins. An economy with decimals is asked for whole amounts; what it reports is
rounded down.

## Other plugins next to Tempest Economy

Run **one economy** per server. With two (Coins and another one on VaultUnlocked), other authors' plugins may pay into
either. Tempest always uses Coins when it is installed.

| Plugin | Next to Tempest Economy (Coins) | What to set |
|---|---|---|
| **Ecotale**, **YAS Currency**, **PJ Money** | Works, tested | Nothing. To move to Coins: `/eco import <economy>` copies the balances, then remove the old one |
| **EssentialsPlus** | Works, tested, after one setting | Its `/pay`, `/money` and `/eco` take over Tempest Economy's. In `mods/fof1092_EssentialsPlus/config.json`: `"disabledCommands": ["/pay", "/money", "/eco"]` |
| **EliteEssentials** | Works, tested | Nothing while its economy is off (the default). With it on, its `/pay` takes over: in `mods/EliteEssentials/config.json` set `"useExternalEconomy": true` and `"vaultUnlockedProvider": false` under `"economy"`, and its commands use Tempest Economy's money |
| **Coins & Markets** | Works side by side, tested | Nothing. Its coins and vendors stay its own |

## For economy mod authors

Register your economy with VaultUnlocked (`Economy` from the Vault2 API) and every Tempest plugin uses it, with no
work on either side. If you would rather link directly, Tempest Core takes one economy:

```java
Economies.register(myEconomy);     // an implementation of com.atomictempest.core.economy.Economy
```

It is preferred over VaultUnlocked; call `Economies.unregister` when your plugin stops. See [Money](money.html).
