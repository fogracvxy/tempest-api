# Shop

The server shop, stalls and their shelves.

## What players read in /guide

The `/guide` pages of this plugin, as a player sees them on a test server (numbers are examples).

### Shop


**Trading**

- Find a shop stall and press F. Stalls are shown on your map.
- Stalls can sell different things, so look around: a blacksmith has tools and weapons, a farmer has food.
- Buy takes one item, x10 takes 10. The price is for one item, in copper, paid from your wallet.
- Every day 3 items are 25% cheaper, the same for everyone. Look for DEAL in the shop: you can buy 16 of each at the deal price a day.
- Sell gives one item to the shop, All sells every one you carry. "Sell everything the shop buys" sells all of it at once.

**Prices**

- Hold an item: if the shop buys it, what it pays shows next to your coin counter.
- Worn tools and weapons sell for less.Broken ones cannot be sold until they are repaired.

**Good to know**

- Use the tabs at the top of the shop to see one kind of item at a time.
- Only admins can build shop stalls on this server.


## Commands

| Command | Who can use it | What it does |
|---|---|---|
| `/sell` | Everyone | Sell items to the shop |
| `/sell all` | Everyone | Sell every item the shop buys |
| `/sell hand` | Everyone | Sell the item in your hand |
| `/shop` | Everyone | Open the shop |
| `/shop link` | `shop.admin` | Make the block you look at a shop, selling as this stall kind |
| `/shop stall` | `shop.admin` | Get a stall to place |
| `/shop unlink` | `shop.admin` | Make the block you look at an ordinary block again |


## Settings

Every setting is changed in game with `/tempest` and saved at once; nothing needs a restart. Amounts of 0 are off unless the setting says otherwise.

### Shop

`/tempest` → Shop. Who can change it: `tempest.admin` or `tempest.admin.shop`.

#### Trading

Items and their prices are set in the shop itself, with Edit shop.

| Setting | What it does | Values |
|---|---|---|
| Players can buy | Off: nobody can buy from the shop, and there are no daily deals. Selling still works if it is on. | On or off |
| Players can sell | Off: nobody can sell to the shop or use /sell. Buying still works if it is on. | On or off |
| /shop works anywhere | Off: players must go to a shop stall. | On or off |

#### Prices

Change every price at once, for a sale or a good time to sell.

| Setting | What it does | Values |
|---|---|---|
| Buy prices (%) | 80 = everything 20% off. | 1 to 10000 |
| Sell prices (%) | 150 = the shop pays half as much again. | 1 to 10000 |
| Bulk buy amount | The second amount button. | 2 to 1000 |

#### Supply and demand (Pro)

Prices move with what players trade: each item sold lowers what the shop pays for it, each item bought raises what it costs, and both drift back to the price you set. The shop never pays more or asks less than your set prices, so nobody can buy low and sell high. One item can keep a fixed price, or fall faster or slower: Edit shop, pick the item.

| Setting | What it does | Values |
|---|---|---|
| Prices move | On: prices follow what players trade, with the rules below. Off: every item always costs and pays exactly what you set in the shop. | On or off |
| Each one sold lowers it (%) | 0.5: after 64 sold the shop pays about 73%. | 0 to 50 |
| Never under (%) | The lowest the shop's pay for an item can fall, as a share of the price you set. 50: never under half. | 1 to 100 |
| Each one bought raises it (%) | 0 = buying never raises prices. | 0 to 50 |
| Never over (%) | The highest a buy price can climb, as a share of the price you set. 200: never more than double. | 100 to 1000 |
| Halfway back to normal in (hours) | How fast moved prices drift back to the ones you set. After this many hours half the change is gone, after twice as long three quarters. | 0.1 to 720 |

#### The shop's menu

What players see. Items, prices and categories are set in the shop itself, with Edit shop.

| Setting | What it does | Values |
|---|---|---|
| Title | Empty: "Shop" in each player's language. | Text |
| Search box | On: a search box at the top of the shop, so players can type an item's name. | On or off |
| Sort list | On: players can sort the items themselves (cheapest, dearest, by name). | On or off |
| Category list | On: the categories you made show as a list players can click to see only that kind of item. | On or off |
| Deals banner | On: a line at the top of the shop names today's deals. | On or off |
| How many a player has | On: each item shows how many of it the player already carries, so they know what they can sell. | On or off |
| First sorted by | The order items are in when a player opens the shop. The shop's own order is the one you made in Edit shop. | The shop's own order, Cheapest first, Dearest first, By name |
| Items on one page | How many items fit on one page of the shop before players turn to the next page. | 4 to 60 |
| Third amount button | The shop has three amount buttons: 1, the bulk amount above, and this one. | 2 to 10000 |
| Most in one purchase | The most of one item a player can buy or sell at once. | 1 to 100000 |

