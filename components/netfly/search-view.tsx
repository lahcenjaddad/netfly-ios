'use client'

import { useState } from 'react'
import { Search } from 'lucide-react'
import { allTitles, type Title } from '@/lib/catalog'
import { PosterButton } from './title-row'

export function SearchView({ onSelect }: { onSelect: (t: Title) => void }) {
  const [query, setQuery] = useState('')
  const q = query.trim().toLowerCase()
  const results = q
    ? allTitles.filter((t) => t.name.toLowerCase().includes(q) || t.genres.some((g) => g.toLowerCase().includes(q)))
    : allTitles

  return (
    <main className="px-4 pb-28 pt-[calc(env(safe-area-inset-top)+1rem)]">
      <label className="flex items-center gap-2 rounded-md bg-muted px-3 py-2.5">
        <Search className="size-5 text-muted-foreground" aria-hidden />
        <span className="sr-only">ابحث عن الأعمال</span>
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="ابحث عن مسلسلات، أفلام، تصنيفات"
          className="w-full bg-transparent text-base outline-none placeholder:text-muted-foreground"
        />
      </label>
      <h2 className="mb-3 mt-6 text-lg font-bold">{q ? `نتائج البحث عن «${query.trim()}»` : 'الأكثر بحثًا'}</h2>
      {results.length === 0 ? (
        <p className="py-12 text-center text-sm text-muted-foreground">لا توجد أعمال مطابقة لبحثك.</p>
      ) : (
        <ul className="grid grid-cols-3 gap-2">
          {results.map((t) => (
            <li key={t.id}>
              <PosterButton title={t} onSelect={onSelect} className="w-full" />
            </li>
          ))}
        </ul>
      )}
    </main>
  )
}
