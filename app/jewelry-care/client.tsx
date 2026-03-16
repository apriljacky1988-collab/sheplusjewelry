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
    <div className="bg-white px-6 py-16">
      <div className="max-w-sm mx-auto text-center">
        <div className="text-4xl mb-4">🤝</div>
        <h2 className="text-xl font-bold text-stone-800 mb-2">Need Help?</h2>
        <p className="text-stone-500 text-sm mb-1 leading-relaxed">
          👇 Click here to reach our support team.
        </p>
        <p className="text-stone-400 text-xs mb-8 leading-relaxed">
          Leave your name, order number, and question — we'll respond within 24 hours.
        </p>

        {!showForm && !submitted && (
          <button
            onClick={() => setShowForm(true)}
            className="inline-flex items-center gap-2 bg-[#1c1a2e] text-white font-semibold py-3 px-8 rounded-full text-sm hover:bg-[#2d2b40] transition-colors"
          >
            📧 Contact Our Support Team
          </button>
        )}

        {/* 表单 */}
        {showForm && !submitted && (
          <div className="bg-stone-50 rounded-2xl p-6 text-left border border-stone-100 shadow-sm mt-4">
            <h3 className="font-bold text-stone-800 mb-5">Tell Us What Happened</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1">Your Name *</label>
                <input required type="text" placeholder="Jane Smith" value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                  className="w-full border border-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 bg-white" />
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1">Your Email *</label>
                <input required type="email" placeholder="jane@email.com" value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                  className="w-full border border-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 bg-white" />
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1">Amazon Order ID</label>
                <input type="text" placeholder="e.g. 113-1234567-8901234" value={form.orderId}
                  onChange={e => setForm({ ...form, orderId: e.target.value })}
                  className="w-full border border-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 bg-white" />
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1">What happened? *</label>
                <textarea required rows={4} placeholder="Please describe the issue..." value={form.issue}
                  onChange={e => setForm({ ...form, issue: e.target.value })}
                  className="w-full border border-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 resize-none bg-white" />
              </div>
              <button type="submit" disabled={loading}
                className="w-full bg-[#1c1a2e] hover:bg-[#2d2b40] disabled:bg-stone-400 text-white font-semibold py-3 px-6 rounded-xl transition-colors">
                {loading ? "Sending..." : "Send Message →"}
              </button>
              <button type="button" onClick={() => setShowForm(false)}
                className="w-full text-stone-400 text-sm hover:text-stone-600 py-1">
                ← Cancel
              </button>
            </form>
          </div>
        )}

        {/* 提交成功 */}
        {submitted && (
          <div className="mt-4">
            <div className="text-5xl mb-4">✅</div>
            <h3 className="text-lg font-bold text-stone-800 mb-2">Message Received!</h3>
            <p className="text-stone-500 text-sm mb-2">We'll get back to you within <strong>24 hours</strong>.</p>
            <p className="text-stone-400 text-xs">📧 service@sheplusjewelry.com</p>
          </div>
        )}

        {!showForm && !submitted && (
          <p className="text-stone-400 text-xs mt-4">
            We are happy to assist you with any questions.
          </p>
        )}
      </div>
    </div>
  );
}
