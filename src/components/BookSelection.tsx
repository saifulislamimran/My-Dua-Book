import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

export function BookSelection() {
  return (
    <div className="bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 transition-colors duration-300 antialiased min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Top Action Bar */}
        <nav className="flex items-center justify-between mb-8 w-full">
          <div className="flex items-center space-x-2 font-semibold text-xs sm:text-sm uppercase tracking-wider text-slate-500 dark:text-slate-400">
            <span className="hover:text-primary transition-colors cursor-pointer">Home</span>
            <ChevronRight size={14} className="text-slate-400" />
            <span className="text-primary font-bold">Audio Books</span>
          </div>
          <ThemeToggle />
        </nav>

        {/* Main Content Area */}
        <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Active Card: My Du'a Book */}
          <div className="flex flex-col bg-white dark:bg-slate-800 p-4 rounded-xl border border-gray-200 dark:border-slate-700 shadow-sm group">
            <div className="book-container aspect-[3/4] mb-6 relative">
              <div className="book-3d h-full w-full">
                <div className="book-side rounded-l-sm"></div>
                <div className="book-front w-full h-full rounded-r-lg overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent pointer-events-none z-10"></div>
                  <Image 
                    alt="My Du'a Book Cover" 
                    className="object-cover" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVv3lH1abXDGKmPVe7gMmPDwZkkzKExpNxYlwmyFLKyDKtbu1phhm22KeYFrZrYC_xaYNni6PNk-N6pNK17sBPCe3nrAbv05nxs9GNp_RPGKzuWJDU5Xxcsy3icyiu7FNRI6h60Y8a2PUn1fghc_UBvOzL-BWsBV-x_Lu9Q9C84gyrkF8ahFb_t6YrJzx7xV-TgnD9O_RbNvyztaKczXPZKT0NM40KuEIUuLF5Nj0T70wibrteO8Nu_mRzDi1o5SauE4uurxJ14v0"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              </div>
            </div>
            <div className="mt-2 flex flex-col h-full">
              <h2 className="font-bold text-2xl mb-1">My Du&apos;a Book</h2>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">Volume I</p>
              <div className="mt-auto">
                <Link href="/chapters" className="block w-full text-center py-3 px-6 bg-primary text-white rounded-lg font-semibold text-lg hover:opacity-90 transition-all duration-300 transform active:scale-95 shadow-sm">
                  Select Book
                </Link>
              </div>
            </div>
          </div>

          {/* Card 2: The Path */}
          <div className="flex flex-col bg-white dark:bg-slate-800 p-4 rounded-xl border border-gray-200 dark:border-slate-700 shadow-sm opacity-90">
            <div className="book-container aspect-[3/4] mb-6 relative overflow-hidden rounded-lg">
              <div className="book-3d h-full w-full">
                <div className="book-side rounded-l-sm"></div>
                <div className="book-front w-full h-full rounded-r-lg overflow-hidden relative">
                  <Image 
                    alt="The Path Book Cover" 
                    className="object-cover blur-[2px]" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-pkkL-RLlmNBGhdNQ3coubR2GPhcUFOhefKT5QN0X66UUpCy9_iW1tI6Gn_IKr-h5-r1qPWiTQZ1GA3byxKA3r9frLTHDq6BWKZI5xQ1PpV72Gsf2R-tnR1EkRTSMUUt2jFunaJccuiqbLgb_iBeGtfAyoOrOtJt3dX2_CtziQuAuJY9avUJlvtvjbU_FNqCRImaYxEoohbB9QeukoklGylLBvHh97diBx-nftXnMpnqap-NbDYQDhstLB3d9xg2QHa03RvJV1Vc"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              </div>
              <div className="coming-soon-overlay absolute inset-0 z-20 flex items-center justify-center">
                <span className="px-6 py-3 bg-white/20 border border-white/30 text-white text-xs font-semibold uppercase tracking-[0.2em] rounded-full backdrop-blur-md">
                  Coming Soon
                </span>
              </div>
            </div>
            <div className="mt-2 flex flex-col h-full">
              <h2 className="font-bold text-2xl text-slate-400 dark:text-slate-500 mb-1">The Path</h2>
              <p className="text-sm text-slate-400 dark:text-slate-600 mb-6">Volume II</p>
              <div className="mt-auto">
                <button className="w-full py-3 px-6 border border-gray-200 dark:border-slate-700 text-slate-400 dark:text-slate-600 rounded-lg font-semibold text-lg cursor-not-allowed bg-slate-50 dark:bg-slate-900/50" disabled>
                  Locked
                </button>
              </div>
            </div>
          </div>

          {/* Card 3: Reflections */}
          <div className="flex flex-col bg-white dark:bg-slate-800 p-4 rounded-xl border border-gray-200 dark:border-slate-700 shadow-sm opacity-90">
            <div className="book-container aspect-[3/4] mb-6 relative overflow-hidden rounded-lg">
              <div className="book-3d h-full w-full">
                <div className="book-side rounded-l-sm"></div>
                <div className="book-front w-full h-full rounded-r-lg overflow-hidden relative">
                  <Image 
                    alt="Reflections Book Cover" 
                    className="object-cover blur-[2px]" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDN8ivbvnIADNqfWKZx-O2Rk5XVNP-pYCkprlzPiUon7QwtTPQX3ZDFmrT9g4l1iW_OgWOyRb9sGIphIZ42eJyhVyzn-We0ab2XOQBmxvWkYKbJau-978D1tJeO6RoL7ky_cWAyn1ZQakxv7lfckXQDTZlKloprvtldqotrIajEZvnTFaTn9pRiPgLU42CGbA8aStZSkP72U8CORttqZInudrH3pHbnyJGutvrBh_Jk8lkjGDU-CtjEx0zia-L-3XLRQ_V_YkmaUBE"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              </div>
              <div className="coming-soon-overlay absolute inset-0 z-20 flex items-center justify-center">
                <span className="px-6 py-3 bg-white/20 border border-white/30 text-white text-xs font-semibold uppercase tracking-[0.2em] rounded-full backdrop-blur-md">
                  Coming Soon
                </span>
              </div>
            </div>
            <div className="mt-2 flex flex-col h-full">
              <h2 className="font-bold text-2xl text-slate-400 dark:text-slate-500 mb-1">Reflections</h2>
              <p className="text-sm text-slate-400 dark:text-slate-600 mb-6">Volume III</p>
              <div className="mt-auto">
                <button className="w-full py-3 px-6 border border-gray-200 dark:border-slate-700 text-slate-400 dark:text-slate-600 rounded-lg font-semibold text-lg cursor-not-allowed bg-slate-50 dark:bg-slate-900/50" disabled>
                  Locked
                </button>
              </div>
            </div>
          </div>

        </main>

        {/* Footer */}
        <footer className="mt-12 pt-6 border-t border-gray-200 dark:border-slate-700 flex flex-col sm:flex-row justify-between items-center text-sm text-slate-500 dark:text-slate-400 gap-4">
          <p>© 2024 Book Gallery. All Rights Reserved.</p>
          <div className="flex gap-4">
            <span className="hover:text-primary cursor-pointer transition-colors">Help Center</span>
            <span className="hover:text-primary cursor-pointer transition-colors">Privacy</span>
          </div>
        </footer>
      </div>
    </div>
  );
}
