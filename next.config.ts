import type { NextConfig } from "next";

const securityHeaders = [
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
  { key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains; preload' },
];

const nextConfig: NextConfig = {
  trailingSlash: true,
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    return [
      // Short-form clean URLs → final destination (both with and without slash to avoid chains)
      { source: '/smm', destination: '/smm-almaty/', permanent: true },
      { source: '/smm/', destination: '/smm-almaty/', permanent: true },
      { source: '/seo', destination: '/seo-almaty/', permanent: true },
      { source: '/seo/', destination: '/seo-almaty/', permanent: true },
      { source: '/context', destination: '/kontekstnaya-reklama-almaty/', permanent: true },
      { source: '/context/', destination: '/kontekstnaya-reklama-almaty/', permanent: true },
      { source: '/branding', destination: '/marketing-almaty/', permanent: true },
      { source: '/branding/', destination: '/marketing-almaty/', permanent: true },
      { source: '/site', destination: '/sozdanie-sajtov-almaty/', permanent: true },
      { source: '/site/', destination: '/sozdanie-sajtov-almaty/', permanent: true },
      { source: '/serm', destination: '/upravlenie-reputaciej-almaty/', permanent: true },
      { source: '/serm/', destination: '/upravlenie-reputaciej-almaty/', permanent: true },
      { source: '/case', destination: '/cases/', permanent: true },
      { source: '/case/', destination: '/cases/', permanent: true },
      { source: '/case/:slug', destination: '/cases/:slug/', permanent: true },
      { source: '/contact', destination: '/contacts/', permanent: true },
      { source: '/contact/', destination: '/contacts/', permanent: true },
      { source: '/bitrix24', destination: '/services/', permanent: true },
      { source: '/bitrix24/', destination: '/services/', permanent: true },
      { source: '/about', destination: '/o-nas/', permanent: true },
      { source: '/about/', destination: '/o-nas/', permanent: true },
      { source: '/about-us', destination: '/o-nas/', permanent: true },
      { source: '/about-us/', destination: '/o-nas/', permanent: true },

      // Legacy .html URLs → final destination WITH trailing slash
      { source: '/index.html', destination: '/', permanent: true },
      { source: '/contact.html', destination: '/contacts/', permanent: true },
      { source: '/contacts.html', destination: '/contacts/', permanent: true },
      { source: '/school.html', destination: '/school/', permanent: true },
      { source: '/case.html', destination: '/cases/', permanent: true },
      { source: '/cases.html', destination: '/cases/', permanent: true },
      { source: '/services.html', destination: '/services/', permanent: true },
      { source: '/smm.html', destination: '/smm-almaty/', permanent: true },
      { source: '/seo.html', destination: '/seo-almaty/', permanent: true },
      { source: '/site.html', destination: '/sozdanie-sajtov-almaty/', permanent: true },
      { source: '/serm.html', destination: '/upravlenie-reputaciej-almaty/', permanent: true },
      { source: '/branding.html', destination: '/marketing-almaty/', permanent: true },
      { source: '/context.html', destination: '/kontekstnaya-reklama-almaty/', permanent: true },
      { source: '/bitrix24.html', destination: '/services/', permanent: true },
      { source: '/prices.html', destination: '/pricing/', permanent: true },
      { source: '/privacy.html', destination: '/privacy/', permanent: true },
      { source: '/blog.html', destination: '/blog/', permanent: true },
      { source: '/about.html', destination: '/o-nas/', permanent: true },
      { source: '/kursy-smm.html', destination: '/school/', permanent: true },
      { source: '/kurs-kontekstnaya-reklama.html', destination: '/school/', permanent: true },
      { source: '/perfomans-marketing.html', destination: '/perfomans-marketing/', permanent: true },
      { source: '/7-filmov-o-reklame-i-marketinge.html', destination: '/blog/', permanent: true },
      { source: '/tipyi-frilanserov.html', destination: '/blog/', permanent: true },
      { source: '/chek-list-menedzhera-soczialnyix-setej.html', destination: '/blog/', permanent: true },

      // Old blog/school URLs that return 404 → redirect to nearest relevant page
      { source: '/blog/kak-uvelichit-prodazhi', destination: '/blog/', permanent: true },
      { source: '/blog/smm-strategy', destination: '/blog/', permanent: true },
      { source: '/blog/targeting-instagram', destination: '/blog/', permanent: true },
      { source: '/blog/seo-prodvizhenie', destination: '/blog/', permanent: true },
      { source: '/blog/kontekstnaya-reklama', destination: '/blog/', permanent: true },
      { source: '/blog/digital-marketing-trends', destination: '/blog/', permanent: true },
      { source: '/blog/kak-vybrat-agentstvo', destination: '/blog/', permanent: true },
      { source: '/blog/prodvizhenie-v-instagram', destination: '/blog/', permanent: true },
      { source: '/blog/reklama-v-google', destination: '/blog/', permanent: true },
      { source: '/blog/smm-dlya-biznesa', destination: '/blog/', permanent: true },
      { source: '/school/digital-marketing', destination: '/school/', permanent: true },
      { source: '/school/smm-course', destination: '/school/', permanent: true },
      { source: '/school/targeting-course', destination: '/school/', permanent: true },
      { source: '/pricing/enterprise', destination: '/pricing/', permanent: true },
    ];
  },
  async headers() {
    return [
      { source: '/:path*', headers: securityHeaders },
      {
        source: '/fonts/:path*',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
      {
        source: '/images/:path*',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
      {
        source: '/css/:path*',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
      {
        source: '/videos/:path*',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
      // ВАЖНО: sitemap/robots держим на коротком кэше.
      // Было s-maxage=86400 — CDN отдавал устаревший sitemap до суток и НЕ сбрасывался
      // при деплое: новая статья появлялась на сайте, но не в sitemap. Для блога с регулярными
      // публикациями это откладывало индексацию на ровном месте. Файлы крошечные, экономить нечего.
      {
        source: '/sitemap.xml',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=300, s-maxage=300, stale-while-revalidate=600' }],
      },
      {
        source: '/sitemap-index.xml',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=300, s-maxage=300, stale-while-revalidate=600' }],
      },
      {
        source: '/sitemap-images.xml',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=300, s-maxage=300, stale-while-revalidate=600' }],
      },
      {
        source: '/robots.txt',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=300, s-maxage=300, stale-while-revalidate=600' }],
      },
    ];
  },
};

export default nextConfig;
