import { create } from 'zustand';

interface BearState {
  blackBears: number;
  polarBears: number;
  pandaBears: number;
  increaseBlackBear: (by: number) => void;
  increasePolarBear: (by: number) => void;
  increasePandaBears: (by: number) => void;
}

export const useBearStore = create<BearState>((set) => ({
  blackBears: 10,
  polarBears: 5,
  pandaBears: 1,

  increaseBlackBear: (by: number) =>
    set((state) => ({ blackBears: state.blackBears + by })),

  increasePolarBear: (by: number) =>
    set((state) => ({ polarBears: state.polarBears + by })),

  increasePandaBears: (by: number) =>
    set((state) => ({ pandaBears: state.pandaBears + by })),
}));
