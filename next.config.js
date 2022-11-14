/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    PAYPAL_DONATE: process.env.PAYPAL_DONATE,
  },
}

module.exports = nextConfig
