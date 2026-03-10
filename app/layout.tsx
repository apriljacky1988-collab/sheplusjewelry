import type { Metadata } from "next";
import "./globals.css";
import { LangProvider } from "./i18n/LangContext";

export const metadata: Metadata = {
  title: "Sheplus Jewelry | Small Batch Custom Jewelry Manufacturer",
  description: "Premium small-batch jewelry manufacturing for US boutiques and Etsy sellers. MOQ: 1 piece for samples. Specializing in turquoise, gold, and custom designs.",
  keywords: "jewelry manufacturer, small batch jewelry, custom jewelry, turquoise necklace, gold jewelry, boutique supplier, Etsy wholesale",
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
