'use client';

import React from 'react';
import { useTheme } from './ThemeProvider';
import { Sun, Moon } from 'lucide-react';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button 
      onClick={toggleTheme}
      className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white dark:bg-slate-900 shadow-sm border border-slate-200 dark:border-slate-800 transition-all duration-300 active:scale-95 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-primary/20"
      aria-label="Toggle Theme"
    >
      <span className="text-sm font-medium hidden sm:block">
        {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
      </span>
      {theme === 'dark' ? (
        <Sun size={18} className="text-amber-400" strokeWidth={2.5} />
      ) : (
        <Moon size={18} className="text-indigo-500" strokeWidth={2.5} />
      )}
    </button>
  );
}
