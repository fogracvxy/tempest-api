# Crates

## Crates

Crates are made by admins in game (`/crates`, Edit crates, permission `crates.admin`) and saved in
`universe/mods/crates/crates.json`. Each opening is reported as `PlayerActions.CRATE_OPEN` (amount: the price), which
the Quests mod counts for "Open crates" goals; prizes rarer than the admin's threshold are posted to
`Announcements.BIG_WIN`. The price is taken (and can be vetoed) before the prize is drawn.

- Keys: a crate can need `keyAmount` of an item (`keyItem`), usually `Crate_Key_Bronze`, `Crate_Key_Silver` or
  `Crate_Key_Gold`. Give them from other plugins or the console with `/cratekey <player> <bronze|silver|gold|item id>
  <amount>` (permission `crates.admin`); right-clicking a key opens `/crates` (page id `Crates_Page`).
- A crate can be locked to a permission (`permission`, such as `crates.vip`).
- Prizes can be a permission or a permissions group ("rank"), for some days or for good, given through the server's
  `PermissionsModule` and taken back when they run out (unless the player already had them), or a console command
  with `{player}` and `{uuid}`.

- Crate blocks (`Crate_Block_Wooden`, `Crate_Block_Iron`, `Crate_Block_Golden`): which crate each one opens is in
  `universe/mods/crates/places.json` (with each crate's last Rare or better win). Admins set it by right-clicking the
  block (crouch + right-click to change it). The text, circling prizes and floating prizes of openings over them use
  Holograms (below), which is optional for Crates: without it the lid, sparkles and sounds still play. To use Holograms as an
  optional dependency, touch its classes in one class of yours only, after checking that they exist.
