"use client";
import NotFound from "@/app/[locale]/error/page";
import "./[locale]/globals.css";

export default function RootNotFound() {
  return (
    <html lang="en">
      <body>
        <NotFound />
      </body>
    </html>
  );
}
