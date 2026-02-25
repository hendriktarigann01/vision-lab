import { NextIntlClientProvider } from "next-intl";
import type { Metadata } from "next";
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
// import SectionSocmed from "@/components/features/home/SectionSocmed";
import SectionCTA from "@/components/features/home/SectionCTA";
import PromoModal from "@/components/common/PromoModal";

export const metadata: Metadata = {
  title: "VisionLAB by MJ Solution Indonesia",
  description:
    "VisionLAB is a multimedia service center under MJ Solution Indonesia that focuses on repair, maintenance, and servicing of LED & LCD screens.",
};

export const dynamic = "force-static";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export default async function Home({ params }: PageProps) {
  const { locale } = await params;
  const messages = await getHomeTranslations(locale);

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <main className="min-h-screen w-full overflow-x-hidden">
        <Header />
        <Hero />
        <SectionAboutUs />
        <SectionService />
        <SectionPartner />
        <SectionProcess />
        <SectionPrice />
        <SectionFAQ />
        {/* <SectionSocmed /> */}
        <SectionCTA />
        <Footer />
      </main>

      <PromoModal />
    </NextIntlClientProvider>
  );
}
