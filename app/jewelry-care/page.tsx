import { Metadata } from "next";
import JewelryCareClient from "./client";

export const metadata: Metadata = {
  title: "Jewelry Care Guide | Sheplus Jewelry",
  description: "Learn how to care for your Sheplus Jewelry. Plus, share your experience and get support.",
};

const careTips = [
  {
    icon: "💧",
    title: "Keep It Dry",
    desc: "Remove jewelry before swimming, showering, or exercising. Water and sweat accelerate tarnishing.",
  },
  {
    icon: "🧴",
    title: "Avoid Chemicals",
    desc: "Keep away from perfume, lotion, hairspray, and household cleaners. Apply cosmetics before putting on jewelry.",
  },
  {
    icon: "✨",
    title: "Clean Gently",
    desc: "Use a soft, dry cloth to wipe after wearing. For deeper cleaning, use mild soap and warm water, then dry thoroughly.",
  },
  {
    icon: "📦",
    title: "Store Properly",
    desc: "Store in a cool, dry place. Keep pieces separate to avoid scratching. Use the pouch or box provided.",
  },
  {
    icon: "🪨",
    title: "Care for Turquoise",
    desc: "Turquoise is porous — avoid prolonged water exposure and direct sunlight. Wipe clean with a dry cloth only.",
  },
  {
    icon: "🌊",
    title: "Care for Pearls",
    desc: "Pearls are delicate — put them on last, take them off first. Wipe with a damp cloth after wearing. Store flat.",
  },
];

export default function JewelryCarePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-stone-50 to-white">
      {/* Header */}
      <div className="bg-[#1c1a2e] py-5 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-2xl font-bold text-amber-300 tracking-widest">
            ✦ SHEPLUS JEWELRY
          </span>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-5 py-10">
        {/* Hero */}
        <div className="text-center mb-10">
          <div className="text-5xl mb-3">💎</div>
          <h1 className="text-2xl font-bold text-stone-800 mb-2">Jewelry Care Guide</h1>
          <p className="text-stone-500 text-sm">
            Thank you for choosing Sheplus Jewelry. Follow these tips to keep your pieces beautiful for years.
          </p>
        </div>

        {/* Care Tips — Static Server Rendered */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {careTips.map((tip, i) => (
            <div key={i} className="bg-white rounded-2xl border border-stone-100 shadow-sm p-5">
              <div className="text-3xl mb-2">{tip.icon}</div>
              <h3 className="font-bold text-stone-800 mb-1 text-sm">{tip.title}</h3>
              <p className="text-stone-500 text-xs leading-relaxed">{tip.desc}</p>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="flex items-center gap-3 mb-8">
          <div className="flex-1 h-px bg-stone-200"></div>
          <span className="text-stone-400 text-xs font-medium">YOUR EXPERIENCE MATTERS</span>
          <div className="flex-1 h-px bg-stone-200"></div>
        </div>

        {/* Interactive part — Client Component */}
        <JewelryCareClient />

        {/* Footer */}
        <div className="text-center text-stone-400 text-xs mt-8">
          <p>📧 service@sheplusjewelry.com &nbsp;|&nbsp; 🌐 sheplusjewelry.com</p>
          <p className="mt-1">© Sheplus Jewelry — 20 Years of Craftsmanship</p>
        </div>
      </div>
    </main>
  );
}
