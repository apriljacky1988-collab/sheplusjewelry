import { Metadata } from "next";
import CustomDesignClient from "./client";

export const metadata: Metadata = {
  title: "Custom Design | Sheplus Jewelry",
  description: "Start your custom jewelry design with Sheplus. Free consultation, MOQ 1 piece, private label available.",
};

export default function CustomDesignPage() {
  return <CustomDesignClient />;
}
