import { Truck, RotateCcw, Shield, Leaf, Award, Phone } from 'lucide-react'

export default function ProductTrustSignals() {
  return (
    <div className="space-y-4">
      {/* Primary trust row */}
      <div className="grid grid-cols-3 gap-3 py-5 border-t border-b border-[#e8ddd0]">
        <div className="text-center">
          <div className="flex justify-center mb-1.5">
            <div className="w-9 h-9 rounded-full bg-[#c2550a]/10 flex items-center justify-center">
              <Truck className="h-4 w-4 text-[#c2550a]" strokeWidth={1.5} />
            </div>
          </div>
          <p className="text-xs font-semibold text-[#2a1a0e]">Free Delivery</p>
          <p className="text-[10px] text-[#8b5a2b] mt-0.5">Above ₹999</p>
        </div>
        <div className="text-center">
          <div className="flex justify-center mb-1.5">
            <div className="w-9 h-9 rounded-full bg-[#c2550a]/10 flex items-center justify-center">
              <RotateCcw className="h-4 w-4 text-[#c2550a]" strokeWidth={1.5} />
            </div>
          </div>
          <p className="text-xs font-semibold text-[#2a1a0e]">Easy Returns</p>
          <p className="text-[10px] text-[#8b5a2b] mt-0.5">7-day policy</p>
        </div>
        <div className="text-center">
          <div className="flex justify-center mb-1.5">
            <div className="w-9 h-9 rounded-full bg-[#c2550a]/10 flex items-center justify-center">
              <Shield className="h-4 w-4 text-[#c2550a]" strokeWidth={1.5} />
            </div>
          </div>
          <p className="text-xs font-semibold text-[#2a1a0e]">Secure Pay</p>
          <p className="text-[10px] text-[#8b5a2b] mt-0.5">256-bit SSL</p>
        </div>
      </div>

      {/* Secondary trust badges */}
      <div className="grid grid-cols-1 gap-2">
        <div className="flex items-center gap-3 px-3 py-2.5 bg-[#f5f0e8] rounded-sm">
          <Leaf className="h-4 w-4 text-green-600 flex-shrink-0" strokeWidth={1.5} />
          <p className="text-xs text-[#2a1a0e]">
            <span className="font-semibold">100% Natural</span> — No synthetic additives or chemicals
          </p>
        </div>
        <div className="flex items-center gap-3 px-3 py-2.5 bg-[#f5f0e8] rounded-sm">
          <Award className="h-4 w-4 text-[#d4a017] flex-shrink-0" strokeWidth={1.5} />
          <p className="text-xs text-[#2a1a0e]">
            <span className="font-semibold">Varanasi Sourced</span> — Directly from trusted pujaris and vaidyas
          </p>
        </div>
        <div className="flex items-center gap-3 px-3 py-2.5 bg-[#f5f0e8] rounded-sm">
          <Phone className="h-4 w-4 text-[#c2550a] flex-shrink-0" strokeWidth={1.5} />
          <p className="text-xs text-[#2a1a0e]">
            <span className="font-semibold">Pandit Helpline</span> — Free puja guidance with every order
          </p>
        </div>
      </div>
    </div>
  )
}
