'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { ArrowRight, Truck, Shield, Star, Flame, Leaf, Package } from 'lucide-react'
import CollectionSection from '@/components/marketing/collection-section'
import { useCollections } from '@/hooks/use-collections'
import { trackMetaEvent } from '@/lib/meta-pixel'

const HERO_IMAGE = 'https://images.unsplash.com/photo-1612798993750-434c4e3caa7c?w=1600&q=85'
const LIFESTYLE_IMAGE = 'https://images.unsplash.com/photo-1604818702684-62f47a0a7c00?w=1200&q=85'
const RITUAL_IMAGE = 'https://images.unsplash.com/photo-1606041008023-472dfb5e530f?w=1200&q=85'

const categories = [
  {
    title: 'Puja Kits',
    subtitle: 'Complete ritual essentials',
    href: '/products',
    image: 'https://images.unsplash.com/photo-1547480053-7d174f67b557?w=800&q=80',
    icon: Package,
  },
  {
    title: 'Agarbatti & Dhoop',
    subtitle: 'Sacred incense traditions',
    href: '/products',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    icon: Flame,
  },
  {
    title: 'Sacred Herbs',
    subtitle: 'Ayurvedic purity',
    href: '/products',
    image: 'https://images.unsplash.com/photo-1602526430780-782d6b1783fa?w=800&q=80',
    icon: Leaf,
  },
]

const trustBadges = [
  { icon: Shield, label: 'Authentic & Pure', desc: '100% verified samagri' },
  { icon: Truck, label: 'Pan-India Delivery', desc: 'Free above ₹999' },
  { icon: Leaf, label: 'Natural Ingredients', desc: 'No synthetic additives' },
  { icon: Star, label: '50,000+ Devotees', desc: 'Trusted across India' },
]

