# Changelog

Every release of the Tempest plugins, newest first.

## 2026-11-27

### Projects 1.3.0

- New: build a finished project again from nothing on the same plot: BUILD AGAIN in its MANAGE tab, or `/projects rebuild <id>`. The prefab is checked first, so a building never comes down that could not go up again
- New: AT A NEW TOWN SEASON in a project's MANAGE tab (or `/projects season <id> <rule>`): what Tempest Town Pro does with it when a season starts: build again, again only if finished, stay, or be taken down with its old ground back
- New: the items in the chests of a building that comes down are kept: in a lost and found for admins (`/projects lostfound`, `/projects lostfound take`), dropped beside the plot, or lost, as set in /tempest
- Players and creatures standing in a plot are moved beside it before it is cleared, so nobody falls into the hole
- Faraway plots are loaded to be cleared at once, and only a few plots are cleared at the same time (both settings)
- Pro: finish rewards only for donors who gave at least a set share of the goal (1% at first), so one coin from many accounts earns nothing
- Donations given back (a cancel) are reported, so Tempest Town takes back the season and mayor points they gave
- New: a town that grows one building at a time. OPENS AFTER in a project's MANAGE tab, or `/projects after <id> <other>`, keeps a project waiting, with its plan shown, until the other one is finished
- What stood on a plot before a building is now kept while the project is on the list, so cancelling a rebuilt project still puts the old ground back

### Town 1.4.0

- New: Tempest Town Pro with town seasons. Every few weeks the town starts again from the ground up: every building comes down and opens from nothing on its plot, and what it unlocked locks until it stands again
- Plots, plans, materials, goals and rewards stay as you made them, and buildings you add join the next season. Unlocks you set to ON or OFF never change
- Players are warned 7 days, 1 day and 1 hour before a new season
- Season prizes in money for the season's top three builders, and `/town season` shows the season, its top builders and the last seasons. Admins can start the next season now with `/town season start`
- Each building chooses what a new season does with it (in its MANAGE tab in /projects): build again, again only if finished, stay as it is, be taken down (a building for one season), or let the town's settings decide
- Everything else is a setting: the season's length and the hour it starts at, the warning times, whether projects under way start again, unlocks that always stay, a new mayor with each season, chat and Discord announcements, points per item, the least points for a prize, money and a console command for the top three, commands to run at each new season, and how many past seasons are kept
- Projects under way carry on and keep their donations at a new season unless you choose otherwise, so nobody can donate just before a season, collect what donating earns, and get it all back. Refunded donations lose their season and mayor points, and the prizes are worked out after the buildings
- A season that ends while Tempest Projects reloads waits for it
- `/town season preview` shows what a new season would do now, building by building, before anything happens; and a backup of every plugin's data is made before each new season (Back up first, on by default)
- Off until switched on: /tempest, Town tab, Seasons. The free edition of Town stays as it is
- Fixed: a Town chat line could fail while Town was starting

## 2026-11-26

### Core 1.9.1

- Settings tabs with many item pickers (Claims perks) open at once instead of freezing the game for a moment: a long list is sent only when its row shows.

## 2026-11-26

### Core 1.9.0

