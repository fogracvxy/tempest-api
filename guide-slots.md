# Slot machines

## What players read in /guide

The `/guide` pages of this plugin, as a player sees them on a test server (numbers are examples).

### Slot machines


**How to play**

- Walk up to a slot machine and press F. Each spin takes your bet from your wallet; line up three of the same symbol to win.

**Your bet**

- Crouch and press F on a machine, or type /slotbet, to choose your bet: 10, 50, 100 or 500 copper. Yours is 10 right now. Every prize below is your bet times the payout, so a bigger bet wins bigger.

**What three of a kind pay**

- Three cherries: 2 times your bet
- Three bells: 4 times your bet
- Three coins: 6 times your bet
- Three diamonds: 16 times your bet

**The jackpot**

- Three sevens win the jackpot: 10 times your bet plus the whole pot, which is 500 copper right now. Part of every lost spin goes into the pot, so it keeps growing until someone wins it.
- Bet 500 to win the whole pot. A smaller bet wins a share: 10 wins 2% of it.

**Your winnings**

- Winnings come out of the machine as coins. For 90 seconds only you can pick them up; after that, anyone can.

**Good to know**

- A machine takes one spin at a time. If someone else is spinning, wait for the reels to stop.
- The machines are a game of luck. Some spins win big, but over many spins they pay back less than you put in.
- Only admins can build slot machines on this server.


## Commands

| Command | Who can use it | What it does |
|---|---|---|
| `/jackpot` | Everyone | Show the slot machine jackpot |
| `/slotbet` | Everyone | Choose how much each slot machine spin costs |
| `/slotstats` | `slotmachine.admin.stats` | Show slot machine totals and payback |
| `/slotstats reset` | `slotmachine.admin.stats` | Start the slot machine totals again from zero |
| `/slottheme` | `slotmachine.admin.theme` | Gives you a slot machine with the chosen theme |
| `/slottoken` | `slotmachine.admin.token` | Gives you a slot machine token |


## Settings

Every setting is changed in game with `/tempest` and saved at once; nothing needs a restart. Amounts of 0 are off unless the setting says otherwise.

### Slot Machine

`/tempest` → Slot Machine. Who can change it: `tempest.admin` or `tempest.admin.slots`.

#### Bets

Players crouch and press F on a machine (or type /slotbet) to choose their bet.

| Setting | What it does | Values |
|---|---|---|
| Default bet | New players start here. | 1 to 1000000000 |
| Bet 2 | 0 = off | 0 to 1000000000 |
| Bet 3 | 0 = off | 0 to 1000000000 |
| Bet 4 | 0 = off | 0 to 1000000000 |
| Bet 5 | 0 = off | 0 to 1000000000 |
| Show the bet picker on first use | So every player finds out they can choose. | On or off |

#### Winning

| Setting | What it does | Values |
|---|---|---|
| Win chance (%) | Line up three of a kind. Prizes are on the Slot Prizes tab. | 0 to 100 |
| Pay into the wallet | Off: coins pour out of the machine. | On or off |
| Winner-only pickup (seconds) | Dropped coins belong to the winner this long. 0 = anyone. | 0 to 3600 |
| Slot token prize (x bet) | For the hand-held slot token item. | 1 to 1000000 |

#### Show

| Setting | What it does | Values |
|---|---|---|
| Coin fountain on a win | Coins fly out of the machine (just for show). | On or off |
| Announce wins from | Tell everyone about wins this big. 0 = off. | 0 to 1000000000000 |

#### Other

| Setting | What it does | Values |
|---|---|---|
| Players can craft slot machines | Off: only admins can. | On or off |
| Chat tag | Tag | Text |
| Colour | The colour of the slot machine's tag word in front of its chat messages. | A colour |

#### Free edition

The Pro edition adds: machine themes (Medieval, Pirate, Frost, Dragon, Arcane).


### Slot Prizes

`/tempest` → Slot Prizes. Who can change it: `tempest.admin` or `tempest.admin.slots`.

#### Symbols

What three of a kind pays (times the bet), and how often it comes up compared with the others.

| Setting | What it does | Values |
|---|---|---|
| Cherries | Pays (x bet) | 0.1 to 1000000 |
| How often | How often this symbol wins, next to the others: a symbol at 40 comes up twice as often as one at 20. 0: it never wins. | 0 to 100000 |
| Bells | Pays (x bet) | 0.1 to 1000000 |
| How often | How often this symbol wins, next to the others: a symbol at 40 comes up twice as often as one at 20. 0: it never wins. | 0 to 100000 |
| Coins | Pays (x bet) | 0.1 to 1000000 |
| How often | How often this symbol wins, next to the others: a symbol at 40 comes up twice as often as one at 20. 0: it never wins. | 0 to 100000 |
| Diamonds | Pays (x bet) | 0.1 to 1000000 |
| How often | How often this symbol wins, next to the others: a symbol at 40 comes up twice as often as one at 20. 0: it never wins. | 0 to 100000 |
| Sevens | Pays (x bet) | 0.1 to 1000000 |
| How often | How often this symbol wins, next to the others: a symbol at 40 comes up twice as often as one at 20. 0: it never wins. | 0 to 100000 |

#### Jackpot

Three sevens wins a pot that grows from lost bets.

| Setting | What it does | Values |
|---|---|---|
| Progressive jackpot | Off: sevens are an ordinary win. | On or off |
| Jackpot chance (%) | Per spin. | 0 to 100 |
| Share of lost bets (%) | Added to the pot from every losing spin. | 0 to 100 |
| Starting amount | What the pot starts at after it is won. | 0 to 1000000000 |
| Pot right now | What the jackpot holds at this moment. Change it to fill the pot up for an event, or to reset it. | 0 to 1000000000000 |
| Smaller bets win a share | Off: every bet wins the whole pot. | On or off |
| Announce jackpots | A message and a title for everyone. | On or off |
| Pot under the coin counter | On: every player sees the jackpot's size in a line under their coin counter, so they know when it is worth playing. | On or off |
