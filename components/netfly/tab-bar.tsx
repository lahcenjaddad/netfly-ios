import { Bookmark, Home, Search } from 'lucide-react'

export type Tab = 'home' | 'search' | 'list'

const tabs = [
  { id: 'home' as const, label: 'Home', icon: Home },
  { id: 'search' as const, label: 'Search', icon: Search },
  { id: 'list' as const, label: 'My List', icon: Bookmark },
]

export function TabBar({ active, onChange, listCount }: { active: Tab; onChange: (t: Tab) => void; listCount: number }) {
  return (
    <nav
      aria-label="Main"
      className="fixed inset-x-0 bottom-0 z-30 mx-auto max-w-md border-t border-white/10 bg-black/85 pb-[env(safe-area-inset-bottom)] backdrop-blur-xl"
    >
      <ul className="flex">
        {tabs.map(({ id, label, icon: Icon }) => {
          const isActive = active === id
          return (
            <li key={id} className="flex-1">
              <button
                onClick={() => onChange(id)}
                aria-current={isActive ? 'page' : undefined}
                className={`relative flex w-full flex-col items-center gap-1 py-2.5 text-[11px] font-medium ${isActive ? 'text-white' : 'text-muted-foreground'}`}
              >
                <Icon className={`size-6 ${isActive && id !== 'search' ? 'fill-white' : ''}`} aria-hidden />
                {label}
                {id === 'list' && listCount > 0 && (
                  <span className="absolute right-[calc(50%-20px)] top-1.5 flex size-4 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground">
                    {listCount}
                  </span>
                )}
              </button>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
