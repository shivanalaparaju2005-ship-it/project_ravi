import React from 'react';
import { Download } from 'lucide-react';

export const ExportView = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-white font-mono uppercase">Data Export</h2>
          <p className="text-slate-400 mt-1 text-sm">Download intelligence reports and raw datasets.</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
          <h3 className="text-lg font-medium text-white mb-2 flex items-center gap-2"><Download className="w-5 h-5 text-cyan-400" /> Export CSV</h3>
          <p className="text-sm text-slate-400 mb-4">Raw dataset for external analysis.</p>
          <button className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg text-sm border border-slate-700 transition-colors">Download CSV</button>
        </div>
        <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
          <h3 className="text-lg font-medium text-white mb-2 flex items-center gap-2"><Download className="w-5 h-5 text-cyan-400" /> Export Excel</h3>
          <p className="text-sm text-slate-400 mb-4">Formatted multi-sheet workbook.</p>
          <button className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg text-sm border border-slate-700 transition-colors">Download Excel</button>
        </div>
      </div>
    </div>
  );
};
