import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Leaf, Award, Users, Heart } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Our Story — VedaMandir',
  description: 'Learn about VedaMandir — our mission to bring authentic, pure puja essentials from India\'s sacred heartland to devotees across the country.',
}

const values = [
  {
    icon: Leaf,
    title: 'Natural Purity',
    desc: 'Every item we sell is free from synthetic chemicals, artificial fragrances, and adulterants. What enters your mandir stays sacred.',
  },
  {
    icon: Award,
    title: 'Authentic Sourcing',
    desc: 'We partner directly with Varanasi vaidyas, Haridwar artisans, and Mathura farmers — cutting out middlemen to bring you genuine samagri.',
  },
  {
    icon: Users,
    title: 'Community First',
    desc: 'VedaMandir donates 2% of every sale to support traditional artisans and rural farmers who keep India\'s puja traditions alive.',
  },
  {
    icon: Heart,
    title: 'Devotion in Every Box',
    desc: 'Each order is packed with care, accompanied by a puja vidhi booklet and a blessing from our in-house pandit team.',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#2a1a0e] text-white py-20">
        <div className="container-custom max-w-3xl text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-[#e8893e] mb-4">Our Story</p>
          <h1 className="font-heading text-5xl font-semibold leading-tight mb-6">
            Born in Varanasi,<br />
            <span className="text-[#e8893e] italic">Delivered to Every Mandir</span>
          </h1>
          <p className="text-white/70 text-lg leading-relaxed">
            VedaMandir was founded with a single belief — that every household puja deserves the same purity and devotion as one performed on the ghats of the Ganga.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-section">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="font-heading text-4xl font-semibold text-[#2a1a0e]">
                A Mission Rooted in Faith
              </h2>
              <p className="text-[#5a3e2b] leading-relaxed">
                Our founder, Pandit Ramesh Sharma, grew up watching his grandmother spend hours searching the local bazaar for pure, unadulterated puja samagri. Too often, she would return disappointed — products diluted, fragrances synthetic, ingredients of unknown origin.
              </p>
              <p className="text-[#5a3e2b] leading-relaxed">
                In 2009, Ramesh set out to solve this. VedaMandir began as a small shop near Kashi Vishwanath — sourcing directly from trusted farmers, pressing incense the traditional masala way, and packaging samagri with the reverence it deserves.
              </p>
              <p className="text-[#5a3e2b] leading-relaxed">
                Today, we serve over 50,000 devotees across India — from Kashmir to Kanyakumari — delivering the same authentic products that have graced our Varanasi shelves for over 15 years.
              </p>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 bg-[#c2550a] text-white px-8 py-3.5 text-sm font-semibold uppercase tracking-[0.1em] hover:bg-[#a84409] transition-colors"
              >
                Explore Our Products
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="relative aspect-[4/5] rounded-sm overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1612798993750-434c4e3caa7c?w=1200&q=85"
                alt="Varanasi ghat — sacred rituals"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-section bg-[#f5f0e8]">
        <div className="container-custom">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.25em] text-[#8b5a2b] mb-3">What We Stand For</p>
            <h2 className="font-heading text-4xl font-semibold text-[#2a1a0e]">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-[#c2550a]/10 flex items-center justify-center mx-auto">
                  <Icon className="h-6 w-6 text-[#c2550a]" strokeWidth={1.5} />
                </div>
                <h3 className="font-heading text-xl font-semibold text-[#2a1a0e]">{title}</h3>
                <p className="text-sm text-[#5a3e2b] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-section bg-[#c2550a] text-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { val: '15+', label: 'Years of Trust' },
              { val: '50,000+', label: 'Happy Devotees' },
              { val: '200+', label: 'Puja Products' },
              { val: '100%', label: 'Natural & Authentic' },
            ].map(({ val, label }) => (
              <div key={label}>
                <p className="font-heading text-4xl font-semibold">{val}</p>
                <p className="text-white/70 text-sm mt-2 uppercase tracking-wide">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-section text-center">
        <div className="container-custom max-w-xl">
          <h2 className="font-heading text-3xl font-semibold text-[#2a1a0e] mb-4">
            Ready to Begin Your Sacred Journey?
          </h2>
          <p className="text-[#8b5a2b] mb-8 leading-relaxed">
            Browse our collection of authentic puja samagri — lovingly sourced, carefully packed, and delivered to your door.
          </p>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 bg-[#c2550a] text-white px-10 py-4 text-sm font-semibold uppercase tracking-[0.1em] hover:bg-[#a84409] transition-colors"
          >
            Shop Samagri
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
