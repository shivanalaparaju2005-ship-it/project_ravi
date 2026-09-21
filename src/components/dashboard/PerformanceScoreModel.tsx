'use client';

import React, { useState } from 'react';
import { CombinedVideoData, ScoringWeights } from '@/lib/types';
import { DEFAULT_SCORING_WEIGHTS, calculatePerformanceScore, calculateChannelMedianViews, formatNumber } from '@/lib/scoring-utils';
import { Award, Sliders, Info, Sparkles, RefreshCw } from 'lucide-react';

interface PerformanceScoreModelProps {
  videos: CombinedVideoData[];
}

export const PerformanceScoreModel: React.FC<PerformanceScoreModelProps> = ({ videos }) => {
  const [weights, setWeights] = useState<ScoringWeights>(DEFAULT_SCORING_WEIGHTS);
  const medianViews = calculateChannelMedianViews(videos);

  const resetWeights = () => setWeights(DEFAULT_SCORING_WEIGHTS);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-[#0D121D] border border-slate-800 rounded-xl p-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center space-x-3">
          <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
            <Award className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-base font-bold text-white uppercase font-mono tracking-wider">
              Content Performance Score Methodology
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Transparent composite evaluation algorithm standardizing views, engagement, and velocity
            </p>
          </div>
        </div>

        <button
          onClick={resetWeights}
          className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:bg-slate-800 text-xs font-mono text-slate-300 flex items-center gap-1.5 transition-all self-start md:self-auto"
        >
          <RefreshCw className="w-3.5 h-3.5" /> Reset Default Weights
        </button>
      </div>

      {/* Formula Transparency Box */}
      <div className="bg-slate-950 border border-cyan-500/30 rounded-xl p-5 font-mono text-xs text-slate-300 space-y-2">
        <div className="text-cyan-400 font-bold uppercase text-[11px] flex items-center gap-2">
          <Info className="w-4 h-4" /> Score Formula Calculation
        </div>
        <p className="text-slate-400 text-[11px]">
          Score = (Views/Median × W_v) + (EngagementRate/Benchmark × W_e) + (ViewsPerDay/Benchmark × W_pd) + (LikeRate/Benchmark × W_l)
        </p>
        <p className="text-[10px] text-slate-500">
          Where benchmark engagement = 5.0%, velocity benchmark = 3,000 views/day. If private metrics are missing, private components are gracefully omitted.
        </p>
      </div>

      {/* Interactive Weight Adjustment Sliders */}
      <div className="bg-[#0D121D] border border-slate-800 rounded-xl p-5 space-y-4">
        <h3 className="text-sm font-bold text-white font-mono uppercase flex items-center gap-2">
          <Sliders className="w-4 h-4 text-cyan-400" /> Adjust Weight Parameters
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Slider 1 */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-mono">
              <span className="text-slate-300">Views vs Median Weight</span>
              <span className="text-cyan-400 font-bold">{(weights.viewsVsMedianWeight * 100).toFixed(0)}%</span>
            </div>
            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={weights.viewsVsMedianWeight}
              onChange={(e) => setWeights({ ...weights, viewsVsMedianWeight: parseFloat(e.target.value) })}
              className="w-full accent-cyan-500 bg-slate-900 h-1.5 rounded-lg cursor-pointer"
            />
          </div>

          {/* Slider 2 */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-mono">
              <span className="text-slate-300">Public Engagement Rate Weight</span>
              <span className="text-emerald-400 font-bold">{(weights.engagementRateWeight * 100).toFixed(0)}%</span>
            </div>
            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={weights.engagementRateWeight}
              onChange={(e) => setWeights({ ...weights, engagementRateWeight: parseFloat(e.target.value) })}
              className="w-full accent-emerald-500 bg-slate-900 h-1.5 rounded-lg cursor-pointer"
            />
          </div>

          {/* Slider 3 */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-mono">
              <span className="text-slate-300">Views/Day Velocity Weight</span>
              <span className="text-amber-400 font-bold">{(weights.viewsPerDayWeight * 100).toFixed(0)}%</span>
            </div>
            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={weights.viewsPerDayWeight}
              onChange={(e) => setWeights({ ...weights, viewsPerDayWeight: parseFloat(e.target.value) })}
              className="w-full accent-amber-500 bg-slate-900 h-1.5 rounded-lg cursor-pointer"
            />
          </div>

          {/* Slider 4 */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-mono">
              <span className="text-slate-300">Like Rate Weight</span>
              <span className="text-indigo-400 font-bold">{(weights.likeRateWeight * 100).toFixed(0)}%</span>
            </div>
            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={weights.likeRateWeight}
              onChange={(e) => setWeights({ ...weights, likeRateWeight: parseFloat(e.target.value) })}
              className="w-full accent-indigo-500 bg-slate-900 h-1.5 rounded-lg cursor-pointer"
            />
          </div>
        </div>
      </div>

      {/* Live Re-scored Videos Preview */}
      <div className="bg-[#0D121D] border border-slate-800 rounded-xl p-5 space-y-3">
        <h3 className="text-sm font-bold text-white font-mono uppercase">
          Live Dynamically Scored Videos
        </h3>
        <div className="space-y-2">
          {videos.map(v => {
            const score = calculatePerformanceScore(v.public, medianViews, weights);
            return (
              <div key={v.public.id} className="p-3 rounded-lg bg-slate-900/80 border border-slate-800 flex items-center justify-between font-mono text-xs">
                <div className="flex items-center space-x-3 truncate">
                  <img src={v.public.thumbnailUrl} alt={v.public.title} className="w-12 h-8 rounded object-cover" />
                  <span className="text-slate-200 truncate">{v.public.title}</span>
                </div>
                <div className="text-right shrink-0">
                  <span className="text-sm font-bold text-cyan-400">{score} pts</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
