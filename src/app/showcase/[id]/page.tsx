import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { PORTFOLIO, WA_LINKS, BRAND } from '@/lib/constants'
import { PageHero } from '@/components/ui/PageHero'
import { CTA } from '@/components/ui/CTA'
import styles from './showcase.module.css'

interface Props {
  params: Promise<{ id: string }>
}

export async function generateStaticParams() {
  return PORTFOLIO.map(p => ({ id: p.id }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const project = PORTFOLIO.find(p => p.id === id)
  
  if (!project) return { title: 'Project Not Found' }
  
  return {
    title: `${project.name} | Portfolio`,
    description: project.desc,
    alternates: { canonical: `${BRAND.siteUrl}/showcase/${id}` },
    openGraph: {
      title: `${project.name} | Siyara Innovations Portfolio`,
      description: project.desc,
      url: `${BRAND.siteUrl}/showcase/${id}`,
      ...(project.image ? { images: [{ url: `${BRAND.siteUrl}${project.image}` }] } : {})
    },
  }
}

export default async function ShowcasePage({ params }: Props) {
  const { id } = await params
  const project = PORTFOLIO.find(p => p.id === id)
  
  if (!project) notFound()

  return (
    <>
      <PageHero
        eyebrow="Case Study"
        title={project.name}
        subtitle="A deep dive into how we built this premium digital experience."
        breadcrumb={[{ label: 'Portfolio', href: '/portfolio' }, { label: project.name }]}
      />

      <article className={styles.showcaseContainer}>
        <div className="section-wrap">
          <div className={styles.showcaseInner}>
            
            {/* Left: Visual */}
            <div className={styles.visualCol}>
              {project.image ? (
                <Image
                  src={project.image}
                  alt={`${project.name} preview`}
                  fill
                  className={styles.projectImage}
                  priority
                  sizes="(max-width: 900px) 100vw, 60vw"
                />
              ) : (
                <>
                  <div className={styles.cardPattern} aria-hidden="true" />
                  <span className={styles.cardInitials}>
                    {project.name.split(' ').map(w => w[0]).join('').slice(0, 2)}
                  </span>
                </>
              )}
            </div>

            {/* Right: Content */}
            <div className={styles.contentCol}>
              <div>
                <span className={styles.projectIndustry}>{project.industry}</span>
              </div>
              <h2 className={styles.projectTitle}>{project.name}</h2>
              <p className={styles.projectDesc}>{project.desc}</p>
              
              <div className={styles.divider} />
              
              <div>
                <span className="eyebrow" style={{ marginBottom: '24px', display: 'block' }}>Key Deliverables</span>
                <ul className={styles.featureList}>
                  <li className={styles.featureItem}>
                    <svg className={styles.featureIcon} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    <span>Premium UI/UX Design</span>
                  </li>
                  <li className={styles.featureItem}>
                    <svg className={styles.featureIcon} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    <span>Next.js High-Performance Frontend</span>
                  </li>
                  <li className={styles.featureItem}>
                    <svg className={styles.featureIcon} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    <span>Technical SEO & Structured Data</span>
                  </li>
                  <li className={styles.featureItem}>
                    <svg className={styles.featureIcon} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    <span>Lead Conversion Optimisation</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </article>

      <CTA 
        eyebrow="Like What You See?"
        title={<>Want a digital presence like<br /><span className="gold-shimmer">{project.name}?</span></>}
        description="We take exactly the same strategy-first, premium-only approach for every client we work with. Let's talk about your brand."
        primaryBtn={{ text: 'Start Your Project', href: WA_LINKS.hero, isExternal: true }}
        secondaryBtn={{ text: 'Back to Portfolio', href: '/portfolio' }}
      />
    </>
  )
}
