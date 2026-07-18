'use client';

import { useEffect } from 'react';
import { AlertTriangle, RefreshCcw } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col items-center justify-center p-4">
      <div className="bg-white dark:bg-slate-900 border border-red-200 dark:border-red-900 rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
        <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-full flex items-center justify-center mx-auto mb-6">
          <AlertTriangle size={32} />
        </div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">Something went wrong!</h2>
        <p className="text-slate-500 dark:text-slate-400 mb-8">
          We encountered an unexpected error while trying to load this chapter.
        </p>
        <button
          onClick={reset}
          className="flex items-center justify-center gap-2 w-full py-3 bg-brand-teal text-white rounded-xl hover:bg-teal-600 transition-colors font-medium"
        >
          <RefreshCcw size={18} />
          Try again
        </button>
      </div>
    </div>
  );
}
