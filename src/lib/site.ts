export const site = {
  name: "Lau Pastelería",
  url: "https://laupasteleriabaq.com",
  whatsapp: "573167398814",
  instagram: "https://www.instagram.com/laupasteleria.baq/",
  instagramHandle: "@laupasteleria.baq",
  deliveryAreas: ["Barranquilla", "Soledad", "Puerto Colombia"],
  orderNoticeDays: 3,
  whatsappDisplay: "316 739 8814",
  domain: "laupasteleriabaq.com",
  description: "Tortas personalizadas, postres, cajas sorpresa y catering para empresas en Barranquilla. Haz tu pedido por WhatsApp.",
} as const;

export function whatsappLink(message: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const navLinks = [
  { href: "#productos", label: "Productos" },
  { href: "#empresas", label: "Empresas" },
  { href: "#eventos", label: "Eventos" },
  { href: "#galeria", label: "Galería" },
  { href: "#como-pedir", label: "Cómo pedir" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#contacto", label: "Contacto" },
] as const;