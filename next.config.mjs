/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'cdn.vgn.cn',
        port: '',
      },
    ],
  },
}

export default nextConfig
