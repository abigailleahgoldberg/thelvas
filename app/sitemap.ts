import type { MetadataRoute } from 'next'
export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://thelvas.com'
  const pages = ['', '/blog', '/parlay-builder', '/prediction-tracker', '/vegas-comparison', '/privacy', '/disclaimer']
  return pages.map(p => ({ url: `${base}${p}`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: p === '' ? 1 : 0.8 }))
}
