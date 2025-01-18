import { jsonOutputEl, resultsEl } from "../ui";
import type { analyze } from "./analyze";

import { updateKeyboardVisualization } from "./keyboard";
import { updateSFBResults } from "./sfb";

export const displayResult = (result: ReturnType<typeof analyze>) => {
  updateKeyboardVisualization(result.keyFrequencies, result.textLength);
  updateSFBResults(result.sfbs);
  jsonOutputEl.textContent = JSON.stringify(result, null, 2);

  resultsEl.classList.replace("hidden", "grid");
};