#### Daily deals

A few items are cheaper each day, the same ones for everyone, picked anew at midnight. While an item is a deal, the shop pays no more for it than the deal price, so nobody can buy cheap and sell back.

| Setting | What it does | Values |
|---|---|---|
| Deals each day | 0 = no deals. | 0 to 10 |
| Deal discount (%) | How much cheaper a deal item is. 25: it costs three quarters of its normal price. | 1 to 90 |
| Deals are picked from | Choose the pool in the shop: Edit shop, pick an item, Daily deal. Items set to Always are a deal every day. | Any item in the shop, Only the deal pool |
| At the deal price, per player a day | How many of each deal one player may buy cheaper a day; more cost the normal price. 0 = no limit. | 0 to 100000 |

#### Worn items

Tools, weapons and armour that have lost durability.

| Setting | What it does | Values |
|---|---|---|
| Worn items sell for less | By how worn they are. Off: full price. | On or off |
| Refuse below condition (%) | 0 = only broken items are refused. | 0 to 100 |

#### Other

| Setting | What it does | Values |
|---|---|---|
| Price tag under the coin counter | What the shop pays for the item in your hand. | On or off |
| Players can craft stalls | Off: only admins can. | On or off |
| Chat tag | Tag | Text |
| Colour | The colour of the shop's tag word in front of its chat messages. | A colour |

#### Free edition

The Pro edition adds: more stalls (Apothecary, Fishmonger, Tavern, Mage), prices that move with supply and demand.


### Stalls

`/tempest` → Stalls. Who can change it: `tempest.admin` or `tempest.admin.stalls`.

#### Classic

Choose items for it in the shop: Edit shop, pick an item. One stall's own settings: This stall, at that stall.

| Setting | What it does | Values |
|---|---|---|
| Title | Empty: the shop's own title. | Text |
| It sells | Which shop items this kind of stall offers. What fits: the items that suit this stall, plus any you chose for it in Edit shop. Only chosen: just the ones you picked. | Everything in the shop, What fits, plus chosen items, Only items chosen for it |
| Items on its shelves | On: real items from what this stall sells stand on its shelves while a player is near. Needs Tempest Holograms and Show items on stalls on the Stall shelves tab. | On or off |
| How many | How many items stand on this stall's shelves at once. | 1 to 3 |

#### Blacksmith

Choose items for it in the shop: Edit shop, pick an item. One stall's own settings: This stall, at that stall.

| Setting | What it does | Values |
|---|---|---|
| Title | Empty: the stall's name in each player's language. | Text |
| It sells | Which shop items this kind of stall offers. What fits: the items that suit this stall, plus any you chose for it in Edit shop. Only chosen: just the ones you picked. | Everything in the shop, What fits, plus chosen items, Only items chosen for it |
| Items on its shelves | On: real items from what this stall sells stand on its shelves while a player is near. Needs Tempest Holograms and Show items on stalls on the Stall shelves tab. | On or off |
| How many | How many items stand on this stall's shelves at once. | 1 to 4 |

#### Farmer

Choose items for it in the shop: Edit shop, pick an item. One stall's own settings: This stall, at that stall.

| Setting | What it does | Values |
|---|---|---|
| Title | Empty: the stall's name in each player's language. | Text |
| It sells | Which shop items this kind of stall offers. What fits: the items that suit this stall, plus any you chose for it in Edit shop. Only chosen: just the ones you picked. | Everything in the shop, What fits, plus chosen items, Only items chosen for it |
| Items on its shelves | On: real items from what this stall sells stand on its shelves while a player is near. Needs Tempest Holograms and Show items on stalls on the Stall shelves tab. | On or off |
| How many | How many items stand on this stall's shelves at once. | 1 to 4 |

#### Apothecary

Choose items for it in the shop: Edit shop, pick an item. One stall's own settings: This stall, at that stall.

