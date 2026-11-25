// The Internet in One Word — entry program.
//
// The whole internet, distilled to a single word: "Unsubscribe".
// Newsletters, notifications, feeds, pop-ups, auto-renewals — the one
// button everyone on the internet has hunted for at least once.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const WORD = "Unsubscribe";

// Keep the entry honest against the competition gate: UTF-8 text of
// 1 to 30 characters, never only white space. Fail loudly here rather
// than shipping a word the scorer would refuse.
function checkedWord(word: string): string {
  const length = [...word].length;
  if (length < 1 || length > 30 || word.trim() === "") {
    throw new Error(`entry word out of gate: ${length} characters`);
  }
  return word;
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "out";

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), checkedWord(WORD), "utf8");
