/** @type {import('next').NextConfig} */

const pathPrefix = process.env.NODE_ENV === 'production' ? '/StratRandomizer' : '';

const nextConfig = {
  images: { unoptimized: true },
  experimental: {
    appDir: true,
  },
  output: 'export',
  assetPrefix: pathPrefix,
  env: {
    pathPrefix,
  },
};


module.exports = nextConfig;
