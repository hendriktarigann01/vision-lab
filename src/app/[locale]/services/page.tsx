import { NextIntlClientProvider } from "next-intl";
import type { Metadata } from "next";
import { getServicesTranslations } from "@/lib/translations";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import SectionFAQ from "@/components/common/SectionFAQ";
import SectionService from "@/components/common/SectionService";
import Hero from "@/components/features/services/Hero";

export const metadata: Metadata = {
  title: "VisionLAB by MJ Solution Indonesia",
  description:
    "Hands-on training to help your team operate, maintain, and troubleshoot LED & LCD systems with confidence.",
};

export const dynamic = "force-static";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export default async function Services({ params }: PageProps) {
  const { locale } = await params;
  const messages = await getServicesTranslations(locale);

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <main className="min-h-screen">
        <Header />
        <Hero />
        <SectionService />
        <SectionFAQ />
        <Footer />
      </main>
    </NextIntlClientProvider>
  );
}
