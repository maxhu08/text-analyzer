import { jsonOutputEl, resultsEl } from "../ui";
import type { analyze } from "./analyze";
import { updateKeyFrequencyResults } from "./key-frequency";

import { updateSFBResults } from "./sfb";

export const displayResult = (result: ReturnType<typeof analyze>) => {
  updateKeyFrequencyResults(
    result.keyFrequencies,
    result.totalKeys,
    result.uniqueKeys,
    result.leftKeys,
    result.rightKeys
  );
  updateSFBResults(
    result.sfbs,
    result.totalSfbs,
    result.uniqueSfbs,
    result.keyFrequencies,
    result.textLength
  );
  jsonOutputEl.textContent = JSON.stringify(result, null, 2);

  resultsEl.classList.replace("hidden", "grid");
};
