import { keyboardEl, totalKeysText, uniqueKeysText } from "../../ui";
import { updateKeyboardVisualization } from "../keyboard";

export const updateKeyFrequencyResults = (
  keyFrequencies: Record<string, number>,
  totalKeys: number,
  uniqueKeys: number
) => {
  totalKeysText.textContent = `Total Keys: ${totalKeys}`;
  uniqueKeysText.textContent = `Unique Keys: ${uniqueKeys}`;

  updateKeyboardVisualization(
    "main",
    keyboardEl,
    keyFrequencies,
    totalKeys,
    "#10b981" // emerald-500
  );
};
