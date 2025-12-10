import { NextIntlClientProvider } from "next-intl";
import type { Metadata } from "next";
import { getContactTranslations } from "@/lib/translations";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import Hero from "@/components/features/contact-us/Hero";
import SectionContactInfo from "@/components/features/contact-us/SectionContactInfo";
import SectionContactForm from "@/components/features/contact-us/SectionContactForm";

export const metadata: Metadata = {
  title: "VisionLAB by MJ Solution Indonesia",
  description:
    "Our office is located in Jakarta, Indonesia. Reach out to our team for inquiries, collaborations, or technical assistance regarding LED and LCD services.",
};


export const dynamic = "force-static";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export default async function ContactUs({ params }: PageProps) {
  const { locale } = await params;
  const messages = await getContactTranslations(locale);

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <main className="min-h-screen">
        <Header />
        <Hero />
        <SectionContactInfo />
        <SectionContactForm />
        <Footer />
      </main>
    </NextIntlClientProvider>
  );
}
