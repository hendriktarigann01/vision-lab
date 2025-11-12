import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
import withBundleAnalyzer from "@next/bundle-analyzer";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

// Cek apakah script yang dijalankan adalah "analyze"
const isAnalyze = process.env.npm_lifecycle_event === "analyze";

const withAnalyzer = withBundleAnalyzer({
  enabled: isAnalyze, // aktif kalau script-nya "analyze"
  openAnalyzer: true, // otomatis buka di browser
});

const nextConfig: NextConfig = {
  serverExternalPackages: ["@prisma/client", "bcryptjs"],
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default withAnalyzer(withNextIntl(nextConfig));
