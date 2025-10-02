import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static export for Netlify deployment
  output: 'export',
  
  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },
  
  // Trailing slash for better compatibility with static hosting
  trailingSlash: true,
  
  // Disable server-side features for static export
  experimental: {
    // Enable if you need these features
  },
  
  // Disable automatic error pages for static export
  generateBuildId: async () => {
    return 'build-' + Date.now()
  },
  
  // Asset prefix for CDN (optional)
  // assetPrefix: process.env.NODE_ENV === 'production' ? 'https://your-cdn-domain.com' : '',
  
  // Base path if deploying to subdirectory (optional)
  // basePath: '/portfolio',
};

export default nextConfig;
