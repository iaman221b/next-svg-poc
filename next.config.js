/** @type {import('next').NextConfig} */
/* eslint-disable */
const path = require('path')
const NextImages = require('next-images')

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: ['dev-next.msme.jswone.in', 'images.ctfassets.net', 'th.bing.com'],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
  eslint: {
    dirs: [
      'pages',
      'components',
      'lib',
      'core',
      'modules',
      'shared',
      'utility',
    ],
  },

  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig
