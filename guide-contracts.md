# Contracts and bounties

Player contracts, server orders, the market, ranks and bounties.

## What players read in /guide

The `/guide` pages of this plugin, as a player sees them on a test server (numbers are examples).

### Contracts

- The contracts board: the server and other players want items and pay for them. Deliver what you have, or post an order for what you need.

**Delivering**

- Open /contracts and press DELIVER on a contract: the items leave your inventory and you are paid at once. Server orders start again every day or week.

**Posting**

- In the Post tab, pick an item, how many and the total reward. The reward is taken when you post (plus a 5% fee) and paid to whoever delivers. Collect the items in My contracts; money not used comes back when the contract ends.

**The market**

- Put items up for sale in the Market tab: they wait there and buyers pay you at once. Buy with one click, cheapest first; the 7-day prices show what things are worth.

**Bounties**

- In the Bounties tab, put money on another player. It is taken when you post (plus a 10% fee) and paid to whoever kills them. If nobody does, it comes back when the bounty ends, without the fee.

**Contractor ranks**

- Every item you deliver to a server order counts towards your rank: Courier, Trader, Merchant and Tycoon earn more from server orders.


## Commands

| Command | Who can use it | What it does |
|---|---|---|
| `/contracts` (/contract) | Everyone | Open the contracts board: deliver items for money, or ask for the items you need |
| `/contracts bounties` (/bounty) | Everyone | Bounties: put money on a player, or hunt one down |
| `/contracts list` | `contracts.admin` | Admins: the board in chat |
| `/contracts mine` | Everyone | Your contracts: collect what was delivered |
| `/contracts post` | Everyone | Post a contract: ask for items and pay for them |


## Settings

Every setting is changed in game with `/tempest` and saved at once; nothing needs a restart. Amounts of 0 are off unless the setting says otherwise.

### Contracts

`/tempest` → Contracts. Who can change it: `tempest.admin` or `tempest.admin.contracts`.

A contracts board: players and the server post item orders, others deliver and get paid. Server orders are made in /contracts, Manage.

| Setting | What it does | Values |
|---|---|---|
| Contracts are on | Off: nothing can be posted or delivered. Contracts keep their money and items until it is on again. | On or off |
| Server orders | The server's own orders are on the board. They pay from nothing and take items out of the game. | On or off |
| Contractor rank bonus | Players who delivered more earn up to 10% more from server orders. | On or off |

#### Players' contracts

Players post orders; the reward is taken when they post and paid out as items arrive.

| Setting | What it does | Values |
|---|---|---|
| Players may post contracts | On: players can post their own orders on the contract board. Off: players cannot post new ones; the server's orders stay. | On or off |
| Open contracts per player | How many contracts one player can have on the board at once. 0: players cannot post any. | 0 to 100 |
| Posting fee (%) | Taken when posting and never given back: it takes money out of the economy. | 0 to 50 |
| Least pay per item | The lowest reward a contract can offer for each item, so the board does not fill with worthless orders. 64 items at 5 needs a reward of at least 320. | 1 to 1000000 |
| Most items in one contract | The most items one contract can ask for. | 1 to 1000000 |
| Largest reward | The most money one contract can offer. It also limits how much one player can put on one bounty. | 1 to 1000000000 |
| How long contracts and offers last (hours) | Players pick one of these. Separate with commas, e.g. 24, 72, 168. | Text |
| Items nobody may ask for or sell | Item ids separated with commas. Coins never can. | Text |

#### Permissions

Off: everyone may. On: only players with the permission.

| Setting | What it does | Values |
|---|---|---|
| Posting contracts needs contracts.post | On: only players with the permission contracts.post can post contracts (admins always can). Give it to a rank in your ranks plugin. Off: everyone can. | On or off |
| Selling on the market needs contracts.sell | On: only players with the permission contracts.sell can put items up for sale on the market (admins always can). Buying stays open to everyone. Off: everyone can sell. | On or off |

#### Telling players

Chat lines and sounds.

