'use client';

import React from 'react';
import { StrategyRecommendation } from '@/lib/types';
import { DEMO_STRATEGY_RECOMMENDATIONS } from '@/lib/demo-data';
import { Lightbulb, Sparkles, CheckCircle2, ArrowRight, ShieldCheck, Target, Zap } from 'lucide-react';

export const StrategyEngine: React.FC = () => {
  const recommendations: StrategyRecommendation[] = DEMO_STRATEGY_RECOMMENDATIONS;

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-[#0D121D] via-slate-900 to-[#0D121D] border border-cyan-500/30 rounded-xl p-6 relative overflow-hidden shadow-xl">
        <div className="flex items-center space-x-3">
          <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
            <Lightbulb className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <h2 className="text-lg font-bold text-white uppercase font-mono tracking-wider">
                Evidence-Based Channel Strategy Engine
              </h2>
              <span className="text-[10px] bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 px-2 py-0.5 rounded font-mono">
                Consultant Grade
              </span>
            </div>
            <p className="text-xs text-slate-300 mt-1">
              Data-backed recommendations structured as: <strong className="text-cyan-400">Observation → Evidence → Interpretation → Recommended Action</strong>
            </p>
          </div>
        </div>
      </div>

      {/* Recommendation Cards Stack */}
      <div className="space-y-6">
        {recommendations.map((rec) => (
          <div
            key={rec.id}
            className="bg-[#0D121D] border border-slate-800 rounded-xl p-6 space-y-4 hover:border-cyan-500/40 transition-all shadow-lg relative"
          >
            {/* Top Badge & Category */}
            <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-800">
              <div className="flex items-center space-x-2">
                <span className={`px-2.5 py-0.5 rounded text-[11px] font-mono font-bold ${
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
              <span className="text-xs font-mono text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-2.5 py-0.5 rounded">
                Impact Focus: {rec.impactPotential}
              </span>
            </div>

            {/* Strategy Title */}
            <h3 className="text-base font-bold text-white">
              {rec.title}
            </h3>

            {/* 4-Part Evidence Framework Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              {/* 1. Observation */}
              <div className="p-4 rounded-lg bg-slate-900/90 border border-slate-800 space-y-1.5">
                <div className="text-xs font-mono uppercase text-slate-400 font-bold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-cyan-400" /> 1. Empirical Observation
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {rec.observation}
                </p>
              </div>

              {/* 2. Evidence */}
              <div className="p-4 rounded-lg bg-slate-900/90 border border-slate-800 space-y-1.5">
                <div className="text-xs font-mono uppercase text-emerald-400 font-bold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" /> 2. Data Evidence
                </div>
                <p className="text-xs text-slate-300 leading-relaxed font-mono">
                  {rec.evidence}
                </p>
              </div>

              {/* 3. Possible Interpretation */}
              <div className="p-4 rounded-lg bg-slate-900/90 border border-slate-800 space-y-1.5">
                <div className="text-xs font-mono uppercase text-amber-400 font-bold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-amber-400" /> 3. Possible Interpretation
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {rec.interpretation}
                </p>
              </div>

              {/* 4. Recommended Action */}
              <div className="p-4 rounded-lg bg-cyan-950/40 border border-cyan-500/30 space-y-1.5">
                <div className="text-xs font-mono uppercase text-cyan-400 font-bold flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5" /> 4. Recommended Action
                </div>
                <p className="text-xs text-cyan-200 font-medium leading-relaxed">
                  {rec.recommendedAction}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
