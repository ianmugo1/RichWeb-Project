/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'banner2.cleanpng.com', // Krispy Kreme logo source
      },
      {
        protocol: 'https',
        hostname: 'www.krispykreme.ie', // Krispy Kreme Ireland hero banner source
      },
    ],
  },
  env: {
  },
};

module.exports = nextConfig;