import { NextIntlClientProvider } from "next-intl";
import { getServiceDetailsTranslations } from "@/lib/translations";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import Hero from "@/components/features/services/complete-service/Hero";
import SectionExplanation from "@/components/features/services/common/SectionExplanation";

export const dynamic = "force-static";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export default async function CompleteService({ params }: PageProps) {
  const { locale } = await params;
  const messages = await getServiceDetailsTranslations(locale);
  const sections = messages.serviceDetails.completeService.sections;

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
