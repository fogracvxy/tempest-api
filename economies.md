# Economies for server owners

Which economy the Tempest plugins pay into: Tempest Economy, or one you already run through VaultUnlocked (GlymeraMerchant, Ecotale and others).

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
| **GlymeraMerchant** | Yes, tested in game | Registers with VaultUnlocked by itself. Jobs pay, shop prices, crate keys, quest rewards, claim prices and party taxes all use its gold |
| **Ecotale** | Yes | Through VaultUnlocked |
| Any other VaultUnlocked economy | Yes | It must register an economy with VaultUnlocked |

**What changes without Tempest Economy:** the money counter on the board, coin items, `/bank`, ATMs, daily rewards
and mob and ore gold are part of Tempest Economy, so they are not there; your economy mod shows its own balance. A
Tempest Claims party keeps its money inside Claims instead of a `/bank` account.

**Amounts:** Tempest works in whole coins. An economy with decimals is asked for whole amounts; what it reports is
rounded down.

## For economy mod authors

Register your economy with VaultUnlocked (`Economy` from the Vault2 API) and every Tempest plugin uses it, with no
work on either side. If you would rather link directly, Tempest Core takes one economy:

```java
Economies.register(myEconomy);     // an implementation of com.atomictempest.core.economy.Economy
```

It is preferred over VaultUnlocked; call `Economies.unregister` when your plugin stops. See [Money](money.html).
