'use client';

import React, { useState, useMemo } from 'react';
import { DEMO_CONTENT_OPPORTUNITIES } from '@/lib/demo-data';
import { Target, Search, ChevronDown, ChevronUp, Sparkles, Navigation } from 'lucide-react';
import { ContentCategory } from '@/lib/types';

export const ContentOpportunityMap: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const categories = ['All', ...Array.from(new Set(DEMO_CONTENT_OPPORTUNITIES.map(o => o.locationCategory)))];

  const filteredOpportunities = useMemo(() => {
    if (selectedCategory === 'All') return DEMO_CONTENT_OPPORTUNITIES;
    return DEMO_CONTENT_OPPORTUNITIES.filter(o => o.locationCategory === selectedCategory);
  }, [selectedCategory]);

  const toggleExpand = (id: string) => {
    if (expandedId === id) setExpandedId(null);
    else setExpandedId(id);
  };

  const getTierColor = (tier: string) => {
    switch(tier) {
      case 'Double Down': return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20';
      case 'Test': return 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20';
      case 'Improve Packaging': return 'bg-amber-500/10 text-amber-400 border-amber-500/20';
      case 'Explore': return 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20';
      case 'Research First': return 'bg-rose-500/10 text-rose-400 border-rose-500/20';
      default: return 'bg-slate-500/10 text-slate-400 border-slate-500/20';
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500 max-w-6xl">
      {/* Header */}
      <div>
        <h2 className="text-3xl font-black text-white uppercase tracking-tight font-sans">
          Content Opportunity Radar
        </h2>
        <p className="text-sm text-slate-400 mt-2 font-light">
          Identifies strategic topic gaps and doubling-down opportunities based on historical performance vectors.
        </p>
      </div>

      {/* Filter Controls */}
      <div className="flex flex-wrap gap-2">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3 py-1.5 rounded-full text-xs font-mono transition-all border ${
              selectedCategory === cat 
              ? 'bg-cyan-500/20 text-cyan-400 border-cyan-500/40 shadow-sm' 
              : 'bg-[#0c1017] text-slate-400 border-slate-800/80 hover:bg-slate-900'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Opportunity Table */}
      <div className="bg-[#0c1017] border border-slate-800/80 rounded-xl overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-900/50 border-b border-slate-800/80 text-[10px] uppercase tracking-wider text-slate-500 font-mono">
                <th className="p-4 font-medium min-w-[250px]">Story Idea</th>
                <th className="p-4 font-medium">Location Category</th>
                <th className="p-4 font-medium">Strategy Tier</th>
                <th className="p-4 font-medium text-right">Opp Score</th>
                <th className="p-4 w-10"></th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {filteredOpportunities.map((opp) => (
                <React.Fragment key={opp.id}>
                  <tr 
                    onClick={() => toggleExpand(opp.id)}
                    className={`border-b border-slate-800/40 hover:bg-slate-900/40 transition-colors cursor-pointer ${expandedId === opp.id ? 'bg-slate-900/20' : ''}`}
                  >
                    <td className="p-4">
                      <div className="font-medium text-slate-200">{opp.title}</div>
                    </td>
                    <td className="p-4">
                      <span className="text-xs text-slate-400">{opp.locationCategory}</span>
                    </td>
                    <td className="p-4">
                      <span className={`px-2.5 py-1 rounded-sm text-[10px] font-mono font-bold tracking-widest uppercase border ${getTierColor(opp.tier)}`}>
                        {opp.tier}
                      </span>
                    </td>
                    <td className="p-4 text-right">
                      <span className="text-lg font-bold text-cyan-400 font-mono">{opp.score}</span>
                      <span className="text-[10px] text-slate-500 ml-1">/100</span>
                    </td>
                    <td className="p-4 text-slate-500">
                      {expandedId === opp.id ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </td>
                  </tr>
                  
                  {/* Expandable Details Row */}
                  {expandedId === opp.id && (
                    <tr className="bg-slate-900/20 border-b border-slate-800/40">
                      <td colSpan={5} className="p-0">
                        <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-6 border-l-2 border-cyan-500/50">
                          
                          <div className="lg:col-span-2 space-y-4">
                            <div className="space-y-1">
                              <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 font-semibold flex items-center gap-1.5">
                                <Sparkles className="w-3 h-3" /> Why Recommended
                              </span>
                              <p className="text-sm text-slate-300 font-light leading-relaxed">
                                {opp.whyRecommended}
                              </p>
                            </div>
                            
                            <div className="space-y-1">
                              <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400 font-semibold flex items-center gap-1.5">
                                <Navigation className="w-3 h-3" /> Suggested Title Pattern
                              </span>
                              <p className="text-sm text-cyan-100 font-medium">
                                "{opp.suggestedTitlePattern}"
                              </p>
                            </div>
                          </div>
                          
                          <div className="bg-[#0c1017] border border-slate-800/80 rounded-lg p-4 font-mono text-[10px] space-y-3">
                            <div className="text-slate-500 uppercase tracking-wider mb-2 border-b border-slate-800/80 pb-2">Vector Breakdown</div>
                            <div className="flex justify-between items-center">
                              <span className="text-slate-400">Audience Relevance</span>
                              <span className="text-emerald-400 font-bold">{opp.audienceRelevance}/10</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-slate-400">Historical Fit</span>
                              <span className="text-emerald-400 font-bold">{opp.historicalFit}/10</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-slate-400">Uniqueness</span>
                              <span className="text-emerald-400 font-bold">{opp.uniqueness}/10</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-slate-400">Story Potential</span>
                              <span className="text-emerald-400 font-bold">{opp.storyPotential}/10</span>
                            </div>
                            <div className="flex justify-between items-center pt-2 border-t border-slate-800/80">
                              <span className="text-slate-400">Target Duration</span>
                              <span className="text-cyan-400 font-bold">{opp.targetDurationMin}m</span>
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

