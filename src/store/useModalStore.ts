import { create } from "zustand";

interface ModalStoreState {
  activeModal: string | null;
  setActiveModal: (modal: string | null) => void;
}

export const useModalStore = create<ModalStoreState>((set) => ({
  activeModal: null,
  setActiveModal: (modal) => set({ activeModal: modal }),
}));
