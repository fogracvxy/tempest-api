# Claims

Land claims for parties: protection, the claim page and map, taxes and upkeep.

## What players read in /guide

The `/guide` pages of this plugin, as a player sees them on a test server (numbers are examples).

### Land claims

- A party claims chunks of the world (32 x 32 blocks, from the ground to the sky). On claimed land only the party decides who may build, break, open chests and fight.

**Getting started**

- /claims create <name> founds your party. Stand where you want land and type /claims claim. /claims shows how much land you hold and may hold; /claims map shows what is around you. Invite friends with /claims invite <player>.

**Rules and allies**

- /claims rules shows who may do what: members, allies and visitors, each for building, breaking, using blocks, chests, doors, benches, seats, picking up items and hurting animals (monsters stay fair game). Change a cell with /claims rule. /claims ally <party> and /claims trust <player> make allies. Shops, ATMs, crates and slot machines stay usable for everyone.

**More land**

- A party may hold more land with more members, with chunks you buy (/claims buy) or earn as rewards, and with what the server gives for levels, ranks and town buildings. Where the server asks for upkeep, keep money in the party bank with /claims deposit.

**Party renown**

- Everything your party does gives it renown: quests, contracts, job pay, events, town projects and the land it holds. Renown raises the party's level, which never goes down and brings more land and the perks the server chose. /claims renown shows your level, perks, what comes next and your party's story.
- Each season the parties with the most renown win prizes for every member. Games of chance, shop trades and payments never count, new members earn after their first day, and each member has a daily limit per kind of action.


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
| `/claims renown` | Everyone | Your party's renown and level |
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
| Add a world where nobody may claim |  | Add a world..., default |
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


### Claims renown

`/tempest` → Claims renown. Who can change it: `tempest.admin` or `tempest.admin.claims`.

#### Party renown

Parties earn renown from what their members do across the Tempest plugins. Levels never go down; a season score starts again every few weeks. Games of chance, shop trades and payments never count.

| Setting | What it does | Values |
|---|---|---|
| Renown is on | Off: no party earns renown; levels already reached keep their land. | On or off |

#### Points

Points for each action, and the most one member earns from it a day (0 = no cap). Above the cap a member earns half as much, up to twice the cap.

| Setting | What it does | Values |
|---|---|---|
| A quest or achievement finished |  | 0 to 10000 |
| Daily cap: A quest or achievement finished |  | 0 to 100000 |
| Items delivered to a contract (per 8 items) |  | 0 to 10000 |
| Daily cap: Items delivered to a contract (per 8 items) |  | 0 to 100000 |
| Job pay (per 100 coins) |  | 0 to 10000 |
| Daily cap: Job pay (per 100 coins) |  | 0 to 100000 |
| A job level reached |  | 0 to 10000 |
| Daily cap: A job level reached |  | 0 to 100000 |
| First place in an event (2nd and 3rd less) |  | 0 to 10000 |
| Daily cap: First place in an event (2nd and 3rd less) |  | 0 to 100000 |
| Helped reach an event goal |  | 0 to 10000 |
| Daily cap: Helped reach an event goal |  | 0 to 100000 |
| Items given to a town project (per 16) |  | 0 to 10000 |
| Daily cap: Items given to a town project (per 16) |  | 0 to 100000 |
| Coins given to a town project (per 500) |  | 0 to 10000 |
| Daily cap: Coins given to a town project (per 500) |  | 0 to 100000 |
| A new chunk claimed (each chunk once) |  | 0 to 10000 |
| Daily cap: A new chunk claimed (each chunk once) |  | 0 to 100000 |
| Elected mayor |  | 0 to 10000 |
| Daily cap: Elected mayor |  | 0 to 100000 |
| Each chunk held, once a day | Land in ruins gives nothing. | 0 to 1000 |
| Other mods' actions | "action = points" with commas, such as "mymod_boss = 25, mmo_achievement = 5". Each counts per event, with no cap. Any action a mod reports through Tempest Core's PlayerActions. Games of chance, shop trades and payments are left out even if named here. | Text |

