import type { Metadata } from 'next'
import { Young_Serif, Instrument_Sans } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'
import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'
import { CustomCursor } from '@/components/ui/CustomCursor'
import { NoiseOverlay } from '@/components/ui/NoiseOverlay'
import { WhatsAppFloat } from '@/components/ui/WhatsAppFloat'
import { ThemeProvider } from '@/components/ui/ThemeProvider'
import { defaultMetadata, localBusinessSchema, organizationSchema, websiteSchema } from '@/lib/seo'
import { SkipNav } from '@/components/ui/SkipNav'

const blackChancery = localFont({
  src: '../fonts/blackchancery/blackchancery.ttf',
  variable: '--font-chancery',
  display: 'swap',
})

const youngSerif = Young_Serif({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-young-serif',
  display: 'swap',
})

const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-ui',
  display: 'swap',
  preload: true,
})

/* ── Root metadata ── */
export const metadata: Metadata = defaultMetadata

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${youngSerif.variable} ${instrumentSans.variable} ${blackChancery.variable}`} suppressHydrationWarning>
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
      <body suppressHydrationWarning>
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

