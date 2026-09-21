'use client';

import React, { useState } from 'react';
import { DEMO_RESEARCH_CLAIMS } from '@/lib/demo-data';
import { ResearchClaimItem } from '@/lib/types';
import { GitMerge, CheckCircle2, ShieldCheck, ExternalLink, Plus, AlertCircle, FileCheck, ArrowRight } from 'lucide-react';

export const WorkflowAndResearch: React.FC = () => {
  const [claims, setClaims] = useState<ResearchClaimItem[]>(DEMO_RESEARCH_CLAIMS);

  // New claim form state
  const [newClaim, setNewClaim] = useState('');
  const [newVideoTitle, setNewVideoTitle] = useState('');
  const [newSourceUrl, setNewSourceUrl] = useState('');

  const workflowSteps = [
    { num: '01', title: 'IDEA', desc: 'Concept genesis from data gaps' },
    { num: '02', title: 'AUDIENCE QUESTION', desc: 'Core curiosity question' },
    { num: '03', title: 'RESEARCH', desc: 'Ground truth data gathering' },
    { num: '04', title: 'FACT CHECK', desc: 'Verify rules, visa, prices' },
    { num: '05', title: 'UNIQUE ANGLE', desc: 'Telugu perspective twist' },
    { num: '06', title: 'STORY STRUCTURE', desc: 'Pacing & hook design' },
    { num: '07', title: 'TITLE', desc: 'Curiosity & search packaging' },
    { num: '08', title: 'THUMBNAIL', desc: 'Contrast & visual anchor' },
    { num: '09', title: 'VIDEO', desc: 'High-retention production' },
    { num: '10', title: 'MEASURE', desc: 'Analytics sync & performance' },
    { num: '11', title: 'LEARN', desc: 'Extract strategic takeaways' },
    { num: '12', title: 'NEXT VIDEO', desc: 'Scale winning blueprint' }
  ];

  const handleAddClaim = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newClaim || !newVideoTitle) return;
    const item: ResearchClaimItem = {
      id: `claim_${Date.now()}`,
      claim: newClaim,
      targetVideoTitle: newVideoTitle,
      category: 'Fact Check',
      sourceUrl: newSourceUrl || 'https://official-source.gov',
      verificationStatus: 'Needs Review',
      lastCheckedDate: new Date().toISOString().split('T')[0],
      notes: 'Added via research checklist manager.'
    };
    setClaims([...claims, item]);
    setNewClaim('');
    setNewVideoTitle('');
    setNewSourceUrl('');
  };

  return (
    <div className="space-y-8">
      {/* Workflow Philosophy Interactive Cycle */}
      <div className="bg-[#0D121D] border border-slate-800 rounded-xl p-6 space-y-6">
        <div className="flex items-center space-x-3">
          <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
            <GitMerge className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-base font-bold text-white uppercase font-mono tracking-wider">
              12-Step Strategic Content Workflow Philosophy
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Closed-loop content creation framework from data-informed idea generation to post-upload analytics learning
            </p>
          </div>
        </div>

        {/* 12 Step Flow Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 font-mono text-xs">
          {workflowSteps.map((step, idx) => (
            <div
              key={step.num}
              className="p-3 rounded-lg bg-slate-900/90 border border-slate-800 hover:border-cyan-500/50 transition-all group relative space-y-1"
            >
              <div className="text-[10px] text-cyan-400 font-bold">{step.num}</div>
              <div className="font-bold text-white group-hover:text-cyan-400 transition-colors text-[11px]">
                {step.title}
              </div>
              <div className="text-[10px] text-slate-400 line-clamp-2">{step.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Content Research & Correctness Checklist Module */}
      <div className="bg-[#0D121D] border border-slate-800 rounded-xl p-6 space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white uppercase font-mono tracking-wider">
                Content Research & Accuracy Verification Checklist
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Fact-check log for prices, travel rules, visa requirements, and locations to guarantee channel authority
              </p>
            </div>
          </div>
        </div>

        {/* Claims Table */}
        <div className="space-y-3">
          {claims.map((c) => (
            <div key={c.id} className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center space-x-2">
                  <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold ${
                    c.verificationStatus === 'Verified'
                      ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                      : c.verificationStatus === 'Needs Review'
                      ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                      : 'bg-rose-500/10 text-rose-400 border border-rose-500/20'
                  }`}>
                    {c.verificationStatus}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    Video: <strong className="text-white">{c.targetVideoTitle}</strong>
                  </span>
                </div>
                <span className="text-[10px] font-mono text-slate-500">Checked: {c.lastCheckedDate}</span>
              </div>

              <p className="text-xs text-slate-200 font-medium">
                Claim: &ldquo;{c.claim}&rdquo;
              </p>

              <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono text-slate-400 pt-1 border-t border-slate-800/60">
                <div className="flex items-center gap-1 text-cyan-400">
                  <ExternalLink className="w-3 h-3" />
                  <a href={c.sourceUrl} target="_blank" rel="noreferrer" className="hover:underline truncate max-w-xs">
                    {c.sourceUrl}
                  </a>
                </div>
                <div className="text-slate-400">{c.notes}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Add New Fact-Check Claim Form */}
        <form onSubmit={handleAddClaim} className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
          <div className="text-xs font-mono text-cyan-400 font-bold uppercase flex items-center gap-1.5">
            <Plus className="w-4 h-4" /> Record New Fact-Check Claim
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 font-mono text-xs">
            <input
              type="text"
              placeholder="Target Video Title..."
              value={newVideoTitle}
              onChange={(e) => setNewVideoTitle(e.target.value)}
              className="bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
            />
            <input
              type="text"
              placeholder="Claim details (e.g., Visa fee $25 USD)..."
              value={newClaim}
              onChange={(e) => setNewClaim(e.target.value)}
              className="bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 md:col-span-2"
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-4 py-2 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white font-mono font-bold text-xs shadow-md transition-all"
            >
              Verify & Save Claim
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
