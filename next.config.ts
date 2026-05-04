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
      // Short-form clean URLs
      { source: '/smm', destination: '/smm-almaty', permanent: true },
      { source: '/seo', destination: '/seo-almaty', permanent: true },
      { source: '/context', destination: '/kontekstnaya-reklama-almaty', permanent: true },
      { source: '/branding', destination: '/marketing-almaty', permanent: true },
      { source: '/site', destination: '/sozdanie-sajtov-almaty', permanent: true },
      { source: '/serm', destination: '/upravlenie-reputaciej-almaty', permanent: true },
      { source: '/case', destination: '/cases', permanent: true },
      { source: '/case/:slug', destination: '/cases/:slug', permanent: true },
      { source: '/contact', destination: '/contacts', permanent: true },
      { source: '/bitrix24', destination: '/services', permanent: true },

      // Legacy .html URLs from the previous site — redirect to clean URLs to preserve link equity
      { source: '/index.html', destination: '/', permanent: true },
      { source: '/contact.html', destination: '/contacts', permanent: true },
      { source: '/contacts.html', destination: '/contacts', permanent: true },
      { source: '/school.html', destination: '/school', permanent: true },
      { source: '/case.html', destination: '/cases', permanent: true },
      { source: '/cases.html', destination: '/cases', permanent: true },
      { source: '/services.html', destination: '/services', permanent: true },
      { source: '/smm.html', destination: '/smm-almaty', permanent: true },
      { source: '/seo.html', destination: '/seo-almaty', permanent: true },
      { source: '/site.html', destination: '/sozdanie-sajtov-almaty', permanent: true },
      { source: '/serm.html', destination: '/upravlenie-reputaciej-almaty', permanent: true },
      { source: '/branding.html', destination: '/marketing-almaty', permanent: true },
      { source: '/context.html', destination: '/kontekstnaya-reklama-almaty', permanent: true },
      { source: '/bitrix24.html', destination: '/services', permanent: true },
      { source: '/prices.html', destination: '/pricing', permanent: true },
      { source: '/privacy.html', destination: '/privacy', permanent: true },
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
      {
        source: '/sitemap.xml',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=3600, s-maxage=86400' }],
      },
      {
        source: '/sitemap-images.xml',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=3600, s-maxage=86400' }],
      },
      {
        source: '/robots.txt',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=3600, s-maxage=86400' }],
      },
    ];
  },
};

export default nextConfig;