export default function HomePage() {
  const { data: collections, isLoading } = useCollections()
  const [newsletterEmail, setNewsletterEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newsletterEmail.trim()) return
    trackMetaEvent('Lead', { content_name: 'newsletter_signup', status: 'submitted' })
    setSubscribed(true)
    setNewsletterEmail('')
  }

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative bg-[#faf7f2] overflow-hidden">
        {/* Decorative top-right mandala */}
        <div className="absolute top-0 right-0 w-72 h-72 opacity-5 pointer-events-none">
          <svg viewBox="0 0 200 200" className="w-full h-full animate-slow-spin" fill="none" stroke="#c2550a">
            <circle cx="100" cy="100" r="90" strokeWidth="0.5"/>
            <circle cx="100" cy="100" r="70" strokeWidth="0.5"/>
            <circle cx="100" cy="100" r="50" strokeWidth="0.5"/>
            {Array.from({ length: 12 }).map((_, i) => {
              const angle = (i * 30 * Math.PI) / 180
              return (
                <line
                  key={i}
                  x1={100 + 50 * Math.cos(angle)}
                  y1={100 + 50 * Math.sin(angle)}
                  x2={100 + 90 * Math.cos(angle)}
                  y2={100 + 90 * Math.sin(angle)}
                  strokeWidth="0.5"
                />
              )
            })}
          </svg>
        </div>

        <div className="container-custom grid lg:grid-cols-2 gap-8 items-center py-16 lg:py-28">
          {/* Text Content */}
          <div className="space-y-7 animate-fade-in-up">
            <div className="ornament-line max-w-xs">
              <span className="text-xs uppercase tracking-[0.25em] text-[#8b5a2b] font-medium whitespace-nowrap">
                Sacred Puja Essentials
              </span>
            </div>
            <h1 className="font-heading text-5xl lg:text-6xl font-semibold text-[#2a1a0e] leading-tight">
              Bring the Divine<br />
              <span className="text-[#c2550a] italic">Into Your Home</span>
            </h1>
            <p className="text-base text-[#5a3e2b] max-w-md leading-relaxed font-light">
              Authentic puja samagri, handcrafted incense, sacred herbs and complete ritual kits — sourced from the heart of India's spiritual heartland.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 bg-[#c2550a] text-white px-8 py-3.5 text-sm font-semibold uppercase tracking-[0.1em] hover:bg-[#a84409] transition-colors"
              >
                Shop Samagri
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 border border-[#c2550a] text-[#c2550a] px-8 py-3.5 text-sm font-semibold uppercase tracking-[0.1em] hover:bg-[#c2550a] hover:text-white transition-colors"
              >
                Our Story
              </Link>
            </div>
            {/* Social proof pill */}
            <div className="flex items-center gap-3 pt-2">
              <div className="flex -space-x-2">
                {['#f97316','#c2550a','#8b5a2b','#d4a017'].map((c, i) => (
                  <div key={i} className="w-7 h-7 rounded-full border-2 border-white flex items-center justify-center text-white text-[9px] font-bold" style={{ backgroundColor: c }}>
                    {['P','R','S','A'][i]}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3 w-3 fill-[#d4a017] text-[#d4a017]" />
                  ))}
                </div>
                <p className="text-xs text-[#8b5a2b]">50,000+ devotees trust VedaMandir</p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-sm overflow-hidden shadow-2xl">
              <Image
                src={HERO_IMAGE}
                alt="Puja essentials – diyas and flowers"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2a1a0e]/30 to-transparent" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 bg-white rounded-sm shadow-lg px-5 py-3 border border-[#e8ddd0]">
              <p className="text-xs uppercase tracking-widest text-[#8b5a2b]">Varanasi Sourced</p>
              <p className="text-sm font-heading font-semibold text-[#2a1a0e]">100% Authentic</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Trust Bar ── */}
      <section className="py-10 border-y border-[#e8ddd0] bg-[#f5f0e8]">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trustBadges.map(({ icon: Icon, label, desc }) => (
              <div key={label} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#c2550a]/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="h-5 w-5 text-[#c2550a]" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#2a1a0e]">{label}</p>
                  <p className="text-xs text-[#8b5a2b]">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Category Grid ── */}
      <section className="py-section">
        <div className="container-custom">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.25em] text-[#8b5a2b] mb-3">Our Offerings</p>
            <h2 className="font-heading text-4xl font-semibold text-[#2a1a0e]">Shop by Category</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.map(({ title, subtitle, href, image, icon: Icon }) => (
              <Link
                key={title}
                href={href}
                className="group relative aspect-[3/4] overflow-hidden rounded-sm block"
              >
                <Image
                  src={image}
                  alt={title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2a1a0e]/80 via-[#2a1a0e]/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-2 mb-1">
                    <Icon className="h-4 w-4 text-[#e8893e]" strokeWidth={1.5} />
                    <p className="text-xs uppercase tracking-widest text-[#e8893e]">{subtitle}</p>
                  </div>
                  <h3 className="font-heading text-2xl font-semibold text-white">{title}</h3>
                  <p className="text-sm text-white/70 mt-1 flex items-center gap-1 group-hover:gap-2 transition-all">
                    Shop now <ArrowRight className="h-3.5 w-3.5" />
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Collections from Medusa ── */}
      {isLoading ? (
        <section className="py-section">
          <div className="container-custom">
            <div className="animate-pulse space-y-4 text-center">
              <div className="h-3 w-20 bg-muted rounded mx-auto" />
              <div className="h-8 w-64 bg-muted rounded mx-auto" />
            </div>
          </div>
        </section>
      ) : collections && collections.length > 0 ? (
        <>
          {collections.map((collection: { id: string; handle: string; title: string; metadata?: Record<string, unknown> }, index: number) => (
            <CollectionSection
              key={collection.id}
              collection={collection}
              alternate={index % 2 === 1}
            />
          ))}
        </>
      ) : null}

      {/* ── About / Philosophy Section ── */}
      <section className="py-section bg-[#f5f0e8]">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative">
              <div className="aspect-[4/5] rounded-sm overflow-hidden shadow-xl">
                <Image
                  src={LIFESTYLE_IMAGE}
                  alt="Sacred ritual space"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-40 h-40 rounded-sm overflow-hidden border-4 border-white shadow-lg hidden lg:block">
                <Image
                  src={RITUAL_IMAGE}
                  alt="Ritual herbs and flowers"
                  fill
                  sizes="10vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="space-y-6 lg:pl-8">
              <p className="text-xs uppercase tracking-[0.25em] text-[#8b5a2b]">Our Philosophy</p>
              <h2 className="font-heading text-4xl font-semibold text-[#2a1a0e] leading-tight">
                Rooted in Tradition,<br />
                <span className="text-[#c2550a] italic">Crafted with Devotion</span>
              </h2>
              <p className="text-[#5a3e2b] leading-relaxed">
                Since our founding, VedaMandir has believed that every puja deserves the purest ingredients. We source directly from trusted vaidyas, farmers, and artisans across Varanasi, Mathura, and Haridwar — ensuring every product that reaches you carries the energy and authenticity of India's sacred heartland.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-4">
                {[
                  { val: '50,000+', label: 'Happy Devotees' },
                  { val: '200+', label: 'Puja Products' },
                  { val: '100%', label: 'Natural & Pure' },
                  { val: '15+', label: 'Years of Trust' },
                ].map(({ val, label }) => (
                  <div key={label}>
                    <p className="font-heading text-3xl font-semibold text-[#c2550a]">{val}</p>
                    <p className="text-sm text-[#8b5a2b] mt-0.5">{label}</p>
                  </div>
                ))}
              </div>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-[#c2550a] link-underline pb-0.5"
              >
                Our Story
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Featured Products strip ── */}
      <section className="py-section">
        <div className="container-custom text-center mb-10">
          <p className="text-xs uppercase tracking-[0.25em] text-[#8b5a2b] mb-3">Devotee Favourites</p>
          <h2 className="font-heading text-4xl font-semibold text-[#2a1a0e]">Most Loved Products</h2>
        </div>
        <div className="container-custom">
          <div className="flex justify-center">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 bg-[#c2550a] text-white px-10 py-4 text-sm font-semibold uppercase tracking-[0.1em] hover:bg-[#a84409] transition-colors"
            >
              View All Products
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Newsletter ── */}
      <section className="py-section bg-[#2a1a0e] text-white">
        <div className="container-custom max-w-xl text-center">
          <div className="ornament-line mb-6">
            <span className="text-xs uppercase tracking-[0.25em] text-[#c8a47a]">Sacred Updates</span>
          </div>
          <h2 className="font-heading text-4xl font-semibold text-white">Stay Connected</h2>
          <p className="mt-3 text-white/60 text-sm leading-relaxed">
            Receive puja guides, auspicious dates, festival offers, and new arrival alerts directly in your inbox.
          </p>
          {subscribed ? (
            <div className="mt-8 py-4 px-6 bg-[#c2550a]/20 border border-[#c2550a]/40 rounded-sm">
              <p className="text-[#e8893e] font-medium">
                Jai Shri Ram! You're now subscribed.
              </p>
            </div>
          ) : (
            <form className="mt-8 flex gap-2" onSubmit={handleNewsletterSubmit}>
              <input
                type="email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 border-b border-white/30 bg-transparent px-1 py-3 text-sm placeholder:text-white/40 text-white focus:border-white focus:outline-none transition-colors"
              />
              <button
                type="submit"
                className="bg-[#c2550a] text-white px-6 py-3 text-sm font-semibold uppercase tracking-wide hover:bg-[#a84409] transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  )
}
