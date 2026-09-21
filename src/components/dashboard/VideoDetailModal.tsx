'use client';

import React from 'react';
import { CombinedVideoData } from '@/lib/types';
import { formatNumber } from '@/lib/scoring-utils';
import { X, Lock, ExternalLink, ThumbsUp, MessageSquare, Eye, Award, Sparkles, AlertCircle, FileText, CheckCircle2 } from 'lucide-react';

interface VideoDetailModalProps {
  video: CombinedVideoData | null;
  isOwnerConnected: boolean;
  onClose: () => void;
}

export const VideoDetailModal: React.FC<VideoDetailModalProps> = ({ video, isOwnerConnected, onClose }) => {
  if (!video) return null;

  const { public: pub, owner } = video;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-[#0D121D] border border-slate-800 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto custom-scrollbar shadow-2xl relative">
        {/* Header */}
        <div className="sticky top-0 bg-[#0D121D]/90 backdrop-blur-md border-b border-slate-800 p-6 flex items-center justify-between z-10">
          <div className="flex items-center space-x-3">
            <span className={`px-2.5 py-1 rounded text-xs font-mono font-bold ${
              pub.performanceTier === 'Outperformer'
                ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                : pub.performanceTier === 'Underperformer'
                ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                : 'bg-slate-800 text-slate-300'
            }`}>
              {pub.performanceTier} ({pub.contentPerformanceScore} pts)
            </span>
            <span className="text-xs text-slate-400 font-mono">Category: {pub.category}</span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-6">
          {/* Main Info Hero */}
          <div className="flex flex-col md:flex-row gap-6">
            <div className="relative w-full md:w-80 shrink-0">
              <img
                src={pub.thumbnailUrl}
                alt={pub.title}
                className="w-full h-48 rounded-xl object-cover border border-slate-800 shadow-md"
              />
              <span className="absolute bottom-2 right-2 bg-slate-950/90 text-white font-mono text-xs px-2 py-0.5 rounded">
                {pub.durationFormatted}
              </span>
            </div>

            <div className="space-y-3 flex-1">
              <h2 className="text-lg font-bold text-white leading-snug">
                {pub.title}
              </h2>
              <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed">
                {pub.description}
              </p>

              <div className="flex flex-wrap items-center gap-2 pt-2">
                <a
                  href={pub.url}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-red-600/20 text-red-400 border border-red-500/30 text-xs font-mono flex items-center gap-1.5 hover:bg-red-600/30 transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" /> Watch on YouTube
                </a>
                <span className="text-xs text-slate-500 font-mono">
                  Published {new Date(pub.publishedAt).toLocaleDateString()}
                </span>
              </div>
            </div>
          </div>

          {/* Public Metrics Grid */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" /> Verified Public Performance Metrics
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="bg-slate-900/90 border border-slate-800 p-3 rounded-xl">
                <span className="text-[10px] font-mono uppercase text-slate-400">Total Views</span>
                <div className="text-lg font-bold font-mono text-white mt-1">
                  {formatNumber(pub.viewCount)}
                </div>
              </div>
              <div className="bg-slate-900/90 border border-slate-800 p-3 rounded-xl">
                <span className="text-[10px] font-mono uppercase text-slate-400">Total Likes</span>
                <div className="text-lg font-bold font-mono text-white mt-1">
                  {formatNumber(pub.likeCount)} <span className="text-xs font-normal text-slate-400">({pub.likeRate}%)</span>
                </div>
              </div>
              <div className="bg-slate-900/90 border border-slate-800 p-3 rounded-xl">
                <span className="text-[10px] font-mono uppercase text-slate-400">Comments</span>
                <div className="text-lg font-bold font-mono text-white mt-1">
                  {formatNumber(pub.commentCount)} <span className="text-xs font-normal text-slate-400">({pub.commentRate}%)</span>
                </div>
              </div>
              <div className="bg-slate-900/90 border border-slate-800 p-3 rounded-xl">
                <span className="text-[10px] font-mono uppercase text-slate-400">Public Engagement Rate</span>
                <div className="text-lg font-bold font-mono text-emerald-400 mt-1">
                  {pub.publicEngagementRate}%
                </div>
              </div>
            </div>
          </div>

          {/* Owner Analytics Section (Explicit N/A handling) */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-amber-400 font-bold mb-3 flex items-center gap-2">
              <Lock className="w-4 h-4" /> Owner-Authorized Private Analytics
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {['Impressions', 'Click-Through Rate (CTR)', 'Average Retention', 'Estimated Revenue'].map((metric) => (
                <div key={metric} className="bg-slate-900/50 border border-slate-800/80 p-3 rounded-xl relative">
                  <span className="text-[10px] font-mono uppercase text-slate-500">{metric}</span>
                  <div className="text-sm font-bold font-mono text-amber-400 mt-2 flex items-center gap-1.5">
                    {isOwnerConnected ? 'Data Syncing' : 'N/A — Owner access required'}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Title & Thumbnail Intelligence Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-slate-900/90 border border-slate-800 p-4 rounded-xl space-y-2">
              <h4 className="text-xs font-mono text-cyan-400 font-bold uppercase">Title Structure Analysis</h4>
              <div className="text-xs text-slate-300 space-y-1 font-mono">
                <div>Pattern Type: <span className="text-white">{pub.titleAnalysis.patternType}</span></div>
                <div>Char Count: <span className="text-white">{pub.titleAnalysis.charCount} chars</span> ({pub.titleAnalysis.wordCount} words)</div>
                <div>Language: <span className="text-white">{pub.titleAnalysis.languageMix}</span></div>
                <div>Emotional Triggers: <span className="text-emerald-400">{pub.titleAnalysis.emotionalWords.join(', ') || 'None'}</span></div>
              </div>
            </div>

            <div className="bg-slate-900/90 border border-slate-800 p-4 rounded-xl space-y-2">
              <h4 className="text-xs font-mono text-cyan-400 font-bold uppercase">Thumbnail Visual Properties</h4>
              <div className="text-xs text-slate-300 space-y-1 font-mono">
                <div>Subject: <span className="text-white">{pub.thumbnailTags.mainSubject}</span></div>
                <div>Human Emotion: <span className="text-amber-400">{pub.thumbnailTags.humanEmotion}</span></div>
                <div>Text Density: <span className="text-white">{pub.thumbnailTags.textDensity}</span></div>
                <div>Visual Complexity: <span className="text-white">{pub.thumbnailTags.visualComplexity}</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
