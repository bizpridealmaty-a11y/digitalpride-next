import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import RawFooter from '@/components/layout/RawFooter';
import Breadcrumbs from '@/components/Breadcrumbs';
import CTA from '@/components/home/CTA';
import { getAllPosts, getPostBySlug, AUTHOR_PROFILE, type BlogPost } from '@/lib/blog';
import BlogEnhancer from './BlogEnhancer';
import BlogToc from './BlogToc';
import BlogCalculator from './BlogCalculator';

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
    return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = getPostBySlug(slug);
    if (!post) {
        return { title: 'Статья не найдена', robots: { index: false } };
    }
    return {
        title: post.title,
        description: post.description,
        alternates: { canonical: `/blog/${post.slug}` },
        openGraph: {
            title: post.title,
            description: post.description,
            url: `/blog/${post.slug}`,
            type: 'article',
            publishedTime: post.publishedAt,
            modifiedTime: post.updatedAt || post.publishedAt,
            authors: [post.author],
            tags: post.tags,
        },
    };
}

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params;
    const post = getPostBySlug(slug);
    if (!post) notFound();

    const articleJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: post.title,
        description: post.description,
        author: {
            '@type': 'Person',
            name: AUTHOR_PROFILE.name,
            jobTitle: AUTHOR_PROFILE.role,
            image: `https://digitalpride.kz${AUTHOR_PROFILE.photo}`,
            url: `https://digitalpride.kz${AUTHOR_PROFILE.url}`,
        },
        publisher: {
            '@type': 'Organization',
            name: 'Digital Pride',
            logo: { '@type': 'ImageObject', url: 'https://digitalpride.kz/fonts/new-logo.svg' },
        },
        datePublished: post.publishedAt,
        dateModified: post.updatedAt || post.publishedAt,
        mainEntityOfPage: { '@type': 'WebPage', '@id': `https://digitalpride.kz/blog/${post.slug}` },
        keywords: post.tags.join(', '),
    };

    // Контент — HTML-строка, React внутрь не вставить. Поэтому режем её по маркеру
    // <!--CALC--> и вставляем калькулятор между двумя половинами.
    const [contentBefore, contentAfter = ''] = post.content.split('<!--CALC-->');

    const faqJsonLd = post.faq && post.faq.length > 0 ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: post.faq.map((item) => ({
            '@type': 'Question',
            name: item.q,
            acceptedAnswer: { '@type': 'Answer', text: item.a },
        })),
    } : null;

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
            />
            {faqJsonLd && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
                />
            )}
            {/* Полоса прогресса чтения */}
            <div id="dp-progress" className="fixed top-0 left-0 h-[3px] w-0 z-[100]" style={{ background: 'linear-gradient(90deg,#f87171,#ef4444)', transition: 'width .1s linear' }} />
            <BlogEnhancer />

            <main className="bg-white min-h-screen">
                {/* HERO на всю ширину экрана */}
                <section className="relative flex items-end overflow-hidden bg-zinc-950 min-h-[62vh] md:min-h-[76vh]">
                    {post.coverImage && (
                        <>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={post.coverImage}
                                alt={post.title}
                                className="absolute inset-0 w-full h-full object-cover"
                                loading="eager"
                                fetchPriority="high"
                            />
                            <div
                                className="absolute inset-0"
                                style={{
                                    background:
                                        'linear-gradient(90deg,rgba(10,10,12,.94) 0%,rgba(10,10,12,.72) 45%,rgba(10,10,12,.25) 100%),linear-gradient(to top,rgba(10,10,12,.9),transparent 55%)',
                                }}
                            />
                        </>
                    )}
                    <div className="relative z-10 w-full max-w-[1400px] mx-auto px-5 md:px-10 pt-32 pb-10 md:pb-14">
                        <div className="mb-5">
                            <Breadcrumbs
                                items={[
                                    { name: 'Блог', item: '/blog' },
                                    { name: post.title, item: `/blog/${post.slug}` },
                                ]}
                            />
                        </div>
                        <span className="inline-flex items-center rounded-full border border-red-500/40 bg-red-500/15 px-3 py-1.5 text-[11.5px] font-extrabold uppercase tracking-widest text-red-300">
                            {post.category}
                        </span>
                        <h1
                            className="text-white font-black tracking-tight leading-[1.05] my-5 text-3xl md:text-5xl lg:text-6xl max-w-[20ch]"
                            style={{ fontFamily: "'Unbounded', sans-serif" }}
                        >
                            {post.title}
                        </h1>
                        <p className="text-white/75 text-base md:text-lg max-w-[62ch] mb-7">{post.description}</p>
                        <div className="flex items-center gap-3.5 flex-wrap text-[13px] text-white/60">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={AUTHOR_PROFILE.photo}
                                alt={`${AUTHOR_PROFILE.name} — ${AUTHOR_PROFILE.role}`}
                                className="w-11 h-11 rounded-full object-cover object-top border-2 border-white/25"
                                loading="eager"
                            />
                            <div className="leading-tight">
                                <Link href={AUTHOR_PROFILE.url} className="block text-white text-sm font-bold hover:text-red-400 transition-colors">
                                    {AUTHOR_PROFILE.name}
                                </Link>
                                <span>{AUTHOR_PROFILE.role}</span>
                            </div>
                            <span className="w-[3px] h-[3px] rounded-full bg-white/40" />
                            <span>{post.readingTime} мин чтения</span>
                            <span className="w-[3px] h-[3px] rounded-full bg-white/40" />
                            <span>
                                {new Date(post.publishedAt).toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' })}
                            </span>
                        </div>
                    </div>
                </section>

                {/* ШИРОКАЯ раскладка: контент + липкое оглавление */}
                <div className="max-w-[1400px] mx-auto px-5 md:px-10">
                    <div className="grid lg:grid-cols-[minmax(0,1fr)_300px] gap-0 lg:gap-16 pt-12 pb-20">
                        <article className="min-w-0">
                            <div
                                className="dp-blog-article max-w-none text-gray-700"
                                dangerouslySetInnerHTML={{ __html: contentBefore }}
                            />

                            {post.calculator && <BlogCalculator config={post.calculator} />}

                            {contentAfter && (
                                <div
                                    className="dp-blog-article max-w-none text-gray-700"
                                    dangerouslySetInnerHTML={{ __html: contentAfter }}
                                />
                            )}

                    <style dangerouslySetInnerHTML={{
                        __html: `
                            /* Страница широкая, но строка текста — читаемой длины.
                               Ширину экрана забирают обложка, фото, графики и оглавление. */
                            .dp-blog-article { font-size: 17px; line-height: 1.75; }
                            .dp-blog-article p, .dp-blog-article ul, .dp-blog-article ol { max-width: 74ch; }

                            /* ===== Крупные изображения между блоками ===== */
                            .dp-blog-article figure { margin: 40px 0; }
                            .dp-blog-article figure img { width: 100%; border-radius: 18px; object-fit: cover; aspect-ratio: 16 / 8; display: block; }
                            .dp-blog-article figcaption { font-size: 13px; color: #71717a; margin-top: 10px; }
                            /* На всю ширину экрана */
                            .dp-blog-article figure.dp-bleed { margin-left: calc(-50vw + 50%); margin-right: calc(-50vw + 50%); width: 100vw; max-width: 100vw; }
                            .dp-blog-article figure.dp-bleed img { border-radius: 0; aspect-ratio: 21 / 8; }
                            .dp-blog-article figure.dp-bleed figcaption { max-width: 1400px; margin-left: auto; margin-right: auto; padding: 0 40px; }
                            @media (max-width: 1080px) {
                                .dp-blog-article figure.dp-bleed { margin-left: -20px; margin-right: -20px; width: calc(100% + 40px); }
                                .dp-blog-article figure.dp-bleed img { aspect-ratio: 16 / 9; }
                                .dp-blog-article figure.dp-bleed figcaption { padding: 0 20px; }
                            }

                            /* ===== Появление при скролле (навешивает BlogEnhancer) ===== */
                            .dp-blog-article .dp-rev { opacity: 0; transform: translateY(26px); transition: opacity .7s ease, transform .7s cubic-bezier(.22,1,.36,1); }
                            .dp-blog-article .dp-rev.dp-in { opacity: 1; transform: none; }
                            @media (prefers-reduced-motion: reduce) {
                                .dp-blog-article .dp-rev { opacity: 1; transform: none; transition: none; }
                                .dp-range-fill, .dp-bar-fill { transition: none !important; }
                            }
                            .dp-blog-article h2 { font-family: 'Unbounded', sans-serif; font-size: 28px; font-weight: 800; color: #000; margin-top: 48px; margin-bottom: 16px; line-height: 1.25; letter-spacing: -0.5px; }
                            .dp-blog-article h3 { font-family: 'Unbounded', sans-serif; font-size: 21px; font-weight: 700; color: #111; margin-top: 32px; margin-bottom: 12px; line-height: 1.3; }
                            .dp-blog-article p { margin-bottom: 18px; }
                            .dp-blog-article ul, .dp-blog-article ol { margin: 18px 0; padding-left: 24px; }
                            .dp-blog-article li { margin-bottom: 8px; }
                            .dp-blog-article ul li { list-style: disc; }
                            .dp-blog-article ol li { list-style: decimal; }
                            .dp-blog-article strong { color: #000; font-weight: 700; }
                            .dp-blog-article a { color: #ef4444; text-decoration: underline; }
                            .dp-blog-article a:hover { color: #b91c1c; }
                            .dp-blog-article table { width: 100%; border-collapse: collapse; margin: 24px 0; font-size: 14px; }
                            .dp-blog-article th { background: #f4f4f5; padding: 12px; text-align: left; font-weight: 700; color: #000; border-bottom: 2px solid #e4e4e7; }
                            .dp-blog-article td { padding: 12px; border-bottom: 1px solid #e4e4e7; }
                            .dp-blog-article blockquote { border-left: 4px solid #ef4444; padding: 8px 20px; margin: 24px 0; background: #fef2f2; font-style: italic; }

                            /* ===== Data-viz blocks ===== */
                            .dp-viz { margin: 32px 0; padding: 24px; border: 1px solid #ececf0; border-radius: 16px; background: #fafafa; }
                            .dp-viz-title { font-family: 'Unbounded', sans-serif; font-size: 15px; font-weight: 700; color: #111; margin: 0 0 4px; }
                            .dp-viz-sub { font-size: 13px; color: #71717a; margin: 0 0 18px; }
                            .dp-range-row { display: grid; grid-template-columns: 96px 1fr auto; align-items: center; gap: 12px; margin: 11px 0; }
                            .dp-range-label { font-size: 13.5px; font-weight: 600; color: #27272a; }
                            .dp-range-track { position: relative; height: 12px; background: #ececf0; border-radius: 6px; overflow: hidden; }
                            .dp-range-fill { position: absolute; top: 0; height: 12px; border-radius: 6px; background: linear-gradient(90deg, #f87171, #ef4444); transition: width 1s cubic-bezier(.22,1,.36,1); }
                            .dp-range-val { font-size: 12.5px; font-weight: 700; color: #ef4444; font-variant-numeric: tabular-nums; white-space: nowrap; }
                            .dp-axis { display: flex; justify-content: space-between; margin: 8px 0 0 108px; font-size: 11px; color: #a1a1aa; }
                            .dp-note { font-size: 12px; color: #a1a1aa; margin: 10px 0 0; }
                            .dp-statrow { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin: 28px 0; }
                            .dp-stat { border: 1px solid #ececf0; border-radius: 14px; padding: 18px 16px; background: #fff; text-align: center; }
                            .dp-stat-num { font-family: 'Unbounded', sans-serif; font-size: 23px; font-weight: 800; color: #ef4444; line-height: 1; }
                            .dp-stat-cap { font-size: 12.5px; color: #52525b; margin-top: 8px; line-height: 1.4; }
                            .dp-bars { display: grid; gap: 10px; }
                            .dp-bar-row { display: grid; grid-template-columns: 120px 1fr auto; align-items: center; gap: 12px; }
                            .dp-bar-label { font-size: 13.5px; font-weight: 600; color: #27272a; }
                            .dp-bar-track { height: 22px; background: #ececf0; border-radius: 6px; overflow: hidden; }
                            .dp-bar-fill { height: 22px; border-radius: 6px; background: linear-gradient(90deg, #f87171, #ef4444); transition: width 1s cubic-bezier(.22,1,.36,1); }
                            .dp-bar-fill.muted { background: #d4d4d8; }
                            .dp-bar-val { font-size: 12.5px; font-weight: 700; color: #27272a; font-variant-numeric: tabular-nums; white-space: nowrap; }
                            @media (max-width: 560px) {
                                .dp-statrow { grid-template-columns: 1fr; }
                                .dp-range-row { grid-template-columns: 74px 1fr auto; gap: 8px; }
                                .dp-axis { margin-left: 82px; }
                                .dp-bar-row { grid-template-columns: 92px 1fr auto; gap: 8px; }
                            }
                        `,
                    }} />

                    {/* FAQ статьи (+ разметка FAQPage выше) */}
                    {post.faq && post.faq.length > 0 && (
                        <section className="mt-14">
                            <h2 className="text-2xl font-extrabold text-black mb-6" style={{ fontFamily: "'Unbounded', sans-serif" }}>
                                Частые вопросы
                            </h2>
                            <div className="space-y-3">
                                {post.faq.map((item, i) => (
                                    <details key={i} className="group rounded-xl border border-gray-200 bg-white p-5 open:bg-red-50/30 open:border-red-200">
                                        <summary className="flex cursor-pointer items-center justify-between gap-4 font-bold text-black list-none">
                                            {item.q}
                                            <span className="text-red-500 text-xl leading-none transition-transform group-open:rotate-45">+</span>
                                        </summary>
                                        <p className="mt-3 text-gray-600 leading-relaxed">{item.a}</p>
                                    </details>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Карточка автора — доверие к материалу (E-E-A-T) */}
                    <aside className="mt-14 p-6 rounded-2xl border border-gray-200 bg-zinc-50 flex flex-col sm:flex-row gap-5">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src={AUTHOR_PROFILE.photo}
                            alt={`${AUTHOR_PROFILE.name} — ${AUTHOR_PROFILE.role}`}
                            className="w-20 h-20 rounded-full object-cover object-top bg-zinc-200 flex-shrink-0"
                            loading="lazy"
                        />
                        <div>
                            <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Автор</div>
                            <Link href={AUTHOR_PROFILE.url} className="text-lg font-bold text-black hover:text-red-600 transition-colors">
                                {AUTHOR_PROFILE.name}
                            </Link>
                            <div className="text-sm text-red-600 font-medium mb-3">{AUTHOR_PROFILE.role}</div>
                            <p className="text-sm text-gray-600 leading-relaxed">{AUTHOR_PROFILE.bio}</p>
                        </div>
                    </aside>

                    {/* Related Articles */}
                    {(() => {
                        const related = getAllPosts()
                            .filter((p: BlogPost) => p.slug !== post.slug)
                            .filter((p: BlogPost) => p.category === post.category || p.tags.some((t: string) => post.tags.includes(t)))
                            .slice(0, 3);
                        return related.length > 0 ? (
                            <div className="mt-12">
                                <h2 className="text-2xl font-extrabold text-black mb-6" style={{ fontFamily: "'Unbounded', sans-serif" }}>Читайте также</h2>
                                <div className="grid gap-4">
                                    {related.map((r: BlogPost) => (
                                        <Link key={r.slug} href={`/blog/${r.slug}/`} className="group block p-5 rounded-xl border border-gray-100 hover:border-red-200 hover:bg-red-50/30 transition-colors">
                                            <span className="text-xs font-bold text-red-600 uppercase tracking-wider">{r.category}</span>
                                            <p className="mt-1 text-lg font-bold text-black group-hover:text-red-600 transition-colors">{r.title}</p>
                                            <p className="mt-1 text-sm text-gray-500">{r.readingTime} мин чтения</p>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        ) : null;
                    })()}

                    {/* Related Service */}
                    {(() => {
                        const categoryToService: Record<string, { href: string; label: string }> = {
                            'SMM': { href: '/smm-almaty/', label: 'SMM продвижение в Алматы' },
                            'Таргет': { href: '/target-almaty/', label: 'Таргетированная реклама в Алматы' },
                            'SEO': { href: '/seo-almaty/', label: 'SEO продвижение в Алматы' },
                            'Сайты': { href: '/sozdanie-sajtov-almaty/', label: 'Создание сайтов в Алматы' },
                            'Контекст': { href: '/kontekstnaya-reklama-almaty/', label: 'Контекстная реклама в Алматы' },
                            'Стратегия': { href: '/marketing-almaty/', label: 'Маркетинговая стратегия в Алматы' },
                            'Бренд': { href: '/firmennyj-stil-almaty/', label: 'Фирменный стиль в Алматы' },
                        };
                        const service = categoryToService[post.category];
                        return service ? (
                            <div className="mt-12 p-6 bg-zinc-50 rounded-2xl border border-gray-100">
                                <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-3">Услуга по теме</p>
                                <Link href={service.href} className="text-lg font-bold text-red-600 hover:text-red-700 hover:underline">
                                    {service.label} →
                                </Link>
                            </div>
                        ) : null;
                    })()}

                    <div className="mt-16 pt-8 border-t border-gray-200">
                        <div className="flex flex-wrap gap-2 mb-8">
                            {post.tags.map((t) => (
                                <span key={t} className="px-3 py-1 text-xs rounded-full bg-gray-100 text-gray-700">
                                    #{t}
                                </span>
                            ))}
                        </div>
                        <Link
                            href="/blog/"
                            className="inline-flex items-center gap-2 text-red-600 font-bold hover:underline"
                        >
                            ← Все статьи
                        </Link>
                    </div>
                        </article>

                        {/* Липкое оглавление + мягкий CTA. Строится само из <h2> статьи. */}
                        <aside className="hidden lg:block">
                            <div className="sticky top-24 grid gap-4">
                                <BlogToc />
                                <div className="rounded-2xl p-5 text-white" style={{ background: 'linear-gradient(160deg,#17161c,#2a1618)' }}>
                                    <b className="block text-[15px] font-extrabold mb-1.5" style={{ fontFamily: "'Unbounded', sans-serif" }}>
                                        Разберём ваш случай
                                    </b>
                                    <p className="text-white/60 text-[12.5px] mb-3.5">
                                        Бесплатно посмотрим ваш проект и честно скажем, что делать.
                                    </p>
                                    <Link
                                        href="/contacts/"
                                        className="block text-center bg-red-500 hover:bg-red-600 transition-colors text-white font-bold text-[13.5px] py-2.5 rounded-lg"
                                    >
                                        Обсудить проект
                                    </Link>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>

                <div className="mt-4">
                    <CTA />
                </div>
            </main>
            <RawFooter />
        </>
    );
}
