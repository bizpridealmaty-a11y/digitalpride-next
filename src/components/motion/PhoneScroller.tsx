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
    duration: durationProp,
}: {
    src: string;
    alt: string;
    heightPx?: number;
    /** Задать скорость (сек) вручную — для разного темпа у разных кейсов. */
    duration?: number;
}) {
    // если скорость не задана — считаем от длины страницы
    const duration = durationProp ?? Math.min(16, Math.max(10, Math.round(heightPx / 320)));
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
