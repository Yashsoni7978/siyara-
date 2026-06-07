import { BRAND } from './constants'
import type { Metadata } from 'next'

// ============================================================
// BASE SEO METADATA — shared defaults for all pages
// ============================================================
export const BASE_OG_IMAGE = `${BRAND.siteUrl}/og-image.jpg`

export const defaultMetadata: Metadata = {
  metadataBase: new URL(BRAND.siteUrl),
  title: {
    template: `%s | ${BRAND.name}`,
    default: `${BRAND.name} — Jaipur's Premium Digital Growth Agency`,
  },
  description:
    "We don't just build your digital presence. We build brands that dominate. Siyara Innovations is Jaipur's premium full-service digital growth agency — web development, branding, AI automation, SEO, performance marketing and more.",
  keywords: [
    // Core local
    'digital agency Jaipur',
    'digital marketing agency Jaipur',
    'branding agency Jaipur',
    'web development Jaipur',
    'website design Jaipur',
    'web design company Jaipur',
    // Services
    'SEO agency Jaipur',
    'social media marketing Jaipur',
    'performance marketing Jaipur',
    'Google Ads agency Jaipur',
    'Meta ads agency India',
    'AI automation India',
    'AI agent development India',
    // Differentiators
    'GEO optimisation',
    'generative engine optimisation',
    'Google Business Profile management Jaipur',
    'D2C brand marketing India',
    'full service digital agency Rajasthan',
    'premium digital agency India',
  ],
  authors: [{ name: BRAND.name, url: BRAND.siteUrl }],
  creator: BRAND.name,
  publisher: BRAND.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: BRAND.name,
    images: [
      {
        url: BASE_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: `${BRAND.name} — Jaipur's Premium Digital Growth Agency`,
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@siyarainnovations',
    creator: '@siyarainnovations',
    images: [BASE_OG_IMAGE],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
    shortcut: '/favicon.ico',
  },
  manifest: '/site.webmanifest',
  alternates: {
    canonical: BRAND.siteUrl,
  },
  category: 'technology',
  classification: 'Digital Marketing Agency',
}

// ============================================================
// JSON-LD STRUCTURED DATA
// ============================================================

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': BRAND.siteUrl,
  name: BRAND.name,
  description:
    "Jaipur's premium full-service digital growth agency. Web development, branding, AI automation, SEO, ads, social media and more.",
  url: BRAND.siteUrl,
  email: BRAND.email,
  telephone: `+${BRAND.whatsappNumber}`,
  priceRange: '₹₹₹',
  openingHours: 'Mo-Sa 09:00-19:00',
  hasMap: 'https://maps.google.com/?q=Jaipur,Rajasthan,India',
  image: BASE_OG_IMAGE,
  logo: `${BRAND.siteUrl}/apple-touch-icon.png`,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Jaipur',
    addressRegion: 'Rajasthan',
    postalCode: '302001',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 26.9124,
    longitude: 75.7873,
  },
  areaServed: [
    { '@type': 'City',    name: 'Jaipur' },
    { '@type': 'State',   name: 'Rajasthan' },
    { '@type': 'Country', name: 'India' },
  ],
  makesOffer: [
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Web Development', description: 'High-performance websites built to convert.' } },
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Branding & Identity', description: 'Logo, visual identity, and brand strategy.' } },
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'SEO Optimisation', description: 'Rank at the top of Google and stay there.' } },
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Performance Marketing', description: 'Meta, Google, and YouTube ad campaigns tied to revenue.' } },
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI Automation', description: 'Custom AI automation to streamline business operations.' } },
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'GEO Optimisation', description: 'Be recommended by ChatGPT, Perplexity, and Google AI.' } },
  ],
  sameAs: [BRAND.instagram, BRAND.linkedin, BRAND.twitter],
}

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${BRAND.siteUrl}/#organization`,
  name: BRAND.name,
  url: BRAND.siteUrl,
  logo: {
    '@type': 'ImageObject',
    url: `${BRAND.siteUrl}/apple-touch-icon.png`,
    width: 180,
    height: 180,
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    telephone: `+${BRAND.whatsappNumber}`,
    email: BRAND.email,
    areaServed: 'IN',
    availableLanguage: ['English', 'Hindi'],
  },
  sameAs: [BRAND.instagram, BRAND.linkedin, BRAND.twitter],
}

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${BRAND.siteUrl}/#website`,
  url: BRAND.siteUrl,
  name: BRAND.name,
  description: BRAND.tagline,
  inLanguage: 'en-IN',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${BRAND.siteUrl}/blog?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
}
