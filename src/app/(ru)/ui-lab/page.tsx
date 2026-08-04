import type { Metadata } from 'next';
import NumberFlow from '@/components/motion/NumberFlow';
import { WaveText, ScrambleText } from '@/components/motion/AnimatedHeading';
import SiriOrb from '@/components/motion/SiriOrb';
import CardStack from '@/components/motion/CardStack';
import RawFooter from '@/components/layout/RawFooter';

export const metadata: Metadata = {
    title: { absolute: 'UI Lab — анимации Digital Pride' },
    description: 'Демо анимированных компонентов.',
    robots: { index: false, follow: false },
    alternates: { canonical: '/ui-lab' },
};

const STATS = [
    { value: '679', label: 'заявок в WhatsApp', accent: '#E31C24' },
    { value: '+300', label: '% к ROMI', suffix: '', accent: '#FF6B4A' },
    { value: '28 000', label: '₸ средний чек', accent: '#d7ff3e' },
    { value: '1 680 000', label: '₸ выручка с кейса', accent: '#E31C24' },
];

const CASES = [
    { meta: 'Кейс · Доставка плова', title: 'Вложили $567 — вернули ≈1,68 млн ₸', text: 'Meta Ads на доставку домашнего плова: 427 переписок в WhatsApp → ~60 заказов при среднем чеке 28 000 ₸.', accent: '#E31C24' },
    { meta: 'Кейс · Лазерная эпиляция', title: '679 заявок по $1,29', text: 'Таргет в Instagram для студии в Алматы. Снизили стоимость лида в 3 раза.', accent: '#FF6B4A' },
    { meta: 'Кейс · B2B-клининг', title: 'Сайт-продавец ART Cleaning', text: 'Технология «без вёдер», онлайн-калькулятор и заявки прямо в WhatsApp.', accent: '#d7ff3e' },
];

function Card({ title, sub, children }: { title: string; sub: string; children: React.ReactNode }) {
    return (
        <div className="rounded-3xl p-8 md:p-10" style={{ background: '#141319', border: '1px solid rgba(255,255,255,0.08)' }}>
            <div className="mb-6">
                <h3 className="text-xl font-extrabold text-white mb-1" style={{ fontFamily: "'Unbounded', sans-serif" }}>{title}</h3>
                <p className="text-gray-400 text-sm">{sub}</p>
            </div>
            {children}
        </div>
    );
}

export default function UiLab() {
    return (
        <>
            <main className="pt-32 pb-24" style={{ background: '#0B0B0F', minHeight: '100vh' }}>
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6" style={{ background: 'rgba(227,28,36,0.15)', color: '#FF5A4D' }}>
                        UI Lab · внутреннее демо
                    </div>

                    {/* Заголовки: Wave + Scramble */}
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 tracking-tight" style={{ fontFamily: "'Unbounded', sans-serif" }}>
                        <WaveText text="Движение, которое" />{' '}
                        <span style={{ color: '#E31C24' }}><WaveText text="продаёт" /></span>
                    </h1>
                    <p className="text-lg text-gray-400 mb-16 max-w-2xl">
                        Наведите на заголовок ниже — буквы расшифруются:{' '}
                        <ScrambleText text="Digital Pride" className="font-bold text-white" />
                    </p>

                    <div className="grid gap-6">
                        {/* 1. Number Flow */}
                        <Card title="Анимированные цифры" sub="Прокручиваются при появлении в поле зрения. Для статистики, результатов кейсов и тарифов.">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                {STATS.map((s, i) => (
                                    <div key={i}>
                                        <div className="text-4xl md:text-5xl font-extrabold" style={{ fontFamily: "'Unbounded', sans-serif", color: s.accent }}>
                                            <NumberFlow value={s.value} />
                                        </div>
                                        <div className="text-gray-400 text-sm mt-2">{s.label}</div>
                                    </div>
                                ))}
                            </div>
                        </Card>

                        <div className="grid md:grid-cols-2 gap-6">
                            {/* 3. Siri Orb */}
                            <Card title="Градиентный орб" sub="Живой декоративный акцент для героя или блока «как работаем».">
                                <div className="flex items-center justify-center gap-8 py-4">
                                    <SiriOrb size={190} />
                                    <SiriOrb size={90} />
                                </div>
                            </Card>

                            {/* 4. Card Stack */}
                            <Card title="Стопка карточек" sub="Смахните вбок или нажмите «Дальше». Для кейсов и отзывов.">
                                <CardStack items={CASES} height={250} />
                            </Card>
                        </div>
                    </div>

                    <p className="text-gray-500 text-sm mt-16 text-center">
                        Все эффекты — свои реализации в духе SmoothUI (MIT), перекрашены в фирменные цвета,
                        на русском, с уважением к prefers-reduced-motion. Страница закрыта от индексации.
                    </p>
                </div>
            </main>
            <RawFooter />
        </>
    );
}
