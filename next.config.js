/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.akamai.steamstatic.com", "cdn.cloudflare.steamstatic.com"],
  },
};

module.exports = nextConfig;
