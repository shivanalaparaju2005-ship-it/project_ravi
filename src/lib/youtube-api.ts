import { ChannelMetrics, CombinedVideoData } from './types';
import { DEMO_CHANNEL_METRICS, DEMO_VIDEOS } from './demo-data';

export interface YoutubeFetchResult {
  channel: ChannelMetrics;
  videos: CombinedVideoData[];
  isLiveApi: boolean;
  error?: string | null;
}

export async function fetchChannelData(
  handle: string = '@ravitelugutraveller',
  forceLive: boolean = false
): Promise<YoutubeFetchResult> {
  // If forceLive is true or if window/env enables live API calls, attempt fetching via backend API route
  try {
    const res = await fetch(`/api/youtube?handle=${encodeURIComponent(handle)}`);
    if (res.ok) {
      const data = await res.json();
      if (data && data.channel) {
        return {
          channel: data.channel,
          videos: data.videos || [],
          isLiveApi: data.isLiveApi,
          error: data.error || null
        };
      }
    }
  } catch (err) {
    console.warn('Live API fetch failed, falling back to Demo Mode:', err);
  }

  // Default fallback to high-quality Demo dataset
  return {
    channel: DEMO_CHANNEL_METRICS,
    videos: DEMO_VIDEOS,
    isLiveApi: false,
    error: null
  };
}
