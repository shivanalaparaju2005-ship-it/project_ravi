import { CombinedVideoData, ScoringWeights, PublicVideoMetrics, ContentCategory, ClassificationMethod, ValidationCheck, ValidationResult } from './types';

// ============================================================
// SCORING CONFIGURATION
// Formula: score = Σ(normalized_dimension × weight)
// Weights must sum to 1.0
// ============================================================
export const DEFAULT_SCORING_WEIGHTS: ScoringWeights = {
  viewsVsMedianWeight: 0.40,
  engagementRateWeight: 0.30,
  viewsPerDayWeight: 0.20,
  likeRateWeight: 0.10
};

export const SCORING_METHODOLOGY = {
  description: 'Composite analytical score — not an objective truth. Reflects relative performance within the analyzed dataset only.',
  components: [
    { name: 'Views vs Dataset Median', weight: '40%', benchmark: '2× median = 100 pts', formula: 'min(viewCount / (median × 2), 1.25) × 100' },
    { name: 'Public Engagement Rate', weight: '30%', benchmark: '5.0% = 100 pts', formula: 'min(engagementRate / 5.0, 1.25) × 100' },
    { name: 'Views Per Day Velocity', weight: '20%', benchmark: '3,000/day = 100 pts', formula: 'min(viewsPerDay / 3000, 1.25) × 100' },
    { name: 'Like Rate', weight: '10%', benchmark: '5.0% = 100 pts', formula: 'min(likeRate / 5.0, 1.25) × 100' }
  ],
  outputRange: '10–99.9 (clamped)',
  disclaimer: 'Score is calculated from public dataset metrics only. CTR, watch time, and retention — which may be stronger predictors — require owner analytics access.'
};

// ============================================================
// NUMBER FORMATTING
// ============================================================
export function formatNumber(num: number): string {
  if (num >= 1_000_000) return (num / 1_000_000).toFixed(2) + 'M';
  if (num >= 1_000) return (num / 1_000).toFixed(1) + 'K';
  return num.toString();
}

