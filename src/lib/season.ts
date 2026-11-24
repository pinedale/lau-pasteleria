export type SeasonProduct = {
  name: string;
  description: string;
  image: { src: string; alt: string; width: number; height: number };
};

export type Season = {
  enabled: boolean;
  eyebrow: string;
  title: string;
  description: string;
  products: SeasonProduct[];
};

export const season: Season = {
  enabled: true,
  eyebrow: "Temporada de Navidad",
  title: "Catálogo de Navidad 2026",
  description:
    "Regalos, tortas y cajas para compartir en diciembre. Elige tu favorito y cotízalo por WhatsApp. Haz tu pedido con mínimo 3 días de anticipación.",
  products: [
    {
      name: "Bandeja Navideña",
      description: "Mini vino, mini torta de ciruela y vino, cajita de galletas, vela o reno decorativo y frutos secos.",
      image: { src: "/images/navidad/bandeja-navidena.webp", alt: "Bandeja navideña con mini vino, torta y galletas de Lau Pastelería", width: 540, height: 720 },
    },
    {
      name: "Lata de Postres",
      description: "Postre artesanal de 2 a 4 porciones (tres leches, cuatro leches de Baileys, pavé de pistacho y frutos rojos o tiramisú) en lata de 14 cm.",
      image: { src: "/images/navidad/lata-de-postres.webp", alt: "Lata navideña con postre artesanal de Lau Pastelería", width: 450, height: 800 },
    },
    {
      name: "Caja de Galletas",
      description: "Surtido de galletas artesanales y mini brownie decorado.",
      image: { src: "/images/navidad/caja-de-galletas.webp", alt: "Caja de galletas navideñas surtidas de Lau Pastelería", width: 600, height: 800 },
    },
    {
      name: "Caja Luz Navidad",
      description: "Mini brownies x5, mini tabla de quesos, frutos secos, mini vino, antipasto de atún y tostadas.",
      image: { src: "/images/navidad/caja-luz-navidad.webp", alt: "Caja Luz Navidad con brownies, quesos y mini vino de Lau Pastelería", width: 420, height: 560 },
    },
    {
      name: "Mini Tabla de Queso",
      description: "Tabla de queso personal con lazos navideños.",
      image: { src: "/images/navidad/mini-tabla-de-queso.webp", alt: "Mini tabla de queso navideña de Lau Pastelería", width: 600, height: 800 },
    },
    {
      name: "Torta Volcán de Brigadeiro",
      description: "Brigadeiro de leche Klim con alfajor, de 12 a 15 porciones.",
      image: { src: "/images/navidad/torta-volcan-brigadeiro.webp", alt: "Torta volcán de brigadeiro de Lau Pastelería", width: 600, height: 800 },
    },
    {
      name: "Torta de Frutos Rojos",
      description: "Base de vainilla, frosting de queso crema y chocolate blanco y salsa de frutos rojos. De 12 a 15 porciones.",
      image: { src: "/images/navidad/torta-frutos-rojos.webp", alt: "Torta de vainilla con frutos rojos de Lau Pastelería", width: 600, height: 800 },
    },
    {
      name: "Pan de Jamón",
      description: "Pan de jamón de 30 cm en caja navideña.",
      image: { src: "/images/navidad/pan-de-jamon.webp", alt: "Pan de jamón navideño de Lau Pastelería", width: 600, height: 800 },
    },
    {
      name: "Cheesecake S'more",
      description: "De Nutella con masmelos rostizados, de 12 a 15 porciones. También en frutos rojos o dulce de leche.",
      image: { src: "/images/navidad/cheesecake-smore.webp", alt: "Cheesecake de Nutella con masmelos rostizados de Lau Pastelería", width: 600, height: 800 },
    },
    {
      name: "Kit Casita de Jengibre",
      description: "Galletas para armar y decorar, glaseados, sprinkles, bastones de caramelo y guía en video.",
      image: { src: "/images/navidad/kit-casita-de-jengibre.webp", alt: "Kit para armar casita de jengibre de Lau Pastelería", width: 600, height: 800 },
    },
    {
      name: "Bruce Cake",
      description: "Disponible en tamaño de 6 a 8 porciones o de 12 a 15 porciones.",
      image: { src: "/images/navidad/bruce-cake.webp", alt: "Bruce cake de chocolate con cerezas de Lau Pastelería", width: 600, height: 800 },
    },
    {
      name: "Bundt Cake",
      description: "Torta de manzana en corona con relleno de cheesecake, crumble de nueces y caramelo salado. De 12 a 15 porciones.",
      image: { src: "/images/navidad/bundt-cake.webp", alt: "Bundt cake de manzana en forma de corona de Lau Pastelería", width: 600, height: 800 },
    },
    {
      name: "Kit Decora",
      description: "Galletas navideñas para decorar en casa. Disponible en dos presentaciones.",
      image: { src: "/images/navidad/kit-decora.webp", alt: "Kit de galletas navideñas para decorar de Lau Pastelería", width: 515, height: 640 },
    },
    {
      name: "Caja Mini Galletas",
      description: "Cajita de mini galletas navideñas surtidas.",
      image: { src: "/images/navidad/caja-mini-galletas.webp", alt: "Caja de mini galletas navideñas de Lau Pastelería", width: 800, height: 800 },
    },
    {
      name: "Combo Natilla y Buñuelo",
      description: "Porción personal de natilla y buñuelo con lazo y tarjeta.",
      image: { src: "/images/navidad/combo-natilla-bunuelo.webp", alt: "Combo de natilla y buñuelo navideño de Lau Pastelería", width: 566, height: 800 },
    },
    {
      name: "Navidad Gold",
      description: "Mini vino, mini pan de jamón, mini tabla de queso, frutos secos y natilla.",
      image: { src: "/images/navidad/navidad-gold.webp", alt: "Caja Navidad Gold con mini vino y pan de jamón de Lau Pastelería", width: 720, height: 480 },
    },
    {
      name: "Caja Novena",
      description: "Chocolate caliente, dos mini buñuelos, natilla personal y porción de fruta.",
      image: { src: "/images/navidad/caja-novena.webp", alt: "Caja Novena con chocolate caliente, buñuelos y natilla de Lau Pastelería", width: 651, height: 800 },
    },
    {
      name: "Mini Vino",
      description: "Mini vino, mini tabla de queso, brownie o paleta de chocolate y galleta navideña.",
      image: { src: "/images/navidad/mini-vino.webp", alt: "Caja Mini Vino con tabla de queso y galleta navideña de Lau Pastelería", width: 600, height: 800 },
    },
    {
      name: "Caja Vino y Torta",
      description: "Mini vino, torta navideña, brownie decorado y trufa o galleta navideña.",
      image: { src: "/images/navidad/caja-vino-y-torta.webp", alt: "Caja con mini vino y torta navideña de Lau Pastelería", width: 600, height: 800 },
    },
    {
      name: "Chocobom",
      description: "Chocobomba con cocoa y masmelos para disfrutar con leche caliente.",
      image: { src: "/images/navidad/chocobom.webp", alt: "Chocobombas navideñas de chocolate de Lau Pastelería", width: 671, height: 799 },
    },
    {
      name: "Mini Detalles",
      description: "Detalles navideños individuales, ideales para regalar.",
      image: { src: "/images/navidad/mini-detalles.webp", alt: "Mini detalles navideños de Lau Pastelería", width: 600, height: 800 },
    },
    {
      name: "Alfajor Reno",
      description: "Alfajor decorado de reno en cajita navideña.",
      image: { src: "/images/navidad/alfajor-reno.webp", alt: "Alfajor decorado de reno de Lau Pastelería", width: 600, height: 800 },
    },
    {
      name: "Desayuno Navidad",
      description: "Mini pan de jamón, alfajor o galleta, mini buñuelo y té frutal.",
      image: { src: "/images/navidad/desayuno-navidad.webp", alt: "Desayuno navideño con pan de jamón y buñuelo de Lau Pastelería", width: 625, height: 800 },
    },
  ],
};