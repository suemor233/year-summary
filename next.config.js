/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental:{appDir: true},
  images:{
    domains: ['y.suemor.com'],
  }
}

module.exports = nextConfig
