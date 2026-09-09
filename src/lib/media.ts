export interface MediaItem {
  type: 'image' | 'video' | 'youtube' | 'rutube' | 'vimeo' | 'vk';
  url: string;
  embedUrl?: string;
  thumbnail: string;
  isVideo: boolean;
}

export function formatUniversalMediaUrl(url: string): string {
  if (!url || typeof url !== 'string') return '';
  const trimmed = url.trim();
  if (!trimmed) return '';

  // 1. yacht.link with #UUID -> CharterIndex CDN direct JPG image
  const yachtLinkMatch =
    trimmed.match(/yacht\.link\/[^\/]+\/gallery\.html#([a-zA-Z0-9_-]+)/i) ||
    trimmed.match(/yacht\.link\/.*#([a-zA-Z0-9_-]+)/i);
  if (yachtLinkMatch && yachtLinkMatch[1]) {
    const id = yachtLinkMatch[1];
    return `https://images.charterindex.com/${id}.jpg`;
  }

  // 2. Google Drive direct image conversion
  const driveMatch =
    trimmed.match(/drive\.google\.com\/file\/d\/([a-zA-Z0-9_-]+)/) ||
    trimmed.match(/drive\.google\.com\/thumbnail\?.*id=([a-zA-Z0-9_-]+)/) ||
    trimmed.match(/lh3\.google\.com\/u\/\d+\/d\/([a-zA-Z0-9_-]+)/) ||
    trimmed.match(/lh3\.googleusercontent\.com\/d\/([a-zA-Z0-9_-]+)/) ||
    trimmed.match(/drive\.google\.com\/open\?id=([a-zA-Z0-9_-]+)/) ||
    trimmed.match(/drive\.google\.com\/uc\?.*id=([a-zA-Z0-9_-]+)/) ||
    trimmed.match(/docs\.google\.com\/uc\?.*id=([a-zA-Z0-9_-]+)/);

  if (driveMatch && driveMatch[1]) {
    const fileId = driveMatch[1].replace(/=w\d+/, '');
    if (
      trimmed.toLowerCase().endsWith('.svg') ||
      trimmed.toLowerCase().includes('.svg')
    ) {
      return `https://drive.google.com/uc?export=view&id=${fileId}`;
    }
    return `https://lh3.googleusercontent.com/d/${fileId}=w1400`;
  }

  return trimmed;
}

export function parseMediaItem(rawUrl: string): MediaItem | null {
  if (!rawUrl || typeof rawUrl !== 'string') return null;
  const trimmed = rawUrl.trim();
  if (!trimmed || trimmed.length < 5) return null;

  // 1. YouTube (youtube.com, youtu.be, shorts)
  const ytMatch = trimmed.match(
    /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/|youtube\.com\/shorts\/)([a-zA-Z0-9_-]{11})/i,
  );
  if (ytMatch && ytMatch[1]) {
    const id = ytMatch[1];
    return {
      type: 'youtube',
      url: trimmed,
      embedUrl: `https://www.youtube-nocookie.com/embed/${id}?rel=0&enablejsapi=1`,
      thumbnail: `https://img.youtube.com/vi/${id}/hqdefault.jpg`,
      isVideo: true,
    };
  }

  // 2. Rutube (rutube.ru/video/... or rutube.ru/play/embed/...)
  const rutubeMatch = trimmed.match(
    /rutube\.ru\/(?:video|play\/embed)\/([a-zA-Z0-9_-]+)/i,
  );
  if (rutubeMatch && rutubeMatch[1]) {
    const id = rutubeMatch[1];
    return {
      type: 'rutube',
      url: trimmed,
      embedUrl: `https://rutube.ru/play/embed/${id}`,
      thumbnail: '',
      isVideo: true,
    };
  }

  // 3. Vimeo
  const vimeoMatch = trimmed.match(
    /vimeo\.com\/(?:channels\/(?:\w+\/)?|groups\/[^\/]*\/videos\/|album\/\d+\/video\/|video\/|)(\d+)/i,
  );
  if (vimeoMatch && vimeoMatch[1]) {
    const id = vimeoMatch[1];
    return {
      type: 'vimeo',
      url: trimmed,
      embedUrl: `https://player.vimeo.com/video/${id}`,
      thumbnail: '',
      isVideo: true,
    };
  }

  // 4. VK Video
  const vkMatch = trimmed.match(
    /(?:vk\.com|vkvideo\.ru)\/(?:video_ext\.php\?|video)(-?\d+_\d+)/i,
  );
  if (vkMatch && vkMatch[1]) {
    const parts = vkMatch[1].split('_');
    return {
      type: 'vk',
      url: trimmed,
      embedUrl: `https://vk.com/video_ext.php?oid=${parts[0]}&id=${parts[1]}&hd=2`,
      thumbnail: '',
      isVideo: true,
    };
  }

  // 5. Direct HTML5 Video (.mp4, .webm, .mov, .ogg, .m4v)
  const isDirectVideo = /\.(mp4|webm|mov|ogg|m4v)(\?.*)?$/i.test(trimmed);
  if (isDirectVideo) {
    return {
      type: 'video',
      url: trimmed,
      embedUrl: trimmed,
      thumbnail: '',
      isVideo: true,
    };
  }

  // 6. Direct Image, Google Drive, CharterIndex / Yacht.link, etc.
  const formattedImg = formatUniversalMediaUrl(trimmed);
  return {
    type: 'image',
    url: formattedImg || trimmed,
    thumbnail: formattedImg || trimmed,
    isVideo: false,
  };
}

export function parseAllMedia(images: string[] = []): MediaItem[] {
  if (!Array.isArray(images)) return [];
  const items: MediaItem[] = [];
  for (const url of images) {
    const item = parseMediaItem(url);
    if (item) {
      items.push(item);
    }
  }
  return items;
}
