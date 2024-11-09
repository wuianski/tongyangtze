
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'dev.tongyangtze.com',
    ],
    minimumCacheTTL: 60,
  },
  reactStrictMode: true,
  // webpack(config) {
  //   config.module.rules.push({
  //     test: /\.svg$/,
  //     use: ['@svgr/webpack'],
  //   });
  //   return config;
  // },
}

module.exports = (nextConfig);
