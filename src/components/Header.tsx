import Logo from "@/components/Logo";
import { navLinks, whatsappLink } from "@/lib/site";

export default function Header() {
    return (
        <header className="sticky top-0 z-50 border-b border-blush bg-cream">
            <div className="mx-auto flex max-w-300 flex-wrap items-center justify-between gap-x-6 gap-y-2 px-6 py-3.5">
                <a href="#inicio" aria-label="Ir al inicio" className="flex min-h-11 shrink-0 items-center">
                    <Logo className="h-10 w-auto text-cafe md:h-13" />
                </a>

                <nav aria-label="Principal" className="order-last w-full overflow-x-auto md:order-0 md:w-auto">
                    <ul className="flex gap-x-5.5 whitespace-nowrap text-[15px] font-semibold">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <a href={link.href} className="inline-flex min-h-11 items-center transition-colors hover:text-cafe">
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <a
                    href={whatsappLink("Hola, quiero hacer un pedido")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden min-h-11 shrink-0 items-center rounded-full bg-cafe px-5 py-3 text-[15px] font-bold text-white transition-opacity hover:opacity-90 md:inline-flex"
                >
                    Pedir por WhatsApp
                </a>
            </div>
        </header>
    );
}