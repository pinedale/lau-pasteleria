import type { Metadata } from "next";
import { Fredoka, Mulish, Allura } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";

const fredoka = Fredoka({ variable: "--font-fredoka", subsets: ["latin"] });
const mulish = Mulish({ variable: "--font-mulish", subsets: ["latin"] });
const allura = Allura({ variable: "--font-allura", subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Lau Pastelería | Tortas y postres en Barranquilla",
    template: "%s | Lau Pastelería",
  },
  description: site.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: "/",
    siteName: site.name,
    title: "Lau Pastelería | Tortas y postres en Barranquilla",
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-CO">
      <body
        className={`${fredoka.variable} ${mulish.variable} ${allura.variable} bg-cream text-ink font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}