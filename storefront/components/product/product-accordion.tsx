'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface ProductAccordionProps {
  description?: string | null
  details?: Record<string, string>
}

function AccordionItem({
  title,
  children,
  defaultOpen = false,
}: {
  title: string
  children: React.ReactNode
  defaultOpen?: boolean
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className="border-b border-[#e8ddd0] last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between py-4 text-left"
      >
        <span className="text-sm font-semibold text-[#2a1a0e] uppercase tracking-wide">{title}</span>
        <ChevronDown
          className={`h-4 w-4 text-[#8b5a2b] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      <div className={`overflow-hidden transition-all duration-200 ${isOpen ? 'max-h-96 pb-4' : 'max-h-0'}`}>
        <div className="text-sm text-[#5a3e2b] leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  )
}

export default function ProductAccordion({ description, details }: ProductAccordionProps) {
  return (
    <div className="border-t border-[#e8ddd0]">
      {description && (
        <AccordionItem title="Product Description" defaultOpen>
          <div className="prose prose-sm max-w-none text-[#5a3e2b]" dangerouslySetInnerHTML={{ __html: description }} />
        </AccordionItem>
      )}

      <AccordionItem title="Shipping & Delivery">
        <ul className="space-y-2">
          <li>Free standard delivery on orders above ₹999 — pan India</li>
          <li>Express shipping (1–2 days) available at checkout</li>
          <li>Dispatched within 24 hours of order confirmation</li>
          <li>Fully tracked and insured shipments</li>
        </ul>
      </AccordionItem>

      <AccordionItem title="Returns & Purity Guarantee">
        <ul className="space-y-2">
          <li>7-day hassle-free return policy</li>
          <li>Every product tested for purity and authenticity before dispatch</li>
          <li>If you receive a damaged or incorrect item, we replace it free of charge</li>
          <li>Contact us at support@vedamandir.com or call +91 98765 43210</li>
        </ul>
      </AccordionItem>

      <AccordionItem title="Usage & Storage">
        <ul className="space-y-2">
          <li>Store in a cool, dry place away from direct sunlight and moisture</li>
          <li>Seal packets tightly after each use to preserve fragrance and potency</li>
          <li>Recommended usage instructions are printed on each product</li>
          <li>For personalised puja guidance, use our free Pandit Helpline</li>
        </ul>
      </AccordionItem>
    </div>
  )
}
