import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

import Hero from "@/components/features/services/maintenance/Hero";
import SectionExplanation from "@/components/features/services/maintenance/SectionExplanation";

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
