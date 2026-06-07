import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import { INDUSTRIES, PORTFOLIO, WA_LINKS, BRAND } from '@/lib/constants'
import { TESTIMONIALS } from '@/lib/social-proof'
import { PageHero } from '@/components/ui/PageHero'
import { CTA } from '@/components/ui/CTA'
import { Reveal } from '@/components/ui/Reveal'
import styles from './industry.module.css'
import { IconMap } from '@/components/ui/Icons'

export async function generateStaticParams() {
  return INDUSTRIES.map((ind) => ({
    id: ind.id,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const resolvedParams = await params
  const ind = INDUSTRIES.find((i) => i.id === resolvedParams.id)
  if (!ind) return { title: 'Not Found' }
  return {
    title: `Digital Marketing for ${ind.name} in ${BRAND.location.split(',')[0]} | ${BRAND.name}`,
    description: ind.desc,
    alternates: { canonical: `${BRAND.siteUrl}/industries/${ind.id}` },
    openGraph: {
      title: `${ind.name} Digital Marketing | ${BRAND.name}`,
      description: ind.desc,
      url: `${BRAND.siteUrl}/industries/${ind.id}`,
    },
  }
}

export default async function IndustryPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params
  const ind = INDUSTRIES.find((i) => i.id === resolvedParams.id)
  if (!ind) notFound()

  // Find portfolio items for this industry
  const relatedProjects = PORTFOLIO.filter(p => p.industry === ind.name)
  
  // Find testimonials for this industry (using a simple text match for the company string)
  const relatedTestimonials = TESTIMONIALS.filter(t => {
    if (ind.id === 'restaurants' && (t.company.includes('Restaurant') || t.company.includes('Roasting'))) return true;
    if (ind.id === 'fashion' && (t.company.includes('Fashion') || t.company.includes('Aesthetics'))) return true; // Include Aesthetics as it's D2C/Lifestyle related in portfolio
    if (ind.id === 'realestate' && t.company.includes('Properties')) return true;
    if (ind.id === 'events' && (t.company.includes('Events') || t.company.includes('Weddings'))) return true;
    if (ind.id === 'ecommerce' && (t.company.includes('Fashion') || t.company.includes('Studio'))) return true; // Map some to ecom
    return false;
  })

  // Use type assertion for WA_LINKS
  const waKey = ind.waLink as keyof typeof WA_LINKS
  const waHref = WA_LINKS[waKey] || WA_LINKS.default

  return (
    <>
      <PageHero
        eyebrow="Industries We Serve"
        title={
          <>
            <span className={styles.heroIcon}>{IconMap[ind.icon]}</span>
            <br />
            {ind.name}
          </>
        }
        subtitle={ind.desc}
        breadcrumb={[
          { label: 'Industries' },
          { label: ind.name },
        ]}
      />

      <section className={styles.container}>
        <div className="section-wrap">
          
          {relatedProjects.length > 0 && (
            <div style={{ marginBottom: '8rem' }}>
              <Reveal className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>Featured Work</h2>
              </Reveal>
              <div className={styles.portfolioGrid}>
                {relatedProjects.map((project, i) => (
                  <Reveal key={project.id} delay={i * 0.1} className={styles.projectCard}>
                    <h3 className={styles.projectName}>{project.name}</h3>
                    <p className={styles.projectDesc}>{project.desc}</p>
                    <Link href={project.demoLink} className={styles.projectLink}>View Case Study →</Link>
                  </Reveal>
                ))}
              </div>
            </div>
          )}

          {relatedTestimonials.length > 0 && (
            <div>
              <Reveal className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>Client Success</h2>
              </Reveal>
              <div className={styles.testimonialGrid}>
                {relatedTestimonials.map((t, i) => (
                  <Reveal key={t.id} delay={i * 0.1} className={styles.testimonialCard}>
                    <div className={styles.testimonialTop}>
                      <div className={styles.avatar}>{t.avatar}</div>
                      <div className={styles.authorInfo}>
                        <span className={styles.authorName}>{t.name}</span>
                        <span className={styles.authorRole}>{t.role}, {t.company}</span>
                      </div>
                    </div>
                    <p className={styles.testimonialText}>&ldquo;{t.text}&rdquo;</p>
                  </Reveal>
                ))}
              </div>
            </div>
          )}

        </div>
      </section>

      <CTA
        title={
          <>
            Grow your <br/>
            <span className="gold-shimmer">{ind.name}</span> business.
          </>
        }
        description={`We know the ${ind.name} market in Jaipur better than anyone. Let's discuss a strategy tailored to your exact sector.`}
        primaryBtn={{
          text: `Enquire about ${ind.name}`,
          href: waHref,
          isExternal: true,
          hasIcon: true,
        }}
      />
    </>
  )
}
