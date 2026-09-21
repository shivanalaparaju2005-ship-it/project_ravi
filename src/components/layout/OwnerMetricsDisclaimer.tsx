'use client';

import React from 'react';
import { ShieldCheck, Lock, AlertTriangle, Info } from 'lucide-react';

interface DisclaimerProps {
  isOwnerConnected: boolean;
}

export const OwnerMetricsDisclaimer: React.FC<DisclaimerProps> = ({ isOwnerConnected }) => {
  return (
    <div className="bg-[#0D121D] border border-slate-800 rounded-xl p-4 mb-6 shadow-md">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        {/* Left Side: Public Data Status */}
        <div className="flex items-start space-x-3">
          <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 shrink-0 mt-0.5">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400">
                PUBLIC YOUTUBE DATA VERIFIED
              </span>
              <span className="text-[10px] bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded font-mono">
                100% Accurate API Sync
              </span>
            </div>
            <p className="text-xs text-slate-300 mt-1 leading-relaxed">
              Includes YouTube Data API v3 verified metrics: Views, Likes, Comments, Titles, Duration, Published Dates, Public Subscriber Count, and Thumbnails.
            </p>
          </div>
        </div>

        {/* Right Side: Owner Analytics Connection Status */}
        <div className="flex items-start space-x-3 lg:border-l lg:border-slate-800 lg:pl-6">
          <div className={`p-2 rounded-lg shrink-0 mt-0.5 border ${
            isOwnerConnected 
              ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400' 
              : 'bg-amber-500/10 border-amber-500/20 text-amber-400'
          }`}>
            {isOwnerConnected ? <ShieldCheck className="w-5 h-5" /> : <Lock className="w-5 h-5" />}
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-white">
                OWNER-AUTHORIZED ANALYTICS
              </span>
              <span className={`text-[10px] px-2 py-0.5 rounded font-mono border ${
                isOwnerConnected 
                  ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400' 
                  : 'bg-amber-500/10 border-amber-500/20 text-amber-400'
              }`}>
                {isOwnerConnected ? 'Connected' : 'N/A — Owner Access Required'}
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-1 leading-relaxed">
              {isOwnerConnected ? (
                'YouTube Studio Analytics OAuth connected. Private metrics (CTR, Watch Time, Revenue, Demographics) actively syncing.'
              ) : (
                <>
                  Private metrics like <strong className="text-slate-300">CTR, Impressions, Watch Time, Revenue, Retention, Shares, & Demographics</strong> display <span className="text-amber-400 font-mono text-[11px]">N/A — Owner access required</span> to uphold strict data accuracy. Zero fake estimates used.
                </>
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
