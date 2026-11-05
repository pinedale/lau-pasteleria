import Header from "@/components/Header";
import { navLinks } from "@/lib/site";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section id="inicio" className="p-10">
          <h1 className="font-display text-5xl text-cafe">Lau Pastelería</h1>
        </section>

        {navLinks.map((link) => (
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