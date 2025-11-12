import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import SectionFAQ from "@/components/common/SectionFAQ";
import SectionService from "@/components/common/SectionService";

import Hero from "@/components/features/services/Hero";

export default async function Services() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <SectionService />
      <SectionFAQ />
      <Footer />
    </main>
  );
}
