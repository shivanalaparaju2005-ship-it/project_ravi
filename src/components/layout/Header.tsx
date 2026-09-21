'use client';

import React from 'react';
import { ChannelMetrics } from '@/lib/types';
import { RefreshCw, ShieldCheck, Lock, Sparkles, FileText, Globe, Layers } from 'lucide-react';

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
    <header className="sticky top-0 z-40 bg-[#070A0F]/90 backdrop-blur-md border-b border-slate-800/80 px-6 py-4">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Title & Branding */}
        <div className="flex items-center space-x-4">
          <div className="relative">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-cyan-500 to-amber-500 p-0.5 shadow-lg shadow-cyan-500/20">
              <img
                src={channel.thumbnails.default}
                alt={channel.title}
                className="w-full h-full rounded-[10px] object-cover bg-slate-900"
              />
            </div>
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 border-2 border-[#070A0F] rounded-full flex items-center justify-center">
              <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
            </div>
          </div>

          <div>
            <div className="flex items-center space-x-2">
              <h1 className="text-xl font-bold tracking-tight text-white uppercase font-mono">
                {channel.title}
              </h1>
              <span className="text-xs px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-mono border border-slate-700">
                CHANNEL INTELLIGENCE
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-0.5 flex items-center gap-2">
              <span>Content • Audience • Performance • Strategy</span>
              <span className="text-slate-600">•</span>
              <span className="text-cyan-400 font-mono">{channel.handle}</span>
            </p>
          </div>
        </div>

        {/* Action Controls & Status Pills */}
        <div className="flex flex-wrap items-center gap-3">
          {/* Data Mode Switcher */}
          <button
            onClick={onToggleDemoMode}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-2 border ${
              isLiveApi
                ? 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/20'
                : 'bg-amber-500/10 border-amber-500/30 text-amber-400 hover:bg-amber-500/20'
            }`}
            title="Toggle between Live YouTube API data and verified Demo dataset"
          >
            <Globe className="w-3.5 h-3.5" />
            <span>{isLiveApi ? 'Live API Mode' : 'Demo Mode'}</span>
            <span className="text-[10px] opacity-75 px-1 py-0.5 rounded bg-slate-900 font-mono">
              {isLiveApi ? 'API Connected' : 'Demo Dataset'}
            </span>
          </button>

          {/* Owner Analytics Status */}
          <div className="px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-900 border border-slate-800 text-slate-400 flex items-center gap-2">
            {isOwnerConnected ? (
              <>
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400">Owner Connected</span>
              </>
            ) : (
              <>
                <Lock className="w-3.5 h-3.5 text-amber-400" />
                <span className="text-slate-300">Public Metrics Only</span>
                <span className="text-[10px] text-amber-400 bg-amber-400/10 border border-amber-400/20 px-1.5 py-0.5 rounded font-mono">
                  Owner N/A
                </span>
              </>
            )}
          </div>

          {/* Refresh Button */}
          <button
            onClick={onRefresh}
            disabled={loading}
            className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 transition-all disabled:opacity-50"
            title="Refresh YouTube Channel Intelligence Data"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin text-cyan-400' : ''}`} />
          </button>

          {/* Generate Strategy Report Button */}
          <button
            onClick={onOpenReport}
            className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 text-white font-medium text-xs shadow-lg shadow-cyan-600/20 flex items-center gap-2 transition-all border border-cyan-400/30"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Generate Strategy Report</span>
          </button>
        </div>
      </div>
    </header>
  );
};
