'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Chapter } from '@/types';
import { ChevronRight, Search, BookOpen, SearchX } from 'lucide-react';

export function ChapterList({ chapters }: { chapters: Chapter[] }) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredChapters = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return chapters;

    return chapters.filter(chapter => 
      chapter.title.toLowerCase().includes(query) ||
      chapter.description.toLowerCase().includes(query) ||
      (chapter.duas && chapter.duas.some(dua => dua.id.toString().includes(query)))
    );
  }, [searchQuery, chapters]);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 transition-colors duration-300 text-slate-900 dark:text-slate-100">
      <header className="max-w-7xl mx-auto pt-xl px-grid-gutter md:px-xl w-full">
        <div className="flex justify-between items-center mb-md">
          <nav className="flex items-center space-x-2 text-primary dark:text-on-primary-container overflow-x-auto whitespace-nowrap py-xs">
            <Link className="text-sm font-medium hover:underline opacity-80" href="/">Home</Link>
            <ChevronRight size={16} className="text-[16px] opacity-40 text-slate-500" />
            <span className="text-sm font-medium hover:underline opacity-80 cursor-pointer">Audio Books</span>
            <ChevronRight size={16} className="text-[16px] opacity-40 text-slate-500" />
            <span className="text-sm font-bold text-primary dark:text-slate-100">My Du&apos;a Book</span>
          </nav>
          <ThemeToggle />
        </div>

        <div className="mb-xl max-w-2xl">
          <div className="relative group rounded-full overflow-hidden">
            <Search size={24} className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-secondary transition-colors z-10" />
            <input 
              type="text" 
              placeholder="Search chapters by title, description, or Du'a number..." 
              className="w-full pl-14 pr-6 py-4 bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-full shadow-sm focus:ring-4 focus:ring-secondary/20 focus:border-secondary outline-none transition-all text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="mb-xl text-left">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2 tracking-tight">Chapters</h1>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl text-lg">
            Explore the sacred collection of supplications in <span className="font-semibold italic">My Du&apos;a Book</span>. Selected authentically for your daily spiritual journey.
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-grid-gutter md:px-xl pb-xl w-full flex-grow">
        {filteredChapters.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredChapters.map((chapter) => (
              <Link key={chapter.id} href={`/my-dua-book/${chapter.slug}`} className="bg-white dark:bg-slate-900 p-lg rounded-xl border border-slate-200 dark:border-slate-800 flex items-start gap-md group shadow-sm hover:shadow-lg dark:hover:shadow-black/40 transition-all duration-250 ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-[2px]">
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary-container/10 dark:bg-primary-container/30 flex items-center justify-center text-primary dark:text-on-primary-container font-bold text-xl group-hover:scale-110 transition-transform border border-primary-container/20 dark:border-primary-container/50">
                    {chapter.id}
                  </div>
                  <BookOpen size={20} className="text-primary/30 dark:text-on-primary-container/30 mt-3 text-xl" />
                </div>
                <div className="flex-grow pt-1">
                  <div className="flex justify-between items-start mb-1">
                    <h2 className="text-lg font-bold text-slate-900 dark:text-slate-100 group-hover:text-secondary dark:group-hover:text-secondary-container transition-colors leading-tight">{chapter.title}</h2>
                    <ChevronRight size={20} className="text-secondary opacity-0 group-hover:opacity-100 transition-all text-xl -mr-1" />
                  </div>
                  <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed">
                    {chapter.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <SearchX size={60} className="mx-auto text-slate-300 dark:text-slate-800 mb-4" strokeWidth={1.5} />
            <p className="text-slate-500 text-lg">No chapters found matching &quot;{searchQuery}&quot;</p>
          </div>
        )}
      </main>

      <footer className="max-w-7xl mx-auto py-xl px-grid-gutter md:px-xl w-full flex flex-col md:flex-row justify-between items-center gap-md border-t border-slate-200 dark:border-slate-800 mt-auto transition-colors">
        <div className="text-xl font-bold text-slate-900 dark:text-slate-100">My Du&apos;a Book</div>
        <div className="flex gap-lg">
          <span className="text-sm text-slate-500 dark:text-slate-400 hover:text-secondary transition-colors cursor-pointer">Privacy Policy</span>
          <span className="text-sm text-slate-500 dark:text-slate-400 hover:text-secondary transition-colors cursor-pointer">Contact</span>
        </div>
        <div className="text-sm text-slate-400 dark:text-slate-600">
          © 2024 My Du&apos;a Book. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
