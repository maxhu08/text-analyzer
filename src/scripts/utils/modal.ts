import { modalOverlayEl } from "../ui";

export const openModal = (modalId: string) => {
  const modal = document.getElementById(modalId) as HTMLDivElement;
  modal.classList.replace("hidden", "block");
  modalOverlayEl.classList.replace("hidden", "block");
};

export const handleModals = () => {
  modalOverlayEl.addEventListener("click", () => {
    Array.from(modalOverlayEl.children[0].children).forEach((child) => {
      if (child.classList.contains("block")) {
        modalOverlayEl.classList.replace("block", "hidden");
        child.classList.replace("block", "hidden");
      }
    });
  });

  const modal = document.getElementById("result-json-modal") as HTMLDivElement;
  modal.addEventListener("click", (event) => {
    event.stopPropagation();
  });
};
