import Image from "next/image";
import { season } from "@/lib/season";
import { whatsappLink } from "@/lib/site";

export default function SeasonBanner() {
  if (!season.enabled) return null;

  const [main, secondary] = season.images;

  return (
    <section id="temporada" className="bg-pink">
      <div className="mx-auto flex max-w-300 flex-col items-center gap-6 px-4 py-9 md:flex-row md:gap-10 md:px-6 md:py-14">
        <div className="flex w-full gap-4 md:flex-1">
          <Image
            src={main.src}
            alt={main.alt}
            width={main.width}
            height={main.height}
            sizes="(min-width: 768px) 30vw, 60vw"
            className="h-60 min-w-0 flex-3 rounded-[28px] object-cover md:h-90"
          />
          <Image
            src={secondary.src}
            alt={secondary.alt}
            width={secondary.width}
            height={secondary.height}
            sizes="(min-width: 768px) 20vw, 40vw"
            className="h-60 min-w-0 flex-2 rounded-[28px] object-cover md:h-90"
          />
        </div>

        <div className="flex flex-col gap-4 md:flex-1">
          <p className="font-display text-sm font-semibold tracking-[0.16em] text-berry-dark uppercase">
            {season.eyebrow}
          </p>
          <h2 className="font-display text-[30px] leading-[1.1] font-bold text-balance md:text-[40px]">
            {season.title}
          </h2>
          <p className="text-muted">{season.description}</p>
          <a
            href={whatsappLink(season.whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center self-start rounded-full bg-ink px-6 py-3.5 font-bold text-white transition-opacity hover:opacity-90"
          >
            {season.cta}
          </a>
        </div>
      </div>
    </section>
  );
}