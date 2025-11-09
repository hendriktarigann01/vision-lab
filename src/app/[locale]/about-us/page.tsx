import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

import Hero from "@/components/features/about-us/Hero";
import SectionAboutUs from "@/components/features/about-us/SectionAboutUs";
import SectionService from "@/components/features/about-us/SectionService";
import SectionWhyUs from "@/components/features/about-us/SectionWhyUs";

export default async function AboutUs() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <SectionAboutUs />
      <SectionWhyUs />
      <SectionService />
      <Footer />
    </main>
  );
}
