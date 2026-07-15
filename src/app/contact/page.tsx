import type { Metadata } from 'next'
import Link from 'next/link'
import { WA_LINKS, BRAND } from '@/lib/constants'
import { contactPageSchema, buildFaqSchema } from '@/lib/seo'
import { Reveal } from '@/components/ui/Reveal'
import { CTA } from '@/components/ui/CTA'
import styles from './contact.module.css'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Siyara Innovations. Start with a free 30-minute strategy call or message us on WhatsApp. We reply within 4 hours.',
  alternates: { canonical: `${BRAND.siteUrl}/contact` },
}

const FAQ = [
  { q: 'Where are you based?', a: 'We are based in Jaipur, Rajasthan. We work seamlessly with businesses across India — whether you are local to Jaipur or anywhere else in the country.' },
  { q: 'How quickly do you respond?', a: 'We typically respond to WhatsApp messages within 4 hours during weekdays (Mon–Sat, 9am–7pm IST).' },
  { q: 'Do you work with businesses outside Jaipur?', a: 'Yes. While we specialise in Jaipur-based businesses, we work with clients across India.' },
  { q: 'What is the minimum engagement?', a: "There's no minimum — we work on one-off projects and long-term retainers alike. The right fit depends on your goals." },
  { q: 'Do you offer a free consultation?', a: 'Yes. We offer a free 30-minute strategy call where we will tell you honestly what your brand needs — and what it does not.' },
]

