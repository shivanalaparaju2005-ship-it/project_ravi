'use client';

import React from 'react';
import { ChannelMetrics } from '@/lib/types';
import { RefreshCw, ShieldCheck, Lock, FileText, Globe } from 'lucide-react';

interface HeaderProps {
  channel: ChannelMetrics;
  isLiveApi: boolean;
  isOwnerConnected: boolean;
  onToggleDemoMode: () => void;
  onOpenReport: () => void;
  onRefresh: () => void;
  loading: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  channel,
  isLiveApi,
  isOwnerConnected,
  onToggleDemoMode,
  onOpenReport,
  onRefresh,
  loading
}) => {
  return (
    <header className="sticky top-0 z-40 bg-[#07090e]/90 backdrop-blur-md border-b border-slate-800/80 px-6 py-4 shadow-sm">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 max-w-[1600px] mx-auto">
        {/* Title & Branding */}
        <div className="flex items-center space-x-4">
          <div className="relative">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-slate-700 to-slate-900 p-[1px] shadow-sm">
              <img
                src={channel.thumbnails.default}
                alt={channel.title}
                className="w-full h-full rounded-[11px] object-cover bg-[#0a0d14]"
              />
            </div>
            <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-emerald-500 border-2 border-[#07090e] rounded-full flex items-center justify-center shadow-sm">
              <span className="w-1 h-1 bg-white rounded-full animate-pulse" />
            </div>
          </div>

          <div>
            <div className="flex items-center space-x-2">
              <h1 className="text-xl font-bold tracking-tight text-slate-100 font-sans">
                {channel.title}
              </h1>
              <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800/80 text-cyan-400 font-mono tracking-wider uppercase border border-slate-700/50">
                Data Studio
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-1 flex items-center gap-2 font-mono">
              <span className="tracking-wide">@ravitelugutraveller</span>
            </p>
          </div>
        </div>

        {/* Action Controls & Status Pills */}
        <div className="flex flex-wrap items-center gap-3">
          {/* Data Mode Switcher */}
          <button
            onClick={onToggleDemoMode}
            className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all flex items-center gap-2 border ${
              isLiveApi
                ? 'bg-emerald-900/20 border-emerald-500/30 text-emerald-400 hover:bg-emerald-900/40'
                : 'bg-amber-900/20 border-amber-500/30 text-amber-400 hover:bg-amber-900/40'
            }`}
            title="Toggle between Live YouTube API data and verified Demo dataset"
          >
            <Globe className="w-3.5 h-3.5" />
            <span>{isLiveApi ? 'Live Data Mode' : 'Demo Mode'}</span>
            <span className="text-[10px] opacity-80 px-1 py-0.5 rounded bg-[#0a0d14] font-mono border border-slate-800/50">
              {isLiveApi ? 'API Sync' : 'Static Dataset'}
            </span>
          </button>

          {/* Owner Analytics Status */}
          <div className="px-3 py-1.5 rounded-md text-xs font-medium bg-[#0a0d14] border border-slate-800 text-slate-400 flex items-center gap-2 shadow-sm">
            {isOwnerConnected ? (
              <>
                <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                <span className="text-cyan-400">Owner Access Granted</span>
              </>
            ) : (
              <>
                <Lock className="w-3.5 h-3.5 text-slate-500" />
                <span className="text-slate-400">Public Metrics Only</span>
                <span className="text-[10px] text-slate-500 bg-slate-900 border border-slate-800 px-1.5 py-0.5 rounded font-mono">
                  Owner N/A
                </span>
              </>
            )}
          </div>

          {/* Refresh Button */}
          <button
            onClick={onRefresh}
            disabled={loading}
            className="p-1.5 rounded-md bg-[#0a0d14] hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-slate-200 transition-all disabled:opacity-50 shadow-sm"
            title="Refresh Synchronization"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin text-cyan-400' : ''}`} />
          </button>

          {/* Generate Strategy Report Button */}
          <button
            onClick={onOpenReport}
            className="px-4 py-1.5 rounded-md bg-slate-100 hover:bg-white text-slate-900 font-bold text-xs flex items-center gap-2 transition-all shadow-sm ml-2"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Export Report</span>
          </button>
        </div>
      </div>
    </header>
  );
};

