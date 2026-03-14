import type { Metadata } from "next";
import "./globals.css";
import { LangProvider } from "./i18n/LangContext";

export const metadata: Metadata = {
  title: "Sheplus Jewelry | Wholesale Turquoise & Pearl Jewelry Manufacturer",
  description: "20-year jewelry manufacturer supplying US boutiques & Etsy sellers. Genuine turquoise, freshwater pearl & 925 silver. MOQ 1 piece. Free samples available.",
  keywords: "wholesale turquoise jewelry, pearl jewelry manufacturer, small batch jewelry supplier, boutique jewelry wholesale, turquoise necklace wholesale, custom jewelry manufacturer, Etsy jewelry supplier, jewelry OEM ODM",
  metadataBase: new URL("https://www.sheplusjewelry.com"),
  openGraph: {
    title: "Sheplus Jewelry | Wholesale Turquoise & Pearl Jewelry",
    description: "20-year manufacturer. Genuine turquoise & pearl jewelry for US boutiques. MOQ 1 piece for samples.",
    url: "https://www.sheplusjewelry.com",
    siteName: "Sheplus Jewelry",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sheplus Jewelry | Wholesale Jewelry Manufacturer",
    description: "Genuine turquoise & pearl jewelry wholesale. MOQ 1 piece. Free samples for US boutiques.",
  },
  alternates: {
    canonical: "https://www.sheplusjewelry.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}
