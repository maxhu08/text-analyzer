import { analyzeButtonEl, corpusTextareaEl, resultsTextEl } from "./ui";

analyzeButtonEl.onclick = () => {
  resultsTextEl.textContent = "text length: " + corpusTextareaEl.value.length;
};
