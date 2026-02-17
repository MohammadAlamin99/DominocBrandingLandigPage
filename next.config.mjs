/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    qualities: [100, 75], // Fix image quality warning
  },
  devIndicators: false, // Top-level for Next.js 16
};

export default nextConfig;