export function formatDuration(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

export function parseIsoDuration(isoDuration: string): number {
  const match = isoDuration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
  if (!match) return 0;
  return parseInt(match[1] || '0') * 3600 + parseInt(match[2] || '0') * 60 + parseInt(match[3] || '0');
}

// ============================================================
// STATISTICAL UTILITIES
// ============================================================
export function calculateMedian(numbers: number[]): number {
  if (numbers.length === 0) return 0;
  const sorted = [...numbers].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 === 0 ? (sorted[mid - 1] + sorted[mid]) / 2 : sorted[mid];
}

export function calculateMean(numbers: number[]): number {
  if (numbers.length === 0) return 0;
  return numbers.reduce((a, b) => a + b, 0) / numbers.length;
}

export function calculateStdDev(numbers: number[]): number {
  if (numbers.length < 2) return 0;
  const mean = calculateMean(numbers);
  const variance = numbers.reduce((acc, n) => acc + Math.pow(n - mean, 2), 0) / numbers.length;
  return Math.sqrt(variance);
}

export function calculateChannelMedianViews(videos: CombinedVideoData[]): number {
  return calculateMedian(videos.map(v => v.public.viewCount));
}

// ============================================================
// PERFORMANCE SCORING
// See SCORING_METHODOLOGY for full documentation
// ============================================================
export function calculatePerformanceScore(
  video: PublicVideoMetrics,
  channelMedianViews: number,
  weights: ScoringWeights = DEFAULT_SCORING_WEIGHTS
): number {
  const viewsRatio = channelMedianViews > 0 ? video.viewCount / channelMedianViews : 1;
  const normalizedViewsScore = Math.min(viewsRatio / 2.0, 1.25) * 100;

  const normalizedEngagementScore = Math.min(video.publicEngagementRate / 5.0, 1.25) * 100;
  const normalizedVelocityScore = Math.min(video.viewsPerDay / 3000, 1.25) * 100;
  const normalizedLikeScore = Math.min(video.likeRate / 5.0, 1.25) * 100;

  const rawScore =
    normalizedViewsScore * weights.viewsVsMedianWeight +
    normalizedEngagementScore * weights.engagementRateWeight +
    normalizedVelocityScore * weights.viewsPerDayWeight +
    normalizedLikeScore * weights.likeRateWeight;

  return Math.min(Math.max(Math.round(rawScore * 10) / 10, 10), 99.9);
}

// ============================================================
// TITLE ANALYSIS
// ============================================================
export function analyzeTitleProperties(title: string): PublicVideoMetrics['titleAnalysis'] {
  const charCount = title.length;
  const words = title.trim().split(/\s+/);
  const wordCount = words.length;
  const hasQuestion = /[?❓🤔]/.test(title) || /\bhow\b|\bwhat\b|\bwhy\b|\bis\b|\bcan\b/i.test(title);
  const hasNumber = /\d+/.test(title);
  const hasLocation = /india|usa|america|pakistan|venezuela|iceland|japan|kashmir|ladakh|dubai|singapore|australia|uk|europe|africa|south america|north korea|vietnam|cambodia|balochistan|gilgit|hindi|telugu|andhra/i.test(title);

  const emotionalKeywords = ['cheapest', 'fastest', 'extreme', 'heavy', 'mystery', 'expensive', 'luxury', 'cheap', 'survival', 'shocked', 'shocking', 'incredible', 'insane', 'dangerous', 'deadly', 'abandoned', 'secret', 'real truth'];
  const emotionalWordsFound = emotionalKeywords.filter(kw => new RegExp(kw, 'i').test(title));

  const curiosityKeywords = ['experience', 'speed test', 'real temperature', 'tasting', 'ancient', 'hacks', 'what does', 'step by step', 'inside', 'truth about', 'reality of', 'first time', 'never seen'];
  const curiosityWordsFound = curiosityKeywords.filter(kw => new RegExp(kw, 'i').test(title));

  const hasTeluguChar = /[\u0C00-\u0C7F]/.test(title);
  const hasEnglishChar = /[a-zA-Z]/.test(title);
  let languageMix: PublicVideoMetrics['titleAnalysis']['languageMix'] = 'English';
  if (hasTeluguChar && hasEnglishChar) languageMix = 'Bi-lingual (Telugu + English)';
  else if (hasTeluguChar) languageMix = 'Telugu';

  let patternType: PublicVideoMetrics['titleAnalysis']['patternType'] = 'Experience-First';
  if (/\b(195|first|world record|history|milestone)\b/i.test(title)) patternType = 'Achievement';
  else if (/vs|contrast|comparison|luxury.*vs|cheap.*vs/i.test(title)) patternType = 'Comparison';
  else if (/budget|cheapest|rs\s*\d+|cost|\$/i.test(title)) patternType = 'Cost-Focused';
  else if (/[?]|mystery|extreme|secret|shocking|real truth/i.test(title)) patternType = 'Curiosity Gap';
  else if (/guide|step by step|how to|tips|tricks/i.test(title)) patternType = 'Problem-Solution';
  else if (/vlog|story|journey|my life/i.test(title)) patternType = 'Story';
  else if (/\b(india|usa|japan|pakistan|europe|africa)\b/i.test(title) && !hasTeluguChar) patternType = 'Destination-First';

  return { charCount, wordCount, hasQuestion, hasNumber, hasLocation, emotionalWords: emotionalWordsFound, curiosityWords: curiosityWordsFound, languageMix, patternType };
}

// ============================================================
// CONTENT CATEGORY CLASSIFICATION
// Method: Keyword Rule-Based (transparent, auditable)
// Confidence: derived from number of matching signals
// ============================================================
export function classifyVideoCategory(
  title: string,
  description: string
): { category: ContentCategory; method: ClassificationMethod; confidence: 'High' | 'Medium' | 'Low' } {
  const text = (title + ' ' + description).toLowerCase();

  interface Rule { keywords: string[]; category: ContentCategory }
  const rules: Rule[] = [
    { keywords: ['social issue', 'poverty', 'homeless', 'inequality', 'discrimination', 'poor america', 'crime'], category: 'Social Issues' },
    { keywords: ['demolish', 'real estate', 'house', 'property', 'construction', 'usa life', 'american life', 'living in usa', 'life in usa'], category: 'Life Abroad' },
    { keywords: ['budget', 'cheapest', 'saving', 'affordable', 'rs 25,000', 'cost of'], category: 'Budget Travel' },
    { keywords: ['food', 'tasting', 'lobster', 'street food', 'restaurant', 'cuisine', 'eat'], category: 'Food & Cuisine' },
    { keywords: ['vs', 'luxury hotel vs', 'comparison', 'cheap vs', 'expensive vs'], category: 'Comparison' },
    { keywords: ['temple', 'mystery', 'ancient', 'documentary', 'history of', 'civilization'], category: 'Documentary' },
    { keywords: ['bike', 'snowfall', 'extreme', 'climb', 'trek', 'expedition', 'adventure', 'dangerous border', 'dmz', 'war zone'], category: 'Adventure & Extreme' },
    { keywords: ['kashmir', 'ladakh', 'goa', 'rajasthan', 'kerala', 'india', 'hindi'], category: 'Domestic Travel' },
    { keywords: ['visa', 'guide', 'how to', 'step by step', 'tips', 'passport', 'process'], category: 'Information & Guide' },
    { keywords: ['hidden', 'secret', 'underrated', 'unknown'], category: 'Hidden Places' },
    { keywords: ['culture', 'heritage', 'tradition', 'festival', 'religion', 'language'], category: 'Culture & Heritage' },
    { keywords: ['luxury', 'five star', '5 star', 'premium', 'private jet', 'business class'], category: 'Luxury Travel' },
  ];

  for (const rule of rules) {
    const matchCount = rule.keywords.filter(kw => text.includes(kw)).length;
    if (matchCount >= 2) return { category: rule.category, method: 'Keyword Rule', confidence: 'High' };
    if (matchCount === 1) return { category: rule.category, method: 'Keyword Rule', confidence: 'Medium' };
  }

  return { category: 'International Travel', method: 'Keyword Rule', confidence: 'Low' };
}

// ============================================================
// MONTHLY VELOCITY DERIVATION
// Derives from actual video publishedAt dates — NOT hardcoded
// ============================================================
export function deriveMonthlyVelocity(videos: CombinedVideoData[]): { month: string; videoCount: number; medianViews: number }[] {
  const monthMap = new Map<string, number[]>();

  for (const v of videos) {
    const d = new Date(v.public.publishedAt);
    const key = d.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
    if (!monthMap.has(key)) monthMap.set(key, []);
    monthMap.get(key)!.push(v.public.viewCount);
  }

  return Array.from(monthMap.entries())
    .map(([month, views]) => ({
      month,
      videoCount: views.length,
      medianViews: Math.round(calculateMedian(views))
    }))
    .sort((a, b) => new Date(a.month).getTime() - new Date(b.month).getTime());
}

// ============================================================
// DATA VALIDATION ENGINE
// Runs structural, statistical, and logical checks
// Never silently fixes questionable data
// ============================================================
export function runDataValidation(videos: CombinedVideoData[]): ValidationResult {
  const checks: ValidationCheck[] = [];

  // --- STRUCTURAL CHECKS ---
  const withTitles = videos.filter(v => v.public.title && v.public.title.trim().length > 0);
  checks.push({ checkName: 'Video Titles Present', category: 'Structural', passed: withTitles.length, total: videos.length, status: withTitles.length === videos.length ? 'Passed' : 'Warning' });

  const withIds = videos.filter(v => v.public.id && v.public.id.length > 0);
  checks.push({ checkName: 'Video IDs Present', category: 'Structural', passed: withIds.length, total: videos.length, status: withIds.length === videos.length ? 'Passed' : 'Failed' });

  const uniqueIds = new Set(videos.map(v => v.public.id));
  checks.push({ checkName: 'Duplicate Video IDs', category: 'Structural', passed: uniqueIds.size, total: videos.length, status: uniqueIds.size === videos.length ? 'Passed' : 'Failed', details: uniqueIds.size < videos.length ? `${videos.length - uniqueIds.size} duplicates detected` : undefined });

  const withValidDates = videos.filter(v => { const d = new Date(v.public.publishedAt); return !isNaN(d.getTime()) && d.getFullYear() >= 2005; });
  checks.push({ checkName: 'Valid Published Dates', category: 'Structural', passed: withValidDates.length, total: videos.length, status: withValidDates.length === videos.length ? 'Passed' : 'Warning' });

  const withThumbnails = videos.filter(v => v.public.thumbnailUrl && v.public.thumbnailUrl.startsWith('http'));
  checks.push({ checkName: 'Thumbnail URLs Present', category: 'Structural', passed: withThumbnails.length, total: videos.length, status: withThumbnails.length === videos.length ? 'Passed' : 'Warning' });

  const realThumbnails = videos.filter(v => !v.public.isPlaceholderThumbnail);
  checks.push({ checkName: 'Real YouTube Thumbnails', category: 'Structural', passed: realThumbnails.length, total: videos.length, status: realThumbnails.length === videos.length ? 'Passed' : 'Warning', details: realThumbnails.length < videos.length ? `${videos.length - realThumbnails.length} placeholder thumbnails in use` : undefined });

  // --- STATISTICAL CHECKS ---
  const withPositiveViews = videos.filter(v => v.public.viewCount > 0);
  checks.push({ checkName: 'Positive View Counts', category: 'Statistical', passed: withPositiveViews.length, total: videos.length, status: withPositiveViews.length === videos.length ? 'Passed' : 'Warning' });

  const withReasonableEngagement = videos.filter(v => v.public.publicEngagementRate >= 0 && v.public.publicEngagementRate <= 100);
  checks.push({ checkName: 'Engagement Rate in Range (0–100%)', category: 'Statistical', passed: withReasonableEngagement.length, total: videos.length, status: withReasonableEngagement.length === videos.length ? 'Passed' : 'Failed' });

  // --- LOGICAL CHECKS ---
  const likesNotExceedViews = videos.filter(v => v.public.likeCount <= v.public.viewCount);
  checks.push({ checkName: 'Likes ≤ Views', category: 'Logical', passed: likesNotExceedViews.length, total: videos.length, status: likesNotExceedViews.length === videos.length ? 'Passed' : 'Failed' });

  const commentsNotNegative = videos.filter(v => v.public.commentCount >= 0);
  checks.push({ checkName: 'Comment Count ≥ 0', category: 'Logical', passed: commentsNotNegative.length, total: videos.length, status: commentsNotNegative.length === videos.length ? 'Passed' : 'Failed' });

  const viewsNotNegative = videos.filter(v => v.public.viewCount >= 0);
  checks.push({ checkName: 'View Count ≥ 0', category: 'Logical', passed: viewsNotNegative.length, total: videos.length, status: viewsNotNegative.length === videos.length ? 'Passed' : 'Failed' });

  const ownerFieldsNull = videos.filter(v =>
    v.owner.impressions === null &&
    v.owner.ctr === null &&
    v.owner.watchTimeMinutes === null &&
    v.owner.estimatedRevenue === null
  );
  checks.push({ checkName: 'Owner Fields Correctly Null (Public Mode)', category: 'Logical', passed: ownerFieldsNull.length, total: videos.length, status: ownerFieldsNull.length === videos.length ? 'Passed' : 'Warning', details: 'All owner-only fields must be null unless OAuth authorized' });

  const passedCount = checks.filter(c => c.status === 'Passed').length;
  const warningCount = checks.filter(c => c.status === 'Warning').length;
  const failedCount = checks.filter(c => c.status === 'Failed').length;

  const overallStatus: ValidationResult['overallStatus'] =
    failedCount > 0 ? 'Failed' : warningCount > 0 ? 'Warning' : 'Passed';

  const now = new Date().toISOString();
  return {
    runAt: now,
    totalChecks: checks.length,
    passed: passedCount,
    warnings: warningCount,
    failed: failedCount,
    overallStatus,
    checks,
    computedAt: now
  };
}

// ============================================================
// DYNAMIC DATA QUALITY REPORT
// Computed from actual data — never hardcoded
// ============================================================
export function calculateDataQualityReport(
  videos: CombinedVideoData[],
  isLiveApi: boolean,
  isOwnerConnected: boolean
) {
  const validation = runDataValidation(videos);
  const total = videos.length;

  const missingThumbnails = videos.filter(v => !v.public.thumbnailUrl || !v.public.thumbnailUrl.startsWith('http')).length;
  const placeholderThumbnails = videos.filter(v => v.public.isPlaceholderThumbnail).length;
  const missingStats = videos.filter(v => v.public.viewCount === 0 && v.public.likeCount === 0).length;
  const invalidDates = videos.filter(v => isNaN(new Date(v.public.publishedAt).getTime())).length;
  const uniqueIds = new Set(videos.map(v => v.public.id));
  const duplicates = total - uniqueIds.size;

  // Compute completeness: fraction of critical fields populated
  let filledFields = 0;
  let totalFields = 0;
  for (const v of videos) {
    const criticalFields = [v.public.id, v.public.title, v.public.thumbnailUrl, v.public.publishedAt];
    filledFields += criticalFields.filter(f => f && String(f).length > 0).length;
    totalFields += criticalFields.length;
  }
  const completenessScore = totalFields > 0 ? Math.round((filledFields / totalFields) * 100 * 10) / 10 : 0;

  const structuralChecks = validation.checks.filter(c => c.category === 'Structural');
  const statisticalChecks = validation.checks.filter(c => c.category === 'Statistical');
  const logicalChecks = validation.checks.filter(c => c.category === 'Logical');

  const toStatus = (checks: ValidationCheck[]): 'Passed' | 'Warning' | 'Failed' => {
    if (checks.some(c => c.status === 'Failed')) return 'Failed';
    if (checks.some(c => c.status === 'Warning')) return 'Warning';
    return 'Passed';
  };

  return {
    apiConnected: isLiveApi,
    lastSyncTimestamp: new Date().toISOString(),
    videosFetched: total,
    validRecords: total - duplicates - missingStats,
    duplicateRecords: duplicates,
    missingThumbnails,
    placeholderThumbnails,
    missingStatistics: missingStats,
    invalidDates,
    isOwnerConnected,
    dataCompletenessScore: completenessScore,
    structuralValidation: toStatus(structuralChecks),
    statisticalValidation: toStatus(statisticalChecks),
    logicalValidation: toStatus(logicalChecks),
    statusMessage: isLiveApi
      ? 'Live YouTube Data API v3 — source-verified public data.'
      : 'Demo dataset — representative sample for @ravitelugutraveller. Connect YOUTUBE_API_KEY to switch to live API.',
    dataMode: isLiveApi ? 'Live API' : 'Demo Dataset' as 'Live API' | 'Demo Dataset',
    apiNote: 'Note: YouTube API viewCount definition updated Aug 24, 2026 — now counts views when a video begins to play, including autoplay/hover interactions. Historical view counts pre-dating this change may use a different measurement definition.'
  };
}
