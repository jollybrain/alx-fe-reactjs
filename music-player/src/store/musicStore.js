import { create } from 'zustand';

export const useMusicStore = create((set) => ({
  tracks: [],
  setTracks: (tracks) => set(() => ({ tracks })),
}));
