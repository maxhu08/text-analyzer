import { resultsTextEl } from "../ui";
import type { analyze } from "./analyze";
import { updateKeyboardVisualization } from "./keyboard";

export const displayResult = (result: ReturnType<typeof analyze>) => {
  resultsTextEl.textContent = JSON.stringify(result, null, 2);

  updateKeyboardVisualization(result.keyFrequencies, result.textLength);
};
