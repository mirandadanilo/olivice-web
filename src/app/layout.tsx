import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "./components/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://olivice.pe"),
  title: {
    default: "OLIVICE | Perú en tus manos",
    template: "%s | OLIVICE",
  },
  description:
    "OLIVICE: lleva contigo los paisajes y las historias del Perú. Descubre nuestras botellas y colección de stickers inspirados en los 24 departamentos.",
  openGraph: {
    type: "website",
    url: "https://olivice.pe",
    siteName: "OLIVICE",
    locale: "es_PE",
    title: "OLIVICE | Perú en tus manos",
    description:
      "OLIVICE: lleva contigo los paisajes y las historias del Perú. Descubre nuestras botellas y colección de stickers inspirados en los 24 departamentos.",
    images: [
      {
        url: "/images/logo-azul.png",
        alt: "OLIVICE - Siempre contigo",
      },
    ],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
