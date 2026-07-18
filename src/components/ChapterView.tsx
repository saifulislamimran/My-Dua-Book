'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { ThemeToggle } from '@/components/ThemeToggle';
import { useAudioStore } from '@/store/useAudioStore';
import { Chapter } from '@/types';
import { ChevronRight, Download, Search, PlayCircle, PauseCircle } from 'lucide-react';

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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center mb-6">
            <nav className="flex items-center space-x-2 text-primary dark:text-[#cfaab7] overflow-x-auto whitespace-nowrap">
              <Link className="text-sm font-medium hover:underline opacity-80" href="/">Home</Link>
              <ChevronRight size={16} className="text-gray-500" />
              <Link className="text-sm font-medium hover:underline opacity-80" href="/chapters">My Du&apos;a Book</Link>
              <ChevronRight size={16} className="text-gray-500" />
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
                <Download size={18} />
                Download PDF
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        
        {/* Search */}
        <div className="mb-8">
          <div className="relative group rounded-xl overflow-hidden max-w-md">
            <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#006b54] transition-colors z-10" />
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
                <tr className="border-b border-gray-200 dark:border-slate-800 bg-transparent">
                  <th className="py-4 px-6 text-gray-500 uppercase text-sm tracking-wider w-[5%] text-left">#</th>
                  <th className="py-4 px-6 text-gray-500 uppercase text-sm tracking-wider w-[20%] text-left">Topic</th>
                  <th className="py-4 px-6 text-gray-500 uppercase text-sm tracking-wider w-[65%] text-left">Arabic & English</th>
                  <th className="py-4 px-6 text-gray-500 uppercase text-sm tracking-wider w-[10%] text-right">Audio</th>
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
                        <td className="py-8 px-6 text-gray-500 dark:text-gray-400 align-top text-left font-medium w-[5%]">
                          {dua.serial}
                        </td>
                        <td className="py-8 px-6 font-medium text-[#1E3A8A] dark:text-blue-300 align-top text-left w-[20%]">
                          {dua.topic}
                        </td>
                        <td className="py-8 px-6 w-[65%]">
                          <div className="flex flex-col gap-4">
                            <div className="flex justify-end w-full">
                              <p className="font-amiri font-bold text-3xl md:text-4xl leading-relaxed text-right text-primary dark:text-white" dir="rtl">
                                {dua.arabic}
                              </p>
                            </div>
                            <div className="w-full">
                              <p className="text-gray-600 dark:text-gray-300 leading-relaxed md:text-lg text-left">
                                {dua.english}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="py-8 px-6 align-top text-right w-[10%]">
                          <div className="flex justify-end mt-2">
                            <button 
                              onClick={() => handlePlayClick(dua)}
                              className="text-teal-600 hover:text-teal-700 dark:text-teal-500 dark:hover:text-teal-400 transition-colors"
                            >
                              {isRowPlaying ? <PauseCircle size={32} strokeWidth={1.5} /> : <PlayCircle size={32} strokeWidth={1.5} />}
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
