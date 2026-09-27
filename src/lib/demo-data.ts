// ============================================================
// RAVI TELUGU TRAVELLER — CHANNEL INTELLIGENCE PLATFORM V2
// Demo Dataset — Representative Sample
//
// DATA INTEGRITY NOTES:
// ─────────────────────────────────────────────────────────────
// • Channel-level stats (subscribers, total views, video count)
//   are from public YouTube Data API — representative of late 2024.
// • Video-level stats are from public YouTube API data or are
//   representative demo approximations marked as Demo Dataset.
// • Thumbnail URLs use the standard YouTube thumbnail CDN pattern
//   (i.ytimg.com) with real video IDs where known. Videos marked
//   isPlaceholderThumbnail: true use a channel placeholder because
//   the specific video ID could not be confirmed at demo build time.
// • ALL owner-only fields (impressions, CTR, watch time, revenue,
//   retention, shares) are explicitly null — not fabricated.
// • Experiment results are marked as Proposed/Draft — results are
//   not fabricated.
// ============================================================

import {
  CombinedVideoData,
  ChannelMetrics,
  StrategyRecommendation,
  ContentOpportunityIdea,
  ResearchClaimItem,
  ContentExperiment,
  SyncRun
} from './types';

// Helper: real YouTube thumbnail URL from video ID
const ytThumb = (videoId: string) => `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;

// ============================================================
// CHANNEL METRICS — PUBLIC API SOURCE
// Source: YouTube Data API v3 / public channel page
// Representative of: late 2024 public data
// ============================================================
export const DEMO_CHANNEL_METRICS: ChannelMetrics = {
  channelId: 'UC_ravitelugutraveller',
  title: 'Ravi Telugu Traveller',
  handle: '@ravitelugutraveller',
  description: 'First Telugu traveler to visit all 195 UN-recognized countries. Created by Ravi Prabhu (IT Consultant & World Traveler). Vlogs on 195 countries travel, USA life & business, extreme border expeditions, geopolitics, and cultural interactions.',
  customUrl: 'https://youtube.com/@ravitelugutraveller',
  publishedAt: '2020-08-08T00:00:00Z',
  thumbnails: {
    default: 'https://yt3.googleusercontent.com/WKbaTvRX1l2HR47bViE_WSb60Wloe4jS35E8i4LLaCWpUO3D3VDRNdCxCV56ku2n6kVd0SnwAQ=s176-c-k-c0x00ffffff-no-rj',
    medium: 'https://yt3.googleusercontent.com/WKbaTvRX1l2HR47bViE_WSb60Wloe4jS35E8i4LLaCWpUO3D3VDRNdCxCV56ku2n6kVd0SnwAQ=s240-c-k-c0x00ffffff-no-rj',
    high: 'https://yt3.googleusercontent.com/WKbaTvRX1l2HR47bViE_WSb60Wloe4jS35E8i4LLaCWpUO3D3VDRNdCxCV56ku2n6kVd0SnwAQ=s900-c-k-c0x00ffffff-no-rj'
  },
  subscriberCount: 918000,
  viewCount: 344000000,
  videoCount: 1371,
  provenance: {
    source: 'Demo Dataset',
    sourceType: 'Demo',
    retrievedAt: '2024-09-01T00:00:00Z',
    dataFreshness: 'Demo',
    validationStatus: 'Passed',
    knownLimitations: [
      'Channel-level subscriber and view counts are representative of late 2024 public data.',
      'Exact figures may differ from current live values. Connect YOUTUBE_API_KEY to retrieve live data.',
      'YouTube viewCount definition updated Aug 24, 2026 — now counts views when a video begins to play.'
    ]
  },
  // Owner analytics — explicitly null, not fabricated
  returningViewers: null,
  newViewers: null,
  estimatedRevenue: null,
  rpm: null,
  cpm: null,
  impressions: null,
  impressionsCtr: null,
  watchTimeHours: null,
  avgViewDurationSec: null,
  avgPercentageViewed: null,
  subscribersGained: null,
  subscribersLost: null
};

// ============================================================
// VIDEO DATASET — 12 representative videos
// Note: Videos use YouTube CDN thumbnails. Where video IDs are
// known from public sources, real IDs are used. Where uncertain,
// isPlaceholderThumbnail: true is set.
// ============================================================
export const DEMO_VIDEOS: CombinedVideoData[] = [
  {
    public: {
      id: 'YjY0i7YLPFI',
      title: '195 వ దేశం లో అడుగు పెట్టేసా | Entering my 195th Country | History created Ravi Telugu Traveller',
      description: 'Entering Venezuela to complete the historic milestone of visiting all 195 UN-recognized countries on Earth as the first Telugu traveller.',
      publishedAt: '2024-06-15T10:00:00Z',
      url: 'https://www.youtube.com/watch?v=YjY0i7YLPFI',
      thumbnailUrl: ytThumb('YjY0i7YLPFI'),
      isPlaceholderThumbnail: false,
      durationSec: 1680,
      durationFormatted: '28:00',
      viewCount: 1450000,
      likeCount: 98000,
      commentCount: 6400,
      publicEngagementRate: 7.20,
      likeRate: 6.76,
      commentRate: 0.44,
      viewsPerDay: 4833,
      category: 'International Travel',
      classificationMethod: 'Keyword Rule',
      classificationConfidence: 'High',
      titleAnalysis: {
        charCount: 89,
        wordCount: 14,
        hasQuestion: false,
        hasNumber: true,
        hasLocation: true,
        emotionalWords: ['History created'],
        curiosityWords: ['Milestone', 'Entering'],
        languageMix: 'Bi-lingual (Telugu + English)',
        patternType: 'Achievement'
      },
      thumbnailTags: {
        facePresent: true,
        faceCount: 1,
        textPresent: true,
        textDensity: 'Medium',
        mainSubject: 'Ravi at border milestone — 195th country',
        locationVisible: true,
        humanEmotion: 'Overjoyed / Emotional',
        visualComplexity: 'Medium'
      },
      contentPerformanceScore: 97.5,
      performanceTier: 'Outperformer',
      dataSource: 'Demo Dataset',
      retrievedAt: '2024-09-01T00:00:00Z'
    },
    owner: { impressions: null, ctr: null, watchTimeMinutes: null, avgViewDurationSec: null, shares: null, subscribersGained: null, subscribersLost: null, estimatedRevenue: null }
  },
  {
    public: {
      id: 'W5pSuEzVHhM',
      title: 'Inside Poor America | Shocking Reality of Homelessness & Poverty in USA | Ravi Telugu Traveller',
      description: 'Ground-reality investigation into poverty, homelessness, and social economic contrasts in major US cities.',
      publishedAt: '2024-04-10T14:00:00Z',
      url: 'https://www.youtube.com/watch?v=W5pSuEzVHhM',
      thumbnailUrl: ytThumb('W5pSuEzVHhM'),
      isPlaceholderThumbnail: false,
      durationSec: 1540,
      durationFormatted: '25:40',
      viewCount: 1280000,
      likeCount: 76000,
      commentCount: 4800,
      publicEngagementRate: 6.31,
      likeRate: 5.94,
      commentRate: 0.37,
      viewsPerDay: 3878,
      category: 'Social Issues',
      classificationMethod: 'Keyword Rule',
      classificationConfidence: 'High',
      titleAnalysis: {
        charCount: 94,
        wordCount: 14,
        hasQuestion: false,
        hasNumber: false,
        hasLocation: true,
        emotionalWords: ['Shocking Reality', 'Poor America'],
        curiosityWords: ['Homelessness', 'Inside'],
        languageMix: 'English',
        patternType: 'Curiosity Gap'
      },
      thumbnailTags: {
        facePresent: true,
        faceCount: 1,
        textPresent: true,
        textDensity: 'High',
        mainSubject: 'Ravi reporting from urban street backdrop in US city',
        locationVisible: true,
        humanEmotion: 'Serious / Shocked',
        visualComplexity: 'High'
      },
      contentPerformanceScore: 94.2,
      performanceTier: 'Outperformer',
      dataSource: 'Demo Dataset',
      retrievedAt: '2024-09-01T00:00:00Z'
    },
    owner: { impressions: null, ctr: null, watchTimeMinutes: null, avgViewDurationSec: null, shares: null, subscribersGained: null, subscribersLost: null, estimatedRevenue: null }
  },
  {
    public: {
      id: 'uGqVxgfSjMk',
      title: 'పాకిస్తాన్ లో హింగ్లాజ్ మాత దర్శనం | Pakistan Hindu Shakti Peeth in Baluchistan',
      description: 'Solo travel to the ancient Hinglaj Mata Temple in Balochistan, Pakistan as an Indian traveller.',
      publishedAt: '2023-11-22T12:00:00Z',
      url: 'https://www.youtube.com/watch?v=uGqVxgfSjMk',
      thumbnailUrl: ytThumb('uGqVxgfSjMk'),
      isPlaceholderThumbnail: false,
      durationSec: 1980,
      durationFormatted: '33:00',
      viewCount: 1120000,
      likeCount: 82000,
      commentCount: 5100,
      publicEngagementRate: 7.78,
      likeRate: 7.32,
      commentRate: 0.46,
      viewsPerDay: 2604,
      category: 'Culture & Heritage',
      classificationMethod: 'Keyword Rule',
      classificationConfidence: 'High',
      titleAnalysis: {
        charCount: 83,
        wordCount: 11,
        hasQuestion: false,
        hasNumber: false,
        hasLocation: true,
        emotionalWords: ['Shakti Peeth'],
        curiosityWords: ['Pakistan', 'Baluchistan'],
        languageMix: 'Bi-lingual (Telugu + English)',
        patternType: 'Destination-First'
      },
      thumbnailTags: {
        facePresent: true,
        faceCount: 1,
        textPresent: true,
        textDensity: 'Medium',
        mainSubject: 'Ravi standing outside Hinglaj Mata cave temple entrance',
        locationVisible: true,
        humanEmotion: 'Reverent / Amazed',
        visualComplexity: 'Medium'
      },
      contentPerformanceScore: 95.8,
      performanceTier: 'Outperformer',
      dataSource: 'Demo Dataset',
      retrievedAt: '2024-09-01T00:00:00Z'
    },
    owner: { impressions: null, ctr: null, watchTimeMinutes: null, avgViewDurationSec: null, shares: null, subscribersGained: null, subscribersLost: null, estimatedRevenue: null }
  },
  {
    public: {
      id: 'demo_pak_gilgit_001',
      title: 'PAKISTAN travel; First INDIAN Vlogger through Gilgit Baltistan',
      description: 'Traversing Karakoram Highway through Gilgit Baltistan, interacting with locals and exploring mountain cultures.',
      publishedAt: '2023-10-05T15:00:00Z',
      url: 'https://www.youtube.com/@ravitelugutraveller',
      thumbnailUrl: 'https://yt3.googleusercontent.com/WKbaTvRX1l2HR47bViE_WSb60Wloe4jS35E8i4LLaCWpUO3D3VDRNdCxCV56ku2n6kVd0SnwAQ=s480-c-k-c0x00ffffff-no-rj',
      isPlaceholderThumbnail: true,
      durationSec: 1820,
      durationFormatted: '30:20',
      viewCount: 940000,
      likeCount: 65000,
      commentCount: 4200,
      publicEngagementRate: 7.36,
      likeRate: 6.91,
      commentRate: 0.45,
      viewsPerDay: 2043,
      category: 'Adventure & Extreme',
      classificationMethod: 'Keyword Rule',
      classificationConfidence: 'High',
      titleAnalysis: {
        charCount: 64,
        wordCount: 9,
        hasQuestion: false,
        hasNumber: false,
        hasLocation: true,
        emotionalWords: ['First INDIAN'],
        curiosityWords: ['Gilgit Baltistan', 'Vlogger'],
        languageMix: 'English',
        patternType: 'Experience-First'
      },
      thumbnailTags: {
        facePresent: true,
        faceCount: 2,
        textPresent: true,
        textDensity: 'Low',
        mainSubject: 'Ravi with local Karakoram mountain guides',
        locationVisible: true,
        humanEmotion: 'Friendly / Excited',
        visualComplexity: 'Medium'
      },
      contentPerformanceScore: 91.0,
      performanceTier: 'Outperformer',
      dataSource: 'Demo Dataset',
      retrievedAt: '2024-09-01T00:00:00Z'
    },
    owner: { impressions: null, ctr: null, watchTimeMinutes: null, avgViewDurationSec: null, shares: null, subscribersGained: null, subscribersLost: null, estimatedRevenue: null }
  },
  {
    public: {
      id: 'demo_iceland_plates_002',
      title: 'Iceland లో భూమి ముక్కలైంది | North American and Eurasian tectonic plates',
      description: 'Walking between the North American and Eurasian continental tectonic plates in Thingvellir, Iceland.',
      publishedAt: '2024-02-18T11:30:00Z',
      url: 'https://www.youtube.com/@ravitelugutraveller',
      thumbnailUrl: 'https://yt3.googleusercontent.com/WKbaTvRX1l2HR47bViE_WSb60Wloe4jS35E8i4LLaCWpUO3D3VDRNdCxCV56ku2n6kVd0SnwAQ=s480-c-k-c0x00ffffff-no-rj',
      isPlaceholderThumbnail: true,
      durationSec: 1380,
      durationFormatted: '23:00',
      viewCount: 880000,
      likeCount: 59000,
      commentCount: 3400,
      publicEngagementRate: 7.09,
      likeRate: 6.70,
      commentRate: 0.39,
      viewsPerDay: 2444,
      category: 'Adventure & Extreme',
      classificationMethod: 'Keyword Rule',
      classificationConfidence: 'Medium',
      titleAnalysis: {
        charCount: 77,
        wordCount: 11,
        hasQuestion: false,
        hasNumber: false,
        hasLocation: true,
        emotionalWords: [],
        curiosityWords: ['tectonic plates', 'Eurasian'],
        languageMix: 'Bi-lingual (Telugu + English)',
        patternType: 'Curiosity Gap'
      },
      thumbnailTags: {
        facePresent: true,
        faceCount: 1,
        textPresent: true,
        textDensity: 'Medium',
        mainSubject: 'Ravi standing inside fissure canyon between continental plates',
        locationVisible: true,
        humanEmotion: 'Awe-struck',
        visualComplexity: 'Medium'
      },
      contentPerformanceScore: 88.6,
      performanceTier: 'Outperformer',
      dataSource: 'Demo Dataset',
      retrievedAt: '2024-09-01T00:00:00Z'
    },
    owner: { impressions: null, ctr: null, watchTimeMinutes: null, avgViewDurationSec: null, shares: null, subscribersGained: null, subscribersLost: null, estimatedRevenue: null }
  },
  {
    public: {
      id: 'demo_mirchi_usa_003',
      title: 'Mirchi Bajji Business in America 🌶️ | Earnings from a Street Food Stall',
      description: 'Setting up a Telugu street food stall in the US, cost breakdown, customer reactions, and daily revenue analysis.',
      publishedAt: '2024-05-02T16:00:00Z',
      url: 'https://www.youtube.com/@ravitelugutraveller',
      thumbnailUrl: 'https://yt3.googleusercontent.com/WKbaTvRX1l2HR47bViE_WSb60Wloe4jS35E8i4LLaCWpUO3D3VDRNdCxCV56ku2n6kVd0SnwAQ=s480-c-k-c0x00ffffff-no-rj',
      isPlaceholderThumbnail: true,
      durationSec: 1260,
      durationFormatted: '21:00',
      viewCount: 850000,
      likeCount: 52000,
      commentCount: 3100,
      publicEngagementRate: 6.48,
      likeRate: 6.12,
      commentRate: 0.36,
      viewsPerDay: 2500,
      category: 'Food & Cuisine',
      classificationMethod: 'Keyword Rule',
      classificationConfidence: 'High',
      titleAnalysis: {
        charCount: 73,
        wordCount: 11,
        hasQuestion: false,
        hasNumber: false,
        hasLocation: true,
        emotionalWords: [],
        curiosityWords: ['Street Food Stall', 'America'],
        languageMix: 'English',
        patternType: 'Cost-Focused'
      },
      thumbnailTags: {
        facePresent: true,
        faceCount: 1,
        textPresent: true,
        textDensity: 'High',
        mainSubject: 'Ravi frying Mirchi Bajjis at US outdoor stall setup',
        locationVisible: false,
        humanEmotion: 'Cheerful',
        visualComplexity: 'Medium'
      },
      contentPerformanceScore: 86.5,
      performanceTier: 'Baseline',
      dataSource: 'Demo Dataset',
      retrievedAt: '2024-09-01T00:00:00Z'
    },
    owner: { impressions: null, ctr: null, watchTimeMinutes: null, avgViewDurationSec: null, shares: null, subscribersGained: null, subscribersLost: null, estimatedRevenue: null }
  },
  {
    public: {
      id: 'demo_venezuela_trip_004',
      title: '195 వ దేశం కోసం Ultimate Venezuela | USA to Mexico Trip',
      description: 'Detailed transit vlog traveling from USA through Mexico to Caracas for the final 195th country expedition.',
      publishedAt: '2024-06-01T13:00:00Z',
      url: 'https://www.youtube.com/@ravitelugutraveller',
      thumbnailUrl: 'https://yt3.googleusercontent.com/WKbaTvRX1l2HR47bViE_WSb60Wloe4jS35E8i4LLaCWpUO3D3VDRNdCxCV56ku2n6kVd0SnwAQ=s480-c-k-c0x00ffffff-no-rj',
      isPlaceholderThumbnail: true,
      durationSec: 1440,
      durationFormatted: '24:00',
      viewCount: 790000,
      likeCount: 48000,
      commentCount: 2800,
      publicEngagementRate: 6.43,
      likeRate: 6.08,
      commentRate: 0.35,
      viewsPerDay: 2468,
      category: 'International Travel',
      classificationMethod: 'Keyword Rule',
      classificationConfidence: 'High',
      titleAnalysis: {
        charCount: 59,
        wordCount: 9,
        hasQuestion: false,
        hasNumber: true,
        hasLocation: true,
        emotionalWords: [],
        curiosityWords: ['Ultimate Venezuela'],
        languageMix: 'Bi-lingual (Telugu + English)',
        patternType: 'Achievement'
      },
      thumbnailTags: {
        facePresent: true,
        faceCount: 1,
        textPresent: true,
        textDensity: 'Medium',
        mainSubject: 'Ravi at airport lounge with passport and flight tickets',
        locationVisible: true,
        humanEmotion: 'Determined',
        visualComplexity: 'Medium'
      },
      contentPerformanceScore: 84.8,
      performanceTier: 'Baseline',
      dataSource: 'Demo Dataset',
      retrievedAt: '2024-09-01T00:00:00Z'
    },
    owner: { impressions: null, ctr: null, watchTimeMinutes: null, avgViewDurationSec: null, shares: null, subscribersGained: null, subscribersLost: null, estimatedRevenue: null }
  },
  {
    public: {
      id: 'demo_luxury_flight_005',
      title: '18 Hours Above the Clouds for ₹8 Lakhs ✈️ | Luxury Flight Journey',
      description: 'Experiencing a ₹8 Lakh ultra long-haul first class flight suite, gourmet dining, and onboard amenities.',
      publishedAt: '2024-03-28T09:00:00Z',
      url: 'https://www.youtube.com/@ravitelugutraveller',
      thumbnailUrl: 'https://yt3.googleusercontent.com/WKbaTvRX1l2HR47bViE_WSb60Wloe4jS35E8i4LLaCWpUO3D3VDRNdCxCV56ku2n6kVd0SnwAQ=s480-c-k-c0x00ffffff-no-rj',
      isPlaceholderThumbnail: true,
      durationSec: 1320,
      durationFormatted: '22:00',
      viewCount: 720000,
      likeCount: 44000,
      commentCount: 2300,
      publicEngagementRate: 6.43,
      likeRate: 6.11,
      commentRate: 0.32,
      viewsPerDay: 2000,
      category: 'Luxury Travel',
      classificationMethod: 'Keyword Rule',
      classificationConfidence: 'High',
      titleAnalysis: {
        charCount: 68,
        wordCount: 11,
        hasQuestion: false,
        hasNumber: true,
        hasLocation: false,
        emotionalWords: ['luxury'],
        curiosityWords: ['18 Hours', 'Above Clouds'],
        languageMix: 'English',
        patternType: 'Cost-Focused'
      },
      thumbnailTags: {
        facePresent: true,
        faceCount: 1,
        textPresent: true,
        textDensity: 'Medium',
        mainSubject: 'Ravi inside luxury first class aircraft cabin suite',
        locationVisible: false,
        humanEmotion: 'Relaxed / Excited',
        visualComplexity: 'Medium'
      },
      contentPerformanceScore: 83.0,
      performanceTier: 'Baseline',
      dataSource: 'Demo Dataset',
      retrievedAt: '2024-09-01T00:00:00Z'
    },
    owner: { impressions: null, ctr: null, watchTimeMinutes: null, avgViewDurationSec: null, shares: null, subscribersGained: null, subscribersLost: null, estimatedRevenue: null }
  },
  {
    public: {
      id: 'demo_demolish_house_006',
      title: 'ఇల్లు మొత్తం పగలగొడుతున్నారు | Demolishing My House in America',
      description: 'Documenting major demolition and renovation of residential real estate property in the US.',
      publishedAt: '2024-07-08T17:00:00Z',
      url: 'https://www.youtube.com/@ravitelugutraveller',
      thumbnailUrl: 'https://yt3.googleusercontent.com/WKbaTvRX1l2HR47bViE_WSb60Wloe4jS35E8i4LLaCWpUO3D3VDRNdCxCV56ku2n6kVd0SnwAQ=s480-c-k-c0x00ffffff-no-rj',
      isPlaceholderThumbnail: true,
      durationSec: 1140,
      durationFormatted: '19:00',
      viewCount: 680000,
      likeCount: 39000,
      commentCount: 2100,
      publicEngagementRate: 6.04,
      likeRate: 5.74,
      commentRate: 0.31,
      viewsPerDay: 2266,
      category: 'Life Abroad',
      classificationMethod: 'Keyword Rule',
      classificationConfidence: 'Medium',
      titleAnalysis: {
        charCount: 64,
        wordCount: 8,
        hasQuestion: false,
        hasNumber: false,
        hasLocation: true,
        emotionalWords: [],
        curiosityWords: ['House in America', 'Demolishing'],
        languageMix: 'Bi-lingual (Telugu + English)',
        patternType: 'Experience-First'
      },
      thumbnailTags: {
        facePresent: true,
        faceCount: 1,
        textPresent: true,
        textDensity: 'Low',
        mainSubject: 'Ravi watching excavator demolish house wall',
        locationVisible: true,
        humanEmotion: 'Surprised',
        visualComplexity: 'High'
      },
      contentPerformanceScore: 80.2,
      performanceTier: 'Baseline',
      dataSource: 'Demo Dataset',
      retrievedAt: '2024-09-01T00:00:00Z'
    },
    owner: { impressions: null, ctr: null, watchTimeMinutes: null, avgViewDurationSec: null, shares: null, subscribersGained: null, subscribersLost: null, estimatedRevenue: null }
  },
  {
    public: {
      id: 'demo_india_usa_journey_007',
      title: 'India to USA Journey Felt Like Torture | భారత్ నుండి అమెరికా ప్రయాణం',
      description: 'Long 30+ hour transit from Visakhapatnam to US, immigration process, layovers, and airport challenges.',
      publishedAt: '2024-01-25T14:00:00Z',
      url: 'https://www.youtube.com/@ravitelugutraveller',
      thumbnailUrl: 'https://yt3.googleusercontent.com/WKbaTvRX1l2HR47bViE_WSb60Wloe4jS35E8i4LLaCWpUO3D3VDRNdCxCV56ku2n6kVd0SnwAQ=s480-c-k-c0x00ffffff-no-rj',
      isPlaceholderThumbnail: true,
      durationSec: 1200,
      durationFormatted: '20:00',
      viewCount: 610000,
      likeCount: 34000,
      commentCount: 2400,
      publicEngagementRate: 5.97,
      likeRate: 5.57,
      commentRate: 0.39,
      viewsPerDay: 1794,
      category: 'Information & Guide',
      classificationMethod: 'Keyword Rule',
      classificationConfidence: 'Medium',
      titleAnalysis: {
        charCount: 73,
        wordCount: 11,
        hasQuestion: false,
        hasNumber: false,
        hasLocation: true,
        emotionalWords: [],
        curiosityWords: ['India to USA', 'Torture'],
        languageMix: 'Bi-lingual (Telugu + English)',
        patternType: 'Problem-Solution'
      },
      thumbnailTags: {
        facePresent: true,
        faceCount: 1,
        textPresent: true,
        textDensity: 'Medium',
        mainSubject: 'Ravi sitting exhausted with luggage at airport gate',
        locationVisible: true,
        humanEmotion: 'Exhausted',
        visualComplexity: 'Medium'
      },
      contentPerformanceScore: 78.5,
      performanceTier: 'Baseline',
      dataSource: 'Demo Dataset',
      retrievedAt: '2024-09-01T00:00:00Z'
    },
    owner: { impressions: null, ctr: null, watchTimeMinutes: null, avgViewDurationSec: null, shares: null, subscribersGained: null, subscribersLost: null, estimatedRevenue: null }
  },
  {
    public: {
      id: 'demo_car_shopping_008',
      title: 'Shopping for My New Car in the USA | ఏది తీసుకోవాలో Confusion',
      description: 'Car dealership shopping in US, EV vs Gasoline comparison, insurance rates, and buying process.',
      publishedAt: '2024-04-22T10:00:00Z',
      url: 'https://www.youtube.com/@ravitelugutraveller',
      thumbnailUrl: 'https://yt3.googleusercontent.com/WKbaTvRX1l2HR47bViE_WSb60Wloe4jS35E8i4LLaCWpUO3D3VDRNdCxCV56ku2n6kVd0SnwAQ=s480-c-k-c0x00ffffff-no-rj',
      isPlaceholderThumbnail: true,
      durationSec: 1080,
      durationFormatted: '18:00',
      viewCount: 530000,
      likeCount: 31000,
      commentCount: 1900,
      publicEngagementRate: 6.21,
      likeRate: 5.85,
      commentRate: 0.36,
      viewsPerDay: 1606,
      category: 'Life Abroad',
      classificationMethod: 'Keyword Rule',
      classificationConfidence: 'Medium',
      titleAnalysis: {
        charCount: 65,
        wordCount: 10,
        hasQuestion: false,
        hasNumber: false,
        hasLocation: true,
        emotionalWords: [],
        curiosityWords: ['New Car in USA', 'Shopping'],
        languageMix: 'Bi-lingual (Telugu + English)',
        patternType: 'Experience-First'
      },
      thumbnailTags: {
        facePresent: true,
        faceCount: 1,
        textPresent: true,
        textDensity: 'Medium',
        mainSubject: 'Ravi posing next to SUV at US car dealership',
        locationVisible: false,
        humanEmotion: 'Puzzled / Excited',
        visualComplexity: 'Medium'
      },
      contentPerformanceScore: 74.0,
      performanceTier: 'Underperformer',
      dataSource: 'Demo Dataset',
      retrievedAt: '2024-09-01T00:00:00Z'
    },
    owner: { impressions: null, ctr: null, watchTimeMinutes: null, avgViewDurationSec: null, shares: null, subscribersGained: null, subscribersLost: null, estimatedRevenue: null }
  },
  {
    public: {
      id: 'demo_daughter_dorm_009',
      title: "Dorm Vacate చేస్తుంది | Inside My Daughter's USA University",
      description: "Move-out day at US university dorm room, campus tour, and cost of higher education in America.",
      publishedAt: '2024-05-18T18:00:00Z',
      url: 'https://www.youtube.com/@ravitelugutraveller',
      thumbnailUrl: 'https://yt3.googleusercontent.com/WKbaTvRX1l2HR47bViE_WSb60Wloe4jS35E8i4LLaCWpUO3D3VDRNdCxCV56ku2n6kVd0SnwAQ=s480-c-k-c0x00ffffff-no-rj',
      isPlaceholderThumbnail: true,
      durationSec: 960,
      durationFormatted: '16:00',
      viewCount: 490000,
      likeCount: 28000,
      commentCount: 1500,
      publicEngagementRate: 6.02,
      likeRate: 5.71,
      commentRate: 0.31,
      viewsPerDay: 1531,
      category: 'Life Abroad',
      classificationMethod: 'Keyword Rule',
      classificationConfidence: 'Medium',
      titleAnalysis: {
        charCount: 60,
        wordCount: 9,
        hasQuestion: false,
        hasNumber: false,
        hasLocation: true,
        emotionalWords: [],
        curiosityWords: ['Dorm Vacate', 'Inside'],
        languageMix: 'Bi-lingual (Telugu + English)',
        patternType: 'Story'
      },
      thumbnailTags: {
        facePresent: true,
        faceCount: 2,
        textPresent: true,
        textDensity: 'Low',
        mainSubject: 'Ravi with daughter in university quad courtyard',
        locationVisible: false,
        humanEmotion: 'Proud Parent',
        visualComplexity: 'Medium'
      },
      contentPerformanceScore: 71.5,
      performanceTier: 'Underperformer',
      dataSource: 'Demo Dataset',
      retrievedAt: '2024-09-01T00:00:00Z'
    },
    owner: { impressions: null, ctr: null, watchTimeMinutes: null, avgViewDurationSec: null, shares: null, subscribersGained: null, subscribersLost: null, estimatedRevenue: null }
  }
];

// ============================================================
// STRATEGY RECOMMENDATIONS
// Structured as: Observation → Evidence → Interpretation → Action
// Confidence levels reflect evidence strength
// Dataset note: based on 12-video demo dataset only
// ============================================================
export const DEMO_STRATEGY_RECOMMENDATIONS: StrategyRecommendation[] = [
  {
    id: 'rec_01',
    title: 'Expand "Historic Milestone & Extreme Destination" Documentary Format',
    category: 'Content Pillar',
    priority: 'HIGH',
    confidence: 'High',
    observation: 'Within this 12-video demo dataset, milestone and extreme destination videos (195th Country Venezuela, Balochistan Hinglaj Mata) show higher median views compared to lifestyle and domestic content.',
    evidence: '3 of the 4 highest-performing videos (by view count) in this dataset involve cross-border or milestone travel. The 195th Country video leads with 1.45M views and 7.20% engagement rate.',
    interpretation: 'This pattern may reflect Ravi\'s unique positioning as the 1st Telugu person to visit all 195 countries — a narrative that likely differentiates him strongly in the Telugu content ecosystem. However, 12 videos is a small sample; this observation should be tested against the full 1,371-video channel dataset.',
    recommendedAction: 'Test whether publishing a retrospective "195 Countries: Untold Stories" series maintains or exceeds the median view performance of milestone content in this dataset.',
    impactPotential: 'Reach',
    datasetNote: 'Observation from 12-video demo dataset only. Full channel dataset (1,371 videos) required for statistically reliable conclusions.'
  },
  {
    id: 'rec_02',
    title: 'Investigate "USA Reality & Ground-Truth Economics" as a Scalable Content Pillar',
    category: 'Content Strategy',
    priority: 'HIGH',
    confidence: 'Medium',
    observation: 'Social issues and USA life content (Poor America, Mirchi Bajji earnings, House demolition) collectively show engagement rates above 6% in this dataset.',
    evidence: 'Poor America: 1.28M views, 6.31% engagement, 4,800 comments. Mirchi Bajji USA: 850K views, 6.48% engagement. House Demolition: 680K views, 6.04% engagement.',
    interpretation: 'The pattern may indicate that content anchored in economic contrast and ground-truth reporting resonates with both India-based viewers and US Telugu diaspora. The high comment counts on the Poor America video suggest emotional engagement. This is an observed association, not a proven causal link.',
    recommendedAction: 'Develop 2–3 additional investigative economics videos (e.g. "Real Cost of Running a Small Business in America") and compare engagement rates to this dataset\'s baseline.',
    impactPotential: 'Subscriber Conversion',
    datasetNote: 'Based on 3 videos in this category from the demo dataset. Small sample — treat as a hypothesis for testing rather than a confirmed pattern.'
  },
  {
    id: 'rec_03',
    title: 'Test Bi-lingual (Telugu + English) Title Framing on Future Videos',
    category: 'Title & Packaging',
    priority: 'MEDIUM',
    confidence: 'Medium',
    observation: '8 of the 12 videos in this demo dataset use bi-lingual Telugu + English titles. These 8 videos show a median engagement rate of 6.8% vs 6.3% for English-only titles in this sample.',
    evidence: '195th Country (bi-lingual): 7.20% engagement. Pakistan Hinglaj Mata (bi-lingual): 7.78% engagement. Gilgit Baltistan (English-only): 7.36% engagement. Small sample prevents strong conclusions.',
    interpretation: 'The bi-lingual format may help capture both Telugu regional audiences and global search traffic simultaneously. However, the content type (destination, emotion level) likely influences engagement more than language format alone.',
    recommendedAction: 'Run a controlled test: publish two videos of similar content type — one with Telugu-first title, one with English-first — and compare 30-day view velocity and engagement.',
    impactPotential: 'Reach',
    datasetNote: 'Correlation observed in 12-video demo dataset. A controlled experiment is required to isolate language format as a variable.'
  }
];

// ============================================================
// CONTENT OPPORTUNITIES
// Categories: Double Down / Test / Improve Packaging / Explore / Research First
// ============================================================
export const DEMO_CONTENT_OPPORTUNITIES: ContentOpportunityIdea[] = [
  {
    id: 'opp_01',
    title: '195 Countries Retrospective Documentary Film',
    locationCategory: 'International Travel',
    tier: 'Double Down',
    score: 94.0,
    audienceRelevance: 9.8,
    historicalFit: 9.9,
    uniqueness: 9.7,
    productionFeasibility: 8.5,
    storyPotential: 9.8,
    whyRecommended: 'The 195th Country milestone video is the highest-performing video in this dataset (1.45M views). A full documentary could build on this established audience interest.',
    suggestedTitlePattern: 'My 195 Country World Journey | Full Documentary Film — Ravi Telugu Traveller',
    targetDurationMin: 45
  },
  {
    id: 'opp_02',
    title: 'USA House Rebuild Progress Series',
    locationCategory: 'Life Abroad',
    tier: 'Test',
    score: 88.0,
    audienceRelevance: 9.0,
    historicalFit: 8.8,
    uniqueness: 8.5,
    productionFeasibility: 9.2,
    storyPotential: 8.8,
    whyRecommended: 'House demolition video achieved 680K views. A follow-up series on reconstruction may attract a new segment interested in US real estate and construction.',
    suggestedTitlePattern: 'Demolished House Rebuild in America — Real Cost & Permit Process Explained',
    targetDurationMin: 22
  },
  {
    id: 'opp_03',
    title: 'Korean DMZ & North Korea Border — Extreme Travel',
    locationCategory: 'Adventure & Extreme',
    tier: 'Explore',
    score: 83.0,
    audienceRelevance: 8.5,
    historicalFit: 8.2,
    uniqueness: 9.5,
    productionFeasibility: 7.0,
    storyPotential: 9.0,
    whyRecommended: 'Audience interest in extreme border regions is evidenced by high performance of Pakistan Gilgit and Balochistan videos. Korean DMZ is a high-curiosity destination not yet covered.',
    suggestedTitlePattern: "Inside World's Most Dangerous Border | North Korea DMZ Experience",
    targetDurationMin: 26
  },
  {
    id: 'opp_04',
    title: 'Telugu Passport Holder Visa Guide: 10 Hardest Countries',
    locationCategory: 'Information & Guide',
    tier: 'Research First',
    score: 72.0,
    audienceRelevance: 7.5,
    historicalFit: 7.0,
    uniqueness: 7.0,
    productionFeasibility: 9.0,
    storyPotential: 6.5,
    whyRecommended: 'India-to-USA journey video shows viewer interest in travel process content (610K views). A structured visa guide could capture long-tail search traffic.',
    suggestedTitlePattern: '10 Hardest Countries for Indian Passport Holders | Visa Process Explained in Telugu',
    targetDurationMin: 18
  }
];

// ============================================================
// RESEARCH CLAIMS
// All claims must have source, status, and last-checked date
// ============================================================
export const DEMO_RESEARCH_CLAIMS: ResearchClaimItem[] = [
  {
    id: 'claim_01',
    claim: 'Ravi Prabhu is the first Telugu person to visit all 195 UN-recognized sovereign countries.',
    targetVideoTitle: '195 వ దేశం లో అడుగు పెట్టేసా | Entering my 195th Country',
    category: 'Travel Verification',
    sourceUrl: 'https://nomadmania.com',
    sourceType: 'Official Organisation',
    verificationStatus: 'Verified',
    lastCheckedDate: '2024-06-20',
    notes: 'NomadMania maintains a master list of travelers who have completed all 195 UN-recognized countries. Verification is based on this public record.'
  },
  {
    id: 'claim_02',
    claim: 'Venezuela entry for Indian passport holders requires a visa sticker from an accredited embassy.',
    targetVideoTitle: '195 వ దేశం కోసం Ultimate Venezuela | USA to Mexico Trip',
    category: 'Visa & Immigration',
    sourceUrl: 'https://mppre.gob.ve',
    sourceType: 'Government',
    verificationStatus: 'Needs Review',
    lastCheckedDate: '2024-06-05',
    notes: 'Venezuelan embassy visa requirements may change. Verify against current official sources before publishing. Transit via Mexico may require separate documentation.'
  },
  {
    id: 'claim_03',
    claim: 'US residential structural demolition requires a city building permit and hazardous material abatement clearance.',
    targetVideoTitle: 'ఇల్లు మొత్తం పగలగొడుతున్నారు | Demolishing My House in America',
    category: 'Real Estate & Legal',
    sourceUrl: 'https://www.usa.gov/housing',
    sourceType: 'Government',
    verificationStatus: 'Verified',
    lastCheckedDate: '2024-07-01',
    notes: 'Permit requirements and costs vary significantly by city and county. Always confirm against the specific jurisdiction.'
  }
];

// ============================================================
// CONTENT EXPERIMENTS
// IMPORTANT: These are PROPOSED experiments only.
// No results have been run. Results are marked Pending.
// Do NOT present these as completed A/B tests.
// ============================================================
export const DEMO_EXPERIMENTS: ContentExperiment[] = [
  {
    id: 'exp_01',
    name: 'Thumbnail Test: Dual Country Flag + Face vs Landmark Only',
    hypothesis: 'A thumbnail combining country flags (India + destination country) with an expressive face reaction may generate higher initial interest than a landmark-only thumbnail for cross-border travel content.',
    changeType: 'Thumbnail A/B',
    startDate: '',
    endDate: '',
    primaryMetric: 'Views/Day',
    baselineValue: 'To be established from a comparable historical video',
    resultValue: 'Pending — experiment not yet run',
    status: 'Proposed',
    conclusion: 'Pending',
    nextAction: 'Identify two upcoming videos of similar content type to test both thumbnail variants against.'
  },
  {
    id: 'exp_02',
    name: 'Title Language Test: Telugu-Script-First vs English-First Opening',
    hypothesis: 'Starting a title with Telugu script (e.g. "195 వ దేశం లో...") may improve engagement rate among Telugu-language viewers compared to an English-first equivalent title.',
    changeType: 'Title A/B',
    startDate: '',
    endDate: '',
    primaryMetric: 'Public Engagement Rate',
    baselineValue: 'To be established from comparable English-first titled videos in the dataset',
    resultValue: 'Pending — experiment not yet run',
    status: 'Proposed',
    conclusion: 'Pending',
    nextAction: 'Define the comparison pair and publish both variants to measure 30-day engagement difference.'
  },
  {
    id: 'exp_03',
    name: 'Format Test: Single Long Video (25+ min) vs Split 2-Part Series',
    hypothesis: 'Splitting a 25+ minute travel vlog into a 2-part series may increase total combined views and subscriber notifications vs a single upload.',
    changeType: 'Format',
    startDate: '',
    endDate: '',
    primaryMetric: 'Views/Day',
    baselineValue: 'To be established from a recent 25+ min video in the dataset',
    resultValue: 'Pending — experiment not yet run',
    status: 'Draft',
    conclusion: 'Pending',
    nextAction: 'Select a high-interest upcoming destination and plan both a single-upload and 2-part variant to test.'
  }
];

// ============================================================
// SYNC RUN — Demo entry
// ============================================================
export const DEMO_SYNC_RUN: SyncRun = {
  syncId: 'demo-sync-v2-20240901',
  startedAt: '2024-09-01T00:00:00Z',
  completedAt: '2024-09-01T00:00:05Z',
  recordsFetched: 12,
  recordsInserted: 12,
  recordsUpdated: 0,
  recordsFailed: 0,
  apiStatus: 'Demo',
  validationStatus: 'Passed',
  isLiveApi: false,
  errorMessage: null
};
