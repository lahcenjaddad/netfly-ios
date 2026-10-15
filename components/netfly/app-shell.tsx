'use client'

import { useState } from 'react'
import { featured, rows, type Title } from '@/lib/catalog'
import { TopBar } from './top-bar'
import { Hero } from './hero'
import { TitleRow } from './title-row'
import { TabBar, type Tab } from './tab-bar'
import { TitleSheet } from './title-sheet'
import { Player } from './player'
import { SearchView } from './search-view'
import { MyListView } from './my-list-view'
import { InstallBanner } from './install-banner'

export function AppShell() {
  const [tab, setTab] = useState<Tab>('home')
  const [selected, setSelected] = useState<Title | null>(null)
  const [playing, setPlaying] = useState<Title | null>(null)
  const [myList, setMyList] = useState<string[]>([])

  const toggleList = (id: string) =>
    setMyList((list) => (list.includes(id) ? list.filter((x) => x !== id) : [...list, id]))

  const play = (title: Title) => {
    setSelected(null)
    setPlaying(title)
  }

  return (
    <div className="relative mx-auto min-h-dvh max-w-md bg-background text-foreground">
      {tab === 'home' && (
        <>
          <TopBar />
          <main className="pb-28">
            <Hero
              title={featured}
              inList={myList.includes(featured.id)}
              onPlay={() => play(featured)}
              onToggleList={() => toggleList(featured.id)}
              onInfo={() => setSelected(featured)}
            />
            <InstallBanner />
            <div className="flex flex-col gap-7 pt-2">
              {rows.map((row) => (
                <TitleRow key={row.label} label={row.label} items={row.items} onSelect={setSelected} />
              ))}
            </div>
          </main>
        </>
      )}

      {tab === 'search' && <SearchView onSelect={setSelected} />}
      {tab === 'list' && <MyListView ids={myList} onSelect={setSelected} onBrowse={() => setTab('home')} />}

      <TabBar active={tab} onChange={setTab} listCount={myList.length} />

      <TitleSheet
        title={selected}
        inList={selected ? myList.includes(selected.id) : false}
        onClose={() => setSelected(null)}
        onPlay={play}
        onToggleList={toggleList}
      />

      {playing && <Player title={playing} onClose={() => setPlaying(null)} />}
    </div>
  )
}
