# Integrations

Tempest next to other plugins.

## Integrations with other plugins

Set up in `/tempest`, Integrations tab.

- **VaultUnlocked**: when it is installed, Coins registers as its economy, so every VaultUnlocked plugin (player
  shops, auction houses, jobs, land claims, scoreboards' balance placeholders) uses these coins. Coins are whole
  numbers: decimal amounts are rounded in the server's favour (charges round up, payments round down), negative and
  absurd amounts are refused, transfers are all-or-nothing, and wallets cannot be deleted by other plugins. Payments
  show in wallets and the `/eco` log under the calling plugin's name. Can be switched off without a restart.
- **Cassaforte**: when it is installed, Coins registers as its economy too (the first plugin to register wins, so
  switch it off in the Integrations tab if another economy should be used). Same rules as VaultUnlocked.
- **Shared banks** (`/bank`) are the "shared accounts" of both: VaultUnlocked and Cassaforte plugins can pay into and
  out of a bank by its name. Banks are kept by Coins in `universe/mods/coins/banks`.
- **Discord**: paste a channel webhook link; jackpots, big wins, lottery winners, achievements and other mods'
  announcements are posted (each can be switched off). Only real Discord webhook links are accepted, mentions are
  disabled, Discord formatting in player names is escaped, and messages are sent one at a time (a burst is cut off
  instead of flooding the channel).
