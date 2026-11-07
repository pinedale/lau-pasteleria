import Image from "next/image";
import { whatsappLink } from "@/lib/site";

const eventServices = [
  "Mesa de dulces",
  "Tablas de queso",
  "Tortas personalizadas",
  "Dispensador de jugo, mimosa o agua saborizada",
  "Dispensador de café",
  "Jarra de sangría",
  "Bouquet de globos",
  "Arreglos de flores",
];

export default function EventsSection() {
  return (
    <section id="eventos" className="mx-auto max-w-300 px-4 py-10 md:px-6 md:py-16">
      <div className="grid items-start gap-10 md:grid-cols-[1fr_2fr]">
        <div className="flex flex-col gap-3.5">
          <h2 className="font-display text-[30px] leading-[1.1] font-bold md:text-[40px]">
            Para tus eventos
          </h2>
          <p className="text-muted">Completa tu celebración con estos servicios opcionales.</p>
          <a
            href={whatsappLink("Hola, quiero cotizar servicios para un evento")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center self-start py-2.5 font-bold text-cafe hover:text-ink"
          >
            Cotizar mi evento →
          </a>
          <Image
            src="/images/mesa-evento.webp"
            alt="Mesa de evento con dip, pinchos caprese, charcutería, cupcakes y croissants de Lau Pastelería"
            width={1600}
            height={1294}
            sizes="(min-width: 768px) 33vw, 100vw"
            className="mt-2 h-65 w-full rounded-[28px] object-cover md:h-95"
          />
        </div>

        <ul className="flex flex-wrap gap-3">
          {eventServices.map((service) => (
            <li
              key={service}
              className="rounded-full border border-blush bg-white px-5 py-3 font-semibold"
            >
              {service}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}