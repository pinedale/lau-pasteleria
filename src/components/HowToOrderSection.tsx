import { site } from "@/lib/site";

const steps = [
  {
    title: "Elige qué quieres",
    description:
      "Mira las categorías o cuéntanos tu idea: temática, sabor y número de personas.",
  },
  {
    title: "Cotiza por WhatsApp",
    description: "Te respondemos con opciones de tamaño, decoración y precio.",
  },
  {
    title: "Confirma tu fecha",
    description: `Haz tu pedido con ${site.orderNoticeDays} días de anticipación para asegurar tu fecha.`,
  },
];

export default function HowToOrderSection() {
  return (
    <section id="como-pedir" className="border-y border-blush bg-white">
      <div className="mx-auto max-w-300 px-4 py-11 md:px-6 md:py-18">
        <h2 className="mb-9 font-display text-[30px] font-bold md:text-[40px]">Cómo pedir</h2>

        <ol className="grid gap-6 md:grid-cols-3">
          {steps.map((step, index) => (
            <li key={step.title} className="flex flex-col gap-2.5">
              <span className="flex size-12 items-center justify-center rounded-full bg-pink font-display text-[22px] font-bold text-berry-dark">
                {index + 1}
              </span>
              <h3 className="font-display text-[22px] font-semibold">{step.title}</h3>
              <p className="text-muted">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}