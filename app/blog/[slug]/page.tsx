import { blogPosts } from '../../data/blog'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug)
  if (!post) return {}
  return {
    title: `${post.title} | Sheplus Jewelry`,
    description: post.description,
    alternates: { canonical: `https://www.sheplusjewelry.com/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
    },
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug)
  if (!post) notFound()

  const categoryColors: Record<string, string> = {
    'Sourcing Guide': 'bg-blue-100 text-blue-800',
    'Jewelry Education': 'bg-purple-100 text-purple-800',
    'Business Guide': 'bg-green-100 text-green-800',
    'Trends': 'bg-amber-100 text-amber-800',
  }

  // Convert markdown-like content to HTML
  const renderContent = (content: string) => {
    return content
      .split('\n')
      .map((line, i) => {
        if (line.startsWith('## ')) return <h2 key={i} className="text-2xl font-bold text-[#1a1a2e] mt-10 mb-4">{line.slice(3)}</h2>
        if (line.startsWith('### ')) return <h3 key={i} className="text-xl font-bold text-[#1a1a2e] mt-8 mb-3">{line.slice(4)}</h3>
        if (line.startsWith('**') && line.endsWith('**')) return <p key={i} className="font-bold text-gray-900 mt-4 mb-2">{line.slice(2, -2)}</p>
        if (line.startsWith('- ')) return <li key={i} className="ml-6 list-disc text-gray-700 mb-1">{line.slice(2)}</li>
        if (line.startsWith('| ')) return null // tables handled below
        if (line.startsWith('*') && line.endsWith('*') && !line.startsWith('**')) return <p key={i} className="text-gray-500 text-sm italic mt-6 pt-4 border-t border-gray-200">{line.slice(1, -1)}</p>
        if (line.trim() === '') return <div key={i} className="mb-2" />
        return <p key={i} className="text-gray-700 leading-relaxed mb-3">{line}</p>
      })
  }

  const otherPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3)

  return (
    <main className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200 px-6 py-3">
        <div className="max-w-3xl mx-auto flex items-center gap-2 text-sm text-gray-500">
          <Link href="/" className="hover:text-[#c9a84c]">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-[#c9a84c]">Blog</Link>
          <span>/</span>
          <span className="text-gray-900 truncate">{post.title}</span>
        </div>
      </div>

      {/* Article Header */}
      <section className="max-w-3xl mx-auto px-6 pt-12 pb-6">
        <div className="flex items-center gap-3 mb-4">
          <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${categoryColors[post.category] || 'bg-gray-100 text-gray-800'}`}>
            {post.category}
          </span>
          <span className="text-gray-400 text-sm">{post.readTime}</span>
          <span className="text-gray-400 text-sm">
            {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-[#1a1a2e] leading-tight mb-4">{post.title}</h1>
        <p className="text-gray-500 text-lg leading-relaxed mb-6">{post.description}</p>
        <div className="border-b border-gray-200 pb-6">
          <p className="text-sm text-gray-500">By <span className="font-semibold text-gray-700">Anna, Sheplus Jewelry</span></p>
        </div>
      </section>

      {/* Article Content */}
      <section className="max-w-3xl mx-auto px-6 pb-16">
        <div className="prose max-w-none">
          {renderContent(post.content)}
        </div>
      </section>

      {/* CTA Box */}
      <section className="max-w-3xl mx-auto px-6 pb-12">
        <div className="bg-[#1a1a2e] rounded-2xl p-8 text-center">
          <h3 className="text-white text-xl font-bold mb-2">Ready to Source Quality Jewelry?</h3>
          <p className="text-gray-300 mb-6">MOQ starts at 1 piece for samples. No risk to try us.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="/#products" className="bg-[#c9a84c] text-[#1a1a2e] px-6 py-3 rounded-lg font-semibold hover:bg-[#e0bf6e] transition">
              View Products
            </a>
            <a href="/#contact" className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#1a1a2e] transition">
              Get Samples
            </a>
          </div>
        </div>
      </section>

      {/* More Articles */}
      {otherPosts.length > 0 && (
        <section className="bg-gray-50 py-12 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl font-bold text-[#1a1a2e] mb-6">More Articles</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {otherPosts.map((p) => (
                <Link key={p.slug} href={`/blog/${p.slug}`} className="group bg-white rounded-xl p-5 border border-gray-200 hover:border-[#c9a84c] hover:shadow-sm transition">
                  <p className="text-xs text-gray-400 mb-2">{p.category}</p>
                  <h3 className="font-semibold text-gray-900 group-hover:text-[#c9a84c] transition leading-snug text-sm">{p.title}</h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  )
}
