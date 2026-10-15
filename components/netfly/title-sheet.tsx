'use client'

import Image from 'next/image'
import { useEffect } from 'react'
import { Check, Play, Plus, X } from 'lucide-react'
import type { Title } from '@/lib/catalog'

type Props = {
  title: Title | null
  inList: boolean
  onClose: () => void
  onPlay: (t: Title) => void
  onToggleList: (id: string) => void
}

export function TitleSheet({ title, inList, onClose, onPlay, onToggleList }: Props) {
  useEffect(() => {
    if (!title) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [title, onClose])

  if (!title) return null

  return (
    <div className="fixed inset-0 z-40 flex items-end justify-center" role="dialog" aria-modal="true" aria-labelledby="sheet-title">
      <button aria-label="Close details" onClick={onClose} className="absolute inset-0 bg-black/70 animate-in fade-in" />
      <div className="relative w-full max-w-md rounded-t-2xl bg-card pb-[calc(env(safe-area-inset-bottom)+1.25rem)] animate-in slide-in-from-bottom duration-300">
        <div className="flex gap-4 p-4">
          <div className="relative aspect-[2/3] w-24 shrink-0 overflow-hidden rounded-md">
            <Image src={title.image} alt="" fill sizes="96px" className="object-cover" />
          </div>
          <div className="flex min-w-0 flex-1 flex-col gap-1.5">
            <h2 id="sheet-title" className="pr-8 text-xl font-bold leading-tight">{title.name}</h2>
            <p className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
              <span className="font-semibold text-green-500">{title.match}% Match</span>
              <span>{title.year}</span>
              <span className="rounded-sm border border-white/30 px-1">{title.rating}</span>
              <span>{title.duration}</span>
            </p>
            <p className="line-clamp-4 text-sm leading-relaxed text-white/85">{title.description}</p>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute right-3 top-3 flex size-8 items-center justify-center rounded-full bg-white/10"
          >
            <X className="size-4" aria-hidden />
          </button>
        </div>
        <div className="flex gap-3 px-4">
          <button
            onClick={() => onPlay(title)}
            className="flex flex-1 items-center justify-center gap-2 rounded-md bg-white py-2.5 font-semibold text-black active:scale-95 transition-transform"
          >
            <Play className="size-5 fill-black" aria-hidden /> Play
          </button>
          <button
            onClick={() => onToggleList(title.id)}
            className="flex flex-1 items-center justify-center gap-2 rounded-md bg-white/15 py-2.5 font-semibold active:scale-95 transition-transform"
          >
            {inList ? <Check className="size-5" aria-hidden /> : <Plus className="size-5" aria-hidden />}
            {inList ? 'In My List' : 'My List'}
          </button>
        </div>
        <p className="px-4 pt-3 text-xs text-muted-foreground">
          {title.type} • {title.genres.join(', ')}
        </p>
      </div>
    </div>
  )
}
