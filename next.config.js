/** @type {import('next').NextConfig} */

const nextConfig = {
  // experimental: {
  //   legacyBrowsers: true
  // },
  images: {
    domains: [
      'source.unsplash.com',
      'images.unsplash.com',
      'plus.unsplash.com',
      'flowbite.s3.amazonaws.com',
      'img.youtube.com'
    ],
    loader: 'default'
  },
  // async rewrites() {
  //   return [
  //     {
  //       source: '/',
  //       destination: 'https://risenvn.space/api/'
  //     }
  //   ]
  // },
  output: 'standalone'
}

// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//   enabled: process.env.ANALYZE === 'true'
// })

module.exports = nextConfig
