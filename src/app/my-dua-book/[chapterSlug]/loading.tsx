import { Loader2 } from 'lucide-react';

export default function Loading() {
  return (
    <div className="min-h-screen bg-surface dark:bg-slate-950 flex flex-col items-center justify-center p-4">
      <div className="flex flex-col items-center gap-4 text-brand-teal">
        <Loader2 size={48} className="animate-spin" />
        <h2 className="text-xl font-medium text-slate-700 dark:text-slate-300">Loading Chapter...</h2>
      </div>
    </div>
  );
}
