export interface Dua {
  id: number;
  topic: string;
  arabic: string;
  translation_en: string;
  translation_bn?: string;
  audioSrc: string;
}

export interface Chapter {
  id: string; // e.g., 'A', 'B'
  slug: string;
  title: string;
  description: string;
  duas: Dua[];
}
