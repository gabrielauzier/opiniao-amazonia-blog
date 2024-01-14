/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'images.pexels.com',
      'cloudflare-ipfs.com',
      'avatars.githubusercontent.com',
      'github.com',
      'images.prismic.io',
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig
