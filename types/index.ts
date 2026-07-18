export interface Dua {
  serial: string;
  topic: string;
  arabic: string;
  english: string;
  audio_path: string;
}

export interface Chapter {
  id: string;
  title: string;
  slug: string;
  description: string;
  duas: Dua[];
}
