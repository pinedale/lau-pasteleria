export const site = {
  name: "Lau Pastelería",
  url: "https://laupasteleriabaq.com",
  whatsapp: "573167398814",
  instagram: "https://www.instagram.com/laupasteleria.baq/",
  instagramHandle: "@laupasteleria.baq",
  deliveryAreas: ["Barranquilla", "Soledad", "Puerto Colombia"],
  orderNoticeDays: 3,
} as const;

export function whatsappLink(message: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}