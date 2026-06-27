'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { WA_LINKS } from '@/lib/constants'
import { Home, Briefcase, Image as ImageIcon, User, MessageSquare } from 'lucide-react'
import { MagnificationDock } from '@/components/ui/MagnificationDock'
import styles from './Navigation.module.css'

const NAV_LINKS = [
  { label: 'Services', href: '/services' },
  { label: 'Work', href: '/portfolio' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export function Navigation() {
  const [scrolled, setScrolled]       = useState(false)
  const [menuOpen, setMenuOpen]       = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  const dockItems = [
    { icon: <Home size={22} strokeWidth={1.5} />, label: 'Home', onClick: () => router.push('/') },
    { icon: <Briefcase size={22} strokeWidth={1.5} />, label: 'Services', onClick: () => router.push('/services') },
    { icon: <ImageIcon size={22} strokeWidth={1.5} />, label: 'Work', onClick: () => router.push('/portfolio') },
    { icon: <User size={22} strokeWidth={1.5} />, label: 'About', onClick: () => router.push('/about') },
    { icon: <MessageSquare size={22} strokeWidth={1.5} />, label: 'Contact', onClick: () => router.push('/contact') },
  ]

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
          <div style={{ 
            display: 'flex', alignItems: 'center', justifyContent: 'center', 
            width: '36px', height: '36px', 
            background: 'linear-gradient(135deg, #5aa68a 0%, #C9A84C 100%)', 
            borderRadius: '8px', 
            boxShadow: '0 4px 16px rgba(90, 166, 138, 0.3)' 
          }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="7" r="4" />
              <line x1="12" y1="11" x2="12" y2="22" />
              <line x1="9" y1="16" x2="15" y2="16" />
              <line x1="8" y1="7" x2="16" y2="7" />
            </svg>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0, marginLeft: '4px' }}>
            <span className={styles.logoMain}>Siyara</span>
          </div>
        </Link>

        <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
          <MagnificationDock 
            items={dockItems} 
            panelHeight={56} 
            baseItemSize={40} 
            magnification={60} 
          />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <Link
            href={WA_LINKS.default}
            className={styles.cta}
            aria-label="Start a Project"
            target="_blank"
            rel="noopener noreferrer"
          >
            Start a Project
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
