# Town projects

Buildings the players build together.

## What players read in /guide

The `/guide` pages of this plugin, as a player sees them on a test server (numbers are examples).

### Town projects

- The town builds together: every donation raises the building on its plot, block by block.

**Donating**

- /projects shows what each project needs. GIVE hands over what you carry, up to what is still needed.

**Staying safe**

- Plots under construction cannot be changed by hand. If a block would land on you, you are moved aside; /projects out takes you out of a plot. A cancelled project gives everything back.


## Commands

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


## Settings

Every setting is changed in game with `/tempest` and saved at once; nothing needs a restart. Amounts of 0 are off unless the setting says otherwise.

### Projects

`/tempest` → Projects. Who can change it: `tempest.admin` or `tempest.admin.projects`.

Players donate items and coins, and a building rises block by block on a marked plot. Make one with /projects new: pick a prefab, move its ghost, start.

| Setting | What it does | Values |
|---|---|---|
| Projects are on | Off: no donations, and the builders rest. Plots keep their guard, money and items. | On or off |
| Blocks placed each second | How fast donated blocks go up. Lower it if a big plot slows the server. | 4 to 2000 |
| Move players out of the way | On: a player a block would land on goes to the nearest safe spot beside the plot. Off: the block waits until they step away. | On or off |

#### New projects

Used when a project starts. Change one project with /projects material and /projects coins.

| Setting | What it does | Values |
|---|---|---|
| Materials asked for (%) | 100: one item for each block of the building. | 1 to 1000 |
| Different items asked for | The most used come first. What only creative mode has is never asked for. Lower this for a shorter list: what is left out, like a single door, goes up for free at the end. | 1 to 64 |
| Share paid by coins (%) | With a coin goal: how much of the building the coins pay for. | 0 to 100 |
| Any item of the same kind counts | On: any wood planks count for the planks asked for. The building keeps the blocks of its plan, and a project's page changes this. | On or off |
| Keep water on the plot | For docks and wells: water that stands on the plot stays, and the blocks of the building go in around it. The placing panel can choose for each project. | On or off |

#### Telling players

What everyone sees.

| Setting | What it does | Values |
|---|---|---|
| Announce finished buildings |  | On or off |
| Progress text over the plot | Needs Tempest Holograms. | On or off |
| Show the finished building as a ghost | A see-through plan stands on the plot, and the real blocks fill it. Off: no project shows one, whatever is set for it. | On or off |
| Ghost of a new project | Off: nothing shows on the plot, and real blocks appear as people donate. The placing panel can choose for each project, and so can a project's own page. | Everyone, Only players in creative mode, Off: real blocks only |
| New projects cannot be walked through | Invisible solid blocks hold the walls that are still to come, so the plan feels solid. Only for a plan everyone sees. Doorways stay open, and a project's page changes it. | On or off |
| Frame around a plot under way | Everyone near sees where a site is, even with its plan hidden. | On or off |
| Colour of the frame |  | A colour |
| How far the frame shows (blocks) |  | 16 to 512 |

#### Pro edition

Thank you for supporting Projects.


### Placing

`/tempest` → Placing. Who can change it: `tempest.admin` or `tempest.admin.placing`.

#### The look

What an admin starts with in the placing panel. The VIEW tab changes the ghost, the box and the other plots while placing.

| Setting | What it does | Values |
|---|---|---|
| Ghost of the building | The game's own see-through copy of the building. Everyone near sees it. Off: only the outline, which only the admin sees. | On or off |
| Largest building with a ghost (blocks) | A bigger one starts without its ghost, as all of it is sent to everyone near. It can still be switched on in the panel. | 100 to 400000 |
| Outline of the plot |  | On or off |
| Outline thickness (blocks) |  | 0.02 to 1 |
| Colour when it fits |  | A colour |
| Colour when it does not |  | A colour |
| See-through box over the plot (%) | How solid the coloured box around the plot is. 0: no box. | 0 to 100 |
| Show the plots nearby | Outlines of the other projects, to line a street up. | On or off |
| Colour of the plots nearby |  | A colour |
| Red blocks where it goes into something | Only the admin sees them. They show what the building would replace, and in a second colour what stops it from starting. | On or off |
| Colour of those blocks |  | A colour |
| Colour of what stops it |  | A colour |
| How solid those blocks look (%) |  | 5 to 100 |

#### Moving

How the plot moves.

| Setting | What it does | Values |
|---|---|---|
| Step sizes | The sizes the STEP button goes through, in blocks, such as 1, 5, 10, 25. | Text |
| Start on the ground | A new plot settles where it fits the land best. Off: it starts at the admin's feet. | On or off |
| How far AIM reaches (blocks) |  | 8 to 256 |
| Gap left by BESIDE (blocks) |  | 0 to 64 |

#### The camera

The views of the placing panel.

| Setting | What it does | Values |
|---|---|---|
| View to start in |  | Normal, From the top, From an angle |
| Closest zoom (blocks) |  | 4 to 64 |
| Farthest zoom (blocks) |  | 4 to 256 |
| Zoom step (blocks) |  | 1 to 64 |
| Zoom to start at (blocks) | A big building starts farther away, so all of it is in view. | 4 to 256 |
