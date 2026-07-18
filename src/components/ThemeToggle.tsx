'use client';

import React from 'react';
import { useTheme } from './ThemeProvider';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button 
      onClick={toggleTheme}
      className="p-2 rounded-full bg-white dark:bg-slate-900 shadow-sm border border-slate-200 dark:border-slate-800 transition-all duration-200 active:scale-95 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-800"
      aria-label="Toggle Theme"
    >
      {theme === 'dark' ? (
        <span className="material-symbols-outlined text-yellow-400">light_mode</span>
      ) : (
        <span className="material-symbols-outlined text-slate-700">dark_mode</span>
      )}
    </button>
  );
}
