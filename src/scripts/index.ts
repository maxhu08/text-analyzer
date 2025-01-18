import { analyzeButtonEl, corpusTextareaEl } from "./ui";
import { analyze } from "./utils/analyze";
import { displayResult } from "./utils/display-result";
import { createKeyboardLayout } from "./utils/keyboard";

analyzeButtonEl.onclick = () => {
  const text = corpusTextareaEl.value.toLowerCase();
  const result = analyze(text);

  displayResult(result);
};

createKeyboardLayout();
