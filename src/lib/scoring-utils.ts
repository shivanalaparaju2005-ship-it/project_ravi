import { CombinedVideoData, ScoringWeights, PublicVideoMetrics, ContentCategory } from './types';

export const DEFAULT_SCORING_WEIGHTS: ScoringWeights = {
  viewsVsMedianWeight: 0.4,
  engagementRateWeight: 0.3,
  viewsPerDayWeight: 0.2,
  likeRateWeight: 0.1
};

export function formatNumber(num: number): string {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(2) + 'M';
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K';
  }
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
  const hours = parseInt(match[1] || '0', 10);
  const minutes = parseInt(match[2] || '0', 10);
  const seconds = parseInt(match[3] || '0', 10);
  return hours * 3600 + minutes * 60 + seconds;
}

export function calculateMedian(numbers: number[]): number {
  if (numbers.length === 0) return 0;
  const sorted = [...numbers].sort((a, b) => a - b);
  const middle = Math.floor(sorted.length / 2);
  if (sorted.length % 2 === 0) {
    return (sorted[middle - 1] + sorted[middle]) / 2;
  }
  return sorted[middle];
}

export function calculateChannelMedianViews(videos: CombinedVideoData[]): number {
  const views = videos.map(v => v.public.viewCount);
  return calculateMedian(views);
}

export function calculatePerformanceScore(
  video: PublicVideoMetrics,
  channelMedianViews: number,
  weights: ScoringWeights = DEFAULT_SCORING_WEIGHTS
): number {
  // 1. Views ratio relative to median (capped at 2.5x max score contribution)
  const viewsRatio = channelMedianViews > 0 ? video.viewCount / channelMedianViews : 1;
  const normalizedViewsScore = Math.min(viewsRatio / 2.0, 1.25) * 100; // max 100 baseline

  // 2. Engagement Rate score (target benchmark 5.0%)
  const engagementRatio = video.publicEngagementRate / 5.0;
  const normalizedEngagementScore = Math.min(engagementRatio, 1.25) * 100;

  // 3. Views per day score (target benchmark 3,000 views/day)
  const viewsPerDayRatio = video.viewsPerDay / 3000;
  const normalizedVelocityScore = Math.min(viewsPerDayRatio, 1.25) * 100;

  // 4. Like rate score (target benchmark 5.0%)
  const likeRateRatio = video.likeRate / 5.0;
  const normalizedLikeScore = Math.min(likeRateRatio, 1.25) * 100;

  const rawScore = 
    (normalizedViewsScore * weights.viewsVsMedianWeight) +
    (normalizedEngagementScore * weights.engagementRateWeight) +
    (normalizedVelocityScore * weights.viewsPerDayWeight) +
    (normalizedLikeScore * weights.likeRateWeight);

  return Math.min(Math.max(Math.round(rawScore * 10) / 10, 10), 99.9);
}

export function analyzeTitleProperties(title: string): PublicVideoMetrics['titleAnalysis'] {
  const charCount = title.length;
  const words = title.trim().split(/\s+/);
  const wordCount = words.length;
  const hasQuestion = /[?|❓|🤔]/.test(title) || /how|what|why|is|can/i.test(title);
  const hasNumber = /\d+/.test(title);
  const hasLocation = /[🇻🇳|🇯🇵|🇮🇳|🇹🇭|🇰🇭|🇨🇭|🇦🇪|vietnam|japan|kashmir|thailand|cambodia|switzerland|dubai|tokyo|hanoi|bangkok|zurich|gulmarg|ladakh]/i.test(title);

  const emotionalWordsFound: string[] = [];
  const emotionalKeywords = ['cheapest', 'fastest', 'extreme', 'heavy', 'mystery', 'expensive', 'luxury', 'cheap', 'survival', 'shocked'];
  emotionalKeywords.forEach(kw => {
    if (new RegExp(kw, 'i').test(title)) emotionalWordsFound.push(kw);
  });

  const curiosityWordsFound: string[] = [];
  const curiosityKeywords = ['experience', 'speed test', 'real temperature', 'tasting', 'ancient kings', 'hacks', 'what does', '17,982 ft', 'step by step'];
  curiosityKeywords.forEach(kw => {
    if (new RegExp(kw, 'i').test(title)) curiosityWordsFound.push(kw);
  });

  const hasTeluguChar = /[\u0C00-\u0C7F]/.test(title);
  const hasEnglishChar = /[a-zA-Z]/.test(title);
  let languageMix: PublicVideoMetrics['titleAnalysis']['languageMix'] = 'English';
  if (hasTeluguChar && hasEnglishChar) {
    languageMix = 'Bi-lingual (Telugu + English)';
  } else if (hasTeluguChar) {
    languageMix = 'Telugu';
  }

  let patternType: PublicVideoMetrics['titleAnalysis']['patternType'] = 'Experience-First';
  if (/vs|contrast|comparison|luxury hotel vs/i.test(title)) {
    patternType = 'Comparison';
  } else if (/budget|cheapest|rs \d+|cost|\$/i.test(title)) {
    patternType = 'Cost-Focused';
  } else if (/\?/i.test(title) || /mystery|extreme|secret/i.test(title)) {
    patternType = 'Curiosity Gap';
  } else if (/guide|step by step|how to/i.test(title)) {
    patternType = 'Problem-Solution';
  } else if (/vlog|mystery of|story/i.test(title)) {
    patternType = 'Story';
  }

  return {
    charCount,
    wordCount,
    hasQuestion,
    hasNumber,
    hasLocation,
    emotionalWords: emotionalWordsFound,
    curiosityWords: curiosityWordsFound,
    languageMix,
    patternType
  };
}

export function classifyVideoCategory(title: string, description: string): ContentCategory {
  const text = (title + ' ' + description).toLowerCase();
  if (text.includes('budget') || text.includes('cheapest') || text.includes('rs 25,000') || text.includes('saving')) {
    return 'Budget Travel';
  }
  if (text.includes('food') || text.includes('tasting') || text.includes('lobster') || text.includes('street food')) {
    return 'Food & Cuisine';
  }
  if (text.includes('vs') || text.includes('luxury hotel vs') || text.includes('comparison')) {
    return 'Comparison';
  }
  if (text.includes('temple') || text.includes('mystery') || text.includes('ancient') || text.includes('documentary')) {
    return 'Documentary';
  }
  if (text.includes('bike') || text.includes('snowfall') || text.includes('extreme') || text.includes('climb')) {
    return 'Adventure & Extreme';
  }
  if (text.includes('kashmir') || text.includes('ladakh') || text.includes('india')) {
    return 'Domestic Travel';
  }
  return 'International Travel';
}
