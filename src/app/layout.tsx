import type { Metadata } from "next";
import "./[locale]/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://visionlab.co.id"),
  title: "VisionLAB by MJ Solution Indonesia",
  description:
    "VisionLAB is a multimedia service center under MJ Solution Indonesia that focuses on repair, maintenance, and servicing of LED & LCD screens.",
  keywords: ["LED repair", "LCD repair", "Multimedia Service", "VisionLAB"],
  authors: [{ name: "VisionLAB" }],
  openGraph: {
    title: "VisionLAB by MJ Solution Indonesia",
    description: "VisionLAB is a multimedia service center...",
    url: "https://visionlab.co.id",
    siteName: "VisionLAB",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
