/**
 * PhoneScroller — «живой» экран телефона: реальный полностраничный мобильный
 * скриншот сайта плавно панорамируется сверху вниз и обратно в цикле, как
 * запись экрана. Реализовано чистым CSS через анимацию object-position
 * (см. .dp-phone-scroll в globals.css) — без JS-замеров и IntersectionObserver,
 * поэтому работает стабильно. prefers-reduced-motion гасит движение.
 *
 * heightPx — реальная высота исходного скриншота (для ровного темпа прокрутки
 * у картинок разной длины).
 */
export default function PhoneScroller({
    src,
    alt,
    heightPx = 2000,
}: {
    src: string;
    alt: string;
    heightPx?: number;
}) {
    // одинаковая скорость панорамы независимо от длины страницы
    const duration = Math.min(20, Math.max(9, Math.round(heightPx / 150)));
    return (
        <img
            src={src}
            alt={alt}
            loading="lazy"
            className="dp-phone-scroll"
            style={{ animationDuration: `${duration}s` }}
        />
    );
}
