# Crates

Crates, keys, prizes and crate blocks.

## What players read in /guide

The `/guide` pages of this plugin, as a player sees them on a test server (numbers are examples).

### Crates


**Opening crates**

- Type /crates. Each crate shows its price in copper and the prizes it can give.
- Press Open: the price comes out of your wallet, the strip spins (or a light runs round the prize board) and stops on your prize.
- Press x10 to open ten at once for ten times the price: you get all ten prizes straight away, listed by rarity.
- The prize is decided the moment you pay. Closing the page or pressing Skip does not change it, and you still get it.
- Some crates need a crate key instead of (or as well as) copper. Keys come from other crates and admins; right-click a key to see the crates.
- A crate marked (locked) is only for players with a certain rank.
- Crate blocks in the world open their crate when you press [F] on them. Hold the crate's key to open it at once.

**Prizes**

- Items go into your inventory; what does not fit drops at your feet. Copper go into your wallet.
- Every crate card shows its rarest prize and its chance.
- Some crates have a pity: after so many opens in a row without an Epic or better prize, the next one is always Epic or better. The card shows how close you are.
- Win a Epic prize or better and the whole server hears about it.


## Commands

| Command | Who can use it | What it does |
|---|---|---|
| `/cratekey` | `crates.admin` | Give a player crate keys |
| `/crates` (/crate) | Everyone | Open crates for prizes |
| `/crates log` | `crates.admin` | Admins: a player's newest crate openings, for prize questions |
| `/keyparty` | `crates.admin` | Give everyone online crate keys after a countdown (Pro) |


## Settings

Every setting is changed in game with `/tempest` and saved at once; nothing needs a restart. Amounts of 0 are off unless the setting says otherwise.

### Crates

`/tempest` → Crates. Who can change it: `tempest.admin` or `tempest.admin.crates`.

Make and change crates in /crates with Edit crates.

| Setting | What it does | Values |
|---|---|---|
| Crates are open | Off: nobody can open crates. | On or off |
| Spin time (seconds) | How long the strip runs before it stops on the prize. | 1 to 15 |
| Prize board time (seconds) | How long the light runs round the prize board (crates with the board style). | 1 to 15 |
| Sounds | Ticks while the strip runs, and a bigger jingle the rarer the prize. | On or off |
| Tell everyone about | Wins of this rarity or rarer are told to the whole server and sent to Discord. | No wins, Common wins and rarer, Uncommon wins and rarer, Rare wins and rarer, Epic wins and rarer, Legendary wins only |

#### The menu

What players see in /crates. The order of the crates is set in Edit crates.

| Setting | What it does | Values |
|---|---|---|
| Title | Empty: "Crates" in each player's language. | Text |
| Search box | Over the list of crates. | On or off |

#### Rarities

A prize's rarity comes from its chance. Choose the colours, and from which chance a prize counts as each.

| Setting | What it does | Values |
|---|---|---|
| Common | The colour of Common prizes: their names in the crate menu, the spin, and the chat line and pop-up when one is won. | A colour |
| from (%) | A prize with at least this chance, and not enough for the rarity above, is Common. Prizes rarer than every row are Legendary. | 0 to 100 |
| Uncommon | The colour of Uncommon prizes: their names in the crate menu, the spin, and the chat line and pop-up when one is won. | A colour |
| from (%) | A prize with at least this chance, and not enough for the rarity above, is Uncommon. Prizes rarer than every row are Legendary. | 0 to 100 |
| Rare | The colour of Rare prizes: their names in the crate menu, the spin, and the chat line and pop-up when one is won. | A colour |
| from (%) | A prize with at least this chance, and not enough for the rarity above, is Rare. Prizes rarer than every row are Legendary. | 0 to 100 |
| Epic | The colour of Epic prizes: their names in the crate menu, the spin, and the chat line and pop-up when one is won. | A colour |
| from (%) | A prize with at least this chance, and not enough for the rarity above, is Epic. Prizes rarer than every row are Legendary. | 0 to 100 |
| Legendary | The colour of Legendary prizes: their names in the crate menu, the spin, and the chat line and pop-up when one is won. | A colour |

#### Chat

| Setting | What it does | Values |
|---|---|---|
| Chat tag | Tag | Text |
| Colour | The colour of the crates' tag word in front of their chat messages. | A colour |

#### Free edition

The Pro edition adds: any number of crates, pity counters, Open x10, rank and permission prizes, crates players open free every few hours, key parties for everyone online.


### Crate Blocks

`/tempest` → Crate Blocks. Who can change it: `tempest.admin` or `tempest.admin.crateblocks`.

#### Crate blocks

Place a crate block, right-click it with crates.admin and choose its crate.

| Setting | What it does | Values |
|---|---|---|
| Text over crate blocks | The crate's name, price or key and how to open it (needs the free Holograms plugin). | On or off |
| Show the last rare win | A line with who last won a Rare or better prize from that crate. | On or off |
| Openings play at the block | The lid opens, prizes swirl up and the won one flies to the player, for everyone near. | On or off |
| Idle show seen from (blocks) | Prizes circle and sparkles rise only while a player is this close. | 4 to 64 |
| Circling prizes per crate | Each crate's own choice (Edit crates) says whether they circle at all. | 1 to 8 |
| Circling prizes on the server | At most this many at once, all crate blocks together (0 = none). | 0 to 500 |
| Seconds for one turn | How slowly the prizes circle the block. | 3 to 60 |
| Circle size (blocks) | How far from the middle of the crate block the prizes circle. | 0.4 to 3 |
| Circle height (blocks) | How high above the crate block the prizes circle. | 0 to 3 |
| Moves per second | How often a second the circling prizes move on. More looks smoother but sends players more updates. | 2 to 20 |
| Seconds between sparkles | Fewer moves and sparkles are easier on players' games. | 0.5 to 30 |
| Text height (blocks) | How high above the crate block its floating text (the crate's name and price) hangs. | 0.5 to 5 |
| The won prize lights up | It glows in its rarity's colour as it rises from the chest. | On or off |
| Players can craft crate blocks | Off: only admins (coins.admin.craft) can craft them. | On or off |

#### Key parties (Pro)

Everyone online gets crate keys at once, after a ten-second countdown in chat. Start one with /keyparty [key] [amount], or have one every few hours.

| Setting | What it does | Values |
|---|---|---|
| A key party every (hours) | 0 = only when an admin types /keyparty. | 0 to 168 |
| Key | bronze, silver, gold or any item id. | Text |
| Keys each | How many of the key above each online player gets in a key party: the timed ones, and /keyparty typed without a key and amount. | 1 to 64 |
| Players online for one by itself | A timed key party waits until at least this many players are online, so keys are not given to an empty server. /keyparty always works. | 1 to 500 |
