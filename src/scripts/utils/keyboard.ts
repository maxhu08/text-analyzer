import { keyboardEl } from "../ui";

const keyboardLayout = ["qwertyuiop[]", "asdfghjkl;'", "zxcvbnm,./"];

export const createKeyboardLayout = () => {
  keyboardLayout.forEach((row) => {
    const rowDiv = document.createElement("div");
    rowDiv.className = "flex justify-center gap-1";
    for (const key of row) {
      const keyDiv = document.createElement("div");
      keyDiv.className =
        "key bg-neutral-800 text-white flex flex-col items-center justify-center rounded w-16 h-16 relative";
      keyDiv.id = `key-${key}`;

      const keyText = document.createElement("span");
      keyText.className = "key-text";
      keyText.textContent = key;

      const keyPercentage = document.createElement("span");
      keyPercentage.className = "key-percentage text-xs";
      keyPercentage.textContent = "0%";

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

    let bgClass = "bg-neutral-800";
    if (percentage >= 7) bgClass = "bg-emerald-200";
    else if (percentage >= 5) bgClass = "bg-emerald-300";
    else if (percentage >= 4) bgClass = "bg-emerald-400";
    else if (percentage >= 3) bgClass = "bg-emerald-500";
    else if (percentage >= 2) bgClass = "bg-emerald-600";
    else if (percentage >= 1.5) bgClass = "bg-emerald-700";
    else if (percentage >= 1) bgClass = "bg-emerald-800";
    else if (percentage >= 0.5) bgClass = "bg-emerald-900";
    else if (percentage > 0) bgClass = "bg-emerald-950";

    keyEl.classList.replace("bg-neutral-800", bgClass);
    (keyEl as HTMLElement).title = `'${key}': ${count} (${percentage.toFixed(2)}%)`;

    const percentageEl = keyEl.querySelector(".key-percentage") as HTMLElement;
    if (percentageEl) {
      percentageEl.textContent = `${percentage.toFixed(2)}%`;
    }
  });
};