#### Fair play

Stops one player or alts from carrying a party.

| Setting | What it does | Values |
|---|---|---|
| Only members who are really playing earn | A member who has not turned their view for 5 minutes earns nothing (Tempest Core's activity check), so AFK farms and alts give no renown. | On or off |
| Hours before a new member earns | Stops players hopping between parties to feed them. | 0 to 720 |
| Most renown a party earns in an hour | 0 = no ceiling. Land and admins' gifts are not counted. | 0 to 1000000 |

#### Levels

The renown for a level is base × (level - 1) ^ power.

| Setting | What it does | Values |
|---|---|---|
| Base |  | 10 to 10000000 |
| Power | Higher: later levels take much longer. | 1 to 3 |
| Highest level |  | 1 to 100 |
| More chunks for each level | From level 2 on, added to the party's limit. | 0 to 100 |
| Most chunks from renown |  | 0 to 10000 |
| Tell everyone at every Nth level | 10: the whole server hears about levels 10, 20, 30. 0 = only the party. | 0 to 100 |
| Season length (weeks) | The season score and its leaderboard start again; levels and land stay. | 1 to 52 |
| Follow the battle pass season | With Tempest Pass, a renown season starts and ends with the Pass's season instead of after the weeks above. Without the Pass the weeks count. Switching it starts counting again: the season running now pays no prizes. | On or off |
| Renown from other plugins (a day per member) | Battle pass rewards and other mods, all together. 0 = none. Plugins can give a party renown through Tempest Core (a battle pass tier, another mod's boss). Every plugin's points together count up to this a day per member, half as much up to twice it, then nothing. | 0 to 100000 |


### Claims perks

`/tempest` → Claims perks. Who can change it: `tempest.admin` or `tempest.admin.claims`.

#### Perks for party levels

Pick what each perk gives; its fields follow what you pick ("How much" is a percent for upkeep and boosts). Three empty rows show under the last perk; save to get more.

| Setting | What it does | Values |
|---|---|---|
| Members who join later get past levels' rewards | Off: items, coins and commands go to the members a party has when it reaches the level. On: members who join later get them too, once they are past the new-member wait. Either way a player gets each level's rewards once, whatever party they are in. | On or off |
| Perk 1 | Land and member slots add up over the levels. Upkeep and each boost: the highest level reached counts. Items, coins and commands go to every member once, through /mail. The title shows on the party frames. Empty rows are left out; saving moves the rows up so no gaps stay. Games of chance are never boosted. | (empty), More land (chunks), More member slots, Cheaper upkeep (% off), A boost for every member (%), Items for every member, Coins for every member, A command for every member, A party title |
| Perk 1, level | At party level | 2 to 100 |
| How much |  | 1 to 1000000 |
| Perk 1, boost |  | Mob coins, Ore coins, Daily reward, Quest reward, Pass xp, Shop sell, Shop discount, Contract pay, Jobs pay |
| Perk 1, item |  | A list |
| Perk 1, command | Run by the console for each member; {player} is their name. | Text |
| Perk 1, title |  | Text |
| Perk 2 |  | (empty), More land (chunks), More member slots, Cheaper upkeep (% off), A boost for every member (%), Items for every member, Coins for every member, A command for every member, A party title |
| Perk 2, level | At party level | 2 to 100 |
| How much |  | 1 to 1000000 |
| Perk 2, boost |  | Mob coins, Ore coins, Daily reward, Quest reward, Pass xp, Shop sell, Shop discount, Contract pay, Jobs pay |
| Perk 2, item |  | A list |
| Perk 2, command | Run by the console for each member; {player} is their name. | Text |
| Perk 2, title |  | Text |
| Perk 3 |  | (empty), More land (chunks), More member slots, Cheaper upkeep (% off), A boost for every member (%), Items for every member, Coins for every member, A command for every member, A party title |
| Perk 3, level | At party level | 2 to 100 |
| How much |  | 1 to 1000000 |
| Perk 3, boost |  | Mob coins, Ore coins, Daily reward, Quest reward, Pass xp, Shop sell, Shop discount, Contract pay, Jobs pay |
| Perk 3, item |  | A list |
| Perk 3, command | Run by the console for each member; {player} is their name. | Text |
| Perk 3, title |  | Text |
| Perk 4 |  | (empty), More land (chunks), More member slots, Cheaper upkeep (% off), A boost for every member (%), Items for every member, Coins for every member, A command for every member, A party title |
| Perk 4, level | At party level | 2 to 100 |
| How much |  | 1 to 1000000 |
| Perk 4, boost |  | Mob coins, Ore coins, Daily reward, Quest reward, Pass xp, Shop sell, Shop discount, Contract pay, Jobs pay |
| Perk 4, item |  | A list |
| Perk 4, command | Run by the console for each member; {player} is their name. | Text |
| Perk 4, title |  | Text |
| Perk 5 |  | (empty), More land (chunks), More member slots, Cheaper upkeep (% off), A boost for every member (%), Items for every member, Coins for every member, A command for every member, A party title |
| Perk 5, level | At party level | 2 to 100 |
| How much |  | 1 to 1000000 |
| Perk 5, boost |  | Mob coins, Ore coins, Daily reward, Quest reward, Pass xp, Shop sell, Shop discount, Contract pay, Jobs pay |
| Perk 5, item |  | A list |
| Perk 5, command | Run by the console for each member; {player} is their name. | Text |
| Perk 5, title |  | Text |
| Perk 6 |  | (empty), More land (chunks), More member slots, Cheaper upkeep (% off), A boost for every member (%), Items for every member, Coins for every member, A command for every member, A party title |
| Perk 6, level | At party level | 2 to 100 |
| How much |  | 1 to 1000000 |
| Perk 6, boost |  | Mob coins, Ore coins, Daily reward, Quest reward, Pass xp, Shop sell, Shop discount, Contract pay, Jobs pay |
| Perk 6, item |  | A list |
| Perk 6, command | Run by the console for each member; {player} is their name. | Text |
| Perk 6, title |  | Text |
| Perk 7 |  | (empty), More land (chunks), More member slots, Cheaper upkeep (% off), A boost for every member (%), Items for every member, Coins for every member, A command for every member, A party title |
| Perk 7, level | At party level | 2 to 100 |
| How much |  | 1 to 1000000 |
| Perk 7, boost |  | Mob coins, Ore coins, Daily reward, Quest reward, Pass xp, Shop sell, Shop discount, Contract pay, Jobs pay |
| Perk 7, item |  | A list |
| Perk 7, command | Run by the console for each member; {player} is their name. | Text |
| Perk 7, title |  | Text |
| Perk 8 |  | (empty), More land (chunks), More member slots, Cheaper upkeep (% off), A boost for every member (%), Items for every member, Coins for every member, A command for every member, A party title |
| Perk 8, level | At party level | 2 to 100 |
| How much |  | 1 to 1000000 |
| Perk 8, boost |  | Mob coins, Ore coins, Daily reward, Quest reward, Pass xp, Shop sell, Shop discount, Contract pay, Jobs pay |
| Perk 8, item |  | A list |
| Perk 8, command | Run by the console for each member; {player} is their name. | Text |
| Perk 8, title |  | Text |
| Perk 9 |  | (empty), More land (chunks), More member slots, Cheaper upkeep (% off), A boost for every member (%), Items for every member, Coins for every member, A command for every member, A party title |
| Perk 9, level | At party level | 2 to 100 |
| How much |  | 1 to 1000000 |
| Perk 9, boost |  | Mob coins, Ore coins, Daily reward, Quest reward, Pass xp, Shop sell, Shop discount, Contract pay, Jobs pay |
| Perk 9, item |  | A list |
| Perk 9, command | Run by the console for each member; {player} is their name. | Text |
| Perk 9, title |  | Text |
| Perk 10 |  | (empty), More land (chunks), More member slots, Cheaper upkeep (% off), A boost for every member (%), Items for every member, Coins for every member, A command for every member, A party title |
| Perk 10, level | At party level | 2 to 100 |
| How much |  | 1 to 1000000 |
| Perk 10, boost |  | Mob coins, Ore coins, Daily reward, Quest reward, Pass xp, Shop sell, Shop discount, Contract pay, Jobs pay |
| Perk 10, item |  | A list |
| Perk 10, command | Run by the console for each member; {player} is their name. | Text |
| Perk 10, title |  | Text |
| Perk 11 |  | (empty), More land (chunks), More member slots, Cheaper upkeep (% off), A boost for every member (%), Items for every member, Coins for every member, A command for every member, A party title |
| Perk 11, level | At party level | 2 to 100 |
| How much |  | 1 to 1000000 |
| Perk 11, boost |  | Mob coins, Ore coins, Daily reward, Quest reward, Pass xp, Shop sell, Shop discount, Contract pay, Jobs pay |
| Perk 11, item |  | A list |
| Perk 11, command | Run by the console for each member; {player} is their name. | Text |
| Perk 11, title |  | Text |
| Perk 12 |  | (empty), More land (chunks), More member slots, Cheaper upkeep (% off), A boost for every member (%), Items for every member, Coins for every member, A command for every member, A party title |
| Perk 12, level | At party level | 2 to 100 |
| How much |  | 1 to 1000000 |
| Perk 12, boost |  | Mob coins, Ore coins, Daily reward, Quest reward, Pass xp, Shop sell, Shop discount, Contract pay, Jobs pay |
| Perk 12, item |  | A list |
| Perk 12, command | Run by the console for each member; {player} is their name. | Text |
| Perk 12, title |  | Text |
| Perk 13 |  | (empty), More land (chunks), More member slots, Cheaper upkeep (% off), A boost for every member (%), Items for every member, Coins for every member, A command for every member, A party title |
| Perk 13, level | At party level | 2 to 100 |
| How much |  | 1 to 1000000 |
| Perk 13, boost |  | Mob coins, Ore coins, Daily reward, Quest reward, Pass xp, Shop sell, Shop discount, Contract pay, Jobs pay |
| Perk 13, item |  | A list |
| Perk 13, command | Run by the console for each member; {player} is their name. | Text |
| Perk 13, title |  | Text |
| Perk 14 |  | (empty), More land (chunks), More member slots, Cheaper upkeep (% off), A boost for every member (%), Items for every member, Coins for every member, A command for every member, A party title |
| Perk 14, level | At party level | 2 to 100 |
| How much |  | 1 to 1000000 |
| Perk 14, boost |  | Mob coins, Ore coins, Daily reward, Quest reward, Pass xp, Shop sell, Shop discount, Contract pay, Jobs pay |
| Perk 14, item |  | A list |
| Perk 14, command | Run by the console for each member; {player} is their name. | Text |
| Perk 14, title |  | Text |
| Perk 15 |  | (empty), More land (chunks), More member slots, Cheaper upkeep (% off), A boost for every member (%), Items for every member, Coins for every member, A command for every member, A party title |
| Perk 15, level | At party level | 2 to 100 |
| How much |  | 1 to 1000000 |
| Perk 15, boost |  | Mob coins, Ore coins, Daily reward, Quest reward, Pass xp, Shop sell, Shop discount, Contract pay, Jobs pay |
| Perk 15, item |  | A list |
| Perk 15, command | Run by the console for each member; {player} is their name. | Text |
| Perk 15, title |  | Text |
| Perk 16 |  | (empty), More land (chunks), More member slots, Cheaper upkeep (% off), A boost for every member (%), Items for every member, Coins for every member, A command for every member, A party title |
| Perk 16, level | At party level | 2 to 100 |
| How much |  | 1 to 1000000 |
| Perk 16, boost |  | Mob coins, Ore coins, Daily reward, Quest reward, Pass xp, Shop sell, Shop discount, Contract pay, Jobs pay |
| Perk 16, item |  | A list |
| Perk 16, command | Run by the console for each member; {player} is their name. | Text |
| Perk 16, title |  | Text |
| Perk 17 |  | (empty), More land (chunks), More member slots, Cheaper upkeep (% off), A boost for every member (%), Items for every member, Coins for every member, A command for every member, A party title |
| Perk 17, level | At party level | 2 to 100 |
| How much |  | 1 to 1000000 |
| Perk 17, boost |  | Mob coins, Ore coins, Daily reward, Quest reward, Pass xp, Shop sell, Shop discount, Contract pay, Jobs pay |
| Perk 17, item |  | A list |
| Perk 17, command | Run by the console for each member; {player} is their name. | Text |
| Perk 17, title |  | Text |
| Perk 18 |  | (empty), More land (chunks), More member slots, Cheaper upkeep (% off), A boost for every member (%), Items for every member, Coins for every member, A command for every member, A party title |
| Perk 18, level | At party level | 2 to 100 |
| How much |  | 1 to 1000000 |
| Perk 18, boost |  | Mob coins, Ore coins, Daily reward, Quest reward, Pass xp, Shop sell, Shop discount, Contract pay, Jobs pay |
| Perk 18, item |  | A list |
| Perk 18, command | Run by the console for each member; {player} is their name. | Text |
| Perk 18, title |  | Text |
| Perk 19 |  | (empty), More land (chunks), More member slots, Cheaper upkeep (% off), A boost for every member (%), Items for every member, Coins for every member, A command for every member, A party title |
| Perk 19, level | At party level | 2 to 100 |
| How much |  | 1 to 1000000 |
| Perk 19, boost |  | Mob coins, Ore coins, Daily reward, Quest reward, Pass xp, Shop sell, Shop discount, Contract pay, Jobs pay |
| Perk 19, item |  | A list |
| Perk 19, command | Run by the console for each member; {player} is their name. | Text |
| Perk 19, title |  | Text |
| Perk 20 |  | (empty), More land (chunks), More member slots, Cheaper upkeep (% off), A boost for every member (%), Items for every member, Coins for every member, A command for every member, A party title |
| Perk 20, level | At party level | 2 to 100 |
| How much |  | 1 to 1000000 |
| Perk 20, boost |  | Mob coins, Ore coins, Daily reward, Quest reward, Pass xp, Shop sell, Shop discount, Contract pay, Jobs pay |
| Perk 20, item |  | A list |
| Perk 20, command | Run by the console for each member; {player} is their name. | Text |
| Perk 20, title |  | Text |
| Perk 21 |  | (empty), More land (chunks), More member slots, Cheaper upkeep (% off), A boost for every member (%), Items for every member, Coins for every member, A command for every member, A party title |
| Perk 21, level | At party level | 2 to 100 |
| How much |  | 1 to 1000000 |
| Perk 21, boost |  | Mob coins, Ore coins, Daily reward, Quest reward, Pass xp, Shop sell, Shop discount, Contract pay, Jobs pay |
| Perk 21, item |  | A list |
| Perk 21, command | Run by the console for each member; {player} is their name. | Text |
| Perk 21, title |  | Text |
| Perk 22 |  | (empty), More land (chunks), More member slots, Cheaper upkeep (% off), A boost for every member (%), Items for every member, Coins for every member, A command for every member, A party title |
| Perk 22, level | At party level | 2 to 100 |
| How much |  | 1 to 1000000 |
| Perk 22, boost |  | Mob coins, Ore coins, Daily reward, Quest reward, Pass xp, Shop sell, Shop discount, Contract pay, Jobs pay |
| Perk 22, item |  | A list |
| Perk 22, command | Run by the console for each member; {player} is their name. | Text |
| Perk 22, title |  | Text |
| Perk 23 |  | (empty), More land (chunks), More member slots, Cheaper upkeep (% off), A boost for every member (%), Items for every member, Coins for every member, A command for every member, A party title |
| Perk 23, level | At party level | 2 to 100 |
| How much |  | 1 to 1000000 |
| Perk 23, boost |  | Mob coins, Ore coins, Daily reward, Quest reward, Pass xp, Shop sell, Shop discount, Contract pay, Jobs pay |
| Perk 23, item |  | A list |
| Perk 23, command | Run by the console for each member; {player} is their name. | Text |
| Perk 23, title |  | Text |
| Perk 24 |  | (empty), More land (chunks), More member slots, Cheaper upkeep (% off), A boost for every member (%), Items for every member, Coins for every member, A command for every member, A party title |
| Perk 24, level | At party level | 2 to 100 |
| How much |  | 1 to 1000000 |
| Perk 24, boost |  | Mob coins, Ore coins, Daily reward, Quest reward, Pass xp, Shop sell, Shop discount, Contract pay, Jobs pay |
| Perk 24, item |  | A list |
| Perk 24, command | Run by the console for each member; {player} is their name. | Text |
| Perk 24, title |  | Text |
| Perk 25 |  | (empty), More land (chunks), More member slots, Cheaper upkeep (% off), A boost for every member (%), Items for every member, Coins for every member, A command for every member, A party title |
| Perk 25, level | At party level | 2 to 100 |
| How much |  | 1 to 1000000 |
| Perk 25, boost |  | Mob coins, Ore coins, Daily reward, Quest reward, Pass xp, Shop sell, Shop discount, Contract pay, Jobs pay |
| Perk 25, item |  | A list |
| Perk 25, command | Run by the console for each member; {player} is their name. | Text |
| Perk 25, title |  | Text |
| Perk 26 |  | (empty), More land (chunks), More member slots, Cheaper upkeep (% off), A boost for every member (%), Items for every member, Coins for every member, A command for every member, A party title |
| Perk 26, level | At party level | 2 to 100 |
| How much |  | 1 to 1000000 |
| Perk 26, boost |  | Mob coins, Ore coins, Daily reward, Quest reward, Pass xp, Shop sell, Shop discount, Contract pay, Jobs pay |
| Perk 26, item |  | A list |
| Perk 26, command | Run by the console for each member; {player} is their name. | Text |
| Perk 26, title |  | Text |
| Perk 27 |  | (empty), More land (chunks), More member slots, Cheaper upkeep (% off), A boost for every member (%), Items for every member, Coins for every member, A command for every member, A party title |
| Perk 27, level | At party level | 2 to 100 |
| How much |  | 1 to 1000000 |
| Perk 27, boost |  | Mob coins, Ore coins, Daily reward, Quest reward, Pass xp, Shop sell, Shop discount, Contract pay, Jobs pay |
| Perk 27, item |  | A list |
| Perk 27, command | Run by the console for each member; {player} is their name. | Text |
| Perk 27, title |  | Text |
| Perk 28 |  | (empty), More land (chunks), More member slots, Cheaper upkeep (% off), A boost for every member (%), Items for every member, Coins for every member, A command for every member, A party title |
| Perk 28, level | At party level | 2 to 100 |
| How much |  | 1 to 1000000 |
| Perk 28, boost |  | Mob coins, Ore coins, Daily reward, Quest reward, Pass xp, Shop sell, Shop discount, Contract pay, Jobs pay |
| Perk 28, item |  | A list |
| Perk 28, command | Run by the console for each member; {player} is their name. | Text |
| Perk 28, title |  | Text |
| Perk 29 |  | (empty), More land (chunks), More member slots, Cheaper upkeep (% off), A boost for every member (%), Items for every member, Coins for every member, A command for every member, A party title |
| Perk 29, level | At party level | 2 to 100 |
| How much |  | 1 to 1000000 |
| Perk 29, boost |  | Mob coins, Ore coins, Daily reward, Quest reward, Pass xp, Shop sell, Shop discount, Contract pay, Jobs pay |
| Perk 29, item |  | A list |
| Perk 29, command | Run by the console for each member; {player} is their name. | Text |
| Perk 29, title |  | Text |
| Perk 30 |  | (empty), More land (chunks), More member slots, Cheaper upkeep (% off), A boost for every member (%), Items for every member, Coins for every member, A command for every member, A party title |
| Perk 30, level | At party level | 2 to 100 |
| How much |  | 1 to 1000000 |
| Perk 30, boost |  | Mob coins, Ore coins, Daily reward, Quest reward, Pass xp, Shop sell, Shop discount, Contract pay, Jobs pay |
| Perk 30, item |  | A list |
| Perk 30, command | Run by the console for each member; {player} is their name. | Text |
| Perk 30, title |  | Text |


### Claims seasons

`/tempest` → Claims seasons. Who can change it: `tempest.admin` or `tempest.admin.claims`.

#### The end of a season

When a season ends, the three parties with the most renown that season get bonus renown (to their level, not the new season) and a reward for each member, through /mail.

| Setting | What it does | Values |
|---|---|---|
| Season prizes |  | On or off |
| Tell the whole server who won |  | On or off |

#### 1st place

| Setting | What it does | Values |
|---|---|---|
| 1st place: bonus renown |  | 0 to 1000000 |
| 1st place: reward for each member | Members who joined in the season's last day (the new-member wait) get none, so nobody joins a winning party just for the prize. | Nothing, Items, Coins, A command |
| 1st place: item |  | A list |
| 1st place: how many | Items: up to 1,000. Coins: up to 1,000,000. | 1 to 1000000 |
| 1st place: command | Run by the console for each member; {player} is their name. | Text |

#### 2nd place

| Setting | What it does | Values |
|---|---|---|
| 2nd place: bonus renown |  | 0 to 1000000 |
| 2nd place: reward for each member | Members who joined in the season's last day (the new-member wait) get none, so nobody joins a winning party just for the prize. | Nothing, Items, Coins, A command |
| 2nd place: item |  | A list |
| 2nd place: how many | Items: up to 1,000. Coins: up to 1,000,000. | 1 to 1000000 |
| 2nd place: command | Run by the console for each member; {player} is their name. | Text |

#### 3rd place

| Setting | What it does | Values |
|---|---|---|
| 3rd place: bonus renown |  | 0 to 1000000 |
| 3rd place: reward for each member | Members who joined in the season's last day (the new-member wait) get none, so nobody joins a winning party just for the prize. | Nothing, Items, Coins, A command |
| 3rd place: item |  | A list |
| 3rd place: how many | Items: up to 1,000. Coins: up to 1,000,000. | 1 to 1000000 |
| 3rd place: command | Run by the console for each member; {player} is their name. | Text |

#### Rivals

Each Monday parties of a similar level are paired. The one that gains more renown that week wins the bonus. A race without PvP, so small parties compete with parties their size.

| Setting | What it does | Values |
|---|---|---|
| Weekly rivals |  | On or off |
| Bonus renown for winning a week |  | 0 to 1000000 |


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
| Members: hurt animals |  | On or off |

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
| Allies: hurt animals |  | On or off |

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
| Visitors: hurt animals |  | On or off |
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
| Members: hurt animals |  | On or off |

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
| Allies: hurt animals |  | On or off |

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
| Visitors: hurt animals |  | On or off |
| Visitors: PvP is on |  | On or off |
