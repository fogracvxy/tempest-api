# Core

The base: /tempest, /guide, the board, the mailbox, rank perks, the map, boosters.

## What players read in /guide

The `/guide` pages of this plugin, as a player sees them on a test server (numbers are examples).

### Money counter

- The number in the corner of your screen is your balance in copper. When it changes, the gain or loss flashes beside it in green or red.
- Next to it you may see short notes: a daily reward waiting, the slot machine jackpot, the lottery pot, a quest you are tracking, or what the shop pays for the item in your hand.

**Your counter**

- It is shown, in the "top" position.
- /hud hides or shows it. /hud top, /hud left and /hud low move it.


## Commands

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
| `/partyhud` (/pframes) | Everyone | Show or hide your party frames (/partyhud left, right, compact, self...) |
| `/partyhud compact` | Everyone | Pick the style of your party frames |
| `/partyhud full` | Everyone | Pick the style of your party frames |
| `/partyhud left` | Everyone | Move your party frames here |
| `/partyhud leftmiddle` | Everyone | Move your party frames here |
| `/partyhud right` | Everyone | Move your party frames here |
| `/partyhud rightmiddle` | Everyone | Move your party frames here |
| `/partyhud self` | Everyone | Show or hide your own frame among your party |
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
| `/tempest item` | `tempest.admin` | Every field of the item in your hand and how shops and rewards treat it (admins) |
| `/tempest log` | `tempest.admin` | Who changed what: the newest lines of the admin log (admins) |
| `/tempest report` | `tempest.admin` | Writes a support report to paste when asking for help (admins) |
| `/tempest settings` | Everyone | Open the Tempest settings menu (admins) |
| `/tempest texts` | Everyone | Change any text players see (admins) |


## Settings

Every setting is changed in game with `/tempest` and saved at once; nothing needs a restart. Amounts of 0 are off unless the setting says otherwise.

### General

`/tempest` → General. Who can change it: `tempest.admin` or `tempest.admin.core`.

#### Money

Prices and rewards in every AtomicTempest plugin use the server's economy: Coins when it is installed, otherwise any economy plugin that works with VaultUnlocked.

| Setting | What it does | Values |
|---|---|---|
| Show the money counter | Players can still hide theirs with /hud. | On or off |
| Starting corner | Players can move theirs with /hud. | Top right, Left, Lower right |
| Short amounts on the counter | Big balances in short, such as 12.5K and 3.2M, so they fit. | On or off |

#### Tempest board

A panel on the right of each player's screen with their name, world and money, the server, and a live line from every Tempest plugin (daily reward, lottery pot, jackpot, tracked quest, pass tier). Each player picks what theirs shows, or hides it, with /board.

| Setting | What it does | Values |
|---|---|---|
| Show the board | The plugins' lines move from the money counter to the board. | On or off |
| Where it starts | Players move theirs in /board. Pick a free side if another plugin has a panel there. | Right, top, Right, middle, Left, top, Left, middle |
| Size | Players pick their own in /board. | Normal, Small |
| Hide the money counter with the board | While a player's board shows their money, the counter at the top goes away. | On or off |
| Board title | Your server's name, in the menu theme's colour. Empty: no title. | Text |
| Line under the title | Such as your server's address or Discord. Empty: none. | Text |
| Players may show the time | The time of day in their world. | On or off |
| Players may show their ping | Lets each player add their ping (the delay between them and the server) to their own Tempest board. Players switch it on themselves in /board. | On or off |
| Players may show their position | Off for servers where coordinates should stay secret. Players switch it on themselves. | On or off |
| Your own line 1 | "Label \| text": placeholders show other plugins' numbers, such as "Kills \| {myplugin_kills}". Without \| it is one line of text. | Text |
| Your own line 2 | Empty: none. | Text |
| Your own line 3 | Empty: none. | Text |
| Your own line 4 | Empty: none. | Text |
| Your own line 5 | Empty: none. | Text |

#### Menus

The look of every Tempest menu, for every player.

