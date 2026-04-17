'use client'

import Link from 'next/link'
import { clearConsent } from '@/lib/cookie-consent'
import { usePolicies } from '@/hooks/use-policies'
import { Phone, Mail, MapPin } from 'lucide-react'

const footerLinks = {
  shop: [
    { label: 'All Products', href: '/products' },
    { label: 'Puja Kits', href: '/products?category=puja-kits' },
    { label: 'Agarbatti & Dhoop', href: '/products?category=incense' },
    { label: 'Sacred Herbs', href: '/products?category=herbs' },
  ],
  help: [
    { label: 'FAQ', href: '/faq' },
    { label: 'Shipping & Returns', href: '/shipping' },
    { label: 'Contact Us', href: '/contact' },
  ],
}

export default function Footer() {
  const { policies } = usePolicies()

  const companyLinks = [
    { label: 'About Us', href: '/about' },
  ]
  if (policies?.privacy_policy) companyLinks.push({ label: 'Privacy Policy', href: '/privacy' })
  if (policies?.terms_of_service) companyLinks.push({ label: 'Terms of Service', href: '/terms' })
  if (policies?.refund_policy) companyLinks.push({ label: 'Refund Policy', href: '/refund-policy' })
  if (policies?.cookie_policy) companyLinks.push({ label: 'Cookie Policy', href: '/cookie-policy' })

  return (
    <footer className="border-t border-[#e8ddd0] bg-[#2a1a0e] text-white/80">
      <div className="container-custom py-section-sm">
        {/* Main Footer */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block">
              <div className="flex flex-col leading-none">
                <span className="font-heading text-2xl font-semibold text-[#e8893e]">VedaMandir</span>
                <span className="text-[9px] tracking-[0.25em] uppercase text-[#c8a47a] font-light mt-0.5">Sacred Essentials</span>
              </div>
            </Link>
            <p className="mt-4 text-sm text-white/60 leading-relaxed max-w-xs">
              Bringing the divine into your home. Authentic puja samagri sourced from sacred traditions, delivered to your doorstep.
            </p>
            <div className="mt-6 space-y-2">
              <div className="flex items-center gap-2 text-xs text-white/50">
                <Mail className="h-3.5 w-3.5 text-[#e8893e]" />
                <span>support@vedamandir.com</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-white/50">
                <Phone className="h-3.5 w-3.5 text-[#e8893e]" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-white/50">
                <MapPin className="h-3.5 w-3.5 text-[#e8893e]" />
                <span>Varanasi, Uttar Pradesh, India</span>
              </div>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest mb-4 text-white/40">Shop</h3>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/60 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest mb-4 text-white/40">Help</h3>
            <ul className="space-y-3">
              {footerLinks.help.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/60 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest mb-4 text-white/40">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/60 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-8 p-4 bg-white/5 rounded border border-white/10">
              <p className="text-xs text-white/40 uppercase tracking-widest mb-1">Certification</p>
              <p className="text-sm text-white/70 font-medium">100% Authentic</p>
              <p className="text-xs text-white/40 mt-0.5">All products verified for purity</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} VedaMandir. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <button
              onClick={() => {
                clearConsent()
                window.dispatchEvent(new Event('manage-cookies'))
              }}
              className="text-xs text-white/30 hover:text-white/60 transition-colors"
            >
              Manage Cookies
            </button>
            <span className="text-xs text-white/20">Powered by Amboras</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
