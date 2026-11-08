# Server guide

How the Tempest plugins work in game, for server owners and admins: commands, permissions, every setting and what players see.

The pages in this section are made from the plugins themselves: the commands, the `/tempest` settings with their
explanations, and the `/guide` pages players read. They say exactly what the game says.

## Install

1. Put **Tempest Core** in your server's `mods` folder. Every other Tempest plugin needs it.
2. Put the plugins you want next to it. Each one works on its own; together they connect (quests count crates,
   events boost the shop, jobs pay more for what contracts want, and so on).
3. Money comes from **Tempest Economy (Coins)**, or from any economy plugin through VaultUnlocked.
4. Start the server. Each plugin makes its files under `universe/mods` with safe defaults.

## Two commands to know

| Command | Who | What it opens |
|---|---|---|
| `/tempest` | Admins | Every setting of every Tempest plugin, one tab each, with a search box. Changes are saved at once |
| `/guide` | Everyone | The help pages: what each plugin does and how to start |
| `/tempest doctor` | Admins | Checks every plugin's settings for money made from nothing (a shop that buys for more than it sells, a quest that pays more than it costs) |

## Permissions

| Permission | Gives |
|---|---|
| `tempest.admin` | Every `/tempest` tab |
| `tempest.admin.<group>` | One plugin's tabs only, e.g. `tempest.admin.jobs` or `tempest.admin.crates` |
| A plugin's admin permission (`jobs.admin`, `crates.admin`, `holograms.admin`...) | That plugin's admin commands and editors |

Commands that run as the server console (reward commands in quests, the pass, events, jobs and projects) can be set
only by players with `tempest.admin`, whatever else they have. Every command and the permission it needs:
[All commands and permissions](guide-commands.html).

## Free and Pro

Some plugins come as a free jar and a Pro jar with the same name. The Pro jar replaces the free one and keeps
everything the server made. Free limits only stop you making more: they never break what a server already has.
Core, Economy and the plugins' APIs are always free.

## Languages

Every text players see is in 8 languages (English, German, Spanish, French, Italian, Polish, Brazilian Portuguese and
Russian). Players get their game's language when Tempest has it; the server-wide language is in `/tempest` → General.
With a Pro plugin installed, `/tempest texts` lets you reword any text.
