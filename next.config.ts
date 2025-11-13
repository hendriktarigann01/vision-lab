import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
import withBundleAnalyzer from "@next/bundle-analyzer";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const isAnalyze = process.env.npm_lifecycle_event === "analyze";

const withAnalyzer = withBundleAnalyzer({
  enabled: isAnalyze,
  openAnalyzer: true,
});

const nextConfig: NextConfig = {
  serverExternalPackages: ["@prisma/client", "bcryptjs"],
  reactStrictMode: true,

  images: {
    formats: ["image/avif", "image/webp"],
    // loader optimization
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Production optimization
  productionBrowserSourceMaps: false,

  // Experimental features untuk performance
  experimental: {
    // Optimize CSS
    optimizeCss: true,
    // Optimize package imports
    optimizePackageImports: [
      "next-intl",
      "lucide-react",
      "@radix-ui/react-icons",
    ],
  },

  // Webpack optimization
  webpack: (config, { dev }) => {
    // Production optimizations
    if (!dev) {
      config.optimization = {
        ...config.optimization,
        // Split chunks lebih agresif
        splitChunks: {
          chunks: "all",
          cacheGroups: {
            default: false,
            vendors: false,
            // Framework chunk (react, react-dom, next)
            framework: {
              name: "framework",
              chunks: "all",
              test: /(?<!node_modules.*)[\\/]node_modules[\\/](react|react-dom|scheduler|next)[\\/]/,
              priority: 40,
              enforce: true,
            },
            // Lib chunk untuk dependencies besar
            lib: {
              test: /[\\/]node_modules[\\/]/,
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              name(module: any) {
                const packageName = module.context.match(
                  /[\\/]node_modules[\\/](.*?)([\\/]|$)/
                )?.[1];
                return `npm.${packageName?.replace("@", "")}`;
              },
              priority: 30,
              minChunks: 1,
              reuseExistingChunk: true,
            },
            // Commons chunk untuk shared code
            commons: {
              name: "commons",
              minChunks: 2,
              priority: 20,
            },
          },
        },
      };
    }

    return config;
  },
};

export default withAnalyzer(withNextIntl(nextConfig));