export default function ContactPage() {
  const faqSchema = buildFaqSchema(FAQ)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ============================================================
          01 — HERO
      ============================================================ */}
      <section className={styles.contactHero} aria-label="Contact hero">
        <div className={styles.contactHeroGrid} aria-hidden="true" />
        <div className={styles.contactHeroGlow} aria-hidden="true" />
        <div className={styles.contactHeroInner}>
          <Reveal as="span" className={styles.contactKicker}>
            01 / INITIATE
          </Reveal>
          <Reveal as="h1" delay={0.1} className={styles.contactH1}>
            <span className={styles.contactH1Ivory}>LET&apos;S BUILD</span>
            <span className={styles.contactH1Ivory}>SOMETHING</span>
            <span className={styles.contactH1Ivory}>WORTH TALKING</span>
            <span className={styles.contactH1Green}>ABOUT.</span>
          </Reveal>
          <Reveal as="p" delay={0.25} className={styles.contactHeroSub}>
            Tell us what is slowing the business down. Visibility, positioning, technology or growth — the first conversation starts with the problem.
          </Reveal>
          <Reveal delay={0.35}>
            <span className={styles.contactHeroLine} aria-hidden="true" />
          </Reveal>
        </div>
      </section>

      {/* ============================================================
          02 — CONTACT INTERFACE
      ============================================================ */}
      <section className={styles.interfaceSection} aria-label="Contact channels">
        <div className="section-wrap">
          <Reveal as="span" className={styles.contactKicker}>
            02 / START HERE
          </Reveal>
          <Reveal as="h2" delay={0.1} className={styles.contactSectionTitle}>
            <span>CHOOSE THE CHANNEL.</span>
            <span className={styles.greenEmphasis}>START WITH THE PROBLEM.</span>
          </Reveal>

          <div className={styles.channelGrid}>
            {/* WhatsApp — Primary */}
            <Reveal className={styles.channelPrimary}>
              <div className={styles.channelHeader}>
                <span className={styles.channelLabel}>CHANNEL / 01</span>
              </div>
              <h3 className={styles.channelName}>WHATSAPP</h3>
              <div className={styles.channelMeta}>
                <div className={styles.channelMetaItem}>
                  <span className={styles.channelMetaKey}>STATUS</span>
                  <span className={styles.channelMetaValue}>FASTEST</span>
                </div>
                <div className={styles.channelMetaItem}>
                  <span className={styles.channelMetaKey}>RESPONSE</span>
                  <span className={styles.channelMetaValue}>WITHIN 4H</span>
                </div>
              </div>
              <p className={styles.channelDesc}>
                Best for a quick first conversation. Tell us what is not working and where you want the business to go.
              </p>
              <Link
                href={WA_LINKS.contact}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.channelCta}
              >
                START ON WHATSAPP →
              </Link>
            </Reveal>

            <div className={styles.channelSecondaryStack}>
              {/* Call */}
              <Reveal delay={0.1} className={styles.channelSecondary}>
                <div className={styles.channelHeader}>
                  <span className={styles.channelLabel}>CHANNEL / 02</span>
                </div>
                <h3 className={styles.channelName}>CALL</h3>
                <div className={styles.channelMeta}>
                  <div className={styles.channelMetaItem}>
                    <span className={styles.channelMetaKey}>AVAILABILITY</span>
                    <span className={styles.channelMetaValue}>WORKING HOURS</span>
                  </div>
                  <div className={styles.channelMetaItem}>
                    <span className={styles.channelMetaKey}>HOURS</span>
                    <span className={styles.channelMetaValue}>MON–SAT · 9AM–7PM IST</span>
                  </div>
                </div>
                <p className={styles.channelDesc}>
                  Prefer to speak directly? Call during working hours and start with the problem.
                </p>
                <Link
                  href={`tel:+${BRAND.whatsappNumber}`}
                  className={styles.channelCta}
                >
                  CALL SIYARA →
                </Link>
              </Reveal>

              {/* Email */}
              <Reveal delay={0.2} className={styles.channelSecondary}>
                <div className={styles.channelHeader}>
                  <span className={styles.channelLabel}>CHANNEL / 03</span>
                </div>
                <h3 className={styles.channelName}>EMAIL</h3>
                <div className={styles.channelMeta}>
                  <div className={styles.channelMetaItem}>
                    <span className={styles.channelMetaKey}>TYPE</span>
                    <span className={styles.channelMetaValue}>DETAILED</span>
                  </div>
                  <div className={styles.channelMetaItem}>
                    <span className={styles.channelMetaKey}>RESPONSE</span>
                    <span className={styles.channelMetaValue}>WITHIN 24H</span>
                  </div>
                </div>
                <p className={styles.channelDesc}>
                  For context-heavy briefs, send the details. Business, current friction and the outcome you are working towards.
                </p>
                <Link
                  href={`mailto:${BRAND.email}`}
                  className={styles.channelCta}
                >
                  SEND AN EMAIL →
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          03 — THE BRIEF
      ============================================================ */}
      <section className={styles.briefSection} aria-label="How to start the conversation">
        <div className="section-wrap">
          <Reveal as="span" className={styles.contactKicker}>
            03 / THE BRIEF
          </Reveal>
          <Reveal as="h2" delay={0.1} className={styles.contactSectionTitle}>
            <span>START WITH THE PROBLEM.</span>
            <span className={styles.greenEmphasis}>WE&apos;LL MAP THE SYSTEM.</span>
          </Reveal>

          <div className={styles.briefGrid}>
            {[
              { num: '01', label: 'BUSINESS', question: 'WHAT DO YOU DO?', desc: 'Give us the business in one clear sentence.' },
              { num: '02', label: 'FRICTION', question: 'WHAT ISN\u2019T WORKING?', desc: 'Visibility, positioning, technology, growth — name the friction.' },
              { num: '03', label: 'SIGNAL', question: 'WHERE ARE YOU VISIBLE TODAY?', desc: 'Website, Google, social, AI search or somewhere else.' },
              { num: '04', label: 'OUTCOME', question: 'WHAT NEEDS TO CHANGE?', desc: 'Tell us what a better next six months should look like.' },
            ].map(({ num, label, question, desc }, i) => (
              <Reveal key={num} delay={i * 0.08} className={styles.briefItem}>
                <span className={styles.briefIndex}>{num} / {label}</span>
                <h3 className={styles.briefQuestion}>{question}</h3>
                <p className={styles.briefDesc}>{desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          04 — BASE & RESPONSE
      ============================================================ */}
      <section className={styles.signalSection} aria-label="Location and response times">
        <div className="section-wrap">
          <Reveal as="span" className={styles.contactKicker}>
            04 / SIGNAL
          </Reveal>
          <Reveal as="h2" delay={0.1} className={styles.signalHeadline}>
            <span>ROOTED IN JAIPUR.</span>
            <span className={styles.greenEmphasis}>BUILT TO WORK BEYOND IT.</span>
          </Reveal>

          <div className={styles.signalGrid}>
            {[
              { key: 'BASE', value: 'JAIPUR, RAJASTHAN' },
              { key: 'WORKING', value: 'ACROSS INDIA' },
              { key: 'HOURS', value: 'MON–SAT · 9AM–7PM IST' },
              { key: 'WHATSAPP', value: '< 4 HOURS' },
              { key: 'EMAIL', value: '< 24 HOURS' },
            ].map(({ key, value }, i) => (
              <Reveal key={key} delay={i * 0.06} className={styles.signalItem}>
                <span className={styles.signalKey}>{key}</span>
                <span className={styles.signalValue}>{value}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          05 — QUICK ANSWERS
      ============================================================ */}
      <section className={styles.contactFaqSection} aria-label="Frequently asked questions">
        <div className="section-wrap">
          <Reveal as="span" className={styles.contactKicker}>
            05 / QUICK ANSWERS
          </Reveal>
          <Reveal as="h2" delay={0.1} className={styles.contactSectionTitle}>
            <span>QUICK ANSWERS.</span>
          </Reveal>

          <div className={styles.contactFaqList}>
            {FAQ.map(({ q, a }, i) => (
              <Reveal key={q} delay={i * 0.06} className={styles.contactFaqItem}>
                <div className={styles.contactFaqLeft}>
                  <span className={styles.contactFaqIndex}>Q / {String(i + 1).padStart(2, '0')}</span>
                  <h3 className={styles.contactFaqQ}>{q}</h3>
                </div>
                <p className={styles.contactFaqA}>{a}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          06 — FINAL ACTION
      ============================================================ */}
      <CTA
        eyebrow="06 / FINAL ACTION"
        title={<>THE PROBLEM IS CLEAR.<br /><span className="gold-shimmer">LET&apos;S BUILD WHAT FIXES IT.</span></>}
        primaryBtn={{ text: 'Start a Conversation', href: WA_LINKS.contact, isExternal: true, hasIcon: true }}
        note="WHATSAPP / FASTEST RESPONSE"
      />
    </>
  )
}
