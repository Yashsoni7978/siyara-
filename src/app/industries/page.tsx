import type { Metadata } from 'next'
import Link from 'next/link'
import { BRAND, INDUSTRIES, WA_LINKS } from '@/lib/constants'
import { PageHero } from '@/components/ui/PageHero'
import { Reveal } from '@/components/ui/Reveal'
import { CTA } from '@/components/ui/CTA'
import { IconMap } from '@/components/ui/Icons'
import styles from './industries.module.css'

export const metadata: Metadata = {
  title: `Industries We Serve in Jaipur & India | ${BRAND.name}`,
  description: 'Siyara Innovations provides specialized digital marketing, SEO, and web development solutions tailored for restaurants, fashion, real estate, e-commerce, and events.',
  alternates: { canonical: `${BRAND.siteUrl}/industries` },
  openGraph: {
    title: `Industries We Serve | ${BRAND.name}`,
    description: 'Specialized digital growth strategies for ambitious businesses in Jaipur and across India.',
    url: `${BRAND.siteUrl}/industries`,
  },
}

export default function IndustriesPage() {
  return (
    <main className="page-transition">
      <PageHero
        eyebrow="INDUSTRIES WE SERVE"
        title={<>Specialized strategies.<br /><span className="gold-shimmer">Industry-leading results.</span></>}
        subtitle={`At ${BRAND.name}, we understand that a one-size-fits-all approach doesn't work. We bring deep domain expertise to Jaipur's most competitive sectors, delivering tailored web development and marketing strategies that drive actual business growth.`}
        breadcrumb={[{ label: 'Industries' }]}
      />

      <section className={styles.industriesGridSection} aria-label="Our Industries">
        <div className="section-wrap">
          <div className={styles.grid}>
            {INDUSTRIES.map((ind, i) => (
              <Reveal key={ind.id} delay={i * 0.1} className={styles.industryCard}>
                <div className={styles.cardHeader}>
                  <div className={styles.iconWrap}>
                    {IconMap[ind.icon as keyof typeof IconMap]}
                  </div>
                  <h2 className={styles.cardTitle}>{ind.name}</h2>
                </div>
                <p className={styles.cardDesc}>{ind.desc}</p>
                <div className={styles.cardActions}>
                  <Link href={`/industries/${ind.id}`} className={styles.primaryLink}>
                    Explore our {ind.name} solutions →
                  </Link>
                  <a href={WA_LINKS[ind.waLink as keyof typeof WA_LINKS] || WA_LINKS.default} target="_blank" rel="noopener noreferrer" className={styles.secondaryLink}>
                    Discuss a project
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div id="action">
        <CTA 
          title={<>Don&apos;t see your industry?<br /><span className="gold-shimmer">Good strategy translates anywhere.</span></>}
          description="Our core methodology—combining premium web development, SEO, and performance marketing—works for any business committed to growth. Let's discuss how we can adapt it for you."
          primaryBtn={{ text: 'Book a Strategy Call', href: WA_LINKS.strategyCall, isExternal: true, hasIcon: true }}
          secondaryBtn={{ text: 'View Our Services →', href: '/services' }}
        />
      </div>
    </main>
  )
}
