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
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-gray-200 dark:border-slate-700 overflow-x-auto shadow-sm">
          <table className="w-full text-left border-collapse" id="dua-table">
            <thead>
              <tr className="bg-brand-navy dark:bg-slate-800 text-white border-b border-gray-200 dark:border-slate-700">
                <th className="px-4 py-4 font-label-lg text-label-lg w-12 text-center uppercase">#</th>
                <th className="px-4 py-4 font-label-lg text-label-lg w-48 uppercase">Topic</th>
                <th className="px-4 py-4 font-label-lg text-label-lg text-right uppercase">Supplication (Arabic)</th>
                <th className="px-4 py-4 font-label-lg text-label-lg w-72 uppercase">Translation</th>
                <th className="px-4 py-4 font-label-lg text-label-lg w-20 text-center uppercase">Audio</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-slate-700">
              {filteredDuas.length > 0 ? (
                filteredDuas.map((dua, index) => {
                  const isCurrentDua = currentDua?.serial === dua.serial;
                  const isRowPlaying = isCurrentDua && isPlaying;
                  
                  return (
                    <tr 
                      key={dua.serial}
                      className={`transition-colors duration-200 ${isCurrentDua ? 'bg-brand-teal/10 dark:bg-brand-teal/20' : (index % 2 === 0 ? 'bg-white dark:bg-slate-900' : 'bg-gray-50 dark:bg-slate-800')}`}
                    >
                      <td className="px-4 py-6 text-gray-500 dark:text-gray-400 font-medium text-center border-r border-gray-100 dark:border-slate-800">
                        {dua.serial}
                      </td>
                      <td className="px-4 py-6 font-bold text-brand-navy dark:text-blue-300">
                        {dua.topic}
                      </td>
                      <td className="px-4 py-6 text-right font-arabic text-3xl leading-relaxed text-gray-800 dark:text-gray-100" dir="rtl">
                        {dua.arabic}
                      </td>
                      <td className="px-4 py-6 font-body-md italic text-gray-600 dark:text-gray-300 leading-relaxed">
                        {dua.english}
                      </td>
                      <td className="px-4 py-6 text-center">
                        <button 
                          onClick={() => handlePlayClick(dua)}
                          className="p-3 rounded-full text-brand-teal hover:bg-brand-teal/10 dark:hover:bg-brand-teal/20 transition-colors"
                        >
                          {isRowPlaying ? <PauseCircle size={28} strokeWidth={1.5} /> : <PlayCircle size={28} strokeWidth={1.5} />}
                        </button>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan={5} className="py-16 text-center text-slate-500">
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
