import { keyboardEl } from "../ui";

const keyboardLayout = ["qwertyuiop[]", "asdfghjkl;'", "zxcvbnm,./"];

export const createKeyboardLayout = () => {
  keyboardLayout.forEach((row) => {
    const rowDiv = document.createElement("div");
    rowDiv.className = "flex justify-center gap-1";
    for (const key of row) {
      const keyDiv = document.createElement("div");
      keyDiv.className =
        "key bg-neutral-800 text-white flex items-center justify-center rounded w-10 h-10";
      keyDiv.id = `key-${key}`;
      keyDiv.textContent = key;
      keyDiv.title = `'${key}': 0 (0%)`;
      rowDiv.appendChild(keyDiv);
    }
    keyboardEl.appendChild(rowDiv);
  });
};

export const updateKeyboardVisualization = (
  charCounts: Map<string, number>,
  totalChars: number
) => {
  const keys = keyboardEl.querySelectorAll(".key");

  keys.forEach((keyEl) => {
    const key = keyEl.id.replace("key-", "");
    const count = charCounts.get(key) || 0;
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

    (keyEl as HTMLElement).className =
      `key ${bgClass} text-white flex items-center justify-center rounded w-10 h-10`;
    (keyEl as HTMLElement).title = `'${key}': ${count} (${percentage}%)`;
  });
};
