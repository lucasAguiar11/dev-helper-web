/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    PAYPAL_DONATE: process.env.PAYPAL_DONATE,
    GA_ID: process.env.GA_ID,
  },
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
