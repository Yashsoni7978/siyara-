'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { WA_LINKS } from '@/lib/constants'
import { Home, Briefcase, Image as ImageIcon, User, MessageSquare } from 'lucide-react'
import styles from './Navigation.module.css'

const NAV_LINKS = [
  { label: 'WORK', href: '/portfolio' },
  { label: 'SERVICES', href: '/services' },
  { label: 'MANIFESTO', href: '/about' },
  { label: 'CONTACT', href: '/contact' },
]

export function Navigation() {
  const [scrolled, setScrolled]       = useState(false)
  const [menuOpen, setMenuOpen]       = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
    document.body.style.overflow = ''
  }, [pathname])

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
          <span className={styles.logoMain}>SIYARA.INNOVATIONS</span>
        </Link>

        <div className={styles.desktopLinksContainer}>
          <ul className={styles.links}>
            {NAV_LINKS.map(link => (
              <li key={link.label} className={styles.navItem}>
                <Link 
                  href={link.href} 
                  className={`${styles.link} ${pathname === link.href ? styles.active : ''}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
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
            <Link key={link.label} href={link.href} className={styles.mobileLink}>
              {link.label}
            </Link>
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
