import { type StateCreator, create } from 'zustand';
import { persist } from 'zustand/middleware';
import { customSessionStorage } from '../storages/custom-session-storages.storage';

interface PersonState {
  firstName: string;
  lastName: string;
}

interface Actions {
  setFirstName: (value: string) => void;
  setLastName: (value: string) => void;
}

const storeApi: StateCreator<PersonState & Actions> = (set) => ({
  firstName: '',
  lastName: '',
  setFirstName: (value: string) => set({ firstName: value }),
  setLastName: (value: string) => set({ lastName: value }),
});

export const userPersonStore = create<PersonState & Actions>()(
  persist(storeApi, {
    name: 'person-storage',
    storage: customSessionStorage,
  })
);
