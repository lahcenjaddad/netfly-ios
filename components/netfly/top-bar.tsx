export function TopBar() {
  return (
    <header className="pointer-events-none absolute inset-x-0 top-0 z-20 bg-gradient-to-b from-black/80 to-transparent pt-[env(safe-area-inset-top)]">
      <div className="pointer-events-auto flex items-center justify-between px-4 py-3">
        <span dir="ltr" className="text-2xl font-black tracking-tight text-primary">NETFLY</span>
        <nav aria-label="التصنيفات" className="flex gap-4 text-sm font-medium text-white/90">
          <span>مسلسلات</span>
          <span>أفلام</span>
        </nav>
      </div>
    </header>
  )
}