| Setting | What it does | Values |
|---|---|---|
| Menu theme | Tempest gold is the plugins' own look. | Tempest gold, Dark crimson, Elven emerald, Frostbite, Amethyst, Cyberpunk neon, Cozy parchment, Your own colours |
| Your own: highlights | With "Your own colours": titles and the chosen tab. | A colour |
| Your own: background | With "Your own colours": laid over each menu. | A colour |

#### New players

| Setting | What it does | Values |
|---|---|---|
| Help screen for new players | Opens /guide the first time someone joins. | On or off |
| What's on, when players join | A few chat lines from the Tempest board: a daily reward waiting, a running event, the lottery pot. Nothing when there is nothing to say. | On or off |
| Tips for players | One line about something the server has, taken from /guide. Each tip comes once per player, then they stop. | On or off |
| Minutes between tips | How long one player waits between two tips. Each tip comes only once per player, so after a while the tips stop by themselves. | 1 to 1440 |

#### Updates

| Setting | What it does | Values |
|---|---|---|
| Tell admins about new versions | Once a day the server reads which Tempest versions are out (a small file on our site; nothing about your server is sent). Admins get one line when they join. | On or off |

#### Language

Players see these plugins in the language their game is set to. Hytale does not offer German, Italian or Polish yet: pick one language here and every player gets the plugins in it.

| Setting | What it does | Values |
|---|---|---|
| Language | Or the language of each player's game. | Each player's own, English, Deutsch, Español, Français, Italiano, Polski, Português (Brasil), Русский |

#### Games of chance

Slots, Lottery and Coinflip use only money earned in game. A daily limit stops anyone from losing too much in a day; it starts again at midnight.

| Setting | What it does | Values |
|---|---|---|
| Daily limit for games | Per player, all games together. 0 = no limit. | 0 to 1000000000 |


### Party frames

`/tempest` → Party frames. Who can change it: `tempest.admin` or `tempest.admin.core`.

Each member of the player's party on the side of the screen: name, health, stamina and how far away. Shown when a plugin gives parties (Tempest Claims). Players hide, move and resize theirs with /partyhud.

| Setting | What it does | Values |
|---|---|---|
| Show party frames | Only players in a party see them. | On or off |
| Party frames start at | Players move theirs with /partyhud. The board starts at the right, top. | Left, middle, Left, top, Right, middle, Right, top |
| Party frame style |  | Full: bigger names and bars, Compact: small, for big parties |
| Most members shown | Online members first. | 1 to 8 |
| Show offline members |  | On or off |
| Show the stamina bar |  | On or off |
| Show how far away members are | In blocks, for members in the same world; members in another world show its name. Off for servers where positions should stay secret. | On or off |
| Players see their own frame | Players change it for themselves with /partyhud self. | On or off |


### Rank Perks

`/tempest` → Rank Perks. Who can change it: `tempest.admin` or `tempest.admin.core`.

#### Rank perks

Give a rank a perk's permission in your ranks plugin (LuckPerms, or Hytale's own permissions) and its players get the bonuses. Leave the permission empty to switch a perk off.

