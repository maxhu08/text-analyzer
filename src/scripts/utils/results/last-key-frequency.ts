import { lastKeysKeyboardEl, totalLastKeysText, uniqueLastKeysText } from "../../ui";
import { updateKeyboardVisualization } from "../keyboard";

export const updateLastKeyFrequencyResults = (
  keyFrequencies: Record<string, number>,
  totalKeys: number,
  uniqueKeys: number
) => {
  totalLastKeysText.textContent = `Total Keys: ${totalKeys}`;
  uniqueLastKeysText.textContent = `Unique Keys: ${uniqueKeys}`;

  updateKeyboardVisualization(
    "first-keys",
    lastKeysKeyboardEl,
    keyFrequencies,
    totalKeys,
    "#eab308" // yellow-500
  );
};
