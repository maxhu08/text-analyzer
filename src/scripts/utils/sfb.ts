import { sfbsEl } from "../ui";

export const updateSFBResults = (sfbs: Record<string, number>) => {
  sfbsEl.innerHTML = "";
  sfbsEl.className = "grid grid-flow-row grid-cols-4 gap-2";

  for (const [key, value] of Object.entries(sfbs)) {
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

    const valueText = document.createElement("span");
    valueText.className = "text-lg text-white font-semibold";
    valueText.textContent = value.toString();

    sfbEl.appendChild(valueText);

    sfbsEl.appendChild(sfbEl);
  }
};
