import { analyzeButtonEl, corpusTextareaEl, resultsTextEl } from "./ui";
import { analyze } from "./utils/analyze";
import { createKeyboardLayout, updateKeyboardVisualization } from "./utils/keyboard";

analyzeButtonEl.onclick = () => {
  const text = corpusTextareaEl.value.toLowerCase();
  const result = analyze(text);

  resultsTextEl.textContent = JSON.stringify(result, null, 2);

  updateKeyboardVisualization(result.keyFrequencies, result.textLength);
};

createKeyboardLayout();
