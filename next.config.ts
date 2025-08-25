import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    eslint: {
    // ✅ Disable ESLint check during builds
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
