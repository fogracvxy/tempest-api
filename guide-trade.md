# Trade

Safe trades between players.

## What players read in /guide

The `/guide` pages of this plugin, as a player sees them on a test server (numbers are examples).

### Trade

- Trade items and coins safely with another player, in a window where both must agree.

**How to trade**

- /trade <player> asks them; they answer /trade <your name> or /trade accept. In the window, click an item of yours, choose how many and add it; add coins if you like. When both press Ready, a short countdown runs and the trade is done.

**Why nobody can be cheated**

- What you offer is held safely until the trade is done, and goes back if it is cancelled, the window closes or a player leaves. Any change makes both players not ready and stops the countdown, so nobody can swap an item at the last moment.


## Commands

| Command | Who can use it | What it does |
|---|---|---|
| `/trade` | Everyone | Trade with a player: /trade <player>, or accept, deny, toggle, open |


## Settings

Every setting is changed in game with `/tempest` and saved at once; nothing needs a restart. Amounts of 0 are off unless the setting says otherwise.

### Trade

`/tempest` → Trade. Who can change it: `tempest.admin` or `tempest.admin.trade`.

Safe trading between players: a trade window for items and coins, both confirm.

| Setting | What it does | Values |
|---|---|---|
| Trade is on | Off: /trade does nothing. | On or off |

#### Where players must be

Trades are safe anywhere: offered items are held by the server until the trade is done.

| Setting | What it does | Values |
|---|---|---|
| Players must be near each other | Off: players can trade from anywhere on the server. | On or off |
| Near means within (blocks) |  | 2 to 1000 |
| Only in the same world | Always on while players must be near each other. | On or off |

#### Coins

Players can put coins into a trade too (with any economy).

| Setting | What it does | Values |
|---|---|---|
| Coins in trades | Off: items only. To switch /pay off, use the Coins tab: Players can pay each other. | On or off |
| Tax on traded coins (%) | Taken from the coins that change hands and removed from the economy. 0 = none. | 0 to 50 |

#### The trade

What keeps trades fair.

| Setting | What it does | Values |
|---|---|---|
| Item slots for each player |  | 1 to 18 |
| Countdown after both are ready (seconds) | Any change stops it, so nobody can swap an item at the last moment. | 1 to 10 |
| A request waits (seconds) |  | 10 to 600 |
| Before asking the same player again (seconds) |  | 0 to 600 |
| Items that can never be traded | Item ids, with commas. End with * for every id that starts so: Crate_Key_* | Text |
| Log every trade | In the server log and /tempest log: who gave what to whom. | On or off |
