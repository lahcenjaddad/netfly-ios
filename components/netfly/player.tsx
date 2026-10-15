'use client'

import { ChevronLeft } from 'lucide-react'
import { SAMPLE_VIDEO, type Title } from '@/lib/catalog'

export function Player({ title, onClose }: { title: Title; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-black" role="dialog" aria-modal="true" aria-label={`Playing ${title.name}`}>
      <div className="flex items-center gap-2 px-2 pt-[calc(env(safe-area-inset-top)+0.5rem)] pb-2">
        <button onClick={onClose} aria-label="Back" className="flex size-10 items-center justify-center">
          <ChevronLeft className="size-7" aria-hidden />
        </button>
        <p className="truncate font-semibold">{title.name}</p>
      </div>
      <div className="flex flex-1 items-center">
        <video
          src={SAMPLE_VIDEO}
          poster={title.image}
          controls
          autoPlay
          playsInline
          className="aspect-video w-full bg-black"
        />
      </div>
      <p className="px-4 pb-[calc(env(safe-area-inset-bottom)+1rem)] text-center text-xs text-muted-foreground">
        Sample stream for preview purposes
      </p>
    </div>
  )
}
