import Link from 'next/link'
import styles from './NotFound.module.css'

export default function NotFound() {
  return (
    <div className={styles.wrap}>
      <div className={styles.glow} aria-hidden="true" />
      <div className="hero-grid-bg" aria-hidden="true" />
      <div className={styles.content}>
        <h1 className={styles.code}>404</h1>
        <h2 className={styles.title}>Page Not Found</h2>
        <p className={styles.desc}>
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link href="/" className="btn-primary">
          Return Home →
        </Link>
      </div>
    </div>
  )
}
