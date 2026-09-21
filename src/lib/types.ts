export interface ChannelMetrics {
  channelId: string;
  title: string;
  handle: string;
  description: string;
  customUrl: string;
  publishedAt: string;
  thumbnails: {
    default: string;
    medium: string;
    high: string;
  };
  subscriberCount: number;
  viewCount: number;
  videoCount: number;
  // Owner private metrics (N/A if unauthorized)
  returningViewers?: number | null;
  newViewers?: number | null;
  estimatedRevenue?: number | null;
  rpm?: number | null;
  cpm?: number | null;
  impressions?: number | null;
  impressionsCtr?: number | null;
  watchTimeHours?: number | null;
  avgViewDurationSec?: number | null;
  avgPercentageViewed?: number | null;
  subscribersGained?: number | null;
  subscribersLost?: number | null;
}

export type ContentCategory = 
  | 'International Travel'
  | 'Domestic Travel'
  | 'Food & Cuisine'
  | 'Culture & Heritage'
  | 'Adventure & Extreme'
  | 'Budget Travel'
  | 'Luxury Travel'
  | 'Local Experiences'
  | 'Information & Guide'
  | 'Hidden Places'
  | 'Comparison'
  | 'Challenge'
  | 'Storytelling & Vlog'
  | 'Documentary';

export interface PublicVideoMetrics {
  id: string;
  title: string;
  description: string;
  publishedAt: string;
  url: string;
  thumbnailUrl: string;
  durationSec: number;
  durationFormatted: string;
  viewCount: number;
  likeCount: number;
  commentCount: number;
  // Calculated public engagement metrics
  publicEngagementRate: number; // (likes + comments) / views * 100
  likeRate: number;              // likes / views * 100
  commentRate: number;           // comments / views * 100
  viewsPerDay: number;
  category: ContentCategory;
  
  // Title intelligence breakdown
  titleAnalysis: {
    charCount: number;
    wordCount: number;
    hasQuestion: boolean;
    hasNumber: boolean;
    hasLocation: boolean;
    emotionalWords: string[];
    curiosityWords: string[];
    languageMix: 'Telugu' | 'English' | 'Bi-lingual (Telugu + English)';
    patternType: 'Destination-First' | 'Cost-Focused' | 'Experience-First' | 'Problem-Solution' | 'Comparison' | 'Curiosity Gap' | 'Story';
  };

  // Thumbnail visual properties (editable)
  thumbnailTags: {
    facePresent: boolean;
    faceCount: number;
    textPresent: boolean;
    textDensity: 'Low' | 'Medium' | 'High' | 'None';
    mainSubject: string;
    locationVisible: boolean;
    humanEmotion: string;
    visualComplexity: 'Low' | 'Medium' | 'High';
  };

  // Performance scoring
  contentPerformanceScore: number;
  performanceTier: 'Outperformer' | 'Baseline' | 'Underperformer';
}

export interface OwnerVideoMetrics {
  impressions: number | null;
  ctr: number | null; // %
  watchTimeMinutes: number | null;
  avgViewDurationSec: number | null;
  retentionCurve?: { second: number; percentage: number }[] | null;
  shares: number | null;
  shareRate?: number | null; // shares / views * 100
  subscribersGained: number | null;
  subscribersLost: number | null;
  estimatedRevenue: number | null;
}

export interface CombinedVideoData {
  public: PublicVideoMetrics;
  owner: OwnerVideoMetrics; // null or values with isOwnerConnected state
}

export interface StrategyRecommendation {
  id: string;
  title: string;
  category: string;
  priority: 'HIGH' | 'MEDIUM' | 'LOW';
  observation: string;
  evidence: string;
  interpretation: string;
  recommendedAction: string;
  impactPotential: 'Reach' | 'Engagement' | 'Retention' | 'Monetization' | 'Subscriber Conversion';
}

export interface ContentOpportunityIdea {
  id: string;
  title: string;
  locationCategory: ContentCategory;
  tier: 'High Opportunity' | 'Medium Opportunity' | 'Low Opportunity';
  score: number;
  audienceRelevance: number; // 1-10
  historicalFit: number;      // 1-10
  uniqueness: number;          // 1-10
  productionFeasibility: number;// 1-10
  storyPotential: number;     // 1-10
  whyRecommended: string;
  suggestedTitlePattern: string;
  targetDurationMin: number;
}

export interface ResearchClaimItem {
  id: string;
  claim: string;
  targetVideoTitle: string;
  category: string;
  sourceUrl: string;
  verificationStatus: 'Verified' | 'Needs Review' | 'Conflicting Sources' | 'Not Verified';
  lastCheckedDate: string;
  notes: string;
}

export interface ContentExperiment {
  id: string;
  name: string;
  hypothesis: string;
  changeType: 'Thumbnail A/B' | 'Title A/B' | 'Hook Variation' | 'Video Length' | 'Upload Timing' | 'Format' | 'Story Structure';
  startDate: string;
  endDate: string;
  primaryMetric: 'Views/Day' | 'Public Engagement Rate' | 'Click-Through Rate (CTR)' | 'Subscribers Gained';
  baselineValue: string;
  resultValue: string;
  status: 'Active' | 'Completed' | 'Draft';
  conclusion: string;
  nextAction: string;
}

export interface ScoringWeights {
  viewsVsMedianWeight: number; // e.g. 0.4
  engagementRateWeight: number; // e.g. 0.3
  viewsPerDayWeight: number;   // e.g. 0.2
  likeRateWeight: number;      // e.g. 0.1
}

export interface DataQualityReport {
  apiConnected: boolean;
  lastSyncTimestamp: string;
  videosFetched: number;
  duplicateRecords: number;
  missingThumbnails: number;
  missingStatistics: number;
  invalidDates: number;
  isOwnerConnected: boolean;
  dataConfidenceScore: number; // 0 - 100%
  statusMessage: string;
}
