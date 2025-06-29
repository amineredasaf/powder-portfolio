/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      unoptimized: true,
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'i.scdn.co',
          pathname: '/image/**',
        },
      ],
    },
  };
  
  module.exports = nextConfig;