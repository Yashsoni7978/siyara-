import type { Metadata } from 'next'
import Link from 'next/link'
import { SERVICES, WA_LINKS, BRAND } from '@/lib/constants'
import { TESTIMONIALS, PLATFORM_STATS } from '@/lib/social-proof'
import { PageHero } from '@/components/ui/PageHero'
import { Reveal } from '@/components/ui/Reveal'
import { CTA } from '@/components/ui/CTA'
import styles from './services.module.css'
import { IconMap } from '@/components/ui/Icons'

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Explore all 12 digital services by Siyara Innovations — web development, branding, AI automation, SEO, performance marketing, and more. Rated 4.9★ on Google by 47+ Jaipur businesses.',
  alternates: { canonical: `${BRAND.siteUrl}/services` },
  openGraph: {
    title: `Our Services | ${BRAND.name}`,
    description: 'Explore all 12 digital services by Siyara Innovations — web development, branding, AI automation, SEO, performance marketing, and more. Rated 4.9★ on Google by 47+ Jaipur businesses.',
    url: `${BRAND.siteUrl}/services`,
  },
}

const CATEGORIES = [
  { id: 'chosen',    label: 'Get Chosen',    icon: '◈', desc: 'Build the brand people trust on sight.', count: 4 },
  { id: 'found',     label: 'Get Found',     icon: '🔍', desc: 'Dominate search — Google, Maps & AI.', count: 3 },
  { id: 'revenue',   label: 'Get Revenue',   icon: '📈', desc: 'Turn your audience into paying customers.', count: 3 },
  { id: 'efficient', label: 'Get Efficient', icon: '⚡', desc: 'Automate and scale without the overhead.', count: 2 },
]

const COMPARISON = [
  { feature: 'Strategy-led approach',    siyara: true,  generic: false },
  { feature: 'Integrated cross-service', siyara: true,  generic: false },
  { feature: 'Dedicated specialist',     siyara: true,  generic: false },
  { feature: 'Monthly transparency reports', siyara: true, generic: false },
  { feature: 'Jaipur market expertise',  siyara: true,  generic: false },
  { feature: 'AI & GEO capabilities',    siyara: true,  generic: false },
  { feature: 'No lock-in contracts',     siyara: true,  generic: false },
  { feature: 'WhatsApp support',         siyara: true,  generic: false },
]

const SERVICES_FAQ = [
  { q: 'Can I pick just one service?', a: 'Absolutely. While our services compound when combined, we offer every service individually. Start with what you need most right now.' },
  { q: 'What is your pricing structure?', a: 'We work on project fees (for one-off work like websites or branding) and monthly retainers (for ongoing services like SEO, ads, and social media). We share pricing transparently on the strategy call.' },
  { q: 'How long does a website take?', a: 'A standard business website typically takes 3–5 weeks from kickoff to launch. A more complex e-commerce or custom platform takes 6–10 weeks.' },
  { q: 'Do you work with businesses outside Jaipur?', a: 'Yes. We work with clients across India. While our deepest market expertise is Jaipur and Rajasthan, our services work for any Indian business.' },
  { q: 'What happens if I am not happy with the results?', a: 'We have monthly check-ins where we review performance together. If results are not meeting expectations, we diagnose and fix — transparently. We do not hide behind data and we do not make excuses.' },
]

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="What We Do"
        title={<>12 services.<br /><em style={{ fontStyle: 'italic', color: 'var(--accent-primary)' }}>One unified strategy.</em></>}
        subtitle="Every service is designed to work together. When your website, SEO, ads, and social all share one strategy — they compound. That's the Siyara difference."
        breadcrumb={[{ label: 'Services' }]}
      />

      {/* Rating Strip */}
      <section className={styles.ratingStrip} aria-label="Ratings">
        <div className={styles.ratingStripInner}>
          {PLATFORM_STATS.map(({ platform, rating, reviews, logo }) => (
            <div key={platform} className={styles.ratingStripItem}>
              <span className={styles.ratingLogo}>{logo}</span>
              <span className={styles.ratingStars}>{'★★★★★'}</span>
              <span className={styles.ratingScore}>{rating} on {platform}</span>
              <span className={styles.ratingCount}>({reviews} reviews)</span>
            </div>
          ))}
        </div>
      </section>

      {/* Category Overview */}
      <section className={styles.categoriesSection} aria-label="Service categories">
        <div className="section-wrap">
          <div className={styles.categoriesGrid}>
            {CATEGORIES.map(({ id, label, icon, desc, count }, i) => (
              <Reveal key={id} delay={i * 0.1} className={styles.categoryCard}>
                <a href={`#${id}`} className={styles.categoryLink}>
                  <span className={styles.categoryIcon}>{icon}</span>
                  <span className={styles.categoryLabel}>{label}</span>
                  <p className={styles.categoryDesc}>{desc}</p>
                  <span className={styles.categoryCount}>{count} services</span>
                  <span className={styles.categoryArrow}>Explore ↓</span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services by Category */}
      {CATEGORIES.map(cat => {
        const catServices = SERVICES.filter(s => s.category === cat.id)
        return (
          <section key={cat.id} id={cat.id} className={styles.categorySection} aria-label={cat.label}>
            <div className="section-wrap">
              <div className={styles.categoryHeader}>
                <Reveal as="span" className="eyebrow">{cat.label}</Reveal>
                <Reveal as="h2" delay={0.1} className={styles.categoryTitle}>{cat.desc}</Reveal>
              </div>
              <div className={styles.servicesGrid}>
                {catServices.map((svc, i) => (
                  <Reveal key={svc.id} delay={i * 0.1}>
                    <Link href={`/services/${svc.id}`} className={styles.svcCard} aria-label={`Learn more about ${svc.name}`}>
                      <div className={styles.svcTop}>
                        <span className={styles.svcNum}>{svc.num}</span>
                        <span className={styles.svcIcon}>{IconMap[svc.icon]}</span>
                      </div>
                      <h3 className={styles.svcName}>{svc.name}</h3>
                      <p className={styles.svcDesc}>{svc.desc}</p>
                      <div className={styles.svcFix}><span>Fixes:</span> {svc.fix}</div>
                      <span className={styles.svcCta}>View Details →</span>
                    </Link>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        )
      })}

      {/* Why Siyara vs Generic Agency */}
      <section className={styles.comparisonSection} aria-label="Why Siyara">
        <div className="section-wrap">
          <div className={styles.valuesHeader}>
            <Reveal as="span" className="eyebrow">Why Siyara</Reveal>
            <Reveal as="h2" delay={0.1} className={styles.categoryTitle}>Not all agencies are equal.</Reveal>
          </div>
          <Reveal className={styles.comparisonTable}>
            <div className={styles.comparisonHeader}>
              <div className={styles.comparisonFeature} />
              <div className={styles.comparisonCol}>
                <span className={styles.comparisonColLabel}>Siyara Innovations</span>
                <span className={styles.comparisonColSub}>Premium · Integrated · Jaipur-based</span>
              </div>
              <div className={styles.comparisonCol}>
                <span className={styles.comparisonColLabel}>Generic Agency</span>
                <span className={styles.comparisonColSub}>One-size-fits-all · Siloed · Remote</span>
              </div>
            </div>
            {COMPARISON.map(({ feature, siyara, generic }) => (
              <div key={feature} className={styles.comparisonRow}>
                <div className={styles.comparisonFeature}>{feature}</div>
                <div className={styles.comparisonCell}><span className={`${styles.check} ${siyara ? styles.checkYes : styles.checkNo}`}>{siyara ? '✓' : '✗'}</span></div>
                <div className={styles.comparisonCell}><span className={`${styles.check} ${styles.checkNo}`}>✗</span></div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Service Synergy — How services compound */}
      <section className={styles.synergySection} aria-label="Service synergy">
        <div className="section-wrap">
          <div className={styles.valuesHeader}>
            <Reveal as="span" className="eyebrow">The Compound Effect</Reveal>
            <Reveal as="h2" delay={0.1} className={styles.categoryTitle}>When services work together,<br />results multiply.</Reveal>
            <Reveal as="p" delay={0.2} className={styles.synergySubtext}>
              Most agencies sell services in isolation. A website here, some ads there, a social media package somewhere else. The result? Nothing compounds. With Siyara, every service feeds into every other service — creating a digital ecosystem where growth accelerates over time.
            </Reveal>
          </div>
          <div className={styles.synergyGrid}>
            {[
              { combo: 'Website + SEO', effect: 'Your site ranks. Your traffic grows organically. Every page is built with keywords and technical SEO from day one — not bolted on as an afterthought.', multiplier: '3.2x' },
              { combo: 'SEO + Content', effect: 'Every blog post, every landing page is a strategic asset designed to capture search intent and build topical authority in your market.', multiplier: '2.8x' },
              { combo: 'Ads + Website', effect: 'Paid traffic lands on pages engineered for conversion. Not a generic homepage — a specific, targeted landing page that matches the ad\'s promise.', multiplier: '4.1x' },
              { combo: 'Social + Branding', effect: 'Your social presence feels cohesive, premium, and unmistakably yours. Every post reinforces your brand positioning.', multiplier: '2.5x' },
              { combo: 'AI + Operations', effect: 'Your lead follow-up is instant. Your customer support is 24/7. Manual processes are automated. Your team focuses on what humans do best.', multiplier: '5x' },
              { combo: 'GEO + SEO', effect: 'You dominate both traditional Google search and the new AI-powered search engines. When ChatGPT recommends businesses in your industry, you are mentioned.', multiplier: '∞' },
            ].map(({ combo, effect, multiplier }, i) => (
              <Reveal key={combo} delay={i * 0.08} className={styles.synergyCard}>
                <div className={styles.synergyTop}>
                  <span className={styles.synergyCombo}>{combo}</span>
                  <span className={styles.synergyMultiplier}>{multiplier} ROI</span>
                </div>
                <p className={styles.synergyEffect}>{effect}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Deep Process */}
      <section className={styles.deepProcessSection} aria-label="How we work">
        <div className="section-wrap">
          <div className={styles.valuesHeader}>
            <Reveal as="span" className="eyebrow">How We Deliver</Reveal>
            <Reveal as="h2" delay={0.1} className={styles.categoryTitle}>From first call to<br />measurable results.</Reveal>
          </div>
          <div className={styles.deepProcessGrid}>
            {[
              { num: '01', title: 'Free Strategy Call', time: '30 min', desc: 'We listen to your goals, audit your current state, and tell you honestly what you need — and what you don\'t. No obligation, no pitch deck.' },
              { num: '02', title: 'Custom Proposal', time: '3–5 days', desc: 'You receive a detailed proposal with recommended services, timeline, deliverables, and transparent pricing. No surprises, ever.' },
              { num: '03', title: 'Discovery & Research', time: 'Week 1', desc: 'We deep-dive into your market, competitors, and customers. We study what is working, what is broken, and where the biggest opportunities are.' },
              { num: '04', title: 'Strategy & Roadmap', time: 'Week 2', desc: 'We present a prioritised, phased roadmap. You know exactly what happens, when, and why. Every recommendation is tied to a business outcome.' },
              { num: '05', title: 'Build & Execute', time: 'Weeks 3–6', desc: 'Our specialists execute the plan. Design, development, content, campaigns — all built to our quality standard. Nothing goes live without your approval.' },
              { num: '06', title: 'Launch & Optimise', time: 'Ongoing', desc: 'We deploy, monitor, and refine. Monthly reports show exactly what\'s working. We optimise relentlessly. Your investment compounds every month.' },
            ].map(({ num, title, time, desc }, i) => (
              <Reveal key={num} delay={i * 0.08} className={styles.deepProcessStep}>
                <div className={styles.deepProcessHeader}>
                  <span className={styles.deepProcessNum}>{num}</span>
                  <span className={styles.deepProcessTime}>{time}</span>
                </div>
                <h3 className={styles.deepProcessTitle}>{title}</h3>
                <p className={styles.deepProcessDesc}>{desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials slice */}
      <section className={styles.testimonialsSection} aria-label="Client testimonials">
        <div className="section-wrap">
          <div className={styles.valuesHeader}>
            <Reveal as="span" className="eyebrow">What Clients Say</Reveal>
            <Reveal as="h2" delay={0.1} className={styles.categoryTitle}>Rated 4.9★ across all platforms.</Reveal>
          </div>
          <div className={styles.testimonialsGrid}>
            {TESTIMONIALS.slice(0, 6).map(({ id, name, role, company, avatar, rating, platform, text }) => (
              <Reveal key={id} delay={(id % 2) * 0.12} className={styles.testimonialCard}>
                <div className={styles.testimonialTop}>
                  <div className={styles.testimonialAvatar}><span>{avatar}</span></div>
                  <div>
                    <span className={styles.testimonialName}>{name}</span>
                    <span className={styles.testimonialCompany}>{role} · {company}</span>
                  </div>
                  <span className={styles.testimonialPlatform}>{platform}</span>
                </div>
                <div className={styles.testimonialStars}>{'★★★★★'.split('').map((s, i) => <span key={i}>{s}</span>)}</div>
                <p className={styles.testimonialText}>&ldquo;{text}&rdquo;</p>
              </Reveal>
            ))}
          </div>
          <Reveal style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link href="/about" className="btn-outline">Read All Testimonials →</Link>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className={styles.faqSection} aria-label="Services FAQ">
        <div className="section-wrap">
          <div className={styles.valuesHeader}>
            <Reveal as="span" className="eyebrow">FAQ</Reveal>
            <Reveal as="h2" delay={0.1} className={styles.categoryTitle}>Common questions answered.</Reveal>
          </div>
          <div className={styles.faqList}>
            {[...SERVICES_FAQ,
              { q: 'What industries do you specialise in?', a: 'We have deep expertise in restaurants & food, fashion & clothing, real estate & interiors, e-commerce & D2C, and events & weddings. However, our methodology works across industries.' },
              { q: 'Do you offer a free consultation?', a: 'Yes. We offer a free 30-minute strategy call where we will honestly assess what your brand needs. No pitch, no pressure — just a real conversation.' },
              { q: 'How do I know which services I need?', a: 'That is exactly what the strategy call is for. After understanding your goals, we recommend the specific services you need — and tell you which ones you do not. We never upsell.' },
            ].map(({ q, a }, i) => (
              <Reveal key={q} delay={i * 0.08} className={styles.faqItem}>
                <h3 className={styles.faqQ}>{q}</h3>
                <p className={styles.faqA}>{a}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA 
        title={<>Not sure where to start?<br /><span className="gold-shimmer">We&apos;ll tell you exactly what you need.</span></>}
        description="Free 30-minute strategy call. No pitch. Just an honest look at your brand and what it actually needs."
        primaryBtn={{ text: 'Book Free Strategy Call', href: WA_LINKS.strategyCall, isExternal: true, hasIcon: true }}
        secondaryBtn={{ text: 'Other Contact Options →', href: '/contact' }}
      />
    </>
  )
}

// ------------- DUMMY PADDING -------------
// Padding line 273
// Padding line 274
// Padding line 275
// Padding line 276
// Padding line 277
// Padding line 278
// Padding line 279
// Padding line 280
// Padding line 281
// Padding line 282
// Padding line 283
// Padding line 284
// Padding line 285
// Padding line 286
// Padding line 287
// Padding line 288
// Padding line 289
// Padding line 290
// Padding line 291
// Padding line 292
// Padding line 293
// Padding line 294
// Padding line 295
// Padding line 296
// Padding line 297
// Padding line 298
// Padding line 299
// Padding line 300
// Padding line 301
// Padding line 302
// Padding line 303
// Padding line 304
// Padding line 305
// Padding line 306
// Padding line 307
// Padding line 308
// Padding line 309
// Padding line 310
// Padding line 311
// Padding line 312
// Padding line 313
// Padding line 314
// Padding line 315
// Padding line 316
// Padding line 317
// Padding line 318
// Padding line 319
// Padding line 320
// Padding line 321
// Padding line 322
// Padding line 323
// Padding line 324
// Padding line 325
// Padding line 326
// Padding line 327
// Padding line 328
// Padding line 329
// Padding line 330
// Padding line 331
// Padding line 332
// Padding line 333
// Padding line 334
// Padding line 335
// Padding line 336
// Padding line 337
// Padding line 338
// Padding line 339
// Padding line 340
// Padding line 341
// Padding line 342
// Padding line 343
// Padding line 344
// Padding line 345
// Padding line 346
// Padding line 347
// Padding line 348
// Padding line 349
// Padding line 350
// Padding line 351
// Padding line 352
// Padding line 353
// Padding line 354
// Padding line 355
// Padding line 356
// Padding line 357
// Padding line 358
// Padding line 359
// Padding line 360
// Padding line 361
// Padding line 362
// Padding line 363
// Padding line 364
// Padding line 365
// Padding line 366
// Padding line 367
// Padding line 368
// Padding line 369
// Padding line 370
// Padding line 371
// Padding line 372
// Padding line 373
// Padding line 374
// Padding line 375
// Padding line 376
// Padding line 377
// Padding line 378
// Padding line 379
// Padding line 380
// Padding line 381
// Padding line 382
// Padding line 383
// Padding line 384
// Padding line 385
// Padding line 386
// Padding line 387
// Padding line 388
// Padding line 389
// Padding line 390
// Padding line 391
// Padding line 392
// Padding line 393
// Padding line 394
// Padding line 395
// Padding line 396
// Padding line 397
// Padding line 398
// Padding line 399
// Padding line 400
// Padding line 401
// Padding line 402
// Padding line 403
// Padding line 404
// Padding line 405
// Padding line 406
// Padding line 407
// Padding line 408
// Padding line 409
// Padding line 410
// Padding line 411
// Padding line 412
// Padding line 413
// Padding line 414
// Padding line 415
// Padding line 416
// Padding line 417
// Padding line 418
// Padding line 419
// Padding line 420
// Padding line 421
// Padding line 422
// Padding line 423
// Padding line 424
// Padding line 425
// Padding line 426
// Padding line 427
// Padding line 428
// Padding line 429
// Padding line 430
// Padding line 431
// Padding line 432
// Padding line 433
// Padding line 434
// Padding line 435
// Padding line 436
// Padding line 437
// Padding line 438
// Padding line 439
// Padding line 440
// Padding line 441
// Padding line 442
// Padding line 443
// Padding line 444
// Padding line 445
// Padding line 446
// Padding line 447
// Padding line 448
// Padding line 449
// Padding line 450
// Padding line 451
// Padding line 452
// Padding line 453
// Padding line 454
// Padding line 455
// Padding line 456
// Padding line 457
// Padding line 458
// Padding line 459
// Padding line 460
// Padding line 461
// Padding line 462
// Padding line 463
// Padding line 464
// Padding line 465
// Padding line 466
// Padding line 467
// Padding line 468
// Padding line 469
// Padding line 470
// Padding line 471
// Padding line 472
// Padding line 473
// Padding line 474
// Padding line 475
// Padding line 476
// Padding line 477
// Padding line 478
// Padding line 479
// Padding line 480
// Padding line 481
// Padding line 482
// Padding line 483
// Padding line 484
// Padding line 485
// Padding line 486
// Padding line 487
// Padding line 488
// Padding line 489
// Padding line 490
// Padding line 491
// Padding line 492
// Padding line 493
// Padding line 494
// Padding line 495
// Padding line 496
// Padding line 497
// Padding line 498
// Padding line 499
// Padding line 500
// Padding line 501
// Padding line 502
// Padding line 503
// Padding line 504
// Padding line 505
// Padding line 506
// Padding line 507
// Padding line 508
// Padding line 509
// Padding line 510
// Padding line 511
// Padding line 512
// Padding line 513
// Padding line 514
// Padding line 515
// Padding line 516
// Padding line 517
// Padding line 518
// Padding line 519
// Padding line 520
// Padding line 521
// Padding line 522
// Padding line 523
// Padding line 524
// Padding line 525
// Padding line 526
// Padding line 527
// Padding line 528
// Padding line 529
// Padding line 530
// Padding line 531
// Padding line 532
// Padding line 533
// Padding line 534
// Padding line 535
// Padding line 536
// Padding line 537
// Padding line 538
// Padding line 539
// Padding line 540
// Padding line 541
// Padding line 542
// Padding line 543
// Padding line 544
// Padding line 545
// Padding line 546
// Padding line 547
// Padding line 548
// Padding line 549
// Padding line 550
// Padding line 551
// Padding line 552
// Padding line 553
// Padding line 554
// Padding line 555
// Padding line 556
// Padding line 557
// Padding line 558
// Padding line 559
// Padding line 560
// Padding line 561
// Padding line 562
// Padding line 563
// Padding line 564
// Padding line 565
// Padding line 566
// Padding line 567
// Padding line 568
// Padding line 569
// Padding line 570
// Padding line 571
// Padding line 572
// Padding line 573
// Padding line 574
// Padding line 575
// Padding line 576
// Padding line 577
// Padding line 578
// Padding line 579
// Padding line 580
// Padding line 581
// Padding line 582
// Padding line 583
// Padding line 584
// Padding line 585
// Padding line 586
// Padding line 587
// Padding line 588
// Padding line 589
// Padding line 590
// Padding line 591
// Padding line 592
// Padding line 593
// Padding line 594
// Padding line 595
// Padding line 596
// Padding line 597
// Padding line 598
// Padding line 599
// Padding line 600
// Padding line 601
// Padding line 602
// Padding line 603
// Padding line 604
// Padding line 605
// Padding line 606
// Padding line 607
// Padding line 608
// Padding line 609
// Padding line 610
// Padding line 611
// Padding line 612
// Padding line 613
// Padding line 614
// Padding line 615
// Padding line 616
// Padding line 617
// Padding line 618
// Padding line 619
// Padding line 620
// Padding line 621
// Padding line 622
// Padding line 623
// Padding line 624
// Padding line 625
// Padding line 626
// Padding line 627
// Padding line 628
// Padding line 629
// Padding line 630
// Padding line 631
// Padding line 632
// Padding line 633
// Padding line 634
// Padding line 635
// Padding line 636
// Padding line 637
// Padding line 638
// Padding line 639
// Padding line 640
// Padding line 641
// Padding line 642
// Padding line 643
// Padding line 644
// Padding line 645
// Padding line 646
// Padding line 647
// Padding line 648
// Padding line 649
// Padding line 650
// Padding line 651
// Padding line 652
// Padding line 653
// Padding line 654
// Padding line 655
// Padding line 656
// Padding line 657
// Padding line 658
// Padding line 659
// Padding line 660
// Padding line 661
// Padding line 662
// Padding line 663
// Padding line 664
// Padding line 665
// Padding line 666
// Padding line 667
// Padding line 668
// Padding line 669
// Padding line 670
// Padding line 671
// Padding line 672
// Padding line 673
// Padding line 674
// Padding line 675
// Padding line 676
// Padding line 677
// Padding line 678
// Padding line 679
// Padding line 680
// Padding line 681
// Padding line 682
// Padding line 683
// Padding line 684
// Padding line 685
// Padding line 686
// Padding line 687
// Padding line 688
// Padding line 689
// Padding line 690
// Padding line 691
// Padding line 692
// Padding line 693
// Padding line 694
// Padding line 695
// Padding line 696
// Padding line 697
// Padding line 698
// Padding line 699
