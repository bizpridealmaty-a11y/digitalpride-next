
import { Metadata } from 'next';
import ThreadsClient from './ThreadsClient';

export const metadata: Metadata = {
  title: 'Продвижение в Threads — комплексная раскрутка экспертов и предпринимателей',
  description: 'Комплексное продвижение в Threads для экспертов и предпринимателей: вирусный контент, рост подписчиков, стратегия. Заявки уже через 14 дней.',
  alternates: { canonical: '/threads-prodvizhenie', languages: { 'ru-KZ': '/threads-prodvizhenie', 'kk-KZ': '/kk/threads-prodvizhenie', 'x-default': '/threads-prodvizhenie' } },
  openGraph: {
    title: 'Продвижение в Threads | Digital Pride',
    description: 'Вирусный контент, рост подписчиков, заявки уже через 14 дней.',
    url: '/threads-prodvizhenie',
  },
};

export default function Page() {
  return <ThreadsClient />;
}
