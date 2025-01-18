import { analyzeButtonEl, corpusTextareaEl, resultsTextEl } from "./ui";

const keyboardEl = document.getElementById("keyboard") as HTMLElement;

const keyboardLayout = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];

function createKeyboardLayout() {
  keyboardLayout.forEach((row) => {
    const rowDiv = document.createElement("div");
    rowDiv.className = "flex justify-center gap-1";
    for (const key of row) {
      const keyDiv = document.createElement("div");
      keyDiv.className =
        "key bg-neutral-800 text-white flex items-center justify-center rounded w-10 h-10";
      keyDiv.id = `key-${key}`;
      keyDiv.textContent = key.toUpperCase();
      keyDiv.title = `'${key}': 0 (0%)`;
      rowDiv.appendChild(keyDiv);
    }
    keyboardEl.appendChild(rowDiv);
  });
}

function updateKeyboardVisualization(charCounts: Map<string, number>, totalChars: number) {
  const keys = keyboardEl.querySelectorAll(".key");

  keys.forEach((keyEl) => {
    const key = keyEl.id.replace("key-", "");
    const count = charCounts.get(key) || 0;
    const percentage = totalChars ? (count / totalChars) * 100 : 0;

    let bgClass = "bg-neutral-800";
    if (percentage >= 90) bgClass = "bg-emerald-100";
    else if (percentage >= 75) bgClass = "bg-emerald-200";
    else if (percentage >= 50) bgClass = "bg-emerald-300";
    else if (percentage >= 25) bgClass = "bg-emerald-400";
    else if (percentage >= 10) bgClass = "bg-emerald-500";
    else if (percentage >= 5) bgClass = "bg-emerald-600";
    else if (percentage >= 2) bgClass = "bg-emerald-700";
    else if (percentage > 0) bgClass = "bg-emerald-800";

    (keyEl as HTMLElement).className =
      `key flex items-center justify-center rounded w-10 h-10 ${bgClass}`;
    (keyEl as HTMLElement).title = `'${key}': ${count} (${percentage}%)`;
  });
}

analyzeButtonEl.onclick = () => {
  const text = corpusTextareaEl.value.toLowerCase();
  const totalChars = text.length;
  const charCounts = new Map();

  for (const char of text) {
    charCounts.set(char, (charCounts.get(char) || 0) + 1);
  }

  const sortedEntries = Array.from(charCounts)
    .sort(([charA], [charB]) => charA.localeCompare(charB))
    .map(([char, count]) => {
      const percent = ((count / totalChars) * 100).toFixed(2);
      return `'${char}': ${count} (${percent}%)`;
    });

  resultsTextEl.textContent = sortedEntries.join(", ");

  updateKeyboardVisualization(charCounts, totalChars);
};

createKeyboardLayout();
