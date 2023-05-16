/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: ['images.unsplash.com'],
  },
  experimental: {
    appDir: true,
  },
  basePath: '',
};

module.exports = nextConfig;
