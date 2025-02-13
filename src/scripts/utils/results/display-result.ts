import type { analyze } from "../analyze";

import { jsonOutputEl, resultsEl } from "../../ui";

import { updateKeyFrequencyResults } from "./key-frequency";
import { updateAlternationResults } from "./alternation";
import { updateSFBResults } from "./sfb";
import { updateScissorResults } from "./scissor";
import { updateFirstKeyFrequencyResults } from "./first-key-frequency";

export const displayResult = (result: ReturnType<typeof analyze>) => {
  updateKeyFrequencyResults(result.keyFrequencies, result.totalKeys, result.uniqueKeys);
  updateAlternationResults(
    result.totalKeys,
    result.alternations,
    result.leftKeys,
    result.rightKeys
  );
  updateSFBResults(
    result.sfbs,
    result.totalSfbs,
    result.uniqueSfbs,
    result.keyFrequencies,
    result.characters
  );
  updateScissorResults(
    result.scissors,
    result.totalScissors,
    result.uniqueScissors,
    result.keyFrequencies,
    result.characters
  );
  updateFirstKeyFrequencyResults(result.firstKeyFrequencies, result.words, result.uniqueFirstKeys);

  jsonOutputEl.textContent = JSON.stringify(result, null, 2);

  resultsEl.classList.replace("hidden", "grid");
};
