# Coinflip

## What players read in /guide

The `/guide` pages of this plugin, as a player sees them on a test server (numbers are examples).

### Coinflip


**How it works**

- Make a room: pick a stake and a side, heads or tails. Your stake is held while the room is open.
- Another player joins with the same stake on the other side. The coin flips, and the winner takes the pot.
- Stakes from 10 copper to 1,000,000 copper.
- A room nobody joins closes after 30 min and the stake comes back.
- If the server restarts, open rooms close and their stakes come back. A coin already in the air is paid out.

**Provably fair**

- Every room has a secret seed from the start. Its SHA-256 is shown while the room is open, so it cannot be changed later.
- After the flip the seed is shown. The roll is the first 13 hex digits of SHA-256(seed:room id) divided by 16^13; under 0.5 is heads.

**You**

- Won 1, lost 2. Profit: +850 copper (staked 2,150 copper in all).

**Admins also read:**

- Won 2, lost 1. Profit: -850 copper (staked 2,150 copper in all).


## Commands

| Command | Who can use it | What it does |
|---|---|---|
| `/coinflip` (/cf) | Everyone | Open the coinflip rooms |
| `/coinflip cancel` | Everyone | Close your open rooms and get your stakes back |
| `/coinflip create` | Everyone | Open a room with a stake |
| `/coinflip join` | Everyone | Join a player's room |
| `/coinflip list` | Everyone | List the open rooms in chat |


## Settings

Every setting is changed in game with `/tempest` and saved at once; nothing needs a restart. Amounts of 0 are off unless the setting says otherwise.

### Coinflip

`/tempest` → Coinflip. Who can change it: `tempest.admin` or `tempest.admin.coinflip`.

Players stake coins on heads or tails; another player matches the stake and the coin decides.

| Setting | What it does | Values |
|---|---|---|
| Coinflip is open | Off: no new rooms and no joining. Open rooms can still be cancelled. | On or off |

#### Stakes

| Setting | What it does | Values |
|---|---|---|
| Smallest stake | The least a player can bet when they open or join a coinflip room. | 1 to 1000000000 |
| Largest stake | 0 = no limit. | 0 to 1000000000000 |
| Open rooms per player | How many rooms one player can have waiting for an opponent at the same time. | 1 to 20 |
| Rooms close after (minutes) | A room nobody joins closes and its stake goes back. 0 = never. | 0 to 1440 |
| House fee (%) | Kept from the pot; it leaves the game. | 0 to 50 |

#### The flip

| Setting | What it does | Values |
|---|---|---|
| Flip time (seconds) | How long the coin spins; the winner is paid when it lands. | 1 to 10 |
| Show the flip to the room's maker | Opens the flip for them when someone joins, unless another page is open. | On or off |
| Sounds | On: ticks while the coin spins, and a win sound for the winner. | On or off |

#### Announcements

| Setting | What it does | Values |
|---|---|---|
| Tell everyone about new rooms | On: a chat line to everyone when a player opens a room, with the stake. At most one per player every 30 seconds, so chat cannot be flooded. | On or off |
| Tell everyone about flips from (pot) | Also sent to Discord. 0 = never. | 0 to 1000000000000 |
| Chat tag | Tag | Text |
| Colour | The colour of the coinflip's tag word in front of its chat messages. | A colour |
