# All commands and permissions

Every command of every Tempest plugin, and who can use it.

Every command of the Tempest plugins, with the permission it needs. "Everyone" works for every player; a permission means only players or groups given it.

## Core

| Command | Who can use it | What it does |
|---|---|---|
| `/board` (/sidebar) | Everyone | Pick what your board on the right of the screen shows, or hide it |
| `/booster` | `tempest.boosters` | Give a player a booster for a while (admins, crate and vote rewards) |
| `/guide` (/serverhelp) | Everyone | How the server's shop, crates, quests and money work |
| `/hud` (/coinhud) | Everyone | Show or hide your money counter (/hud top, left or low moves it) |
| `/hud left` | Everyone | Money counter in the top left corner |
| `/hud low` | Everyone | Money counter on the right side, lower down |
| `/hud top` | Everyone | Money counter in a row along the top, right of centre |
| `/mail` (/mailbox) | Everyone | Open your mailbox: rewards and items kept for you |
| `/places` | Everyone | Places on the world map, and what your map shows |
| `/places add` | `tempest.admin.map` | Adds a place to the map where you stand (admins) |
| `/serverinfo` (/rules, /info) | Everyone | The server's rules and info |
| `/tempest` (/casino) | Everyone | Tempest: the settings menu for admins, the help screen for players |
| `/tempest doctor` | `tempest.admin` | Finds ways players could make money from nothing in the settings (admins) |
| `/tempest hub` | `tempest.admin` | The Tempest hub: every plugin in one place, and protection for your spawn |
| `/tempest hub corner` | `tempest.admin` | Mark a corner of an area to protect |
| `/tempest hub place` | `tempest.admin` | Build the Tempest hub in front of you |
| `/tempest hub protect` | `tempest.admin` | Turn the hub's protection on or off |
| `/tempest hub protect-area` | `tempest.admin` | Protect the area between your two corners |
| `/tempest hub remove` | `tempest.admin` | Remove the hub and put the ground back |
| `/tempest hub unprotect-area` | `tempest.admin` | Stop protecting an area |
| `/tempest info` | `tempest.admin` | Tempest plugins: versions, editions and the economy (admins) |
| `/tempest log` | `tempest.admin` | Who changed what: the newest lines of the admin log (admins) |
| `/tempest report` | `tempest.admin` | Writes a support report to paste when asking for help (admins) |
| `/tempest settings` | Everyone | Open the Tempest settings menu (admins) |
| `/tempest texts` | Everyone | Change any text players see (admins) |

## Economy (Coins)

| Command | Who can use it | What it does |
|---|---|---|
| `/atm` | `coins.admin.atm` | Admin: get an ATM in a design to place |
| `/baltop` (/rich) | Everyone | Show the richest players |
| `/bank` (/banks) | Everyone | Your shared bank accounts |
| `/bank open` | Everyone | Open one bank by name |
| `/coins` (/coinhelp) | Everyone | Help for coins, the wallet, banks and daily rewards |
| `/daily` | Everyone | Open the daily reward calendar |
| `/economy` (/eco) | `coins.admin.economy` | Admin: the economy screen, and changing balances |
| `/economy add` | `coins.admin.economy` | Give a player money |
| `/economy import` | `coins.admin.economy` | Copy every player's balance from another economy (Ecotale, or one through VaultUnlocked) |
| `/economy set` | `coins.admin.economy` | Set a player's balance to an amount |
| `/economy take` | `coins.admin.economy` | Take money from a player |
| `/leaderboards` (/leaderboard, /ranks) | Everyone | The richest players, biggest winners and best traders |
| `/pay` | Everyone | Send money from your wallet to another player |
| `/wallet` (/balance, /bal) | Everyone | Open your wallet: balance, coins, payments and history |

## Shop

| Command | Who can use it | What it does |
|---|---|---|
| `/sell` | Everyone | Sell items to the shop |
| `/sell all` | Everyone | Sell every item the shop buys |
| `/sell hand` | Everyone | Sell the item in your hand |
| `/shop` | Everyone | Open the shop |
| `/shop link` | `shop.admin` | Make the block you look at a shop, selling as this stall kind |
| `/shop stall` | `shop.admin` | Get a stall to place |
| `/shop unlink` | `shop.admin` | Make the block you look at an ordinary block again |

## Crates

| Command | Who can use it | What it does |
|---|---|---|
| `/cratekey` | `crates.admin` | Give a player crate keys |
| `/crates` (/crate) | Everyone | Open crates for prizes |
| `/crates log` | `crates.admin` | Admins: a player's newest crate openings, for prize questions |
| `/keyparty` | `crates.admin` | Give everyone online crate keys after a countdown (Pro) |

## Quests

| Command | Who can use it | What it does |
|---|---|---|
| `/achievements` (/achievement, /ach) | Everyone | Your achievements and how close you are |
| `/quests` (/quest) | Everyone | Your quests and the quest board |
| `/questtrigger` | `quests.admin` | Count a custom quest trigger for a player |

## Battle pass

| Command | Who can use it | What it does |
|---|---|---|
| `/pass` (/battlepass) | Everyone | Open the battle pass: tiers, rewards and your XP |
| `/pass premium` | `pass.admin` | Give a player the premium track for this season (admins) |
| `/pass xp` | `pass.admin` | Give a player pass XP, or take it with a negative amount (admins) |

