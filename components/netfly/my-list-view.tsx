import { Bookmark } from 'lucide-react'
import { allTitles, type Title } from '@/lib/catalog'
import { PosterButton } from './title-row'

type Props = { ids: string[]; onSelect: (t: Title) => void; onBrowse: () => void }

export function MyListView({ ids, onSelect, onBrowse }: Props) {
  const items = allTitles.filter((t) => ids.includes(t.id))

  return (
    <main className="px-4 pb-28 pt-[calc(env(safe-area-inset-top)+1rem)]">
      <h1 className="mb-4 text-2xl font-bold">قائمتي</h1>
      {items.length === 0 ? (
        <div className="flex flex-col items-center gap-3 py-20 text-center">
          <Bookmark className="size-10 text-muted-foreground" aria-hidden />
          <p className="text-muted-foreground">أضف المسلسلات والأفلام لتتابع ما تريد مشاهدته.</p>
          <button onClick={onBrowse} className="mt-2 rounded-md bg-primary px-5 py-2.5 font-bold text-primary-foreground">
            تصفّح الأعمال
          </button>
        </div>
      ) : (
        <ul className="grid grid-cols-3 gap-2">
          {items.map((t) => (
            <li key={t.id}>
              <PosterButton title={t} onSelect={onSelect} className="w-full" />
            </li>
          ))}
        </ul>
      )}
    </main>
  )
}
