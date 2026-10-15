'use client'

import { useState } from 'react'
import { Share, SquarePlus, X } from 'lucide-react'

export function InstallBanner() {
  const [open, setOpen] = useState(true)
  if (!open) return null

  return (
    <aside aria-label="تثبيت Netfly" className="mx-4 mb-6 mt-2 rounded-lg border border-white/10 bg-card p-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="font-bold">ثبّت Netfly على جهاز iPhone</p>
          <ol className="mt-2 flex flex-col gap-1.5 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              1. اضغط على <Share className="size-4 text-white" aria-label="مشاركة" /> في Safari
            </li>
            <li className="flex items-center gap-2">
              2. اختر <SquarePlus className="size-4 text-white" aria-hidden /> إضافة إلى الشاشة الرئيسية
            </li>
          </ol>
        </div>
        <button onClick={() => setOpen(false)} aria-label="إغلاق" className="text-muted-foreground">
          <X className="size-5" aria-hidden />
        </button>
      </div>
    </aside>
  )
}
