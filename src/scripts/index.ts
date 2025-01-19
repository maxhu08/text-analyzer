import { analyzeButtonEl, corpusTextareaEl } from "./ui";
import { analyze } from "./utils/analyze";
import { displayResult } from "./utils/display-result";
import { createKeyboardLayout } from "./utils/key-frequency";
import { getTextLocalStorage, setTextLocalStorage } from "./utils/text-store";

analyzeButtonEl.onclick = () => {
  const text = corpusTextareaEl.value.toLowerCase();
  const result = analyze(text);

  displayResult(result);
};

const text = getTextLocalStorage();
if (text) corpusTextareaEl.value = text;

corpusTextareaEl.addEventListener("input", (e) => {
  setTextLocalStorage((e.target as HTMLTextAreaElement).value);
});

createKeyboardLayout();
