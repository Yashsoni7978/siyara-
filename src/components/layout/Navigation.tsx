'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { WA_LINKS } from '@/lib/constants'
import { Home, Briefcase, Image as ImageIcon, User, MessageSquare } from 'lucide-react'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import styles from './Navigation.module.css'

const NAV_LINKS = [
  {
    label: 'EXPERTISE',
    dropdown: [
      { label: 'Services', href: '/services' },
      { label: 'Industries', href: '/industries' },
    ]
  },
  { label: 'PORTFOLIO', href: '/portfolio' },
  { label: 'PRICING', href: '/pricing' },
  {
    label: 'COMPANY',
    dropdown: [
      { label: 'About', href: '/about' },
      { label: 'FAQ', href: '/faq' },
      { label: 'Blog', href: '/blog' },
    ]
  },
  { label: 'CONTACT', href: '/contact' },
]

export function Navigation() {
  const [scrolled, setScrolled]       = useState(false)
  const [menuOpen, setMenuOpen]       = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    let ticking = false
    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        setScrolled(prev => {
          const next = window.scrollY > 40
          return prev === next ? prev : next
        })
        ticking = false
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
    document.body.style.overflow = ''
  }, [pathname])

  // Close mobile menu on Escape, and always restore body scroll on unmount
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMenuOpen(false)
        document.body.style.overflow = ''
      }
    }
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [])

  const toggleMenu = () => {
    setMenuOpen(prev => {
      const next = !prev
      document.body.style.overflow = next ? 'hidden' : ''
      return next
    })
  }

  return (
    <>
      <nav
        className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}
        role="navigation"
        aria-label="Main navigation"
      >
        <Link href="/" className={styles.logo} aria-label="Siyara Innovations Home">
          <img src="/icon.png" alt="Siyara" width={56} height={56} className={styles.logoIcon} />
          <div className={styles.logoDivider}></div>
          <span className={styles.logoMain}>Siyara Innovations</span>
        </Link>

        <div className={styles.desktopLinksContainer}>
          <ul className={styles.links}>
            {NAV_LINKS.map(link => (
              <li key={link.label} className={styles.navItem}>
                {link.href ? (
                  <Link 
                    href={link.href} 
                    className={`${styles.link} ${pathname === link.href ? styles.active : ''}`}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <>
                    <span className={styles.link} style={{ cursor: 'pointer' }}>{link.label} ▾</span>
                    <div className={styles.dropdownMenu}>
                      {link.dropdown?.map(sub => (
                        <Link 
                          key={sub.label} 
                          href={sub.href} 
                          className={`${styles.dropdownLink} ${pathname === sub.href ? styles.active : ''}`}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <ThemeToggle />
          <Link
            href={WA_LINKS.default}
            className={styles.cta}
            aria-label="Start a Project"
            target="_blank"
            rel="noopener noreferrer"
          >
            START PROJECT
          </Link>
        </div>

        <button
          className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ''}`}
          onClick={toggleMenu}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span /><span /><span />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        <div className={styles.mobileGroup}>
          {NAV_LINKS.map(link => (
            link.href ? (
              <Link 
                key={link.label} 
                href={link.href} 
                className={`${styles.mobileLink} ${pathname === link.href ? styles.active : ''}`}
              >
                {link.label}
              </Link>
            ) : (
              <div key={link.label} className={styles.mobileDropdownGroup}>
                <span className={styles.mobileDropdownLabel}>{link.label}</span>
                {link.dropdown?.map(sub => (
                  <Link 
                    key={sub.label} 
                    href={sub.href} 
                    className={`${styles.mobileLink} ${styles.mobileSubLink} ${pathname === sub.href ? styles.active : ''}`}
                  >
                    {sub.label}
                  </Link>
                ))}
              </div>
            )
          ))}
        </div>
        <Link
          href={WA_LINKS.default}
          className={styles.mobileCta}
          target="_blank"
          rel="noopener noreferrer"
        >
          Start a Project
        </Link>
      </div>
    </>
  )
}
