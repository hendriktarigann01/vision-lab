import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
import withBundleAnalyzer from "@next/bundle-analyzer";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

// Environment checks
const isDev = process.env.NODE_ENV === "development";
const isProd = process.env.NODE_ENV === "production";
const isAnalyze = process.env.ANALYZE === "true";

const withAnalyzer = withBundleAnalyzer({
  enabled: isAnalyze,
  openAnalyzer: true,
});

const nextConfig: NextConfig = {
  // External packages (tidak di-bundle)
  serverExternalPackages: ["@prisma/client", "bcryptjs"],

  // React Strict Mode - aktif di semua environment untuk catch bugs
  reactStrictMode: true,

  // Experimental features Next.js 15
  experimental: {
    // Turbopack untuk faster development (Next.js 15)
    turbo: isDev ? {} : undefined,
  },

  // Image optimization
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],

    // Minimize downloads di development
    minimumCacheTTL: isDev ? 60 : 31536000,

    // Disable image optimization di development untuk speed
    unoptimized: isDev,

    // Remote patterns untuk external images (sesuaikan domain Anda)
    remotePatterns: [
      // {
      //   protocol: "https",
      //   hostname: "example.com",
      // },
    ],
  },

  // Compiler options
  compiler: {
    // Remove console logs di production
    removeConsole: isProd
      ? {
          exclude: ["error", "warn"],
        }
      : false,

    // React remove properties (untuk production optimization)
    reactRemoveProperties: isProd,
  },

  // Webpack configuration
  webpack: (config, { isServer }) => {
    // Fix "self is not defined" error di server-side
    if (isServer) {
      config.resolve.alias = {
        ...config.resolve.alias,
        canvas: false,
        encoding: false,
      };
    }

    return config;
  },

  // Performance & Security headers
  async headers() {
    if (!isProd) return [];

    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-DNS-Prefetch-Control", value: "on" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
        ],
      },
    ];
  },

  // Redirects & Rewrites
  async redirects() {
    return [];
  },

  // Output
  compress: true,
  productionBrowserSourceMaps: false,
  trailingSlash: false,
  poweredByHeader: false,

  // TypeScript & ESLint
  typescript: { ignoreBuildErrors: false },
  eslint: { ignoreDuringBuilds: false },
};

export default withAnalyzer(withNextIntl(nextConfig));
