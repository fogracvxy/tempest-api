# Land claims

Who owns a place and what a player may do there, from Tempest Claims or Simple Claims.

## Land claims: `Claims` (Core, API version 24)

One question for every plugin: *who owns this place, and may this player do this here?* Tempest Claims answers when it
runs; else Simple Claims is read through a read-only link (it switches itself off, with a Doctor note, if that mod
changes); else nobody owns anything and everything is allowed. No plugin talks to a claims mod directly.

```java
if (!Claims.may(player, world, x, y, z, Claims.Action.BUILD)) { ... }   // true without a claims plugin
Claims.Owner owner = Claims.ownerAt(world, x, y, z);                    // null in the wilderness
boolean theirs = Claims.isMemberAt(player, world, x, y, z);            // owner or member of the party there
Claims.Owner party = Claims.ownerOf(player);                            // the player's party, or null
int chunks = Claims.chunksOf(player);                                   // how much land that party holds
```

| | |
|---|---|
| `Claims.Action` | `BUILD`, `BREAK`, `USE`, `CONTAINERS`, `DOORS`, `BENCHES`, `SEATS`, `PICKUP`, `DROP`, `PVP`, `ANIMALS`, `ENTER` |
| `Claims.Owner` | `id` (stays the same), `name`, `color` ("#RRGGBB"), `kind` (`claims` or `simpleclaims`) |
| `Claims.available()`, `providerId()` | Whether a claims plugin answers, and which |
| `Claims.chunk(position)`, `chunkKey(x, z)` | A block or position as a chunk (32 blocks; by floor, so -0.5 is chunk -1) |
| `Claims.may` when the claims plugin fails | `false`: a broken claims plugin never opens anyone's land |

**Your blocks inside claims.** A block of yours that checks for itself who may use it (a stall, a machine) should stay
usable for visitors on claimed land, but never breakable by them:

```java
core.publicBlocks(id -> MyBlock.isMine(id));   // Registrations; matched by your own exact test, never by words in a name
```

Tempest's stalls, ATMs, crate blocks and slot machines do this. **Your own claims plugin** answers for the suite with
`core.claimsProvider(new Claims.Provider() { ... })`: `ownerAt`, `may`, `isMember`, and optionally `ownerOf` and
`chunks`. Answer from memory and never throw.
