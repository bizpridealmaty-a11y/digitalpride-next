import type { Metadata } from 'next';
import './globals.css';
import SiteShell from '@/components/layout/SiteShell';
import NotFoundContent from '@/components/NotFoundContent';

/**
 * ГЛОБАЛЬНАЯ 404 — для адресов, не попавших ни в (ru), ни в (kk).
 *
 * Корневых layout теперь два (по одному на язык), а значит в app/ корневого
 * layout нет — и оболочку этой странице дать некому. Поэтому она рендерит
 * SiteShell сама. Без этого Next отдавал голый HTML на 7 КБ: без шапки,
 * подвала и стилей (на проде до переезда 404 весила 55 КБ и была фирменной).
 */
export const metadata: Metadata = {
    title: 'Страница не найдена — 404 | Digital Pride',
    description: 'Страница, которую вы ищете, не существует или была перемещена. Перейдите к нашим услугам или вернитесь на главную.',
    robots: { index: false, follow: true },
};

export default function GlobalNotFound() {
    return (
        <SiteShell locale="ru">
            <NotFoundContent />
        </SiteShell>
    );
}
