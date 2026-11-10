# Claims

Land claims for parties: protection, the claim page and map, taxes and upkeep.

## What players read in /guide

The `/guide` pages of this plugin, as a player sees them on a test server (numbers are examples).

### Land claims

- A party claims chunks of the world (32 x 32 blocks, from the ground to the sky). On claimed land only the party decides who may build, break, open chests and fight.

**Getting started**

- /claims create <name> founds your party. Stand where you want land and type /claims claim. /claims shows how much land you hold and may hold; /claims map shows what is around you. Invite friends with /claims invite <player>.

**Rules and allies**

- /claims rules shows who may do what: members, allies and visitors, each for building, breaking, using blocks, chests, doors, benches, seats and picking up items. Change a cell with /claims rule. /claims ally <party> and /claims trust <player> make allies. Shops, ATMs, crates and slot machines stay usable for everyone.

**More land**

- A party may hold more land with more members, with chunks you buy (/claims buy) or earn as rewards, and with what the server gives for levels, ranks and town buildings. Where the server asks for upkeep, keep money in the party bank with /claims deposit.


## Commands

| Command | Who can use it | What it does |
|---|---|---|
| `/claims` | Everyone | Your party and its land |
| `/claims admin` | `tempest.admin.claims` | For admins: give chunks, disband, bypass |
| `/claims ally` | Everyone | Trust another party on your land |
| `/claims auto` | Everyone | Claim while you walk, on or off |
| `/claims bank` | Everyone | Keep the party's money in one of your /bank accounts |
| `/claims buy` | Everyone | Buy one more chunk for your limit |
| `/claims cancel` | Everyone | Stop the claim waiting for /claims confirm |
| `/claims claim` | Everyone | Claim the chunk you stand in |
| `/claims claimat` | Everyone | Claim a chunk by its numbers (the map uses this) |
| `/claims color` | Everyone | The colour of your party: /claims color #4FC3F7 |
| `/claims confirm` | Everyone | Claim the chunk /claims claim showed you |
| `/claims create` | Everyone | Found a party |
| `/claims demote` | Everyone | Make an assistant a member again |
| `/claims deposit` | Everyone | Put money into the party bank |
| `/claims disband` | Everyone | End your party and free its land |
| `/claims forgive` | Everyone | Forgive a member's tax debt (owner or assistant) |
| `/claims info` | Everyone | Your party and its land in chat |
| `/claims invite` | Everyone | Invite a player to your party |
| `/claims join` | Everyone | Join a party that invited you or is open |
| `/claims kick` | Everyone | Remove a member from your party |
| `/claims leave` | Everyone | Leave your party |
| `/claims list` | Everyone | The parties with the most land |
| `/claims map` | Everyone | A map of the claims around you |
| `/claims open` | Everyone | Let anyone join your party, on or off |
| `/claims paytax` | Everyone | Pay what you owe your party in taxes |
| `/claims promote` | Everyone | Make a member an assistant |
| `/claims rule` | Everyone | Change a rule: /claims rule visitor doors on |
| `/claims rules` | Everyone | Who may do what on your land |
| `/claims select` | Everyone | Pick a chunk to claim (the map uses this) |
| `/claims show` | Everyone | Outline the claimed land around you |
| `/claims tax` | Everyone | The tax each member pays the party each time (0 = none) |
| `/claims trust` | Everyone | Trust one player on your land |
| `/claims unally` | Everyone | Stop trusting a party |
| `/claims unclaim` | Everyone | Give back the chunk you stand in |
| `/claims unlinkbank` | Everyone | Keep the party's money in Claims again |
| `/claims untrust` | Everyone | Stop trusting a player |
| `/claims withdraw` | Everyone | Take money out of the party bank (owner) |
| `/claims worktax` | Everyone | The party's share of members' job pay, in percent |


## Settings

Every setting is changed in game with `/tempest` and saved at once; nothing needs a restart. Amounts of 0 are off unless the setting says otherwise.

### Claims

`/tempest` → Claims. Who can change it: `tempest.admin` or `tempest.admin.claims`.

Parties claim chunks (32 x 32 blocks, full height) and decide who may do what there.

| Setting | What it does | Values |
|---|---|---|
| Claims is on | Off: nothing is protected and /claims does nothing. The land is kept. | On or off |

#### How much land

A party's limit is the sum of the parts below, up to the hard limit. /claims shows each party its own.

