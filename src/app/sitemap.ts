import { BRAND, PORTFOLIO, SERVICES, INDUSTRIES } from '@/lib/constants'
import type { MetadataRoute } from 'next'

const LAST_MODIFIED = new Date('2026-06-01')

export default function sitemap(): MetadataRoute.Sitemap {
  const base = BRAND.siteUrl

  const corePages: MetadataRoute.Sitemap = [
    { url: base, lastModified: LAST_MODIFIED, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${base}/about`, lastModified: LAST_MODIFIED, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/services`, lastModified: LAST_MODIFIED, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/portfolio`, lastModified: LAST_MODIFIED, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/contact`, lastModified: LAST_MODIFIED, changeFrequency: 'yearly', priority: 0.8 },
    { url: `${base}/pricing`, lastModified: LAST_MODIFIED, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/blog`, lastModified: LAST_MODIFIED, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/privacy`, lastModified: LAST_MODIFIED, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${base}/terms`, lastModified: LAST_MODIFIED, changeFrequency: 'yearly', priority: 0.5 },
  ]

  const servicePages: MetadataRoute.Sitemap = SERVICES.map(s => ({
    url: `${base}/services/${s.id}`,
    lastModified: LAST_MODIFIED,
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  const industryPages: MetadataRoute.Sitemap = INDUSTRIES.map(i => ({
    url: `${base}/industries/${i.id}`,
    lastModified: LAST_MODIFIED,
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  const blogPosts: MetadataRoute.Sitemap = [
    { url: `${base}/blog/why-your-restaurant-needs-more-than-zomato-2026`, lastModified: new Date('2026-05-15'), changeFrequency: 'yearly', priority: 0.7 },
    { url: `${base}/blog/what-is-geo-optimisation`, lastModified: new Date('2026-05-20'), changeFrequency: 'yearly', priority: 0.7 },
    { url: `${base}/blog/how-jaipur-fashion-brands-can-sell-without-amazon`, lastModified: new Date('2026-05-25'), changeFrequency: 'yearly', priority: 0.7 },
  ]

  const showcasePages: MetadataRoute.Sitemap = PORTFOLIO.map(p => ({
    url: `${base}/showcase/${p.id}`,
    lastModified: LAST_MODIFIED,
    changeFrequency: 'yearly',
    priority: 0.6,
  }))

  return [...corePages, ...servicePages, ...industryPages, ...blogPosts, ...showcasePages]
}
