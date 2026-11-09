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
| `/places` | Everyone | Places on the world map, and what your map shows |
| `/places add` | `tempest.admin.map` | Adds a place to the map where you stand (admins) |
| `/serverinfo` (/rules, /info) | Everyone | The server's rules and info |
| `/tempest` (/casino) | Everyone | Tempest: the settings menu for admins, the help screen for players |
| `/tempest doctor` | `tempest.admin` | Finds ways players could make money from nothing in the settings (admins) |
| `/tempest info` | `tempest.admin` | Tempest plugins: versions, editions and the economy (admins) |
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


### Server info

`/tempest` → Server info. Who can change it: `tempest.admin` or `tempest.admin.core`.

Your own page: rules and anything players should know. It is the first page of /guide (new players see it on their first join when that is on) and /info or /rules opens it.

| Setting | What it does | Values |
|---|---|---|
| Show the page | On: /info and /rules open this page, and it is the first page of /guide (new players see it when they first join, if that is on). Off: the page is hidden. | On or off |
| Title | The heading at the top of the page, such as your server's name or "Rules". | Text |
| Line 1 | Start a line with # to make it a heading; an empty line is a gap. One line of the page, in order. Start it with # to make it a heading; leave it empty for a gap. | Text |
| Line 2 | One line of the page, in order. Start it with # to make it a heading; leave it empty for a gap. | Text |
| Line 3 | One line of the page, in order. Start it with # to make it a heading; leave it empty for a gap. | Text |
| Line 4 | One line of the page, in order. Start it with # to make it a heading; leave it empty for a gap. | Text |
| Line 5 | One line of the page, in order. Start it with # to make it a heading; leave it empty for a gap. | Text |
| Line 6 | One line of the page, in order. Start it with # to make it a heading; leave it empty for a gap. | Text |
| Line 7 | One line of the page, in order. Start it with # to make it a heading; leave it empty for a gap. | Text |
| Line 8 | One line of the page, in order. Start it with # to make it a heading; leave it empty for a gap. | Text |
| Line 9 | One line of the page, in order. Start it with # to make it a heading; leave it empty for a gap. | Text |
| Line 10 | One line of the page, in order. Start it with # to make it a heading; leave it empty for a gap. | Text |
| Line 11 | One line of the page, in order. Start it with # to make it a heading; leave it empty for a gap. | Text |
| Line 12 | One line of the page, in order. Start it with # to make it a heading; leave it empty for a gap. | Text |

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
| Only in these worlds | World names with commas between them. Empty: every world. | Text |


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
| Only in these worlds | World names with commas between them. Empty: every world. | Text |


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
| Only in these worlds | World names with commas between them. Empty: every world. | Text |


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
| Only in these worlds | World names with commas between them. Empty: every world. | Text |


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
| Only in these worlds | World names with commas between them. Empty: every world. | Text |
