import Image from "next/image";
import InvoiceIcon from "@/components/icons/InvoiceIcon";
import { whatsappLink } from "@/lib/site";

const cateringItems = [
  "Mini croissants rellenos",
  "Mini horneados surtidos",
  "Mini parfait",
  "Quesos y charcutería",
  "Mini canapés",
  "Mini hamburguesas",
  "Sándwich club",
  "Pinchos de frutas",
  "Dips con tostadas",
  "Deditos",
  "Pastelitos",
  "Pinchos de mini pancakes",
  "Mini waffles de yuca",
  "Tablas de frutas",
  "Mini bruschettas",
  "Pinchos caprese",
];

export default function BusinessSection() {
  return (
    <section id="empresas" className="px-4 py-6 md:px-6 md:py-12">
      <div className="mx-auto grid max-w-[1200px] overflow-hidden rounded-[36px] bg-cafe text-white md:grid-cols-2">
        <Image
          src="/images/cajas-empresa.webp"
          alt="Cajas de catering con charcutería, frutas y galletas para empresas en Barranquilla"
          width={1200}
          height={1600}
          sizes="(min-width: 768px) 50vw, 100vw"
          className="h-[260px] w-full object-cover md:h-full md:min-h-[520px]"
        />

        <div className="flex flex-col gap-[18px] px-[22px] py-7 md:p-12">
          <p className="font-display text-sm font-semibold tracking-[0.16em] text-on-dark uppercase">
            Para empresas
          </p>

          <h2 className="font-display text-[30px] leading-[1.1] font-bold text-balance md:text-[40px]">
            Catering y cajas sorpresa corporativas
          </h2>

          <p className="text-on-dark">
            Reuniones, celebraciones de equipo y detalles para colaboradores o
            clientes. Ajustamos el pedido a tu presupuesto.
          </p>

          <div className="flex items-center gap-3 border-y border-on-dark/35 py-3 text-on-dark">
            <InvoiceIcon className="size-[26px] shrink-0" />
            <p className="text-[15px] leading-snug">
              <strong className="font-bold">Facturación electrónica</strong>
              <br />
              Emitimos factura electrónica para tu empresa.
            </p>
          </div>

          <p className="text-[15px] text-on-dark">{cateringItems.join(" · ")}</p>

          <a
            href={whatsappLink(
              "Hola, quiero cotizar catering o cajas sorpresa para mi empresa",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex min-h-11 items-center self-start rounded-full bg-white px-[26px] py-[15px] font-bold text-ink transition-opacity hover:opacity-90"
          >
            Cotizar para mi empresa
          </a>
        </div>
      </div>
    </section>
  );
}