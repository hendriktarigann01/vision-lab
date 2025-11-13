import { NextIntlClientProvider } from "next-intl";
import { getHomeTranslations } from "@/lib/translations";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import SectionFAQ from "@/components/common/SectionFAQ";
import SectionService from "@/components/common/SectionService";

import Hero from "@/components/features/home/Hero";
import SectionAboutUs from "@/components/features/home/SectionAboutUs";
import SectionPartner from "@/components/features/home/SectionPartner";
import SectionProcess from "@/components/features/home/SectionProcess";
import SectionPrice from "@/components/features/home/SectionPrice";
import SectionCTA from "@/components/features/home/SectionCTA";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export default async function Home({ params }: PageProps) {
  const { locale } = await params;

  // Load HANYA translations yang dibutuhkan untuk home page
  const messages = await getHomeTranslations(locale);

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <main className="min-h-screen w-full overflow-x-hidden">
        <Header />
        <Hero /> {/* anchor home */}
        <SectionAboutUs /> {/* anchor about-us */}
        <SectionService /> {/* anchor service */}
        <SectionPartner />
        <SectionProcess />
        <SectionPrice />
        <SectionFAQ />
        <SectionCTA /> {/* anchor contact-us */}
        <Footer />
      </main>
    </NextIntlClientProvider>
  );
}
