import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jewelry Care Guide | Sheplus Jewelry",
  description: "Learn how to care for your Sheplus Jewelry and keep it beautiful for years.",
};

export default function JewelryCarePage() {
  return (
    <main className="min-h-screen bg-white">

      {/* 第一屏 — 品牌感 */}
      <div className="bg-[#1c1a2e] min-h-[40vh] flex flex-col items-center justify-center px-6 py-16 text-center">
        <div className="text-amber-400 text-3xl mb-4">✦</div>
        <h1 className="text-3xl md:text-4xl font-bold text-white tracking-wide mb-4">
          Jewelry Care Guide
        </h1>
        <div className="w-16 h-px bg-amber-400 mb-6"></div>
        <p className="text-stone-300 text-base max-w-md leading-relaxed">
          Thank you for choosing SHEPLUS Jewelry.<br />
          With proper care, your jewelry will stay beautiful for years.
        </p>
      </div>

      {/* 第二屏 — 保养方法 */}
      <div className="bg-stone-50 px-6 py-16">
        <div className="max-w-xl mx-auto">
          <h2 className="text-xl font-bold text-stone-800 text-center mb-10">
            How to Care for Your Jewelry
          </h2>
          <div className="space-y-6">
            {[
              {
                icon: "💧",
                title: "Keep It Dry",
                desc: "Remove jewelry before swimming or showering.",
              },
              {
                icon: "🧴",
                title: "Avoid Chemicals",
                desc: "Perfume, lotion, and cleaning agents may damage jewelry.",
              },
              {
                icon: "✨",
                title: "Clean Gently",
                desc: "Use a soft jewelry cloth to keep your jewelry shining.",
              },
              {
                icon: "📦",
                title: "Store Properly",
                desc: "Store jewelry separately in a soft pouch or jewelry box.",
              },
            ].map((tip, i) => (
              <div key={i} className="flex items-start gap-4 bg-white rounded-2xl p-5 shadow-sm border border-stone-100">
                <div className="text-2xl mt-0.5">{tip.icon}</div>
                <div>
                  <h3 className="font-bold text-stone-800 mb-1">{tip.title}</h3>
                  <p className="text-stone-500 text-sm leading-relaxed">{tip.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 第三屏 — 客服 */}
      <div className="bg-white px-6 py-16 text-center">
        <div className="max-w-sm mx-auto">
          <div className="text-4xl mb-4">🤝</div>
          <h2 className="text-xl font-bold text-stone-800 mb-3">Need Help?</h2>
          <p className="text-stone-500 text-sm mb-6 leading-relaxed">
            Our customer care team is here for you.
          </p>
          <a
            href="mailto:service@sheplusjewelry.com"
            className="inline-flex items-center gap-2 bg-[#1c1a2e] text-white font-semibold py-3 px-8 rounded-full text-sm hover:bg-[#2d2b40] transition-colors"
          >
            📧 service@sheplusjewelry.com
          </a>
          <p className="text-stone-400 text-xs mt-5">
            We are happy to assist you with any questions.
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-[#1c1a2e] py-5 text-center">
        <p className="text-stone-400 text-xs">© Sheplus Jewelry — 20 Years of Craftsmanship</p>
      </div>

    </main>
  );
}
