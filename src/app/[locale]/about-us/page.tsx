import { NextIntlClientProvider } from "next-intl";
import type { Metadata } from "next";
import { getAboutUsTranslations } from "@/lib/translations";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import SectionService from "@/components/common/SectionService";
import Hero from "@/components/features/about-us/Hero";
import SectionAboutUs from "@/components/features/about-us/SectionAboutUs";
import SectionWhyUs from "@/components/features/about-us/SectionWhyUs";

export const metadata: Metadata = {
  title: "VisionLAB by MJ Solution Indonesia",
  description:
    "VisionLAB is a multimedia service center under MJ Solution Indonesia that focuses on repair, maintenance, and servicing of LED & LCD screens.",
};

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
