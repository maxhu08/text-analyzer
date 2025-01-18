import { analyzeButtonEl, corpusTextareaEl, resultsTextEl } from "./ui";
import { analyze } from "./utils/analyze";
import { createKeyboardLayout, updateKeyboardVisualization } from "./utils/keyboard";

analyzeButtonEl.onclick = () => {
  const text = corpusTextareaEl.value.toLowerCase();
  const { keyFrequencies } = analyze(text);

  resultsTextEl.textContent = Array.from(keyFrequencies)
    .sort(([charA], [charB]) => charA.localeCompare(charB))
    .map(([char, count]) => {
      const percent = ((count / text.length) * 100).toFixed(2);
      return `'${char}': ${count} (${percent}%)`;
    })
    .join(", ");

  updateKeyboardVisualization(keyFrequencies, text.length);
};

createKeyboardLayout();
