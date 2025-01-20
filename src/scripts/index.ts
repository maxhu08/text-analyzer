import { english10k } from "./constants/10k";
import { analyzeButtonEl, clearButtonEl, test10kButtonEl, textTextareaEl } from "./ui";
import { analyze } from "./utils/analyze";
import { handleLayouts } from "./utils/handle-layouts";
import { displayResult } from "./utils/results/display-result";
import { getTextLocalStorage, setTextLocalStorage } from "./utils/text-store";

handleLayouts();

test10kButtonEl.onclick = () => {
  const confirmReset = confirm(
    "This will reset everything and replace it with the top 10k most popular english words. Are you sure?"
  );
  if (confirmReset) {
    textTextareaEl.value = english10k;
    setTextLocalStorage(english10k);
  }
};

clearButtonEl.onclick = () => {
  const confirmReset = confirm("This will clear everything. Are you sure?");
  if (confirmReset) {
    textTextareaEl.value = "";
    setTextLocalStorage("");
  }
};

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
