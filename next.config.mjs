// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: { unoptimized: true } // necessary if you're using next/image
  }
  
  module.exports = nextConfig
  