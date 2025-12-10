import { NextIntlClientProvider } from "next-intl";
import type { Metadata } from "next";
import { getServiceDetailsTranslations } from "@/lib/translations";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import Hero from "@/components/features/services/maintenance/Hero";
import SectionExplanation from "@/components/features/services/common/SectionExplanation";

export const metadata: Metadata = {
  title: "VisionLAB by MJ Solution Indonesia",
  description:
    "Regular cleaning and maintenance to keep your LED & LCD screens in top condition preventing early damage and ensuring consistent visual quality.",
};

export const dynamic = "force-static";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export default async function Maintenance({ params }: PageProps) {
  const { locale } = await params;
  const messages = await getServiceDetailsTranslations(locale);
  const sections = messages.serviceDetails.maintenance.sections;

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <main className="min-h-screen">
        <Header />
        <Hero />
        <SectionExplanation sections={sections} />
        <Footer />
      </main>
    </NextIntlClientProvider>
  );
}
