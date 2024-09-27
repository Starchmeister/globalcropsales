// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Specify the external domains that Next.js is allowed to optimize images from
    domains: ["ik.imagekit.io"],
  },
};

export default nextConfig;
