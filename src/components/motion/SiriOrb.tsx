import type { CSSProperties } from 'react';

/**
 * SiriOrb — живой переливающийся градиентный шар (в духе SmoothUI Siri Orb),
 * собран на слоистых CSS-градиентах в фирменных цветах (red/orange/lime/pink).
 * Анимация и блики — чистый CSS (классы .dp-orb* в globals.css), поэтому
 * компонент серверный и невесомый. prefers-reduced-motion гасит вращение.
 */
export default function SiriOrb({
    size = 180,
    className = '',
    style,
}: {
    size?: number;
    className?: string;
    style?: CSSProperties;
}) {
    return (
        <div
            className={`dp-orb ${className}`}
            style={{ width: size, height: size, ...style }}
            aria-hidden="true"
        >
            <span className="dp-orb__layer dp-orb__layer--1" />
            <span className="dp-orb__layer dp-orb__layer--2" />
            <span className="dp-orb__glow" />
        </div>
    );
}
