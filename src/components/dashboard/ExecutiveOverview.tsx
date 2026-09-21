'use client';

import React, { useState } from 'react';
import { ChannelMetrics, CombinedVideoData } from '@/lib/types';
import { formatNumber, calculateChannelMedianViews } from '@/lib/scoring-utils';
import { OwnerMetricsDisclaimer } from '@/components/layout/OwnerMetricsDisclaimer';
import { Users, Eye, Video, BarChart2, TrendingUp, Clock, Lock, Sparkles, AlertCircle, ArrowUpRight, ArrowDownRight, Award } from 'lucide-react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

interface ExecutiveOverviewProps {
  channel: ChannelMetrics;
  videos: CombinedVideoData[];
  isOwnerConnected: boolean;
  onSelectVideo: (video: CombinedVideoData) => void;
}

export const ExecutiveOverview: React.FC<ExecutiveOverviewProps> = ({
  channel,
  videos,
  isOwnerConnected,
  onSelectVideo
}) => {
  const [timeframe, setTimeframe] = useState<'7d' | '30d' | '90d' | '6m' | '1y' | 'all'>('all');

  const totalViews = videos.reduce((acc, v) => acc + v.public.viewCount, 0);
  const avgViews = videos.length > 0 ? Math.round(totalViews / videos.length) : 0;
  const medianViews = calculateChannelMedianViews(videos);

  const avgEngagement = videos.length > 0
    ? (videos.reduce((acc, v) => acc + v.public.publicEngagementRate, 0) / videos.length).toFixed(2)
    : '0';

  const outperformers = videos.filter(v => v.public.performanceTier === 'Outperformer');
  const underperformers = videos.filter(v => v.public.performanceTier === 'Underperformer');

  // Trend data for chart
  const trendData = videos
    .slice()
    .sort((a, b) => new Date(a.public.publishedAt).getTime() - new Date(b.public.publishedAt).getTime())
    .map(v => ({
      date: new Date(v.public.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
      views: v.public.viewCount,
      engagement: v.public.publicEngagementRate,
      title: v.public.title
    }));

  return (
    <div className="space-y-6">
      {/* Top Disclaimer Banner */}
      <OwnerMetricsDisclaimer isOwnerConnected={isOwnerConnected} />

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Card 1: Subscribers */}
        <div className="bg-[#0D121D] border border-slate-800 rounded-xl p-4 relative overflow-hidden group hover:border-cyan-500/50 transition-all">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono uppercase text-slate-400">Subscribers</span>
            <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
              <Users className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-3">
            <div className="text-2xl font-bold font-mono text-white tracking-tight">
              {formatNumber(channel.subscriberCount)}
            </div>
            <div className="flex items-center space-x-1.5 mt-1 text-[11px] text-emerald-400 font-mono">
              <span className="bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">Public Count</span>
              <span className="text-slate-400">Verified</span>
            </div>
          </div>
        </div>

        {/* Card 2: Total Channel Views */}
        <div className="bg-[#0D121D] border border-slate-800 rounded-xl p-4 relative overflow-hidden group hover:border-cyan-500/50 transition-all">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono uppercase text-slate-400">Total Views</span>
            <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
              <Eye className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-3">
            <div className="text-2xl font-bold font-mono text-white tracking-tight">
              {formatNumber(channel.viewCount)}
            </div>
            <div className="flex items-center space-x-1.5 mt-1 text-[11px] text-slate-400 font-mono">
              <span>{videos.length} videos analyzed</span>
            </div>
          </div>
        </div>

        {/* Card 3: Median Views / Video */}
        <div className="bg-[#0D121D] border border-slate-800 rounded-xl p-4 relative overflow-hidden group hover:border-amber-500/50 transition-all">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono uppercase text-slate-400">Median Views</span>
            <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400">
              <BarChart2 className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-3">
            <div className="text-2xl font-bold font-mono text-amber-400 tracking-tight">
              {formatNumber(medianViews)}
            </div>
            <div className="flex items-center space-x-1.5 mt-1 text-[11px] text-slate-400 font-mono">
              <span>Channel Historical Baseline</span>
            </div>
          </div>
        </div>

        {/* Card 4: Average Engagement */}
        <div className="bg-[#0D121D] border border-slate-800 rounded-xl p-4 relative overflow-hidden group hover:border-emerald-500/50 transition-all">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono uppercase text-slate-400">Avg Engagement</span>
            <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
              <TrendingUp className="w-4 h-4" />
            </div>
          </div>
          <div className="mt-3">
            <div className="text-2xl font-bold font-mono text-emerald-400 tracking-tight">
              {avgEngagement}%
            </div>
            <div className="flex items-center space-x-1.5 mt-1 text-[11px] text-slate-400 font-mono">
              <span>(Likes + Comments) / Views</span>
            </div>
          </div>
        </div>
      </div>

      {/* Owner Metrics Cards Row (Explicit N/A states) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Watch Time Card */}
        <div className="bg-[#0D121D] border border-slate-800/80 rounded-xl p-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2.5 rounded-lg bg-slate-900 text-slate-500">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-mono text-slate-400 uppercase">Channel Total Watch Time</div>
              <div className="text-lg font-bold font-mono text-slate-300 mt-0.5">
                {isOwnerConnected ? '1.4M Hours' : 'N/A — Owner access required'}
              </div>
            </div>
          </div>
          {!isOwnerConnected && (
            <span className="text-[11px] bg-amber-500/10 border border-amber-500/20 text-amber-400 px-2.5 py-1 rounded font-mono flex items-center gap-1">
              <Lock className="w-3 h-3" /> Private Metric
            </span>
          )}
        </div>

        {/* Subscriber Growth breakdown */}
        <div className="bg-[#0D121D] border border-slate-800/80 rounded-xl p-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2.5 rounded-lg bg-slate-900 text-slate-500">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-mono text-slate-400 uppercase">30-Day Subscriber Gained vs Lost</div>
              <div className="text-lg font-bold font-mono text-slate-300 mt-0.5">
                {isOwnerConnected ? '+14,200 / -1,100' : 'N/A — Owner access required'}
              </div>
            </div>
          </div>
          {!isOwnerConnected && (
            <span className="text-[11px] bg-amber-500/10 border border-amber-500/20 text-amber-400 px-2.5 py-1 rounded font-mono flex items-center gap-1">
              <Lock className="w-3 h-3" /> Private Metric
            </span>
          )}
        </div>
      </div>

      {/* Performance Trend Chart */}
      <div className="bg-[#0D121D] border border-slate-800 rounded-xl p-5 shadow-lg">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h2 className="text-base font-bold text-white flex items-center gap-2">
              <span>Channel Performance Velocity</span>
              <span className="text-xs px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400 font-mono border border-cyan-500/20">
                Views & Engagement
              </span>
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Historical video performance trend evaluated against channel median baseline ({formatNumber(medianViews)} views)
            </p>
          </div>

          {/* Timeframe Selector */}
          <div className="flex items-center bg-slate-900 p-1 rounded-lg border border-slate-800 text-xs font-mono">
            {(['7d', '30d', '90d', '6m', '1y', 'all'] as const).map(tf => (
              <button
                key={tf}
                onClick={() => setTimeframe(tf)}
                className={`px-2.5 py-1 rounded-md capitalize transition-all ${
                  timeframe === tf
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {tf}
              </button>
            ))}
          </div>
        </div>

        {/* Recharts Area Chart */}
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={trendData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="viewsGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#06B6D4" stopOpacity={0.4} />
                  <stop offset="95%" stopColor="#06B6D4" stopOpacity={0.0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#1E293B" vertical={false} />
              <XAxis dataKey="date" stroke="#64748B" tick={{ fontSize: 11 }} />
              <YAxis stroke="#64748B" tick={{ fontSize: 11 }} tickFormatter={(val) => formatNumber(val)} />
              <Tooltip
                contentStyle={{ backgroundColor: '#070A0F', borderColor: '#334155', borderRadius: '8px', color: '#fff', fontSize: '12px' }}
                formatter={(value: any) => [formatNumber(value), 'Views']}
              />
              <Area type="monotone" dataKey="views" stroke="#06B6D4" strokeWidth={2} fillOpacity={1} fill="url(#viewsGrad)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Top vs Underperforming Video Split Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Performers */}
        <div className="bg-[#0D121D] border border-slate-800 rounded-xl p-5">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <div className="p-1.5 rounded bg-emerald-500/10 text-emerald-400">
                <Award className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
                Top Performing Videos
              </h3>
            </div>
            <span className="text-xs text-emerald-400 font-mono">Above Median ({formatNumber(medianViews)})</span>
          </div>

          <div className="space-y-3">
            {outperformers.slice(0, 3).map((item, idx) => (
              <div
                key={item.public.id}
                onClick={() => onSelectVideo(item)}
                className="p-3 rounded-lg bg-slate-900/80 border border-slate-800/80 hover:border-emerald-500/40 transition-all cursor-pointer flex items-center justify-between group"
              >
                <div className="flex items-center space-x-3 truncate">
                  <span className="text-xs font-mono font-bold text-slate-500 w-4">#{idx + 1}</span>
                  <img
                    src={item.public.thumbnailUrl}
                    alt={item.public.title}
                    className="w-16 h-10 rounded object-cover border border-slate-700 shrink-0"
                  />
                  <div className="truncate">
                    <h4 className="text-xs font-medium text-slate-200 group-hover:text-cyan-400 transition-colors truncate">
                      {item.public.title}
                    </h4>
                    <div className="text-[11px] text-slate-400 mt-0.5 flex items-center space-x-2 font-mono">
                      <span>{formatNumber(item.public.viewCount)} views</span>
                      <span>•</span>
                      <span className="text-emerald-400">{item.public.publicEngagementRate}% engagement</span>
                    </div>
                  </div>
                </div>
                <div className="p-1 text-slate-500 group-hover:text-emerald-400">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Underperforming Videos (Contextualized Diagnosis) */}
        <div className="bg-[#0D121D] border border-slate-800 rounded-xl p-5">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <div className="p-1.5 rounded bg-amber-500/10 text-amber-400">
                <AlertCircle className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
                Underperforming Videos
              </h3>
            </div>
            <span className="text-xs text-amber-400 font-mono">Baseline Diagnosis</span>
          </div>

          <div className="space-y-3">
            {underperformers.slice(0, 3).map((item, idx) => (
              <div
                key={item.public.id}
                onClick={() => onSelectVideo(item)}
                className="p-3 rounded-lg bg-slate-900/80 border border-slate-800/80 hover:border-amber-500/40 transition-all cursor-pointer flex items-center justify-between group"
              >
                <div className="flex items-center space-x-3 truncate">
                  <img
                    src={item.public.thumbnailUrl}
                    alt={item.public.title}
                    className="w-16 h-10 rounded object-cover border border-slate-700 shrink-0 opacity-80"
                  />
                  <div className="truncate">
                    <h4 className="text-xs font-medium text-slate-300 group-hover:text-amber-400 transition-colors truncate">
                      {item.public.title}
                    </h4>
                    <div className="text-[11px] text-slate-400 mt-0.5 flex items-center space-x-2 font-mono">
                      <span>{formatNumber(item.public.viewCount)} views</span>
                      <span>•</span>
                      <span className="text-slate-400">Category: {item.public.category}</span>
                    </div>
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <span className="text-[10px] text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 rounded font-mono">
                    Packaging Fix
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
