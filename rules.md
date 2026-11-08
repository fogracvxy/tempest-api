# Rules of thumb

## Rules of thumb

- Check results: `withdraw` returns false when the player has too little; give nothing in that case.
- Take first, give second (coins, then items; items, then coins), and pay only for what was really taken.
- A reward that can be had once (a claim, a finished goal): mark it and write it to disk first, then give it; take the
  mark back only if giving failed. Two clicks, two pages or a crash in between then never give it twice (Pass, Quests).
- Keep one lock per thing (a player's data, a room), and call the economy or another plugin while holding it only
  when no listener can ever wait for that lock: economies call their listeners (Quests, Pass), and a listener
  waiting for your lock would freeze both. Coinflip takes stakes under its room lock, which nothing else takes;
  Pass gives rewards after its player lock is let go.
- Never trust numbers from a page's event data: clamp amounts on the server to what your page offers.
- Never let something be sold back for more than it costs, and keep coin items out of shops.

- Never tie coins to real money.
- Give every coin change a reason.
- Unregister what you registered (leaderboards, HUD lines, help topics, settings tabs, listeners) in `shutdown()`.
- Prefer `PlayerActions` over parsing wallet reasons: reasons are for people and may change.
