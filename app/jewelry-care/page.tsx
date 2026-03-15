import { Metadata } from "next";
import JewelryCareClient from "./client";

export const metadata: Metadata = {
  title: "Jewelry Care Guide | Sheplus Jewelry",
  description: "Learn how to care for your Sheplus Jewelry. Plus, share your experience and get support.",
};

export default function JewelryCarePage() {
  return <JewelryCareClient />;
}
