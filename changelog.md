# Changelog

Every release of the Tempest plugins, newest first.

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
