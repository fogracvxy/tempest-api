# Switching to Tempest

Move your server to Tempest without losing anyone's money, and what works next to the plugins you already run. Every line on this page was tested on real servers.

Tempest is made to join a server that already has players. You can keep the economy you have (the Tempest plugins
pay through it), or move every balance into Tempest Economy in one command. Either way, nothing is lost.

## Two ways to switch

| | Keep your economy | Move to Tempest Economy |
|---|---|---|
| What you install | Tempest Core, the Tempest plugins you want, and VaultUnlocked | Tempest Core, Tempest Economy (Coins), the Tempest plugins you want |
| Players' money | Stays where it is; every Tempest plugin pays and charges in it | Copied into Tempest Economy with `/eco import` |
| What you get | Crates, quests, the pass, jobs, shops, events... on your money | All of that, plus physical coins, wallets, banks, ATMs, daily rewards, mob and ore gold and the `/eco` dashboard |

Keeping your economy is explained on [Economies](economies.html). The rest of this page is about moving.

## Moving every balance: `/eco import`

1. Keep your old economy installed. Add Tempest Core, Tempest Economy and VaultUnlocked, and start the server.
2. Type `/eco import list`: it names every economy it can copy from.
3. Type `/eco import <name>`. It shows how many players it found and how much money they have, and changes nothing.
4. Type the same command again within a minute to copy. Every player's Tempest balance becomes their balance in the
   old economy, rounded down to whole coins. The wallets are backed up first, and nothing is taken from the old
   economy, so you can check before you remove it.
5. Remove the old economy and restart.

| Switching from | Type | Tested |
|---|---|---|
| **Ecotale** | `/eco import Ecotale` | Every balance copied exactly |
| **YAS Currency** | `/eco import YASCurrency` | Every balance copied exactly (it keeps whole numbers) |
| **PJ Money** | `/eco import PJ-Money` | Every balance copied exactly |
| **EssentialsPlus** | `/eco import EssentialsPlus` | Every balance copied exactly |
| **EliteEssentials** | `/eco import EliteEssentials` | Every balance copied exactly (with its economy on, as on a server that uses it) |
| **EconomyAPI** | `/eco import EconomyAPI` | Every balance copied exactly (its own money) |
| **Coins & Markets** | `/eco import CoinsAndMarkets` | Exchanged, not copied: see below |
| Any other economy on VaultUnlocked | the name `/eco import list` shows | Should work the same way |

Some economies do not tell other plugins who has an account. Tempest Economy then asks them about every player who
has ever joined your server, so nobody is missed. A player who never joined your server is not known to it and is not
copied.

Copying from YAS Currency, EliteEssentials, EconomyAPI and Coins & Markets needs Tempest Economy newer than 2.7.2 (the
next release). Ecotale, PJ Money and EssentialsPlus work with 2.7.2 already.

## Moving from Coins & Markets

Coins & Markets keeps its money in coins players carry, in their inventory and Coin Pouch, and only sees them while
the player is online. So it is exchanged instead of copied:

1. Ask players to withdraw their vendor earnings and take coins out of chests, into their pouch.
2. Type `/eco import CoinsAndMarkets`. It shows the rate and how many players are online.
3. Type it again within a minute to start. Everyone online is exchanged at once: their Coins & Markets coins are
   taken and the same value is paid into their wallet, and they are told. Everyone else is exchanged when they next
   join.
4. Keep Coins & Markets installed until everyone has been on, then type `/eco import stop` and remove it.

The rate is 1 copper to 1 coin. To choose another, start with `/eco import CoinsAndMarkets --rate 100` (100 copper
make one coin); copper that does not make a whole coin stays with the player. Coins are taken before anything is paid,
and given back if paying fails. Every exchange is in the `/eco` transaction log.

## Plugins that run next to Tempest

Tested on real servers with the whole Tempest suite, test players buying, selling, paying each other, opening crates
and doing quests, and every coin added up at the end.

| Plugin | Works next to Tempest | What to set |
|---|---|---|
| **Ecotale**, **YAS Currency**, **PJ Money** | Yes, as your economy or next to Tempest Economy | Nothing |
| **EssentialsPlus** | Yes | Next to Tempest Economy its `/pay`, `/money` and `/eco` take over Tempest's: in `mods/fof1092_EssentialsPlus/config.json` set `"disabledCommands": ["/pay", "/money", "/eco"]` |
| **EliteEssentials** | Yes | Its economy is off by default and then nothing clashes. If you turn it on next to Tempest Economy, set `"useExternalEconomy": true` and `"vaultUnlockedProvider": false` under `"economy"` in `mods/EliteEssentials/config.json`, so its commands use Tempest's money |
| **EconomyAPI** | Yes | Next to Tempest Economy it keeps a second money of its own. In `mods/Sennecoolgames_EconomyAPI/config.json` set `"bridgeMode": "VaultUnlocked"`, `"disableMobKillRewards": true` and `"disablePlayerKillRewards": true` |
| **Ecotale Marketplace** | Yes, next to Ecotale | Nothing. It pays in Ecotale's money |
| **Coins & Markets** | Yes, side by side | Nothing. Its coins and vendors stay its own (or switch, above) |
| **GlymeraMerchant** | Yes, as your economy | Nothing |
| **LuckPerms** | Yes | Nothing. Giving Tempest permissions through LuckPerms groups is still to be tested |
| **BetterMap** | Yes | Nothing. Tempest's map places (ATMs, stalls, crates) register as usual |
| **Endless Leveling**, **RPG Leveling**, **MMO Skill Tree** | Yes | Nothing: see [Leveling mods](leveling-mods.html) |
| **Simple Enchantments**, **Socket Reforge** | Yes | Enchanted and socketed items keep everything in shops, crates, rewards, mail and trades |

**One economy per server.** With two economies on VaultUnlocked, other authors' plugins may pay into either one.
Tempest always uses Tempest Economy when it is installed.

## Questions

**Can I try Tempest before switching?** Yes. Install Tempest Core and the plugins you want next to your economy: they
use it. Switch to Tempest Economy later, or never.

**What if something goes wrong?** `/eco import` backs the wallets up before it copies (the message says where), and
the old economy keeps its balances until you remove it. `/tempest backup` makes a full backup of every Tempest plugin.

**My economy is not in the list.** If it works with VaultUnlocked, `/eco import list` shows it and the import works the
same way. Tell us on Discord and we will test it.

**Does the switch pay achievements?** Tempest Quests counts money however it arrives, so an achievement such as
"Rich" can be earned right after a switch, as it would be for any money.
