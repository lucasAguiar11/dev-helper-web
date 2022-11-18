/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    PAYPAL_DONATE: process.env.PAYPAL_DONATE,
    NEXT_PUBLIC_GA_ID: process.env.NEXT_PUBLIC_GA_ID,
    NEXT_PUBLIC_ADSENSE_CLIENT_ID: process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID,
    BASE_URL: process.env.BASE_URL,
  },
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
