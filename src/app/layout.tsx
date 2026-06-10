import type { Metadata } from 'next'
import { Bodoni_Moda, Jost } from 'next/font/google'
import './globals.css'
import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'
import { CustomCursor } from '@/components/ui/CustomCursor'
import { NoiseOverlay } from '@/components/ui/NoiseOverlay'
import { WhatsAppFloat } from '@/components/ui/WhatsAppFloat'
import { ThemeProvider } from '@/components/ui/ThemeProvider'
import { defaultMetadata, localBusinessSchema, organizationSchema, websiteSchema } from '@/lib/seo'
import { SkipNav } from '@/components/ui/SkipNav'

/* ── Google Fonts via next/font (zero CLS, self-hosted at edge) ── */
const bodoni = Bodoni_Moda({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '900'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
  preload: true,
})

const jost = Jost({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-ui',
  display: 'swap',
  preload: true,
})

/* ── Root metadata ── */
export const metadata: Metadata = defaultMetadata

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${bodoni.variable} ${jost.variable}`} suppressHydrationWarning>
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body>
        {/* Skip navigation — accessibility */}
        <SkipNav />
        <ThemeProvider>
          <NoiseOverlay />
          <CustomCursor />
          <Navigation />
          <main id="main-content">{children}</main>
          <Footer />
          <WhatsAppFloat />
        </ThemeProvider>
      </body>
    </html>
  )
}

