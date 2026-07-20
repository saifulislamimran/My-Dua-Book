export interface AudioScanResult {
  url: string;
  status: 'original' | 'fallback' | 'error';
}

export const scanAndResolveAudio = async (chapterSlug: string, duaId: number | string): Promise<AudioScanResult> => {
  const chapterPrefix = chapterSlug.split('-')[0].toLowerCase();
  const paddedDuaId = duaId.toString().padStart(3, '0');
  const basePath = `/audio/chapter-${chapterPrefix}/${paddedDuaId}`;
  
  const formats: string[] = ['mp3', 'm4a', 'mp4', 'wav', 'aac', 'ogg', 'flac'];
  
  // Sequential client-side scan to find the exact valid file without guessing
  for (const ext of formats) {
    const testUrl = `${basePath}.${ext}`;
    try {
      const res: Response = await fetch(testUrl, { method: 'HEAD' });
      const contentType = res.headers.get('content-type');
      
      // Strict MIME-type validation: ignore Next.js 404 HTML pages disguised as 200 OK
      if (res.ok && contentType && (contentType.includes('audio/') || contentType.includes('video/'))) {
        return { url: testUrl, status: 'original' };
      }
    } catch  {
      // Ignore network errors/CORS issues and proceed to next format
    }
  }

  // If no original formats are found, verify the fallback exists
  const fallbackUrl = '/audio/Nil.mp3';
  try {
    const fallbackRes: Response = await fetch(fallbackUrl, { method: 'HEAD' });
    const fallbackContentType = fallbackRes.headers.get('content-type');
    if (fallbackRes.ok && fallbackContentType && (fallbackContentType.includes('audio/') || fallbackContentType.includes('video/'))) {
      return { url: fallbackUrl, status: 'fallback' };
    }
  } catch {
    // Fallback also failed
  }

  return { url: fallbackUrl, status: 'error' };
};
