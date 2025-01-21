import { keyboardLayoutStore } from "./keyboard-layout-store";

export const analyze = (text: string) => {
  const kbStore = keyboardLayoutStore();
  const keyboardLayoutSplit = kbStore.getLayoutSplit();
  const fingerMap = kbStore.getFingerMap();
  const topRow = new Set(kbStore.getLayoutSplit()[1]);
  const bottomRow = new Set(kbStore.getLayoutSplit()[3]);

  const validKeys = new Set(keyboardLayoutSplit.join(""));
  const keyFrequencies = new Map<string, number>();
  const firstKeyFrequencies = new Map<string, number>();
  const lastKeyFrequencies = new Map<string, number>();
  const sfbs = new Map<string, number>();
  const scissors = new Map<string, number>();

  let leftKeys = 0;
  let rightKeys = 0;
  let totalKeys = 0;
  let alternations = 0;
  let prevHand: "L" | "R" | null = null;

  for (let i = 0; i < text.length; i++) {
    const char = text[i].toLowerCase();
    const prevChar = text[i - 1]?.toLowerCase();
    const nextChar = text[i + 1]?.toLowerCase();

    // first and last key frequencies
    if (!prevChar || prevChar === " ")
      firstKeyFrequencies.set(char, (firstKeyFrequencies.get(char) || 0) + 1);
    if (!nextChar || nextChar === " ")
      lastKeyFrequencies.set(char, (lastKeyFrequencies.get(char) || 0) + 1);

    // left and right usage
    if (validKeys.has(char)) {
      keyFrequencies.set(char, (keyFrequencies.get(char) || 0) + 1);
      totalKeys++;

      const fingerGroup = fingerMap.get(char);
      if (fingerGroup?.[0] === "L") {
        leftKeys++;
        if (prevHand === "R") alternations++;
        prevHand = "L";
      } else if (fingerGroup?.[0] === "R") {
        rightKeys++;
        if (prevHand === "L") alternations++;
        prevHand = "R";
      }
    }

    // sfbs
    if (validKeys.has(char) && validKeys.has(nextChar)) {
      const finger1 = fingerMap.get(char);
      const finger2 = fingerMap.get(nextChar);
      if (finger1 && finger2 && finger1 === finger2) {
        const bigram = char + nextChar;
        sfbs.set(bigram, (sfbs.get(bigram) || 0) + 1);
      }
    }

    // scissors
    if (validKeys.has(char) && validKeys.has(nextChar)) {
      const hand1 = fingerMap.get(char)?.[0];
      const hand2 = fingerMap.get(nextChar)?.[0];

      const isScissor =
        hand1 &&
        hand2 &&
        hand1 === hand2 && // same hand
        ((topRow.has(char) && bottomRow.has(nextChar)) ||
          (bottomRow.has(char) && topRow.has(nextChar))); // top-to-bottom or vice versa

      if (isScissor) {
        const bigram = char + nextChar;
        scissors.set(bigram, (scissors.get(bigram) || 0) + 1);
      }
    }
  }

  return {
    characters: text.length,
    totalKeys,
    uniqueKeys: keyFrequencies.size,
    keyFrequencies: Object.fromEntries(keyFrequencies),
    firstKeyFrequencies: Object.fromEntries(firstKeyFrequencies),
    uniqueFirstKeys: firstKeyFrequencies.size,
    lastKeyFrequencies: Object.fromEntries(lastKeyFrequencies),
    uniqueLastKeys: lastKeyFrequencies.size,
    alternations,
    leftKeys,
    rightKeys,
    totalSfbs: Array.from(sfbs.values()).reduce((sum, count) => sum + count, 0),
    uniqueSfbs: sfbs.size,
    sfbs: Object.fromEntries(sfbs),
    totalScissors: Array.from(scissors.values()).reduce((sum, count) => sum + count, 0),
    uniqueScissors: scissors.size,
    scissors: Object.fromEntries(scissors)
  };
};
