// ============================================================
// RAVI TELUGU TRAVELLER — CHANNEL INTELLIGENCE PLATFORM V2
// Data Model & Type Definitions
// ============================================================

// ----- DATA PROVENANCE -----
export interface DataProvenanceRecord {
  source: 'YouTube Data API v3' | 'YouTube Analytics API' | 'Demo Dataset' | 'Manual Entry';
  sourceType: 'Public API' | 'Owner-Authorized API' | 'Demo' | 'Manual';
  retrievedAt: string; // ISO timestamp
  dataPeriod?: string; // e.g. "Jun 2024 – Sep 2026"
  recordCount?: number;
  validationStatus: 'Passed' | 'Warning' | 'Failed' | 'Not Run';
  dataFreshness?: 'Live' | 'Cached' | 'Demo' | 'Stale';
  knownLimitations?: string[];
  apiNote?: string; // e.g. YouTube API viewCount note
}

// ----- SYNC RUN AUDIT LOG -----
export interface SyncRun {
  syncId: string;
  startedAt: string;
  completedAt: string;
  recordsFetched: number;
  recordsInserted: number;
  recordsUpdated: number;
  recordsFailed: number;
  apiStatus: 'Success' | 'Quota Exceeded' | 'Auth Error' | 'Network Error' | 'Demo';
  validationStatus: 'Passed' | 'Warning' | 'Failed' | 'Skipped';
  isLiveApi: boolean;
  errorMessage?: string | null;
}

// ----- VALIDATION RESULT -----
export interface ValidationCheck {
  checkName: string;
  category: 'Structural' | 'Statistical' | 'Logical';
  passed: number;
  total: number;
  status: 'Passed' | 'Warning' | 'Failed';
  details?: string;
}

export interface ValidationResult {
  runAt: string;
  totalChecks: number;
  passed: number;
  warnings: number;
  failed: number;
  overallStatus: 'Passed' | 'Warning' | 'Failed';
  checks: ValidationCheck[];
  computedAt: string;
}

// ----- CHANNEL METRICS -----
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
  // Data provenance
  provenance?: DataProvenanceRecord;
  // Owner private metrics (null when unauthorized — never fabricated)
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

// ----- CONTENT CATEGORIES -----
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
  | 'Documentary'
  | 'Social Issues'
  | 'Life Abroad';

export type ClassificationMethod = 'Keyword Rule' | 'Manual Override' | 'Unclassified';

// ----- PUBLIC VIDEO METRICS -----
export interface PublicVideoMetrics {
  id: string;
  title: string;
  description: string;
  publishedAt: string;
  url: string;
  thumbnailUrl: string;
  /** If true, thumbnail is a placeholder/demo image — not the real YouTube thumbnail */
  isPlaceholderThumbnail: boolean;
  durationSec: number;
  durationFormatted: string;
  viewCount: number;
  likeCount: number;
  commentCount: number;
  // Calculated public engagement metrics (all documented formulas)
  /** Formula: (likeCount + commentCount) / viewCount × 100 */
  publicEngagementRate: number;
  /** Formula: likeCount / viewCount × 100 */
  likeRate: number;
  /** Formula: commentCount / viewCount × 100 */
  commentRate: number;
  /** Formula: viewCount / max(daysSincePublished, 1) */
  viewsPerDay: number;
  category: ContentCategory;
  classificationMethod: ClassificationMethod;
  classificationConfidence: 'High' | 'Medium' | 'Low';
  manualOverride?: boolean;

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
    patternType: 'Destination-First' | 'Cost-Focused' | 'Experience-First' | 'Problem-Solution' | 'Comparison' | 'Curiosity Gap' | 'Story' | 'Achievement';
  };

  // Thumbnail visual properties
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

  // Performance scoring — clearly labelled as analytical, not objective truth
  contentPerformanceScore: number;
  performanceTier: 'Outperformer' | 'Baseline' | 'Underperformer';

  // Data provenance
  dataSource: 'YouTube Data API v3' | 'Demo Dataset';
  retrievedAt: string;
}

