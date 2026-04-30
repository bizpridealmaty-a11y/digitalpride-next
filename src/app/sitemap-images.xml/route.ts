import { NextResponse } from 'next/server';
import { casesData } from '@/data/cases';

export const dynamic = 'force-static';

const baseUrl = 'https://digitalpride.kz';

function escapeXml(s: string): string {
    return s
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&apos;');
}

export async function GET() {
    type Entry = { loc: string; images: { url: string; title: string; caption?: string }[] };

    const entries: Entry[] = [];

    // Главная — общий брендовый набор (логотип + хиро-фото)
    entries.push({
        loc: `${baseUrl}/`,
        images: [
            { url: `${baseUrl}/fonts/new-logo.svg`, title: 'Digital Pride — логотип' },
            { url: `${baseUrl}/images/founder-portrait.webp`, title: 'Основатель Digital Pride' },
        ],
    });

    // Кейсы
    for (const c of casesData) {
        const imgs: { url: string; title: string; caption?: string }[] = [];
        if (c.coverImage) {
            imgs.push({
                url: c.coverImage.startsWith('http') ? c.coverImage : `${baseUrl}${c.coverImage}`,
                title: c.title,
                caption: `Кейс ${c.client} — ${c.categories.join(', ')}`,
            });
        }
        if (imgs.length > 0) {
            entries.push({ loc: `${baseUrl}/cases/${c.slug}`, images: imgs });
        }
    }

    const urlEntries = entries.map((e) => {
        const imageBlocks = e.images
            .map(
                (img) => `    <image:image>
      <image:loc>${escapeXml(img.url)}</image:loc>
      <image:title>${escapeXml(img.title)}</image:title>${img.caption ? `\n      <image:caption>${escapeXml(img.caption)}</image:caption>` : ''}
    </image:image>`,
            )
            .join('\n');
        return `  <url>
    <loc>${escapeXml(e.loc)}</loc>
${imageBlocks}
  </url>`;
    }).join('\n');

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urlEntries}
</urlset>
`;

    return new NextResponse(xml, {
        headers: {
            'Content-Type': 'application/xml; charset=utf-8',
            'Cache-Control': 'public, max-age=3600, s-maxage=86400',
        },
    });
}
