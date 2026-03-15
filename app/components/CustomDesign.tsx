export default function CustomDesign() {
  const capabilities = [
    {
      icon: "🎨",
      title: "Trend-Driven Design",
      desc: "Our in-house designers track US & global jewelry trends daily. We translate what's selling on Amazon, Etsy, and boutiques into exclusive designs for your store.",
    },
    {
      icon: "🔬",
      title: "Material Expertise",
      desc: "20 years of working with turquoise, freshwater pearl, brass, sterling silver, and semi-precious stones. We know what looks stunning and sells well.",
    },
    {
      icon: "📐",
      title: "CAD & Prototype",
      desc: "From sketch to 3D CAD to physical sample — we handle the full design process. Get a prototype in your hands before committing to production.",
    },
    {
      icon: "🏷️",
      title: "Private Label & OEM",
      desc: "Sell under your own brand. We create custom packaging, tags, and jewelry pieces exclusively for your store — no one else gets the same design.",
    },
    {
      icon: "📦",
      title: "Small Batch Friendly",
      desc: "Test new designs with MOQ as low as 1 piece. Scale up only when you know it sells. No risk, no wasted inventory.",
    },
    {
      icon: "💰",
      title: "Higher Margin, Unique Products",
      desc: "Custom designs = no price competition. Your customers can't find it elsewhere, giving you full control over pricing and margins.",
    },
  ];

  return (
    <section className="py-20 bg-stone-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-amber-400 text-sm font-semibold tracking-widest uppercase">
            For Boutique Owners & Etsy Sellers
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
            We Design. You Profit.
          </h2>
          <p className="text-stone-300 max-w-2xl mx-auto text-base leading-relaxed">
            Stop competing on price with generic jewelry. Let our design team create exclusive pieces 
            tailored to your store&apos;s aesthetic — pieces your customers can&apos;t find anywhere else.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {capabilities.map((item, i) => (
            <div
              key={i}
              className="bg-stone-800 rounded-2xl p-6 border border-stone-700 hover:border-amber-500 transition-colors"
            >
              <div className="text-3xl mb-3">{item.icon}</div>
              <h3 className="font-bold text-white mb-2">{item.title}</h3>
              <p className="text-stone-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Process Steps */}
        <div className="bg-stone-800 rounded-2xl p-8 mb-10 border border-stone-700">
          <h3 className="text-center font-bold text-lg mb-8 text-amber-400">
            How Custom Design Works
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { step: "01", label: "Share Your Vision", desc: "Send us inspiration photos, your store style, or target price point" },
              { step: "02", label: "Design Proposal", desc: "We create 3–5 exclusive designs within 3 business days" },
              { step: "03", label: "Sample First", desc: "Order 1 sample to approve before any bulk production" },
              { step: "04", label: "Scale Up", desc: "Once it sells, reorder in small batches with fast turnaround" },
            ].map((s, i) => (
              <div key={i}>
                <div className="text-3xl font-bold text-amber-500 mb-2">{s.step}</div>
                <div className="font-semibold text-white text-sm mb-1">{s.label}</div>
                <div className="text-stone-400 text-xs leading-relaxed">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-stone-300 mb-5 text-sm">
            Ready to offer your customers something truly unique?
          </p>
          <a
            href="mailto:anna@sheplusjewelry.com?subject=Custom Design Inquiry&body=Hi Anna,%0A%0AI'm interested in creating custom jewelry designs for my store.%0A%0AStore name:%0AStyle/Aesthetic:%0ATarget price range:%0A%0ALooking forward to hearing from you!"
            className="inline-block bg-amber-500 hover:bg-amber-400 text-stone-900 font-bold py-4 px-10 rounded-full text-sm transition-colors"
          >
            ✦ Start Your Custom Design
          </a>
          <p className="text-stone-500 text-xs mt-3">
            Free design consultation · No minimum commitment
          </p>
        </div>
      </div>
    </section>
  );
}
