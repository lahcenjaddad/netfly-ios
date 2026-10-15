export type Title = {
  id: string
  name: string
  image: string
  year: number
  rating: string
  duration: string
  match: number
  genres: string[]
  type: 'Movie' | 'Series'
  description: string
}

export const SAMPLE_VIDEO =
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'

export const featured: Title = {
  id: 'red-horizon',
  name: 'Red Horizon',
  image: '/images/hero.png',
  year: 2026,
  rating: '13+',
  duration: '2h 14m',
  match: 98,
  genres: ['Sci-Fi', 'Adventure', 'Drama'],
  type: 'Movie',
  description:
    'Stranded on a dying desert world, a lone explorer must decide whether to signal home or follow a mysterious light toward the ringed giant on the horizon.',
}

export const titles: Title[] = [
  {
    id: 'neon-rain',
    name: 'Neon Rain',
    image: '/images/p1.png',
    year: 2025,
    rating: '16+',
    duration: '3 Seasons',
    match: 95,
    genres: ['Crime', 'Thriller'],
    type: 'Series',
    description:
      'A burned-out detective hunts a phantom killer through the rain-soaked streets of a city that never sleeps.',
  },
  {
    id: 'the-lantern',
    name: 'The Lantern',
    image: '/images/p2.png',
    year: 2024,
    rating: '18+',
    duration: '1h 48m',
    match: 89,
    genres: ['Horror', 'Mystery'],
    type: 'Movie',
    description:
      'A girl returns to her grandmother’s forest cabin and discovers the lantern in the window has kept something out for decades.',
  },
  {
    id: 'dust-run',
    name: 'Dust Run',
    image: '/images/p3.png',
    year: 2026,
    rating: '13+',
    duration: '2h 02m',
    match: 92,
    genres: ['Action', 'Thriller'],
    type: 'Movie',
    description:
      'One getaway driver. One canyon. Sixty minutes until sunset to outrun the most dangerous crew in the desert.',
  },
  {
    id: 'rooftops',
    name: 'Rooftops of Paris',
    image: '/images/p4.png',
    year: 2025,
    rating: '7+',
    duration: '1h 36m',
    match: 87,
    genres: ['Romance', 'Comedy'],
    type: 'Movie',
    description:
      'Two strangers locked out on the same Paris rooftop spend one long, hilarious night figuring out how to get down.',
  },
  {
    id: 'emberfall',
    name: 'Emberfall',
    image: '/images/p5.png',
    year: 2026,
    rating: '16+',
    duration: '2 Seasons',
    match: 97,
    genres: ['Fantasy', 'Epic'],
    type: 'Series',
    description:
      'The last knight of a fallen order climbs the storm peaks to bargain with the dragon who burned her kingdom.',
  },
  {
    id: 'abyssal',
    name: 'Abyssal',
    image: '/images/p6.png',
    year: 2025,
    rating: '13+',
    duration: '1h 58m',
    match: 91,
    genres: ['Sci-Fi', 'Thriller'],
    type: 'Movie',
    description:
      'A deep-sea crew finds a city older than humanity at the bottom of the ocean — and it is still powered on.',
  },
  {
    id: 'high-ghosts',
    name: 'Ghosts of the High Peaks',
    image: '/images/p7.png',
    year: 2024,
    rating: 'All',
    duration: '1 Season',
    match: 94,
    genres: ['Documentary', 'Nature'],
    type: 'Series',
    description:
      'A year in the life of the elusive snow leopard, filmed across the most remote ridges of the Himalayas.',
  },
  {
    id: 'zero-day',
    name: 'Zero Day',
    image: '/images/p8.png',
    year: 2026,
    rating: '16+',
    duration: '2 Seasons',
    match: 93,
    genres: ['Tech', 'Thriller'],
    type: 'Series',
    description:
      'Five hackers have 72 hours to stop a cyberattack they accidentally started.',
  },
]

const byIds = (ids: string[]) => ids.map((id) => titles.find((t) => t.id === id)!)

export const rows: { label: string; items: Title[] }[] = [
  { label: 'Trending Now', items: byIds(['emberfall', 'neon-rain', 'dust-run', 'zero-day', 'abyssal']) },
  { label: 'New on Netfly', items: byIds(['zero-day', 'dust-run', 'emberfall', 'rooftops', 'high-ghosts']) },
  { label: 'Thrillers', items: byIds(['abyssal', 'neon-rain', 'the-lantern', 'zero-day', 'dust-run']) },
  { label: 'Feel-Good & Nature', items: byIds(['rooftops', 'high-ghosts', 'emberfall', 'abyssal']) },
]

export const allTitles = [featured, ...titles]
