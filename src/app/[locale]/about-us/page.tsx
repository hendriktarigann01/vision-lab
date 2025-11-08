import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import SectionAboutUs from "@/components/features/home/SectionAboutUs";

export default async function AboutUs() {
  return (
    <main className="min-h-screen">
      <Header />
      <SectionAboutUs />
      <Footer />
    </main>
  );
}
