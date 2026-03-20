import { Metadata } from "next";
import CategoryPageClient from "../category-client";

export const metadata: Metadata = {
  title: "Earrings | Sheplus Jewelry Wholesale",
  description: "Wholesale turquoise and pearl earrings. MOQ 1 piece. Factory direct from Sheplus Jewelry.",
};

export default function EarringsPage() {
  return <CategoryPageClient category="Earrings" />;
}
