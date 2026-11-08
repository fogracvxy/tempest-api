# Events

Server events with boosts, community goals and the server fund.

## What players read in /guide

The `/guide` pages of this plugin, as a player sees them on a test server (numbers are examples).

### Server events

- Server events make things better for a while: more gold from monsters and ores, bigger rewards, more battle pass XP, better shop prices.
- Next: Monster Hunt. /events shows when.

**How events work**

- During an event, what you do for its goal counts for the whole server. When the goal is reached, everyone who did at least 1% of it gets the reward. The three players who did the most win prizes at the end.

**Overdrive**

- Some events have stages: after the goal comes a bigger one. Each stage makes every boost stronger and pays the goal reward again.

**The server fund**

- Everyone can put money in the server fund (/events, or /events give 500). When it is full, Gold Rush starts for the whole server.


## Commands

| Command | Who can use it | What it does |
|---|---|---|
| `/events` (/event) | Everyone | Server events: what is on, what is coming, and the community goal |
| `/events extend` | `events.admin` | More or fewer minutes for the event that is on (admins) |
| `/events give` (/fund) | Everyone | Put money in the server fund: when it is full, an event starts for everyone |
| `/events list` | `events.admin` | Every event and the next starts (admins) |
| `/events start` | `events.admin` | Start an event now (admins) |
| `/events stop` | `events.admin` | Stop the event that is on (admins) |


## Settings

Every setting is changed in game with `/tempest` and saved at once; nothing needs a restart. Amounts of 0 are off unless the setting says otherwise.

### Events

`/tempest` → Events. Who can change it: `tempest.admin` or `tempest.admin.events`.

Server events boost the Tempest plugins for a while. Make and schedule them in /events, Manage.

| Setting | What it does | Values |
|---|---|---|
| Events are on | Off: nothing starts, and a running event stops boosting and counting. | On or off |

#### Telling players

How players hear about events.

| Setting | What it does | Values |
|---|---|---|
| Big title on screen | When an event starts, reaches its goal and ends. | On or off |
| Chat messages |  | On or off |
| Sounds |  | On or off |
| Warn before a start (minutes) | Players are told this long before a scheduled event. 0: not told. | 0 to 120 |
| Show on the board | The event, its time left and the goal on the Tempest board (players can hide it in /board). | On or off |
| Chat tag | Tag | Text |
| Tag colour |  | A colour |

#### Server fund

Players put money in together; when it is full, the event below starts for everyone. The money leaves the economy.

| Setting | What it does | Values |
|---|---|---|
| Server fund |  | On or off |
| Event it starts |  | Gold Rush, Monster Hunt, XP Frenzy, Market Day, Lucky Hour |
| Money to fill it |  | 1 to 1000000000 |
| Tell everyone about gifts of (% of the fund) | 0: never. | 0 to 100 |

#### Lucky events

Now and then, by chance, an event starts by itself while nothing else is on.

| Setting | What it does | Values |
|---|---|---|
| Lucky events |  | On or off |
| Which event |  | Gold Rush, Monster Hunt, XP Frenzy, Market Day, Lucky Hour |
| Chance each hour (%) |  | 0 to 100 |
| Players online at least | Fewer players online: no lucky event, so nobody misses it. | 0 to 500 |
