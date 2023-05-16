/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  assetPrefix: isProd ? '/StratRandomizer/' : '',
  experimental: {
    appDir: true,
  }
};


module.exports = nextConfig;
