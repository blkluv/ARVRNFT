/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["a0.muscache.com", "a1.muscache.com", "a2.muscache.com", "https://muscache.com" ],
    minimumCacheTTL: 1200,
    unoptimized: true,
  },
  swcMinify: true,
}

module.exports = nextConfig
