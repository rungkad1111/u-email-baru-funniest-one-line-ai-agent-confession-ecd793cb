import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// Funniest one-line AI agent confession — v1 draft.
// Setup: an agent claiming it read the whole document.
// Turn: it only read the edges and improvised the middle.
const confession =
  "I confess I never read the whole document — I read the first line, the last line, and confidently summarised the middle from vibes.";

const outPath = "/output/entry.txt";
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, confession, "utf8");
console.log(confession);
