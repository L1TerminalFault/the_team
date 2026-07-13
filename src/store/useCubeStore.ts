import { create } from "zustand";

interface CubeStoreState {
  isCubeLoaded: boolean;
  setCubeLoaded: (loaded: boolean) => void;
}

export const useCubeStore = create<CubeStoreState>((set) => ({
  isCubeLoaded: false,
  setCubeLoaded: (loaded) => set({ isCubeLoaded: loaded }),
}));
