# Land claims and renown

Who owns a place and what a player may do there, from Tempest Claims or Simple Claims; party renown and levels.

## Land claims: `Claims` (Core, API version 24; renown 26)

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

**Party renown (API version 26).** Tempest Claims gives each party renown and levels;
any plugin can read them and add to them. Without Tempest Claims everything answers 0.

```java
int level = Claims.renownLevel(player);          // the level of the player's party, 0 without a party
long season = Claims.seasonRenown(player);       // the party's renown this season
long got = Claims.addRenown(player, "mymod_dragon", 25);   // points for the party: what it really got, 0 for none
int parties = Claims.partiesAtLevel(10);         // parties at level 10 or higher, -1 without renown
```

`addRenown` follows Claims' own rules: the player must be in a party, past the new-member wait and really playing, and
every plugin's points together stay inside a daily cap per member (`/tempest` → Claims renown) and the party's hourly
ceiling. The source is lower case letters, digits and `_ : . -`, at most 32; points 1 to 10,000. Games of chance give
nothing. A party reaching a level fires `claims_renown_level` (amount = the level) to every member through
`PlayerActions`. Check `CoreAPI.runningVersion() >= 26` first; a claims provider answers with the optional
`renownLevel`, `seasonRenown`, `addRenown` and `partiesAtLevel`.


## Party frames on the screen: `PartyHud` (Core, API version 25)

Each member of a player's party on the side of the screen: name, how far away (or which world), a health bar and a
stamina bar, under the party's name with an optional line and bar (a level, a goal). **Core draws them in its own HUD**,
so they never fight another mod's HUD; a plugin with parties only says who is in the viewer's party. One source at a
time: Tempest Claims is it when it runs.

```java
core.partyHud(viewer -> {                                   // Registrations; asked every second, answer from memory
    MyParty party = parties.of(viewer);
    if (party == null) return null;                         // no frames
    List<PartyHud.Member> members = party.members().stream()
            .map(m -> new PartyHud.Member(m.id(), m.name(), m.isLeader() ? "★" : null)).toList();
    return new PartyHud.Party(party.name(), "#E05050", members, Message.raw("Level 6"), 0.62f);   // progress < 0: no bar
});
PartyHud.refresh(uuid);                                     // draw this player's frames now instead of within the second
```

Members are listed in your order with the viewer included; Core leaves the viewer out unless they asked to see
themselves, puts online members first, and shows at most 8. Health and stamina are read by Core. The admin sets the
defaults in `/tempest` (General, "Party frames"): on or off, place, style (full or compact), most members, offline
members, the stamina bar, distances, the player's own frame. Players choose with `/partyhud`. Check
`CoreAPI.runningVersion() >= 25` first and keep the code in a class of its own (Tempest Claims: `PartyFrames`).
