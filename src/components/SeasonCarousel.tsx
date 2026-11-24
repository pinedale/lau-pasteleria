"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef } from "react";
import type { SeasonProduct } from "@/lib/season";
import { whatsappLink } from "@/lib/site";

type SeasonCarouselProps = {
  products: SeasonProduct[];
};

const AUTOPLAY_MS = 4500;
const GAP_PX = 20; // igual al gap-5 del <ul>

export default function SeasonCarousel({ products }: SeasonCarouselProps) {
  const trackRef = useRef<HTMLUListElement>(null);
  const pausedRef = useRef(false);

  const scrollByCard = useCallback((direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const behavior: ScrollBehavior = reduceMotion ? "auto" : "smooth";
    const maxScroll = track.scrollWidth - track.clientWidth;

    // Al llegar al final vuelve al inicio, y al revés
    if (direction === 1 && track.scrollLeft >= maxScroll - 4) {
      track.scrollTo({ left: 0, behavior });
      return;
    }
    if (direction === -1 && track.scrollLeft <= 4) {
      track.scrollTo({ left: maxScroll, behavior });
      return;
    }

    const card = track.querySelector("li");
    const step = card ? card.getBoundingClientRect().width + GAP_PX : track.clientWidth * 0.8;
    track.scrollBy({ left: direction * step, behavior });
  }, []);

  // Autoplay: avanza solo, salvo que el usuario esté interactuando
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const id = window.setInterval(() => {
      if (!pausedRef.current) scrollByCard(1);
    }, AUTOPLAY_MS);

    return () => window.clearInterval(id);
  }, [scrollByCard]);

  function handleArrow(direction: 1 | -1) {
    pausedRef.current = true; // si usó las flechas, ya no avanzamos solos
    scrollByCard(direction);
  }

  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-end gap-3">
        <button
          type="button"
          onClick={() => handleArrow(-1)}
          aria-label="Ver productos anteriores"
          className="flex size-13 items-center justify-center rounded-full border-2 border-gold text-gold transition-colors hover:bg-gold hover:text-wine"
        >
          <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 6l-6 6 6 6" />
          </svg>
        </button>
        <button
          type="button"
          onClick={() => handleArrow(1)}
          aria-label="Ver más productos"
          className="flex size-13 items-center justify-center rounded-full border-2 border-gold bg-gold text-wine transition-opacity hover:opacity-90"
        >
          <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 6l6 6-6 6" />
          </svg>
        </button>
      </div>

      <ul
        ref={trackRef}
        aria-label="Productos del catálogo de Navidad"
        onMouseEnter={() => (pausedRef.current = true)}
        onMouseLeave={() => (pausedRef.current = false)}
        onTouchStart={() => (pausedRef.current = true)}
        onFocus={() => (pausedRef.current = true)}
        className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2 scrollbar-none [&::-webkit-scrollbar]:hidden"
      >
        {products.map((product) => (
          <li key={product.name} className="w-[78%] shrink-0 snap-start sm:w-70">
            <article className="flex h-full flex-col overflow-hidden rounded-card border-2 border-gold bg-white text-ink">
              <Image
                src={product.image.src}
                alt={product.image.alt}
                width={product.image.width}
                height={product.image.height}
                sizes="(min-width: 640px) 280px, 78vw"
                className="h-80 w-full object-cover"
              />
              <div className="flex grow flex-col gap-2 p-5">
                <h3 className="font-display text-[22px] leading-tight font-semibold">{product.name}</h3>
                <p className="text-[15px] text-muted">{product.description}</p>
                <a
                  href={whatsappLink(`Hola, quiero cotizar: ${product.name} (catálogo de Navidad)`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Cotizar ${product.name} por WhatsApp`}
                  className="mt-auto inline-flex min-h-11 items-center justify-center rounded-full bg-wine px-5 py-3 font-bold text-white transition-opacity hover:opacity-90"
                >
                  Cotizar
                </a>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
}