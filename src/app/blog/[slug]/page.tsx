import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import RawFooter from '../../../components/layout/RawFooter';
import Breadcrumbs from '../../../components/Breadcrumbs';
import CTA from '../../../components/home/CTA';
import { getAllPosts, getPostBySlug, type BlogPost } from '@/lib/blog';

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
        author: { '@type': 'Person', name: 'Дмитрий Тимошевский', url: 'https://digitalpride.kz/o-nas' },
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

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
            />
            <main className="bg-white pt-32 pb-24 min-h-screen">
                <article className="container mx-auto px-4 max-w-3xl">
                    <Breadcrumbs items={[
                        { name: 'Блог', item: '/blog' },
                        { name: post.title, item: `/blog/${post.slug}` },
                    ]} />

                    <header className="mb-10">
                        <div className="flex items-center gap-3 mb-4 text-xs">
                            <span className="px-3 py-1 rounded-full bg-red-100 text-red-600 font-bold uppercase tracking-wider">
                                {post.category}
                            </span>
                            <span className="text-gray-500">{post.readingTime} мин чтения</span>
                            <span className="text-gray-500">·</span>
                            <span className="text-gray-500">
                                {new Date(post.publishedAt).toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' })}
                            </span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-black mb-6 leading-tight tracking-tight" style={{ fontFamily: "'Unbounded', sans-serif" }}>
                            {post.title}
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed font-medium">
                            {post.description}
                        </p>
                    </header>

                    <div
                        className="dp-blog-article max-w-none text-gray-700"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />

                    <style dangerouslySetInnerHTML={{
                        __html: `
                            .dp-blog-article { font-size: 17px; line-height: 1.75; }
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
                        `,
                    }} />

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

                <div className="mt-20">
                    <CTA />
                </div>
            </main>
            <RawFooter />
        </>
    );
}
