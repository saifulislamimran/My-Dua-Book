/**
 * =========================================================================
 * AUDIO INPUT GUIDE FOR LOCAL MP3 FILES
 * =========================================================================
 * 
 * To make the audio work, you need to create the exact folder structure
 * inside the standard Next.js 'public' directory and drop your .mp3 files there.
 * 
 * Folder Structure:
 * 1. Open the 'public' folder at the root of your project.
 * 2. Create a folder named 'audio' inside 'public' -> 'public/audio/'
 * 3. Inside 'audio', create folders for each chapter slug based on duaBook.ts:
 *    - 'public/audio/chapter-a/'
 *    - 'public/audio/chapter-b/'
 *    ...etc
 * 
 * File Naming:
 * Drop your .mp3 files inside their respective chapter folders.
 * Make sure the file names match the 'audioSrc' paths in data/duaBook.ts exactly!
 * 
 * Example:
 * If data/duaBook.ts has: audioSrc: "/audio/chapter-a/01.mp3"
 * Your file MUST be placed at: public/audio/chapter-a/01.mp3
 * 
 * Once placed, Next.js will automatically serve these files and Howler.js 
 * will stream them perfectly without any extra configuration.
 * =========================================================================
 */

import { create } from 'zustand';
import { Dua } from '../types';

type LoopMode = 'none' | 'all' | 'one';

interface AudioState {
  activeTrack: Dua | null;
  isPlaying: boolean;
  progressPercent: number;
  volume: number;
  previousVolume: number;
  
  playlist: Dua[];
  currentIndex: number;
  loopMode: LoopMode;

  playDua: (dua: Dua) => void;
  setPlaylist: (duas: Dua[], startIndex: number) => void;
  playNext: () => void;
  playPrev: () => void;
  toggleLoopMode: () => void;

  togglePlayPause: () => void;
  setProgress: (percent: number) => void;
  setVolume: (volume: number) => void;
  toggleMute: () => void;
  closePlayer: () => void;
}

export const useAudioStore = create<AudioState>((set, get) => ({
  activeTrack: null,
  isPlaying: false,
  progressPercent: 0,
  volume: 1.0,
  previousVolume: 1.0,
  
  playlist: [],
  currentIndex: -1,
  loopMode: 'none',
  
  playDua: (dua) => set({ 
    activeTrack: dua, 
    isPlaying: true, 
    progressPercent: 0 
  }),

  setPlaylist: (duas, startIndex) => {
    if (duas.length === 0) return;
    const index = Math.max(0, Math.min(startIndex, duas.length - 1));
    set({
      playlist: duas,
      currentIndex: index,
      activeTrack: duas[index],
      isPlaying: true,
      progressPercent: 0
    });
  },

  playNext: () => {
    const { playlist, currentIndex, loopMode } = get();
    if (playlist.length === 0) return;

    if (currentIndex < playlist.length - 1) {
      set({
        currentIndex: currentIndex + 1,
        activeTrack: playlist[currentIndex + 1],
        isPlaying: true,
        progressPercent: 0
      });
    } else if (loopMode === 'all') {
      set({
        currentIndex: 0,
        activeTrack: playlist[0],
        isPlaying: true,
        progressPercent: 0
      });
    } else {
      // Reached the end, no loop
      set({ isPlaying: false, progressPercent: 0 });
    }
  },

  playPrev: () => {
    const { playlist, currentIndex } = get();
    if (playlist.length === 0) return;

    if (currentIndex > 0) {
      set({
        currentIndex: currentIndex - 1,
        activeTrack: playlist[currentIndex - 1],
        isPlaying: true,
        progressPercent: 0
      });
    } else {
      // Stay on first track, replay from beginning
      set({
        currentIndex: 0,
        activeTrack: playlist[0],
        isPlaying: true,
        progressPercent: 0
      });
    }
  },

  toggleLoopMode: () => {
    const modes: LoopMode[] = ['none', 'all', 'one'];
    const currentMode = get().loopMode;
    const nextMode = modes[(modes.indexOf(currentMode) + 1) % modes.length];
    set({ loopMode: nextMode });
  },
  
  togglePlayPause: () => set((state) => ({ 
    isPlaying: state.activeTrack ? !state.isPlaying : false 
  })),
  
  setProgress: (percent) => set({ 
    progressPercent: Math.max(0, Math.min(100, percent)) 
  }),

  setVolume: (volume) => set({
    volume: Math.max(0, Math.min(1, volume))
  }),

  toggleMute: () => set((state) => {
    if (state.volume > 0) {
      return { volume: 0, previousVolume: state.volume };
    } else {
      return { volume: state.previousVolume > 0 ? state.previousVolume : 1.0 };
    }
  }),
  
  closePlayer: () => set({ 
    activeTrack: null, 
    isPlaying: false, 
    progressPercent: 0,
    playlist: [],
    currentIndex: -1
  }),
}));
