"use client";

import { useState } from "react";

export default function JewelryCareClient() {
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", orderId: "", issue: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/care-contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) setSubmitted(true);
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  return (
    <>
      {/* Two Path Cards */}
      {!showForm && !submitted && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
          <div className="bg-white rounded-2xl shadow-md border border-stone-100 p-6 text-center hover:shadow-lg transition-shadow">
            <div className="text-3xl mb-3">🌟</div>
            <h2 className="text-base font-bold text-stone-800 mb-2">Loving Your Jewelry?</h2>
            <p className="text-stone-500 text-xs mb-5 leading-relaxed">
              A quick review means the world to our small team — and helps others find us!
            </p>
            <a
              href="https://www.amazon.com/review/create-review?asin=B0FNWV1T9Q"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 px-4 rounded-xl transition-colors text-sm"
            >
              ⭐ Leave a Review
            </a>
            <p className="text-xs text-stone-400 mt-2">Sign in to Amazon, then review directly</p>
          </div>

          <div className="bg-white rounded-2xl shadow-md border border-stone-100 p-6 text-center hover:shadow-lg transition-shadow">
            <div className="text-3xl mb-3">🤝</div>
            <h2 className="text-base font-bold text-stone-800 mb-2">Have a Concern?</h2>
            <p className="text-stone-500 text-xs mb-5 leading-relaxed">
              Please contact us first — free replacement or full refund, guaranteed.
            </p>
            <button
              onClick={() => setShowForm(true)}
              className="w-full bg-[#1c1a2e] hover:bg-[#2d2b40] text-white font-semibold py-3 px-4 rounded-xl transition-colors text-sm"
            >
              ✉️ Contact Us First
            </button>
            <p className="text-xs text-stone-400 mt-2">Reply within 24 hours</p>
          </div>
        </div>
      )}

      {/* Contact Form */}
      {showForm && !submitted && (
        <div className="bg-white rounded-2xl shadow-md border border-stone-100 p-7 mb-8">
          <button onClick={() => setShowForm(false)} className="text-stone-400 hover:text-stone-600 text-sm mb-4">
            ← Back
          </button>
          <h2 className="text-lg font-bold text-stone-800 mb-1">Tell Us What Happened</h2>
          <p className="text-stone-500 text-sm mb-5">We&apos;ll respond within 24 hours — replacement or full refund, your choice.</p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-1">Your Name *</label>
              <input required type="text" placeholder="Jane Smith" value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })}
                className="w-full border border-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400" />
            </div>
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-1">Your Email *</label>
              <input required type="email" placeholder="jane@email.com" value={form.email}
                onChange={e => setForm({ ...form, email: e.target.value })}
                className="w-full border border-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400" />
            </div>
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-1">Amazon Order ID</label>
              <input type="text" placeholder="e.g. 113-1234567-8901234" value={form.orderId}
                onChange={e => setForm({ ...form, orderId: e.target.value })}
                className="w-full border border-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400" />
            </div>
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-1">What happened? *</label>
              <textarea required rows={4} placeholder="Please describe the issue..." value={form.issue}
                onChange={e => setForm({ ...form, issue: e.target.value })}
                className="w-full border border-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 resize-none" />
            </div>
            <button type="submit" disabled={loading}
              className="w-full bg-[#1c1a2e] hover:bg-[#2d2b40] disabled:bg-stone-400 text-white font-semibold py-3 px-6 rounded-xl transition-colors">
              {loading ? "Sending..." : "Send Message →"}
            </button>
          </form>
        </div>
      )}

      {/* Success */}
      {submitted && (
        <div className="bg-white rounded-2xl shadow-md p-12 text-center mb-8">
          <div className="text-5xl mb-4">✅</div>
          <h2 className="text-xl font-bold text-stone-800 mb-2">Message Received!</h2>
          <p className="text-stone-500 mb-6">We&apos;ll get back to you within <strong>24 hours</strong>.</p>
          <p className="text-sm text-stone-400">📧 service@sheplusjewelry.com</p>
        </div>
      )}

      {/* Promise Bar */}
      {!showForm && !submitted && (
        <div className="bg-amber-50 rounded-2xl p-5 text-center border border-amber-100">
          <h3 className="font-bold text-stone-800 mb-3 text-sm">Our Promise to You</h3>
          <div className="grid grid-cols-3 gap-3 text-xs text-stone-600">
            <div><div className="text-xl mb-1">🔄</div><div className="font-medium">Free Replacement</div></div>
            <div><div className="text-xl mb-1">💰</div><div className="font-medium">Full Refund</div></div>
            <div><div className="text-xl mb-1">⚡</div><div className="font-medium">24hr Support</div></div>
          </div>
        </div>
      )}
    </>
  );
}
