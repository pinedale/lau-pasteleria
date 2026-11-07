export type GalleryImage = { src: string; alt: string; width: number; height: number };
export type GalleryVideo = { src: string; poster: string; label: string };

export const galleryImages: GalleryImage[] = [
  { src: "/images/torta-gatitos.webp", alt: "Torta personalizada de dos pisos con temática de gatitos de Lau Pastelería", width: 1200, height: 1600 },
  { src: "/images/torta-chocolate-virutas.webp", alt: "Torta de chocolate con relleno de chocolate y virutas de Lau Pastelería", width: 1600, height: 1066 },
  { src: "/images/torta-chocolate-dorada.webp", alt: "Torta de chocolate con detalles dorados de Lau Pastelería", width: 960, height: 1280 },
  { src: "/images/torta-hierbabuena.webp", alt: "Torta de Lau Pastelería decorada con hierbabuena", width: 1200, height: 1600 },
  { src: "/images/alfajores.webp", alt: "Alfajores rellenos de Lau Pastelería", width: 1066, height: 1600 },
  { src: "/images/torta-flores.webp", alt: "Torta personalizada con flores de Lau Pastelería", width: 1200, height: 1600 },
  { src: "/images/torta-vainilla-porcion.webp", alt: "Torta básica de vainilla por porciones", width: 1600, height: 1068 },
  { src: "/images/torta-vainilla-flor.webp", alt: "Torta básica de vainilla con almendras", width: 1200, height: 1600 },
  { src: "/images/mesa-grado.webp", alt: "Mesa de grado con cupcakes, horneados y charcutería", width: 1200, height: 1600 },
  { src: "/images/mini-hamburguesas.webp", alt: "Mini hamburguesas para evento de Lau Pastelería", width: 1200, height: 1600 },
  { src: "/images/bruschettas-caprese.webp", alt: "Bruschettas caprese de Lau Pastelería", width: 1200, height: 1600 },
  { src: "/images/caja-picada.webp", alt: "Caja con picada, mini hamburguesas y pancakes", width: 1600, height: 1068 },
  { src: "/images/croissants.webp", alt: "Croissants y pan horneado de Lau Pastelería", width: 1068, height: 1600 },
];

export const galleryVideos: GalleryVideo[] = [
  { src: "/videos/montaje-evento.mp4", poster: "/videos/montaje-evento.webp", label: "Video de una mesa de evento de Lau Pastelería" },
  { src: "/videos/mesa-picadas.mp4", poster: "/videos/mesa-picadas.webp", label: "Video de una mesa de picadas y postres de Lau Pastelería" },
  { src: "/videos/mesa-horneados.mp4", poster: "/videos/mesa-horneados.webp", label: "Video de una mesa de horneados, waffles y cupcakes de Lau Pastelería" },
  { src: "/videos/catering-empresa.mp4", poster: "/videos/catering-empresa.webp", label: "Video de una mesa de catering empresarial de Lau Pastelería" },
  { src: "/videos/tabla-frutas.mp4", poster: "/videos/tabla-frutas.webp", label: "Video de una tabla de frutas de Lau Pastelería" },
];