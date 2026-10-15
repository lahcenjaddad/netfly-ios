import Image from 'next/image'
import type { Title } from '@/lib/catalog'

type Props = { label: string; items: Title[]; onSelect: (t: Title) => void }

export function TitleRow({ label, items, onSelect }: Props) {
  return (
    <section aria-label={label}>
      <h2 className="mb-2 px-4 text-lg font-bold">{label}</h2>
      <ul className="no-scrollbar flex snap-x snap-mandatory gap-2 overflow-x-auto scroll-px-4 px-4">
        {items.map((t) => (
          <li key={t.id} className="shrink-0 snap-start">
            <PosterButton title={t} onSelect={onSelect} />
          </li>
        ))}
      </ul>
    </section>
  )
}

export function PosterButton({ title, onSelect, className = 'w-28' }: { title: Title; onSelect: (t: Title) => void; className?: string }) {
  return (
    <button
      onClick={() => onSelect(title)}
      className={`relative block aspect-[2/3] overflow-hidden rounded-md bg-muted transition-transform active:scale-95 ${className}`}
    >
      <Image src={title.image} alt={title.name} fill sizes="160px" className="object-cover" />
      <span className="sr-only">{title.name}</span>
    </button>
  )
}
