'use client';

import React, { useEffect, useRef } from 'react';
import { Howl } from 'howler';
import { useAudioStore } from '@/store/useAudioStore';

export function AudioPlayer() {
  const { 
    currentDua, 
    isPlaying, 
    progressPercent, 
    setProgress, 
    togglePlayPause, 
    closePlayer 
  } = useAudioStore();
  
  const howlRef = useRef<Howl | null>(null);
  const progressInterval = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // When currentDua changes, load the new audio
    if (howlRef.current) {
      howlRef.current.unload();
      howlRef.current = null;
    }

    if (currentDua?.audio_path) {
      howlRef.current = new Howl({
        src: [currentDua.audio_path],
        html5: true, // Force HTML5 audio to allow streaming and avoid CORS issues
        onend: () => {
          // You could dispatch an action here to go to next track if desired
          togglePlayPause();
          setProgress(0);
        }
      });
      // Start playing automatically when a new dua is selected
      if (isPlaying) {
        howlRef.current.play();
      }
    }

    return () => {
      if (howlRef.current) {
        howlRef.current.unload();
      }
    };
  }, [currentDua]);

  // Handle play/pause state changes
  useEffect(() => {
    if (!howlRef.current) return;

    if (isPlaying) {
      if (!howlRef.current.playing()) {
        howlRef.current.play();
      }
      
      // Update progress
      progressInterval.current = setInterval(() => {
        if (howlRef.current && howlRef.current.playing()) {
          const seek = howlRef.current.seek() as number;
          const duration = howlRef.current.duration();
          if (duration > 0) {
            setProgress((seek / duration) * 100);
          }
        }
      }, 250);
    } else {
      howlRef.current.pause();
      if (progressInterval.current) {
        clearInterval(progressInterval.current);
      }
    }

    return () => {
      if (progressInterval.current) {
        clearInterval(progressInterval.current);
      }
    };
  }, [isPlaying, setProgress]);

  if (!currentDua) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 transform transition-transform duration-500 ease-out" style={{
      background: 'rgba(255, 255, 255, 0.85)',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      borderTop: '1px solid rgba(0, 0, 0, 0.1)'
    }}>
      <div className="dark:bg-slate-900/90 dark:border-white/10 w-full h-full absolute inset-0 -z-10 transition-colors"></div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex flex-col md:flex-row items-center gap-4 relative">
        {/* Progress Bar Overlay */}
        <div 
          className="absolute top-0 left-0 w-full h-1 bg-gray-200/30 dark:bg-slate-700/30 overflow-hidden cursor-pointer"
          onClick={(e) => {
            if (howlRef.current) {
              const rect = e.currentTarget.getBoundingClientRect();
              const x = e.clientX - rect.left;
              const percent = x / rect.width;
              const duration = howlRef.current.duration();
              howlRef.current.seek(duration * percent);
              setProgress(percent * 100);
            }
          }}
        >
          <div 
            className="h-full bg-[#61C9A8] shadow-[0_0_8px_rgba(97,201,168,0.6)] transition-all duration-100 ease-linear" 
            style={{ width: `${progressPercent}%` }}
          ></div>
        </div>

        {/* Metadata */}
        <div className="flex items-center gap-4 flex-1 w-full md:w-auto mt-1">
          <div className="w-12 h-12 bg-[#61C9A8]/20 rounded-lg flex items-center justify-center text-[#61C9A8]">
            <span className="material-symbols-outlined">graphic_eq</span>
          </div>
          <div className="overflow-hidden">
            <h4 className="font-bold text-[#1E3A8A] dark:text-blue-300 truncate">{currentDua.topic}</h4>
            <p className="text-xs text-gray-600 dark:text-gray-400">Track {currentDua.serial}</p>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-6">
          <button className="text-gray-600 dark:text-gray-300 hover:text-[#1E3A8A] dark:hover:text-white transition-colors">
            <span className="material-symbols-outlined">skip_previous</span>
          </button>
          
          <button 
            onClick={togglePlayPause}
            className="w-14 h-14 rounded-full bg-[#61C9A8] text-white flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-all"
          >
            <span className="material-symbols-outlined text-[32px]">{isPlaying ? 'pause' : 'play_arrow'}</span>
          </button>
          
          <button className="text-gray-600 dark:text-gray-300 hover:text-[#1E3A8A] dark:hover:text-white transition-colors">
            <span className="material-symbols-outlined">skip_next</span>
          </button>
        </div>

        {/* Info and Volume */}
        <div className="hidden md:flex flex-1 justify-end items-center gap-4">
          <button className="text-gray-600 dark:text-gray-300 hover:text-[#1E3A8A] dark:hover:text-white transition-colors">
            <span className="material-symbols-outlined">volume_up</span>
          </button>
          <button 
            onClick={closePlayer}
            className="ml-2 text-gray-400 hover:text-red-500 transition-colors"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
      </div>
    </div>
  );
}
