import { ChapterList } from '@/components/ChapterList';
import { duaBookData } from '@/data/duaBook';

export default function ChaptersPage() {
  return <ChapterList chapters={duaBookData} />;
}
