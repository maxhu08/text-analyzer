import { jsonOutputEl, resultsEl } from "../ui";
import type { analyze } from "./analyze";
import { updateKeyFrequencyResults } from "./key-frequency";

import { updateSFBResults } from "./sfb";

export const displayResult = (result: ReturnType<typeof analyze>) => {
  updateKeyFrequencyResults(result.keyFrequencies, result.textLength, result.uniqueKeys);
  updateSFBResults(result.sfbs, result.totalSfbs, result.uniqueSfbs);
  jsonOutputEl.textContent = JSON.stringify(result, null, 2);

  resultsEl.classList.replace("hidden", "grid");
};
