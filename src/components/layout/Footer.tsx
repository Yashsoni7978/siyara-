'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, FormEvent } from 'react'
import { BRAND, WA_LINKS } from '@/lib/constants'
import styles from './Footer.module.css'

const SERVICES_LINKS = [
  { href: '/services/web-development', label: 'Web Development' },
  { href: '/services/branding',        label: 'Branding & Identity' },
  { href: '/services/seo',             label: 'SEO & GEO Optimisation' },
  { href: '/services/ai-automation',   label: 'AI Automation' },
  { href: '/services',                 label: 'View All Services →' },
]

const INDUSTRY_LINKS = [
  { label: 'Restaurants & Food',      href: '/industries/hospitality' },
  { label: 'Fashion & Clothing',      href: '/industries/retail' },
  { label: 'Real Estate & Interiors', href: '/industries/realestate' },
  { label: 'E-commerce & D2C',        href: '/industries/ecommerce' },
  { label: 'Events & Weddings',       href: '/industries/events' },
]

const COMPANY_LINKS = [
  { href: '/about',        label: 'Why Siyara'      },
  { href: '/blog',         label: 'Insights'        },
  { href: '/contact',      label: 'Contact'         },
]

export function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState('')

  const handleNewsletterSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!newsletterEmail.trim()) return
    const subject = encodeURIComponent('Subscribe me to Siyara Insights')
    const body = encodeURIComponent(
      `Please add this email to the weekly insights list: ${newsletterEmail.trim()}`
    )
    window.location.href = `mailto:${BRAND.email}?subject=${subject}&body=${body}`
  }

  return (
    <footer id="footer" className={styles.footer} role="contentinfo">
      <div className={styles.main}>
        {/* Brand column */}
        <div className={styles.brand}>
          <Link href="/" aria-label="Siyara Innovations Home" className={styles.logoWrap}>
            <Image src="/apple-touch-icon.png" alt="Siyara Innovations Logo" width={48} height={48} style={{ borderRadius: '8px' }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              <span className={styles.logoMain}>Siyara</span>
              <span className={styles.logoSub}>Innovations</span>
            </div>
          </Link>
          <p className={styles.tagline}>
            We don&apos;t just build your digital presence.<br />
            <span className="gold-shimmer">We build brands that dominate.</span>
          </p>
          <a href={`mailto:${BRAND.email}`} className={styles.email}>{BRAND.email}</a>
          <p style={{ marginTop: '16px', fontSize: '0.95rem', color: 'rgba(var(--text-primary-rgb), 0.7)', maxWidth: '280px', lineHeight: 1.5 }}>
            Proudly building world-class digital experiences from Jaipur, Rajasthan. Founder-led by design — strategy stays close to execution.
          </p>

          <div className={styles.social} aria-label="Social media links">
            <a href={BRAND.instagram} className="social-link" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href={BRAND.linkedin} className="social-link" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href={BRAND.twitter} className="social-link" target="_blank" rel="noopener noreferrer" aria-label="Twitter / X">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.262 5.636 5.902-5.636zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
          </div>

          <div className={styles.waBlock}>
            <a href={WA_LINKS.default} target="_blank" rel="noopener noreferrer" className={styles.waBtn}>
              <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              WhatsApp Us
            </a>
          </div>
        </div>

        {/* Services column */}
        <div>
          <span className={styles.colTitle}>What We Do</span>
          <ul className={styles.linkList}>
            {SERVICES_LINKS.map(s => (
              <li key={s.label}>
                <Link href={s.href} className={styles.footerLink}>{s.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Industries column */}
        <div>
          <span className={styles.colTitle}>Industries</span>
          <ul className={styles.linkList}>
            {INDUSTRY_LINKS.map(s => (
              <li key={s.label}>
                <Link href={s.href} className={styles.footerLink}>{s.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company & Newsletter column */}
        <div>
          <span className={styles.colTitle}>Company</span>
          <ul className={styles.linkList}>
            {COMPANY_LINKS.map(s => (
              <li key={s.label}>
                <Link href={s.href} className={styles.footerLink}>{s.label}</Link>
              </li>
            ))}
          </ul>

          <div className={styles.newsletterBlock}>
            <span className={styles.colTitle} style={{ marginTop: '32px' }}>Stay Sharp</span>
            <p className={styles.newsletterText}>Get one strategy-led insight delivered weekly. No fluff.</p>
            <form className={styles.newsletterForm} onSubmit={handleNewsletterSubmit}>
              <input
                type="email"
                required
                placeholder="Enter your email"
                className={styles.newsletterInput}
                aria-label="Email for newsletter"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
              />
              <button type="submit" className={styles.newsletterBtn} aria-label="Subscribe">
                →
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <p className={styles.copy}>© 2026 {BRAND.name}. All rights reserved.</p>
        <div className={styles.legalLinks}>
          <Link href="/privacy" className={styles.legalLink}>Privacy Policy</Link>
          <Link href="/terms" className={styles.legalLink}>Terms of Service</Link>
          <Link href="/sitemap.xml" className={styles.legalLink}>Sitemap</Link>
        </div>
        <div className={styles.made}>
          All Systems Operational <span className={styles.madeDot} aria-hidden="true" />
        </div>
      </div>
    </footer>
  )
}
