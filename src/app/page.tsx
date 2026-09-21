'use client';

import React, { useState, useEffect } from 'react';
import { Header } from '@/components/layout/Header';
import { Sidebar, NavSection } from '@/components/layout/Sidebar';
import { ExecutiveOverview } from '@/components/dashboard/ExecutiveOverview';
import { VideoPerformanceTable } from '@/components/dashboard/VideoPerformanceTable';
import { VideoDetailModal } from '@/components/dashboard/VideoDetailModal';
import { ContentIntelligence } from '@/components/dashboard/ContentIntelligence';
import { ThumbnailIntelligence } from '@/components/dashboard/ThumbnailIntelligence';
import { TitleIntelligence } from '@/components/dashboard/TitleIntelligence';
import { AudienceAnalysis } from '@/components/dashboard/AudienceAnalysis';
import { GrowthAnalysis } from '@/components/dashboard/GrowthAnalysis';
import { PerformanceScoreModel } from '@/components/dashboard/PerformanceScoreModel';
import { StrategyEngine } from '@/components/dashboard/StrategyEngine';
import { ContentOpportunityMap } from '@/components/dashboard/ContentOpportunityMap';
import { WorkflowAndResearch } from '@/components/dashboard/WorkflowAndResearch';
import { ExperimentLab } from '@/components/dashboard/ExperimentLab';
import { DataQualityCenter } from '@/components/dashboard/DataQualityCenter';
import { StrategyReportView } from '@/components/dashboard/StrategyReportView';
import { DEMO_CHANNEL_METRICS, DEMO_VIDEOS } from '@/lib/demo-data';
import { fetchChannelData } from '@/lib/youtube-api';
import { ChannelMetrics, CombinedVideoData } from '@/lib/types';
import { Loader2 } from 'lucide-react';

export default function DashboardPage() {
  const [activeSection, setActiveSection] = useState<NavSection>('overview');
  const [channel, setChannel] = useState<ChannelMetrics>(DEMO_CHANNEL_METRICS);
  const [videos, setVideos] = useState<CombinedVideoData[]>(DEMO_VIDEOS);
  const [isLiveApi, setIsLiveApi] = useState<boolean>(false);
  const [isOwnerConnected, setIsOwnerConnected] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [selectedVideo, setSelectedVideo] = useState<CombinedVideoData | null>(null);

  const loadData = async (forceLive: boolean = false) => {
    setLoading(true);
    const result = await fetchChannelData('@ravitelugutraveller', forceLive);
    setChannel(result.channel);
    setVideos(result.videos);
    setIsLiveApi(result.isLiveApi);
    setLoading(false);
  };

  useEffect(() => {
    loadData(false);
  }, []);

  const handleToggleDemoMode = () => {
    if (isLiveApi) {
      // Switch back to Demo mode
      setChannel(DEMO_CHANNEL_METRICS);
      setVideos(DEMO_VIDEOS);
      setIsLiveApi(false);
    } else {
      // Attempt Live API mode fetch
      loadData(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#070A0F] text-slate-100 flex flex-col md:flex-row">
      {/* Sidebar Navigation */}
      <Sidebar activeSection={activeSection} onSelectSection={setActiveSection} />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Sticky Header */}
        <Header
          channel={channel}
          isLiveApi={isLiveApi}
          isOwnerConnected={isOwnerConnected}
          onToggleDemoMode={handleToggleDemoMode}
          onOpenReport={() => setActiveSection('report')}
          onRefresh={() => loadData(isLiveApi)}
          loading={loading}
        />

        {/* Section View Renderer */}
        <main className="p-4 sm:p-6 lg:p-8 flex-1 overflow-y-auto">
          {loading ? (
            <div className="h-64 flex flex-col items-center justify-center space-y-3 font-mono text-xs text-slate-400">
              <Loader2 className="w-8 h-8 text-cyan-400 animate-spin" />
              <span>Fetching YouTube Channel Intelligence Data...</span>
            </div>
          ) : (
            <>
              {activeSection === 'overview' && (
                <ExecutiveOverview
                  channel={channel}
                  videos={videos}
                  isOwnerConnected={isOwnerConnected}
                  onSelectVideo={setSelectedVideo}
                />
              )}

              {activeSection === 'performance' && (
                <VideoPerformanceTable
                  videos={videos}
                  isOwnerConnected={isOwnerConnected}
                  onSelectVideo={setSelectedVideo}
                />
              )}

              {activeSection === 'content' && (
                <ContentIntelligence videos={videos} />
              )}

              {activeSection === 'thumbnail' && (
                <ThumbnailIntelligence videos={videos} />
              )}

              {activeSection === 'title' && (
                <TitleIntelligence videos={videos} />
              )}

              {activeSection === 'audience' && (
                <AudienceAnalysis isOwnerConnected={isOwnerConnected} />
              )}

              {activeSection === 'growth' && (
                <GrowthAnalysis channel={channel} videos={videos} />
              )}

              {activeSection === 'scoring' && (
                <PerformanceScoreModel videos={videos} />
              )}

              {activeSection === 'strategy' && (
                <StrategyEngine />
              )}

              {activeSection === 'opportunities' && (
                <ContentOpportunityMap />
              )}

              {activeSection === 'workflow' && (
                <WorkflowAndResearch />
              )}

              {activeSection === 'experiments' && (
                <ExperimentLab />
              )}

              {activeSection === 'quality' && (
                <DataQualityCenter
                  isLiveApi={isLiveApi}
                  isOwnerConnected={isOwnerConnected}
                  videoCount={videos.length}
                />
              )}

              {activeSection === 'report' && (
                <StrategyReportView
                  channel={channel}
                  videos={videos}
                  isOwnerConnected={isOwnerConnected}
                />
              )}
            </>
          )}
        </main>
      </div>

      {/* Video Detail Modal */}
      <VideoDetailModal
        video={selectedVideo}
        isOwnerConnected={isOwnerConnected}
        onClose={() => setSelectedVideo(null)}
      />
    </div>
  );
};
