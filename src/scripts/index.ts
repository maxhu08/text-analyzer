import { analyzeButtonEl, corpusTextareaEl, resultsTextEl } from "./ui";
import { createKeyboardLayout, updateKeyboardVisualization } from "./utils/keyboard";

analyzeButtonEl.onclick = () => {
  const text = corpusTextareaEl.value.toLowerCase();
  const totalChars = text.length;
  const charCounts = new Map();

  for (const char of text) {
    charCounts.set(char, (charCounts.get(char) || 0) + 1);
  }

  const sortedEntries = Array.from(charCounts)
    .sort(([charA], [charB]) => charA.localeCompare(charB))
    .map(([char, count]) => {
      const percent = ((count / totalChars) * 100).toFixed(2);
      return `'${char}': ${count} (${percent}%)`;
    });

  resultsTextEl.textContent = sortedEntries.join(", ");

  updateKeyboardVisualization(charCounts, totalChars);
};

createKeyboardLayout();
