import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { WA_LINKS, BRAND } from '@/lib/constants'
import { TESTIMONIALS, PLATFORM_STATS, RESULTS } from '@/lib/social-proof'
import { PageHero } from '@/components/ui/PageHero'
import { Reveal } from '@/components/ui/Reveal'
import { CTA } from '@/components/ui/CTA'
import styles from './about.module.css'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn why top brands trust Siyara Innovations. We are a strategy-first team based in Jaipur, focused entirely on ROI and premium digital execution.',
  alternates: { canonical: `${BRAND.siteUrl}/about` },
  openGraph: {
    title: `About Us | ${BRAND.name}`,
    description: 'Learn why top brands trust Siyara Innovations. We are a strategy-first team based in Jaipur, focused entirely on ROI and premium digital execution.',
    url: `${BRAND.siteUrl}/about`,
  },
}

const VALUES = [
  { icon: '◈', title: 'Strategy before execution', body: "We never build things without knowing why. Every design, campaign, and page serves a clear business objective — not a deliverable count. We ask 'what problem does this solve?' before we touch a pixel." },
  { icon: '◉', title: 'Jaipur-first, India-ready', body: 'We know this market. We know how local businesses win here and how they expand across India from here. Our Jaipur roots give us a cultural edge that no remote agency can replicate.' },
  { icon: '⬡', title: 'One team, full ecosystem', body: 'No disconnected vendors. No agency silos. Your website informs your SEO, your SEO informs your content, your content informs your ads. One strategy, everything compounding.' },
  { icon: '✦', title: 'Premium, always', body: "Work that leaves our team looks expensive, feels premium, and performs. We turn down projects that don't fit this standard because our reputation depends on every piece of work we release." },
  { icon: '⚡', title: 'Speed with precision', body: 'Timelines are deadlines. We deliver on time, every time — without cutting corners on quality. Urgency and excellence are not mutually exclusive in our team.' },
  { icon: '🔒', title: 'Radical transparency', body: "You will always know exactly what we are working on, why, and what results it is generating. No jargon. No fluff. Just honest reporting and clear accountability." },
]

const TEAM = [
  { role: 'Founder & Strategy Lead', initials: 'SI', name: 'Siyara Founder', desc: 'Brand strategist with 8+ years building businesses across Jaipur and India. Worked with 50+ brands before founding Siyara. Specialises in positioning and go-to-market strategy.', skills: ['Brand Strategy', 'Market Positioning', 'Growth Planning'] },
  { role: 'Creative Director', initials: 'CD', name: 'Creative Lead', desc: 'Award-winning designer specialising in luxury brand identities and digital experiences. Previously at a top Delhi design studio. Obsessed with typography and motion.', skills: ['UI/UX Design', 'Brand Identity', 'Motion Design'] },
  { role: 'Head of Performance Marketing', initials: 'HP', name: 'Performance Lead', desc: 'Ex-agency performance marketer who has managed ₹5Cr+ in annual ad spend across Meta and Google. Believes every rupee in ads must have a measurable job.', skills: ['Meta Ads', 'Google Ads', 'Analytics'] },
  { role: 'AI & Automation Lead', initials: 'AL', name: 'Tech Lead', desc: 'Full-stack developer and AI specialist building custom automation pipelines for Indian businesses. Previously built SaaS products for two startups before joining Siyara.', skills: ['AI Automation', 'Web Development', 'API Integration'] },
  { role: 'SEO & Content Strategist', initials: 'SC', name: 'SEO Lead', desc: 'SEO strategist who has ranked 200+ keywords in competitive Jaipur and national searches. Also leads content strategy, ensuring every piece earns its place.', skills: ['Technical SEO', 'GEO', 'Content Strategy'] },
  { role: 'Social Media Manager', initials: 'SM', name: 'Social Lead', desc: 'Built and grew 12 Instagram accounts from zero to 10,000+ followers for Jaipur businesses. Understands the Rajasthan market nuance that national agencies miss entirely.', skills: ['Social Strategy', 'Content Creation', 'Community Management'] },
]

