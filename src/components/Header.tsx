import Logo from "@/components/Logo";
import { navLinks, whatsappLink } from "@/lib/site";

export default function Header() {
    return (
        <header className="sticky top-0 z-50 border-b border-latte bg-cream/90 backdrop-blur">
            <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-6 gap-y-2 px-4 py-3">
                <a href="#inicio" aria-label="Ir al inicio" className="shrink-0">
                    <Logo className="h-10 w-auto text-cafe" />
                </a>

                <nav
                    aria-label="Principal"
                    className="order-last w-full overflow-x-auto md:order-none md:w-auto md:flex-1"
                >
                    <ul className="flex gap-5 whitespace-nowrap text-sm font-semibold">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <a href={link.href} className="py-2 transition-colors hover:text-cafe">
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <a
                    href={whatsappLink("¡Hola Lau! Quiero hacer un pedido 🎂")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden shrink-0 items-center rounded-full bg-cafe px-5 py-2.5 font-semibold text-white transition-opacity hover:opacity-90 md:inline-flex"
                >
                    Pedir por WhatsApp
                </a>
            </div>
        </header>
    );
}