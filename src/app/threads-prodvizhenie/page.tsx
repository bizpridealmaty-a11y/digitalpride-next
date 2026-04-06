
import { Metadata } from 'next';
import ThreadsClient from './ThreadsClient';

export const metadata: Metadata = {
  title: 'Продвижение в Threads — комплексная раскрутка экспертов и предпринимателей | Digital Pride',
  description: 'Комплексное продвижение в Threads для экспертов и предпринимателей. Вирусный контент, рост подписчиков, стратегия продвижения. Заявки и клиенты из Threads уже через 14 дней.',
};

export default function Page() {
  return <ThreadsClient />;
}
