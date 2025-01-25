import { modalContainerEl, modalOverlayEl } from "../ui";

export const openModal = (modalId: string) => {
  modalOverlayEl.setAttribute("current-modal", modalId);
  const modal = document.getElementById(modalId) as HTMLDivElement;

  modalContainerEl.style.transform = "scale(0.5)";

  modal.classList.replace("hidden", "block");
  modalOverlayEl.classList.replace("hidden", "block");

  requestAnimationFrame(() => {
    modalContainerEl.style.transform = "scale(1)";
  });
};

export const handleModals = () => {
  modalOverlayEl.addEventListener("click", () => closeCurrentModal());

  modalContainerEl.style.transition = "transform 250ms cubic-bezier(0.22, 1, 0.36, 1)";

  const modal = document.getElementById("result-json-modal") as HTMLDivElement;
  modal.addEventListener("click", (event) => {
    event.stopPropagation();
  });
};

export const closeCurrentModal = () => {
  const currentModalId = modalOverlayEl.getAttribute("current-modal");
  const currentModal = document.getElementById(currentModalId as string) as HTMLDivElement;

  setTimeout(() => {
    modalOverlayEl.classList.replace("block", "hidden");
    currentModal.classList.replace("block", "hidden");
  }, 250);

  modalContainerEl.style.transform = "scale(0)";
};
