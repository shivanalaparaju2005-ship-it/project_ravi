'use client';

import React, { useState, useMemo } from 'react';
import { CombinedVideoData, ContentCategory } from '@/lib/types';
import { formatNumber } from '@/lib/scoring-utils';
import { Search, Filter, ArrowUpDown, Lock, ExternalLink, Eye, ThumbsUp, MessageSquare, Award, Clock } from 'lucide-react';

interface VideoPerformanceTableProps {
  videos: CombinedVideoData[];
  isOwnerConnected: boolean;
  onSelectVideo: (video: CombinedVideoData) => void;
}

export const VideoPerformanceTable: React.FC<VideoPerformanceTableProps> = ({
  videos,
  isOwnerConnected,
  onSelectVideo
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [selectedTier, setSelectedTier] = useState<string>('ALL');
  const [sortField, setSortField] = useState<keyof CombinedVideoData['public']>('viewCount');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');

  const categories: ContentCategory[] = Array.from(
    new Set(videos.map(v => v.public.category))
  );

  const filteredVideos = useMemo(() => {
    return videos
      .filter(v => {
        const matchesSearch = v.public.title.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCat = selectedCategory === 'ALL' || v.public.category === selectedCategory;
        const matchesTier = selectedTier === 'ALL' || v.public.performanceTier === selectedTier;
        return matchesSearch && matchesCat && matchesTier;
      })
      .sort((a, b) => {
        const valA = a.public[sortField];
        const valB = b.public[sortField];
        if (typeof valA === 'number' && typeof valB === 'number') {
          return sortOrder === 'desc' ? valB - valA : valA - valB;
        }
        return 0;
      });
  }, [videos, searchTerm, selectedCategory, selectedTier, sortField, sortOrder]);

  const handleSort = (field: keyof CombinedVideoData['public']) => {
    if (sortField === field) {
      setSortOrder(sortOrder === 'desc' ? 'asc' : 'desc');
    } else {
      setSortField(field);
      setSortOrder('desc');
    }
  };

  return (
    <div className="space-y-4">
      {/* Search & Filter Header Toolbar */}
      <div className="bg-[#0D121D] border border-slate-800 rounded-xl p-4 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Search Bar */}
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search video titles..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-slate-900 border border-slate-700/80 rounded-lg pl-9 pr-4 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 font-sans"
          />
        </div>

        {/* Category & Performance Tier Filter Chips */}
        <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
          <div className="flex items-center space-x-2">
            <Filter className="w-3.5 h-3.5 text-slate-500" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="bg-slate-900 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-slate-300 focus:outline-none focus:border-cyan-500 font-mono"
            >
              <option value="ALL">All Categories ({videos.length})</option>
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          <select
            value={selectedTier}
            onChange={(e) => setSelectedTier(e.target.value)}
            className="bg-slate-900 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-slate-300 focus:outline-none focus:border-cyan-500 font-mono"
          >
            <option value="ALL">All Performance Tiers</option>
            <option value="Outperformer">Outperformer</option>
            <option value="Baseline">Baseline</option>
            <option value="Underperformer">Underperformer</option>
          </select>
        </div>
      </div>

      {/* Main Table */}
      <div className="bg-[#0D121D] border border-slate-800 rounded-xl overflow-x-auto custom-scrollbar shadow-xl">
        <table className="w-full text-left border-collapse min-w-[1000px]">
          <thead>
            <tr className="bg-slate-950/80 border-b border-slate-800 text-[11px] font-mono text-slate-400 uppercase tracking-wider">
              <th className="py-3.5 px-4">Video</th>
              <th className="py-3.5 px-3">Published</th>
              <th className="py-3.5 px-3 cursor-pointer hover:text-white" onClick={() => handleSort('viewCount')}>
                <div className="flex items-center gap-1">
                  <span>Views</span> <ArrowUpDown className="w-3 h-3" />
                </div>
              </th>
              <th className="py-3.5 px-3 cursor-pointer hover:text-white" onClick={() => handleSort('publicEngagementRate')}>
                <div className="flex items-center gap-1">
                  <span>Engagement</span> <ArrowUpDown className="w-3 h-3" />
                </div>
              </th>
              <th className="py-3.5 px-3 cursor-pointer hover:text-white" onClick={() => handleSort('viewsPerDay')}>
                <div className="flex items-center gap-1">
                  <span>Views/Day</span> <ArrowUpDown className="w-3 h-3" />
                </div>
              </th>
              <th className="py-3.5 px-3">Like %</th>
              <th className="py-3.5 px-3">Comment %</th>
              <th className="py-3.5 px-3 bg-slate-900/60 text-cyan-400">
                <div className="flex items-center gap-1">
                  <span>Impressions (Owner)</span>
                </div>
              </th>
              <th className="py-3.5 px-3 bg-slate-900/60 text-cyan-400">
                <div className="flex items-center gap-1">
                  <span>CTR (Owner)</span>
                </div>
              </th>
              <th className="py-3.5 px-3 bg-slate-900/60 text-cyan-400">
                <div className="flex items-center gap-1">
                  <span>Revenue (Owner)</span>
                </div>
              </th>
              <th className="py-3.5 px-4 text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/60 text-xs">
            {filteredVideos.map(video => (
              <tr
                key={video.public.id}
                className="hover:bg-slate-900/60 transition-colors group cursor-pointer"
                onClick={() => onSelectVideo(video)}
              >
                {/* Thumbnail & Title */}
                <td className="py-3 px-4 max-w-sm">
                  <div className="flex items-start space-x-3">
                    <div className="relative shrink-0">
                      <img
                        src={video.public.thumbnailUrl}
                        alt={video.public.title}
                        className="w-20 h-12 rounded object-cover border border-slate-700 bg-slate-900"
                      />
                      <span className="absolute bottom-1 right-1 bg-slate-950/90 text-white font-mono text-[9px] px-1 rounded">
                        {video.public.durationFormatted}
                      </span>
                    </div>
                    <div className="truncate">
                      <h4 className="font-medium text-slate-200 group-hover:text-cyan-400 transition-colors truncate">
                        {video.public.title}
                      </h4>
                      <div className="flex items-center gap-2 mt-1 font-mono text-[10px]">
                        <span className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700">
                          {video.public.category}
                        </span>
                        <span className={`px-1.5 py-0.5 rounded font-semibold ${
                          video.public.performanceTier === 'Outperformer'
                            ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                            : video.public.performanceTier === 'Underperformer'
                            ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                            : 'bg-slate-800 text-slate-400 border border-slate-700'
                        }`}>
                          {video.public.performanceTier}
                        </span>
                      </div>
                    </div>
                  </div>
                </td>

                {/* Published Date */}
                <td className="py-3 px-3 text-slate-400 font-mono">
                  {new Date(video.public.publishedAt).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric'
                  })}
                </td>

                {/* Views */}
                <td className="py-3 px-3 font-mono font-bold text-white">
                  {formatNumber(video.public.viewCount)}
                </td>

                {/* Engagement Rate */}
                <td className="py-3 px-3 font-mono font-semibold text-emerald-400">
                  {video.public.publicEngagementRate}%
                </td>

                {/* Views per Day */}
                <td className="py-3 px-3 font-mono text-cyan-400">
                  {formatNumber(video.public.viewsPerDay)}
                </td>

                {/* Like Rate */}
                <td className="py-3 px-3 font-mono text-slate-300">
                  {video.public.likeRate}%
                </td>

                {/* Comment Rate */}
                <td className="py-3 px-3 font-mono text-slate-300">
                  {video.public.commentRate}%
                </td>

                {/* Owner Impressions */}
                <td className="py-3 px-3 bg-slate-900/30 font-mono text-slate-400">
                  {isOwnerConnected && video.owner.impressions !== null ? (
                    formatNumber(video.owner.impressions)
                  ) : (
                    <span className="text-[10px] text-amber-400 bg-amber-500/10 border border-amber-500/20 px-1.5 py-0.5 rounded flex items-center gap-1 w-fit">
                      <Lock className="w-3 h-3" /> N/A
                    </span>
                  )}
                </td>

                {/* Owner CTR */}
                <td className="py-3 px-3 bg-slate-900/30 font-mono text-slate-400">
                  {isOwnerConnected && video.owner.ctr !== null ? (
                    `${video.owner.ctr}%`
                  ) : (
                    <span className="text-[10px] text-amber-400 bg-amber-500/10 border border-amber-500/20 px-1.5 py-0.5 rounded flex items-center gap-1 w-fit">
                      <Lock className="w-3 h-3" /> N/A
                    </span>
                  )}
                </td>

                {/* Owner Revenue */}
                <td className="py-3 px-3 bg-slate-900/30 font-mono text-slate-400">
                  {isOwnerConnected && video.owner.estimatedRevenue !== null ? (
                    `$${video.owner.estimatedRevenue}`
                  ) : (
                    <span className="text-[10px] text-amber-400 bg-amber-500/10 border border-amber-500/20 px-1.5 py-0.5 rounded flex items-center gap-1 w-fit">
                      <Lock className="w-3 h-3" /> N/A
                    </span>
                  )}
                </td>

                {/* Action button */}
                <td className="py-3 px-4 text-right">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectVideo(video);
                    }}
                    className="p-1.5 rounded-lg bg-slate-800 hover:bg-cyan-500/20 hover:text-cyan-400 text-slate-400 transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
