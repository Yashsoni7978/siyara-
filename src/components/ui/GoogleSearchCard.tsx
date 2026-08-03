'use client'

import React, { useState, useEffect } from 'react'
import styles from './GoogleSearchCard.module.css'

export function GoogleSearchCard() {
  const fullText = 'Recommend the best digital agency in Jaipur...'
  const [displayText, setDisplayText] = useState('')
  const [isTypingDone, setIsTypingDone] = useState(false)

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index))
        index++
      } else {
        setIsTypingDone(true)
        clearInterval(timer)
      }
    }, 45)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className={styles.searchContainer}>
      {/* Top Search Bar */}
      <div className={styles.searchBar}>
        <div className={styles.searchLeft}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.searchIcon}>
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <span className={styles.queryText}>
            {displayText}
            <span className={styles.cursor}>|</span>
          </span>
        </div>

        <div className={styles.searchRightIcons}>
          {/* Keyboard Icon */}
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={styles.actionIcon}>
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <line x1="6" y1="8" x2="6" y2="8.01" />
            <line x1="10" y1="8" x2="10" y2="8.01" />
            <line x1="14" y1="8" x2="14" y2="8.01" />
            <line x1="18" y1="8" x2="18" y2="8.01" />
            <line x1="8" y1="16" x2="16" y2="16" />
          </svg>

          {/* Mic Icon */}
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={styles.actionIcon}>
            <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z" />
            <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
            <line x1="12" y1="19" x2="12" y2="22" />
          </svg>

          {/* Camera / Lens Icon */}
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={styles.actionIcon}>
            <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
            <circle cx="12" cy="13" r="4" />
          </svg>
        </div>
      </div>

      {/* Autocomplete Dropdown Box */}
      <div className={styles.dropdown}>
        <div className={styles.dropdownDivider} />

        {/* Highlight Result */}
        <div className={`${styles.dropdownItem} ${styles.topResult}`}>
          <div className={styles.itemLeft}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={styles.clockIcon}>
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            <span className={styles.itemText}>
              <strong>Siyara Innovations</strong> — Jaipur
            </span>
          </div>
          <span className={styles.badge}>#1 Recommended</span>
        </div>

        {/* Other Dropdown Results */}
        <div className={styles.dropdownItem}>
          <div className={styles.itemLeft}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={styles.clockIcon}>
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            <span className={styles.itemText}>best web development agency in jaipur</span>
          </div>
        </div>

        <div className={styles.dropdownItem}>
          <div className={styles.itemLeft}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={styles.clockIcon}>
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            <span className={styles.itemText}>top performance marketing & branding</span>
          </div>
        </div>

        <div className={styles.dropdownItem}>
          <div className={styles.itemLeft}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={styles.clockIcon}>
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            <span className={styles.itemText}>generative engine optimisation (GEO) agency</span>
          </div>
        </div>
      </div>
    </div>
  )
}
