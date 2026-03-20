import { Metadata } from "next";
import CategoryPageClient from "../category-client";

export const metadata: Metadata = {
  title: "Bracelets | Sheplus Jewelry Wholesale",
  description: "Wholesale turquoise and pearl bracelets. MOQ 1 piece. Factory direct from Sheplus Jewelry.",
};

export default function BraceletsPage() {
  return <CategoryPageClient category="Bracelets" />;
}
