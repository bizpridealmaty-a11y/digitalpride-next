
import { Metadata } from 'next';
import ThreadsClient from './ThreadsClient';

export const metadata: Metadata = {
  title: 'Продвижение в Threads — комплексная раскрутка экспертов и предпринимателей',
  description: 'Комплексное продвижение в Threads для экспертов и предпринимателей. Вирусный контент, рост подписчиков, стратегия продвижения. Заявки и клиенты из Threads уже через 14 дней.',
  alternates: { canonical: '/threads-prodvizhenie' },
  openGraph: {
    title: 'Продвижение в Threads | Digital Pride',
    description: 'Вирусный контент, рост подписчиков, заявки уже через 14 дней.',
    url: '/threads-prodvizhenie',
  },
};

export default function Page() {
  return <ThreadsClient />;
}
