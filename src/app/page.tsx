import BusinessSection from "@/components/BusinessSection";
import EventsSection from "@/components/EventsSection";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductsSection from "@/components/ProductsSection";
import SeasonBanner from "@/components/SeasonBanner";
import { navLinks } from "@/lib/site";

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

        {navLinks.filter((link) => !["#productos", "#empresas", "#eventos"].includes(link.href)).map((link) => (
          <section
            key={link.href}
            id={link.href.slice(1)}
            className="min-h-screen border-t border-latte p-10"
          >
            <h2 className="font-display text-3xl">{link.label}</h2>
          </section>
        ))}
      </main>
    </>
  );
}