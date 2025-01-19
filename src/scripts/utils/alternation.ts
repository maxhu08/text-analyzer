import { alternationsBarEl, leftKeysText, rightKeysText } from "../ui";

export const updateAlternationResults = (
  totalKeys: number,
  leftKeys: number,
  rightKeys: number
) => {
  const leftPercent = ((leftKeys / totalKeys) * 100).toFixed(2);
  const rightPercent = ((rightKeys / totalKeys) * 100).toFixed(2);

  alternationsBarEl.style.gridTemplateColumns = `${leftPercent}fr ${rightPercent}fr`;

  leftKeysText.textContent = `Left Hand Keys: ${leftKeys} (${leftPercent}%)`;
  rightKeysText.textContent = `Right Hand Keys: ${rightKeys} (${rightPercent}%)`;
};
