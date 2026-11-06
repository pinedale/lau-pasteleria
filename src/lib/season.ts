export type Season = {
  enabled: boolean;
  eyebrow: string;
  title: string;
  description: string;
  cta: string;
  whatsappMessage: string;
  images: { src: string; alt: string; width: number; height: number }[];
};

export const season: Season = {
  enabled: true,
  eyebrow: "Temporada de Navidad",
  title: "Postres navideños para compartir en familia",
  description:
    "Torta navideña y flan cremoso de caramelo para tus cenas de diciembre. Haz tu pedido con 3 días de anticipación.",
  cta: "Pide tu postre navideño",
  whatsappMessage: "Hola, quiero pedir un postre navideño",
  images: [
    {
      src: "/images/torta-navidena.webp",
      alt: "Torta navideña de Lau Pastelería en Barranquilla",
      width: 1600,
      height: 1066,
    },
    {
      src: "/images/flan-navideno.webp",
      alt: "Flan cremoso de caramelo navideño de Lau Pastelería",
      width: 1066,
      height: 1600,
    },
  ],
};