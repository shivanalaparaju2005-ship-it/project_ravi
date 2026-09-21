'use client';

import React from 'react';
import { CombinedVideoData } from '@/lib/types';
import { formatNumber, calculateMedian } from '@/lib/scoring-utils';
import { Type, AlertCircle, Sparkles, CheckCircle, HelpCircle } from 'lucide-react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

interface TitleIntelligenceProps {
  videos: CombinedVideoData[];
}

export const TitleIntelligence: React.FC<TitleIntelligenceProps> = ({ videos }) => {
  // Aggregate title patterns
  const patternsMap: { [pattern: string]: CombinedVideoData[] } = {};
  videos.forEach(v => {
    const pat = v.public.titleAnalysis.patternType;
    if (!patternsMap[pat]) patternsMap[pat] = [];
    patternsMap[pat].push(v);
  });

  const patternStats = Object.keys(patternsMap).map(pat => {
    const list = patternsMap[pat];
    const medianViews = calculateMedian(list.map(v => v.public.viewCount));
    const avgLength = Math.round(list.reduce((sum, v) => sum + v.public.titleAnalysis.charCount, 0) / list.length);

    return {
      pattern: pat,
      count: list.length,
      medianViews,
      avgLength
    };
  }).sort((a, b) => b.medianViews - a.medianViews);

  return (
    <div className="space-y-6">
      {/* Correlation vs Causation Disclaimer */}
      <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4 flex items-start space-x-3 text-amber-300">
        <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
        <div className="text-xs space-y-1">
          <div className="font-bold uppercase font-mono tracking-wider text-amber-400">
            Important Analytical Methodology: Correlation vs Causation
          </div>
          <p className="leading-relaxed">
            The dashboard identifies title pattern performance based on historical channel median views. We state:
            <em className="text-white font-serif font-normal"> &ldquo;Videos with this title-length range historically showed higher median views.&rdquo;</em> We do NOT claim that title length alone causes view changes.
          </p>
        </div>
      </div>

      {/* Main Title Intelligence Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Pattern Performance Bar Chart */}
        <div className="bg-[#0D121D] border border-slate-800 rounded-xl p-5">
          <h3 className="text-sm font-bold text-white font-mono uppercase mb-4 flex items-center justify-between">
            <span>Title Pattern vs Median Views</span>
            <span className="text-xs text-cyan-400">Pattern Hierarchy</span>
          </h3>

          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={patternStats} margin={{ top: 10, right: 10, left: 10, bottom: 25 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1E293B" vertical={false} />
                <XAxis dataKey="pattern" stroke="#64748B" angle={-15} textAnchor="end" tick={{ fontSize: 10 }} />
                <YAxis stroke="#64748B" tick={{ fontSize: 11 }} tickFormatter={(val) => formatNumber(val)} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#070A0F', borderColor: '#334155', borderRadius: '8px', color: '#fff', fontSize: '12px' }}
                  formatter={(val: any) => [formatNumber(val), 'Median Views']}
                />
                <Bar dataKey="medianViews" fill="#EAB308" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Title Pattern Breakdown Cards */}
        <div className="bg-[#0D121D] border border-slate-800 rounded-xl p-5 space-y-4">
          <h3 className="text-sm font-bold text-white font-mono uppercase flex items-center justify-between">
            <span>Title Structural Insights</span>
            <span className="text-xs text-amber-400">Packaging Hooks</span>
          </h3>

          <div className="space-y-3">
            {patternStats.map((stat, idx) => (
              <div key={stat.pattern} className="p-3.5 rounded-lg bg-slate-900/90 border border-slate-800 flex items-center justify-between">
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-mono font-bold text-amber-400">#Pattern {idx + 1}</span>
                    <h4 className="text-xs font-bold text-white">{stat.pattern}</h4>
                  </div>
                  <div className="text-[11px] text-slate-400 mt-1 font-mono">
                    {stat.count} videos • Avg {stat.avgLength} characters
                  </div>
                </div>
                <div className="text-right font-mono">
                  <span className="text-xs text-amber-400 font-bold">{formatNumber(stat.medianViews)}</span>
                  <div className="text-[10px] text-slate-500">Median Views</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
