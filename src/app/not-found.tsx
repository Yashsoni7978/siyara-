import Link from 'next/link'
import styles from './NotFound.module.css'

export default function NotFound() {
  return (
    <div className={styles.wrap}>
      <div className={styles.glow} aria-hidden="true" />
      <div className="hero-grid-bg" aria-hidden="true" />
      <div className={styles.content}>
        <h1 className={styles.code}>404</h1>
        <h2 className={styles.title}>Looks like you&apos;re lost.</h2>
        <p className={styles.desc}>
          You must have wandered down the wrong lane in the Pink City... Let&apos;s get you back to the main road.
        </p>
        <Link href="/" className="btn-primary">
          Return Home →
        </Link>
      </div>
    </div>
  )
}
