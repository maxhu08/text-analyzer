import { layouts } from "../constants/keyboard-layout";
import { layoutsEl } from "../ui";
import { keyboardLayoutStore, type KeyboardLayout } from "./keyboard-layout-store";

export const handleLayouts = () => {
  const kbStore = keyboardLayoutStore();

  Object.keys(layouts).forEach((layout) => {
    const button = document.createElement("button");
    button.id = `layout-${layout}-button`;
    button.className = "layout-button rounded-md py-2 outline-none transition duration-[250ms]";

    if (layout === kbStore.getLayout().name) {
      button.classList.add("bg-emerald-500", "hover:bg-emerald-600");
      button.setAttribute("selected", "yes");
    } else {
      button.classList.add("bg-neutral-800", "hover:bg-neutral-700");
      button.setAttribute("selected", "no");
    }

    button.onclick = () => {
      const allButtons = layoutsEl.querySelectorAll(".layout-button");

      allButtons.forEach((btn) => {
        btn.setAttribute("selected", "no");
        btn.classList.remove("bg-blue-500", "hover:bg-blue-600");
        btn.classList.add("bg-neutral-800", "hover:bg-neutral-700");
      });

      button.setAttribute("selected", "yes");
      button.classList.remove("bg-neutral-800", "hover:bg-neutral-700");
      button.classList.add("bg-blue-500", "hover:bg-blue-600");

      kbStore.setLayout(layout as KeyboardLayout);
    };

    const span = document.createElement("span");
    span.className = "text-white";
    span.textContent = layout;

    button.appendChild(span);
    layoutsEl.appendChild(button);
  });
};
