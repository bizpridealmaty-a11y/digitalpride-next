import type { Metadata } from 'next';
import NotFoundContent from '@/components/NotFoundContent';

export const metadata: Metadata = {
    title: 'Страница не найдена — 404',
    description: 'Страница, которую вы ищете, не существует или была перемещена. Перейдите к нашим услугам или вернитесь на главную.',
    robots: { index: false, follow: true },
};

/** 404 внутри русской группы — оболочку (<html>, шапку, подвал) даёт (ru)/layout.tsx. */
export default function NotFound() {
    return <NotFoundContent />;
}
