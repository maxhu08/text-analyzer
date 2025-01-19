import { keyboardEl, totalKeysText, uniqueKeysText } from "../../ui";
import { mixHexColors } from "../colors";
import { keyboardLayoutStore } from "../keyboard-layout-store";

export const updateKeyFrequencyResults = (
  keyFrequencies: Record<string, number>,
  totalKeys: number,
  uniqueKeys: number
) => {
  totalKeysText.textContent = `Total Keys: ${totalKeys}`;
  uniqueKeysText.textContent = `Unique Keys: ${uniqueKeys}`;

  updateKeyboardVisualization(keyFrequencies, totalKeys);
};

export const createKeyboardLayout = () => {
  const specialKeys: [string, string][] = [
    ["", "Backspace"],
    ["Tab", ""],
    ["Caps", "Enter"],
    ["LShift", "RShift"]
  ];

  keyboardLayoutStore()
    .getLayoutSplit()
    .forEach((row: string, rowIndex: number) => {
      const rowDiv = document.createElement("div");

      rowDiv.className = "grid gap-1 items-center";

      if (rowIndex === 0) {
        rowDiv.classList.add("grid-cols-[max-content_max-content]");
      } else if (specialKeys[rowIndex]?.[0] || specialKeys[rowIndex]?.[1]) {
        rowDiv.classList.add("grid-cols-[1fr_max-content_1fr]");
      } else {
        rowDiv.classList.add("justify-center");
      }

      // add left special key if present
      if (specialKeys[rowIndex]?.[0]) {
        const leftSpecialKeyDiv = createSpecialKeyElement(specialKeys[rowIndex][0]);
        rowDiv.appendChild(leftSpecialKeyDiv);
      }

      // add regular keys
      const keyContainer = document.createElement("div");
      keyContainer.className = "flex gap-1";
      for (let i = 0; i < row.length; i++) {
        // avoid \ key
        if (!(rowIndex === 1 && i === row.length - 1)) {
          const key = row[i];

          const keyEl = createKeyElement(key);
          keyContainer.appendChild(keyEl);
        }
      }

      rowDiv.appendChild(keyContainer);

      // add \ key
      if (rowIndex === 1) {
        const keyEl = createSpecialKeyElement(row[row.length - 1]);
        rowDiv.appendChild(keyEl);
      }

      // add right special key if present
      if (specialKeys[rowIndex]?.[1]) {
        const rightSpecialKeyDiv = createSpecialKeyElement(specialKeys[rowIndex][1]);
        rowDiv.appendChild(rightSpecialKeyDiv);
      }

      keyboardEl.appendChild(rowDiv);
    });
};

const createKeyElement = (key: string) => {
  const keyDiv = document.createElement("div");
  keyDiv.className =
    "key text-white flex flex-col items-center justify-center rounded-md w-12 h-12 relative bg-gray-800";
  keyDiv.id = `key-${key}`;

  const keyText = document.createElement("span");
  keyText.className = "key-text text-lg font-semibold";
  keyText.textContent = key;

  const keyPercentage = document.createElement("span");
  keyPercentage.className = "key-percentage text-xs";
  keyPercentage.textContent = "0.00%";

  keyDiv.appendChild(keyText);
  keyDiv.appendChild(keyPercentage);

  return keyDiv;
};

const createSpecialKeyElement = (keyName?: string): HTMLDivElement => {
  const keyDiv = document.createElement("div");
  keyDiv.className =
    "key special-key text-white flex flex-col items-center justify-center rounded-md h-12 relative bg-gray-700";
  keyDiv.id = `key-${keyName?.toLowerCase() || ""}`;

  const keyText = document.createElement("span");
  keyText.className = "key-text text-lg font-semibold";
  keyText.textContent = keyName || "";

  keyDiv.appendChild(keyText);
  return keyDiv;
};

const updateKeyboardVisualization = (keyFrequencies: Record<string, number>, totalKeys: number) => {
  keyboardEl.innerHTML = "";
  createKeyboardLayout();

  const keys = keyboardEl.querySelectorAll(".key");

  keys.forEach((keyEl) => {
    const key = keyEl.id.replace("key-", "");
    const count = keyFrequencies[key] || 0;
    const percentage = totalKeys ? (count / totalKeys) * 100 : 0;

    let color = "#10b981"; // bg-emerald-500
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
    if (percentageEl) percentageEl.textContent = `${percentage.toFixed(2)}%`;
  });
};
