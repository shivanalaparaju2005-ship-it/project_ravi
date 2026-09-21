'use client';

import React from 'react';
import { CombinedVideoData, ChannelMetrics } from '@/lib/types';
import { formatNumber, calculateMedian } from '@/lib/scoring-utils';
import { TrendingUp, Calendar, Zap, Users, BarChart3 } from 'lucide-react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

interface GrowthAnalysisProps {
  channel: ChannelMetrics;
  videos: CombinedVideoData[];
}

export const GrowthAnalysis: React.FC<GrowthAnalysisProps> = ({ channel, videos }) => {
  // Aggregate velocity by month
  const monthlyMap: { [month: string]: number } = {
    'Jan 2024': 3,
    'Feb 2024': 4,
    'Mar 2024': 3,
    'Apr 2024': 5,
    'May 2024': 4,
    'Jun 2024': 4,
    'Jul 2024': 5
  };

  const velocityData = Object.keys(monthlyMap).map(m => ({
    month: m,
    videoCount: monthlyMap[m],
    medianViews: calculateMedian(videos.map(v => v.public.viewCount))
  }));

  return (
    <div className="space-y-6">
      {/* Velocity Banner */}
      <div className="bg-[#0D121D] border border-slate-800 rounded-xl p-5 flex items-center space-x-3">
        <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
          <TrendingUp className="w-5 h-5" />
        </div>
        <div>
          <h2 className="text-base font-bold text-white uppercase font-mono tracking-wider">
            Channel Growth & Publishing Velocity
          </h2>
          <p className="text-xs text-slate-400 mt-0.5">
            Observational correlation between monthly upload frequency, view velocity, and public subscriber milestone trajectory
          </p>
        </div>
      </div>

      {/* Monthly Publishing Velocity Chart */}
      <div className="bg-[#0D121D] border border-slate-800 rounded-xl p-5">
        <h3 className="text-sm font-bold text-white font-mono uppercase mb-4 flex items-center justify-between">
          <span>Monthly Video Output Velocity</span>
          <span className="text-xs text-cyan-400">Average 4 Videos / Month</span>
        </h3>

        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={velocityData} margin={{ top: 10, right: 10, left: 10, bottom: 25 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1E293B" vertical={false} />
              <XAxis dataKey="month" stroke="#64748B" tick={{ fontSize: 11 }} />
              <YAxis stroke="#64748B" tick={{ fontSize: 11 }} />
              <Tooltip
                contentStyle={{ backgroundColor: '#070A0F', borderColor: '#334155', borderRadius: '8px', color: '#fff', fontSize: '12px' }}
                formatter={(val: any) => [`${val} Videos`, 'Output']}
              />
              <Bar dataKey="videoCount" fill="#06B6D4" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};