// ----- OWNER VIDEO METRICS (all null until OAuth authorized) -----
export interface OwnerVideoMetrics {
  /** CTR requires YouTube Analytics API (owner OAuth) */
  impressions: number | null;
  ctr: number | null;
  watchTimeMinutes: number | null;
  avgViewDurationSec: number | null;
  retentionCurve?: { second: number; percentage: number }[] | null;
  shares: number | null;
  shareRate?: number | null;
  subscribersGained: number | null;
  subscribersLost: number | null;
  estimatedRevenue: number | null;
}

// ----- COMBINED VIDEO DATA -----
export interface CombinedVideoData {
  public: PublicVideoMetrics;
  owner: OwnerVideoMetrics;
}

// ----- STRATEGY RECOMMENDATION -----
export interface StrategyRecommendation {
  id: string;
  title: string;
  category: string;
  priority: 'HIGH' | 'MEDIUM' | 'LOW';
  /** What the data shows — direct observation */
  observation: string;
  /** Specific metrics/videos supporting it */
  evidence: string;
  /** Possible explanation — NOT stated as fact */
  interpretation: string;
  /** What should be tested */
  recommendedAction: string;
  impactPotential: 'Reach' | 'Engagement' | 'Retention' | 'Monetization' | 'Subscriber Conversion';
  /** Reflects evidence strength — not an absolute claim */
  confidence: 'High' | 'Medium' | 'Low';
  datasetNote?: string;
}

// ----- CONTENT OPPORTUNITY -----
export interface ContentOpportunityIdea {
  id: string;
  title: string;
  locationCategory: ContentCategory;
  tier: 'Double Down' | 'Test' | 'Improve Packaging' | 'Explore' | 'Research First';
  score: number;
  audienceRelevance: number; // 1-10
  historicalFit: number; // 1-10
  uniqueness: number; // 1-10
  productionFeasibility: number; // 1-10
  storyPotential: number; // 1-10
  whyRecommended: string;
  suggestedTitlePattern: string;
  targetDurationMin: number;
}

// ----- RESEARCH CLAIM -----
export interface ResearchClaimItem {
  id: string;
  claim: string;
  targetVideoTitle: string;
  category: string;
  sourceUrl: string;
  sourceType?: 'Government' | 'Official Organisation' | 'Academic' | 'Reputable News' | 'Primary Source' | 'Other';
  verificationStatus: 'Verified' | 'Needs Review' | 'Conflicting Sources' | 'Not Verified' | 'Rejected';
  lastCheckedDate: string;
  notes: string;
}

// ----- CONTENT EXPERIMENT -----
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
  status: 'Active' | 'Completed' | 'Draft' | 'Proposed';
  conclusion: string;
  nextAction: string;
}

// ----- SCORING WEIGHTS -----
export interface ScoringWeights {
  viewsVsMedianWeight: number; // 0.0–1.0, weights must sum to 1.0
  engagementRateWeight: number;
  viewsPerDayWeight: number;
  likeRateWeight: number;
}

// ----- DATA QUALITY REPORT -----
export interface DataQualityReport {
  apiConnected: boolean;
  lastSyncTimestamp: string;
  videosFetched: number;
  validRecords: number;
  duplicateRecords: number;
  missingThumbnails: number;
  placeholderThumbnails: number;
  missingStatistics: number;
  invalidDates: number;
  isOwnerConnected: boolean;
  /** Dynamically calculated, not hardcoded */
  dataCompletenessScore: number; // 0–100
  structuralValidation: 'Passed' | 'Warning' | 'Failed';
  statisticalValidation: 'Passed' | 'Warning' | 'Failed';
  logicalValidation: 'Passed' | 'Warning' | 'Failed';
  statusMessage: string;
  dataMode: 'Live API' | 'Demo Dataset';
  apiNote?: string;
}
