'use client';

import React from 'react';
import { Users, Lock, ShieldAlert, Sparkles, Key, ExternalLink } from 'lucide-react';

interface AudienceAnalysisProps {
  isOwnerConnected: boolean;
}

export const AudienceAnalysis: React.FC<AudienceAnalysisProps> = ({ isOwnerConnected }) => {
  if (!isOwnerConnected) {
    return (
      <div className="bg-[#0D121D] border border-amber-500/30 rounded-2xl p-8 md:p-12 text-center max-w-3xl mx-auto my-6 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl -z-10" />

        <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-amber-500/10">
          <Lock className="w-8 h-8" />
        </div>

        <h2 className="text-xl font-bold text-white font-mono uppercase tracking-tight">
          Audience & Engagement Intelligence Locked
        </h2>

        <p className="text-xs text-amber-400 font-mono mt-2 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full w-fit mx-auto">
          Connect YouTube Analytics API to unlock owner audience intelligence
        </p>

        <p className="text-xs text-slate-400 max-w-xl mx-auto mt-4 leading-relaxed">
          In strict compliance with our <strong className="text-slate-200 font-mono">DATA ACCURACY POLICY</strong>, private owner metrics (Returning vs New Viewers, Audience Retention curves, Age & Gender Demographics, Top Geographies, and Traffic Source breakdowns) are strictly disabled until channel OAuth access is authorized.
        </p>

        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 text-left max-w-xl mx-auto font-mono text-[11px] text-slate-500">
          <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 flex items-center gap-2">
            <Lock className="w-3.5 h-3.5 text-amber-400" /> Returning Viewers
          </div>
          <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 flex items-center gap-2">
            <Lock className="w-3.5 h-3.5 text-amber-400" /> Audience Retention
          </div>
          <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 flex items-center gap-2">
            <Lock className="w-3.5 h-3.5 text-amber-400" /> Age & Gender
          </div>
          <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 flex items-center gap-2">
            <Lock className="w-3.5 h-3.5 text-amber-400" /> Traffic Sources
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-800 flex justify-center">
          <button
            onClick={() => alert('Channel OAuth Connect Modal: In production, this launches YouTube Studio OAuth 2.0 flow.')}
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs font-mono shadow-lg shadow-amber-500/20 transition-all flex items-center gap-2"
          >
            <Key className="w-4 h-4" /> Authorize Channel Analytics Access
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 bg-[#0D121D] border border-slate-800 rounded-xl text-white">
      Audience Analytics active.
    </div>
  );
};
