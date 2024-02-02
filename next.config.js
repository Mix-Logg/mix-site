/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['tsx', 'js'], 
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com'
      },{
        protocol: 'https',
        hostname: 'cdn.discordapp.com'
      },{
        protocol: 'https',
        hostname: 'via.placeholder.com'
      },{
        protocol: 'https',
        hostname: 'cdn.shopify.com'
      },
      
    ],
  },
}

module.exports = nextConfig
