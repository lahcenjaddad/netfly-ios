import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Netfly',
    short_name: 'Netfly',
    description: 'Stream movies and series on your iPhone.',
    start_url: '/',
    display: 'standalone',
    orientation: 'portrait',
    background_color: '#000000',
    theme_color: '#000000',
    icons: [{ src: '/apple-icon.png', sizes: '1024x1024', type: 'image/png', purpose: 'any' }],
  }
}
