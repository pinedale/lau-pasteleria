import Logo from "@/components/Logo";
import MobileMenu from "@/components/MobileMenu";
import { navLinks, whatsappLink } from "@/lib/site";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-blush bg-cream">
      <div className="mx-auto flex max-w-300 items-center justify-between gap-4 px-4 py-3 md:px-6 lg:py-3.5">
        <a href="#inicio" aria-label="Ir al inicio" className="flex min-h-11 shrink-0 items-center">
          <Logo className="h-10 w-auto text-cafe lg:h-13" />
        </a>

        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex gap-x-4 whitespace-nowrap text-[15px] font-semibold xl:gap-x-5.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="inline-flex min-h-11 items-center transition-colors hover:text-cafe">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={whatsappLink("Hola, quiero hacer un pedido")}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden min-h-11 shrink-0 items-center rounded-full bg-cafe px-5 py-3 text-[15px] font-bold text-white transition-opacity hover:opacity-90 sm:inline-flex"
          >
            Pedir por WhatsApp
          </a>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}