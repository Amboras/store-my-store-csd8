'use client'

import { useEffect, useState } from 'react'
import { Clock, Users, ShieldCheck, Flame } from 'lucide-react'

interface ProductUrgencyProps {
  stockCount?: number | null
}

function useCountdown(targetHours: number) {
  const [timeLeft, setTimeLeft] = useState({ h: 0, m: 0, s: 0 })

  useEffect(() => {
    // Set countdown to a fixed sale end time (midnight IST)
    const getTargetTime = () => {
      const now = new Date()
      const target = new Date()
      target.setHours(now.getHours() + targetHours, now.getMinutes(), 0, 0)
      return target.getTime()
    }

    const endTime = getTargetTime()

    const update = () => {
      const now = Date.now()
      const diff = Math.max(0, endTime - now)
      const h = Math.floor(diff / 3600000)
      const m = Math.floor((diff % 3600000) / 60000)
      const s = Math.floor((diff % 60000) / 1000)
      setTimeLeft({ h, m, s })
    }

    update()
    const id = setInterval(update, 1000)
    return () => clearInterval(id)
  }, [targetHours])

  return timeLeft
}

export default function ProductUrgency({ stockCount }: ProductUrgencyProps) {
  const { h, m, s } = useCountdown(4)
  const pad = (n: number) => String(n).padStart(2, '0')

  // Simulated live viewers (stabilised random number)
  const [viewers] = useState(() => Math.floor(Math.random() * 12) + 8)

  if (stockCount != null && stockCount <= 0) return null

  return (
    <div className="space-y-3">
      {/* Timer */}
      <div className="flex items-center gap-3 px-4 py-3 bg-[#fff4eb] border border-[#f5c89a] rounded-sm">
        <Clock className="h-4 w-4 text-[#c2550a] flex-shrink-0" strokeWidth={1.5} />
        <div className="flex-1">
          <p className="text-xs text-[#8b5a2b] font-medium uppercase tracking-wide">
            Festival Sale ends in
          </p>
          <div className="flex items-center gap-1.5 mt-0.5">
            {[pad(h), pad(m), pad(s)].map((unit, i) => (
              <span key={i} className="flex items-center gap-1.5">
                <span className="font-heading text-lg font-semibold text-[#c2550a] tabular-nums">{unit}</span>
                {i < 2 && <span className="text-[#c2550a] font-semibold">:</span>}
              </span>
            ))}
            <span className="text-xs text-[#8b5a2b] ml-1">hrs left</span>
          </div>
        </div>
        <Flame className="h-5 w-5 text-[#f97316]" strokeWidth={1.5} />
      </div>

      {/* Stock & viewers */}
      <div className="flex items-center gap-4">
        {stockCount != null && stockCount > 0 && stockCount <= 20 && (
          <div className="flex items-center gap-2 text-xs">
            <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span className="text-[#2a1a0e] font-medium">Only {stockCount} left in stock</span>
          </div>
        )}
        <div className="flex items-center gap-1.5 text-xs text-[#8b5a2b]">
          <Users className="h-3.5 w-3.5" strokeWidth={1.5} />
          <span>{viewers} people viewing right now</span>
        </div>
      </div>

      {/* Authenticity badge */}
      <div className="flex items-center gap-2 text-xs text-[#5a3e2b]">
        <ShieldCheck className="h-4 w-4 text-[#c2550a]" strokeWidth={1.5} />
        <span>Authenticity guaranteed — all products are purity-tested</span>
      </div>
    </div>
  )
}
