import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Customer Care | Sheplus Jewelry",
  description: "We're here to help! Contact our customer care team for any questions about your Sheplus Jewelry order.",
};

export default function JewelryCarePage() {
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
          We'd love to hear from you — whether you loved it or have concerns.
        </p>
      </div>

      {/* Two Path Cards */}
      <div className="max-w-2xl mx-auto px-6 pb-12">
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
              Please contact us first — we'll make it right with a replacement or full refund. Guaranteed.
            </p>
            <a
              href="mailto:service@sheplusjewelry.com?subject=Order%20Issue%20-%20Amazon%20Purchase&body=Hi%20Sheplus%20Team%2C%0A%0AOrder%20ID%3A%20%5Byour%20order%20number%5D%0A%0AIssue%3A%20%5Bplease%20describe%5D%0A%0AThank%20you!"
              className="block w-full bg-stone-700 hover:bg-stone-800 text-white font-semibold py-3 px-6 rounded-xl transition-colors"
            >
              ✉️ Contact Us First
            </a>
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

        {/* Contact Info */}
        <div className="mt-6 text-center text-stone-400 text-sm">
          <p>📧 service@sheplusjewelry.com</p>
          <p className="mt-1">🌐 sheplusjewelry.com</p>
        </div>
      </div>
    </main>
  );
}
