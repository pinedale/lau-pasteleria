import Image from "next/image";
import AutoplayVideo from "@/components/AutoplayVideo";
import { galleryImages, galleryVideos } from "@/lib/gallery";
import { site } from "@/lib/site";

export default function GallerySection() {
  return (
    <section id="galeria" className="mx-auto max-w-[1200px] px-4 py-10 md:px-6 md:py-12">
      <h2 className="mb-8 font-display text-[30px] font-bold md:text-[40px]">Galería</h2>

      <div className="grid grid-flow-dense grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-4">
        {galleryImages.map((image) => {
          const isWide = image.width > image.height;

          return (
            <Image
              key={image.src}
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              sizes={
                isWide
                  ? "(min-width: 1024px) 50vw, (min-width: 768px) 66vw, 100vw"
                  : "(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
              }
              className={`h-[180px] w-full rounded-[20px] object-cover md:h-[340px] md:rounded-[24px] ${
                isWide ? "col-span-2" : ""
              }`}
            />
          );
        })}
      </div>

      <a
        href={site.instagram}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex min-h-11 items-center font-bold text-cafe hover:text-ink"
      >
        Ver más en Instagram {site.instagramHandle} →
      </a>

      <div className="mt-12 grid items-center gap-8 md:grid-cols-[1fr_2fr]">
        <div className="flex flex-col gap-3">
          <h3 className="font-display text-[28px] leading-[1.1] font-bold md:text-[34px]">
            Nuestras mesas en video
          </h3>
          <p className="max-w-[46ch] text-muted">
            Así se ven nuestros montajes para eventos: horneados, dips, charcutería y
            postres listos para compartir.
          </p>
        </div>

        <div className="flex min-w-0 snap-x gap-4 overflow-x-auto pb-1.5">
          {galleryVideos.map((video) => (
            <AutoplayVideo
              key={video.src}
              src={video.src}
              poster={video.poster}
              label={video.label}
              className="h-[480px] w-[270px] shrink-0 snap-start rounded-[24px] bg-latte object-cover"
            />
          ))}
        </div>
      </div>
    </section>
  );
}