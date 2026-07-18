'use client';

import { Sun, Moon } from 'lucide-react';

export function ThemeToggle() {
  const toggleTheme = () => {
    const htmlElement = document.documentElement;
    htmlElement.classList.toggle('dark');
    const isNowDark = htmlElement.classList.contains('dark');
    localStorage.setItem('theme', isNowDark ? 'dark' : 'light');
  };

  return (
    <button 
      onClick={toggleTheme}
      className="p-base rounded-full hover:bg-white dark:hover:bg-slate-800 transition-all duration-300 flex items-center justify-center border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-sm w-[38px] h-[38px]"
      aria-label="Toggle theme"
    >
      <span className="block dark:hidden">
        <Sun size={20} className="text-primary" />
      </span>
      <span className="hidden dark:block">
        <Moon size={20} className="text-[#cfaab7]" />
      </span>
    </button>
  );
}
