import { NextIntlClientProvider } from "next-intl";
import { getContactTranslations } from "@/lib/translations";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import Hero from "@/components/features/contact-us/Hero";
import SectionContactInfo from "@/components/features/contact-us/SectionContactInfo";
import SectionContactForm from "@/components/features/contact-us/SectionContactForm";

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
