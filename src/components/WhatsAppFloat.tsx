import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { whatsappLink } from "@/lib/site";

export default function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink("Hola, quiero hacer un pedido")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Hacer pedido por WhatsApp"
      className="fixed right-4 bottom-[max(1rem,env(safe-area-inset-bottom))] z-40 flex size-15 items-center justify-center rounded-full bg-whatsapp text-whatsapp-ink shadow-[0_6px_18px_rgba(59,42,32,0.25)] transition-transform hover:scale-105 md:right-6 md:bottom-6"
    >
      <WhatsAppIcon className="size-7.5" />
    </a>
  );
}