- Settings can show a table of items: pick an item from a searchable list and set its own numbers and tick boxes in its row (used for Shop's rules per item).
- A player is saved the moment a shop, stall, trade, ATM, crate, slot token or contract moves their items, instead of within the game's next 10 seconds, so a server crash in between can no longer copy items. On by default (/tempest, General, "Save players right after a trade").
- Settings tabs can show a small table: rows added with "+ Add" and taken out with an X, each with the same few numbers, tick boxes and words (used for Shop's stall levels).
- Rewards for hours played are now a table of milestones: each row has its hours, its own coins and, if you like, a console command (a rank, a kit, a crate key). Your old hours and coins per hour are turned into rows.
- Leveling extras: the commands at levels are one table (level and command per row, + Add reward) instead of 40 numbered pairs of fields.
- The board's own lines, and the Server info page's lines and buttons, are tables too: a line has a label and its text, or a Heading tick box and its words (empty words make a gap).
- New settings in Rewards for playing: minutes still before a player counts as AFK, hours an inviter must have played before their code works, and days between two welcome backs.

### Holograms 1.4.3

- Floating items that stand (shop shelves) show blocks as the block itself: still, and with their own textures, instead of a black shape. Plugins read it as API 6.

### Coins 2.8.1

- players are saved at once after putting coins in or taking them out

### SlotMachine 1.3.0

- A switch for all slot machines: off, they stay in place but do not spin, and the jackpot is kept.

### Shop 1.8.0

- **Better market search** (/stall): as you type, cards show the items your words find, with how many stalls sell each and the cheapest price; click one to see only that item, with who sells it from what, its usual price and the best buy order. Filters for the kind of item, the most to pay each, the stars, how far away, and your favourite stalls only, with Clear filters.
- **My market** (a button on /stall, or `/stall sales`): your favourite stalls with Open and Way, your want list, and every trade you made at stalls. Admins also see anyone's trades and who paid whom the most.
- **Favourite stalls**: Add to favourites on any stall, and you hear when it puts something new on sale.
- **Want list**: pick an item and the most you would pay; you hear the moment any stall sells it at that price or less, and My market shows the cheapest stall now. Both limits are in /tempest (0 switches them off).
- **Helpers**: a stall owner lets up to 3 players stock their stall (Sales & helpers, then a name). Helpers put items on it and take back only their own; what sells pays the owner. They never rename it, raise its level, post buy orders or review it.
- **Your stall page**: Sales & helpers on your stall shows what it earned today, in 7 and in 30 days, the best sellers, the newest sales with who bought, and what is running low.
- **Price guard** for player stalls: a listing or buy order far over an item's usual price (the server shop's price, or what it typically sold for at stalls) is refused, so no one can hand coins to a second account or to someone who paid them outside the game. On by default at 10 times; both in /tempest.
- **Rules per item**: pick any item from a list in /tempest and give it its own lowest and highest price at stalls, or keep it off stalls altogether (quest items, crate keys).
- **Sales history**: `/stall sales` shows your own last sales and purchases; admins see anyone's with `/stall sales <player>`, and `/stall sales pairs` lists who paid whom the most. Kept 30 days by default.
- Player stalls have their own map icon, a market tent with its seller, so they no longer look like the server's shops.
- Stall names may not pass for the server's or staff's shop: "Admin Shop", "Adm1n" or "S e r v e r" are refused. The words and the switch are in /tempest; admins may use any name.
- Owners put items on their stall and take them back only standing at it, so a far-off stall is not a chest reachable from the whole map. A switch in /tempest allows it from anywhere.
- **Player shops (Pro):** players put up their own stalls, sell their own items (enchanted ones too) and post buy orders; stalls sell while the owner is offline, and `/stall` is the market with search.
- Where stalls may go is up to you: market districts you mark (`/stall district add`), the party's own land in Tempest Claims, or anywhere they may build. Never on land where the owner may not build.
- Stalls can be unbreakable (only admins), one per player by default (more with `tempest.shop.stalls.<n>`), with a sales tax, daily rent and an away limit; everything on a stall that goes is sent to its owner's `/mail`.
- Stalls are safe: players who may not break one cannot even damage it, and one blown up, burnt or removed by another mod is put back within seconds with everything on it.
- Items on stall shelves that are blocks (furniture, chests, other mods' blocks) stand still with their own textures instead of a black shape, at server stalls too (with this release of Tempest Holograms; older ones float them).
- Stall reviews: buyers give a stall 1 to 5 stars and a few words; the rating shows on the stall and in the market. Who may review, the least they must have spent there, words or stars only, and how often a review can change are settings.
- Trading from afar (a setting): players buy and sell from the `/stall` market list without walking there, with an optional fee; owners still place a real stall.
- Player stalls on the world map with their rating; right-click one to open its shop or show the way there.
- Cooldowns: a wait before a new stall after taking one down, and between renames.
- New settings: how near the stall players must be to trade, and how long the Way marker stays and when it counts as arrived.
- Stall levels: owners upgrade their stall once it has sold enough, for more items, more buy orders, less tax, a bigger map icon and a Featured place. In /tempest the levels are one small table: **+ Add level** adds a row (up to 10), each row's numbers and tick boxes change in place, and the X takes a level out.
- A real search for the market: words in any order, item names in the player's language, enchantments, stall names and owners; the start of a word, plurals and small typos are enough. Sort by best match, price, rating, distance or stock, and a Way button marks the stall on your map and compass.
- Scam-proof stalls: a price raised while you were looking buys nothing, worn items cannot be sold as new, two accounts cannot fake the price hint, and no stall can copy another's name.
- Each item shows its typical price at player stalls over the last 7 days; player stalls and districts show on the map, and owners read what sold while they were away.

### Quests 1.8.0

- A switch for the whole plugin: with Quests off nothing counts and players cannot open /quests; their progress is kept.

### Crates 1.8.0

- New setting: the key party countdown.

### Events 1.5.0

- Supply drops can be switched off on their own.
- New settings for supply drops: how many at once, how near and far from players they land, and how long they stay.

### Contracts 1.5.0

- The contractor ranks in /tempest are one small table: each rank's name, items delivered and bonus in a row.

### Projects 1.2.2

- players are saved at once after giving items and collecting

### Trade 1.1.2

- players are saved at once when items go into a trade and when they arrive

### Claims 1.2.0

- New setting: minutes to accept a party invite.

## 2026-11-23

### Coins 2.8.0

- Switch to Tempest from any economy in one command: `/eco import` now copies balances from YAS Currency, EliteEssentials and EconomyAPI too, which don't list their players (every player who ever joined your server is looked up). Tested on real servers with Ecotale, YAS Currency, PJ Money, EssentialsPlus, EliteEssentials and EconomyAPI.
- `/tempest doctor` warns when another plugin has taken Tempest Economy's commands (`/pay`, `/balance`, `/eco`...) or keeps a second money next to it (EssentialsPlus, EliteEssentials, EconomyAPI, Ecotale, Coins & Markets and others), and says the exact setting that fixes it.
- Switch from Coins & Markets: `/eco import CoinsAndMarkets` exchanges its physical coins (inventory and pouch) for Tempest coins, everyone online at once and everyone else when they next join, until `/eco import stop`. 1 copper is 1 coin, or choose with `--rate 100` (100 copper a coin).
- `/eco import` says plainly when an economy has no balance for anyone who joined your server, instead of offering to copy nothing.

## 2026-11-22

### Holograms 1.4.2

- every plugin tells admins when Tempest Core is older than it was made for, and names the oldest Core it loads with

### Coins 2.7.2

- Fixed: with an older Tempest Core (1.7.1 or before) the plugin failed to load ("Failed to load plugins: AtomicTempest:Coins"). It now loads with any Core; update Tempest Core to 1.8.1 for the newest features.
- When Tempest Core is older than this plugin was made for, admins are told in game (one line for every Tempest plugin), and the plugin still runs. The oldest Core it loads with is 1.6.1.

### Lottery 1.1.5

- every plugin tells admins when Tempest Core is older than it was made for, and names the oldest Core it loads with

### SlotMachine 1.2.8

- every plugin tells admins when Tempest Core is older than it was made for, and names the oldest Core it loads with

### Shop 1.7.2

- Fixed: with an older Tempest Core (1.7.1 or before) the plugin failed to load ("Failed to load plugins: AtomicTempest:Shop"). It now loads with any Core; update Tempest Core to 1.8.1 for the newest features.
- When Tempest Core is older than this plugin was made for, admins are told in game (one line for every Tempest plugin), and the plugin still runs. The oldest Core it loads with is 1.6.1.

### Quests 1.7.1

- Fixed: with an older Tempest Core (1.7.1 or before) the plugin failed to load ("Failed to load plugins: AtomicTempest:Quests"). It now loads with any Core; update Tempest Core to 1.8.1 for the newest features.
- When Tempest Core is older than this plugin was made for, admins are told in game (one line for every Tempest plugin), and the plugin still runs. The oldest Core it loads with is 1.6.1.

### Crates 1.7.2

- Fixed: with an older Tempest Core (1.7.1 or before) the plugin failed to load ("Failed to load plugins: AtomicTempest:Crates"). It now loads with any Core; update Tempest Core to 1.8.1 for the newest features.
- When Tempest Core is older than this plugin was made for, admins are told in game (one line for every Tempest plugin), and the plugin still runs. The oldest Core it loads with is 1.6.1.

### Coinflip 1.0.7

- every plugin tells admins when Tempest Core is older than it was made for, and names the oldest Core it loads with

### Pass 1.5.1

- every plugin tells admins when Tempest Core is older than it was made for, and names the oldest Core it loads with

### Events 1.4.2

- every plugin tells admins when Tempest Core is older than it was made for, and names the oldest Core it loads with

### Contracts 1.4.1

- every plugin tells admins when Tempest Core is older than it was made for, and names the oldest Core it loads with

### Projects 1.2.1

- every plugin tells admins when Tempest Core is older than it was made for, and names the oldest Core it loads with

### Town 1.3.1

- every plugin tells admins when Tempest Core is older than it was made for, and names the oldest Core it loads with

### Jobs 1.3.1

- every plugin tells admins when Tempest Core is older than it was made for, and names the oldest Core it loads with

### Trade 1.1.1

- every plugin tells admins when Tempest Core is older than it was made for, and names the oldest Core it loads with

### Claims 1.1.2

- every plugin tells admins when Tempest Core is older than it was made for, and names the oldest Core it loads with

## 2026-11-22

### Core 1.8.1

- Fixed: ATMs, slot machines and shop stalls showed two icons on the world map (Tempest's and the game's own). Now one each, with the colour pictures; maps already affected tidy themselves.
- Text settings take long values where needed: the Discord webhook link, several database addresses, long database passwords and backup folders.
- For developers: Core API 44 adds Setting.maxLength, a text setting that takes more than 64 characters.

### Coins 2.7.1

- Fixed: a Discord webhook link could not be saved in /tempest (the field took only 64 characters). Needs Tempest Core 1.8.1.
- Fixed: each ATM showed two icons on the world map. Now one, with the ATM picture (with Tempest Core 1.8.1).

### SlotMachine 1.2.7

- Fixed: each slot machine showed two icons on the world map. Now one, with the slot machine picture (with Tempest Core 1.8.1).

### Shop 1.7.1

- Fixed: each shop stall showed two icons on the world map. Now one, with the stall picture (with Tempest Core 1.8.1).

### Crates 1.7.1

- Fixed: since Crates 1.6.0 every player was disconnected on join ("Could not find document ... for Custom UI Append command"). Update to 1.7.1 right away if you run 1.6.0 or 1.7.0.

## 2026-11-22

### Core 1.8.0

- Several servers can now share one economy and players' progress through a MySQL or MariaDB database (needs any Tempest Pro plugin). Files stay the default and need nothing.
- /tempest → Saving: keep data in files or in a database, and choose what the servers share, each its own switch: players' money, battle pass, quests, jobs, leaderboards for the whole network, one money log. One server can use a database too.
- Players' progress follows them from server to server, held by one server at a time, so a reward is never claimed twice by switching servers.
- Leaderboards for the whole network: the pass, quest and job boards rank the players of every server.
- Switch between files and a database, or turn one part off and on, whenever you like: what players did meanwhile is kept, and nothing can be claimed twice.
- If the database goes down, play goes on: earning, pass XP, quests and jobs continue, spending and rewards wait (players are told why), and nothing is lost, even if the server restarts before the database is back.
- Admins are told in game and on Discord when the database has been down for 15 seconds, and when it is back. /tempest storage shows how fast it answers and the last outages.
- Standby database: type several addresses, and the next one takes over when the first does not answer.
- Backups for every server: a zip of every Tempest plugin's data every 12 hours, with the shared tables when you use a database, never with the database password. /tempest backup makes one now; the folder, how often and how many are kept are settings.
- Player rollback (with a database): a snapshot of each player's money, pass, quests and jobs when they leave. /tempest snapshots lists them, /tempest rollback puts a player back on every server (only while they are offline; it can be undone).
- Fully configurable in /tempest → Saving, counting at once: when admins are told of an outage and whether in game (Discord: Coins' Discord tab), the longest wait between tries, backups (how often, how many, where, with the database and the money log or not) and snapshots (how many, on leaving or not, minutes between, days kept).
- Safe database connections: a hostile database can never read the server's files, only safe connection options are accepted, encryption with an optional certificate check, the password can come from an environment variable, and /tempest storage runs a safety check that says what to fix (root user, too many rights, no encryption, old database or driver).
- Player health dashboard (/tempest players), and rewards for playing that bring players back.
- Setup wizard: /tempest setup fits every plugin to the kind of server in one go, with a tick box for every change, and can undo itself.
- Fixed: an ATM, slot machine or shop stall could show two or three times on the world map (once for each part of its model that was used); maps already affected tidy themselves.
- Saving in files is safer on busy servers: two saves of one file at once can no longer mix, a read never lands in the middle of a save, files Windows holds for a moment (antivirus, backup tools) are tried again, and on Linux a finished save survives a power cut. A backup never fills the disk; admins are told instead.
- Faster with a database far away (a cloud host in another region): routine saves of all players go in one transaction per round, so servers keep up with hundreds of players; XP and money never wait for the database. Tested with 300 players and with an 80 ms database. A second server process started on the same folder is found and named to admins.
- Ready for Hytale 0.8: the same jars run on 0.7.7 and 0.8.
- For developers: Core API 40 to 43 adds Storage (files or a database), SharedData (players' data shared between servers), SharedScores and network leaderboards, StorageHealth, Backups and PlayerSnapshots. Nothing old changed.

### Holograms 1.4.1

- Ready for Hytale 0.8: the same jar runs on 0.7.7 and 0.8.

### Coins 2.7.0

- Several servers share one economy through MySQL or MariaDB (Tempest Core's Saving, with any Tempest Pro plugin): each wallet is held by the server the player is on, so money is never spent twice.
- Payments to players on another server, or offline, arrive exactly once, also after the database was away.
- /pay reaches players on any server of the network by name, and they are told there. Paying players who are offline is a setting of its own (off by default).
- Tamper seals (/eco network seal on): money changed in the database outside the game is found, frozen for spending and can be accepted or taken back (/eco network tampered, accept, restore).
- One money log for the whole network: /eco network log <player> follows a player's money across servers.
- If the database goes down, players keep earning; spending waits and players are told their coins are safe. A restart during the outage keeps every coin. Outages are posted to your Discord alerts.
- Wallets switched to files and back keep money paid while offline and everything earned meanwhile; any conflict is listed for the admin.
- Player rollback (/tempest rollback) includes the wallet.
- Put a dupe right from /eco's transaction log: undo a line, block a source, export as CSV (with any Tempest Pro plugin).
- Setup wizard support, and ready for Hytale 0.8.

### SlotMachine 1.2.6

- Ready for Hytale 0.8: the same jar runs on 0.7.7 and 0.8.

### Shop 1.7.0

- Fixed: a shop stall could show two or three times on the world map. A stall is now one place on the map and breaks from any part of it; stalls already saved at a part move to their block by themselves.
- Setup wizard support (/tempest setup): the shop is fitted to the kind of server in one go, with a tick box for every change, and it can be undone.
- Ready for Hytale 0.8: the same jar runs on 0.7.7 and 0.8.

### Quests 1.7.0

- Quest progress and achievements follow players between servers sharing a database (Tempest Core's Saving, with any Tempest Pro plugin): a quest is never paid twice.
- The quest leaderboard can rank the whole network.
- If the database goes down, progress keeps counting; rewards are paid once it is back. Nothing is lost, even across a restart.
- "Your quests are on their way" for the moment progress comes from another server.
- Included in player snapshots and /tempest rollback.
- Setup wizard support, and ready for Hytale 0.8.

### Crates 1.7.0

- Setup wizard support (/tempest setup): crates and keys are fitted to the kind of server in one go, with a tick box for every change, and it can be undone.
- Guards so the wizard never spoils a server: what an admin changed or placed is never touched.

### Pass 1.5.0

- The battle pass follows players between servers sharing a database (Tempest Core's Saving, with any Tempest Pro plugin): XP, claimed tiers and premium. A tier claimed on one server is claimed on every server.
- The pass leaderboard can rank the whole network; a new season empties it everywhere.
- If the database goes down, XP keeps counting; tiers can be claimed once it is back. Nothing is lost, even across a restart.
- "Your battle pass is on its way" for the moment a pass comes from another server.
- Included in player snapshots and /tempest rollback.
- Setup wizard support, and ready for Hytale 0.8.

### Events 1.4.1

- Ready for Hytale 0.8: the same jar runs on 0.7.7 and 0.8.

### Jobs 1.3.0

- Jobs, levels, XP and pay follow players between servers sharing a database (Tempest Core's Saving, with any Tempest Pro plugin): work is never paid twice.
- The job leaderboards can rank the whole network. Limits on how many players may hold a job count each server's own players.
- If the database goes down, work is still paid and saved once it is back. Nothing is lost, even across a restart.
- "Your jobs are on their way" for the moment jobs come from another server.
- Included in player snapshots and /tempest rollback.
- Setup wizard support, and ready for Hytale 0.8.

### Claims 1.1.1

- Ready for Hytale 0.8: the same jar runs on 0.7.7 and 0.8.

## 2026-11-19

### Core 1.7.1

- Fixed: a short freeze 10 seconds after an admin joined, while the money check ran.

### Holograms 1.4.0

- Pictures in holograms: pick a PNG, JPG or GIF in /holo menu, or paste an https link and press Get; it hangs above the lines, any width, with a border, a dark panel or round corners, and a preview in the menu before you save.
- Animated GIFs play in the world in the Pro edition (the free edition shows the first frame). They play smoothly on each player's game, with nothing sent while they play.
- A clearer editor in tabs: Content (the lines, a top list, what Use does), Look (colours, size, hours, how far it is seen), Placement (aim, hide the menu, small steps) and Picture, with the name, kind and where it is always on top. Pick the hologram's Kind (Text, Top list or Picture) and only that kind's settings show.
- Live editing: every change shows on the hologram in the world as you make it; Save keeps it, Cancel (or closing the menu) puts it back. New holograms appear a few blocks in front of you, facing you.
- Aim to place: the menu closes and the hologram follows the block you look at; left-click (or crouch) sets it down, right-click puts it back, and the menu opens again. Hide menu lets you walk round the hologram before saving; crouch twice (or /holo menu) to bring the menu back. A line on the board says what is going on.
- Place it exactly: Raise and Lower move it a quarter block, Face me turns it towards you, Turn turns it 45°, and "In front of me" brings it to you.
- Lines under a picture now hang below it instead of overlapping it.
- Fixed: a hologram that floats or spins and turns to face players could stop moving while someone walked by it. A spinning hologram no longer turns to face players (the spin shows every side), and a moving picture keeps playing whatever the game thinks it is doing. A hologram set to face one way is never turned towards players.
- Facing: a hologram turns to each player as they walk round it, turns and also leans up or down towards their eyes, or faces one fixed way (Look tab, and the Picture tab for pictures).
- Opacity for pictures: solid, 85%, 70%, 50% or 30%.
- Seen only by a permission: a hologram can show only to players with a permission (Look tab, "Seen only by"), such as a VIP sign. Other players' games never get it at all. Admins with holograms.admin always see every hologram, so they can still edit it. Who has the permission is read when a player joins.
- Picture slideshows: add more pictures after the first on the Picture tab (+ Add a picture) and choose how many seconds each shows; they take turns on each player's game with nothing sent while they play (Pro, like GIFs).
- Fixed: opening a hologram in the editor no longer makes it disappear. It only changes once you change something (and goes back to how it was saved if you change it back). A hologram drawn again after an edit could also stay invisible, because its new picture reused the name of the one still showing; the names now take turns properly.
- Coloured text without typing codes: pick a Text colour and a Behind colour with the game's colour picker, how strong what is behind is (light to solid), and whether lines sit centred, left or right (Look tab). Picking one turns Colours on; Reset puts them back. Colour codes in a line (&c, &#FF8800, <gradient>) still colour it letter by letter from where they stand, and &r goes back to the picked Text colour.
- Letter styles in coloured text: &l bold, &o italic, &n underline and &m strikethrough (or <bold>, <italic>, <underlined>, <strikethrough>), letter by letter. A colour code clears them, as in Minecraft: &c&lHot is red and bold.
- Lighter on players' games: a hologram changed in several ways at once (text, colour, effect, motion) is drawn and sent once, not once per change, and a player who joins gets every picture in one go. Each sending makes the game load its textures again (about a second), so this also cuts down stutter and repeated warnings from other mods.
- Lighter on the server and players' connections: a hologram that turns to face players now turns again only when a player's angle to it changes by a couple of degrees, not on every step they take; players far away hardly cost anything.
- Much less stutter for players: - Coloured holograms with pages draw all their pages once, and each player's game turns them by itself. Before, every page turn sent a new picture, and every player's game reloaded its textures (a short freeze) each time. - Pictures drawn at about the same time (a server start, several top lists refreshing) go out together: one texture reload instead of one per hologram. - A picture goes only to the players in its world, and a player never gets one their game already has. Someone in another world feels nothing when a hub top list changes; they get its picture when they go there. - New setting "Refresh coloured text (seconds)", default 60: how often coloured holograms with placeholders or top lists are drawn again at most (plain floating text still follows "Refresh placeholders").
- Lighter on the server: turning a hologram to face players is now done the way the game turns anything, in its own tick, with each player sent only their own turn. Before, every turn went to everyone nearby and was rewritten for each of them.
- Plain floating text with placeholders now resends only the lines with placeholders on each refresh, not all lines.
- Eight fonts for coloured text, chosen in the editor's style row: Rounded (as before), Fantasy, Medieval, Serif, Comic, Cursive, Pixel and Mono. Letters a font does not have (Cyrillic in some) come from the rounded font. All are free fonts (SIL Open Font License, the licences are in the jar).
- /holo stats: how many holograms of each kind there are, how many entities they have in the world now, how many pictures players got on their loading screen and how many were sent while playing (and how many MB), and how long drawing a picture takes.
- Pictures drawn when the server starts go in the game's own asset list: players who join get them on their loading screen like the game's own textures (no freeze after joining), and their game keeps them, so after the next restart an unchanged picture is not downloaded again.
- Floating and spinning keep their speed on long GIFs and pages (they float about every 3 seconds and turn about every 6, however long the animation is).
- Rename a picture on the Picture tab, or with /holo renamepicture <picture> <new name>; every hologram that shows it follows the new name.
- With the menu hidden, a click brings it back (crouching does not work while flying in creative); two crouches still work too.
- Fixed: long GIFs and coloured text with an effect could slip between frames, show only their first letter, or turn black in game. Pictures now stay within the size the game takes (frames in rows and columns, at most 1024 pixels a side), long GIFs use smaller frames to play smoothly, and text effects step through their frames the right way.
- Templates: "New from a template" starts a Welcome sign, Rules, Richest players, a Shop or Spawn sign, an Event or a Discord link, ready to change and save.
- A better list: search by name or text, and show only this world, holograms near you, text, top lists, pictures, clickable or hidden ones. Each row's More menu can Bring it here, Copy it here, or Hide it without deleting it.
- More for a click: send the player a message (colour codes, {player}), make them wait before they can click again, or let only players with a permission use it. A hologram can now do just one of these, with no command.
- Motion: a picture or coloured text can float gently up and down, spin, or both; it moves on each player's game with nothing sent while it moves (Motion on the Picture tab, and on the Look tab for coloured text).
- Effects for coloured text: Typing (the letters appear one after another), Shine (a bright band sweeps across) and Rainbow; they play on each player's game with nothing sent while they play (Effect on the Look tab).
- GIF speed (Pro): play an animated picture from 4x slower to 4x faster, set in the editor.
- The Picture tab shows the real picture, sharp, as the game draws it (coloured squares while it loads).
- The menu's preview plays GIFs: drag the timeline to any frame, step with < and >, or press Play; it says how many frames there are and how long a round takes.
- The editor says which other holograms show the same picture, /holo pictures marks pictures nothing uses, and /holo deletepicture <name> deletes one (never a picture a hologram still shows).
- New commands: /holo picture <name> <picture>, /holo pictures, /holo download <picture> <link>. Pictures live in universe/mods/holograms/pictures, so owners can also copy files there.
- Safe by design: links must be https and on the internet (never the server's own network), files are limited to 8 MB and 4096 pixels a side and are checked before anything is saved, and fetching from links can be switched off in /tempest → Holograms.
- The line editor's text boxes are wider and its buttons no longer get cut off in game.
- For developers: Picture, Holograms.picture, Holograms.previewColours (any frame), TextImage.setPictureSpeed, TextImage.setPictureMotion, TextImage.setTextEffect and MenuImages, a picture in a menu (API version 5).

### Coins 2.6.0

- Economy health on /eco (new Health tab): whether the server's money is steady, growing or shrinking, by how much this week, and which plugin makes the most money and which takes the most back.
- With any Tempest Pro plugin: advice on what to change (such as which rewards to lower first), the last two weeks day by day (money made, destroyed and on the server), and money alerts.
- Money alerts (with any Tempest Pro plugin): admins online, and your Discord channel, are told when a player's money jumps unusually, one big gain or much more in an hour than players normally make in a day: the usual sign of a dupe or an exploit. The limits set themselves from your server's own numbers, or set them in /tempest → Coins. Money moved between players and admins' gives never alert.

### Crates 1.6.0

- Four new ways to open a crate, picked per crate in /crates → Edit → Style: a prize wheel, a rarity climb, a prize grid, and pick-your-prize (Pro).
- Prize wheel: the crate's prizes sit round a wheel that spins under a pointer and slows to a stop on the prize won.
- Rarity climb: a meter climbs Common, Uncommon, Rare, Epic, Legendary, ringing at each new rarity, and stops at the prize's rarity before the prize shows. The rarer the prize, the longer the climb.
- Prize grid: every prize on a 4 x 4 grid, a light jumping between them until it lands on the prize won.
- Pick your prize (Pro): three different prizes are shown and the player takes the one they want; pity still counts, so a due Epic is always one of the three. Closing the menu takes the first one, so nothing is ever lost.
- Rare, Epic and Legendary prizes are revealed with a burst of light in the rarity's colour (more rays the rarer).
- Every opening stops exactly on what was won: no fake near-misses.
- The wheel's time is its own setting ("Prize wheel time (seconds)", default 6).
- Lighter on the server: crate blocks work out their circling prizes every 2 seconds instead of 20 times a second.

### Events 1.4.0

- Supply drops: during an event a crate lands near a random player, shows on the M map (and with Tempest Holograms a countdown sign over it), and the first player to reach it wins its coins, items and commands. Set how many drops an event has and what they give in /events → Edit; /events drop <event> drops one now.
- Drops never land in water, on leaves or trees, or on claimed land (Tempest Claims), and one nobody reaches in 10 minutes disappears again.

### Projects 1.2.0

- Building sites on the M map, with each building's name and how far it has come ("Town Hall: 45% built"). On or off, icon and colour in /tempest → Map: Building sites.
- Fixed: a short freeze (50-70 ms) about 20 seconds after each server start, while a building site read its building.

## 2026-11-13

### Core 1.7.0

- Party frames: each party member on screen with name, health, stamina and distance, under the party's name (/partyhud). A Party frames tab in /tempest sets place, style, members, offline members, stamina and distances.
- Enchanted and other mods' items are kept whole: enchantments (Simple Enchantments), reforges and sockets (Socket Reforge) and any mod's item data survive mail, rewards, prizes, shops and the market, and are named in plain words ("With Sharpness III", "Refinement Level 3, Socket Max 2").
- Prizes and rewards can be an exact item: lists have "The item in your hand, exactly as it is". Safe against dupes: an item that holds other items (a backpack must be empty), one a mod tracks by its own id, or one with too much data is never copied, and the menu says why ("Can't copy").
- New /tempest → Custom items tab sets how other mods' item fields are treated: fields that change with use (shown, never matched, so a sword that gained experience still sells back), extra bookkeeping to hide, fields that hold items or make an item one of a kind. The defaults suit the mods we know.
- New /tempest item: shows every field of the item in your hand, what players read, its key and whether it can be copied.
- A mod's own name for an item ("Iron Sword +3") shows in shops, the market, lists and mail.
- Scrolling lists keep their place: a click, a timer update or a new row no longer takes the player back to the top (mail, places, texts, doctor, /tempest and every Tempest page with a list).
- /tempest settings save the moment they change; there is no Save button any more. A value that isn't allowed is not saved and the status line says why. Undo puts the tab back as it was when you opened it, and the admin log gets one line per changed setting.
- Settings that differ from how they come are tagged "changed" (hover to see the default); Reset to defaults puts a tab back.
- Item lists are one searchable "add an item" dropdown, with each item below it (icon, name, count, X to remove).
- Console command lists: one line per command with an X, and an "+ Add a command" dropdown of ready-made rewards (crate keys, coins, a message).
- Dropdowns and pickers instead of typed lines in more menus: server info lines (Text, Heading or a gap), map place colours and worlds, the commands at levels (a list, up to 40, not five fixed slots).
- Map places read players the way Hytale 0.7.7 wants (the old way is marked for removal there).
- Settings tabs can hold up to 250 settings.
- For developers: Core API 25 to 36 adds PartyHud, party renown (renownLevel, seasonRenown, addRenown, partiesAtLevel), ItemData and kept exact items, CommandLists, ItemRows and ItemLists, Targets (pick blocks, ores or monsters with families), Setting.adder and Setting.permission, and Steady (lists that keep their place). Nothing old changed.

### Holograms 1.3.0

- Hologram lines get a "+ Value" dropdown that shows what each placeholder says right now, so you no longer have to remember them.
- "Use on it" has a searchable list of the server's commands (typing still works).
- Scrolling lists in the hologram list and the line editor keep their place when you click.

### Coins 2.5.0

- The bank, wallet and leaderboard pages keep their scroll place when you click or the page updates.
- Coins settings in /tempest save the moment they change, and settings you changed are tagged "changed" against their defaults.
- Reset to defaults now works for the Coins tabs.

### SlotMachine 1.2.5

- Slot Machine settings in /tempest are tagged "changed" against their defaults, save the moment they change, and Reset to defaults works for them.

### Shop 1.6.0

- Enchanted items in the shop: hold an enchanted item and add it, and the shop sells it with its enchantments ("With Knockback III", marked "Enchanted"). A plain item and any number of enchanted ones of it are each their own line, side by side.
- Enchanted lines buy back the same enchanted item at its sell price (worn ones by your condition rules), matched by what it carries in any order and however worn. A plain sword never sells to an enchanted line, nor an enchanted one to the plain line.
- Security fix: selling (Sell, sell everything and /sell) compares the item's full data, so an item made to look like an enchanted line can never sell at its price.
- Items from other mods: each mod with items in the shop gets its own entry on the side with its name and an icon ("Socket Reforge", "Simple Enchantments"), and new sort orders "By mod" and "By material". A mod's own item name shows on the card.
- Items that can't be copied safely (a full backpack, an item a mod tracks by its own id) show "Can't copy" and say why, instead of being added.
- Buyers always get fresh copies at full durability.
- Shop pages keep their scroll place when you click.

### Quests 1.6.0

- Quest rewards can be an exact item (enchanted, other mods' items): "Add item in hand" keeps it exactly as it is.
- New quest goal: reach a party level (with Tempest Claims party renown).
- Quest items are picked from one "add an item" dropdown (each with its count and an X), and a quest can run up to 5 commands, picked from ready-made rewards or typed.
- The quest editor and journal keep their scroll place when you click.

### Crates 1.5.0

- Crate prizes can be an exact item: "Add held item" keeps enchantments and other mods' data, with the dupe checks.
- The key for party key drops is picked from a dropdown (the crate keys first).
- Crate settings save the moment they change.
- The crate list and prize editor keep their scroll place when you click.

### Coinflip 1.0.6

- Coinflip pages keep their scroll place when they update or you click.

### Pass 1.4.0

- New tier reward: party renown (Tempest Claims). It waits until the player is in a party, past the new-member wait.
- Rewards can be an exact item: "Item in hand" keeps enchantments and other mods' data.
- A "Ready-made reward..." dropdown fills in a reward's command and its name (crate keys, coins, a message).
- Renown seasons in Tempest Claims can follow the pass season (a Claims setting, off by default).
- Pass pages keep their scroll place when you click.

### Events 1.3.0

- Pick which blocks, ores or monsters a goal counts from a searchable list, with families ("Any Ore Iron (5 kinds)"). Typing still works, and goals that never look at ids hide the filter.
- Event prizes can be an exact item: "The item in your hand, exactly as it is" (enchanted, other mods' items), and changing the count keeps it exact.
- Goal and 1st to 3rd place prize items are one "add an item" dropdown with the items under it.
- Console commands in the editor are one line per command with an X and ready-made rewards to add.
- The goal bar no longer draws on a page without a goal.
- Event pages keep their scroll place when you click.

### Contracts 1.4.0

- The market takes enchanted and other mods' items exactly as they are: list the item in your hand, and an enchanted sword is its own market item. The real item waits in the listing and goes to the buyer, or back to the seller, whole.
- The market and contract deliveries never take an enchanted item as a plain one.
- A mod's own item name shows in the market.
- Blocked items are one "add an item" dropdown; server orders' console commands are a list with ready-made rewards.
- Settings save the moment they change, and changed settings are tagged against their defaults.
- Market and contract lists keep their scroll place when you click.

### Projects 1.1.3

- Project lists keep their scroll place when you click.

### Town 1.3.0

- New unlock condition: a number of parties at a party renown level (Tempest Claims), for example "two parties at level 10".
- The commands run when an unlock is unlocked or locked again are a list with ready-made rewards.
- Town pages keep their scroll place when you click.

### Jobs 1.2.0

- The pay table and mob tiers are clean tables with one header line, every row on one line. "+ Add a tier" is the last row, and each tier has a better sword than the one before.
- The add bar says "Add what pays:" and lists what the job is paid for: mobs for a hunter, blocks for breaking, building and harvesting, items for crafting, with groups such as "Any Ore". Picking one adds its row at once.
- Level rewards are a list ("+ Add a level reward", up to 50), not five fixed slots. Each reward's items and commands use the item dropdown and command list.
- Level rewards can be an exact item (enchanted, other mods' items).
- Adding or removing a row no longer jumps the editor back to the top.
- "Mobs that never pay" is picked from a searchable list of the game's monsters.
- Jobs settings are tagged when changed and Reset to defaults works for them.

### Trade 1.1.0

- Blocked items are one searchable "add an item" dropdown with the items under it.
- Trade settings save the moment they change, are tagged "changed" against their defaults, and Reset to defaults works for them.

### Claims 1.1.0

- Party renown: everything a party does on your server (quests, contracts, jobs, events, projects, new land, land held) earns renown. Party levels never drop and add land. Daily caps per member, a wait for new members, and only active players count; games of chance and trades never count.
- Renown perks for party levels, edited in /tempest → Claims perks: more land, member slots, cheaper upkeep, boosts, items, coins or a command to every member's /mail, and titles on the party frames. Each player gets a level's reward once, whatever party they are in.
- Renown seasons: when a season ends, the top three parties get bonus renown and a prize for every member, and the whole server hears who won. Weekly rivals (off by default) pair parties of a similar level each Monday.
- The renown page (/claims renown, or Renown on the claim page): level and bar, season place and days left, perks now and next, points by member and by source, and the party chronicle (founded, joined, levels, land, events won, mayors).
- Party frames on screen for every party, and the board shows the party level where you stand ("Land: Red Dragons · Lv 6").
- New rule "animals": only members may hurt creatures that are not hostile (cattle, sheep, chickens, neutral creatures) on the land; monsters stay fair game. Hits by hand, arrows or anything else a player causes are stopped. Allies and visitors are refused by default, and parties and admins can change and lock it like every rule.
- "Pick up items" now also covers items lying on the ground, not only drops from breaking a block: a player who may not pick up there walks over them.
- Land saved before the animals rule gets it refused for allies and visitors once (members keep it); later choices are kept.
- Security fix: only a full Tempest admin (tempest.admin) can change renown perk and season prize commands, which run as the console; staff with only the Claims tabs no longer can.
- Perks and season prizes are picked from dropdowns and item pickers; "Worlds where nobody may claim" picks from the server's worlds.
- New placeholders, a "Most renowned parties" leaderboard, level-up messages and /claims admin renown.
- Claim map spots read players the way Hytale 0.7.7 wants.

## 2026-11-10

### Core 1.6.1

- Claims, land claims every plugin asks, with a read-only Simple Claims link
- no PvP inside the Tempest hub and areas protected with /tempest hub protect-area
- the update notice shows -> instead of an arrow the game cannot draw, and one line per plugin when many were updated
- the ready-made hub becomes a plaza - marble avenues, a gold monument, a bank, a crate shrine, a market and a casino
- the Tempest hub - /tempest hub place builds every plugin's blocks and page signs, and spawns can be protected

### Holograms 1.2.3

- the Tempest hub - /tempest hub place builds every plugin's blocks and page signs, and spawns can be protected

### Coins 2.4.2

- a bank shows what another plugin linked it to (CoinsAPI.bankNote), on its page and its card in /bank
- banks for other plugins in CoinsAPI 5 - find a /bank account, check who may use it, pay in and take out
- ATMs, shop stalls, crate blocks and slot machines stay usable on claimed land
- the Tempest hub - /tempest hub place builds every plugin's blocks and page signs, and spawns can be protected

### Lottery 1.1.4

- the Tempest hub - /tempest hub place builds every plugin's blocks and page signs, and spawns can be protected

### SlotMachine 1.2.4

- ATMs, shop stalls, crate blocks and slot machines stay usable on claimed land
- the Tempest hub - /tempest hub place builds every plugin's blocks and page signs, and spawns can be protected

### Shop 1.5.2

- ATMs, shop stalls, crate blocks and slot machines stay usable on claimed land
- the Tempest hub - /tempest hub place builds every plugin's blocks and page signs, and spawns can be protected

### Quests 1.5.1

- goals for claiming land and founding or joining a party (Tempest Claims)
- the Tempest hub - /tempest hub place builds every plugin's blocks and page signs, and spawns can be protected

### Crates 1.4.2

- ATMs, shop stalls, crate blocks and slot machines stay usable on claimed land
- the menu's spin ends when the crate block drops the prize
- the Tempest hub - /tempest hub place builds every plugin's blocks and page signs, and spawns can be protected

### Coinflip 1.0.5

- the Tempest hub - /tempest hub place builds every plugin's blocks and page signs, and spawns can be protected

### Pass 1.3.1

- the Tempest hub - /tempest hub place builds every plugin's blocks and page signs, and spawns can be protected

### Events 1.2.2

- the Tempest hub - /tempest hub place builds every plugin's blocks and page signs, and spawns can be protected

### Contracts 1.3.2

- the Tempest hub - /tempest hub place builds every plugin's blocks and page signs, and spawns can be protected

### Projects 1.1.2

- the Tempest hub - /tempest hub place builds every plugin's blocks and page signs, and spawns can be protected

### Town 1.2.3

- the Tempest hub - /tempest hub place builds every plugin's blocks and page signs, and spawns can be protected

### Jobs 1.1.2

- the Tempest hub - /tempest hub place builds every plugin's blocks and page signs, and spawns can be protected

### Claims 1.0.0

- First release.

## 2026-11-09

### Core 1.6.0

- settings rows show only when they mean something, live as the admin changes them (API 22)
- mob gold by level and elite mobs work with RPG Leveling; texts name all three leveling mods
- a rank perk "Leveling XP (%)" raises leveling XP in any leveling mod
- RPG Leveling as a leveling mod, class tiers, and linked mods in the admin's choice (API 21)
- console commands and granted permissions need tempest.admin (#193)
- (?) icon with a longer explanation on /tempest settings rows
- leveling settings split by mod, with clearer explanations
- Skills, MMO Skill Tree's skills for every plugin (API 19)
- MMO Skill Tree skill-level and achievement rewards; both leveling mods work side by side
- works with MMO Skill Tree as a leveling mod, next to Endless Leveling

### Holograms 1.2.2

- console commands and granted permissions need tempest.admin (#193)

### Coins 2.4.1

- explanations behind the (?) for every setting that had none

### Lottery 1.1.3

- explanations behind the (?) for every setting that had none

### SlotMachine 1.2.3

- explanations behind the (?) for every setting that had none

### Shop 1.5.1

- explanations behind the (?) for every setting that had none

### Quests 1.5.0

- mob gold by level and elite mobs work with RPG Leveling; texts name all three leveling mods
- explanations behind the (?) for every setting that had none
- goals for MMO Skill Tree skills, achievements, quests and NPC talks
- leveling settings name Endless Leveling or MMO Skill Tree, whichever applies

### Crates 1.4.1

- console commands and granted permissions need tempest.admin (#193)
- explanations behind the (?) for every setting that had none

### Coinflip 1.0.4

- explanations behind the (?) for every setting that had none
- StopTest's stuck refund ignores interrupts, so it guards the stop fix

### Pass 1.3.0

- settings rows show only when they mean something, live as the admin changes them (API 22)
- mob gold by level and elite mobs work with RPG Leveling; texts name all three leveling mods
- explanations behind the (?) for every setting that had none
- leveling settings say which mod they need
- leveling settings name Endless Leveling or MMO Skill Tree, whichever applies

### Events 1.2.1

- explanations behind the (?) for every setting that had none
- leveling settings say which mod they need
- leveling settings name Endless Leveling or MMO Skill Tree, whichever applies

### Contracts 1.3.1

- mob gold by level and elite mobs work with RPG Leveling; texts name all three leveling mods
- console commands and granted permissions need tempest.admin (#193)
- explanations behind the (?) for every setting that had none
- leveling settings say which mod they need
- leveling settings name Endless Leveling or MMO Skill Tree, whichever applies

### Projects 1.1.1

- explanations behind the (?) for every setting that had none

### Town 1.2.2

- console commands and granted permissions need tempest.admin (#193)
- explanations behind the (?) for every setting that had none

### Jobs 1.1.1

- mob gold by level and elite mobs work with RPG Leveling; texts name all three leveling mods
- the pay table's money, XP and X button in one line
- the level reward rows in the job editor fit their hints
- explanations behind the (?) for every setting that had none
- leveling settings say which mod they need
- leveling settings name Endless Leveling or MMO Skill Tree, whichever applies

### Trade 1.0.2

- explanations behind the (?) for every setting that had none

## 2026-11-08

### Core 1.5.0

- Smaller fixes and improvements.

### Quests 1.4.0

- goals for events, server orders, town projects, coinflips, trades and the mayor
- rewards can give items and run a server command

### Pass 1.2.1

- only a full Tempest admin can set command rewards

### Events 1.2.0

- item prizes, and only a full Tempest admin sets console commands

### Projects 1.1.0

- finish rewards can give items; only a full admin adds finish commands

### Town 1.2.1

- Smaller fixes and improvements.

### Jobs 1.1.0

- a job can have a player limit ("only 2 miners"), set on the EDIT tab
- level rewards can give items

### Trade 1.0.1

- Smaller fixes and improvements.

## 2026-11-07

### Holograms 1.2.1

- works on Hytale 0.8.0-pre.4 (#189)

### Shop 1.5.0

- prices that move with supply and demand (Pro) (#38)

### Quests 1.3.1

- selling back what you bought at the shop no longer counts as earning

### Town 1.2.0

- a mayor chosen by donations to town projects (#192)

### Trade 1.0.0

- First release.

## 2026-11-06

### Core 1.4.0

- texts that were cut off now fit, in every language: wider pages and tabs, the Projects plan button on its own row, shorter labels
- Italian as an eighth language (#158)
- HudLines.progress with a display time (API 17)
- Demand and a progress bar under the money counter (API 17)
- Endless Leveling features a town can unlock, town bonuses, leveling XP for town projects, server-wide level, clear and prestige counts
- leveling extras tab with level reward commands, leveling XP from the economy, alt protection for paying and games, elite mobs
- Endless Leveling XP, class, race, mob level and party readings, raid starts, requirements, mob gold and prestige bonus, four boards, eleven placeholders, tabs shown only with a leveling mod
- Leveling tab settings for level-up scaling, milestones, rank bonus, gate and raid waves, chat lines, board and boost switches
- Endless Leveling dungeon, gate and raid clears, money for them, level leaderboard, Leveling XP boost
- player levels from Endless Leveling, with money per level-up and prestige (API 14)
- a plugin's shutdown never waits long for a stuck timer
- race tests and a test for each fixed security finding
- /tempest doctor finds ways players could make money from nothing (#144)
- tell admins when a newer version of a Tempest plugin is out (#22)
- a What's new note for admins after an update, from the release notes (#18)
- config versions in JsonFiles, renamed settings keep the server's value (#24)
- Server info, the server's own rules and info page, and /serverinfo (#156)
- personal boosters for one player, with /booster (#44)
- Reset to defaults on each /tempest tab (#120)

### Holograms 1.2.0

- texts that were cut off now fit, in every language: wider pages and tabs, the Projects plan button on its own row, shorter labels
- Italian as an eighth language (#158)
- click boxes use the game's own open-page interaction, which its client offers F for
- clickable holograms show the F prompt
- the engine stops without a lock
- shown only at set times of the game's day (#163)

### Coins 2.4.0

- texts that were cut off now fit, in every language: wider pages and tabs, the Projects plan button on its own row, shorter labels
- Italian as an eighth language (#158)
- elite mob kills are announced
- mob gold follows Endless Leveling's mob levels
- the last save at shutdown waits for a running autosave
- race tests and a test for each fixed security finding
- /tempest doctor finds ways players could make money from nothing (#144)
- wallet history with All, Income and Expenses, a total and pages (#84)

### Lottery 1.1.2

- Italian as an eighth language (#158)
- race tests and a test for each fixed security finding
- /tempest doctor finds ways players could make money from nothing (#144)

### SlotMachine 1.2.2

- Italian as an eighth language (#158)
- race tests and a test for each fixed security finding
- default slots and Lucky Crate no longer pay back more than they take
- /tempest doctor finds ways players could make money from nothing (#144)

### Shop 1.4.0

- texts that were cut off now fit, in every language: wider pages and tabs, the Projects plan button on its own row, shorter labels
- Italian as an eighth language (#158)
- items can need a level or a class (Endless Leveling)
- the stall shelves stop without a lock
- race tests and a test for each fixed security finding
- /tempest doctor finds ways players could make money from nothing (#144)
- any block as a shop with /shop link, vending machines and counters from other mods (#178)

### Quests 1.3.0

- texts that were cut off now fit, in every language: wider pages and tabs, the Projects plan button on its own row, shorter labels
- Italian as an eighth language (#158)
- goals to fell whole trees and find new places (Tempest Jobs)
- goals to reach a job level and earn from jobs, offered with Tempest Jobs
- quests can need a level or a class, strong mob goals, leveling options hidden without Endless Leveling
- dungeon, wave gate and raid goals, and leveling XP as a reward
- goals to reach a level and to prestige, from Endless Leveling
- the last save at shutdown waits for the timer
- the daily sweep is saved before its bonus is paid
- default slots and Lucky Crate no longer pay back more than they take
- /tempest doctor finds ways players could make money from nothing (#144)
- quest chains, a goal opens once the one it names is done (Pro, #28)
- pass XP can be switched off per quest (#135)
- paid places, only the first players to finish a quest are paid (#113)
- lets go of saved progress of players who are away (#94)

### Crates 1.4.0

- Italian as an eighth language (#158)
- crates can need a level or a class (Endless Leveling)
- a reload during a key party no longer freezes the server
- race tests and a test for each fixed security finding
- default slots and Lucky Crate no longer pay back more than they take
- /tempest doctor finds ways players could make money from nothing (#144)
- opening limits, a cooldown per crate and prizes a player wins only so often (Pro, #34)
- an opening log and /crates log <player> for admins (#35)

### Coinflip 1.0.3

- Italian as an eighth language (#158)
- a reload while a room is refunded no longer freezes the server
- a test that a flip is saved as finished before the winner is paid

### Pass 1.2.0

- texts that were cut off now fit, in every language: wider pages and tabs, the Projects plan button on its own row, shorter labels
- Italian as an eighth language (#158)
- XP for every job level gained
- Pass XP from leveling, raid events and PvP level rewards can be town unlocks
- leveling tab and reward kind shown only with Endless Leveling
- its own leveling tab with Pass XP per level-up, prestige, dungeon, gate and raid, and a daily limit
- leveling XP as a tier reward
- XP for level-ups in Endless Leveling
- season results, the top players kept, told and paid when a season ends (#100)
- catch-up XP for players far behind (Pro, #101)
- a rank's pass XP bonus through Core's rank perks (Pro, #98)

### Events 1.1.0

- texts that were cut off now fit, in every language: wider pages and tabs, the Projects plan button on its own row, shorter labels
- Italian as an eighth language (#158)
- a community goal for job pay, and job pay counts as money earned
- Pass XP from leveling, raid events and PvP level rewards can be town unlocks
- dungeon, gate and raid goals, and an event that starts with every raid
- race tests and a test for each fixed security finding

### Contracts 1.3.0

- texts that were cut off now fit, in every language: wider pages and tabs, the Projects plan button on its own row, shorter labels
- Italian as an eighth language (#158)
- only server orders raise job pay
- tell Core which items the board wants
- Pass XP from leveling, raid events and PvP level rewards can be town unlocks
- PvP by level, with underdog rewards, bully fines and fair bounties
- race tests and a test for each fixed security finding
- /tempest doctor finds ways players could make money from nothing (#144)

### Projects 1.0.1

- texts that were cut off now fit, in every language: wider pages and tabs, the Projects plan button on its own row, shorter labels
- Italian as an eighth language (#158)

### Town 1.1.0

- texts that were cut off now fit, in every language: wider pages and tabs, the Projects plan button on its own row, shorter labels
- Italian as an eighth language (#158)
- unlocks that wait for players at a level, server clears and prestige, and seven ready-made leveling buildings

### Jobs 1.0.0

- First release.

## 2026-11-03

### Holograms 1.1.1

- compiles against Hytale 0.8.0-pre.3 (#142)

### Quests 1.2.2

- the quest board updates live while open, for payments and server quests (#131)

## 2026-11-03

### Core 1.3.0

- who is really playing for playtime rewards, and the best shop discount any perk gives (API 9)
- town unlocks, features a server switches on as its town grows (API 8)

### Holograms 1.1.0

- click commands fill in only plain player names
- clickable holograms, sharper text, no black flash, and a choice of how far they are seen
- coloured text uses a texture size the game accepts, keeps full detail at a distance, and new servers show it from 64 blocks (#161)

### Coins 2.3.0

- a closed bank stays closed after a restart, and coin deposits and bank transfers count only what really moved (#92)
- savings interest for banks, off by default and a town unlock (#42)

### Lottery 1.1.1

- a crash during the drawing can no longer pay the pot twice, and huge rounds keep drawing

### SlotMachine 1.2.1

- wins come up as often as the settings say, and the jackpot pot is safe across worlds

### Shop 1.3.1

- what the shop pays never beats the cheapest anyone with a rank perk could buy it for
- an item that can be a daily deal never sells back above its deal price
- stall items are the right size and stand up properly

### Quests 1.2.1

- a finished server quest is saved before its helpers are paid

### Crates 1.3.1

- block-only crates open only at their blocks, and an opening cut short by a stop still gives its prize

### Coinflip 1.0.2

- a finished flip is saved before the winner is paid

### Pass 1.1.1

- minutes played count only while the player turns their view, and premium is bought once at a time

### Events 1.0.1

- playtime goals count only players who are really playing
- the help page says the goal reward needs 1% of the goal
- the goal reward needs 1% of the goal; placed blocks always remembered; rewards saved before paying

### Contracts 1.2.0

- a server order pays at most 1,000,000,000 per item
- items given to a town project count towards the ranks, and a tab opens the projects

### Projects 1.0.0

- First release.

### Town 1.0.0

- First release.

## 2026-11-01

### Core 1.2.0

- Tempest places on the world map, each kind fully configurable, and /places (#143)
- the chosen language also covers Events, Contracts, stall and ATM names
- what's on when players join, and tips that come once each

### Holograms 1.0.2

- no more doubled floating text and items after joining a world

### Coins 2.2.0

- Tempest places on the world map, each kind fully configurable, and /places (#143)
- four new ATM designs, /atm to place one, crouch + F to change one

### SlotMachine 1.2.0

- Tempest places on the world map, each kind fully configurable, and /places (#143)
- Pirate, Frost, Dragon and Arcane machine themes
- Pro machine themes, starting with a Medieval machine

### Shop 1.3.0

- Tempest places on the world map, each kind fully configurable, and /places (#143)
- themed 3D stalls that sell their own goods, with real items on their shelves
- choose the daily deals: a pool, items that are always a deal, or never
- amounts stop at an item's daily limit, and the lists fit their boxes
- new menu with search, sorting, categories, item cards and a details panel

### Crates 1.3.0

- Tempest places on the world map, each kind fully configurable, and /places (#143)
- new menu with the crates beside their prizes, and an editor in tabs
- smoother crate blocks, and the circling prizes can be set up in /tempest

### Contracts 1.1.0

- player bounties, money held up front and paid to the hunter (#149)

## 2026-10-30

### Core 1.1.0

- one mailbox for every plugin (/mail), rewards that do not fit or come while away wait in a parcel (API 6) (#45)
- contract_deliver player action (API 5)
- Boosts, more of something for a while, asked for at every payout (API 5)

### Coins 2.1.0

- Smaller fixes and improvements.

### Shop 1.2.0

- the daily deal line starts off on the Tempest board, so it pushes no other line off
- daily deals, a few items cheaper each day for everyone, with a limit per player and a line on the board (#39)

### Quests 1.2.0

- the daily sweep and streak use the same clock as the daily quests
- a quest journal with ranks, the daily sweep and streaks, a featured quest of the day and server quests, in a new look

### Crates 1.2.0

- keys for players who are not in a world go to their mailbox
- key parties, everyone online gets crate keys after a countdown, with /keyparty or every few hours (Pro) (#32)

### Pass 1.1.0

- Smaller fixes and improvements.

### Events 1.0.0

- First release.

### Contracts 1.0.0

- First release.

## Before the first release

Work done before the plugins were first released, for the record:

- **2026-10-12** Updated for Hytale Update 7 (0.7.0).
- **2026-10-21** Core split out of Coins: every add-on works with any economy (Tempest Coins or VaultUnlocked).
  Holograms and Coinflip added. 7 languages. Coins rewritten under its own licence.
- **2026-10-22**
  - Free and Pro editions of Crates, Quests and Holograms.
  - Pro: pity counters, Open x10, rank prizes, free openings every N hours, the daily quest rotation, hologram pages, and no limits.
  - Core's API versioned (`CoreAPI`), with `Registrations`, `JsonFiles` and `Editions`; `/tempest report` for support.
  - Checked against Hytale 0.7.2: nothing the plugins use changed.
