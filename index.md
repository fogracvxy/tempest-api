# Introduction

Run the Tempest plugins on your Hytale server, and build on them.

The Tempest plugins can be used from other plugins (Java) and from content mods that have no code (JSON assets). **Core** is the base: everything shared is in `com.atomictempest.core`
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
| Projects | `AtomicTempest:Projects` | `com.atomictempest.projects.api.ProjectsAPI` (the buildings and their states); the `projects_donate` action (amount: items given), `projects_coins` (amount: coins given) and the `projects_open` placeholder |
| Town | `AtomicTempest:Town` | no API of its own: it decides Core's `Unlocks` (below), and has the `town_unlocked`, `town_total` and `town_mayor` placeholders |
| Crates | `AtomicTempest:Crates` | no API of its own: the `crate_open` action and `Announcements.BIG_WIN` |
| Holograms | `AtomicTempest:Holograms` | `com.atomictempest.holograms.api.Holograms` (and `Hologram`, `TextArt`, `Rankings`...) |
| Pass | `AtomicTempest:Pass` | `com.atomictempest.pass.api.PassAPI` |
| Jobs | `AtomicTempest:Jobs` | `com.atomictempest.jobs.api.JobsAPI` |
| Trade | `AtomicTempest:Trade` | no API of its own: the `trade_done` action |
| Claims | `AtomicTempest:Claims` | no API of its own: it answers Core's `Claims` (below) for every plugin, the `claims_claim` and `claims_party` actions, and the `claims_party`, `claims_chunks`, `claims_limit`, `claims_bank` and `claims_here` placeholders |

With **Endless Leveling** or **MMO Skill Tree** installed, Core's `Levels` and `Skills` give every plugin player
levels, skills and what happens in them, without depending on either mod.

The economy can be **Tempest Economy (Coins)** or any economy registered with **VaultUnlocked** (GlymeraMerchant,
Ecotale...): Core's `Economies` hides which. Land claims come from **Tempest Claims** or, read-only, **Simple Claims**:
Core's `Claims` hides which.

Every API class has a version constant that goes up when something is added. Everything in these APIs is safe to call
from any thread unless it says otherwise.

**Javadoc:** [Coinflip 1.0.4](javadoc/coinflip/) · [Coins 2.4.1](javadoc/coins/) · [Core 1.6.0](javadoc/core/) · [Holograms 1.2.2](javadoc/holograms/) · [Jobs 1.1.1](javadoc/jobs/) · [Lottery 1.1.3](javadoc/lottery/) · [Pass 1.3.0](javadoc/pass/) · [Projects 1.1.1](javadoc/projects/) · [Quests 1.5.0](javadoc/quests/) · [Shop 1.5.1](javadoc/shop/) · [SlotMachine 1.2.3](javadoc/slotmachine/)

**Jars:** from the plugins' CurseForge pages; compile against them with `compileOnly`. **Questions and help:** [Discord](https://discord.gg/Q9PNVCMZXK)
