import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

import Hero from "@/components/features/services/complete-service/Hero";
import SectionExplanation from "@/components/features/services/complete-service/SectionExplanation";

export default async function CompleteService() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <SectionExplanation />
      <Footer />
    </main>
  );
}
