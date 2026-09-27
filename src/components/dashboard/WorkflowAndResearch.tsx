'use client';

import React, { useState } from 'react';
import { DEMO_RESEARCH_CLAIMS } from '@/lib/demo-data';
import { ResearchClaimItem } from '@/lib/types';
import { CheckCircle2, ShieldCheck, ExternalLink, Plus, AlertCircle, FileCheck, BookOpen, Clock, Building2, GraduationCap } from 'lucide-react';

export const WorkflowAndResearch: React.FC = () => {
  const [claims, setClaims] = useState<ResearchClaimItem[]>(DEMO_RESEARCH_CLAIMS);

  // New claim form state
  const [newClaim, setNewClaim] = useState('');
  const [newVideoTitle, setNewVideoTitle] = useState('');
  const [newSourceUrl, setNewSourceUrl] = useState('');

  const handleAddClaim = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newClaim || !newVideoTitle) return;
    const item: ResearchClaimItem = {
      id: `claim_${Date.now()}`,
      claim: newClaim,
      targetVideoTitle: newVideoTitle,
      category: 'Fact Check',
      sourceUrl: newSourceUrl || 'https://official-source.gov',
      sourceType: 'Government',
      verificationStatus: 'Not Verified',
      lastCheckedDate: new Date().toISOString().split('T')[0],
      notes: 'Added via research checklist manager.'
    };
    setClaims([...claims, item]);
    setNewClaim('');
    setNewVideoTitle('');
    setNewSourceUrl('');
  };

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'Verified': return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20';
      case 'Needs Review': return 'bg-amber-500/10 text-amber-400 border-amber-500/20';
      case 'Not Verified': return 'bg-slate-500/10 text-slate-400 border-slate-500/20';
      case 'Rejected': return 'bg-rose-500/10 text-rose-400 border-rose-500/20';
      default: return 'bg-slate-500/10 text-slate-400 border-slate-500/20';
    }
  };

  const getSourceIcon = (type?: string) => {
    switch(type) {
      case 'Government': return <Building2 className="w-3.5 h-3.5 text-slate-400" />;
      case 'Academic': return <GraduationCap className="w-3.5 h-3.5 text-slate-400" />;
      default: return <FileCheck className="w-3.5 h-3.5 text-slate-400" />;
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500 max-w-6xl">
      {/* Header */}
      <div>
        <h2 className="text-3xl font-black text-white uppercase tracking-tight font-sans">
          Research Desk
        </h2>
        <p className="text-sm text-slate-400 mt-2 font-light">
          Fact-checking workflow. The system never silently converts an unverified claim into a verified claim.
        </p>
      </div>

      <div className="bg-[#0c1017] border border-slate-800/80 rounded-xl overflow-hidden shadow-xl">
        <div className="p-6 border-b border-slate-800/80 flex items-center justify-between">
          <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-cyan-400" /> Fact-Checking Log
          </h3>
          <div className="flex gap-2">
            <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-1 rounded">
              Verified: {claims.filter(c => c.verificationStatus === 'Verified').length}
            </span>
            <span className="text-[10px] font-mono text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2 py-1 rounded">
              Pending: {claims.filter(c => c.verificationStatus !== 'Verified').length}
            </span>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-900/50 border-b border-slate-800/80 text-[10px] uppercase tracking-wider text-slate-500 font-mono">
                <th className="p-4 font-medium min-w-[200px]">Story Idea / Video</th>
                <th className="p-4 font-medium min-w-[250px]">Claim</th>
                <th className="p-4 font-medium min-w-[150px]">Source</th>
                <th className="p-4 font-medium">Status</th>
                <th className="p-4 font-medium text-right">Last Checked</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {claims.map((c) => (
                <tr key={c.id} className="border-b border-slate-800/40 hover:bg-slate-900/30 transition-colors group">
                  <td className="p-4 align-top">
                    <div className="font-medium text-slate-200">{c.targetVideoTitle}</div>
                  </td>
                  <td className="p-4 align-top text-slate-300 font-light leading-relaxed">
                    "{c.claim}"
                  </td>
                  <td className="p-4 align-top">
                    <div className="flex items-start gap-2 mb-1">
                      {getSourceIcon(c.sourceType)}
                      <span className="text-[11px] font-mono text-slate-400 tracking-wider uppercase">{c.sourceType || 'Primary Source'}</span>
                    </div>
                    <a href={c.sourceUrl} target="_blank" rel="noreferrer" className="text-cyan-400 hover:text-cyan-300 text-[11px] font-mono flex items-center gap-1 group-hover:underline">
                      View Source <ExternalLink className="w-3 h-3" />
                    </a>
                  </td>
                  <td className="p-4 align-top">
                    <span className={`px-2 py-1 rounded-sm text-[10px] font-mono font-bold tracking-widest uppercase border ${getStatusColor(c.verificationStatus)}`}>
                      {c.verificationStatus}
                    </span>
                  </td>
                  <td className="p-4 align-top text-right text-slate-400 font-mono text-xs">
                    {c.lastCheckedDate}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add New Fact-Check Claim Form */}
      <form onSubmit={handleAddClaim} className="p-6 rounded-xl bg-[#0c1017] border border-slate-800/80 space-y-4 shadow-xl">
        <div className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-widest flex items-center gap-2 mb-4">
          <Plus className="w-4 h-4" /> Record New Fact-Check Claim
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 font-mono text-xs">
          <div className="lg:col-span-1">
            <label className="block text-[10px] text-slate-500 uppercase tracking-wider mb-2">Target Story/Video</label>
            <input
              type="text"
              placeholder="e.g. Europe Visa Guide..."
              value={newVideoTitle}
              onChange={(e) => setNewVideoTitle(e.target.value)}
              className="w-full bg-slate-900/50 border border-slate-800 rounded-md px-3 py-2 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-500/50 focus:bg-slate-900 transition-all"
            />
          </div>
          <div className="lg:col-span-2">
            <label className="block text-[10px] text-slate-500 uppercase tracking-wider mb-2">Claim to Verify</label>
            <input
              type="text"
              placeholder="e.g. Country X has the highest..."
              value={newClaim}
              onChange={(e) => setNewClaim(e.target.value)}
              className="w-full bg-slate-900/50 border border-slate-800 rounded-md px-3 py-2 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-500/50 focus:bg-slate-900 transition-all"
            />
          </div>
          <div className="lg:col-span-1">
            <label className="block text-[10px] text-slate-500 uppercase tracking-wider mb-2">Source URL</label>
            <input
              type="text"
              placeholder="https://..."
              value={newSourceUrl}
              onChange={(e) => setNewSourceUrl(e.target.value)}
              className="w-full bg-slate-900/50 border border-slate-800 rounded-md px-3 py-2 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-500/50 focus:bg-slate-900 transition-all"
            />
          </div>
        </div>
        <div className="flex justify-end pt-2">
          <button
            type="submit"
            className="px-5 py-2 rounded-md bg-cyan-600 hover:bg-cyan-500 text-white font-medium text-xs shadow-md transition-all flex items-center gap-2"
          >
            Submit for Review
          </button>
        </div>
      </form>
    </div>
  );
};