| Setting | What it does | Values |
|---|---|---|
| Perk 1 | Name | Text |
| Permission | The permission that gives this perk, such as tempest.perk.vip. Give it to a rank in your ranks plugin (LuckPerms or Hytale's own permissions). Empty: this perk is off. A player with several perks gets the best of each bonus. | Text |
| Daily rewards | Bonus (%) | 0 to 1000 |
| Quest rewards (%) | Players with this perk get this much more money from quest and achievement rewards. | 0 to 1000 |
| Shop | Discount (%) | 0 to 90 |
| Sell bonus (%) | Players with this perk get this much more when they sell to the shop. A sale never pays more than the item costs to buy, so it cannot be turned into a money loop. | 0 to 1000 |
| Payment fee cut (%) | 100 = this rank pays no fee when paying other players. | 0 to 100 |
| Pass XP (%) | Tempest Pass, Pro edition: more pass XP for this rank. | 0 to 1000 |
| Leveling XP (%) | More XP in the leveling mod (Endless Leveling, RPG Leveling, MMO Skill Tree) for this rank. Adds to the Leveling XP boost, with events and boosters, up to the highest boost set on the Leveling tab. Does nothing without a leveling mod. | 0 to 1000 |
| Perk 2 | Name | Text |
| Permission | The permission that gives this perk, such as tempest.perk.vip. Give it to a rank in your ranks plugin (LuckPerms or Hytale's own permissions). Empty: this perk is off. A player with several perks gets the best of each bonus. | Text |
| Daily rewards | Bonus (%) | 0 to 1000 |
| Quest rewards (%) | Players with this perk get this much more money from quest and achievement rewards. | 0 to 1000 |
| Shop | Discount (%) | 0 to 90 |
| Sell bonus (%) | Players with this perk get this much more when they sell to the shop. A sale never pays more than the item costs to buy, so it cannot be turned into a money loop. | 0 to 1000 |
| Payment fee cut (%) | 100 = this rank pays no fee when paying other players. | 0 to 100 |
| Pass XP (%) | Tempest Pass, Pro edition: more pass XP for this rank. | 0 to 1000 |
| Leveling XP (%) | More XP in the leveling mod (Endless Leveling, RPG Leveling, MMO Skill Tree) for this rank. Adds to the Leveling XP boost, with events and boosters, up to the highest boost set on the Leveling tab. Does nothing without a leveling mod. | 0 to 1000 |
| Perk 3 | Name | Text |
| Permission | The permission that gives this perk, such as tempest.perk.vip. Give it to a rank in your ranks plugin (LuckPerms or Hytale's own permissions). Empty: this perk is off. A player with several perks gets the best of each bonus. | Text |
| Daily rewards | Bonus (%) | 0 to 1000 |
| Quest rewards (%) | Players with this perk get this much more money from quest and achievement rewards. | 0 to 1000 |
| Shop | Discount (%) | 0 to 90 |
| Sell bonus (%) | Players with this perk get this much more when they sell to the shop. A sale never pays more than the item costs to buy, so it cannot be turned into a money loop. | 0 to 1000 |
| Payment fee cut (%) | 100 = this rank pays no fee when paying other players. | 0 to 100 |
| Pass XP (%) | Tempest Pass, Pro edition: more pass XP for this rank. | 0 to 1000 |
| Leveling XP (%) | More XP in the leveling mod (Endless Leveling, RPG Leveling, MMO Skill Tree) for this rank. Adds to the Leveling XP boost, with events and boosters, up to the highest boost set on the Leveling tab. Does nothing without a leveling mod. | 0 to 1000 |
| Perk 4 | Name | Text |
| Permission | The permission that gives this perk, such as tempest.perk.vip. Give it to a rank in your ranks plugin (LuckPerms or Hytale's own permissions). Empty: this perk is off. A player with several perks gets the best of each bonus. | Text |
| Daily rewards | Bonus (%) | 0 to 1000 |
| Quest rewards (%) | Players with this perk get this much more money from quest and achievement rewards. | 0 to 1000 |
| Shop | Discount (%) | 0 to 90 |
| Sell bonus (%) | Players with this perk get this much more when they sell to the shop. A sale never pays more than the item costs to buy, so it cannot be turned into a money loop. | 0 to 1000 |
| Payment fee cut (%) | 100 = this rank pays no fee when paying other players. | 0 to 100 |
| Pass XP (%) | Tempest Pass, Pro edition: more pass XP for this rank. | 0 to 1000 |
| Leveling XP (%) | More XP in the leveling mod (Endless Leveling, RPG Leveling, MMO Skill Tree) for this rank. Adds to the Leveling XP boost, with events and boosters, up to the highest boost set on the Leveling tab. Does nothing without a leveling mod. | 0 to 1000 |


### Custom items

`/tempest` → Custom items. Who can change it: `tempest.admin` or `tempest.admin.core`.

#### Items from other mods

Enchanted (Simple Enchantments), reforged (Socket Reforge) and any mod's items keep what they have in shops, crates, the pass, quests, jobs, events, mail, trade and the market. Hold one and type /tempest item to see every field it has and how it is treated. Names below are field names; * is anything (*.XP fits SocketReforge.Lore.Socket.XP).

| Setting | What it does | Values |
|---|---|---|
| Fields that change with use | Commas between, * for anything: *.XP, *KillCount* Shown to players, but never used to tell two items apart: experience, kill counts and the like. Without this a sword that gained experience would no longer sell back to its shop line. | Text |
| More fields to hide | Commas between, * for anything A mod's own bookkeeping, neither shown nor matched. Tooltips, hashes and versions are hidden already. | Text |
| Fields that hold other items | Commas between, * for anything An item with something in one of these is never copied into a shop, a prize or a reward (its contents would be copied too). Backpacks and containers the usual way are found already. | Text |
| Fields that make an item one of a kind | Commas between, * for anything An item with one of these is never copied (a bound item, a named pet); it can still be traded. Ids written as UUIDs are found already. | Text |
| Use the name a mod gave the item | A reforged "Iron Sword +3" shows by that name in shops, lists and mail. Off: the game's name. | On or off |


### Server info

`/tempest` → Server info. Who can change it: `tempest.admin` or `tempest.admin.core`.

Your own page: rules and anything players should know. It is the first page of /guide (new players see it on their first join when that is on) and /info or /rules opens it.

| Setting | What it does | Values |
|---|---|---|
| Show the page | On: /info and /rules open this page, and it is the first page of /guide (new players see it when they first join, if that is on). Off: the page is hidden. | On or off |
| Title | The heading at the top of the page, such as your server's name or "Rules". | Text |
| Line 1 | Each line of the page, in order: text, a heading (bold) or an empty line for a gap. Two empty lines show below the last one written, up to 40 lines of 200 letters. | Text, Heading, Empty line (a gap) |
| Line 1, words |  | Text |
| Line 2 |  | Text, Heading, Empty line (a gap) |
| Line 2, words |  | Text |
| Line 3 |  | Text, Heading, Empty line (a gap) |
| Line 3, words |  | Text |
| Line 4 |  | Text, Heading, Empty line (a gap) |
| Line 4, words |  | Text |
| Line 5 |  | Text, Heading, Empty line (a gap) |
| Line 5, words |  | Text |
| Line 6 |  | Text, Heading, Empty line (a gap) |
| Line 6, words |  | Text |
| Line 7 |  | Text, Heading, Empty line (a gap) |
| Line 7, words |  | Text |
| Line 8 |  | Text, Heading, Empty line (a gap) |
| Line 8, words |  | Text |
| Line 9 |  | Text, Heading, Empty line (a gap) |
| Line 9, words |  | Text |
| Line 10 |  | Text, Heading, Empty line (a gap) |
| Line 10, words |  | Text |
| Line 11 |  | Text, Heading, Empty line (a gap) |
| Line 11, words |  | Text |
| Line 12 |  | Text, Heading, Empty line (a gap) |
| Line 12, words |  | Text |
| Line 13 |  | Text, Heading, Empty line (a gap) |
| Line 13, words |  | Text |
| Line 14 |  | Text, Heading, Empty line (a gap) |
| Line 14, words |  | Text |
| Line 15 |  | Text, Heading, Empty line (a gap) |
| Line 15, words |  | Text |
| Line 16 |  | Text, Heading, Empty line (a gap) |
| Line 16, words |  | Text |
| Line 17 |  | Text, Heading, Empty line (a gap) |
| Line 17, words |  | Text |
| Line 18 |  | Text, Heading, Empty line (a gap) |
| Line 18, words |  | Text |
| Line 19 |  | Text, Heading, Empty line (a gap) |
| Line 19, words |  | Text |
| Line 20 |  | Text, Heading, Empty line (a gap) |
| Line 20, words |  | Text |
| Line 21 |  | Text, Heading, Empty line (a gap) |
| Line 21, words |  | Text |
| Line 22 |  | Text, Heading, Empty line (a gap) |
| Line 22, words |  | Text |
| Line 23 |  | Text, Heading, Empty line (a gap) |
| Line 23, words |  | Text |
| Line 24 |  | Text, Heading, Empty line (a gap) |
| Line 24, words |  | Text |
| Line 25 |  | Text, Heading, Empty line (a gap) |
| Line 25, words |  | Text |
| Line 26 |  | Text, Heading, Empty line (a gap) |
| Line 26, words |  | Text |
| Line 27 |  | Text, Heading, Empty line (a gap) |
| Line 27, words |  | Text |
| Line 28 |  | Text, Heading, Empty line (a gap) |
| Line 28, words |  | Text |
| Line 29 |  | Text, Heading, Empty line (a gap) |
| Line 29, words |  | Text |
| Line 30 |  | Text, Heading, Empty line (a gap) |
| Line 30, words |  | Text |
| Line 31 |  | Text, Heading, Empty line (a gap) |
| Line 31, words |  | Text |
| Line 32 |  | Text, Heading, Empty line (a gap) |
| Line 32, words |  | Text |
| Line 33 |  | Text, Heading, Empty line (a gap) |
| Line 33, words |  | Text |
| Line 34 |  | Text, Heading, Empty line (a gap) |
| Line 34, words |  | Text |
| Line 35 |  | Text, Heading, Empty line (a gap) |
| Line 35, words |  | Text |
| Line 36 |  | Text, Heading, Empty line (a gap) |
| Line 36, words |  | Text |
| Line 37 |  | Text, Heading, Empty line (a gap) |
| Line 37, words |  | Text |
| Line 38 |  | Text, Heading, Empty line (a gap) |
| Line 38, words |  | Text |
| Line 39 |  | Text, Heading, Empty line (a gap) |
| Line 39, words |  | Text |
| Line 40 |  | Text, Heading, Empty line (a gap) |
| Line 40, words |  | Text |

#### Buttons

Up to two buttons under the text, each running a command as the player.

| Setting | What it does | Values |
|---|---|---|
| Button 1 text | The word on the first button under the text. Empty: no button. | Text |
| Button 1 command | For example /shop The command the first button runs as the player who clicks it, such as /shop or /spawn. | Text |
| Button 2 text | The word on the second button. Empty: no second button. | Text |
| Button 2 command | The command the second button runs as the player who clicks it. | Text |


### World map

`/tempest` → World map. Who can change it: `tempest.admin` or `tempest.admin.map`.

Tempest's places show on every player's map and compass. Each kind of place has its own tab here. Own places: /places add <name>. Change or hide one place: /places.

| Setting | What it does | Values |
|---|---|---|
| Show Tempest places on the map | Off: no Tempest place (shops, slot machines, ATMs, crates, your own places) shows on any map or compass. Each kind can also be switched off on its own tab. | On or off |
| Players may pick what their map shows | With /places each player can leave out kinds of place. | On or off |
| Players may use /places | Lists the places nearest first. Admins can always use it. | On or off |


### Map: Your places

`/tempest` → Map: Your places. Who can change it: `tempest.admin` or `tempest.admin.map`.

#### Your places

How these look on the map and who gets them. To change one of them, use /places.

| Setting | What it does | Values |
|---|---|---|
| Show on the map | Shows every place of this kind on players' maps. Off: they are hidden, but stay known, so switching it on brings them back. | On or off |
| Icon | A resource pack's own picture: put its file name in map.json. | A list |
| Colour | White shows the icon as it was drawn. | A colour |
| Name on the map | Empty: each place's own name. Written here, every one of them shows this. | Text |
| Big icon | A larger icon on the map, for places players should find easily. | On or off |
| On the compass too | These places also show on the compass at the top of the screen, not only on the map. | On or off |
| Who sees it (permission) | Empty: everyone. With a permission, only players or ranks who have it. | Text |
| Shown within (blocks) | Only players this near see them. 0: from anywhere. | 0 to 100000 |
| Only in these worlds | Empty: every world. | Every world, default, Several (type their names) |
| World names | World names with commas between them. | Text |


### Map: ATMs

`/tempest` → Map: ATMs. Who can change it: `tempest.admin` or `tempest.admin.map`.

#### ATMs

How these look on the map and who gets them. To change one of them, use /places.

| Setting | What it does | Values |
|---|---|---|
| Show on the map | Shows every place of this kind on players' maps. Off: they are hidden, but stay known, so switching it on brings them back. | On or off |
| Icon | A resource pack's own picture: put its file name in map.json. | A list |
| Colour | White shows the icon as it was drawn. | A colour |
| Name on the map | Empty: each place's own name. Written here, every one of them shows this. | Text |
| Big icon | A larger icon on the map, for places players should find easily. | On or off |
| On the compass too | These places also show on the compass at the top of the screen, not only on the map. | On or off |
| Who sees it (permission) | Empty: everyone. With a permission, only players or ranks who have it. | Text |
| Shown within (blocks) | Only players this near see them. 0: from anywhere. | 0 to 100000 |
| Only in these worlds | Empty: every world. | Every world, default, Several (type their names) |
| World names | World names with commas between them. | Text |


### Map: Slot machines

`/tempest` → Map: Slot machines. Who can change it: `tempest.admin` or `tempest.admin.map`.

#### Slot machines

How these look on the map and who gets them. To change one of them, use /places.

| Setting | What it does | Values |
|---|---|---|
| Show on the map | Shows every place of this kind on players' maps. Off: they are hidden, but stay known, so switching it on brings them back. | On or off |
| Icon | A resource pack's own picture: put its file name in map.json. | A list |
| Colour | White shows the icon as it was drawn. | A colour |
| Name on the map | Empty: each place's own name. Written here, every one of them shows this. | Text |
| Big icon | A larger icon on the map, for places players should find easily. | On or off |
| On the compass too | These places also show on the compass at the top of the screen, not only on the map. | On or off |
| Who sees it (permission) | Empty: everyone. With a permission, only players or ranks who have it. | Text |
| Shown within (blocks) | Only players this near see them. 0: from anywhere. | 0 to 100000 |
| Only in these worlds | Empty: every world. | Every world, default, Several (type their names) |
| World names | World names with commas between them. | Text |


### Map: Shops

`/tempest` → Map: Shops. Who can change it: `tempest.admin` or `tempest.admin.map`.

#### Shops

How these look on the map and who gets them. To change one of them, use /places.

| Setting | What it does | Values |
|---|---|---|
| Show on the map | Shows every place of this kind on players' maps. Off: they are hidden, but stay known, so switching it on brings them back. | On or off |
| Icon | A resource pack's own picture: put its file name in map.json. | A list |
| Colour | White shows the icon as it was drawn. | A colour |
| Name on the map | Empty: each place's own name. Written here, every one of them shows this. | Text |
| Big icon | A larger icon on the map, for places players should find easily. | On or off |
| On the compass too | These places also show on the compass at the top of the screen, not only on the map. | On or off |
| Who sees it (permission) | Empty: everyone. With a permission, only players or ranks who have it. | Text |
| Shown within (blocks) | Only players this near see them. 0: from anywhere. | 0 to 100000 |
| Only in these worlds | Empty: every world. | Every world, default, Several (type their names) |
| World names | World names with commas between them. | Text |


### Map: Crates

`/tempest` → Map: Crates. Who can change it: `tempest.admin` or `tempest.admin.map`.

#### Crates

How these look on the map and who gets them. To change one of them, use /places.

| Setting | What it does | Values |
|---|---|---|
| Show on the map | Shows every place of this kind on players' maps. Off: they are hidden, but stay known, so switching it on brings them back. | On or off |
| Icon | A resource pack's own picture: put its file name in map.json. | A list |
| Colour | White shows the icon as it was drawn. | A colour |
| Name on the map | Empty: each place's own name. Written here, every one of them shows this. | Text |
| Big icon | A larger icon on the map, for places players should find easily. | On or off |
| On the compass too | These places also show on the compass at the top of the screen, not only on the map. | On or off |
| Who sees it (permission) | Empty: everyone. With a permission, only players or ranks who have it. | Text |
| Shown within (blocks) | Only players this near see them. 0: from anywhere. | 0 to 100000 |
| Only in these worlds | Empty: every world. | Every world, default, Several (type their names) |
| World names | World names with commas between them. | Text |


### Map: Supply drops

`/tempest` → Map: Supply drops. Who can change it: `tempest.admin` or `tempest.admin.map`.

#### Supply drops

How these look on the map and who gets them. To change one of them, use /places.

| Setting | What it does | Values |
|---|---|---|
| Show on the map | Shows every place of this kind on players' maps. Off: they are hidden, but stay known, so switching it on brings them back. | On or off |
| Icon | A resource pack's own picture: put its file name in map.json. | A list |
| Colour | White shows the icon as it was drawn. | A colour |
| Name on the map | Empty: each place's own name. Written here, every one of them shows this. | Text |
| Big icon | A larger icon on the map, for places players should find easily. | On or off |
| On the compass too | These places also show on the compass at the top of the screen, not only on the map. | On or off |
| Who sees it (permission) | Empty: everyone. With a permission, only players or ranks who have it. | Text |
| Shown within (blocks) | Only players this near see them. 0: from anywhere. | 0 to 100000 |
| Only in these worlds | Empty: every world. | Every world, default, Several (type their names) |
| World names | World names with commas between them. | Text |


### Map: Building sites

`/tempest` → Map: Building sites. Who can change it: `tempest.admin` or `tempest.admin.map`.

#### Building sites

How these look on the map and who gets them. To change one of them, use /places.

| Setting | What it does | Values |
|---|---|---|
| Show on the map | Shows every place of this kind on players' maps. Off: they are hidden, but stay known, so switching it on brings them back. | On or off |
| Icon | A resource pack's own picture: put its file name in map.json. | A list |
| Colour | White shows the icon as it was drawn. | A colour |
| Name on the map | Empty: each place's own name. Written here, every one of them shows this. | Text |
| Big icon | A larger icon on the map, for places players should find easily. | On or off |
| On the compass too | These places also show on the compass at the top of the screen, not only on the map. | On or off |
| Who sees it (permission) | Empty: everyone. With a permission, only players or ranks who have it. | Text |
| Shown within (blocks) | Only players this near see them. 0: from anywhere. | 0 to 100000 |
| Only in these worlds | Empty: every world. | Every world, default, Several (type their names) |
| World names | World names with commas between them. | Text |


### Map: Claims

`/tempest` → Map: Claims. Who can change it: `tempest.admin` or `tempest.admin.map`.

#### Claims

How these look on the map and who gets them. To change one of them, use /places.

| Setting | What it does | Values |
|---|---|---|
| Show on the map | Shows every place of this kind on players' maps. Off: they are hidden, but stay known, so switching it on brings them back. | On or off |
| Icon | A resource pack's own picture: put its file name in map.json. | A list |
| Colour | White shows the icon as it was drawn. | A colour |
| Name on the map | Empty: each place's own name. Written here, every one of them shows this. | Text |
| Big icon | A larger icon on the map, for places players should find easily. | On or off |
| On the compass too | These places also show on the compass at the top of the screen, not only on the map. | On or off |
| Who sees it (permission) | Empty: everyone. With a permission, only players or ranks who have it. | Text |
| Shown within (blocks) | Only players this near see them. 0: from anywhere. | 0 to 100000 |
| Only in these worlds | Empty: every world. | Every world, default, Several (type their names) |
| World names | World names with commas between them. | Text |
