import type { Metadata } from 'next'
import { PORTFOLIO, BRAND } from '@/lib/constants'
import { PageHero } from '@/components/ui/PageHero'
import { PortfolioGrid } from '@/app/portfolio/PortfolioGrid'

export const metadata: Metadata = {
  title: `Showcase | ${BRAND.name}`,
  description: "Browse Siyara Innovations' project showcase.",
  alternates: { canonical: `${BRAND.siteUrl}/showcase` },
}

export default function ShowcasePage() {
  return (
    <div className="page-transition">
      <PageHero
        eyebrow="Our Showcase"
        title={<>Project <br/><span className="gold-shimmer">Showcase.</span></>}
        subtitle="Explore our in-depth case studies and project highlights."
      />
      <PortfolioGrid items={PORTFOLIO} />
    </div>
  )
}
