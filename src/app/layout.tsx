import type { Metadata } from "next";
import { Fredoka, Mulish, Allura } from "next/font/google";
import "./globals.css";

const fredoka = Fredoka({ variable: "--font-fredoka", subsets: ["latin"] });
const mulish = Mulish({ variable: "--font-mulish", subsets: ["latin"] });
const allura = Allura({ variable: "--font-allura", subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Lau Pastelería | Tortas y postres en Barranquilla",
  description:
    "Tortas personalizadas, postres, cajas sorpresa y catering para empresas en Barranquilla. Haz tu pedido por WhatsApp.",
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