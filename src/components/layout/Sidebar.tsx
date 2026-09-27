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
  ChevronRight,
  CalendarDays,
  ShieldCheck,
  BookOpen,
  Download
} from 'lucide-react';

export type NavSection =
  | 'overview'
  | 'performance'
  | 'content'
  | 'title'
  | 'thumbnail'
  | 'audience'
  | 'growth'
  | 'scoring'
  | 'strategy'
  | 'opportunities'
  | 'research'
  | 'experiments'
  | 'calendar'
  | 'quality'
  | 'sources'
  | 'methodology'
  | 'report'
  | 'export';

interface SidebarProps {
  activeSection: NavSection;
  onSelectSection: (section: NavSection) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ activeSection, onSelectSection }) => {
  const menuGroups = [
    {
      title: '01 OVERVIEW',
      items: [
        { id: 'overview' as NavSection, label: 'Executive Overview', icon: <LayoutDashboard className="w-4 h-4" /> }
      ]
    },
    {
      title: '02 PERFORMANCE',
      items: [
        { id: 'performance' as NavSection, label: 'Video Performance', icon: <PlaySquare className="w-4 h-4" /> },
        { id: 'content' as NavSection, label: 'Content Intelligence', icon: <Compass className="w-4 h-4" /> },
        { id: 'title' as NavSection, label: 'Title Intelligence', icon: <Type className="w-4 h-4" /> },
        { id: 'thumbnail' as NavSection, label: 'Thumbnail Intelligence', icon: <ImageIcon className="w-4 h-4" /> },
        { id: 'audience' as NavSection, label: 'Audience & Engagement', icon: <Users className="w-4 h-4" /> },
        { id: 'growth' as NavSection, label: 'Growth', icon: <TrendingUp className="w-4 h-4" /> }
      ]
    },
    {
      title: '03 STRATEGY',
      items: [
        { id: 'scoring' as NavSection, label: 'Performance Score', icon: <Award className="w-4 h-4" /> },
        { id: 'strategy' as NavSection, label: 'Strategy Recommendations', icon: <Lightbulb className="w-4 h-4" /> },
        { id: 'opportunities' as NavSection, label: 'Content Opportunities', icon: <Target className="w-4 h-4" /> }
      ]
    },
    {
      title: '04 EXECUTION',
      items: [
        { id: 'research' as NavSection, label: 'Research Desk', icon: <BookOpen className="w-4 h-4" /> },
        { id: 'experiments' as NavSection, label: 'Experiment Lab', icon: <FlaskConical className="w-4 h-4" /> },
        { id: 'calendar' as NavSection, label: '30-Day Strategy', icon: <CalendarDays className="w-4 h-4" /> }
      ]
    },
    {
      title: '05 TRUST',
      items: [
        { id: 'quality' as NavSection, label: 'Data Quality', icon: <Database className="w-4 h-4" /> },
        { id: 'sources' as NavSection, label: 'Data Sources', icon: <ShieldCheck className="w-4 h-4" /> },
        { id: 'methodology' as NavSection, label: 'Methodology', icon: <GitMerge className="w-4 h-4" /> }
      ]
    },
    {
      title: '06 REPORTING',
      items: [
        { id: 'report' as NavSection, label: 'Strategy Report', icon: <FileCheck className="w-4 h-4" /> },
        { id: 'export' as NavSection, label: 'Export', icon: <Download className="w-4 h-4" /> }
      ]
    }
  ];

  return (
    <aside className="w-64 bg-[#0a0d14] border-r border-slate-800/50 flex flex-col h-screen sticky top-0 overflow-y-auto custom-scrollbar shadow-2xl">
      {/* Platform Branding */}
      <div className="p-5 border-b border-slate-800/50">
        <div className="text-[10px] font-mono text-cyan-400/90 tracking-[0.2em] uppercase font-semibold">
          Channel Intelligence
        </div>
        <div className="text-[13px] text-slate-300 font-sans mt-1 font-medium tracking-wide">
          Ravi Telugu Traveller
        </div>
      </div>

      {/* Navigation Groups */}
      <div className="py-5 px-3 space-y-6 flex-1">
        {menuGroups.map((group) => (
          <div key={group.title} className="space-y-1.5">
            <h3 className="px-3 text-[10px] font-mono uppercase tracking-widest text-slate-500/70 font-semibold mb-2">
              {group.title}
            </h3>
            {group.items.map(item => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onSelectSection(item.id)}
                  className={`w-full text-left px-3 py-2 rounded-md text-xs font-medium transition-all duration-200 flex items-center justify-between group ${
                    isActive
                      ? 'bg-slate-800/60 text-slate-100 shadow-sm border border-slate-700/50'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/50 border border-transparent'
                  }`}
                >
                  <div className="flex items-center space-x-3 truncate">
                    <span className={`${isActive ? 'text-cyan-400' : 'text-slate-500 group-hover:text-slate-400'} transition-colors`}>
                      {item.icon}
                    </span>
                    <span className="truncate">{item.label}</span>
                  </div>
                  {isActive && <ChevronRight className="w-3.5 h-3.5 text-slate-500 shrink-0" />}
                </button>
              );
            })}
          </div>
        ))}
      </div>

      {/* Positioning Quote Footer */}
      <div className="p-4 border-t border-slate-800/50 bg-[#07090e]">
        <div className="p-3.5 rounded-lg bg-slate-900/40 border border-slate-800/60 text-[11px] text-slate-400/90 space-y-1.5">
          <div className="font-mono text-slate-500 font-medium text-[9px] uppercase tracking-wider">
            Strategic Intent
          </div>
          <p className="italic leading-relaxed text-slate-300/80">
            &ldquo;I don't want to just analyse what happened. I want to help decide what happens next.&rdquo;
          </p>
        </div>
      </div>
    </aside>
  );
};
