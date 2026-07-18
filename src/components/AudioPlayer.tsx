'use client';

import React, { useEffect, useRef } from 'react';
import { Howl } from 'howler';
import { useAudioStore } from '@/store/useAudioStore';
import { AudioLines, SkipBack, Play, Pause, SkipForward, Volume2, VolumeX, X, Repeat, Repeat1 } from 'lucide-react';

export function AudioPlayer() {
  const { 
    activeTrack, 
    isPlaying, 
    progressPercent, 
    volume,
    loopMode,
    setProgress, 
    togglePlayPause, 
    setVolume,
    toggleMute,
    closePlayer,
    playNext,
    playPrev,
    toggleLoopMode
  } = useAudioStore();
  
  const howlRef = useRef<Howl | null>(null);
  const progressInterval = useRef<NodeJS.Timeout | null>(null);

  // Keep a ref to avoid stale closures in Howler callbacks without recreating Howl instance
  const storeRef = useRef({ loopMode, playNext, setProgress, togglePlayPause });
  useEffect(() => {
    storeRef.current = { loopMode, playNext, setProgress, togglePlayPause };
  }, [loopMode, playNext, setProgress, togglePlayPause]);

  // Sync volume with Howler when state changes
  useEffect(() => {
    if (howlRef.current) {
      howlRef.current.volume(volume);
    }
  }, [volume]);

  useEffect(() => {
    if (howlRef.current) {
      howlRef.current.unload();
      howlRef.current = null;
    }

    if (activeTrack?.audio_path) {
      howlRef.current = new Howl({
        src: [activeTrack.audio_path],
        html5: true, // Force HTML5 audio to allow streaming and avoid CORS issues
        volume: volume,
        onend: () => {
          const { loopMode, playNext, setProgress } = storeRef.current;
          setProgress(0);
          if (loopMode === 'one') {
            howlRef.current?.play();
          } else {
            playNext();
          }
        }
      });
      
      // Start playing automatically when a new track is selected
      if (isPlaying) {
        howlRef.current.play();
      }
    }

    return () => {
      if (howlRef.current) {
        howlRef.current.unload();
      }
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTrack]); 

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

  const handleClose = () => {
    if (howlRef.current) {
      howlRef.current.stop();
    }
    closePlayer();
  };

  if (!activeTrack) {
    return null;
  }

  return (
    <div 
      className="fixed bottom-4 md:bottom-6 left-1/2 transform -translate-x-1/2 w-[95%] max-w-3xl z-50 pb-safe rounded-2xl shadow-2xl border border-black/10 dark:border-white/10 overflow-hidden transition-all duration-500 ease-out" 
      style={{
        background: 'rgba(255, 255, 255, 0.85)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
      }}
    >
      <div className="dark:bg-slate-900/90 w-full h-full absolute inset-0 -z-10 transition-colors"></div>
      
      <div className="px-4 md:px-6 py-3 flex flex-wrap md:flex-nowrap items-center justify-between gap-4 md:gap-6 relative">
        {/* Progress Bar Overlay */}
        <div 
          className="absolute top-0 left-0 w-full h-1 bg-gray-200/30 dark:bg-slate-700/30 overflow-hidden cursor-pointer group"
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
            className="h-full bg-brand-teal shadow-[0_0_8px_rgba(97,201,168,0.6)] transition-all duration-100 ease-linear group-hover:h-1.5" 
            style={{ width: `${progressPercent}%` }}
          ></div>
        </div>

        {/* Metadata (Left) */}
        <div className="flex items-center gap-4 w-full md:w-auto flex-1 mt-1">
          <div className="w-12 h-12 bg-brand-teal/20 rounded-lg flex items-center justify-center text-brand-teal flex-shrink-0">
            <AudioLines size={24} />
          </div>
          <div className="overflow-hidden min-w-0">
            <h4 className="font-bold text-brand-navy dark:text-blue-300 truncate">{activeTrack.topic}</h4>
            <p className="text-xs text-gray-600 dark:text-gray-400">Track {activeTrack.serial}</p>
          </div>
        </div>

        {/* Playback Controls (Center) */}
        <div className="flex items-center justify-center gap-4 md:gap-6 w-full md:w-auto order-last md:order-none pb-2 md:pb-0 pt-2 md:pt-0 border-t border-gray-200/50 dark:border-slate-700/50 md:border-none">
          <button 
            onClick={playPrev}
            className="text-gray-600 dark:text-gray-300 hover:text-brand-navy dark:hover:text-white transition-colors"
          >
            <SkipBack size={24} />
          </button>
          
          <button 
            onClick={togglePlayPause}
            className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-brand-teal text-white flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-all"
          >
            {isPlaying ? <Pause size={24} className="fill-current" /> : <Play size={24} className="fill-current ml-1" />}
          </button>
          
          <button 
            onClick={playNext}
            className="text-gray-600 dark:text-gray-300 hover:text-brand-navy dark:hover:text-white transition-colors"
          >
            <SkipForward size={24} />
          </button>
        </div>

        {/* Info, Volume, Loop, Close (Right) */}
        <div className="flex items-center justify-end w-auto gap-3 md:gap-4 mt-1 md:mt-0">
          
          {/* Loop Mode Toggle */}
          <button 
            onClick={toggleLoopMode}
            className={`transition-colors ${loopMode !== 'none' ? 'text-brand-teal' : 'text-gray-500 dark:text-gray-400 hover:text-brand-navy dark:hover:text-white'}`}
            title={`Loop Mode: ${loopMode}`}
          >
            {loopMode === 'one' ? <Repeat1 size={20} /> : <Repeat size={20} />}
          </button>

          {/* Volume Control */}
          <div className="flex items-center gap-2">
            <button 
              onClick={toggleMute}
              className="text-gray-600 dark:text-gray-300 hover:text-brand-navy dark:hover:text-white transition-colors"
              aria-label="Toggle Mute"
            >
              {volume === 0 ? <VolumeX size={20} /> : <Volume2 size={20} />}
            </button>
            <input 
              type="range" 
              min="0" 
              max="1" 
              step="0.01" 
              value={volume}
              onChange={(e) => setVolume(parseFloat(e.target.value))}
              className="hidden md:block w-16 md:w-20 h-1.5 bg-gray-300 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 accent-brand-teal"
              aria-label="Volume"
            />
          </div>

          <div className="hidden md:block w-px h-6 bg-gray-300 dark:bg-gray-700 mx-1"></div>

          <button 
            onClick={handleClose}
            className="p-2 -mr-2 md:-mr-0 text-gray-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-950/30 transition-all rounded-full bg-gray-100 dark:bg-slate-800 md:bg-transparent md:dark:bg-transparent flex-shrink-0"
            aria-label="Close Player"
          >
            <X size={22} />
          </button>

        </div>
      </div>
    </div>
  );
}
