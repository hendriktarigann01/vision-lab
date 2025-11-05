import Header from "@/components/common/Header";
import Hero from "@/components/common/Hero";
import Footer from "@/components/common/Footer";

import SectionAboutUs from "@/components/features/home/SectionAboutUs";
import SectionService from "@/components/features/home/SectionService";
import SectionPartner from "@/components/features/home/SectionPartner";
import SectionProcess from "@/components/features/home/SectionProcess";
import SectionPrice from "@/components/features/home/SectionPrice";
import SectionFAQ from "@/components/features/home/SectionFAQ";
import SectionCTA from "@/components/features/home/SectionCTA";

export default function Home() {
  return (
    <main className="min-h-screen">
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
  );
}
