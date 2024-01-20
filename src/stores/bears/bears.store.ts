import { create } from 'zustand';

interface BearState {
  blackBears: number;
  polarBears: number;
  pandaBears: number;
  increaseBlackBear: (by: number) => void;
}

export const useBearStore = create<BearState>((set) => ({
  blackBears: 10,
  polarBears: 5,
  pandaBears: 1,
  increaseBlackBear: (by: number) =>
    set((state) => ({ blackBears: state.blackBears + by })),
}));
