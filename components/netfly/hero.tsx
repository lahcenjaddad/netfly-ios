import Image from 'next/image'
import { Check, Info, Play, Plus } from 'lucide-react'
import type { Title } from '@/lib/catalog'

type Props = {
  title: Title
  inList: boolean
  onPlay: () => void
  onToggleList: () => void
  onInfo: () => void
}

export function Hero({ title, inList, onPlay, onToggleList, onInfo }: Props) {
  return (
    <section aria-label="Featured" className="relative aspect-[3/4] w-full overflow-hidden">
      <Image src={title.image} alt={`${title.name} key art`} fill priority sizes="(max-width: 448px) 100vw, 448px" className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 flex flex-col items-center gap-3 px-6 pb-6 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Netfly Original</p>
        <h1 className="text-balance text-5xl font-black uppercase leading-none tracking-tight">{title.name}</h1>
        <p className="text-sm text-white/80">{title.genres.join(' • ')}</p>
        <div className="mt-2 flex w-full items-center justify-between gap-3">
          <button onClick={onToggleList} className="flex w-16 flex-col items-center gap-1 text-xs">
            {inList ? <Check className="size-6" aria-hidden /> : <Plus className="size-6" aria-hidden />}
            My List
          </button>
          <button
            onClick={onPlay}
            className="flex flex-1 items-center justify-center gap-2 rounded-md bg-white py-2.5 font-semibold text-black active:scale-95 transition-transform"
          >
            <Play className="size-5 fill-black" aria-hidden />
            Play
          </button>
          <button onClick={onInfo} className="flex w-16 flex-col items-center gap-1 text-xs">
            <Info className="size-6" aria-hidden />
            Info
          </button>
        </div>
      </div>
    </section>
  )
}
