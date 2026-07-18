import { ChapterList } from '@/components/ChapterList';
import duaBookData from '@/../data/duaBook.json';

export default function ChaptersPage() {
  return <ChapterList chapters={duaBookData} />;
}