| Setting | What it does | Values |
|---|---|---|
| Chunks for a new party | How many chunks a party of one player may claim. | 0 to 1000 |
| More for each other member | Added for every member after the first. When a member leaves, land already claimed is kept; the party just cannot claim more. | 0 to 100 |
| Hard limit for any party | No party ever holds more than this, whatever it bought or earned. | 1 to 10000 |
| Chunks for a party with a VIP | Counts while a member with the permission tempest.claims.vip is online. 0 = off. | 0 to 1000 |
| Chunks from the town | Every party gets these once Tempest Town unlocks "More land for every party". Needs Tempest Town with an unlock that gives the feature "Claims: more land for every party". Without Tempest Town nothing is added. | 0 to 1000 |

#### Parties

Players found a party with /claims create, invite others, and choose allies.

| Setting | What it does | Values |
|---|---|---|
| Most members in a party |  | 1 to 200 |
| Most allies of a party | Allied parties and single trusted players together. | 0 to 100 |

#### Where

Rules that keep the map tidy.

| Setting | What it does | Values |
|---|---|---|
| New land must touch the party's land | The first chunk in a world can be anywhere. | On or off |
| Free chunks between two parties | 0 = parties may claim side by side. A party that allied another lets it come close. | 0 to 8 |
| Worlds where nobody may claim | World names, with commas. | Text |
| Players can claim while walking | /claims auto: every new chunk the player walks into is claimed, while the limit and money last. | On or off |

#### What players see

Messages, the map and creatures.

| Setting | What it does | Values |
|---|---|---|
| Tell players whose land they enter |  | On or off |
| Parties on the world map | One marker per party, in the middle of its land. | On or off |
| Land coloured on the world map | Claimed chunks tinted in their party's colour, with a border where the land ends. Painted over the game's own map when a player opens it (M). Worlds that use another mod's map are left alone. | On or off |
| Claim from the world map | Flags on the free chunks a player could claim next; right-click one on the map (M) to claim it. | On or off |
| Map menu command starts with / | Off (the default): the game adds the / itself. Switch on only if claiming from the map says the command is unknown. | On or off |
| Claiming asks to confirm | /claims claim outlines the chunk and its cost first; /claims confirm claims it. | On or off |
| Creatures may change claimed land | Off: blocks broken or placed by anything that is not a player are stopped on claimed land. | On or off |
| Release land after days without a member online | 0 = never. The land of a party is released when none of its members was online for this many days. The party itself stays. | 0 to 3650 |


### Claims money

`/tempest` → Claims money. Who can change it: `tempest.admin` or `tempest.admin.claims`.

#### Prices

All optional (0 = free), with any economy. What players pay leaves the economy.

| Setting | What it does | Values |
|---|---|---|
| Founding a party |  | 0 to 1000000000 |
| Claiming a chunk | The price of a party's first chunk. | 0 to 1000000000 |
| Each next chunk costs more (%) |  | 0 to 100 |
| Given back when unclaiming (%) | A share of what that chunk cost, never more: claiming and unclaiming earns nothing. | 0 to 100 |

#### Buying more land

/claims buy raises a player's own limit by one chunk; it counts in the party they are in.

| Setting | What it does | Values |
|---|---|---|
| An extra chunk | 0 = chunks cannot be bought. | 0 to 1000000000 |
| Each next one costs more (%) |  | 0 to 100 |
| Most a player can buy |  | 0 to 10000 |

#### Upkeep

A daily cost for holding land, paid from the party bank (/claims deposit).

| Setting | What it does | Values |
|---|---|---|
| Upkeep per chunk each day | 0 = off. Taken once a day from the party bank. A party that cannot pay falls to ruins: its land stays protected but it cannot claim more. It is restored the day its bank can pay again. | 0 to 1000000 |
| Days in ruins before the land is released |  | 1 to 365 |


### Claims taxes

`/tempest` → Claims taxes. Who can change it: `tempest.admin` or `tempest.admin.claims`.

#### Party taxes

Parties set their own taxes with /claims tax and /claims worktax, up to these caps.

