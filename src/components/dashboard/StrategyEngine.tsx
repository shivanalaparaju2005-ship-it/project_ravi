'use client';

import React from 'react';
import { StrategyRecommendation } from '@/lib/types';
import { DEMO_STRATEGY_RECOMMENDATIONS } from '@/lib/demo-data';
import { Lightbulb, Sparkles, CheckCircle2, ArrowRight, ShieldCheck, Target, Zap, ChevronRight } from 'lucide-react';

export const StrategyEngine: React.FC = () => {
  const recommendations: StrategyRecommendation[] = DEMO_STRATEGY_RECOMMENDATIONS;

  return (
    <div className="space-y-8 animate-in fade-in duration-500 max-w-5xl">
      {/* Header Banner */}
      <div>
        <h2 className="text-3xl font-black text-white uppercase tracking-tight font-sans">
          Strategy Recommendation Engine
        </h2>
        <p className="text-sm text-slate-400 mt-2 font-light">
          Data-backed recommendations structured as: <strong className="text-cyan-400 font-medium">Observation → Evidence → Interpretation → Action</strong>
        </p>
      </div>

      {/* Recommendation Cards Stack */}
      <div className="space-y-6">
        {recommendations.map((rec, index) => (
          <div
            key={rec.id}
            className="bg-[#0c1017] border border-slate-800/80 rounded-xl p-8 hover:border-slate-700 transition-all shadow-xl relative"
          >
            {/* Top Badge & Category */}
            <div className="flex flex-wrap items-center justify-between gap-2 pb-5 mb-5 border-b border-slate-800/60">
              <div className="flex items-center space-x-3">
                <span className="text-xs font-mono font-bold text-slate-500">
                  REC—0{index + 1}
                </span>
                <span className={`px-2 py-1 rounded-sm text-[10px] font-mono font-bold tracking-widest uppercase ${
                  rec.priority === 'HIGH'
                    ? 'bg-rose-500/10 text-rose-400 border border-rose-500/20'
                    : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                }`}>
                  {rec.priority} PRIORITY
                </span>
                <span className="text-xs font-mono text-slate-400">
                  Category: <strong className="text-slate-200">{rec.category}</strong>
                </span>
              </div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 bg-cyan-500/5 border border-cyan-500/20 px-3 py-1 rounded-full">
                Impact: {rec.impactPotential}
              </span>
            </div>

            {/* Strategy Title */}
            <h3 className="text-xl font-medium text-white mb-6">
              {rec.title}
            </h3>

            {/* 4-Part Evidence Framework Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* 1. Observation */}
              <div className="p-5 rounded-lg bg-slate-900/40 border border-slate-800/60 space-y-2">
                <div className="text-[10px] font-mono uppercase tracking-widest text-slate-500 font-semibold flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-500" /> Observation
                </div>
                <p className="text-sm text-slate-300 font-light leading-relaxed">
                  {rec.observation}
                </p>
              </div>

              {/* 2. Evidence */}
              <div className="p-5 rounded-lg bg-slate-900/40 border border-slate-800/60 space-y-2">
                <div className="text-[10px] font-mono uppercase tracking-widest text-emerald-500 font-semibold flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Evidence
                </div>
                <p className="text-sm text-slate-300 font-mono leading-relaxed">
                  {rec.evidence}
                </p>
              </div>

              {/* 3. Possible Interpretation */}
              <div className="p-5 rounded-lg bg-slate-900/40 border border-slate-800/60 space-y-2">
                <div className="text-[10px] font-mono uppercase tracking-widest text-indigo-400 font-semibold flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" /> Interpretation
                </div>
                <p className="text-sm text-slate-300 font-light leading-relaxed">
                  {rec.interpretation}
                </p>
              </div>

              {/* 4. Recommended Action */}
              <div className="p-5 rounded-lg bg-cyan-950/20 border border-cyan-900/40 space-y-2 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                  <Zap className="w-16 h-16 text-cyan-400" />
                </div>
                <div className="text-[10px] font-mono uppercase tracking-widest text-cyan-400 font-semibold flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" /> Action to Test
                </div>
                <p className="text-sm text-cyan-100 font-medium leading-relaxed relative z-10">
                  {rec.recommendedAction}
                </p>
              </div>
            </div>
            
            <div className="mt-6 flex items-center gap-4 text-xs">
              <span className="text-slate-500 font-mono">Confidence Level:</span>
              <div className="flex items-center gap-1">
                <span className={`w-2 h-2 rounded-full ${rec.confidence === 'High' ? 'bg-emerald-500' : rec.confidence === 'Medium' ? 'bg-amber-500' : 'bg-rose-500'}`}></span>
                <span className="text-slate-300 font-mono">{rec.confidence}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