| Setting | What it does | Values |
|---|---|---|
| Title | Empty: the stall's name in each player's language. | Text |
| It sells | Which shop items this kind of stall offers. What fits: the items that suit this stall, plus any you chose for it in Edit shop. Only chosen: just the ones you picked. | Everything in the shop, What fits, plus chosen items, Only items chosen for it |
| Items on its shelves | On: real items from what this stall sells stand on its shelves while a player is near. Needs Tempest Holograms and Show items on stalls on the Stall shelves tab. | On or off |
| How many | How many items stand on this stall's shelves at once. | 1 to 3 |

#### Fishmonger

Choose items for it in the shop: Edit shop, pick an item. One stall's own settings: This stall, at that stall.

| Setting | What it does | Values |
|---|---|---|
| Title | Empty: the stall's name in each player's language. | Text |
| It sells | Which shop items this kind of stall offers. What fits: the items that suit this stall, plus any you chose for it in Edit shop. Only chosen: just the ones you picked. | Everything in the shop, What fits, plus chosen items, Only items chosen for it |
| Items on its shelves | On: real items from what this stall sells stand on its shelves while a player is near. Needs Tempest Holograms and Show items on stalls on the Stall shelves tab. | On or off |
| How many | How many items stand on this stall's shelves at once. | 1 to 4 |

#### Tavern

Choose items for it in the shop: Edit shop, pick an item. One stall's own settings: This stall, at that stall.

| Setting | What it does | Values |
|---|---|---|
| Title | Empty: the stall's name in each player's language. | Text |
| It sells | Which shop items this kind of stall offers. What fits: the items that suit this stall, plus any you chose for it in Edit shop. Only chosen: just the ones you picked. | Everything in the shop, What fits, plus chosen items, Only items chosen for it |
| Items on its shelves | On: real items from what this stall sells stand on its shelves while a player is near. Needs Tempest Holograms and Show items on stalls on the Stall shelves tab. | On or off |
| How many | How many items stand on this stall's shelves at once. | 1 to 3 |

#### Mage

Choose items for it in the shop: Edit shop, pick an item. One stall's own settings: This stall, at that stall.

| Setting | What it does | Values |
|---|---|---|
| Title | Empty: the stall's name in each player's language. | Text |
| It sells | Which shop items this kind of stall offers. What fits: the items that suit this stall, plus any you chose for it in Edit shop. Only chosen: just the ones you picked. | Everything in the shop, What fits, plus chosen items, Only items chosen for it |
| Items on its shelves | On: real items from what this stall sells stand on its shelves while a player is near. Needs Tempest Holograms and Show items on stalls on the Stall shelves tab. | On or off |
| How many | How many items stand on this stall's shelves at once. | 1 to 3 |


### Stall shelves

`/tempest` → Stall shelves. Who can change it: `tempest.admin` or `tempest.admin.stallshelves`.

#### Living shelves

Real items from what a stall sells stand on it while a player is near. Needs Tempest Holograms (free).

| Setting | What it does | Values |
|---|---|---|
| Show items on stalls | On: real items from what a stall sells stand on its shelves while a player is near. Needs the free Tempest Holograms plugin. Each kind of stall can switch its shelves off on the Stalls tab. | On or off |
| Show from (blocks away) | Closer costs less when a server has many stalls. | 4 to 128 |
| Items stand on the stall | Still 3D models. Off: they hang in the air like dropped items, with the game's rarity beam. | On or off |
| Item size | 1 is the size of a dropped item; smaller items stand apart on the counter. | 0.2 to 1.5 |
| Only items marked for the shelves | Mark them in the shop: Edit shop, pick an item, First on the shelves. Off: deals and the rest of the stock fill the shelf. | On or off |
| A different choice each day | Marked items and deals always come first. | On or off |
| Today's deals glow | On: items on the shelves that are one of today's deals glow, so players spot them from afar. | On or off |
| Glow colour | The colour of the deals' glow. | A colour |

#### What a sale does

Every stall plays its own animation; these go on top of it.

| Setting | What it does | Values |
|---|---|---|
| Sounds | On: the stall plays its own sound when a player buys or sells there. | On or off |
| Sparks | On: a puff of particles over the counter with each sale. | On or off |
| The item hops over the counter | On: the item jumps over the counter: towards the player when they buy, into the stall when they sell. It is only a show; nobody can pick it up. | On or off |
