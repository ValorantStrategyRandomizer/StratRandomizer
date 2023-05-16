/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  assetPrefix: isProd ? '/StratRandomizer/' : '',
  images: {
    unoptimized: true,
  },
  experimental: {
    appDir: true,
  }
};


module.exports = nextConfig;
