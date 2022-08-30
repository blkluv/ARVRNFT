/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["a0.muscache.com"],
    minimumCacheTTL: 1200,
  },
  swcMinify: true,
}

module.exports = nextConfig
