'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Reveal } from '@/components/ui/Reveal'
import styles from './portfolio.module.css'

const INDUSTRIES = [
  'All',
  'Events & Weddings',
  'Real Estate & Interiors',
  'Restaurants & Food',
  'Fashion & Clothing',
  'Fitness & Wellness',
  'Education & EdTech',
  'Healthcare & Clinics',
]

interface PortfolioItem {
  id: string
  name: string
  industry: string
  desc: string
  image: string
  demoLink: string
}

interface Props {
  items: readonly PortfolioItem[]
}

export function PortfolioGrid({ items }: Props) {
  const [active, setActive] = useState('All')

  const filtered = active === 'All'
    ? items
    : items.filter(item => item.industry === active)

  return (
    <>
      {/* ---- Filter Chips ---- */}
      <section className={styles.filterSection} aria-label="Filter by industry">
        <div className={styles.filterWrap}>
          {INDUSTRIES.map((ind) => (
            <button
              key={ind}
              onClick={() => setActive(ind)}
              className={`${styles.filterChip} ${active === ind ? styles.filterActive : ''}`}
              aria-pressed={active === ind}
            >
              {ind}
            </button>
          ))}
        </div>
      </section>

      {/* ---- Card Grid ---- */}
      <section className={styles.portfolioSection} aria-label="Portfolio projects">
        <div className="section-wrap">
          <div className={styles.grid}>
            {filtered.map((item, i) => (
              <Reveal key={item.id} delay={(i % 3) * 0.12}>
                <a
                  href={item.demoLink}
                  className={styles.card}
                  aria-label={`View ${item.name} case study`}
                >
                  {/* Image */}
                  <div className={styles.cardVisual}>
                    <Image
                      src={item.image || '/images/portfolio_fashion.png'}
                      alt={`${item.name} showcase`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className={styles.cardImg}
                    />
                    {/* Overlay */}
                    <div className={styles.cardOverlay}>
                      <span className={styles.cardCta}>View Case Study →</span>
                    </div>
                    {/* Top badge */}
                    <span className={styles.cardBadge}>{item.industry}</span>
                  </div>

                  {/* Meta */}
                  <div className={styles.cardBody}>
                    <h2 className={styles.cardName}>{item.name}</h2>
                    <p className={styles.cardDesc}>{item.desc}</p>
                    <span className={styles.cardArrow}>View Case Study →</span>
                  </div>
                </a>
              </Reveal>
            ))}

            {filtered.length === 0 && (
              <div className={styles.emptyState}>
                <span>No projects found in this category yet.</span>
                <button className={styles.emptyReset} onClick={() => setActive('All')}>
                  View All Projects →
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
