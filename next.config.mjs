/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["image.tmdb.org", "placehold.co"],
  },
  experimental: {
    appDir: true,
  },
}

export default nextConfig
