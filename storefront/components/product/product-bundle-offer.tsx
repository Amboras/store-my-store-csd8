'use client'

import { useState } from 'react'
import { ShoppingBag, Loader2, Check, Gift, Zap } from 'lucide-react'
import { useCart } from '@/hooks/use-cart'
import { toast } from 'sonner'
import { trackAddToCart } from '@/lib/analytics'

interface BundleOfferProps {
  mainVariantId: string
  mainTitle: string
  mainPrice: number | null
  currency: string
}

const BUNDLE_OPTIONS = [
  {
    id: 'single',
    label: 'Single',
    qty: 1,
    multiplier: 1,
    badge: null,
    savings: null,
  },
  {
    id: 'double',
    label: 'Double Pack',
    qty: 2,
    multiplier: 2,
    badge: 'Most Popular',
    savings: '5% off',
  },
  {
    id: 'triple',
    label: 'Triple Pack',
    qty: 3,
    multiplier: 3,
    badge: 'Best Value',
    savings: '10% off',
  },
]

function formatINR(amount: number) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount / 100)
}

export default function ProductBundleOffer({ mainVariantId, mainTitle, mainPrice, currency }: BundleOfferProps) {
  const [selected, setSelected] = useState('single')
  const [justAdded, setJustAdded] = useState(false)
  const { addItem, isAddingItem } = useCart()

  const selectedOption = BUNDLE_OPTIONS.find((o) => o.id === selected) || BUNDLE_OPTIONS[0]

  const basePrice = mainPrice ?? 0
  const discountMap: Record<string, number> = { single: 1, double: 0.95, triple: 0.90 }
  const discount = discountMap[selected] ?? 1
  const totalPrice = Math.round(basePrice * selectedOption.qty * discount)
  const originalPrice = basePrice * selectedOption.qty

  const handleAddBundle = () => {
    if (!mainVariantId) return
    addItem(
      { variantId: mainVariantId, quantity: selectedOption.qty },
      {
        onSuccess: () => {
          setJustAdded(true)
          toast.success(`${selectedOption.qty}x ${mainTitle} added to bag`)
          trackAddToCart('', mainVariantId, selectedOption.qty, totalPrice)
          setTimeout(() => setJustAdded(false), 2500)
        },
        onError: (error: Error) => {
          toast.error(error.message || 'Failed to add to bag')
        },
      }
    )
  }

  return (
    <div className="border border-[#e8ddd0] rounded-sm bg-[#faf7f2] overflow-hidden">
      {/* Header */}
      <div className="flex items-center gap-2 px-4 py-3 bg-[#c2550a]/10 border-b border-[#e8ddd0]">
        <Gift className="h-4 w-4 text-[#c2550a]" strokeWidth={1.5} />
        <p className="text-sm font-semibold text-[#2a1a0e] uppercase tracking-wide">Sacred Bundle Offer</p>
      </div>

      {/* Options */}
      <div className="p-4 space-y-2">
        {BUNDLE_OPTIONS.map((option) => {
          const disc = discountMap[option.id] ?? 1
          const price = Math.round(basePrice * option.qty * disc)
          const isSelected = selected === option.id

          return (
            <button
              key={option.id}
              onClick={() => setSelected(option.id)}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-sm border-2 transition-all text-left ${
                isSelected
                  ? 'border-[#c2550a] bg-[#c2550a]/5'
                  : 'border-[#e8ddd0] hover:border-[#c2550a]/40'
              }`}
            >
              <div className="flex items-center gap-3">
                {/* Radio indicator */}
                <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                  isSelected ? 'border-[#c2550a]' : 'border-[#c2550a]/30'
                }`}>
                  {isSelected && <div className="w-2 h-2 rounded-full bg-[#c2550a]" />}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-[#2a1a0e]">
                      {option.qty}x — {option.label}
                    </span>
                    {option.badge && (
                      <span className="text-[10px] font-bold uppercase tracking-wider bg-[#c2550a] text-white px-2 py-0.5 rounded-sm">
                        {option.badge}
                      </span>
                    )}
                  </div>
                  {option.savings && (
                    <p className="text-xs text-[#c2550a] font-medium mt-0.5">Save {option.savings}</p>
                  )}
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-semibold text-[#2a1a0e]">{formatINR(price)}</p>
                {option.qty > 1 && (
                  <p className="text-xs text-[#8b5a2b] line-through">{formatINR(originalPrice)}</p>
                )}
              </div>
            </button>
          )
        })}
      </div>

      {/* CTA */}
      <div className="px-4 pb-4">
        <button
          onClick={handleAddBundle}
          disabled={isAddingItem}
          className={`w-full flex items-center justify-center gap-2 py-3.5 text-sm font-semibold uppercase tracking-[0.1em] transition-all ${
            justAdded
              ? 'bg-green-700 text-white'
              : 'bg-[#c2550a] text-white hover:bg-[#a84409]'
          }`}
        >
          {isAddingItem ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : justAdded ? (
            <>
              <Check className="h-4 w-4" />
              Added to Bag
            </>
          ) : (
            <>
              <ShoppingBag className="h-4 w-4" />
              Add {selectedOption.qty > 1 ? `${selectedOption.qty}x` : ''} to Bag — {formatINR(totalPrice)}
            </>
          )}
        </button>
        {selected !== 'single' && (
          <p className="text-center text-xs text-[#8b5a2b] mt-2">
            <Zap className="inline h-3 w-3 mr-1" />
            You save {formatINR(originalPrice - totalPrice)} with this bundle
          </p>
        )}
      </div>
    </div>
  )
}