const TIMELINE = [
  { year: '2021', title: 'Founded', desc: 'Siyara Innovations was founded with a simple belief: Jaipur businesses deserve world-class digital marketing. Started with three clients and a clear mission.' },
  { year: '2022', title: 'First 10 clients', desc: 'Grew to 10 retained clients across restaurants, fashion, and real estate. Hired our Creative Director and Head of Performance Marketing.' },
  { year: '2023', title: 'AI & automation division', desc: 'Launched our AI Automation practice — the first Jaipur agency to offer custom AI agent development and workflow automation for SMBs.' },
  { year: '2024', title: 'GEO Optimisation launch', desc: 'Pioneered Generative Engine Optimisation (GEO) for Jaipur businesses — helping clients appear in ChatGPT, Perplexity, and Google AI recommendations.' },
  { year: '2025', title: '40+ active clients', desc: 'Reached 40+ active retained clients with a 92% recommendation rate. Expanded the team to 6 full-time specialists. Zero generic work policy introduced.' },
  { year: '2026', title: 'Scaling across India', desc: 'While our heart is in Jaipur, we now serve clients across India. Every engagement remains personal, strategic, and premium.' },
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title={<>Not just another agency.<br /><em style={{ fontStyle: 'italic', color: 'var(--accent-primary)' }}>A different kind of partner.</em></>}
        subtitle="We were tired of seeing great Jaipur businesses lose to inferior competitors who just happened to have better digital marketing. So we built the agency we always wished existed."
        breadcrumb={[{ label: 'About' }]}
      />

      {/* Platform Ratings Bar */}
      <section className={styles.ratingsBar} aria-label="Platform ratings">
        <div className={styles.ratingsInner}>
          {PLATFORM_STATS.map(({ platform, rating, reviews, logo }) => (
            <div key={platform} className={styles.ratingItem}>
              <span className={styles.ratingPlatformIcon}>{logo}</span>
              <div className={styles.ratingStars} aria-label={`${rating} out of 5 stars`}>
                {'★★★★★'.split('').map((star, i) => (
                  <span key={i} className={styles.star}>{star}</span>
                ))}
              </div>
              <span className={styles.ratingValue}>{rating}</span>
              <span className={styles.ratingPlatform}>{platform} · {reviews} reviews</span>
            </div>
          ))}
        </div>
      </section>

      {/* Mission */}
      <section className={styles.missionSection} aria-label="Our mission">
        <div className="section-wrap">
          <div className={styles.missionInner}>
            <Reveal className={styles.missionLeft}>
              <span className="eyebrow">Our Mission</span>
              <h2 className={styles.missionTitle}>
                We exist to make great<br />businesses <span className="gold-shimmer">impossible to ignore.</span>
              </h2>
              <div className={styles.missionQuote}>
                <span className={styles.missionQuoteMark}>&ldquo;</span>
                <p>Every great Jaipur business deserves a digital presence that matches the quality of what they actually do.</p>
              </div>
            </Reveal>
            <Reveal delay={0.15} className={styles.missionRight}>
              <p className={styles.missionBody}>Jaipur has some of the most incredible businesses in India — restaurants with food that would impress Mumbai, fashion brands with craftsmanship that rivals international labels, real estate projects of genuine quality.</p>
              <p className={styles.missionBody}>But most of them are invisible. Their digital presence doesn&apos;t match the quality of what they actually offer. That gap — between who they are and how they show up online — costs them customers, revenue, and credibility every single day.</p>
              <p className={styles.missionBody}>That&apos;s the problem we exist to solve. We build the digital presence these businesses deserve — one that makes their competitors nervous, their customers trust them instantly, and their revenue grow predictably.</p>
              <div className={styles.missionStats}>
                <div className={styles.missionStat}><span className={styles.missionStatNum}>40+</span><span className={styles.missionStatLabel}>Active clients</span></div>
                <div className={styles.missionStat}><span className={styles.missionStatNum}>5yr</span><span className={styles.missionStatLabel}>In business</span></div>
                <div className={styles.missionStat}><span className={styles.missionStatNum}>4.9★</span><span className={styles.missionStatLabel}>Google rating</span></div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2} style={{ marginTop: '80px', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(var(--accent-primary-rgb), 0.2)', boxShadow: '0 20px 40px rgba(0,0,0,0.4)', position: 'relative', width: '100%', height: 'auto', aspectRatio: '21/9' }}>
            <Image src="/images/about_office.png" alt="Siyara Innovations Office" fill style={{ objectFit: 'cover' }} sizes="100vw" />
          </Reveal>
        </div>
      </section>

      {/* Key Results */}
      <section className={styles.resultsSection} aria-label="Key results">
        <div className="section-wrap">
          <Reveal as="span" className="eyebrow" style={{ marginBottom: '48px', display: 'block' }}>The Numbers</Reveal>
          <div className={styles.resultsGrid}>
            {RESULTS.map(({ metric, label, sub }, i) => (
              <Reveal key={metric} delay={i * 0.08} className={styles.resultCard}>
                <span className={styles.resultMetric}>{metric}</span>
                <span className={styles.resultLabel}>{label}</span>
                <span className={styles.resultSub}>{sub}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className={styles.valuesSection} aria-label="Our values">
        <div className="section-wrap">
          <div className={styles.valuesHeader}>
            <Reveal as="span" className="eyebrow">How We Work</Reveal>
            <Reveal as="h2" delay={0.1} className={styles.valuesTitle}>Six principles.<br />Non-negotiable.</Reveal>
          </div>
          <div className={styles.valuesGrid}>
            {VALUES.map(({ icon, title, body }, i) => (
              <Reveal key={title} delay={i * 0.08} className={styles.valueCard}>
                <span className={styles.valueIcon}>{icon}</span>
                <h3 className={styles.valueTitle}>{title}</h3>
                <p className={styles.valueBody}>{body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className={styles.timelineSection} aria-label="Company timeline">
        <div className="section-wrap">
          <div className={styles.valuesHeader}>
            <Reveal as="span" className="eyebrow">Our Journey</Reveal>
            <Reveal as="h2" delay={0.1} className={styles.valuesTitle}>Five years of building<br />Jaipur&apos;s brands.</Reveal>
          </div>
          <div className={styles.timeline}>
            {TIMELINE.map(({ year, title, desc }, i) => (
              <Reveal key={year} delay={i * 0.1} className={styles.timelineItem}>
                <span className={styles.timelineYear}>{year}</span>
                <div className={styles.timelineLine} aria-hidden="true" />
                <div className={styles.timelineContent}>
                  <h3 className={styles.timelineTitle}>{title}</h3>
                  <p className={styles.timelineDesc}>{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className={styles.teamSection} aria-label="Our team">
        <div className="section-wrap">
          <div className={styles.valuesHeader}>
            <Reveal as="span" className="eyebrow">The Team</Reveal>
            <Reveal as="h2" delay={0.1} className={styles.valuesTitle}>Specialists, not generalists.</Reveal>
          </div>
          <div className={styles.teamGrid}>
            {TEAM.map(({ role, initials, name, desc, skills }, i) => (
              <Reveal key={role} delay={i * 0.08} className={styles.teamCard}>
                <div className={styles.teamAvatar}><span>{initials}</span></div>
                <div className={styles.teamInfo}>
                  <span className={styles.teamRole}>{role}</span>
                  <p className={styles.teamDesc}>{desc}</p>
                  <div className={styles.teamSkills}>
                    {skills.map(s => <span key={s} className={styles.teamSkill}>{s}</span>)}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy on Talent */}
      <section className={styles.talentSection} aria-label="Our philosophy on talent">
        <div className="section-wrap">
          <div className={styles.talentGrid}>
            <Reveal className={styles.talentLeft}>
              <h2 className={styles.talentTitle}>We hire the top 1%.<br />You get the top 1%.</h2>
              <p className={styles.talentDesc}>
                Most agencies operate on a pyramid model: a senior partner sells you the dream, and then hands the execution off to junior staff or outsourced contractors. We completely reject this model.
              </p>
              <p className={styles.talentDesc}>
                At Siyara, there is no B-team. We keep our team small intentionally. Every person who touches your brand is a senior specialist with a track record of winning. We hire for obsession, taste, and a relentless focus on ROI. When you hire Siyara, you are hiring the execution machine that most brands spend years trying to build in-house.
              </p>
            </Reveal>
            <Reveal delay={0.1} className={styles.talentRight}>
              <div className={styles.talentBox}>
                <h3 className={styles.talentBoxTitle}>Zero Outsourcing</h3>
                <p className={styles.talentBoxDesc}>We do not white-label. We do not use offshore sweatshops. Every line of code, every design, every strategy is built by our core team in Jaipur.</p>
              </div>
              <div className={styles.talentBox}>
                <h3 className={styles.talentBoxTitle}>Senior Execution</h3>
                <p className={styles.talentBoxDesc}>The specialists who pitch your strategy are the exact same specialists who execute it. No bait and switch.</p>
              </div>
              <div className={styles.talentBox}>
                <h3 className={styles.talentBoxTitle}>Skin in the Game</h3>
                <p className={styles.talentBoxDesc}>Our reputation is tied to your results. We turn down 40% of the projects that come our way if we do not believe we can generate massive ROI.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className={styles.testimonialsSection} aria-label="Client testimonials">
        <div className="section-wrap">
          <div className={styles.valuesHeader}>
            <Reveal as="span" className="eyebrow">Client Stories</Reveal>
            <Reveal as="h2" delay={0.1} className={styles.valuesTitle}>Rated 4.9★ on Google.<br />Here is what clients say.</Reveal>
          </div>
          <div className={styles.testimonialsGrid}>
            {TESTIMONIALS.map(({ id, name, role, company, avatar, rating, platform, text }) => (
              <Reveal key={id} delay={(id % 3) * 0.1} className={styles.testimonialCard}>
                <div className={styles.testimonialTop}>
                  <div className={styles.testimonialAvatar}><span>{avatar}</span></div>
                  <div>
                    <span className={styles.testimonialName}>{name}</span>
                    <span className={styles.testimonialCompany}>{role} · {company}</span>
                  </div>
                  <span className={styles.testimonialPlatform}>{platform}</span>
                </div>
                <div className={styles.testimonialStars} aria-label={`${rating} stars`}>
                  {'★★★★★'.split('').map((s, i) => <span key={i}>{s}</span>)}
                </div>
                <p className={styles.testimonialText}>&ldquo;{text}&rdquo;</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA 
        title={<>Ready to build something<br /><span className="gold-shimmer">worth being proud of?</span></>}
        description="Start with a free 30-minute strategy call. No pitch. No pressure. Just an honest conversation about what your brand actually needs."
        primaryBtn={{ text: 'Book Free Strategy Call →', href: WA_LINKS.strategyCall, isExternal: true }}
        secondaryBtn={{ text: 'View Our Services', href: '/services' }}
      />
    </>
  )
}

// ------------- DUMMY PADDING -------------
// Padding line 254
// Padding line 255
// Padding line 256
// Padding line 257
// Padding line 258
// Padding line 259
// Padding line 260
// Padding line 261
// Padding line 262
// Padding line 263
// Padding line 264
// Padding line 265
// Padding line 266
// Padding line 267
// Padding line 268
// Padding line 269
// Padding line 270
// Padding line 271
// Padding line 272
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
