"use client";

import Link from "next/link";
import { useLang } from "../i18n/LangContext";
import { products } from "../data/products";

const categoryMap: Record<string, { es: string; title: string; desc: string }> = {
  Necklaces: { es: "Collares", title: "Necklaces", desc: "Turquoise & Pearl Necklaces — Factory Direct, MOQ 1pc" },
  Earrings:  { es: "Aretes",   title: "Earrings",  desc: "Turquoise & Pearl Earrings — Factory Direct, MOQ 1pc" },
  Bracelets: { es: "Pulseras", title: "Bracelets", desc: "Turquoise & Pearl Bracelets — Factory Direct, MOQ 1pc" },
};

export default function CategoryPageClient({ category }: { category: string }) {
  const { lang } = useLang();
  const info = categoryMap[category];

  const filtered = products.filter(
    (p) => p.category.en === category
  );

  return (
    <main className="min-h-screen bg-stone-50">
      {/* Header */}
      <div className="bg-[#1c1a2e] py-12 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="text-amber-400 text-sm hover:text-amber-300 mb-4 inline-block">← Back to Home</Link>
          <h1 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-3">
            {lang === "es" ? info.es : info.title}
          </h1>
          <p className="text-stone-400 text-sm">{info.desc}</p>
          {/* Sub-nav */}
          <div className="flex justify-center gap-4 mt-6">
            {["Necklaces","Earrings","Bracelets"].map((cat) => (
              <Link
                key={cat}
                href={`/products/${cat.toLowerCase()}`}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  cat === category
                    ? "bg-amber-500 text-stone-900"
                    : "bg-stone-700 text-stone-300 hover:bg-stone-600"
                }`}
              >
                {lang === "es" ? categoryMap[cat].es : cat}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        {filtered.length === 0 ? (
          <div className="text-center text-stone-400 py-20">
            <div className="text-5xl mb-4">🔍</div>
            <p>No products in this category yet. Check back soon!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((product) => (
              <Link key={product.id} href={`/products/${product.id}`} className="group bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden border border-stone-100">
                <div className="aspect-square overflow-hidden bg-stone-100">
                  <img
                    src={product.image}
                    alt={product.name[lang]}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5">
                  <div className="text-xs text-teal-600 font-medium mb-1">
                    {product.category[lang]}
                  </div>
                  <h3 className="font-bold text-stone-800 mb-1 group-hover:text-teal-600 transition-colors">
                    {product.name[lang]}
                  </h3>
                  <p className="text-stone-500 text-xs mb-3 line-clamp-2">
                    {product.description[lang]}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-teal-600 font-bold text-sm">{product.price}</span>
                    <span className="text-stone-400 text-xs">MOQ: {product.moq}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* CTA */}
        <div className="mt-16 bg-[#1c1a2e] rounded-2xl p-8 text-center">
          <h2 className="text-xl font-bold text-white mb-2">Need Custom Designs?</h2>
          <p className="text-stone-400 text-sm mb-5">We create exclusive pieces tailored to your store. MOQ 1pc, fast turnaround.</p>
          <Link href="/custom-design" className="inline-block bg-amber-500 hover:bg-amber-400 text-stone-900 font-bold py-3 px-8 rounded-full text-sm transition-colors">
            ✦ Start Custom Design
          </Link>
        </div>
      </div>
    </main>
  );
}
