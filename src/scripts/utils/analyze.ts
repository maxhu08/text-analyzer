import { fingerMap, keyboardLayoutSplit } from "../constants/keyboard-layout";

export const analyze = (text: string) => {
  const validKeys = new Set(keyboardLayoutSplit.join(""));
  const charCounts = new Map<string, number>();
  const sfbs = new Map<string, number>();

  let leftKeys = 0;
  let rightKeys = 0;
  let totalKeys = 0;

  for (let i = 0; i < text.length; i++) {
    const char = text[i].toLowerCase();
    const nextChar = text[i + 1]?.toLowerCase();

    // left and right usage
    if (validKeys.has(char)) {
      charCounts.set(char, (charCounts.get(char) || 0) + 1);
      totalKeys++;

      const fingerGroup = fingerMap[char];
      if (fingerGroup?.[0] === "L") leftKeys++;
      else if (fingerGroup?.[0] === "R") rightKeys++;
    }

    // sfbs
    if (validKeys.has(char) && validKeys.has(nextChar)) {
      const finger1 = fingerMap[char];
      const finger2 = fingerMap[nextChar];
      if (finger1 && finger2 && finger1 === finger2) {
        const bigram = char + nextChar;
        sfbs.set(bigram, (sfbs.get(bigram) || 0) + 1);
      }
    }
  }

  return {
    textLength: text.length,
    totalKeys,
    uniqueKeys: charCounts.size,
    keyFrequencies: Object.fromEntries(charCounts),
    leftKeys,
    rightKeys,
    totalSfbs: Array.from(sfbs.values()).reduce((sum, count) => sum + count, 0),
    uniqueSfbs: sfbs.size,
    sfbs: Object.fromEntries(sfbs)
  };
};
