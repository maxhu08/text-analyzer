import { firstKeysKeyboardEl, totalFirstKeysText, uniqueFirstKeysText } from "../../ui";
import { updateKeyboardVisualization } from "../keyboard";

export const updateFirstKeyFrequencyResults = (
  keyFrequencies: Record<string, number>,
  totalKeys: number,
  uniqueKeys: number
) => {
  totalFirstKeysText.textContent = `Total Keys: ${totalKeys}`;
  uniqueFirstKeysText.textContent = `Unique Keys: ${uniqueKeys}`;

  updateKeyboardVisualization("first-keys", firstKeysKeyboardEl, keyFrequencies, totalKeys);
};
