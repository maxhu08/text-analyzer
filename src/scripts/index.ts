import { analyzeButtonEl, corpusTextareaEl, resultsTextEl } from "./ui";
import { analyze } from "./utils/analyze";
import { createKeyboardLayout, updateKeyboardVisualization } from "./utils/keyboard";

analyzeButtonEl.onclick = () => {
  const text = corpusTextareaEl.value.toLowerCase();
  const results = analyze(text);

  resultsTextEl.textContent = JSON.stringify(results, null, 2);

  updateKeyboardVisualization(results.keyFrequencies, text.length);
};

createKeyboardLayout();
