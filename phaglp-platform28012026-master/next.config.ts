import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Disable ESLint during builds since it's handled by CI/CD
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Optionally disable TypeScript checks during builds too
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;

