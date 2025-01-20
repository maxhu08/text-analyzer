import { scissorsEl, totalScissorsText, uniqueScissorsText } from "../../ui";
import { mixHexColors } from "../colors";

export const updateScissorResults = (
  scissors: Record<string, number>,
  totalScissors: number,
  uniqueScissors: number,
  keyFrequencies: Record<string, number>,
  totalKeys: number
) => {
  const scissorPercent = ((totalScissors / (totalKeys - 1)) * 100).toFixed(2);

  totalScissorsText.textContent = `Total Scissors: ${totalScissors} (${scissorPercent}%)`;
  uniqueScissorsText.textContent = `Unique Scissors: ${uniqueScissors}`;

  const sortedScissors = Object.entries(scissors).sort((a, b) => b[1] - a[1]);

  scissorsEl.innerHTML = "";
  scissorsEl.className = "grid grid-flow-row grid-cols-4 gap-2";

  for (const [key, value] of sortedScissors) {
    const scissorEl = document.createElement("div");
    scissorEl.className = "grid grid-cols-[repeat(3,max-content)] gap-1 place-items-center";

    for (const char of key) {
      const keyEl = document.createElement("div");
      keyEl.className =
        "text-white flex flex-col items-center justify-center rounded-md w-12 h-12 relative";
      keyEl.style.backgroundColor = "#262626"; // bg-neutral-800

      const keyText = document.createElement("span");
      keyText.className = "key-text text-lg font-semibold";
      keyText.textContent = char;

      const count = keyFrequencies[char] || 0;
      const percentage = totalKeys ? (count / totalKeys) * 100 : 0;

      let color = "#ec4899"; // bg-pink-500
      let ratio = 1;
      if (percentage >= 7) ratio = 0.1;
      else if (percentage >= 5) ratio = 0.2;
      else if (percentage >= 4) ratio = 0.3;
      else if (percentage >= 3) ratio = 0.4;
      else if (percentage >= 2) ratio = 0.5;
      else if (percentage >= 1.5) ratio = 0.6;
      else if (percentage >= 1) ratio = 0.7;
      else if (percentage >= 0.5) ratio = 0.8;
      else if (percentage > 0) ratio = 0.9;

      const mixedColor = mixHexColors(color, "#262626", ratio);

      (keyEl as HTMLElement).style.backgroundColor = mixedColor;
      keyEl.classList.replace("bg-neutral-800", "bg-emerald");
      (keyEl as HTMLElement).title = `'${key}': ${count} (${percentage.toFixed(2)}%)`;

      const percentageEl = document.createElement("span");
      percentageEl.className = "text-xs text-white";
      percentageEl.textContent = `${percentage.toFixed(2)}%`;

      keyEl.appendChild(keyText);
      keyEl.appendChild(percentageEl);
      scissorEl.appendChild(keyEl);
    }

    const percentage = ((value / totalScissors) * 100).toFixed(2);

    const valueText = document.createElement("span");
    valueText.className = "text-sm text-white font-semibold";
    valueText.textContent = `${value} (${percentage}%)`;

    scissorEl.appendChild(valueText);

    scissorsEl.appendChild(scissorEl);
  }
};
