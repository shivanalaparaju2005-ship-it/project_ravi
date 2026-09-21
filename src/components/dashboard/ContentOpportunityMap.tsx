'use client';

import React from 'react';
import { DEMO_CONTENT_OPPORTUNITIES } from '@/lib/demo-data';
import { Target, Sparkles, CheckCircle, Lightbulb, Compass, Award } from 'lucide-react';

export const ContentOpportunityMap: React.FC = () => {
  const opportunities = DEMO_CONTENT_OPPORTUNITIES;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-[#0D121D] border border-slate-800 rounded-xl p-5 flex items-center space-x-3">
        <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
          <Target className="w-5 h-5" />
        </div>
        <div>
          <h2 className="text-base font-bold text-white uppercase font-mono tracking-wider">
            Content Opportunity Map & Concept Engine
          </h2>
          <p className="text-xs text-slate-400 mt-0.5">
            Evaluating potential upcoming video ideas across 5 strategic feasibility & story vectors
          </p>
        </div>
      </div>

      {/* Opportunity Cards Stack */}
      <div className="space-y-4">
        {opportunities.map((opp) => (
          <div
            key={opp.id}
            className={`bg-[#0D121D] border rounded-xl p-5 space-y-4 transition-all shadow-lg ${
              opp.tier === 'High Opportunity'
                ? 'border-emerald-500/40 hover:border-emerald-500/70'
                : opp.tier === 'Medium Opportunity'
                ? 'border-amber-500/40 hover:border-amber-500/70'
                : 'border-slate-800'
            }`}
          >
            {/* Top Row */}
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
              <div className="flex items-center space-x-2">
                <span className={`px-2.5 py-0.5 rounded text-xs font-mono font-bold ${
                  opp.tier === 'High Opportunity'
                    ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                    : opp.tier === 'Medium Opportunity'
                    ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                    : 'bg-slate-800 text-slate-400'
                }`}>
                  {opp.tier}
                </span>
                <span className="text-xs font-mono text-slate-400">
                  Category: <strong className="text-white">{opp.locationCategory}</strong>
                </span>
              </div>
              <div className="text-right font-mono">
                <span className="text-sm font-bold text-cyan-400">{opp.score} / 100</span>
                <span className="text-[10px] text-slate-500 ml-1">Opportunity Score</span>
              </div>
            </div>

            {/* Concept Title */}
            <div>
              <h3 className="text-base font-bold text-white">
                {opp.title}
              </h3>
              <div className="text-xs text-cyan-400 font-mono mt-1">
                Suggested Title: &ldquo;{opp.suggestedTitlePattern}&rdquo;
              </div>
            </div>

            {/* Metric Vectors */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 font-mono text-[11px] bg-slate-900/80 p-3 rounded-lg border border-slate-800">
              <div>
                <span className="text-slate-500 block">Audience Relevance</span>
                <span className="text-emerald-400 font-bold">{opp.audienceRelevance}/10</span>
              </div>
              <div>
                <span className="text-slate-500 block">Historical Fit</span>
                <span className="text-emerald-400 font-bold">{opp.historicalFit}/10</span>
              </div>
              <div>
                <span className="text-slate-500 block">Uniqueness</span>
                <span className="text-cyan-400 font-bold">{opp.uniqueness}/10</span>
              </div>
              <div>
                <span className="text-slate-500 block">Feasibility</span>
                <span className="text-amber-400 font-bold">{opp.productionFeasibility}/10</span>
              </div>
              <div>
                <span className="text-slate-500 block">Story Potential</span>
                <span className="text-emerald-400 font-bold">{opp.storyPotential}/10</span>
              </div>
            </div>

            {/* Why Recommended */}
            <div className="text-xs text-slate-300 space-y-1">
              <span className="font-mono text-cyan-400 font-bold uppercase text-[10px] block">Strategic Rationale</span>
              <p className="leading-relaxed">{opp.whyRecommended}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
