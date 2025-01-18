import { sfbsEl, totalSfbsText, uniqueSfbsText } from "../ui";

export const updateSFBResults = (
  sfbs: Record<string, number>,
  totalSfbs: number,
  uniqueSfbs: number
) => {
  totalSfbsText.textContent = `Total SFBs: ${totalSfbs}`;
  uniqueSfbsText.textContent = `Unique SFBs: ${uniqueSfbs}`;

  const sortedSfbs = Object.entries(sfbs).sort((a, b) => b[1] - a[1]);

  sfbsEl.innerHTML = "";
  sfbsEl.className = "grid grid-flow-row grid-cols-4 gap-2";

  for (const [key, value] of sortedSfbs) {
    const sfbEl = document.createElement("div");
    sfbEl.className = "grid grid-cols-[repeat(3,max-content)] gap-1 place-items-center";

    for (const char of key) {
      const keyDiv = document.createElement("div");
      keyDiv.className =
        "text-white flex flex-col items-center justify-center rounded-md w-12 h-12 relative";
      keyDiv.style.backgroundColor = "#262626"; // bg-neutral-800

      const keyText = document.createElement("span");
      keyText.className = "key-text text-lg font-semibold";
      keyText.textContent = char;

      keyDiv.appendChild(keyText);
      sfbEl.appendChild(keyDiv);
    }

    // Calculate the percentage
    const percentage = ((value / totalSfbs) * 100).toFixed(2);

    const valueText = document.createElement("span");
    valueText.className = "text-sm text-white font-semibold";
    valueText.textContent = `${value} (${percentage}%)`;

    sfbEl.appendChild(valueText);

    sfbsEl.appendChild(sfbEl);
  }
};
