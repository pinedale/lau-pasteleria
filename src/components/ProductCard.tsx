import Image from "next/image";
import type { Product } from "@/lib/products";
import { whatsappLink } from "@/lib/site";

export default function ProductCard({ product }: { product: Product }) {
  const { title, description, items, itemsStyle, image, cta, whatsappMessage } = product;

  return (
    <article className="flex flex-col overflow-hidden rounded-[28px] bg-white shadow-[0_1px_0_var(--color-blush)]">
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
        className="h-52.5 w-full object-cover md:h-65"
      />

      <div className="flex flex-1 flex-col gap-3 p-6">
        <h3 className="font-display text-[26px] font-semibold">{title}</h3>

        {description && <p className="text-muted">{description}</p>}

        {items.length > 0 &&
          (itemsStyle === "list" ? (
            <ul className="list-disc pl-4.5 text-[15px] leading-relaxed text-muted">
              {items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ) : (
            <p className="text-[15px] text-muted">{items.join(" · ")}</p>
          ))}

        <a
          href={whatsappLink(whatsappMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-flex min-h-11 items-center self-start py-2.5 font-bold text-cafe hover:text-ink"
        >
          {cta} →
        </a>
      </div>
    </article>
  );
}