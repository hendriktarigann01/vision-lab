import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
import withBundleAnalyzer from "@next/bundle-analyzer";

const withNextIntl = createNextIntlPlugin();
const isProd = process.env.NODE_ENV === "production";
const isAnalyze = process.env.ANALYZE === "true";

const withAnalyzer = withBundleAnalyzer({
  enabled: isAnalyze,
  openAnalyzer: true,
});

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: isProd ? 31536000 : 60,
    unoptimized: !isProd,
  },

  compiler: {
    removeConsole: isProd ? { exclude: ["error", "warn"] } : false,
  },

  webpack: (config, { isServer }) => {
    if (isServer) {
      config.resolve.alias = {
        ...config.resolve.alias,
        canvas: false,
        encoding: false,
      };
    }
    return config;
  },

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

  compress: true,
  productionBrowserSourceMaps: false,
  trailingSlash: false,
  poweredByHeader: false,

  typescript: { ignoreBuildErrors: false },
};

export default withAnalyzer(withNextIntl(nextConfig));
