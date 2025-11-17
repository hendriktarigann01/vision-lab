import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "VisionLAB",
  description:
    "Professional LED & LCD repair, maintenance, and calibration services",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
