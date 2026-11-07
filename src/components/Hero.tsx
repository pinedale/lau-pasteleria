import Image from "next/image";
import { whatsappLink } from "@/lib/site";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="mx-auto grid max-w-300 items-center gap-12 px-4 py-10 md:grid-cols-2 md:px-6 md:pt-16 md:pb-18"
    >
      <div className="flex flex-col gap-5.5">
        <p className="font-display text-[15px] font-semibold tracking-[0.16em] text-berry uppercase">
          Pastelería en Barranquilla
        </p>

        <h1 className="font-display text-[38px] leading-[1.05] font-bold text-balance md:text-6xl">
          Tortas, postres y sorpresas hechos para celebrar
        </h1>

        <p className="max-w-[34ch] text-[17px] text-muted md:text-[19px]">
          Tortas personalizadas y básicas, desayunos y cajas sorpresa, postres,
          horneados y catering para empresas. Cuéntanos tu idea y la cotizamos
          por WhatsApp.
        </p>

        <div className="flex flex-wrap gap-3">
          <a
            href={whatsappLink("Hola, quiero cotizar una torta")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center rounded-full bg-cafe px-6.5-[15px] font-bold text-white transition-opacity hover:opacity-90"
          >
            Cotizar por WhatsApp
          </a>
          <a
            href="#productos"
            className="inline-flex min-h-11 items-center rounded-full border-2 border-cafe px-6 py-3.25 font-bold text-cafe transition-colors hover:bg-cafe hover:text-white"
          >
            Ver productos
          </a>
        </div>
      </div>

      <div className="relative">
        <div
          aria-hidden="true"
          className="absolute inset-[28px_-16px_-16px_28px] rounded-[40px] bg-latte"
        />
        <Image
          src="/images/hero-torta-cumpleanos.webp"
          alt="Torta de cumpleaños personalizada con rosas de Lau Pastelería en Barranquilla"
          width={1200}
          height={1600}
          sizes="(min-width: 768px) 50vw, 100vw"
          preload
          className="relative h-90 w-full rounded-[28px] object-cover object-[center_25%] md:h-140 md:rounded-[40px]"
        />
      </div>
    </section>
  );
}