## Events

| Command | Who can use it | What it does |
|---|---|---|
| `/events` (/event) | Everyone | Server events: what is on, what is coming, and the community goal |
| `/events extend` | `events.admin` | More or fewer minutes for the event that is on (admins) |
| `/events give` (/fund) | Everyone | Put money in the server fund: when it is full, an event starts for everyone |
| `/events list` | `events.admin` | Every event and the next starts (admins) |
| `/events start` | `events.admin` | Start an event now (admins) |
| `/events stop` | `events.admin` | Stop the event that is on (admins) |

## Contracts and bounties

| Command | Who can use it | What it does |
|---|---|---|
| `/contracts` (/contract) | Everyone | Open the contracts board: deliver items for money, or ask for the items you need |
| `/contracts bounties` (/bounty) | Everyone | Bounties: put money on a player, or hunt one down |
| `/contracts list` | `contracts.admin` | Admins: the board in chat |
| `/contracts mine` | Everyone | Your contracts: collect what was delivered |
| `/contracts post` | Everyone | Post a contract: ask for items and pay for them |

## Town projects

| Command | Who can use it | What it does |
|---|---|---|
| `/projects` (/project) | Everyone | See the town projects and donate to them |
| `/projects cancel` | `projects.admin` | Cancel a project: everything goes back |
| `/projects coins` | `projects.admin` | Set the coin goal of a project |
| `/projects finish` | `projects.admin` | Finish a project now: the whole building goes up |
| `/projects list` | `projects.admin` | List every project |
| `/projects material` | `projects.admin` | Change a material of a project (0 takes it off) |
| `/projects new` | `projects.admin` | Pick a prefab and place a new project |
| `/projects out` | Everyone | Leave a plot under construction |
| `/projects pause` | `projects.admin` | Pause a project |
| `/projects place` | `projects.admin` | Go back to the plot you are placing |
| `/projects plan` | `projects.admin` | Mark a plot for a prefab where you stand |
| `/projects prefabs` | `projects.admin` | Find prefabs by name |
| `/projects remove` | `projects.admin` | Take an ended project off the list |
| `/projects resume` | `projects.admin` | Go on with a paused project |
| `/projects reward` | `projects.admin` | Add a console command run for each donor at the end |
| `/projects rewarditems` | `projects.admin` | Pro: items every donor gets at the end (none clears them) |
| `/projects start` | `projects.admin` | Start the project on the marked plot |
| `/projects stop` | `projects.admin` | Stop a project: what stands stays |

## Town

| Command | Who can use it | What it does |
|---|---|---|
| `/mayor` | Everyone | Town: who the mayor is and how to become mayor |
| `/mayor boost` | Everyone | Mayor: give everyone a boost for a while |
| `/mayor clear` | Everyone | Admins: the town has no mayor until the term ends |
| `/mayor fine` | Everyone | Mayor: fine a player who misbehaved |
| `/mayor reward` | Everyone | Mayor: reward a player who helped the town |
| `/mayor set` | Everyone | Admins: make an online player mayor until the term ends |
| `/town` | Everyone | Town: what the town has unlocked and what it still needs |
| `/town lock` | Everyone | Admins: keep an unlock locked |
| `/town unlock` | Everyone | Admins: keep an unlock unlocked |

## Jobs

| Command | Who can use it | What it does |
|---|---|---|
| `/jobs` | Everyone | Jobs: the jobs, your levels, and how to take one |
| `/jobs info` | Everyone | Your jobs and what they paid today |
| `/jobs join` | Everyone | Take a job |
| `/jobs leave` | Everyone | Leave a job |

## Trade

| Command | Who can use it | What it does |
|---|---|---|
| `/trade` | Everyone | Trade with a player: /trade <player>, or accept, deny, toggle, open |

## Claims

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

## Slot machines

| Command | Who can use it | What it does |
|---|---|---|
| `/jackpot` | Everyone | Show the slot machine jackpot |
| `/slotbet` | Everyone | Choose how much each slot machine spin costs |
| `/slotstats` | `slotmachine.admin.stats` | Show slot machine totals and payback |
| `/slotstats reset` | `slotmachine.admin.stats` | Start the slot machine totals again from zero |
| `/slottheme` | `slotmachine.admin.theme` | Gives you a slot machine with the chosen theme |
| `/slottoken` | `slotmachine.admin.token` | Gives you a slot machine token |

## Lottery

| Command | Who can use it | What it does |
|---|---|---|
| `/lottery` (/lotto) | Everyone | Buy lottery tickets and check status |
| `/lottery buy` | Everyone | Buy lottery tickets |

## Coinflip

| Command | Who can use it | What it does |
|---|---|---|
| `/coinflip` (/cf) | Everyone | Open the coinflip rooms |
| `/coinflip cancel` | Everyone | Close your open rooms and get your stakes back |
| `/coinflip create` | Everyone | Open a room with a stake |
| `/coinflip join` | Everyone | Join a player's room |
| `/coinflip list` | Everyone | List the open rooms in chat |
