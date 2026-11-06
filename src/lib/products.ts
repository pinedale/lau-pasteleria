export type Product = {
  title: string;
  description?: string;
  items: string[];
  itemsStyle: "list" | "inline";
  image: { src: string; alt: string; width: number; height: number };
  cta: string;
  whatsappMessage: string;
};

export const products: Product[] = [
  {
    title: "Tortas",
    description:
      "Tortas básicas en cuatro sabores, o personalizadas sobre esa misma base con fondant y papelería.",
    items: [
      "Vainilla con relleno de arequipe",
      "Chocolate con relleno de chocolate",
      "Zanahoria con frosting de queso crema",
      "Limón y arándanos con frosting de queso crema",
    ],
    itemsStyle: "list",
    image: {
      src: "/images/torta-vainilla.webp",
      alt: "Torta básica de vainilla de Lau Pastelería en Barranquilla",
      width: 1200,
      height: 1600,
    },
    cta: "Cotizar torta",
    whatsappMessage: "Hola, quiero cotizar una torta",
  },
  {
    title: "Sorpresas y regalos",
    description:
      "Cajas sorpresa y desayunos sorpresa para cumpleaños, aniversarios y fechas especiales.",
    items: [],
    itemsStyle: "inline",
    image: {
      src: "/images/caja-sorpresa.webp",
      alt: "Caja sorpresa de regalo con globos de Lau Pastelería",
      width: 1068,
      height: 1600,
    },
    cta: "Cotizar sorpresa",
    whatsappMessage: "Hola, quiero cotizar un desayuno o caja sorpresa",
  },
  {
    title: "Postres y dulces",
    items: [
      "Galletas decoradas",
      "Alfajores",
      "Macarons",
      "Brownies decorados",
      "Cakepops",
      "Cupcakes decorados",
      "Postres en shots",
      "Mini flan",
      "Mini cheesecake",
      "Mini tartaletas",
      "Trufas",
      "Fresas con chocolate",
      "Choco Oreo",
      "Paletas de chocolate",
      "Mini parfait",
      "Mini donas decoradas",
    ],
    itemsStyle: "inline",
    image: {
      src: "/images/postres-frasco.webp",
      alt: "Postres en frasco de Lau Pastelería en Barranquilla",
      width: 959,
      height: 1279,
    },
    cta: "Cotizar postres",
    whatsappMessage: "Hola, quiero cotizar postres",
  },
  {
    title: "Horneados y picadas",
    items: [
      "Croissants (mantequilla, choco avellanas, integral)",
      "Pastelito de jamón y queso",
      "Deditos de queso",
      "Mini volovanes",
      "Mini pizzas",
      "Mini hamburguesas",
      "Mini perros",
      "Mini fritos",
      "Tablas de queso",
      "Nuggets con papitas",
    ],
    itemsStyle: "inline",
    image: {
      src: "/images/mini-horneados.webp",
      alt: "Mini horneados surtidos de Lau Pastelería",
      width: 1200,
      height: 1600,
    },
    cta: "Cotizar horneados",
    whatsappMessage: "Hola, quiero cotizar horneados y picadas",
  },
  {
    title: "Dips",
    items: [
      "Pimentón",
      "Mexicano",
      "Cuatro quesos",
      "Uchuva",
      "Tocineta y finas hierbas",
      "Pesto y tomates secos",
      "Feta, espinaca y frutos secos",
      "Atún",
      "Frutos rojos",
      "Hummus",
      "Antipasto",
    ],
    itemsStyle: "inline",
    image: {
      src: "/images/dip-caprese.webp",
      alt: "Dip caprese con tomates y albahaca de Lau Pastelería",
      width: 1206,
      height: 1052,
    },
    cta: "Cotizar dips",
    whatsappMessage: "Hola, quiero cotizar dips",
  },
  {
    title: "Combos",
    items: [
      "Mini horneados surtidos (25, 50 o 100)",
      "Mini volovanes",
      "Mini croissants rellenos",
      "Mini club sándwich",
      "Pinchos de frutas",
      "Pinchos de pancakes",
      "Mini waffles de yuca",
      "Pinchos caprese",
      "Mini wraps",
    ],
    itemsStyle: "inline",
    image: {
      src: "/images/mini-wraps.webp",
      alt: "Mini wraps de pollo de Lau Pastelería",
      width: 1200,
      height: 1600,
    },
    cta: "Cotizar combo",
    whatsappMessage: "Hola, quiero cotizar un combo",
  },
];