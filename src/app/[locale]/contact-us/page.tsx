import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import Hero from "@/components/features/contact-us/Hero";
import SectionContactInfo from "@/components/features/contact-us/SectionContactInfo";
import SectionContactForm from "@/components/features/contact-us/SectionContactForm";


export default async function ContactUs() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <SectionContactInfo />
      <SectionContactForm />
      <Footer />
    </main>
  );
}
