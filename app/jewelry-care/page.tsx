import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jewelry Care Guide | Sheplus Jewelry",
  description: "Learn how to care for your jewelry and keep it beautiful for years.",
};

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function JewelryCarePage() {
  return (
    <main className="min-h-screen bg-stone-50">
      <div className="max-w-2xl mx-auto px-6 py-16">
        <h1 className="text-2xl font-bold text-stone-800 text-center mb-12">
          Jewelry Care Guide
        </h1>
        
        <div className="space-y-6">
          <section className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100">
            <h2 className="text-lg font-bold text-stone-800 mb-4 flex items-center gap-2">
              <span>💧</span> Keep It Dry
            </h2>
            <p className="text-stone-600 leading-relaxed">
              Remove jewelry before swimming, showering, or washing hands. Water can damage metals and stones over time.
            </p>
          </section>

          <section className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100">
            <h2 className="text-lg font-bold text-stone-800 mb-4 flex items-center gap-2">
              <span>🧴</span> Avoid Chemicals
            </h2>
            <p className="text-stone-600 leading-relaxed">
              Perfume, lotion, hairspray, and cleaning agents may damage jewelry. Put jewelry on last when getting ready.
            </p>
          </section>

          <section className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100">
            <h2 className="text-lg font-bold text-stone-800 mb-4 flex items-center gap-2">
              <span>✨</span> Clean Gently
            </h2>
            <p className="text-stone-600 leading-relaxed">
              Use a soft jewelry cloth to gently wipe your jewelry after wearing. For deeper cleaning, use mild soap and lukewarm water, then dry thoroughly.
            </p>
          </section>

          <section className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100">
            <h2 className="text-lg font-bold text-stone-800 mb-4 flex items-center gap-2">
              <span>📦</span> Store Properly
            </h2>
            <p className="text-stone-600 leading-relaxed">
              Store jewelry separately in a soft pouch or jewelry box to prevent scratches and tangling. Keep away from direct sunlight and humidity.
            </p>
          </section>

          <section className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100">
            <h2 className="text-lg font-bold text-stone-800 mb-4 flex items-center gap-2">
              <span>🪨</span> Turquoise Care
            </h2>
            <p className="text-stone-600 leading-relaxed mb-3">
              Turquoise is porous and delicate. Special care is required:
            </p>
            <ul className="list-disc list-inside text-stone-600 space-y-2 ml-2">
              <li>Avoid prolonged water exposure — never soak turquoise</li>
              <li>Keep away from direct sunlight to prevent color fading</li>
              <li>Wipe clean with a dry soft cloth only — no chemicals</li>
              <li>Store separately as turquoise can scratch easily</li>
              <li>Remove before swimming, bathing, or exercising</li>
            </ul>
          </section>

          <section className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100">
            <h2 className="text-lg font-bold text-stone-800 mb-4 flex items-center gap-2">
              <span>🌊</span> Pearl Care
            </h2>
            <p className="text-stone-600 leading-relaxed mb-3">
              Pearls are organic gems that require gentle handling:
            </p>
            <ul className="list-disc list-inside text-stone-600 space-y-2 ml-2">
              <li>Put pearls on last, take them off first</li>
              <li>Wipe with a soft damp cloth after wearing</li>
              <li>Store flat in a soft pouch — hanging can stretch the strand</li>
              <li>Keep away from perfume, cosmetics, and hairspray</li>
              <li>Have restrung every 1-2 years if worn frequently</li>
            </ul>
          </section>

          <section className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100">
            <h2 className="text-lg font-bold text-stone-800 mb-4 flex items-center gap-2">
              <span>✨</span> Sterling Silver & Gold Care
            </h2>
            <p className="text-stone-600 leading-relaxed mb-3">
              Keep your silver and gold jewelry looking new:
            </p>
            <ul className="list-disc list-inside text-stone-600 space-y-2 ml-2">
              <li>Sterling silver tarnishes naturally — polish with silver cloth regularly</li>
              <li>Store silver in anti-tarnish bags or with silica gel packets</li>
              <li>Gold is softer than it appears — avoid impacts and scratches</li>
              <li>Remove gold jewelry before heavy physical activities</li>
            </ul>
          </section>

          <section className="bg-amber-50 rounded-2xl p-6 border border-amber-100">
            <h2 className="text-lg font-bold text-stone-800 mb-3">
              When to Seek Professional Cleaning
            </h2>
            <p className="text-stone-600 leading-relaxed">
              If your jewelry has loose stones, damaged clasps, or deep tarnish that home cleaning cannot remove, consult a professional jeweler. For valuable pieces, annual professional inspection is recommended.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
