import { alternationsBarEl, alternationsText, leftKeysText, rightKeysText } from "../../ui";

export const updateAlternationResults = (
  totalKeys: number,
  alternations: number,
  leftKeys: number,
  rightKeys: number
) => {
  const alternationsPercent = ((alternations / totalKeys) * 100).toFixed(2);

  alternationsText.textContent = `Alternations: ${alternations} (${alternationsPercent}%)`;

  const leftPercent = ((leftKeys / totalKeys) * 100).toFixed(2);
  const rightPercent = ((rightKeys / totalKeys) * 100).toFixed(2);

  alternationsBarEl.style.gridTemplateColumns = `${leftPercent}fr ${rightPercent}fr`;

  leftKeysText.textContent = `Left Hand Keys: ${leftKeys} (${leftPercent}%)`;
  rightKeysText.textContent = `Right Hand Keys: ${rightKeys} (${rightPercent}%)`;
};
