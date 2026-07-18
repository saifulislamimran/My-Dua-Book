'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { ThemeToggle } from '@/components/ThemeToggle';
import { useAudioStore } from '@/store/useAudioStore';
import { Chapter } from '@/types';

export function ChapterView({ chapter }: { chapter: Chapter }) {
  const [searchQuery, setSearchQuery] = useState('');
  
  const { currentDua, isPlaying, playDua, togglePlayPause } = useAudioStore();

  const filteredDuas = useMemo(() => {
    return chapter.duas.filter(dua => 
      dua.topic.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dua.english.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dua.arabic.includes(searchQuery)
    );
  }, [chapter, searchQuery]);

  const handlePlayClick = (dua: typeof chapter.duas[0]) => {
    if (currentDua?.serial === dua.serial) {
      togglePlayPause();
    } else {
      playDua(dua);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300 pb-32">
      
      {/* Header Section */}
      <header className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 sticky top-0 z-30 transition-colors">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
          <div className="flex justify-between items-center mb-6">
            <nav className="flex items-center space-x-2 text-primary dark:text-[#cfaab7] overflow-x-auto whitespace-nowrap">
              <Link className="text-sm font-medium hover:underline opacity-80" href="/">Home</Link>
              <span className="material-symbols-outlined text-[16px] opacity-40">chevron_right</span>
              <Link className="text-sm font-medium hover:underline opacity-80" href="/chapters">My Du'a Book</Link>
              <span className="material-symbols-outlined text-[16px] opacity-40">chevron_right</span>
              <span className="text-sm font-bold text-primary dark:text-slate-100">{chapter.title.split('.')[0]}</span>
            </nav>
            <ThemeToggle />
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-2 tracking-tight">{chapter.title}</h1>
              <p className="text-slate-600 dark:text-slate-400">{chapter.description}</p>
            </div>
            
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors font-medium text-sm">
                <span className="material-symbols-outlined text-[20px]">file_download</span>
                Download PDF
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 md:px-8 mt-8">
        
        {/* Search */}
        <div className="mb-8">
          <div className="relative group rounded-xl overflow-hidden max-w-md">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#006b54] transition-colors z-10">search</span>
            <input 
              type="text" 
              placeholder="Search supplications..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm focus:ring-2 focus:ring-[#006b54]/20 focus:border-[#006b54] outline-none transition-all text-slate-900 dark:text-slate-100"
            />
          </div>
        </div>

        {/* Duas Table */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm transition-colors">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50">
                  <th className="py-4 px-6 font-semibold text-slate-600 dark:text-slate-400 w-16 text-center">#</th>
                  <th className="py-4 px-6 font-semibold text-slate-600 dark:text-slate-400 w-48 md:w-64">Topic</th>
                  <th className="py-4 px-6 font-semibold text-slate-600 dark:text-slate-400 text-right md:text-center">Arabic & English</th>
                  <th className="py-4 px-6 font-semibold text-slate-600 dark:text-slate-400 text-center w-24">Audio</th>
                </tr>
              </thead>
              <tbody>
                {filteredDuas.length > 0 ? (
                  filteredDuas.map((dua) => {
                    const isCurrentDua = currentDua?.serial === dua.serial;
                    const isRowPlaying = isCurrentDua && isPlaying;
                    
                    return (
                      <tr 
                        key={dua.serial}
                        className={`border-b border-slate-100 dark:border-slate-800 hover:bg-slate-50/80 dark:hover:bg-slate-800/50 transition-colors ${isCurrentDua ? 'bg-[#006b54]/5 dark:bg-[#006b54]/10' : ''}`}
                      >
                        <td className="py-8 px-6 text-slate-500 dark:text-slate-400 align-top text-center font-medium">
                          {dua.serial}
                        </td>
                        <td className="py-8 px-6 font-medium text-[#1E3A8A] dark:text-blue-300 align-top">
                          {dua.topic}
                        </td>
                        <td className="py-8 px-6">
                          <div className="mb-6 flex justify-end">
                            <p className="font-amiri text-3xl md:text-4xl leading-loose text-right text-primary dark:text-white" dir="rtl">
                              {dua.arabic}
                            </p>
                          </div>
                          <div>
                            <p className="text-slate-600 dark:text-slate-300 leading-relaxed md:text-lg">
                              {dua.english}
                            </p>
                          </div>
                        </td>
                        <td className="py-8 px-6 align-top">
                          <div className="flex justify-center mt-2">
                            <button 
                              onClick={() => handlePlayClick(dua)}
                              className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all shadow-sm ${
                                isCurrentDua 
                                  ? 'bg-[#006b54] border-[#006b54] text-white'
                                  : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-[#006b54] hover:bg-[#006b54] hover:text-white hover:border-[#006b54]'
                              }`}
                            >
                              <span className="material-symbols-outlined text-[24px]">
                                {isRowPlaying ? 'pause' : 'play_arrow'}
                              </span>
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td colSpan={4} className="py-16 text-center text-slate-500">
                      No supplications found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

      </main>
    </div>
  );
}
