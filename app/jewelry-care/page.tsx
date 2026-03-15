"use client";

import { useState } from "react";

export default function JewelryCarePage() {
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
      if (res.ok) {
        setSubmitted(true);
      }
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-stone-50 to-white">
      {/* Header */}
      <div className="bg-white border-b border-stone-200 py-4 px-6">
        <div className="max-w-4xl mx-auto flex items-center justify-center">
          <span className="text-2xl font-bold text-stone-800 tracking-wide">
            ✦ Sheplus Jewelry
          </span>
        </div>
      </div>

      {/* Hero Section */}
      <div className="max-w-2xl mx-auto px-6 py-12 text-center">
        <div className="text-5xl mb-4">💎</div>
        <h1 className="text-3xl font-bold text-stone-800 mb-4">
          How Was Your Experience?
        </h1>
        <p className="text-lg text-stone-600 mb-2">
          Your satisfaction is our top priority.
        </p>
        <p className="text-stone-500">
          We&apos;d love to hear from you — whether you loved it or have concerns.
        </p>
      </div>

      <div className="max-w-2xl mx-auto px-6 pb-12">

        {/* Two Path Cards */}
        {!showForm && !submitted && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Happy Path */}
              <div className="bg-white rounded-2xl shadow-md border border-stone-100 p-8 text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">🌟</div>
                <h2 className="text-xl font-bold text-stone-800 mb-3">
                  Loving Your Jewelry?
                </h2>
                <p className="text-stone-500 text-sm mb-6 leading-relaxed">
                  Your review helps other shoppers discover us and means the world to our small team!
                </p>
                <a
                  href="https://www.amazon.com/review/create-review?asin=B0FNWV1T9Q"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 px-6 rounded-xl transition-colors"
                >
                  ⭐ Leave a Review
                </a>
                <p className="text-xs text-stone-400 mt-3">Takes less than 1 minute</p>
              </div>

              {/* Unhappy Path */}
              <div className="bg-white rounded-2xl shadow-md border border-stone-100 p-8 text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">🤝</div>
                <h2 className="text-xl font-bold text-stone-800 mb-3">
                  Have a Concern?
                </h2>
                <p className="text-stone-500 text-sm mb-6 leading-relaxed">
                  Please contact us first — we&apos;ll make it right with a replacement or full refund. Guaranteed.
                </p>
                <button
                  onClick={() => setShowForm(true)}
                  className="block w-full bg-stone-700 hover:bg-stone-800 text-white font-semibold py-3 px-6 rounded-xl transition-colors"
                >
                  ✉️ Contact Us First
                </button>
                <p className="text-xs text-stone-400 mt-3">Reply within 24 hours</p>
              </div>
            </div>

            {/* Trust Section */}
            <div className="mt-10 bg-amber-50 rounded-2xl p-6 text-center border border-amber-100">
              <h3 className="font-bold text-stone-800 mb-4">Our Promise to You</h3>
              <div className="grid grid-cols-3 gap-4 text-sm text-stone-600">
                <div>
                  <div className="text-2xl mb-1">🔄</div>
                  <div className="font-medium">Free Replacement</div>
                  <div className="text-xs text-stone-400">If item is damaged</div>
                </div>
                <div>
                  <div className="text-2xl mb-1">💰</div>
                  <div className="font-medium">Full Refund</div>
                  <div className="text-xs text-stone-400">No questions asked</div>
                </div>
                <div>
                  <div className="text-2xl mb-1">⚡</div>
                  <div className="font-medium">24hr Response</div>
                  <div className="text-xs text-stone-400">Fast support</div>
                </div>
              </div>
            </div>
          </>
        )}

        {/* Contact Form */}
        {showForm && !submitted && (
          <div className="bg-white rounded-2xl shadow-md border border-stone-100 p-8">
            <button
              onClick={() => setShowForm(false)}
              className="text-stone-400 hover:text-stone-600 text-sm mb-4 flex items-center gap-1"
            >
              ← Back
            </button>
            <h2 className="text-xl font-bold text-stone-800 mb-2">Tell Us What Happened</h2>
            <p className="text-stone-500 text-sm mb-6">
              We&apos;ll respond within 24 hours and make it right — replacement or full refund, your choice.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1">Your Name *</label>
                <input
                  required
                  type="text"
                  placeholder="Jane Smith"
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                  className="w-full border border-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1">Your Email *</label>
                <input
                  required
                  type="email"
                  placeholder="jane@email.com"
                  value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                  className="w-full border border-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1">Amazon Order ID</label>
                <input
                  type="text"
                  placeholder="e.g. 113-1234567-8901234"
                  value={form.orderId}
                  onChange={e => setForm({ ...form, orderId: e.target.value })}
                  className="w-full border border-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1">What happened? *</label>
                <textarea
                  required
                  rows={4}
                  placeholder="Please describe the issue with your order..."
                  value={form.issue}
                  onChange={e => setForm({ ...form, issue: e.target.value })}
                  className="w-full border border-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-stone-700 hover:bg-stone-800 disabled:bg-stone-400 text-white font-semibold py-3 px-6 rounded-xl transition-colors"
              >
                {loading ? "Sending..." : "Send Message →"}
              </button>
            </form>
          </div>
        )}

        {/* Success State */}
        {submitted && (
          <div className="bg-white rounded-2xl shadow-md border border-stone-100 p-12 text-center">
            <div className="text-5xl mb-4">✅</div>
            <h2 className="text-2xl font-bold text-stone-800 mb-3">Message Received!</h2>
            <p className="text-stone-500 mb-2">Thank you for reaching out.</p>
            <p className="text-stone-500 mb-6">
              We&apos;ll get back to you within <strong>24 hours</strong> with a solution.
            </p>
            <p className="text-sm text-stone-400">
              📧 service@sheplusjewelry.com
            </p>
          </div>
        )}

        {/* Contact Info */}
        {!showForm && !submitted && (
          <div className="mt-6 text-center text-stone-400 text-sm">
            <p>📧 service@sheplusjewelry.com</p>
            <p className="mt-1">🌐 sheplusjewelry.com</p>
          </div>
        )}
      </div>
    </main>
  );
}
