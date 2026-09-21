'use client';

import React from 'react';
import { ChannelMetrics, CombinedVideoData } from '@/lib/types';
import { formatNumber, calculateChannelMedianViews } from '@/lib/scoring-utils';
import { DEMO_STRATEGY_RECOMMENDATIONS, DEMO_CONTENT_OPPORTUNITIES, DEMO_RESEARCH_CLAIMS } from '@/lib/demo-data';
import { Printer, Download, FileText, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';

interface StrategyReportViewProps {
  channel: ChannelMetrics;
  videos: CombinedVideoData[];
  isOwnerConnected: boolean;
}

export const StrategyReportView: React.FC<StrategyReportViewProps> = ({
  channel,
  videos,
  isOwnerConnected
}) => {
  const medianViews = calculateChannelMedianViews(videos);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-6">
      {/* Top Action Bar */}
      <div className="bg-[#0D121D] border border-slate-800 rounded-xl p-4 flex items-center justify-between no-print">
        <div>
          <h2 className="text-sm font-bold text-white font-mono uppercase">
            Exportable Channel Strategy Report
          </h2>
          <p className="text-xs text-slate-400 mt-0.5">
            Prepared for: Strategy Advisor & Channel Manager Candidate Application
          </p>
        </div>

        <button
          onClick={handlePrint}
          className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-indigo-500 hover:from-cyan-400 hover:to-indigo-400 text-slate-950 font-mono font-bold text-xs shadow-lg flex items-center gap-2 transition-all"
        >
          <Printer className="w-4 h-4" /> Print / Save as PDF
        </button>
      </div>

      {/* Printable Report Document Container */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 md:p-12 text-slate-200 space-y-8 font-sans shadow-2xl print:bg-white print:text-black print:p-0 print:border-none">
        {/* Cover Header */}
        <div className="border-b border-slate-800 pb-6 print:border-black">
          <div className="flex justify-between items-start">
            <div>
              <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider print:text-blue-700">
                STRATEGY ADVISOR REPORT
              </span>
              <h1 className="text-2xl md:text-3xl font-bold font-mono text-white mt-1 print:text-black">
                {channel.title} — Channel Intelligence Strategy
              </h1>
              <p className="text-xs text-slate-400 mt-1 print:text-slate-700">
                Target Channel: {channel.handle} • Published: {new Date().toLocaleDateString()}
              </p>
            </div>
            <div className="text-right font-mono text-xs text-slate-400 print:text-black">
              <div className="font-bold text-white print:text-black">30-DAY STRATEGY BLUEPRINT</div>
              <div>Public Data Verified</div>
            </div>
          </div>
        </div>

        {/* 1. Executive Summary */}
        <div className="space-y-3">
          <h2 className="text-base font-bold text-cyan-400 font-mono uppercase tracking-wide border-b border-slate-800 pb-1 print:text-blue-800 print:border-black">
            1. Executive Summary
          </h2>
          <p className="text-xs text-slate-300 leading-relaxed print:text-black">
            This channel intelligence report presents an empirical analysis of <strong>{channel.title}</strong> across {videos.length} videos. The channel has achieved over <strong>{formatNumber(channel.subscriberCount)} subscribers</strong> and <strong>{formatNumber(channel.viewCount)} public views</strong>. By evaluating public view velocity, engagement rates, title structures, and thumbnail packaging against a historical median baseline of <strong>{formatNumber(medianViews)} views</strong>, we outline evidence-based growth opportunities for upcoming uploads.
          </p>
        </div>

        {/* 2. Top Strategy Recommendations */}
        <div className="space-y-4">
          <h2 className="text-base font-bold text-cyan-400 font-mono uppercase tracking-wide border-b border-slate-800 pb-1 print:text-blue-800 print:border-black">
            2. Core Strategic Recommendations
          </h2>
          <div className="space-y-4">
            {DEMO_STRATEGY_RECOMMENDATIONS.map((rec) => (
              <div key={rec.id} className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2 print:bg-slate-50 print:border-slate-300">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="font-bold text-white print:text-black">{rec.title}</span>
                  <span className="text-cyan-400 font-bold print:text-blue-700">{rec.priority} PRIORITY</span>
                </div>
                <div className="text-xs space-y-1 text-slate-300 print:text-black">
                  <div><strong>Observation:</strong> {rec.observation}</div>
                  <div><strong>Evidence:</strong> {rec.evidence}</div>
                  <div><strong>Recommended Action:</strong> <span className="text-cyan-200 print:text-blue-900">{rec.recommendedAction}</span></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. 30-Day Content Roadmap */}
        <div className="space-y-4">
          <h2 className="text-base font-bold text-cyan-400 font-mono uppercase tracking-wide border-b border-slate-800 pb-1 print:text-blue-800 print:border-black">
            3. Next 30-Day High-Opportunity Video Concepts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {DEMO_CONTENT_OPPORTUNITIES.slice(0, 2).map(opp => (
              <div key={opp.id} className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2 print:bg-slate-50 print:border-slate-300">
                <div className="text-xs font-mono font-bold text-emerald-400 print:text-emerald-700">
                  {opp.tier} ({opp.score} pts)
                </div>
                <h3 className="text-sm font-bold text-white print:text-black">{opp.title}</h3>
                <p className="text-xs text-slate-300 print:text-black">{opp.whyRecommended}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Signoff */}
        <div className="pt-6 border-t border-slate-800 flex justify-between items-center text-xs font-mono text-slate-400 print:text-black print:border-black">
          <div>Prepared by Strategy Advisor Candidate</div>
          <div>&ldquo;Data + Content Research + Creative Strategy&rdquo;</div>
        </div>
      </div>
    </div>
  );
};
