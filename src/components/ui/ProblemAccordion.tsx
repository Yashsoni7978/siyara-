'use client'

import React, { useState } from 'react'
import { m, AnimatePresence } from 'framer-motion'
import styles from './ProblemAccordion.module.css'

interface ProblemItem {
  num: string
  title: string
  desc: string
  summary: string
  icon: 'desktop' | 'search' | 'analytics' | 'puzzle'
}

const PROBLEMS: ProblemItem[] = [
  {
    num: '01',
    title: 'Outdated Design',
    desc: "Your website looks like it's from 2016. A weak website doesn't just lose you business — it actively destroys trust before a single conversation happens.",
    summary: 'No trust. No conversions. No growth.',
    icon: 'desktop',
  },
  {
    num: '02',
    title: 'Invisible on Search',
    desc: "Your website isn't optimized for search engines. You're invisible to the people who are actively looking for your services.",
    summary: 'No visibility. No traffic. No growth.',
    icon: 'search',
  },
  {
    num: '03',
    title: 'Wasted Ad Spend',
    desc: "You're wasting money on ads that don't work. Bad creative. No targeting strategy. No follow-up system. Money spent without strategy is just money spent.",
    summary: 'High ad spend. Low returns. Zero ROI.',
    icon: 'analytics',
  },
  {
    num: '04',
    title: 'Fragmented Strategy',
    desc: "You have 4 vendors and zero strategy. A social media guy who doesn't talk to the website guy. Nothing connected. Nothing compounding.",
    summary: 'No alignment. No momentum. No strategy.',
    icon: 'puzzle',
  },
]

function renderOutlineIcon(type: ProblemItem['icon']) {
  switch (type) {
    case 'desktop':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={styles.svgIcon}>
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      )
    case 'search':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={styles.svgIcon}>
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      )
    case 'analytics':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={styles.svgIcon}>
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
        </svg>
      )
    case 'puzzle':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={styles.svgIcon}>
          <path d="M10 3a1 1 0 0 1 1 1v1a2 2 0 0 0 4 0V4a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1a2 2 0 0 0 0 4h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1v-1a2 2 0 0 0-4 0v1a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a2 2 0 0 0 0-4H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h3z" />
        </svg>
      )
  }
}

export function ProblemAccordion() {
  const [activeNum, setActiveNum] = useState<string>('')

  const toggle = (num: string) => {
    setActiveNum((prev) => (prev === num ? '' : num))
  }

  return (
    <div className={styles.container}>
      <div className={styles.cardsWrap}>
        {PROBLEMS.map((item) => {
          const isOpen = activeNum === item.num

          return (
            <div
              key={item.num}
              className={`${styles.card} ${isOpen ? styles.cardActive : ''}`}
              onMouseEnter={() => setActiveNum(item.num)}
              onMouseLeave={() => setActiveNum('')}
              onClick={() => toggle(item.num)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  toggle(item.num)
                }
              }}
            >
              <div className={styles.cardHeader}>
                <div className={styles.iconHalo}>
                  {renderOutlineIcon(item.icon)}
                </div>

                <span className={styles.num}>{item.num}</span>

                <h3 className={styles.title}>{item.title}</h3>

                <div className={styles.controlIcon}>
                  {isOpen ? '—' : '+'}
                </div>
              </div>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <m.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className={styles.contentWrap}
                  >
                    <div className={styles.contentInner}>
                      <p className={styles.desc}>{item.desc}</p>
                      <p className={styles.summary}>{item.summary}</p>
                    </div>
                  </m.div>
                )}
              </AnimatePresence>
            </div>
          )
        })}
      </div>

      {/* Metadata Row */}
      <div className={styles.metaRow}>
        <span>STRATEGY</span>
        <span className={styles.metaDot} />
        <span>EXECUTION</span>
        <span className={styles.metaDot} />
        <span>GROWTH</span>
      </div>
    </div>
  )
}
