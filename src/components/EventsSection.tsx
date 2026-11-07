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
      <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-12">
        <div className="flex flex-col gap-4">
          <h2 className="font-display text-3xl leading-[1.1] font-bold md:text-section">
            Para tus eventos
          </h2>
          <p className="text-muted">
            Completa tu celebración con estos servicios opcionales.
          </p>

          <ul className="flex flex-wrap gap-2.5 md:gap-3">
            {eventServices.map((service) => (
              <li
                key={service}
                className="rounded-full border border-blush bg-white px-4 py-2.5 text-[15px] font-semibold md:px-5 md:py-3 md:text-base"
              >
                {service}
              </li>
            ))}
          </ul>

          <a
            href={whatsappLink("Hola, quiero cotizar servicios para un evento")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex min-h-11 items-center self-start rounded-full border-2 border-cafe px-6 py-3.25 font-bold text-cafe transition-colors hover:bg-cafe hover:text-white"
          >
            Cotizar mi evento
          </a>
        </div>

        <Image
          src="/images/mesa-evento.webp"
          alt="Mesa de evento con dip, pinchos caprese, charcutería, cupcakes y croissants de Lau Pastelería"
          width={1600}
          height={1294}
          sizes="(min-width: 768px) 50vw, 100vw"
          className="aspect-4/3 w-full rounded-card object-cover md:aspect-auto md:h-130 md:rounded-panel"
        />
      </div>
    </section>
  );
}