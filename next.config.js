/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  assetPrefix: isProd ? '/StratRandomizer/' : '',
  experimental: {
    appDir: true,
  },
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/randomizer': { page: '/randomizer' },
    };
  },
};


module.exports = nextConfig;
