import Image from "next/image";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";
import { whatsappLink } from "@/lib/site";

export default function ProductsSection() {
  return (
    <section id="productos" className="mx-auto max-w-300 px-4 py-10 md:px-6 md:pt-22">
      <div className="mb-10 flex flex-col gap-2.5">
        <h2 className="font-display text-[30px] font-bold md:text-[44px]">Nuestros productos</h2>
        <p className="max-w-[60ch] text-muted">
          Los precios varían según el tamaño y la decoración. Elige una categoría y te
          enviamos la cotización por WhatsApp.
        </p>
      </div>

      {/* Destacado */}
      <div className="mb-9 grid overflow-hidden rounded-[36px] bg-pink md:grid-cols-2">
        <Image
          src="/images/torta-personalizada-dos-pisos.webp"
          alt="Torta personalizada infantil de dos pisos con arcoíris y globos de Lau Pastelería en Barranquilla"
          width={1200}
          height={1600}
          sizes="(min-width: 768px) 50vw, 100vw"
          className="h-105 w-full object-cover md:h-140"
        />
        <div className="flex flex-col justify-center gap-4 px-5.5 py-7 md:p-12">
          <p className="font-display text-sm font-semibold tracking-[0.16em] text-berry-dark uppercase">
            Destacado
          </p>
          <h3 className="font-display text-[30px] leading-[1.1] font-bold text-balance md:text-[40px]">
            Tortas personalizadas de uno o varios pisos
          </h3>
          <p className="text-muted">
            Elige cualquiera de nuestros sabores y la decoramos con fondant, papelería y
            los detalles de la temática que imaginas, para cumpleaños, bautizos, grados y
            fechas especiales.
          </p>
          <a
            href={whatsappLink("Hola, quiero cotizar una torta personalizada")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center self-start rounded-full bg-cafe px-6.5 py-3.75 font-bold text-white transition-opacity hover:opacity-90"
          >
            Cotizar torta personalizada
          </a>
        </div>
      </div>

      {/* Tarjetas */}
      <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.title} product={product} />
        ))}
      </div>
    </section>
  );
}