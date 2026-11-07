import Image from "next/image";

export default function AboutSection() {
  return (
    <section
      id="nosotros"
      className="mx-auto grid max-w-300 items-center gap-7 px-4 py-10 md:grid-cols-[2fr_3fr] md:gap-12 md:px-6 md:py-20"
    >
      <Image
        src="/images/chef-laura.webp"
        alt="Laura, chef y fundadora de Lau Pastelería en Barranquilla"
        width={1068}
        height={1600}
        sizes="(min-width: 768px) 40vw, 100vw"
        className="h-100 w-full rounded-[36px] object-cover md:h-130"
      />

      <div className="flex flex-col gap-4">
        <p className="font-script text-[44px] leading-none text-cafe">Hola, soy Laura</p>
        <h2 className="font-display text-[30px] leading-[1.1] font-bold md:text-[40px]">
          Sobre nosotros
        </h2>
        <p className="text-muted">
          Soy una emprendedora con más de 10 años llevando productos deliciosos a muchas
          familias barranquilleras. En Lau Pastelería preparamos desde ricos postres hasta
          deliciosa comida de sal, para que en cada celebración haya algo para todos.
        </p>
      </div>
    </section>
  );
}