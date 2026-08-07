/**
 * LiveSiteScroll — «живой» показ сайта: полностраничный скриншот прокручивается
 * сверху вниз внутри окна браузера, как будто человек листает сайт мышкой.
 * Рядом — телефон с мобильной версией, тоже в прокрутке. Чистый CSS
 * (object-position), без JS-замеров — работает всегда и везде.
 */
export default function LiveSiteScroll({
    desktop,
    mobile,
    url = '',
    title,
    durDesktop = 24,
    durMobile = 26,
}: {
    desktop: string;
    mobile?: string;
    url?: string;
    title: string;
    durDesktop?: number;
    durMobile?: number;
}) {
    const host = url.replace(/^https?:\/\//, '').replace(/\/+$/, '');

    return (
        <div className="relative pb-8 sm:pb-0">
            {/* Окно браузера с прокручивающимся десктоп-скриншотом */}
            <div className="relative mx-auto w-full max-w-4xl rounded-2xl overflow-hidden bg-white border border-gray-200 shadow-[0_45px_100px_-45px_rgba(0,0,0,0.55)]">
                {/* «Шапка» браузера */}
                <div className="flex items-center gap-3 px-4 h-11 border-b border-gray-200 bg-gradient-to-b from-gray-100 to-gray-50">
                    <span className="flex items-center gap-1.5">
                        <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                        <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
                        <span className="w-3 h-3 rounded-full bg-[#28c840]" />
                    </span>
                    {host && (
                        <div className="flex-1 min-w-0 mx-1">
                            <div className="mx-auto max-w-sm flex items-center justify-center gap-1.5 rounded-md bg-white/80 border border-gray-200 text-gray-500 text-xs font-medium px-3 py-1 truncate">
                                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0"><rect x="4" y="11" width="16" height="10" rx="2" /><path d="M8 11V7a4 4 0 0 1 8 0v4" /></svg>
                                <span className="truncate">{host}</span>
                            </div>
                        </div>
                    )}
                </div>
                {/* Область просмотра — скриншот панорамируется сверху вниз */}
                <div className="relative overflow-hidden aspect-[16/10] bg-gray-50">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src={desktop}
                        alt={`${title} — сайт, десктоп`}
                        loading="lazy"
                        decoding="async"
                        className="dp-phone-scroll"
                        style={{ animationDuration: `${durDesktop}s` }}
                    />
                    {/* Курсор мышки, «листающий» страницу */}
                    <span className="dp-cursor" style={{ animationDuration: `${durDesktop}s` }} aria-hidden="true">
                        <svg width="26" height="26" viewBox="0 0 24 24" fill="#fff" stroke="#111" strokeWidth="1.4" strokeLinejoin="round">
                            <path d="M5 3l6.5 16 2.2-6.4 6.3-2.2L5 3z" />
                        </svg>
                    </span>
                </div>
            </div>

            {/* Телефон с мобильной версией, тоже в прокрутке */}
            {mobile && (
                <div className="hidden sm:block absolute -bottom-4 right-1 md:right-3 w-[124px] md:w-[158px]">
                    <div className="dp-iphone">
                        <div className="dp-iphone__island" />
                        <div className="dp-iphone__screen">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={mobile}
                                alt={`${title} — сайт, мобильная версия`}
                                loading="lazy"
                                decoding="async"
                                className="dp-phone-scroll"
                                style={{ animationDuration: `${durMobile}s` }}
                            />
                        </div>
                    </div>
                </div>
            )}

            {/* Мобильная версия страницы: телефон отдельным блоком под браузером */}
            {mobile && (
                <div className="sm:hidden mt-8 mx-auto w-[190px]">
                    <div className="dp-iphone">
                        <div className="dp-iphone__island" />
                        <div className="dp-iphone__screen">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={mobile}
                                alt={`${title} — сайт, мобильная версия`}
                                loading="lazy"
                                decoding="async"
                                className="dp-phone-scroll"
                                style={{ animationDuration: `${durMobile}s` }}
                            />
                        </div>
                    </div>
                </div>
            )}

            {url && (
                <div className="mt-10 sm:mt-8 text-center">
                    <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className="inline-flex items-center gap-2 rounded-full bg-black text-white font-bold text-sm px-6 py-3 hover:scale-105 transition-transform"
                    >
                        Открыть живой сайт
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M7 17L17 7M8 7h9v9" /></svg>
                    </a>
                </div>
            )}
        </div>
    );
}
