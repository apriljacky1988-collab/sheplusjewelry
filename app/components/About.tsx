"use client";

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-teal-900 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-teal-400 font-semibold text-sm uppercase tracking-wide">
              About Sheplus
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-6">
              A Family Workshop Built on Craftsmanship
            </h2>
            <div className="space-y-4 text-gray-300">
              <p>
                Founded 15 years ago by a master jeweler and his son, Sheplus Jewelry began as a small workshop serving local boutiques. Today, we ship to independent retailers across the US, UK, and Australia.
              </p>
              <p>
                But our mission never changed: serve the boutique owner who cares about every piece. The Etsy seller building their dream. The designer with a vision.
              </p>
              <p>
                We never forgot who we work for. Not big corporations. Not mass retailers. We work for you.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-8 mt-10">
              <div className="text-center">
                <div className="text-4xl font-bold text-teal-400">15+</div>
                <div className="text-sm text-gray-400 mt-1">Years</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-teal-400">50+</div>
                <div className="text-sm text-gray-400 mt-1">Craftsmen</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-teal-400">500+</div>
                <div className="text-sm text-gray-400 mt-1">Clients</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-teal-800 to-gray-800 rounded-2xl flex items-center justify-center">
              <span className="text-gray-500 text-lg">Workshop Image Placeholder</span>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white text-gray-900 p-6 rounded-xl shadow-xl max-w-xs">
              <p className="text-sm italic">
                &ldquo;The quality exceeded what I was getting from my US supplier at half the cost.&rdquo;
              </p>
              <p className="text-xs text-gray-500 mt-2">— Boutique Owner, California</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
