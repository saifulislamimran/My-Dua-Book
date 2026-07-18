import { create } from 'zustand';
import { Dua } from '../types';

interface AudioState {
  currentDua: Dua | null;
  isPlaying: boolean;
  progressPercent: number;
  playDua: (dua: Dua) => void;
  togglePlayPause: () => void;
  setProgress: (percent: number) => void;
  closePlayer: () => void;
}

export const useAudioStore = create<AudioState>((set) => ({
  currentDua: null,
  isPlaying: false,
  progressPercent: 0,
  
  playDua: (dua) => set({ 
    currentDua: dua, 
    isPlaying: true, 
    progressPercent: 0 
  }),
  
  togglePlayPause: () => set((state) => ({ 
    isPlaying: state.currentDua ? !state.isPlaying : false 
  })),
  
  setProgress: (percent) => set({ 
    progressPercent: Math.max(0, Math.min(100, percent)) 
  }),
  
  closePlayer: () => set({ 
    currentDua: null, 
    isPlaying: false, 
    progressPercent: 0 
  }),
}));
