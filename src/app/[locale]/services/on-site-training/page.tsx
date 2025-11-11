import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

import Hero from "@/components/features/services/on-site-training/Hero";
import SectionExplanation from "@/components/features/services/on-site-training/SectionExplanation";

export default async function Maintenance() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <SectionExplanation />
      <Footer />
    </main>
  );
}
