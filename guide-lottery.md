# Lottery

## What players read in /guide

The `/guide` pages of this plugin, as a player sees them on a test server (numbers are examples).

### Lottery


**How it works**

- Buy tickets for 100 copper each. Every 30 minutes one ticket is drawn, and its owner wins the whole pot. The more tickets you have, the better your chance.

**This round**

- Pot: 0 copper
- Tickets sold: 0. Yours: 0
- Drawing in: 29 minutes

**Good to know**

- Your tickets are kept if the server restarts. If you are offline when you win, the coins still go to your wallet.


## Commands

| Command | Who can use it | What it does |
|---|---|---|
| `/lottery` (/lotto) | Everyone | Buy lottery tickets and check status |
| `/lottery buy` | Everyone | Buy lottery tickets |


## Settings

Every setting is changed in game with `/tempest` and saved at once; nothing needs a restart. Amounts of 0 are off unless the setting says otherwise.

### Lottery

`/tempest` → Lottery. Who can change it: `tempest.admin` or `tempest.admin.lottery`.

Players buy tickets; every drawing one ticket wins the pot.

| Setting | What it does | Values |
|---|---|---|
| Lottery open | Off: no tickets on sale. Tickets already bought are still drawn. | On or off |

#### Tickets

| Setting | What it does | Values |
|---|---|---|
| Ticket price |  | 1 to 1000000000 |
| Most in one purchase |  | 1 to 1000000 |
| Most per player | In one round. 0 = no limit. | 0 to 1000000 |

#### Drawings

| Setting | What it does | Values |
|---|---|---|
| Time between drawings (seconds) |  | 5 to 604800 |
| Fewest players | With fewer, the tickets wait for the next drawing. | 1 to 1000 |

#### Prize

| Setting | What it does | Values |
|---|---|---|
| Winner's share (%) | The rest leaves the game. | 0 to 100 |
| Starting pot | Put in by the server at the start of every round. | 0 to 1000000000 |

#### Announcements

| Setting | What it does | Values |
|---|---|---|
| Announce ticket sales | "Steve bought 3 tickets. The pot is now ..." | On or off |
| Announce the winner | Off: only the winner is told. | On or off |
| Warn before a drawing |  | On or off |
| Warn how long before (seconds) |  | 5 to 86400 |
| Pot under the coin counter | With the time left to the drawing. | On or off |
| Chat tag | Tag | Text |
| Colour |  | A colour |
