import { layouts } from "../constants/keyboard-layout";
import { layoutsEl } from "../ui";

export const handleLayouts = () => {
  Object.keys(layouts).forEach((layout) => {
    const button = document.createElement("button");
    button.id = `layout-${layout}-button`;
    button.className = "rounded-md bg-neutral-800 py-2 outline-none hover:bg-neutral-700";

    const span = document.createElement("span");
    span.className = "text-white";
    span.textContent = layout;

    button.appendChild(span);
    layoutsEl.appendChild(button);
  });
};
