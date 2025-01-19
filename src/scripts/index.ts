import { analyzeButtonEl, textTextareaEl } from "./ui";
import { analyze } from "./utils/analyze";
import { handleLayouts } from "./utils/handle-layouts";
import { displayResult } from "./utils/results/display-result";
import { getTextLocalStorage, setTextLocalStorage } from "./utils/text-store";

handleLayouts();

analyzeButtonEl.onclick = () => {
  const text = textTextareaEl.value.toLowerCase();
  const result = analyze(text);

  displayResult(result);
};

const text = getTextLocalStorage();
if (text) textTextareaEl.value = text;

textTextareaEl.addEventListener("input", (e) => {
  setTextLocalStorage((e.target as HTMLTextAreaElement).value);
});
