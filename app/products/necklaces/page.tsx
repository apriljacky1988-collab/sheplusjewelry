import { Metadata } from "next";
import CategoryPageClient from "../category-client";

export const metadata: Metadata = {
  title: "Necklaces | Sheplus Jewelry Wholesale",
  description: "Wholesale turquoise and pearl necklaces. MOQ 1 piece. Factory direct from Sheplus Jewelry.",
};

export default function NecklacesPage() {
  return <CategoryPageClient category="Necklaces" />;
}
