import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import Script from "next/script";
import "./globals.css";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound();
  }

  return (
    <html lang={locale}>
      <head>
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "VisionLAB by MJ Solution Indonesia",
              url: "https://visionlab.mjsolution.co.id",
              logo: "https://visionlab.mjsolution.co.id/vision-lab-logo.webp",
              description:
                "VisionLAB is a multimedia service center under MJ Solution Indonesia",
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "Customer Service",
              },
            }),
          }}
        />

        {process.env.NODE_ENV === "production" && (
          <>
            {/* Google Tag Manager */}
            <Script
              id="gtm-script"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src= 'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f); })(window,document,'script','dataLayer','GTM-WXWWW93F');`,
              }}
            />
            {/* Google tag (gtag.js) */}
            <Script
              src="https://www.googletagmanager.com/gtag/js?id=G-EZL319LYCQ"
              strategy="afterInteractive"
            />
            <Script
              id="gtag-script"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-EZL319LYCQ');`,
              }}
            />
          </>
        )}
      </head>
      <body>
        {process.env.NODE_ENV === "production" && (
          <>
            {/* Google Tag Manager (noscript) */}
            <noscript>
              <iframe
                src="https://www.googletagmanager.com/ns.html?id=GTM-WXWWW93F"
                height="0"
                width="0"
                style={{ display: "none", visibility: "hidden" }}
              ></iframe>
            </noscript>
            {/* End Google Tag Manager (noscript) */}
          </>
        )}
        {children}
      </body>
    </html>
  );
}
