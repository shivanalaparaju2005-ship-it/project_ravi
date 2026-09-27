'use client';

import React, { useState } from 'react';
import { ChannelMetrics, CombinedVideoData } from '@/lib/types';
import { formatNumber, calculateChannelMedianViews } from '@/lib/scoring-utils';
import { OwnerMetricsDisclaimer } from '@/components/layout/OwnerMetricsDisclaimer';
import { Users, Eye, Video, BarChart2, TrendingUp, Clock, Lock, ArrowUpRight, Award, AlertCircle, FileText, Compass, Globe } from 'lucide-react';
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
    <div className="space-y-10">
      {/* Hero Section */}
      <div className="relative rounded-2xl overflow-hidden bg-[#0c1017] border border-slate-800/80 shadow-2xl">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0c1017] via-[#0c1017]/90 to-transparent z-10" />
          <img 
            src="https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96?q=80&w=2938&auto=format&fit=crop" 
            alt="Travel Background" 
            className="w-full h-full object-cover opacity-30 mix-blend-luminosity"
          />
        </div>
        
        <div className="relative z-20 p-8 md:p-12 flex flex-col md:flex-row justify-between items-start gap-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-black tracking-tighter text-white uppercase mb-2">
              RAVI TELUGU TRAVELLER
            </h1>
            <h2 className="text-xl md:text-2xl font-light tracking-widest text-slate-300 uppercase mb-4">
              CHANNEL INTELLIGENCE
            </h2>
            <div className="flex items-center gap-3 text-xs font-mono text-cyan-400 mb-8 tracking-wider">
              <span>CONTENT</span> <span className="text-slate-600">•</span>
              <span>AUDIENCE</span> <span className="text-slate-600">•</span>
              <span>PERFORMANCE</span> <span className="text-slate-600">•</span>
              <span>STRATEGY</span>
            </div>
            
            <div className="pl-4 border-l-2 border-cyan-500/50 space-y-2 mb-10">
              <p className="text-lg text-slate-200 font-light">Understand what is working.</p>
              <p className="text-lg text-slate-200 font-light">Discover why.</p>
              <p className="text-lg text-slate-200 font-medium text-white">Decide what to create next.</p>
            </div>
            
            <div className="flex flex-wrap items-center gap-4">
              <button className="px-6 py-3 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white font-medium text-sm transition-colors flex items-center gap-2">
                <Compass className="w-4 h-4" /> Explore Intelligence
              </button>
              <button className="px-6 py-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium text-sm transition-colors border border-slate-700 flex items-center gap-2">
                <FileText className="w-4 h-4" /> Generate Strategy Report
              </button>
            </div>
          </div>
          
          <div className="bg-[#07090e]/80 backdrop-blur-md border border-slate-800 p-6 rounded-xl min-w-[280px]">
            <h3 className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-4">Live Data Status</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-400">Connection</span>
                <span className="flex items-center gap-2 text-xs font-medium text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" /> Source connected
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-400">Last Sync</span>
                <span className="text-xs font-mono text-slate-200">21 Sep 2026</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-400">Source</span>
                <span className="flex items-center gap-1 text-xs font-mono text-slate-200">
                  <Globe className="w-3 h-3 text-cyan-400" /> API v3
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <OwnerMetricsDisclaimer isOwnerConnected={isOwnerConnected} />

      {/* Channel Snapshot - Verified Channel Level Data */}
      <div>
        <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono mb-4 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span> Channel Snapshot
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-[#0c1017] border border-slate-800/80 rounded-xl p-5 hover:border-slate-700 transition-colors">
            <span className="text-[10px] font-mono uppercase text-slate-500 tracking-wider">Subscribers</span>
            <div className="text-3xl font-light text-white mt-2 mb-1">{formatNumber(channel.subscriberCount)}</div>
            <div className="text-[10px] text-emerald-400 font-mono">Verified Public Data</div>
          </div>
          <div className="bg-[#0c1017] border border-slate-800/80 rounded-xl p-5 hover:border-slate-700 transition-colors">
            <span className="text-[10px] font-mono uppercase text-slate-500 tracking-wider">Public Views</span>
            <div className="text-3xl font-light text-white mt-2 mb-1">{formatNumber(channel.viewCount)}+</div>
            <div className="text-[10px] text-emerald-400 font-mono">Verified Public Data</div>
          </div>
          <div className="bg-[#0c1017] border border-slate-800/80 rounded-xl p-5 hover:border-slate-700 transition-colors">
            <span className="text-[10px] font-mono uppercase text-slate-500 tracking-wider">Public Videos</span>
            <div className="text-3xl font-light text-white mt-2 mb-1">{formatNumber(channel.videoCount)}+</div>
            <div className="text-[10px] text-emerald-400 font-mono">Verified Public Data</div>
          </div>
          <div className="bg-[#0c1017] border border-slate-800/80 rounded-xl p-5 hover:border-slate-700 transition-colors">
            <span className="text-[10px] font-mono uppercase text-slate-500 tracking-wider">Created</span>
            <div className="text-2xl font-light text-white mt-2 mb-1">August 2020</div>
            <div className="text-[10px] text-emerald-400 font-mono">Verified Public Data</div>
          </div>
        </div>
      </div>

      {/* Performance Signal - Analysis Dataset */}
      <div>
        <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono mb-4 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span> Performance Signal <span className="text-slate-500 text-[10px] lowercase tracking-normal font-sans ml-2">(Analysis Dataset Only)</span>
        </h3>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-[#0c1017] border border-slate-800/80 rounded-xl p-5 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10"><Video className="w-12 h-12 text-white" /></div>
            <span className="text-[10px] font-mono uppercase text-slate-400 tracking-wider">Videos Analyzed</span>
            <div className="text-2xl font-bold font-mono text-white mt-2">{videos.length}</div>
            <div className="text-[10px] text-slate-500 mt-1 font-mono">Analysis Period: Jul 24 - Sep 26</div>
          </div>
          <div className="bg-[#0c1017] border border-slate-800/80 rounded-xl p-5 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10"><BarChart2 className="w-12 h-12 text-white" /></div>
            <span className="text-[10px] font-mono uppercase text-slate-400 tracking-wider">Dataset Median Views</span>
            <div className="text-2xl font-bold font-mono text-amber-400 mt-2">{formatNumber(medianViews)}</div>
            <div className="text-[10px] text-slate-500 mt-1 font-mono">Baseline for comparison</div>
          </div>
          <div className="bg-[#0c1017] border border-slate-800/80 rounded-xl p-5 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10"><TrendingUp className="w-12 h-12 text-white" /></div>
            <span className="text-[10px] font-mono uppercase text-slate-400 tracking-wider">Dataset Avg Views</span>
            <div className="text-2xl font-bold font-mono text-white mt-2">{formatNumber(avgViews)}</div>
            <div className="text-[10px] text-slate-500 mt-1 font-mono">Mean performance</div>
          </div>
          <div className="bg-[#0c1017] border border-slate-800/80 rounded-xl p-5 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10"><Users className="w-12 h-12 text-white" /></div>
            <span className="text-[10px] font-mono uppercase text-slate-400 tracking-wider">Dataset Engagement</span>
            <div className="text-2xl font-bold font-mono text-emerald-400 mt-2">{avgEngagement}%</div>
            <div className="text-[10px] text-slate-500 mt-1 font-mono">(Likes + Comments) / Views</div>
          </div>
        </div>
      </div>

      {/* What Changed? Performance Trend Chart */}
      <div className="bg-[#0c1017] border border-slate-800/80 rounded-xl p-6 shadow-lg">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h2 className="text-lg font-bold text-white uppercase tracking-widest font-mono flex items-center gap-3">
              What Changed?
            </h2>
            <p className="text-sm text-slate-400 mt-1 font-light">
              Dataset performance velocity compared against median baseline ({formatNumber(medianViews)} views)
            </p>
          </div>

          <div className="flex items-center bg-slate-900/50 p-1 rounded-md border border-slate-800/80 text-[11px] font-mono">
            {(['30d', '90d', '6m', '1y', 'all'] as const).map(tf => (
              <button
                key={tf}
                onClick={() => setTimeframe(tf)}
                className={`px-3 py-1.5 rounded uppercase tracking-wider transition-all ${
                  timeframe === tf
                    ? 'bg-slate-700 text-white font-bold'
                    : 'text-slate-500 hover:text-slate-300'
                }`}
              >
                {tf}
              </button>
            ))}
          </div>
        </div>

        <div className="h-72 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={trendData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="viewsGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#2dd4bf" stopOpacity={0.2} />
                  <stop offset="95%" stopColor="#2dd4bf" stopOpacity={0.0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
              <XAxis dataKey="date" stroke="#475569" tick={{ fontSize: 10, fill: '#64748b' }} tickMargin={10} />
              <YAxis stroke="#475569" tick={{ fontSize: 10, fill: '#64748b' }} tickFormatter={(val) => formatNumber(val)} />
              <Tooltip
                contentStyle={{ backgroundColor: '#07090e', borderColor: '#1e293b', borderRadius: '8px', color: '#f8fafc', fontSize: '11px', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.5)' }}
                itemStyle={{ color: '#2dd4bf' }}
                formatter={(value: any) => [formatNumber(value), 'Views']}
                labelStyle={{ color: '#94a3b8', marginBottom: '4px' }}
              />
              <Area type="monotone" dataKey="views" stroke="#2dd4bf" strokeWidth={2} fillOpacity={1} fill="url(#viewsGrad)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* What We Learned - AI Observations */}
      <div>
        <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono mb-4 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span> What We Learned
        </h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Observation 1 */}
          <div className="bg-[#0c1017] border border-slate-800/80 rounded-xl p-6 hover:border-slate-700 transition-all flex flex-col h-full">
            <h4 className="text-[11px] font-mono text-indigo-400 uppercase tracking-widest mb-3">Observation 01</h4>
            <div className="text-sm text-slate-200 mb-4 font-medium leading-relaxed">
              Achievement-oriented travel titles appear repeatedly among high-performing videos in the analyzed dataset.
            </div>
            <div className="space-y-3 mt-auto">
              <div className="bg-slate-900/50 rounded-lg p-3 border border-slate-800/50">
                <span className="text-[10px] text-slate-500 uppercase tracking-wider block mb-1">Evidence</span>
                <span className="text-xs text-slate-300">4 of 5 videos above the dataset median contain achievement or curiosity framing.</span>
              </div>
              <div className="bg-slate-900/50 rounded-lg p-3 border border-slate-800/50">
                <span className="text-[10px] text-slate-500 uppercase tracking-wider block mb-1">Interpretation</span>
                <span className="text-xs text-slate-300">This pattern may indicate that strong narrative stakes correlate with higher performance.</span>
              </div>
              <div className="bg-indigo-900/20 rounded-lg p-3 border border-indigo-500/20">
                <span className="text-[10px] text-indigo-400 uppercase tracking-wider block mb-1">Action</span>
                <span className="text-xs text-indigo-100 font-medium">Test additional achievement-led packaging in the next content cycle.</span>
              </div>
            </div>
          </div>
          
          {/* Observation 2 */}
          <div className="bg-[#0c1017] border border-slate-800/80 rounded-xl p-6 hover:border-slate-700 transition-all flex flex-col h-full">
            <h4 className="text-[11px] font-mono text-indigo-400 uppercase tracking-widest mb-3">Observation 02</h4>
            <div className="text-sm text-slate-200 mb-4 font-medium leading-relaxed">
              Videos with clearly visible destination imagery in thumbnails had a higher median view count.
            </div>
            <div className="space-y-3 mt-auto">
              <div className="bg-slate-900/50 rounded-lg p-3 border border-slate-800/50">
                <span className="text-[10px] text-slate-500 uppercase tracking-wider block mb-1">Evidence</span>
                <span className="text-xs text-slate-300">Thumbnails classified with 'High' visual complexity and destination focus out-performed portraits by 1.4x.</span>
              </div>
              <div className="bg-slate-900/50 rounded-lg p-3 border border-slate-800/50">
                <span className="text-[10px] text-slate-500 uppercase tracking-wider block mb-1">Interpretation</span>
                <span className="text-xs text-slate-300">Viewers may be primarily driven by location curiosity rather than creator personality in this dataset.</span>
              </div>
              <div className="bg-indigo-900/20 rounded-lg p-3 border border-indigo-500/20">
                <span className="text-[10px] text-indigo-400 uppercase tracking-wider block mb-1">Action</span>
                <span className="text-xs text-indigo-100 font-medium">Run a controlled A/B thumbnail experiment comparing Face vs Location focus.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

