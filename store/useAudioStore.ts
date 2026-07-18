import { create } from 'zustand';

interface AudioState {
  currentTrackId: string | null;
  isPlaying: boolean;
  progressPercent: number;
  playDua: (trackId: string) => void;
  togglePlayPause: () => void;
  setProgress: (percent: number) => void;
  closePlayer: () => void;
}

export const useAudioStore = create<AudioState>((set) => ({
  currentTrackId: null,
  isPlaying: false,
  progressPercent: 0,
  
  playDua: (trackId) => set({ 
    currentTrackId: trackId, 
    isPlaying: true, 
    progressPercent: 0 
  }),
  
  togglePlayPause: () => set((state) => ({ 
    isPlaying: state.currentTrackId ? !state.isPlaying : false 
  })),
  
  setProgress: (percent) => set({ 
    progressPercent: Math.max(0, Math.min(100, percent)) 
  }),
  
  closePlayer: () => set({ 
    currentTrackId: null, 
    isPlaying: false, 
    progressPercent: 0 
  }),
}));
