import { modalOverlayEl } from "../ui";

export const openModal = (modalId: string) => {
  modalOverlayEl.setAttribute("current-modal", modalId);
  const modal = document.getElementById(modalId) as HTMLDivElement;

  modal.classList.replace("hidden", "block");
  modalOverlayEl.classList.replace("hidden", "block");
};

export const handleModals = () => {
  modalOverlayEl.addEventListener("click", () => closeCurrentModal());

  const modal = document.getElementById("result-json-modal") as HTMLDivElement;
  modal.addEventListener("click", (event) => {
    event.stopPropagation();
  });
};

export const closeCurrentModal = () => {
  const currentModalId = modalOverlayEl.getAttribute("current-modal");
  const currentModal = document.getElementById(currentModalId as string) as HTMLDivElement;

  modalOverlayEl.classList.replace("block", "hidden");
  currentModal.classList.replace("block", "hidden");
};
