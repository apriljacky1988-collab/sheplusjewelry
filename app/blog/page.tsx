import Link from 'next/link'
import { blogPosts } from '../data/blog'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog | Sheplus Jewelry — Wholesale Jewelry Insights',
  description: 'Expert guides for boutique owners and Etsy sellers on sourcing turquoise jewelry, industry trends, and growing your jewelry business.',
}

export default function BlogPage() {
  const categoryColors: Record<string, string> = {
    'Sourcing Guide': 'bg-blue-100 text-blue-800',
    'Jewelry Education': 'bg-purple-100 text-purple-800',
    'Business Guide': 'bg-green-100 text-green-800',
    'Trends': 'bg-amber-100 text-amber-800',
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-[#1a1a2e] text-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#c9a84c] text-sm font-semibold tracking-widest uppercase mb-3">Sheplus Journal</p>
          <h1 className="text-4xl font-bold mb-4">Jewelry Business Insights</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Practical guides for boutique owners and Etsy sellers — sourcing, trends, and growing your jewelry business.
          </p>
        </div>
      </section>

      {/* Articles */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="grid gap-8">
          {blogPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
              <article className="border border-gray-200 rounded-xl p-6 hover:border-[#c9a84c] hover:shadow-md transition-all duration-200">
                <div className="flex items-center gap-3 mb-3">
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${categoryColors[post.category] || 'bg-gray-100 text-gray-800'}`}>
                    {post.category}
                  </span>
                  <span className="text-gray-400 text-sm">{post.readTime}</span>
                  <span className="text-gray-400 text-sm">{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                </div>
                <h2 className="text-xl font-bold text-gray-900 group-hover:text-[#c9a84c] transition-colors mb-2 leading-snug">
                  {post.title}
                </h2>
                <p className="text-gray-500 leading-relaxed">{post.description}</p>
                <div className="mt-4 text-[#c9a84c] text-sm font-semibold flex items-center gap-1">
                  Read article <span>→</span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#f8f4ee] py-12 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-[#1a1a2e] mb-3">Ready to Source Quality Jewelry?</h2>
          <p className="text-gray-600 mb-6">Browse our collection or contact us for samples. MOQ starts at 1 piece.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/products" className="bg-[#1a1a2e] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#2a2a4e] transition">
              View Products
            </Link>
            <a href="mailto:anna@sheplusjewelry.com?subject=Sample%20Request%20-%20Sheplus%20Jewelry&body=Hi%20Anna%2C%0A%0AI'm%20interested%20in%20ordering%20samples.%0A%0AMy%20store%3A%20%0AProducts%20interested%20in%3A%20%0AQuantity%3A%20%0A%0AThank%20you!" className="border-2 border-[#1a1a2e] text-[#1a1a2e] px-6 py-3 rounded-lg font-semibold hover:bg-[#1a1a2e] hover:text-white transition">
              Get Samples
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
