import { notFound } from 'next/navigation';
import { ChapterView } from '@/components/ChapterView';
import duaBookData from '@/../data/duaBook.json';

// Ensure all slugs are statically generated at build time
export function generateStaticParams() {
  return duaBookData.map((chapter) => ({
    slug: chapter.slug,
  }));
}

export default function ChapterDetailPage({ params }: { params: { slug: string } }) {
  const chapter = duaBookData.find(c => c.slug === params.slug);
  
  if (!chapter) {
    notFound();
  }

  return <ChapterView chapter={chapter} />;
}
