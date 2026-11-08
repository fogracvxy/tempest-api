# Content mods (JSON)

Add to the Tempest plugins without code.

## Content mods without code (JSON)

These interaction types can be used in any item, block or NPC interaction once the plugin is installed:

```json
{ "Type": "Coins_Give", "Amount": 50, "Reason": "Found a treasure chest" }
{ "Type": "Coins_Take", "Amount": 20, "Reason": "Ferry ticket", "Message": "Have a nice trip!" }
{ "Type": "Quests_Trigger", "Trigger": "visit_shrine", "Amount": 1 }
```

- `Coins_Give` adds coins to the player who used it. `Message` is optional (otherwise they are told the amount).
- `Coins_Take` takes coins, or **fails** when the player has too little: nothing is taken, the player is told what
  they need, and the interactions after it in the same chain do not run. Put it before what is being paid for
  (opening a door, giving an item).
- `Quests_Trigger` counts a custom trigger for the player (see above).
- These run every time the interaction does. For anything that should not be farmed (a reward chest, a shrine),
  give the interaction a cooldown in your JSON, or have the goal count once (an achievement with amount 1), so a
  player cannot click it a thousand times.

Example: an item that gives a reward once used (in `Server/Item/Items/Treasure_Map.json`):

```json
"Interactions": {
  "Secondary": {
    "Interactions": [
      { "Type": "Coins_Give", "Amount": 100, "Reason": "Treasure map" },
      { "Type": "Quests_Trigger", "Trigger": "treasure_map" }
    ]
  }
}
```
