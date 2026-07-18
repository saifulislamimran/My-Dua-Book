import { notFound } from 'next/navigation';
import { ChapterView } from '@/components/ChapterView';
import { duaBookData } from '@/data/duaBook';

export function generateStaticParams() {
  return duaBookData.map((chapter) => ({
    chapterSlug: chapter.slug,
  }));
}

export default function ChapterDetailPage({ params }: { params: { chapterSlug: string } }) {
  const chapter = duaBookData.find(c => c.slug === params.chapterSlug);
  
  if (!chapter) {
    notFound();
  }

  return <ChapterView chapter={chapter} />;
}
