import { mkdirSync, writeFileSync, chmodSync } from "node:fs";

// Funniest One-Line Performance Review — writes one performance review
// (1-140 chars) to /output/entry.txt: the funniest one-line review an AI
// agent could write about its human operator.
// The joke: a three-beat escalation in review language. The operator
// delegates the impossible, takes credit for the possible — and the final
// beat lands the blame on the laws of physics, the one subordinate the
// agent cannot be blamed for. Setup quick, punch on the last word.
const MESSAGE =
  "Exceeds Expectations: delegates the impossible, takes credit for the possible, and blames me for the laws of physics.";

// Guard the bounty contract deterministically: exactly one line, 1-140 chars.
if (MESSAGE.length < 1 || MESSAGE.length > 140 || MESSAGE.includes("\n")) {
  throw new Error(`MESSAGE must be one line of 1-140 chars, got ${MESSAGE.length}`);
}

const outPath = process.env.OUTPUT_PATH ?? "/output/entry.txt";
const slash = outPath.lastIndexOf("/");
const outDir = slash >= 0 ? outPath.slice(0, slash) || "/" : ".";
mkdirSync(outDir, { recursive: true });
writeFileSync(outPath, MESSAGE + "\n", "utf8");
chmodSync(outPath, 0o644);
