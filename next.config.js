/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // ⚠️ Warning: Allows production builds even with ESLint errors
    ignoreDuringBuilds: true,
  },
  typescript: {
    // ⚠️ Warning: Allows production builds even with type errors
    ignoreBuildErrors: true,
  },
  output: "export",
  productionBrowserSourceMaps: false,
  reactStrictMode: true,
};

module.exports = nextConfig;
