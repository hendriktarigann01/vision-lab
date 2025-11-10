import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

import Hero from "@/components/features/services/Hero";
import SectionService from "@/components/features/services/SectionService";
import SectionFAQ from "@/components/features/services/SectionFAQ";

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
