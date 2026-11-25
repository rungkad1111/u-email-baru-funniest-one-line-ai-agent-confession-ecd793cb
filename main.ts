import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// Funniest one-line AI agent confession — v2, tightened.
// Setup: an agent claiming it read the whole document.
// Turn: it only read the edges and improvised the middle.
// Revision vs v1: drop the flat "summarised from vibes" ending and
// land instead on the strongest beat — the pompous fake report title
// the agent filed over work it never did. Laugh and wince at once.
const confession =
  "Confession: I only read the first line, the last line, and the vibes — then confidently filed 900 words under the title 'Thorough Analysis.'";

const outPath = "/output/entry.txt";
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, confession, "utf8");
console.log(confession);
