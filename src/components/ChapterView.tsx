'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { ThemeToggle } from '@/components/ThemeToggle';
import { useAudioStore } from '@/store/useAudioStore';
import { Chapter } from '@/types';
import { ChevronRight, Search, PlayCircle, PauseCircle } from 'lucide-react';

export function ChapterView({ chapter }: { chapter: Chapter }) {
  const [searchQuery, setSearchQuery] = useState('');
  const { activeTrack, isPlaying, setPlaylist, togglePlayPause } = useAudioStore();

  const filteredDuas = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return chapter.duas;

    return chapter.duas.filter(dua => 
      dua.id.toString().includes(query) ||
      dua.topic.toLowerCase().includes(query) ||
      dua.translation_en.toLowerCase().includes(query) ||
      dua.arabic.includes(searchQuery.trim())
    );
  }, [chapter, searchQuery]);

  const handlePlayClick = (dua: typeof chapter.duas[0], index: number) => {
    if (activeTrack?.id === dua.id) {
      togglePlayPause();
    } else {
      setPlaylist(filteredDuas, index);
    }
  };


  return (
    <div className="bg-surface dark:bg-slate-950 text-gray-800 dark:text-gray-100 transition-colors duration-300 font-body-md min-h-screen pb-32">
      
      {/* Top Navigation Bar */}
      <nav className="max-w-7xl mx-auto px-grid-gutter md:px-xl py-md flex justify-between items-center">
        <div className="flex items-center gap-xs text-brand-maroon dark:text-pink-300 font-label-lg text-label-lg uppercase tracking-wider overflow-hidden">
          <Link href="/" className="opacity-70 whitespace-nowrap hover:underline">Home</Link>
          <ChevronRight size={14} className="text-[14px]" />
          <Link href="/my-dua-book" className="opacity-70 whitespace-nowrap hover:underline">Audio Books</Link>
          <ChevronRight size={14} className="text-[14px]" />
          <Link href="/my-dua-book" className="opacity-70 whitespace-nowrap hover:underline">My Du&apos;a Book</Link>
          <ChevronRight size={14} className="text-[14px] hidden sm:inline" />
          <span className="font-bold whitespace-nowrap hidden sm:inline">{chapter.title}</span>
        </div>
        <ThemeToggle />
      </nav>

      {/* Header Section */}
      <header className="max-w-7xl mx-auto px-grid-gutter md:px-xl py-xl text-center">
        <h1 className="font-headline-lg text-brand-navy dark:text-blue-300 text-[32px] md:text-[48px] font-extrabold tracking-tight">
          {chapter.title}
        </h1>
        <p className="mt-md text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          {chapter.description}
        </p>
      </header>

      {/* Search/Filter Section */}
      <section className="max-w-3xl mx-auto px-grid-gutter mb-xl">
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 pl-md flex items-center pointer-events-none">
            <Search size={24} className="text-gray-400 group-focus-within:text-brand-teal transition-colors" />
          </div>
          <input 
            type="text" 
            placeholder="Search by Du'a number, topic, or content..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="block w-full pl-xl pr-md py-4 bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-brand-teal focus:border-brand-teal outline-none transition-all shadow-sm font-body-lg text-body-lg text-gray-800 dark:text-gray-100"
          />
        </div>
      </section>

      {/* Data Table Content */}
      <main className="max-w-7xl mx-auto px-grid-gutter md:px-xl overflow-hidden">
        <div className="bg-transparent md:bg-white dark:md:bg-slate-900 rounded-2xl border-none md:border md:border-gray-200 dark:md:border-slate-700 overflow-x-hidden md:overflow-x-auto shadow-none md:shadow-sm">
          <table className="w-full text-left border-collapse block md:table" id="dua-table">
            <thead className="hidden md:table-header-group">
              <tr className="bg-brand-navy dark:bg-slate-800 text-white border-b border-gray-200 dark:border-slate-700">
                <th className="px-md py-4 font-label-lg text-label-lg w-12 text-center uppercase">#</th>
                <th className="px-md py-4 font-label-lg text-label-lg w-48 uppercase">Topic</th>
                <th className="px-md py-4 font-label-lg text-label-lg text-right uppercase">Supplication (Arabic)</th>
                <th className="px-md py-4 font-label-lg text-label-lg w-72 uppercase">Translation</th>
                <th className="px-md py-4 font-label-lg text-label-lg w-20 text-center uppercase">Audio</th>
              </tr>
            </thead>
            <tbody className="block md:table-row-group divide-y-0 md:divide-y divide-gray-200 dark:divide-slate-700">
              {filteredDuas.length > 0 ? (
                filteredDuas.map((dua, index) => {
                  const isCurrentDua = activeTrack?.id === dua.id;
                  const isRowPlaying = isCurrentDua && isPlaying;
                  
                  return (
                    <tr 
                      key={dua.id}
                      className={`group transition-colors duration-200 hover:bg-brand-teal/5 dark:hover:bg-brand-teal/10 ${isCurrentDua ? 'bg-brand-teal/10 dark:bg-brand-teal/20' : (index % 2 === 0 ? 'bg-white dark:bg-slate-900' : 'bg-gray-50 dark:bg-slate-800')} flex flex-col md:table-row rounded-xl md:rounded-none border border-gray-200 dark:border-slate-700 md:border-none mb-4 md:mb-0 p-4 md:p-0 gap-4 md:gap-0`}
                    >
                      <td className="hidden md:table-cell px-md py-6 text-gray-500 dark:text-gray-400 font-medium text-center border-r border-gray-100 dark:border-slate-800">
                        {dua.id}
                      </td>
                      <td className="block md:table-cell md:px-md md:py-6 font-bold text-brand-navy dark:text-blue-300 text-lg md:text-base border-b border-gray-100 dark:border-slate-800 md:border-none pb-2 md:pb-0">
                        <span className="md:hidden text-gray-400 mr-2">{dua.id}.</span>
                        {dua.topic}
                      </td>
                      <td className="block md:table-cell md:px-md md:py-6 text-right font-arabic text-4xl md:text-3xl leading-relaxed text-gray-800 dark:text-gray-100 py-4 md:py-0" dir="rtl">
                        {dua.arabic}
                      </td>
                      <td className="block md:table-cell md:px-md md:py-6 font-body-md italic text-gray-600 dark:text-gray-300 leading-relaxed pb-4 md:pb-0">
                        {dua.translation_en}
                      </td>
                      <td className="flex justify-between items-center md:table-cell md:px-md md:py-6 text-center pt-2 md:pt-0 border-t border-gray-100 dark:border-slate-800 md:border-none">
                        <span className="md:hidden text-sm text-gray-500 uppercase tracking-wider font-semibold">Listen</span>
                        <button 
                          onClick={() => handlePlayClick(dua, index)}
                          className="p-3 rounded-full text-brand-teal hover:bg-brand-teal/10 dark:hover:bg-brand-teal/20 transition-colors"
                        >
                          {isRowPlaying ? <PauseCircle size={28} strokeWidth={1.5} /> : <PlayCircle size={28} strokeWidth={1.5} />}
                        </button>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr className="block md:table-row">
                  <td colSpan={5} className="block md:table-cell py-16 text-center text-slate-500 bg-white dark:bg-slate-900 rounded-xl border border-gray-200 dark:border-slate-700 md:border-none">
                    No supplications found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </main>

    </div>
  );
}
