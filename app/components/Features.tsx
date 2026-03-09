"use client";


const features = [
  {
    title: "Small Batch Production",
    description: "MOQ starts at just 1 piece for samples. Perfect for boutiques testing new designs without committing to large orders.",
    icon: "📦"
  },
  {
    title: "Custom Design Service",
    description: "From sketch to finished piece in 14 days. Our design team works with you to bring your vision to life.",
    icon: "✏️"
  },
  {
    title: "Premium Materials",
    description: "Genuine turquoise, 14K gold plating, nickel-free & lead-free. Quality that your customers will notice.",
    icon: "💎"
  },
  {
    title: "Fast Turnaround",
    description: "7-day sample production, 14-21 days for small batches. Real-time updates throughout the process.",
    icon: "⚡"
  },
  {
    title: "White Label Ready",
    description: "Custom packaging with your branding. Your customers never know we exist.",
    icon: "🏷️"
  },
  {
    title: "Dedicated Support",
    description: "24/7 communication via email, WhatsApp, or video call. We work on your schedule.",
    icon: "🤝"
  }
];

export default function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Why Boutiques Choose Sheplus
          </h2>
          <p className="text-lg text-gray-600">
            We understand the challenges of running a boutique. That&apos;s why we built our factory around your needs.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-8 rounded-2xl bg-gray-50 hover:bg-teal-50 transition duration-300"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-teal-700">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
