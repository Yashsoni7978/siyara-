import { Sparkles, Compass, Workflow, Shield } from 'lucide-react'
import { Reveal } from '@/components/ui/Reveal'
import styles from './TrustMetrics.module.css'

const METRICS = [
  {
    icon: Sparkles,
    num: '14+',
    title: 'Expert Services',
    desc: 'Branding, Development, Marketing & AI',
  },
  {
    icon: Compass,
    num: '5',
    title: 'Core Industries',
    desc: 'Experience across multiple business sectors.',
  },
  {
    icon: Workflow,
    num: '1',
    title: 'Unified Growth Strategy',
    desc: 'Everything works as one system.',
  },
  {
    icon: Shield,
    num: '0',
    title: 'Generic Solutions',
    desc: 'Every project is built from scratch.',
  },
]

export function TrustMetrics() {
  return (
    <section className={styles.section} aria-label="Why businesses choose Siyara">
      <div className={styles.container}>
        <Reveal>
          <h2 className={styles.heading}>WHY BUSINESSES CHOOSE SIYARA</h2>
        </Reveal>
        
        <div className={styles.grid}>
          {METRICS.map((metric, i) => (
            <Reveal key={metric.title} delay={i * 0.08} className={styles.cardWrapper}>
              <div className={styles.card}>
                <div className={styles.iconWrapper}>
                  <metric.icon size={20} strokeWidth={1.5} />
                </div>
                <div className={styles.content}>
                  <span className={styles.number}>{metric.num}</span>
                  <h3 className={styles.title}>{metric.title}</h3>
                  <p className={styles.desc}>{metric.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
