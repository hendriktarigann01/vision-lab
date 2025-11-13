import { NextIntlClientProvider } from "next-intl";
import { getAboutUsTranslations } from "@/lib/translations";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import SectionService from "@/components/common/SectionService";
import Hero from "@/components/features/about-us/Hero";
import SectionAboutUs from "@/components/features/about-us/SectionAboutUs";
import SectionWhyUs from "@/components/features/about-us/SectionWhyUs";

export const dynamic = "force-static";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export default async function AboutUs({ params }: PageProps) {
  const { locale } = await params;
  const messages = await getAboutUsTranslations(locale);

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <main className="min-h-screen">
        <Header />
        <Hero />
        <SectionAboutUs />
        <SectionWhyUs />
        <SectionService />
        <Footer />
      </main>
    </NextIntlClientProvider>
  );
}
