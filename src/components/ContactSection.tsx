import { site, whatsappLink } from "@/lib/site";

export default function ContactSection() {
  return (
    <section id="contacto" className="bg-ink text-white">
      <div className="mx-auto grid max-w-300 gap-10 px-4 pt-12 pb-8 md:grid-cols-2 md:px-6 md:pt-18 md:pb-12">
        <div className="flex flex-col gap-3.5">
          <h2 className="font-display text-[30px] leading-[1.1] font-bold md:text-[40px]">
            ¿Lista tu celebración?
          </h2>
          <p className="text-sand">Escríbenos y cotizamos tu pedido.</p>
          <a
            href={whatsappLink("Hola, quiero hacer un pedido")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center self-start rounded-full bg-whatsapp px-6.5 py-3.75 font-bold text-whatsapp-ink transition-opacity hover:opacity-90"
          >
            Escribir por WhatsApp
          </a>
        </div>

        <dl className="flex flex-col gap-4">
          <div>
            <dt className="text-[13px] tracking-[0.12em] text-sand uppercase">WhatsApp</dt>
            <dd className="mt-0.5 text-xl font-bold">{site.whatsappDisplay}</dd>
          </div>
          <div>
            <dt className="text-[13px] tracking-[0.12em] text-sand uppercase">Instagram</dt>
            <dd className="mt-0.5 text-xl font-bold">
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="underline-offset-4 hover:underline"
              >
                {site.instagramHandle}
              </a>
            </dd>
          </div>
          <div>
            <dt className="text-[13px] tracking-[0.12em] text-sand uppercase">Entregas</dt>
            <dd className="mt-0.5 text-xl font-bold">Solo a domicilio</dd>
            <dd className="mt-1 text-on-dark">
              {site.deliveryAreas.join(", ").replace(/, ([^,]*)$/, " y $1")} (incluida Villa
              Campestre)
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}