| Setting | What it does | Values |
|---|---|---|
| Highest tax per member | Each time taxes are collected. 0 = parties cannot ask one. Each time taxes are collected, every member pays the party's tax from their wallet into the party bank. The owner never pays; assistants pay only if the party says so. | 0 to 1000000000 |
| Highest work tax (%) | A share of what members earn in Tempest Jobs. 0 = off. Taken from the member's wallet right after a job pays them, into the party bank. Needs Tempest Jobs. | 0 to 50 |
| Collect taxes every (hours) | Members pay the party's tax automatically this often, from their wallets. 24 = once a day. | 1 to 336 |
| Missed payments before the party acts | Missed in a row. 0 = never: the debt only grows. A member who cannot pay owes the tax and is told how many payments they missed. Paying the debt (/claims paytax) starts the count again. | 0 to 100 |
| Then the member | Suspended members stay in the party but have a visitor's rights on its land until they pay their debt with /claims paytax, or a leader forgives them (/claims forgive). | Is suspended (visitor rights until they pay), Is removed from the party, Only owes more |

#### Party money in /bank

With Tempest Economy, a party can keep its money in one of its owner's banks.

| Setting | What it does | Values |
|---|---|---|
| Parties may link a /bank account | /claims bank <name>: taxes and deposits go into that bank, upkeep is paid from it, and it earns the bank's savings interest. Takes effect for new links at once; a server restart switches existing links off when this is off. Only the bank's owner, who must also own the party, can link it. | On or off |


### Claims rules

`/tempest` → Claims rules. Who can change it: `tempest.admin` or `tempest.admin.claims`.

#### Members

What they may do on the party's land unless the party changes it.

| Setting | What it does | Values |
|---|---|---|
| Members: place blocks |  | On or off |
| Members: break blocks |  | On or off |
| Members: use blocks |  | On or off |
| Members: open chests |  | On or off |
| Members: open doors |  | On or off |
| Members: use benches |  | On or off |
| Members: sit and sleep |  | On or off |
| Members: pick up items |  | On or off |

#### Allies

What they may do on the party's land unless the party changes it.

| Setting | What it does | Values |
|---|---|---|
| Allies: place blocks |  | On or off |
| Allies: break blocks |  | On or off |
| Allies: use blocks |  | On or off |
| Allies: open chests |  | On or off |
| Allies: open doors |  | On or off |
| Allies: use benches |  | On or off |
| Allies: sit and sleep |  | On or off |
| Allies: pick up items |  | On or off |

#### Visitors

Everyone who is not a member or an ally. Parties can change the cells that are not locked.

| Setting | What it does | Values |
|---|---|---|
| Visitors: place blocks |  | On or off |
| Visitors: break blocks |  | On or off |
| Visitors: use blocks |  | On or off |
| Visitors: open chests |  | On or off |
| Visitors: open doors |  | On or off |
| Visitors: use benches |  | On or off |
| Visitors: sit and sleep |  | On or off |
| Visitors: pick up items |  | On or off |
| Visitors: PvP is on |  | On or off |


### Claims rule locks

`/tempest` → Claims rule locks. Who can change it: `tempest.admin` or `tempest.admin.claims`.

#### Members

On: parties cannot change this cell; the server's default always applies.

| Setting | What it does | Values |
|---|---|---|
| Members: place blocks |  | On or off |
| Members: break blocks |  | On or off |
| Members: use blocks |  | On or off |
| Members: open chests |  | On or off |
| Members: open doors |  | On or off |
| Members: use benches |  | On or off |
| Members: sit and sleep |  | On or off |
| Members: pick up items |  | On or off |

#### Allies

On: parties cannot change this cell; the server's default always applies.

| Setting | What it does | Values |
|---|---|---|
| Allies: place blocks |  | On or off |
| Allies: break blocks |  | On or off |
| Allies: use blocks |  | On or off |
| Allies: open chests |  | On or off |
| Allies: open doors |  | On or off |
| Allies: use benches |  | On or off |
| Allies: sit and sleep |  | On or off |
| Allies: pick up items |  | On or off |

#### Visitors

On: parties cannot change this cell; the server's default always applies.

| Setting | What it does | Values |
|---|---|---|
| Visitors: place blocks |  | On or off |
| Visitors: break blocks |  | On or off |
| Visitors: use blocks |  | On or off |
| Visitors: open chests |  | On or off |
| Visitors: open doors |  | On or off |
| Visitors: use benches |  | On or off |
| Visitors: sit and sleep |  | On or off |
| Visitors: pick up items |  | On or off |
| Visitors: PvP is on |  | On or off |
