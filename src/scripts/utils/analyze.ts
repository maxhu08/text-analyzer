export const analyze = (text: string) => {
  const charCounts = new Map<string, number>();

  for (const char of text) {
    charCounts.set(char, (charCounts.get(char) || 0) + 1);
  }

  return { keyFrequencies: Object.fromEntries(charCounts) };
};
