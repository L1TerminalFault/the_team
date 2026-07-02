"use client";

import { createContext, useContext, useState } from "react";

interface ModalContextType {
  activeModal: string | null;
  setActiveModal: (modal: string | null) => void;
}

const ModalContext = createContext<ModalContextType>({
  activeModal: null,
  setActiveModal: () => {},
});

export const useModal = () => useContext(ModalContext);

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  return (
    <ModalContext.Provider value={{ activeModal, setActiveModal }}>
      {children}
    </ModalContext.Provider>
  );
}
