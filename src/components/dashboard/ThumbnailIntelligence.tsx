'use client';

import React, { useState } from 'react';
import { CombinedVideoData } from '@/lib/types';
import { formatNumber, calculateChannelMedianViews } from '@/lib/scoring-utils';
import { Image as ImageIcon, Grid, Layers, Sparkles, AlertCircle, Award, CheckCircle } from 'lucide-react';

interface ThumbnailIntelligenceProps {
  videos: CombinedVideoData[];
}

export const ThumbnailIntelligence: React.FC<ThumbnailIntelligenceProps> = ({ videos }) => {
  const [activeTab, setActiveTab] = useState<'grid' | 'matrix'>('matrix');
  const medianViews = calculateChannelMedianViews(videos);
  const avgEngagement = 5.6; // benchmark %

  // Matrix classification
  const quadHighViewsHighEng = videos.filter(v => v.public.viewCount >= medianViews && v.public.publicEngagementRate >= avgEngagement);
  const quadHighViewsLowEng = videos.filter(v => v.public.viewCount >= medianViews && v.public.publicEngagementRate < avgEngagement);
  const quadLowViewsHighEng = videos.filter(v => v.public.viewCount < medianViews && v.public.publicEngagementRate >= avgEngagement);
  const quadLowViewsLowEng = videos.filter(v => v.public.viewCount < medianViews && v.public.publicEngagementRate < avgEngagement);

  return (
    <div className="space-y-6">
      {/* Module Header */}
      <div className="bg-[#0D121D] border border-slate-800 rounded-xl p-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center space-x-3">
          <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
            <ImageIcon className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-base font-bold text-white uppercase font-mono tracking-wider">
              Thumbnail Visual Intelligence & Performance Matrix
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Evaluating visual cues, text density, face expressions, and visual contrast against real channel views
            </p>
          </div>
        </div>

        {/* View Tab Switcher */}
        <div className="flex items-center bg-slate-900 p-1 rounded-lg border border-slate-800 font-mono text-xs">
          <button
            onClick={() => setActiveTab('matrix')}
            className={`px-3 py-1.5 rounded-md transition-all ${
              activeTab === 'matrix' ? 'bg-cyan-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
            }`}
          >
            2x2 Performance Matrix
          </button>
          <button
            onClick={() => setActiveTab('grid')}
            className={`px-3 py-1.5 rounded-md transition-all ${
              activeTab === 'grid' ? 'bg-cyan-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
            }`}
          >
            Visual Grid & Tagging
          </button>
        </div>
      </div>

      {activeTab === 'matrix' ? (
        /* 2x2 Performance Quad Matrix */
        <div className="space-y-4">
          <div className="text-xs text-slate-400 font-mono flex items-center justify-between">
            <span>Matrix Benchmark: Median Views ({formatNumber(medianViews)}) & Engagement (5.6%)</span>
            <span className="text-cyan-400">Identifies packaging patterns, not blind causation</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Quad 1: High Views + High Engagement */}
            <div className="bg-[#0D121D] border-2 border-emerald-500/40 rounded-xl p-4 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Award className="w-4 h-4" /> High Views + High Engagement ({quadHighViewsHighEng.length})
                </span>
                <span className="text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded font-mono">
                  Gold Standard Packaging
                </span>
              </div>
              <p className="text-xs text-slate-300">
                Strong click intent combined with high audience satisfaction. Common trait: Split-screen contrast + physical currency/object holding.
              </p>
              <div className="grid grid-cols-2 gap-2">
                {quadHighViewsHighEng.map(v => (
                  <div key={v.public.id} className="relative rounded overflow-hidden border border-slate-700">
                    <img src={v.public.thumbnailUrl} alt={v.public.title} className="w-full h-20 object-cover" />
                    <div className="absolute inset-0 bg-slate-950/60 p-1.5 flex flex-col justify-between">
                      <span className="text-[10px] text-emerald-400 font-mono font-bold">{formatNumber(v.public.viewCount)} views</span>
                      <span className="text-[9px] text-white line-clamp-1 font-mono">{v.public.title}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quad 2: High Views + Low Engagement */}
            <div className="bg-[#0D121D] border border-cyan-500/30 rounded-xl p-4 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">
                  High Views + Moderate Engagement ({quadHighViewsLowEng.length})
                </span>
                <span className="text-[10px] bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 px-2 py-0.5 rounded font-mono">
                  Broad Reach Hooks
                </span>
              </div>
              <p className="text-xs text-slate-300">
                High click curiosity across non-subscribers. Recommendation: Ensure video payoff delivers on thumbnail premise early.
              </p>
              <div className="grid grid-cols-2 gap-2">
                {quadHighViewsLowEng.map(v => (
                  <div key={v.public.id} className="relative rounded overflow-hidden border border-slate-700">
                    <img src={v.public.thumbnailUrl} alt={v.public.title} className="w-full h-20 object-cover" />
                    <div className="absolute inset-0 bg-slate-950/60 p-1.5 flex flex-col justify-between">
                      <span className="text-[10px] text-cyan-400 font-mono font-bold">{formatNumber(v.public.viewCount)} views</span>
                      <span className="text-[9px] text-white line-clamp-1 font-mono">{v.public.title}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quad 3: Low Views + High Engagement */}
            <div className="bg-[#0D121D] border border-amber-500/30 rounded-xl p-4 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider">
                  Low Views + High Engagement ({quadLowViewsHighEng.length})
                </span>
                <span className="text-[10px] bg-amber-500/10 text-amber-400 border border-amber-500/20 px-2 py-0.5 rounded font-mono">
                  Packaging Opportunity
                </span>
              </div>
              <p className="text-xs text-slate-300">
                Core audience loved the content, but thumbnail lacked broad click appeal. Action: Test thumbnail A/B redesign!
              </p>
              <div className="grid grid-cols-2 gap-2">
                {quadLowViewsHighEng.map(v => (
                  <div key={v.public.id} className="relative rounded overflow-hidden border border-slate-700">
                    <img src={v.public.thumbnailUrl} alt={v.public.title} className="w-full h-20 object-cover" />
                    <div className="absolute inset-0 bg-slate-950/60 p-1.5 flex flex-col justify-between">
                      <span className="text-[10px] text-amber-400 font-mono font-bold">{formatNumber(v.public.viewCount)} views</span>
                      <span className="text-[9px] text-white line-clamp-1 font-mono">{v.public.title}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quad 4: Low Views + Low Engagement */}
            <div className="bg-[#0D121D] border border-slate-800 rounded-xl p-4 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                  Below Baseline ({quadLowViewsLowEng.length})
                </span>
                <span className="text-[10px] bg-slate-800 text-slate-400 px-2 py-0.5 rounded font-mono">
                  Needs Concept Pivot
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Single-subject cinematic visuals with zero text overlay or emotional expressions underperform historical channel averages.
              </p>
              <div className="grid grid-cols-2 gap-2">
                {quadLowViewsLowEng.map(v => (
                  <div key={v.public.id} className="relative rounded overflow-hidden border border-slate-800">
                    <img src={v.public.thumbnailUrl} alt={v.public.title} className="w-full h-20 object-cover opacity-60" />
                    <div className="absolute inset-0 bg-slate-950/60 p-1.5 flex flex-col justify-between">
                      <span className="text-[10px] text-slate-400 font-mono">{formatNumber(v.public.viewCount)} views</span>
                      <span className="text-[9px] text-slate-300 line-clamp-1 font-mono">{v.public.title}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Visual Grid View */
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {videos.map(v => (
            <div key={v.public.id} className="bg-[#0D121D] border border-slate-800 rounded-xl overflow-hidden group hover:border-cyan-500/40 transition-all">
              <img src={v.public.thumbnailUrl} alt={v.public.title} className="w-full h-40 object-cover" />
              <div className="p-4 space-y-2">
                <h4 className="text-xs font-medium text-white line-clamp-2">{v.public.title}</h4>
                <div className="text-[11px] font-mono text-slate-400 flex items-center justify-between">
                  <span>{formatNumber(v.public.viewCount)} views</span>
                  <span className="text-emerald-400">{v.public.publicEngagementRate}% eng</span>
                </div>
                <div className="pt-2 border-t border-slate-800 space-y-1 font-mono text-[10px] text-slate-400">
                  <div>Face Expression: <span className="text-amber-400">{v.public.thumbnailTags.humanEmotion}</span></div>
                  <div>Text Density: <span className="text-white">{v.public.thumbnailTags.textDensity}</span></div>
                  <div>Visual Subject: <span className="text-cyan-400 line-clamp-1">{v.public.thumbnailTags.mainSubject}</span></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
