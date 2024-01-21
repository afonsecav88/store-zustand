import { create } from 'zustand';

interface Bear {
  id: number;
  name: string;
}

interface BearState {
  blackBears: number;
  polarBears: number;
  pandaBears: number;
  bears: Bear[];

  computed: {
    totalBears: number;
  };

  increaseBlackBear: (by: number) => void;
  increasePolarBear: (by: number) => void;
  increasePandaBears: (by: number) => void;
  doNothing: () => void;
  addBears: () => void;
  clearsBears: () => void;
}

export const useBearStore = create<BearState>((set, get) => ({
  blackBears: 10,
  polarBears: 5,
  pandaBears: 1,

  bears: [
    {
      id: 1,
      name: 'Oso #1',
    },
  ],

  computed: {
    get totalBears(): number {
      return (
        get().blackBears +
        get().pandaBears +
        get().polarBears +
        get().bears.length
      );
    },
  },

  increaseBlackBear: (by: number) =>
    set((state) => ({ blackBears: state.blackBears + by })),

  increasePolarBear: (by: number) =>
    set((state) => ({ polarBears: state.polarBears + by })),

  increasePandaBears: (by: number) =>
    set((state) => ({ pandaBears: state.pandaBears + by })),

  doNothing: () => set((state) => ({ bears: [...state.bears] })),
  addBears: () =>
    set((state) => ({
      bears: [
        ...state.bears,
        { id: state.bears.length + 1, name: `Oso # ${state.bears.length + 1}` },
      ],
    })),
  clearsBears: () => set({ bears: [] }),
}));
