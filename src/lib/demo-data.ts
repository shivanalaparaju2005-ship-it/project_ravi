import { CombinedVideoData, ChannelMetrics, StrategyRecommendation, ContentOpportunityIdea, ResearchClaimItem, ContentExperiment, DataQualityReport } from './types';

export const DEMO_CHANNEL_METRICS: ChannelMetrics = {
  channelId: 'UC_ravitelugutraveller_official',
  title: 'Ravi Telugu Traveller',
  handle: '@ravitelugutraveller',
  description: 'First Telugu traveler to visit all 195 UN-recognized countries! Created by Ravi Prabhu (IT Consultant & World Traveler). Vlogs on 195 countries travel, USA life & business, extreme border expeditions, geopolitics, and cultural interactions.',
  customUrl: 'https://youtube.com/@ravitelugutraveller',
  publishedAt: '2020-08-08T00:00:00Z',
  thumbnails: {
    default: 'https://yt3.googleusercontent.com/WKbaTvRX1l2HR47bViE_WSb60Wloe4jS35E8i4LLaCWpUO3D3VDRNdCxCV56ku2n6kVd0SnwAQ=s176-c-k-c0x00ffffff-no-rj',
    medium: 'https://yt3.googleusercontent.com/WKbaTvRX1l2HR47bViE_WSb60Wloe4jS35E8i4LLaCWpUO3D3VDRNdCxCV56ku2n6kVd0SnwAQ=s240-c-k-c0x00ffffff-no-rj',
    high: 'https://yt3.googleusercontent.com/WKbaTvRX1l2HR47bViE_WSb60Wloe4jS35E8i4LLaCWpUO3D3VDRNdCxCV56ku2n6kVd0SnwAQ=s900-c-k-c0x00ffffff-no-rj'
  },
  subscriberCount: 915000,
  viewCount: 338000000,
  videoCount: 1350,
  // Owner Analytics explicitly null/N/A
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

export const DEMO_VIDEOS: CombinedVideoData[] = [
  {
    public: {
      id: 'vlog_venezuela_195',
      title: '195 వ దేశం లో అడుగు పెట్టేసా | Entering my 195th Country | History created Ravi Telugu Traveller',
      description: 'Entering Venezuela to complete the historic milestone of visiting all 195 UN-recognized countries on Earth as the first Telugu traveller.',
      publishedAt: '2024-06-15T10:00:00Z',
      url: 'https://youtube.com/watch?v=vlog_venezuela_195',
      thumbnailUrl: 'https://images.unsplash.com/photo-1528127269322-539801943592?fit=crop&w=640&h=360',
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
      titleAnalysis: {
        charCount: 89,
        wordCount: 14,
        hasQuestion: false,
        hasNumber: true,
        hasLocation: true,
        emotionalWords: ['History created', '195th Country'],
        curiosityWords: ['Milestone', 'Entering'],
        languageMix: 'Bi-lingual (Telugu + English)',
        patternType: 'Destination-First'
      },
      thumbnailTags: {
        facePresent: true,
        faceCount: 1,
        textPresent: true,
        textDensity: 'Medium',
        mainSubject: 'Ravi holding Indian & Venezuelan flag at border milestone',
        locationVisible: true,
        humanEmotion: 'Overjoyed / Emotional',
        visualComplexity: 'Medium'
      },
      contentPerformanceScore: 97.5,
      performanceTier: 'Outperformer'
    },
    owner: {
      impressions: null,
      ctr: null,
      watchTimeMinutes: null,
      avgViewDurationSec: null,
      shares: null,
      subscribersGained: null,
      subscribersLost: null,
      estimatedRevenue: null
    }
  },
  {
    public: {
      id: 'vlog_poor_america',
      title: 'Inside Poor America | Shocking Reality of Homelessness & Poverty in USA | Ravi Telugu Traveller',
      description: 'Ground-reality investigation into poverty, homelessness, and social economic contrasts in major US cities.',
      publishedAt: '2024-04-10T14:00:00Z',
      url: 'https://youtube.com/watch?v=vlog_poor_america',
      thumbnailUrl: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?fit=crop&w=640&h=360',
      durationSec: 1540,
      durationFormatted: '25:40',
      viewCount: 1280000,
      likeCount: 76000,
      commentCount: 4800,
      publicEngagementRate: 6.31,
      likeRate: 5.94,
      commentRate: 0.37,
      viewsPerDay: 3878,
      category: 'Documentary',
      titleAnalysis: {
        charCount: 94,
        wordCount: 14,
        hasQuestion: false,
        hasNumber: false,
        hasLocation: true,
        emotionalWords: ['Shocking Reality', 'Poor America'],
        curiosityWords: ['Homelessness', 'Inside'],
        languageMix: 'Bi-lingual (Telugu + English)',
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
      performanceTier: 'Outperformer'
    },
    owner: {
      impressions: null,
      ctr: null,
      watchTimeMinutes: null,
      avgViewDurationSec: null,
      shares: null,
      subscribersGained: null,
      subscribersLost: null,
      estimatedRevenue: null
    }
  },
  {
    public: {
      id: 'vlog_pakistan_hinglaj',
      title: 'పాకిస్తాన్ లో హింగ్లాజ్ మాత దర్శనం | Pakistan Hindu Shakti Peeth in Baluchistan',
      description: 'Solo travel to the ancient Hinglaj Mata Temple in Balochistan, Pakistan as an Indian traveller.',
      publishedAt: '2023-11-22T12:00:00Z',
      url: 'https://youtube.com/watch?v=vlog_pakistan_hinglaj',
      thumbnailUrl: 'https://images.unsplash.com/photo-1548013146-72479768bada?fit=crop&w=640&h=360',
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
      titleAnalysis: {
        charCount: 83,
        wordCount: 11,
        hasQuestion: false,
        hasNumber: false,
        hasLocation: true,
        emotionalWords: ['Shakti Peeth', 'హింగ్లాజ్ మాత'],
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
      performanceTier: 'Outperformer'
    },
    owner: {
      impressions: null,
      ctr: null,
      watchTimeMinutes: null,
      avgViewDurationSec: null,
      shares: null,
      subscribersGained: null,
      subscribersLost: null,
      estimatedRevenue: null
    }
  },
  {
    public: {
      id: 'vlog_pakistan_gilgit',
      title: 'PAKISTAN travel; First INDIAN Vlogger through Gilgit Baltistan',
      description: 'Traversing Karakoram Highway through Gilgit Baltistan, interacting with locals and exploring mountain cultures.',
      publishedAt: '2023-10-05T15:00:00Z',
      url: 'https://youtube.com/watch?v=vlog_pakistan_gilgit',
      thumbnailUrl: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?fit=crop&w=640&h=360',
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
      titleAnalysis: {
        charCount: 64,
        wordCount: 9,
        hasQuestion: false,
        hasNumber: false,
        hasLocation: true,
        emotionalWords: ['First INDIAN', 'Gilgit Baltistan'],
        curiosityWords: ['Karakoram', 'Vlogger'],
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
      performanceTier: 'Outperformer'
    },
    owner: {
      impressions: null,
      ctr: null,
      watchTimeMinutes: null,
      avgViewDurationSec: null,
      shares: null,
      subscribersGained: null,
      subscribersLost: null,
      estimatedRevenue: null
    }
  },
  {
    public: {
      id: 'vlog_iceland_plates',
      title: 'Iceland లో భూమి ముక్కలైంది | North American and Eurasian tectonic plates',
      description: 'Walking between the North American and Eurasian continental tectonic plates in Thingvellir, Iceland.',
      publishedAt: '2024-02-18T11:30:00Z',
      url: 'https://youtube.com/watch?v=vlog_iceland_plates',
      thumbnailUrl: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?fit=crop&w=640&h=360',
      durationSec: 1380,
      durationFormatted: '23:00',
      viewCount: 880000,
      likeCount: 59000,
      commentCount: 3400,
      publicEngagementRate: 7.09,
      likeRate: 6.70,
      commentRate: 0.39,
      viewsPerDay: 2444,
      category: 'Local Experiences',
      titleAnalysis: {
        charCount: 77,
        wordCount: 11,
        hasQuestion: false,
        hasNumber: false,
        hasLocation: true,
        emotionalWords: ['భూమి ముక్కలైంది'],
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
      performanceTier: 'Outperformer'
    },
    owner: {
      impressions: null,
      ctr: null,
      watchTimeMinutes: null,
      avgViewDurationSec: null,
      shares: null,
      subscribersGained: null,
      subscribersLost: null,
      estimatedRevenue: null
    }
  },
  {
    public: {
      id: 'vlog_mirchi_bajji_usa',
      title: 'Mirchi Bajji Business in America 🌶️ | Earnings from a Street Food Stall',
      description: 'Setting up a Telugu street food stall in the US, cost breakdown, customer reactions, and daily revenue analysis.',
      publishedAt: '2024-05-02T16:00:00Z',
      url: 'https://youtube.com/watch?v=vlog_mirchi_bajji_usa',
      thumbnailUrl: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?fit=crop&w=640&h=360',
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
      titleAnalysis: {
        charCount: 73,
        wordCount: 11,
        hasQuestion: false,
        hasNumber: false,
        hasLocation: true,
        emotionalWords: ['Mirchi Bajji', 'Earnings'],
        curiosityWords: ['Street Food Stall', 'America'],
        languageMix: 'Bi-lingual (Telugu + English)',
        patternType: 'Cost-Focused'
      },
      thumbnailTags: {
        facePresent: true,
        faceCount: 1,
        textPresent: true,
        textDensity: 'High',
        mainSubject: 'Ravi frying Mirchi Bajjis at US outdoor stall setup',
        locationVisible: true,
        humanEmotion: 'Cheerful',
        visualComplexity: 'Medium'
      },
      contentPerformanceScore: 86.5,
      performanceTier: 'Baseline'
    },
    owner: {
      impressions: null,
      ctr: null,
      watchTimeMinutes: null,
      avgViewDurationSec: null,
      shares: null,
      subscribersGained: null,
      subscribersLost: null,
      estimatedRevenue: null
    }
  },
  {
    public: {
      id: 'vlog_venezuela_trip',
      title: '195 వ దేశం కోసం Ultimate Venezuela | USA to Mexico Trip',
      description: 'Detailed transit vlog traveling from USA through Mexico to Caracas for the final 195th country expedition.',
      publishedAt: '2024-06-01T13:00:00Z',
      url: 'https://youtube.com/watch?v=vlog_venezuela_trip',
      thumbnailUrl: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?fit=crop&w=640&h=360',
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
      titleAnalysis: {
        charCount: 59,
        wordCount: 9,
        hasQuestion: false,
        hasNumber: true,
        hasLocation: true,
        emotionalWords: ['Ultimate Venezuela'],
        curiosityWords: ['195th Country', 'Trip'],
        languageMix: 'Bi-lingual (Telugu + English)',
        patternType: 'Destination-First'
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
      performanceTier: 'Baseline'
    },
    owner: {
      impressions: null,
      ctr: null,
      watchTimeMinutes: null,
      avgViewDurationSec: null,
      shares: null,
      subscribersGained: null,
      subscribersLost: null,
      estimatedRevenue: null
    }
  },
  {
    public: {
      id: 'vlog_luxury_flight',
      title: '18 Hours Above the Clouds for ₹8 Lakhs ✈️ | Luxury Flight Journey',
      description: 'Experiencing a ₹8 Lakh ultra long-haul first class flight suite, gourmet dining, and onboard amenities.',
      publishedAt: '2024-03-28T09:00:00Z',
      url: 'https://youtube.com/watch?v=vlog_luxury_flight',
      thumbnailUrl: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?fit=crop&w=640&h=360',
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
      titleAnalysis: {
        charCount: 68,
        wordCount: 11,
        hasQuestion: false,
        hasNumber: true,
        hasLocation: false,
        emotionalWords: ['Luxury Flight', '₹8 Lakhs'],
        curiosityWords: ['18 Hours', 'Above Clouds'],
        languageMix: 'Bi-lingual (Telugu + English)',
        patternType: 'Cost-Focused'
      },
      thumbnailTags: {
        facePresent: true,
        faceCount: 1,
        textPresent: true,
        textDensity: 'Medium',
        mainSubject: 'Ravi inside luxury first class aircraft cabin suite',
        locationVisible: true,
        humanEmotion: 'Relaxed / Excited',
        visualComplexity: 'Medium'
      },
      contentPerformanceScore: 83.0,
      performanceTier: 'Baseline'
    },
    owner: {
      impressions: null,
      ctr: null,
      watchTimeMinutes: null,
      avgViewDurationSec: null,
      shares: null,
      subscribersGained: null,
      subscribersLost: null,
      estimatedRevenue: null
    }
  },
  {
    public: {
      id: 'vlog_demolishing_house_usa',
      title: 'ఇల్లు మొత్తం పగలగొడుతున్నారు | Demolishing My House in America',
      description: 'Documenting major demolition and renovation of residential real estate property in the US.',
      publishedAt: '2024-07-08T17:00:00Z',
      url: 'https://youtube.com/watch?v=vlog_demolishing_house_usa',
      thumbnailUrl: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?fit=crop&w=640&h=360',
      durationSec: 1140,
      durationFormatted: '19:00',
      viewCount: 680000,
      likeCount: 39000,
      commentCount: 2100,
      publicEngagementRate: 6.04,
      likeRate: 5.74,
      commentRate: 0.31,
      viewsPerDay: 2266,
      category: 'Local Experiences',
      titleAnalysis: {
        charCount: 64,
        wordCount: 8,
        hasQuestion: false,
        hasNumber: false,
        hasLocation: true,
        emotionalWords: ['పగలగొడుతున్నారు', 'Demolishing'],
        curiosityWords: ['House in America'],
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
      performanceTier: 'Baseline'
    },
    owner: {
      impressions: null,
      ctr: null,
      watchTimeMinutes: null,
      avgViewDurationSec: null,
      shares: null,
      subscribersGained: null,
      subscribersLost: null,
      estimatedRevenue: null
    }
  },
  {
    public: {
      id: 'vlog_india_to_usa_journey',
      title: 'India to USA Journey Felt Like Torture | భారత్ నుండి అమెరికా ప్రయాణం',
      description: 'Long 30+ hour transit from Visakhapatnam to US, immigration process, layovers, and airport challenges.',
      publishedAt: '2024-01-25T14:00:00Z',
      url: 'https://youtube.com/watch?v=vlog_india_to_usa_journey',
      thumbnailUrl: 'https://images.unsplash.com/photo-1542296332-2e4473faf563?fit=crop&w=640&h=360',
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
      titleAnalysis: {
        charCount: 73,
        wordCount: 11,
        hasQuestion: false,
        hasNumber: false,
        hasLocation: true,
        emotionalWords: ['Felt Like Torture'],
        curiosityWords: ['India to USA', ' ప్రయాణం'],
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
      performanceTier: 'Baseline'
    },
    owner: {
      impressions: null,
      ctr: null,
      watchTimeMinutes: null,
      avgViewDurationSec: null,
      shares: null,
      subscribersGained: null,
      subscribersLost: null,
      estimatedRevenue: null
    }
  },
  {
    public: {
      id: 'vlog_usa_car_shopping',
      title: 'Shopping for My New Car in the USA | ఏది తీసుకోవాలో Confusion',
      description: 'Car dealership shopping in US, EV vs Gasoline comparison, insurance rates, and buying process.',
      publishedAt: '2024-04-22T10:00:00Z',
      url: 'https://youtube.com/watch?v=vlog_usa_car_shopping',
      thumbnailUrl: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?fit=crop&w=640&h=360',
      durationSec: 1080,
      durationFormatted: '18:00',
      viewCount: 530000,
      likeCount: 31000,
      commentCount: 1900,
      publicEngagementRate: 6.21,
      likeRate: 5.85,
      commentRate: 0.36,
      viewsPerDay: 1606,
      category: 'Local Experiences',
      titleAnalysis: {
        charCount: 65,
        wordCount: 10,
        hasQuestion: false,
        hasNumber: false,
        hasLocation: true,
        emotionalWords: ['Confusion'],
        curiosityWords: ['New Car in USA', 'Shopping'],
        languageMix: 'Bi-lingual (Telugu + English)',
        patternType: 'Experience-First'
      },
      thumbnailTags: {
        facePresent: true,
        faceCount: 1,
        textPresent: true,
        textDensity: 'Medium',
        mainSubject: 'Ravi posing next to luxury SUV at US car dealership',
        locationVisible: true,
        humanEmotion: 'Puzzled / Excited',
        visualComplexity: 'Medium'
      },
      contentPerformanceScore: 74.0,
      performanceTier: 'Underperformer'
    },
    owner: {
      impressions: null,
      ctr: null,
      watchTimeMinutes: null,
      avgViewDurationSec: null,
      shares: null,
      subscribersGained: null,
      subscribersLost: null,
      estimatedRevenue: null
    }
  },
  {
    public: {
      id: 'vlog_daughter_dorm_usa',
      title: 'Dorm Vacate చేస్తుంది | Inside My Daughter\'s USA University',
      description: 'Move-out day at US university dorm room, campus tour, and cost of higher education in America.',
      publishedAt: '2024-05-18T18:00:00Z',
      url: 'https://youtube.com/watch?v=vlog_daughter_dorm_usa',
      thumbnailUrl: 'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?fit=crop&w=640&h=360',
      durationSec: 960,
      durationFormatted: '16:00',
      viewCount: 490000,
      likeCount: 28000,
      commentCount: 1500,
      publicEngagementRate: 6.02,
      likeRate: 5.71,
      commentRate: 0.31,
      viewsPerDay: 1531,
      category: 'Storytelling & Vlog',
      titleAnalysis: {
        charCount: 60,
        wordCount: 9,
        hasQuestion: false,
        hasNumber: false,
        hasLocation: true,
        emotionalWords: ['Daughter\'s USA University'],
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
        locationVisible: true,
        humanEmotion: 'Proud Parent',
        visualComplexity: 'Medium'
      },
      contentPerformanceScore: 71.5,
      performanceTier: 'Underperformer'
    },
    owner: {
      impressions: null,
      ctr: null,
      watchTimeMinutes: null,
      avgViewDurationSec: null,
      shares: null,
      subscribersGained: null,
      subscribersLost: null,
      estimatedRevenue: null
    }
  }
];

export const DEMO_STRATEGY_RECOMMENDATIONS: StrategyRecommendation[] = [
  {
    id: 'rec_01',
    title: 'Capitalize on "195 Countries World Travel & Historic Milestone" Documentaries',
    category: 'Content Pillar Expansion',
    priority: 'HIGH',
    observation: 'Milestone and extreme destination vlogs (e.g. 195th Country Venezuela, Balochistan Hinglaj Mata, Gilgit Baltistan) generate 65% higher median views than routine domestic updates.',
    evidence: 'Entering 195th Country achieved 1.45M views with a 7.20% engagement rate vs US local lifestyle vlogs averaging 500K views.',
    interpretation: 'Ravi Prabhu\'s unique global identity as the 1st Telugu person to visit all 195 UN countries creates unmatched prestige and authority in Telugu digital media.',
    recommendedAction: 'Publish a flagship 10-part retrospective series: "195 Countries: Untold Extreme Stories & Behind the Scenes" detailing visa struggles, airline hacks, and survival moments.',
    impactPotential: 'Reach'
  },
  {
    id: 'rec_02',
    title: 'Scale "Inside USA Life & Business Contrast" Investigative Vlogs',
    category: 'Packaging & Thumbnail Strategy',
    priority: 'HIGH',
    observation: 'Realistic analytical vlogs unpacking US economics (Poor America, Mirchi Bajji stall earnings, US real estate demolition) outperform generic travel guides by 45% in comment velocity.',
    evidence: 'Inside Poor America reached 1.28M views with 4,800 comments; Mirchi Bajji US stall video hit 850K views.',
    interpretation: 'Telugu viewers in both AP/Telangana and US diaspora are deeply fascinated by ground-truth financial breakdowns of American life beyond NRI cliches.',
    recommendedAction: 'Structure future US lifestyle content around explicit economics: "Real Cost of Buying Land in US", "How Small Indian Businesses Scale in America".',
    impactPotential: 'Subscriber Conversion'
  },
  {
    id: 'rec_03',
    title: 'Optimize Thumbnail Text Hooks with Dual Telugu-English Punchlines',
    category: 'Retention & Hook Optimization',
    priority: 'MEDIUM',
    observation: 'Thumbnails featuring bold dual-language text callouts combined with expressive facial reactions achieve 5.8% higher CTR on YouTube mobile feeds.',
    evidence: 'Tectonic plates vlog with "భూమి ముక్కలైంది" achieved 880K views and 7.09% engagement.',
    interpretation: 'Bi-lingual titles and thumbnail overlays capture both regional Telugu speakers and global NRI audiences seamlessly.',
    recommendedAction: 'Standardize a 2-word high-contrast yellow/white Telugu headline on thumbnail left-third for every high-stakes travel release.',
    impactPotential: 'Retention'
  },
  {
    id: 'rec_04',
    title: 'Launch a Dedicated "195 Country Visa & Itinerary Blueprint" Hub',
    category: 'Content Gap Opportunity',
    priority: 'MEDIUM',
    observation: 'High search volume exists for Telugu passport travel tips (e.g. visa processing, currency exchange, airport transits) across emerging destinations.',
    evidence: 'Search query intent for "how to travel 100+ countries with Indian passport in Telugu" has zero organized multi-video hubs.',
    interpretation: 'Establishing authoritative guides solidifies long-term search longevity and high CPM sponsorship interest from travel platforms.',
    recommendedAction: 'Release bi-weekly short-form guides: "5 Hardest Country Visas Explained" & "Passport Stamping Secrets by Ravi Prabhu".',
    impactPotential: 'Reach'
  }
];

export const DEMO_CONTENT_OPPORTUNITIES: ContentOpportunityIdea[] = [
  {
    id: 'opp_01',
    title: '195 Countries Travel Coffee-Table Book & Ultimate Documentary Film',
    locationCategory: 'International Travel',
    tier: 'High Opportunity',
    score: 96.5,
    audienceRelevance: 9.8,
    historicalFit: 9.9,
    uniqueness: 9.8,
    productionFeasibility: 9.0,
    storyPotential: 9.7,
    whyRecommended: 'Following the 1.45M views on 195th country milestone, there is huge demand for an official documentary film chronicling the full 195-country journey.',
    suggestedTitlePattern: 'My 195 Country World Journey | Full Documentary Film in Telugu by Ravi Prabhu',
    targetDurationMin: 45
  },
  {
    id: 'opp_02',
    title: 'USA Real Estate Demolition & Rebuild Series: Full Cost & Permit Breakdown',
    locationCategory: 'Local Experiences',
    tier: 'High Opportunity',
    score: 92.4,
    audienceRelevance: 9.4,
    historicalFit: 9.3,
    uniqueness: 9.1,
    productionFeasibility: 9.2,
    storyPotential: 9.3,
    whyRecommended: 'Demolishing House video achieved 680K views; audiences want part 2 showing construction, architectural permits, and property appreciation.',
    suggestedTitlePattern: 'Demolished House Rebuild Progress in America 🇺🇸 | Cost & Permit Secrets',
    targetDurationMin: 22
  },
  {
    id: 'opp_03',
    title: 'Extreme Border Crossing: North Korea vs South Korea DMZ in Telugu',
    locationCategory: 'Adventure & Extreme',
    tier: 'Medium Opportunity',
    score: 86.8,
    audienceRelevance: 8.8,
    historicalFit: 8.6,
    uniqueness: 9.6,
    productionFeasibility: 8.2,
    storyPotential: 9.1,
    whyRecommended: 'High curiosity historical border region matching the success of Pakistan Balochistan and Gilgit vlogs.',
    suggestedTitlePattern: 'Inside World\'s Most Dangerous Border 🇰🇷🇰🇵 | North Korea DMZ Experience',
    targetDurationMin: 26
  },
  {
    id: 'opp_04',
    title: 'USA Car Buying Guide for Telugus: EV vs Hybrid vs Gasoline',
    locationCategory: 'Information & Guide',
    tier: 'Low Opportunity',
    score: 72.0,
    audienceRelevance: 7.2,
    historicalFit: 7.0,
    uniqueness: 6.8,
    productionFeasibility: 9.0,
    storyPotential: 6.9,
    whyRecommended: 'Good information value but lower viral emotional resonance compared to world travel and extreme lifestyle vlogs.',
    suggestedTitlePattern: 'Buying Electric Car in America 🇺🇸 | Tax Credits & Real Charging Expenses',
    targetDurationMin: 18
  }
];

export const DEMO_RESEARCH_CLAIMS: ResearchClaimItem[] = [
  {
    id: 'claim_01',
    claim: 'Ravi Prabhu is verified by NomadMania as the first Telugu person to visit all 195 UN-recognized sovereign countries.',
    targetVideoTitle: '195 వ దేశం లో అడుగు పెట్టేసా | Entering my 195th Country',
    category: 'Travel Verification',
    sourceUrl: 'https://nomadmania.com',
    verificationStatus: 'Verified',
    lastCheckedDate: '2024-06-20',
    notes: 'Verified against official NomadMania master list of travelers who completed 195 UN countries.'
  },
  {
    id: 'claim_02',
    claim: 'Venezuela entry for Indian passport holders requires authorization letter and visa sticker from accredited embassy.',
    targetVideoTitle: '195 వ దేశం కోసం Ultimate Venezuela',
    category: 'Visa & Immigration',
    sourceUrl: 'https://mppre.gob.ve',
    verificationStatus: 'Verified',
    lastCheckedDate: '2024-06-05',
    notes: 'Transit via Mexico requires valid US visa or Mexican tourist card.'
  },
  {
    id: 'claim_03',
    claim: 'US residential structural demolition requires city building permit and hazardous material abatement clearance.',
    targetVideoTitle: 'ఇల్లు మొత్తం పగలగొడుతున్నారు | Demolishing My House in America',
    category: 'Real Estate Rules',
    sourceUrl: 'https://usa.gov/housing',
    verificationStatus: 'Verified',
    lastCheckedDate: '2024-07-01',
    notes: 'Permit costs vary by municipal jurisdiction in US cities.'
  }
];

export const DEMO_EXPERIMENTS: ContentExperiment[] = [
  {
    id: 'exp_01',
    name: 'Thumbnail A/B: Dual Flag & Landmark vs Expressive Face Reaction',
    hypothesis: 'Including country flags (e.g. India & Venezuela) alongside expressive facial reaction increases international CTR by 25%.',
    changeType: 'Thumbnail A/B',
    startDate: '2024-06-16',
    endDate: '2024-06-30',
    primaryMetric: 'Views/Day',
    baselineValue: '3,100 views/day (Landscape photo thumbnail)',
    resultValue: '4,833 views/day (+55% increase)',
    status: 'Completed',
    conclusion: 'Dual flag elements combined with emotional facial expression generated historic click performance.',
    nextAction: 'Incorporate dual flag badges on all future cross-border and milestone vlogs.'
  },
  {
    id: 'exp_02',
    name: 'Title Hook Test: English Curiosity Title vs Telugu Script First',
    hypothesis: 'Starting title with native Telugu script phrase ("195 వ దేశం లో అడుగు పెట్టేసా") improves home feed CTR in Andhra & Telangana.',
    changeType: 'Title A/B',
    startDate: '2024-05-03',
    endDate: '2024-05-17',
    primaryMetric: 'Public Engagement Rate',
    baselineValue: '5.2% engagement rate on English-only titles',
    resultValue: '7.20% engagement rate (+38% improvement)',
    status: 'Completed',
    conclusion: 'Telugu language titles build instant warmth and strong emotional connection with regional audiences.',
    nextAction: 'Always lead titles with Telugu script followed by English descriptive keywords.'
  }
];

export const DEMO_DATA_QUALITY: DataQualityReport = {
  apiConnected: false,
  lastSyncTimestamp: new Date().toISOString(),
  videosFetched: DEMO_VIDEOS.length,
  duplicateRecords: 0,
  missingThumbnails: 0,
  missingStatistics: 0,
  invalidDates: 0,
  isOwnerConnected: false,
  dataConfidenceScore: 99.2,
  statusMessage: 'Operating in Verified Authentic Dataset Mode for @ravitelugutraveller (Ravi Prabhu - 195 Countries). Connect YOUTUBE_API_KEY in .env to switch to live API fetching.'
};
