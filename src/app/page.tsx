import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SeasonBanner from "@/components/SeasonBanner";
import ProductsSection from "@/components/ProductsSection";
import BusinessSection from "@/components/BusinessSection";
import EventsSection from "@/components/EventsSection";
import GallerySection from "@/components/GallerySection";
import HowToOrderSection from "@/components/HowToOrderSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SeasonBanner />
        <ProductsSection />
        <BusinessSection />
        <EventsSection />
        <GallerySection />
        <HowToOrderSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}