| Setting | What it does | Values |
|---|---|---|
| Announce new contracts | One chat line to everyone (at most once a minute per player), and when server orders start again. | On or off |
| Sounds | On: a sound when a player posts, delivers or sells, and when they are paid. | On or off |
| Chat tag | Tag | Text |
| Tag colour | The colour of the contracts' tag word in front of their chat messages. | A colour |


### Market & ranks

`/tempest` → Market & ranks. Who can change it: `tempest.admin` or `tempest.admin.marketranks`.

#### Market

Players put items up for sale; others buy at once, cheapest first. Prices of the last 7 days are shown.

| Setting | What it does | Values |
|---|---|---|
| Market is on | On: players can sell items to each other on the market in /contracts. Off: nobody can put up or buy offers. | On or off |
| Sales tax (%) | Kept from each sale; the seller gets the rest. It takes money out of the economy. | 0 to 50 |
| Offers per player | How many items one player can have up for sale on the market at once. 0: players cannot sell. | 0 to 100 |
| Highest price per item | The most a player can ask for one item on the market. | 1 to 1000000000 |

#### Contractor ranks

By items delivered; the bonus is on server orders. Leave a name empty for the built-in one in each player's language.

| Setting | What it does | Values |
|---|---|---|
| Rank 1 name | Newcomer | Text |
| Rank 1: bonus (%) | Players at this rank get this much more for delivering to server orders. Players' own contracts pay what they offer. | 0 to 100 |
| Rank 2 name | Courier | Text |
| Rank 2: items delivered | How many items a player must have delivered in all to reach this rank. | 1 to 10000000 |
| Rank 2: bonus (%) | Players at this rank get this much more for delivering to server orders. Players' own contracts pay what they offer. | 0 to 100 |
| Rank 3 name | Trader | Text |
| Rank 3: items delivered | How many items a player must have delivered in all to reach this rank. | 1 to 10000000 |
| Rank 3: bonus (%) | Players at this rank get this much more for delivering to server orders. Players' own contracts pay what they offer. | 0 to 100 |
| Rank 4 name | Merchant | Text |
| Rank 4: items delivered | How many items a player must have delivered in all to reach this rank. | 1 to 10000000 |
| Rank 4: bonus (%) | Players at this rank get this much more for delivering to server orders. Players' own contracts pay what they offer. | 0 to 100 |
| Rank 5 name | Tycoon | Text |
| Rank 5: items delivered | How many items a player must have delivered in all to reach this rank. | 1 to 10000000 |
| Rank 5: bonus (%) | Players at this rank get this much more for delivering to server orders. Players' own contracts pay what they offer. | 0 to 100 |


### Bounties

`/tempest` → Bounties. Who can change it: `tempest.admin` or `tempest.admin.bounties`.

Players put money on each other; whoever kills that player collects it. Only for servers where players can fight.

| Setting | What it does | Values |
|---|---|---|
| Bounties are on | Off: the tab is gone and kills pay nothing. Bounties already posted keep their money, and it still comes back when they end. | On or off |
| Smallest bounty | The least money a player can put on another player's head. | 1 to 1000000000 |
| Posting fee (%) | Taken when posting and never given back: it takes money out of the economy and makes moving money between friends cost something. | 0 to 50 |
| Bounties per player | How many players one player may have a bounty on at once. The largest bounty and how long one lasts are in the Contracts tab. | 0 to 100 |

#### Fair play

Against camping a respawn and friends farming each other.

| Setting | What it does | Values |
|---|---|---|
| Protection after a claim (minutes) | Nobody collects on that player for this long. New bounties can still be posted. | 0 to 1440 |
| Same hunter, same player (hours) | One hunter cannot collect on the same player again for this long. | 0 to 720 |

#### Telling players

Chat lines and the Tempest board.

| Setting | What it does | Values |
|---|---|---|
| Announce bounties | One chat line to everyone when a bounty is posted or claimed, and in the Discord feed. The player it is on always hears. | On or off |
| Posting bounties needs contracts.bounty | On: only players with the permission contracts.bounty can post bounties. Off: everyone can. | On or off |
