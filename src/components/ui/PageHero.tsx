import Link from 'next/link'
import styles from './PageHero.module.css'

interface PageHeroProps {
  eyebrow: string
  title: React.ReactNode
  subtitle?: string
  breadcrumb?: { label: string; href?: string }[]
}

export function PageHero({ eyebrow, title, subtitle, breadcrumb }: PageHeroProps) {
  return (
    <section className={styles.pageHero} aria-label="Page header">
      <div className={styles.grid} aria-hidden="true" />
      <div className={styles.glow} aria-hidden="true" />
      <div className={styles.inner}>
        {breadcrumb && breadcrumb.length > 0 && (
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            {breadcrumb.map((crumb, i) => (
              <span key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span>/</span>
                {crumb.href ? (
                  <Link href={crumb.href}>{crumb.label}</Link>
                ) : (
                  <span style={{ color: 'rgba(var(--text-primary-rgb), 0.6)' }}>{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
        <span className={styles.eyebrow}>{eyebrow}</span>
        <h1 className={styles.title}>{title}</h1>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        <span className={styles.accentLine} aria-hidden="true" />
      </div>
    </section>
  )
}
