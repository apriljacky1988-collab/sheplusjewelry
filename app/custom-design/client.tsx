"use client";

import { useState } from "react";

export default function CustomDesignClient() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "", email: "", store: "", style: "", budget: "", message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch("/api/care-contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          orderId: `Store: ${form.store} | Budget: ${form.budget}`,
          issue: `Style: ${form.style}\n\n${form.message}`,
        }),
      });
      setSubmitted(true);
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-stone-900">
      {/* Header */}
      <div className="bg-[#1c1a2e] py-5 px-6 border-b border-stone-700">
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <a href="/" className="text-amber-400 font-bold tracking-widest text-lg">✦ SHEPLUS JEWELRY</a>
          <a href="/" className="text-stone-400 hover:text-white text-sm transition">← Back to Home</a>
        </div>
      </div>

      <div className="max-w-xl mx-auto px-5 py-12">
        {/* Hero */}
        <div className="text-center mb-10">
          <div className="text-5xl mb-4">🎨</div>
          <h1 className="text-3xl font-bold text-white mb-3">Start Your Custom Design</h1>
          <p className="text-stone-400 text-sm leading-relaxed">
            Tell us about your store and vision. Our design team will respond with 3–5 exclusive proposals within 3 business days.
          </p>
          <div className="flex justify-center gap-6 mt-5 text-xs text-stone-500">
            <span className="flex items-center gap-1">✓ Free consultation</span>
            <span className="flex items-center gap-1">✓ MOQ 1 piece</span>
            <span className="flex items-center gap-1">✓ Private label</span>
          </div>
        </div>

        {!submitted ? (
          <div className="bg-stone-800 rounded-2xl p-7 border border-stone-700">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-stone-300 mb-1">Your Name *</label>
                  <input required type="text" placeholder="Jane Smith" value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-stone-700 border border-stone-600 rounded-xl px-4 py-3 text-sm text-white placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-amber-400" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-300 mb-1">Your Email *</label>
                  <input required type="email" placeholder="jane@store.com" value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-stone-700 border border-stone-600 rounded-xl px-4 py-3 text-sm text-white placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-amber-400" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-stone-300 mb-1">Store Name / Platform</label>
                <input type="text" placeholder="e.g. My Boutique on Etsy / Amazon / Instagram" value={form.store}
                  onChange={e => setForm({ ...form, store: e.target.value })}
                  className="w-full bg-stone-700 border border-stone-600 rounded-xl px-4 py-3 text-sm text-white placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-amber-400" />
              </div>

              <div>
                <label className="block text-sm font-medium text-stone-300 mb-1">Style / Aesthetic *</label>
                <input required type="text" placeholder="e.g. Boho, minimalist, western, pearl, turquoise..." value={form.style}
                  onChange={e => setForm({ ...form, style: e.target.value })}
                  className="w-full bg-stone-700 border border-stone-600 rounded-xl px-4 py-3 text-sm text-white placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-amber-400" />
              </div>

              <div>
                <label className="block text-sm font-medium text-stone-300 mb-1">Target Price Range (per piece)</label>
                <select value={form.budget} onChange={e => setForm({ ...form, budget: e.target.value })}
                  className="w-full bg-stone-700 border border-stone-600 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-amber-400">
                  <option value="">Select a range...</option>
                  <option value="Under $10">Under $10</option>
                  <option value="$10–$20">$10–$20</option>
                  <option value="$20–$50">$20–$50</option>
                  <option value="$50–$100">$50–$100</option>
                  <option value="Over $100">Over $100</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-stone-300 mb-1">Additional Details</label>
                <textarea rows={4} placeholder="Any specific requirements, inspiration, or questions..." value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-stone-700 border border-stone-600 rounded-xl px-4 py-3 text-sm text-white placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-amber-400 resize-none" />
              </div>

              <button type="submit" disabled={loading}
                className="w-full bg-amber-500 hover:bg-amber-400 disabled:bg-stone-600 text-stone-900 font-bold py-4 rounded-xl transition-colors text-sm">
                {loading ? "Sending..." : "✦ Send My Design Request →"}
              </button>
            </form>
          </div>
        ) : (
          <div className="bg-stone-800 rounded-2xl p-12 text-center border border-stone-700">
            <div className="text-5xl mb-4">✅</div>
            <h2 className="text-xl font-bold text-white mb-2">Request Received!</h2>
            <p className="text-stone-400 mb-6 text-sm">Our design team will send you 3–5 exclusive proposals within <strong className="text-white">3 business days</strong>.</p>
            <p className="text-stone-500 text-xs">📧 anna@sheplusjewelry.com</p>
            <a href="/" className="inline-block mt-6 text-amber-400 hover:text-amber-300 text-sm">← Back to Home</a>
          </div>
        )}

        <p className="text-center text-stone-600 text-xs mt-6">
          Or email us directly: anna@sheplusjewelry.com
        </p>
      </div>
    </main>
  );
}
