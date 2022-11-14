/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    PAYPAL_DONATE: process.env.PAYPAL_DONATE,
  },
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
