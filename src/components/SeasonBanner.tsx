import SeasonCarousel from "@/components/SeasonCarousel";
import { season } from "@/lib/season";

export default function SeasonBanner() {
  if (!season.enabled) return null;

  return (
    <section id="temporada" className="bg-wine text-white">
      <div className="mx-auto flex max-w-300 flex-col gap-6 px-4 py-11 md:gap-8 md:px-6 md:py-16">
        <div className="flex flex-col gap-3">
          <p className="font-display text-sm font-semibold tracking-[0.16em] text-gold uppercase">
            {season.eyebrow}
          </p>
          <h2 className="font-display text-[30px] leading-[1.1] font-bold text-balance md:text-[44px]">
            {season.title}
          </h2>
          <p className="max-w-[52ch] text-on-dark">{season.description}</p>
        </div>

        <SeasonCarousel products={season.products} />
      </div>
    </section>
  );
}