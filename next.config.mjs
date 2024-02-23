/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack5: true,
  webpack: (config) => {
    config.cache = false;
    return config;
  },
};

export default nextConfig;
