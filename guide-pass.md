# Battle pass

Seasons, tiers, free and premium rewards.

## What players read in /guide

The `/guide` pages of this plugin, as a player sees them on a test server (numbers are examples).

### Battle pass

- Season 1: 30 tiers. Each tier has a free reward and a premium reward.
- Earn XP by finishing quests, playing, logging in each day and playing the server's games.
- Unlock premium in /pass for 5,000 copper of in-game money.


## Commands

| Command | Who can use it | What it does |
|---|---|---|
| `/pass` (/battlepass) | Everyone | Open the battle pass: tiers, rewards and your XP |
| `/pass premium` | `pass.admin` | Give a player the premium track for this season (admins) |
| `/pass xp` | `pass.admin` | Give a player pass XP, or take it with a negative amount (admins) |


## Settings

Every setting is changed in game with `/tempest` and saved at once; nothing needs a restart. Amounts of 0 are off unless the setting says otherwise.

### Pass

`/tempest` → Pass. Who can change it: `tempest.admin` or `tempest.admin.pass`.

#### The season

Make the tiers in /pass, Edit tab (permission pass.admin). A new season starts there too.

| Setting | What it does | Values |
|---|---|---|
| Pass is on | Off: /pass says so and no XP counts. | On or off |
| Season name | Shown at the top of /pass. | Text |
| Season length (days) | From the day it started. 0 = no end. Rewards can still be claimed after it ends. | 0 to 365 |
| XP for each tier | How much pass XP a player needs to go up one tier. Every tier needs the same amount. Higher: the season takes longer to finish. | 1 to 1000000 |
| Premium price | In-game money only. 0 = not for sale; the permission pass.premium always gives it. | 0 to 1000000000 |

#### Where XP comes from

Quests count when the Quests plugin is installed.

| Setting | What it does | Values |
|---|---|---|
| Daily quest done | Pass XP for each daily quest a player finishes. Needs Tempest Quests. | 0 to 1000000 |
| Weekly quest done | Pass XP for each weekly quest a player finishes. Needs Tempest Quests. | 0 to 1000000 |
| One-time quest done | Pass XP for each one-time quest a player finishes. Needs Tempest Quests. | 0 to 1000000 |
| Achievement unlocked | Pass XP for each achievement a player unlocks. Needs Tempest Quests. | 0 to 1000000 |
| Each minute played | Pass XP for every minute a player is online. The next setting limits how much this gives in a day. | 0 to 1000000 |
| Play XP a day, at most | The most pass XP one player can get from play time in one day. The other sources have no daily limit. | 0 to 1000000 |
| Play time only while moving | Standing still (AFK) earns nothing. | On or off |
| First login of the day | Pass XP the first time a player joins on a new day. | 0 to 1000000 |
| Each game played | A slot spin, lottery ticket purchase, crate or coinflip. | 0 to 1000000 |
| Game XP a day, at most | The most pass XP one player can get from games (slots, lottery tickets, crates, coinflip) in one day. | 0 to 1000000 |

#### The /pass page

How players see the tiers. Each player can switch the layout in /pass.

| Setting | What it does | Values |
|---|---|---|
| Start in the list view | Off: the track, tiers side by side with a card per reward. On: a row per tier. | On or off |
| Tiers on a page of the track | 8 fit side by side; more scroll sideways. | 4 to 20 |
| Animations | The XP bar filling up, glowing rewards, bursts, pop-ups and Claim all turning the cards over. | On or off |
| Free track's name | Empty: FREE in each player's language. At most 16 letters. | Text |
| Premium track's name | Empty: PREMIUM in each player's language; for example VIP or Gold. | Text |

#### On screen

| Setting | What it does | Values |
|---|---|---|
| Tell everyone when someone finishes | A chat line when a player reaches the last tier. | On or off |
| Tier under the coin counter | On: players see their pass tier and how far they are to the next one in a line under their coin counter. | On or off |
| Sounds | On: a sound when a player reaches a tier, claims a reward or buys the premium pass. | On or off |
| Chat tag | Tag | Text |
| Colour | The colour of the pass's tag word in front of its chat messages. | A colour |

#### Pro edition

Thank you for supporting Pass.
