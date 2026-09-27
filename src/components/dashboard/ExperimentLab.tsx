'use client';

import React, { useState } from 'react';
import { DEMO_EXPERIMENTS } from '@/lib/demo-data';
import { ContentExperiment } from '@/lib/types';
import { FlaskConical, ChevronDown, ChevronUp, Beaker, CheckCircle2 } from 'lucide-react';

export const ExperimentLab: React.FC = () => {
  const [experiments, setExperiments] = useState<ContentExperiment[]>(DEMO_EXPERIMENTS);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    if (expandedId === id) setExpandedId(null);
    else setExpandedId(id);
  };

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'Active': return 'bg-amber-500/10 text-amber-400 border-amber-500/20';
      case 'Completed': return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20';
      case 'Draft': return 'bg-slate-500/10 text-slate-400 border-slate-500/20';
      case 'Proposed': return 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20';
      default: return 'bg-slate-500/10 text-slate-400 border-slate-500/20';
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500 max-w-6xl">
      {/* Header */}
      <div>
        <h2 className="text-3xl font-black text-white uppercase tracking-tight font-sans">
          Experiment Lab
        </h2>
        <p className="text-sm text-slate-400 mt-2 font-light">
          A/B testing log. Strategic growth is built on structured iteration, not random guesses.
        </p>
      </div>

      <div className="bg-[#0c1017] border border-slate-800/80 rounded-xl overflow-hidden shadow-xl">
        <div className="p-6 border-b border-slate-800/80 flex items-center justify-between">
          <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono flex items-center gap-2">
            <FlaskConical className="w-4 h-4 text-cyan-400" /> A/B Test Ledger
          </h3>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-900/50 border-b border-slate-800/80 text-[10px] uppercase tracking-wider text-slate-500 font-mono">
                <th className="p-4 font-medium min-w-[200px]">Experiment Name</th>
                <th className="p-4 font-medium">Change Type</th>
                <th className="p-4 font-medium">Primary Metric</th>
                <th className="p-4 font-medium">Status</th>
                <th className="p-4 font-medium text-right">Result</th>
                <th className="p-4 w-10"></th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {experiments.map((exp) => (
                <React.Fragment key={exp.id}>
                  <tr 
                    onClick={() => toggleExpand(exp.id)}
                    className={`border-b border-slate-800/40 hover:bg-slate-900/40 transition-colors cursor-pointer ${expandedId === exp.id ? 'bg-slate-900/20' : ''}`}
                  >
                    <td className="p-4">
                      <div className="font-medium text-slate-200">{exp.name}</div>
                      <div className="text-[10px] text-slate-500 font-mono mt-1">{exp.startDate} → {exp.endDate}</div>
                    </td>
                    <td className="p-4">
                      <span className="text-xs text-slate-400">{exp.changeType}</span>
                    </td>
                    <td className="p-4">
                      <span className="text-xs text-slate-400 font-mono">{exp.primaryMetric}</span>
                    </td>
                    <td className="p-4">
                      <span className={`px-2 py-1 rounded-sm text-[10px] font-mono font-bold tracking-widest uppercase border ${getStatusColor(exp.status)}`}>
                        {exp.status}
                      </span>
                    </td>
                    <td className="p-4 text-right">
                      {exp.status === 'Completed' ? (
                        <span className="text-emerald-400 font-bold font-mono">{exp.resultValue}</span>
                      ) : (
                        <span className="text-slate-500 font-mono italic">Pending</span>
                      )}
                    </td>
                    <td className="p-4 text-slate-500">
                      {expandedId === exp.id ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </td>
                  </tr>
                  
                  {/* Expandable Details Row */}
                  {expandedId === exp.id && (
                    <tr className="bg-slate-900/20 border-b border-slate-800/40">
                      <td colSpan={6} className="p-0">
                        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6 border-l-2 border-indigo-500/50">
                          
                          <div className="space-y-4">
                            <div className="space-y-1">
                              <span className="text-[10px] font-mono uppercase tracking-widest text-indigo-400 font-semibold flex items-center gap-1.5">
                                <Beaker className="w-3 h-3" /> Hypothesis
                              </span>
                              <p className="text-sm text-slate-300 font-light leading-relaxed">
                                {exp.hypothesis}
                              </p>
                            </div>
                            
                            <div className="grid grid-cols-2 gap-4 bg-[#0c1017] p-4 rounded-lg border border-slate-800/80">
                              <div>
                                <div className="text-[10px] text-slate-500 font-mono uppercase tracking-wider mb-1">Baseline</div>
                                <div className="font-mono text-slate-300">{exp.baselineValue}</div>
                              </div>
                              <div>
                                <div className="text-[10px] text-slate-500 font-mono uppercase tracking-wider mb-1">Result</div>
                                <div className="font-mono text-emerald-400 font-bold">{exp.resultValue}</div>
                              </div>
                            </div>
                          </div>
                          
                          <div className="space-y-4">
                            <div className="space-y-1">
                              <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 font-semibold flex items-center gap-1.5">
                                <CheckCircle2 className="w-3 h-3" /> Conclusion & Analysis
                              </span>
                              <p className="text-sm text-slate-300 font-light leading-relaxed">
                                {exp.conclusion}
                              </p>
                            </div>
                            
                            <div className="bg-cyan-950/20 border border-cyan-900/40 p-4 rounded-lg">
                              <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400 font-semibold flex items-center gap-1.5 mb-1">
                                Next Action
                              </span>
                              <p className="text-sm text-cyan-100 font-medium">
                                {exp.nextAction}
                              </p>
                            </div>
                          </div>
                          
                        </div>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

