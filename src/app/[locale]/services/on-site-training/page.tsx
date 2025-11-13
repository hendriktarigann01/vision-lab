import { NextIntlClientProvider } from "next-intl";
import { getServiceDetailsTranslations } from "@/lib/translations";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import Hero from "@/components/features/services/on-site-training/Hero";
import SectionExplanation from "@/components/features/services/common/SectionExplanation";

export const dynamic = "force-static";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export default async function OnSiteTraining({ params }: PageProps) {
  const { locale } = await params;
  const messages = await getServiceDetailsTranslations(locale);
  const sections = messages.serviceDetails.onSiteTraining.sections;

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
