'use client';

import React, { useState } from 'react';
import { DEMO_EXPERIMENTS } from '@/lib/demo-data';
import { ContentExperiment } from '@/lib/types';
import { FlaskConical, Plus, CheckCircle, Sparkles, TrendingUp, ArrowRight } from 'lucide-react';

export const ExperimentLab: React.FC = () => {
  const [experiments, setExperiments] = useState<ContentExperiment[]>(DEMO_EXPERIMENTS);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-[#0D121D] border border-slate-800 rounded-xl p-5 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
            <FlaskConical className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-base font-bold text-white uppercase font-mono tracking-wider">
              Content Experiment Lab & A/B Test Tracker
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Empirical testing framework for title packaging, thumbnail hooks, and video pacing
            </p>
          </div>
        </div>
      </div>

      {/* Experiments Stack */}
      <div className="space-y-4">
        {experiments.map((exp) => (
          <div
            key={exp.id}
            className="bg-[#0D121D] border border-slate-800 rounded-xl p-5 space-y-4 shadow-lg hover:border-cyan-500/40 transition-all"
          >
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
              <div className="flex items-center space-x-2">
                <span className="px-2.5 py-0.5 rounded text-xs font-mono font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  {exp.status}
                </span>
                <span className="text-xs font-mono text-cyan-400">
                  Test Type: <strong>{exp.changeType}</strong>
                </span>
              </div>
              <span className="text-xs font-mono text-slate-400">
                Window: {exp.startDate} → {exp.endDate}
              </span>
            </div>

            <h3 className="text-base font-bold text-white">
              {exp.name}
            </h3>

            <p className="text-xs text-slate-300">
              <strong className="text-slate-400 font-mono">Hypothesis:</strong> {exp.hypothesis}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs bg-slate-900/80 p-3 rounded-lg border border-slate-800">
              <div>
                <span className="text-slate-500 block">Baseline Metric</span>
                <span className="text-slate-300">{exp.baselineValue}</span>
              </div>
              <div>
                <span className="text-slate-500 block">Tested Result</span>
                <span className="text-emerald-400 font-bold">{exp.resultValue}</span>
              </div>
            </div>

            <div className="p-3 rounded-lg bg-cyan-950/30 border border-cyan-500/30 space-y-1 font-mono text-xs">
              <span className="text-cyan-400 font-bold uppercase text-[10px] block">Conclusion & Strategic Action</span>
              <p className="text-slate-200">{exp.conclusion}</p>
              <div className="text-emerald-400 font-bold mt-1">Next Action: {exp.nextAction}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
