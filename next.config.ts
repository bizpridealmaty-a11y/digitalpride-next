import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  async redirects() {
    return [
      { source: '/smm', destination: '/smm-almaty', permanent: true },
      { source: '/seo', destination: '/seo-almaty', permanent: true },
      { source: '/context', destination: '/kontekstnaya-reklama-almaty', permanent: true },
      { source: '/branding', destination: '/marketing-almaty', permanent: true },
      { source: '/site', destination: '/sozdanie-sajtov-almaty', permanent: true },
      { source: '/serm', destination: '/upravlenie-reputaciej-almaty', permanent: true },
      { source: '/case', destination: '/cases', permanent: true },
      { source: '/case/:slug', destination: '/cases/:slug', permanent: true },
      { source: '/contact', destination: '/contacts', permanent: true },
      { source: '/services', destination: '/pricing', permanent: true },
    ];
  },
};

export default nextConfig;
