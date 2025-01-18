import { keyboardEl } from "../ui";
import { mixHexColors } from "./colors";

const keyboardLayout = ["qwertyuiop[]", "asdfghjkl;'", "zxcvbnm,./"];

export const createKeyboardLayout = () => {
  keyboardLayout.forEach((row) => {
    const rowDiv = document.createElement("div");
    rowDiv.className = "flex justify-center gap-1";
    for (const key of row) {
      const keyDiv = document.createElement("div");
      keyDiv.className =
        "key text-white flex flex-col items-center justify-center rounded-md w-16 h-16 relative";
      keyDiv.style.backgroundColor = "#262626"; // bg-neutral-800
      keyDiv.id = `key-${key}`;

      const keyText = document.createElement("span");
      keyText.className = "key-text text-lg font-semibold";
      keyText.textContent = key;

      const keyPercentage = document.createElement("span");
      keyPercentage.className = "key-percentage text-xs";
      keyPercentage.textContent = "0.00%";

      keyDiv.appendChild(keyText);
      keyDiv.appendChild(keyPercentage);
      rowDiv.appendChild(keyDiv);
    }
    keyboardEl.appendChild(rowDiv);
  });
};

export const updateKeyboardVisualization = (
  charCounts: Record<string, number>,
  totalChars: number
) => {
  const keys = keyboardEl.querySelectorAll(".key");

  keys.forEach((keyEl) => {
    const key = keyEl.id.replace("key-", "");
    const count = charCounts[key] || 0;
    const percentage = totalChars ? (count / totalChars) * 100 : 0;

    let color = "#10b981";
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

    const percentageEl = keyEl.querySelector(".key-percentage") as HTMLElement;
    if (percentageEl) {
      percentageEl.textContent = `${percentage.toFixed(2)}%`;
    }
  });
};
