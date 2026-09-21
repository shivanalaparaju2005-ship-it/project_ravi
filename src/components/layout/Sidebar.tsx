'use client';

import React from 'react';
import {
  LayoutDashboard,
  PlaySquare,
  Compass,
  Image as ImageIcon,
  Type,
  Users,
  TrendingUp,
  Award,
  Lightbulb,
  Target,
  GitMerge,
  FlaskConical,
  Database,
  FileCheck,
  ChevronRight
} from 'lucide-react';

export type NavSection =
  | 'overview'
  | 'performance'
  | 'content'
  | 'thumbnail'
  | 'title'
  | 'audience'
  | 'growth'
  | 'scoring'
  | 'strategy'
  | 'opportunities'
  | 'workflow'
  | 'experiments'
  | 'quality'
  | 'report';

interface SidebarProps {
  activeSection: NavSection;
  onSelectSection: (section: NavSection) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ activeSection, onSelectSection }) => {
  const menuItems: { id: NavSection; label: string; icon: React.ReactNode; category?: string }[] = [
    { id: 'overview', label: '1. Executive Overview', icon: <LayoutDashboard className="w-4 h-4" />, category: 'Core Intelligence' },
    { id: 'performance', label: '2. Video Performance', icon: <PlaySquare className="w-4 h-4" />, category: 'Core Intelligence' },
    { id: 'content', label: '3. Content Intelligence', icon: <Compass className="w-4 h-4" />, category: 'Deep Analytics' },
    { id: 'thumbnail', label: '4. Thumbnail Intelligence', icon: <ImageIcon className="w-4 h-4" />, category: 'Deep Analytics' },
    { id: 'title', label: '5. Title Intelligence', icon: <Type className="w-4 h-4" />, category: 'Deep Analytics' },
    { id: 'audience', label: '6. Audience & Engagement', icon: <Users className="w-4 h-4" />, category: 'Deep Analytics' },
    { id: 'growth', label: '7. Growth Analysis', icon: <TrendingUp className="w-4 h-4" />, category: 'Deep Analytics' },
    { id: 'scoring', label: '8. Content Performance Score', icon: <Award className="w-4 h-4" />, category: 'Strategy & Engine' },
    { id: 'strategy', label: '9. Strategy Recommendations', icon: <Lightbulb className="w-4 h-4" />, category: 'Strategy & Engine' },
    { id: 'opportunities', label: '10. Content Opportunities', icon: <Target className="w-4 h-4" />, category: 'Strategy & Engine' },
    { id: 'workflow', label: '11. Workflow & Research', icon: <GitMerge className="w-4 h-4" />, category: 'Execution & Quality' },
    { id: 'experiments', label: '12. Content Experiment Lab', icon: <FlaskConical className="w-4 h-4" />, category: 'Execution & Quality' },
    { id: 'quality', label: '13. Data Quality Center', icon: <Database className="w-4 h-4" />, category: 'Execution & Quality' },
    { id: 'report', label: '14. Export Strategy Report', icon: <FileCheck className="w-4 h-4" />, category: 'Execution & Quality' }
  ];

  return (
    <aside className="w-64 bg-[#070A0F] border-r border-slate-800 flex flex-col h-screen sticky top-0 overflow-y-auto custom-scrollbar">
      {/* Platform Branding */}
      <div className="p-4 border-b border-slate-800">
        <div className="text-[11px] font-mono text-cyan-400 tracking-wider uppercase font-semibold">
          Strategy Advisor Suite
        </div>
        <div className="text-xs text-slate-400 font-sans mt-0.5">
          Ravi Telugu Traveller
        </div>
      </div>

      {/* Navigation Groups */}
      <div className="py-4 px-3 space-y-6 flex-1">
        {['Core Intelligence', 'Deep Analytics', 'Strategy & Engine', 'Execution & Quality'].map((category) => {
          const items = menuItems.filter(item => item.category === category);
          return (
            <div key={category} className="space-y-1">
              <h3 className="px-3 text-[10px] font-mono uppercase tracking-widest text-slate-500 font-semibold mb-2">
                {category}
              </h3>
              {items.map(item => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => onSelectSection(item.id)}
                    className={`w-full text-left px-3 py-2.5 rounded-lg text-xs font-medium transition-all flex items-center justify-between group ${
                      isActive
                        ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 shadow-sm'
                        : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900 border border-transparent'
                    }`}
                  >
                    <div className="flex items-center space-x-2.5 truncate">
                      <span className={`${isActive ? 'text-cyan-400' : 'text-slate-500 group-hover:text-slate-300'}`}>
                        {item.icon}
                      </span>
                      <span className="truncate">{item.label}</span>
                    </div>
                    {isActive && <ChevronRight className="w-3.5 h-3.5 text-cyan-400 shrink-0" />}
                  </button>
                );
              })}
            </div>
          );
        })}
      </div>

      {/* Positioning Quote Footer */}
      <div className="p-4 border-t border-slate-800 bg-slate-950/60">
        <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800 text-[11px] text-slate-400 space-y-1">
          <div className="font-mono text-cyan-400 font-medium text-[10px] uppercase">
            Strategic Intent
          </div>
          <p className="italic leading-relaxed">
            &ldquo;I don&apos;t want to just analyse what happened. I want to help decide what happens next.&rdquo;
          </p>
        </div>
      </div>
    </aside>
  );
};
