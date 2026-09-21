'use client';

import React from 'react';
import { CombinedVideoData, ContentCategory } from '@/lib/types';
import { formatNumber, calculateMedian } from '@/lib/scoring-utils';
import { Compass, Award, Lightbulb, TrendingUp, Layers, PieChart } from 'lucide-react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

interface ContentIntelligenceProps {
  videos: CombinedVideoData[];
}

export const ContentIntelligence: React.FC<ContentIntelligenceProps> = ({ videos }) => {
  // Aggregate metrics by category
  const categoriesMap: { [cat: string]: CombinedVideoData[] } = {};
  videos.forEach(v => {
    const cat = v.public.category;
    if (!categoriesMap[cat]) categoriesMap[cat] = [];
    categoriesMap[cat].push(v);
  });

  const categoryStats = Object.keys(categoriesMap).map(cat => {
    const list = categoriesMap[cat];
    const totalViews = list.reduce((sum, v) => sum + v.public.viewCount, 0);
    const medianViews = calculateMedian(list.map(v => v.public.viewCount));
    const avgEngagement = (list.reduce((sum, v) => sum + v.public.publicEngagementRate, 0) / list.length).toFixed(2);

    return {
      category: cat,
      videoCount: list.length,
      totalViews,
      medianViews,
      avgEngagement: parseFloat(avgEngagement)
    };
  }).sort((a, b) => b.medianViews - a.medianViews);

  return (
    <div className="space-y-6">
      {/* Header Info */}
      <div className="bg-[#0D121D] border border-slate-800 rounded-xl p-5">
        <div className="flex items-center space-x-3">
          <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
            <Compass className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-base font-bold text-white uppercase font-mono tracking-wider">
              Content Pillar Intelligence & Categorization
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Transparent rule-based categorization evaluating view velocity, median reach, and engagement across travel themes
            </p>
          </div>
        </div>
      </div>

      {/* Category Performance Bar Chart */}
      <div className="bg-[#0D121D] border border-slate-800 rounded-xl p-5">
        <h3 className="text-sm font-bold text-white font-mono uppercase mb-4 flex items-center justify-between">
          <span>Median Views by Content Pillar</span>
          <span className="text-xs text-cyan-400 font-normal">Channel Baseline Benchmark</span>
        </h3>

        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={categoryStats} margin={{ top: 10, right: 10, left: 10, bottom: 25 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1E293B" vertical={false} />
              <XAxis dataKey="category" stroke="#64748B" angle={-15} textAnchor="end" tick={{ fontSize: 10 }} />
              <YAxis stroke="#64748B" tick={{ fontSize: 11 }} tickFormatter={(val) => formatNumber(val)} />
              <Tooltip
                contentStyle={{ backgroundColor: '#070A0F', borderColor: '#334155', borderRadius: '8px', color: '#fff', fontSize: '12px' }}
                formatter={(val: any) => [formatNumber(val), 'Median Views']}
              />
              <Bar dataKey="medianViews" fill="#06B6D4" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Best Content Pillars & Content Gaps */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Best Content Pillars */}
        <div className="bg-[#0D121D] border border-slate-800 rounded-xl p-5">
          <div className="flex items-center space-x-2 mb-4">
            <Award className="w-5 h-5 text-emerald-400" />
            <h3 className="text-sm font-bold text-white font-mono uppercase">
              Best Content Pillars
            </h3>
          </div>

          <div className="space-y-3">
            {categoryStats.slice(0, 3).map((stat, idx) => (
              <div key={stat.category} className="p-3.5 rounded-lg bg-slate-900/90 border border-slate-800 flex items-center justify-between">
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-mono font-bold text-emerald-400">#Pillar {idx + 1}</span>
                    <h4 className="text-xs font-bold text-white">{stat.category}</h4>
                  </div>
                  <div className="text-[11px] text-slate-400 mt-1 font-mono">
                    {stat.videoCount} videos • {formatNumber(stat.medianViews)} median views
                  </div>
                </div>
                <div className="text-right font-mono">
                  <span className="text-xs text-emerald-400 font-bold">{stat.avgEngagement}%</span>
                  <div className="text-[10px] text-slate-500">Avg Engagement</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Content Gap Identification */}
        <div className="bg-[#0D121D] border border-slate-800 rounded-xl p-5">
          <div className="flex items-center space-x-2 mb-4">
            <Lightbulb className="w-5 h-5 text-amber-400" />
            <h3 className="text-sm font-bold text-white font-mono uppercase">
              Identified Content Gaps
            </h3>
          </div>

          <div className="space-y-3">
            <div className="p-3.5 rounded-lg bg-slate-900/90 border border-slate-800">
              <h4 className="text-xs font-bold text-amber-400 flex items-center justify-between">
                <span>Visa-Free / EVisa International Expeditions</span>
                <span className="text-[10px] font-mono bg-amber-500/10 px-2 py-0.5 rounded text-amber-400">High Demand</span>
              </h4>
              <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                Currently underrepresented on the channel (only 1 video). Audience retention and search interest indicate high demand for clear visa processes.
              </p>
            </div>

            <div className="p-3.5 rounded-lg bg-slate-900/90 border border-slate-800">
              <h4 className="text-xs font-bold text-cyan-400 flex items-center justify-between">
                <span>High-Contrast Price Comparisons</span>
                <span className="text-[10px] font-mono bg-cyan-500/10 px-2 py-0.5 rounded text-cyan-400">Top Performer</span>
              </h4>
              <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                Comparison format achieves highest click intent (2.15M views peak). Scaling this format to food and luxury vs hostel stays presents immediate growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
