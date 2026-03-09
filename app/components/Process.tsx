"use client";

const steps = [
  {
    number: "01",
    title: "Send Your Design",
    description: "Share your sketch, photo, or reference image. Our design team reviews it within 24 hours."
  },
  {
    number: "02",
    title: "Get Sample Quote",
    description: "We provide detailed pricing for your sample (typically $50-150) including materials and shipping."
  },
  {
    number: "03",
    title: "Sample Production",
    description: "Your sample is handcrafted in 7-10 days. We send photos for approval before shipping."
  },
  {
    number: "04",
    title: "Approve & Order",
    description: "Love the sample? Place your production order. MOQ as low as 10-50 pieces depending on design."
  }
];

export default function Process() {
  return (
    <section id="process" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-teal-600 font-semibold text-sm uppercase tracking-wide">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2 mb-4">
            From Idea to Reality
          </h2>
          <p className="text-lg text-gray-600">
            Simple 4-step process designed for boutique owners who need flexibility and speed.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="text-6xl font-bold text-teal-100 mb-4">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-teal-100 -ml-4">
                  <div className="absolute right-0 -top-1.5 w-3 h-3 bg-teal-200 rounded-full"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
