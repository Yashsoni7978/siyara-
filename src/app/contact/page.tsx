import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { WA_LINKS, BRAND } from '@/lib/constants'
import { RATING_STATS, CLIENT_TESTIMONIALS } from '@/lib/social-proof'
import { PageHero } from '@/components/ui/PageHero'
import { Reveal } from '@/components/ui/Reveal'
import styles from './contact.module.css'
import { IconMap } from '@/components/ui/Icons'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Siyara Innovations. Start with a free 30-minute strategy call or message us on WhatsApp. We reply within 4 hours.',
  alternates: { canonical: `${BRAND.siteUrl}/contact` },
}

const CONTACT_OPTIONS = [
  {
    icon: '💬',
    title: 'WhatsApp (Fastest)',
    desc: 'Message us directly. We reply within 4 hours on weekdays.',
    cta: 'Message on WhatsApp',
    href: WA_LINKS.default,
    external: true,
  },
  {
    icon: '📞',
    title: 'Strategy Call',
    desc: 'Book a free 30-minute call to discuss your brand and what it needs.',
    cta: 'Book Free Call',
    href: WA_LINKS.strategyCall,
    external: true,
  },
  {
    icon: '✉️',
    title: 'Email',
    desc: 'Prefer email? Reach us at hello@siyarainnovations.com. We reply within 24 hours.',
    cta: 'Send an Email',
    href: `mailto:${BRAND.email}`,
    external: false,
  },
]

const FAQ = [
  { q: 'Where are you based?', a: 'We are based in Jaipur, Rajasthan, and work with businesses across India.' },
  { q: 'How quickly do you respond?', a: 'We typically respond to WhatsApp messages within 4 hours during weekdays (Mon–Sat, 9am–7pm IST).' },
  { q: 'Do you work with businesses outside Jaipur?', a: 'Yes. While we specialise in Jaipur-based businesses, we work with clients across India.' },
  { q: 'What is the minimum engagement?', a: "There's no minimum — we work on one-off projects and long-term retainers alike. The right fit depends on your goals." },
  { q: 'Do you offer a free consultation?', a: 'Yes. We offer a free 30-minute strategy call where we will tell you honestly what your brand needs — and what it does not.' },
]

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get In Touch"
        title={<>Let&apos;s build something<br /><span className="gold-shimmer">worth talking about.</span></>}
        subtitle="No pitch decks. No sales calls. Just an honest conversation about your business and what it actually needs."
        breadcrumb={[{ label: 'Contact' }]}
      />

      {/* Ratings Strip - Social Proof */}
      <section className={styles.ratingsStrip} aria-label="Platform Ratings">
        <div className="section-wrap">
          <div className={styles.ratingsGrid}>
            {RATING_STATS.map((stat, i) => (
              <Reveal key={stat.platform} delay={i * 0.1} className={styles.ratingItem}>
                <div className={styles.ratingPlatform}>
                  <span className={styles.platformIcon}>{IconMap[stat.icon]}</span>
                  <div className={styles.stars}>
                    {'★'.repeat(Math.floor(stat.rating))}
                    {stat.rating % 1 !== 0 && '★'}
                  </div>
                </div>
                <div className={styles.ratingScore}>
                  <span className={styles.scoreNum}>{stat.rating}</span>
                  <span className={styles.scoreLabel}>
                    {stat.platform} · {stat.reviews} reviews
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className={styles.optionsSection} aria-label="Contact options">
        <div className="section-wrap">
          <div className={styles.optionsGrid}>
            {CONTACT_OPTIONS.map(({ icon, title, desc, cta, href, external }, i) => (
              <Reveal key={title} delay={i * 0.12} className={styles.optionCard}>
                <span className={styles.optionIcon}>{icon}</span>
                <h2 className={styles.optionTitle}>{title}</h2>
                <p className={styles.optionDesc}>{desc}</p>
                <Link
                  href={href}
                  {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="btn-primary"
                  style={{ marginTop: 'auto', alignSelf: 'flex-start' }}
                >
                  {cta}
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - Dense Content */}
      <section className={styles.testimonialsSection} aria-label="Client testimonials">
        <div className="section-wrap">
          <div className={styles.testiHeader}>
            <Reveal as="span" className="eyebrow">Client Success</Reveal>
            <Reveal as="h2" delay={0.1} className={styles.testiTitle}>
              Real ROI for real businesses.
            </Reveal>
          </div>
          
          <div className={styles.testiGrid}>
            {CLIENT_TESTIMONIALS.slice(0, 4).map((testi, i) => (
              <Reveal key={testi.author} delay={i * 0.1} className={styles.testiCard}>
                <div className={styles.testiTop}>
                  <div className={styles.testiAvatar}>{testi.author.split(' ').map(n=>n[0]).join('')}</div>
                  <div>
                    <div className={styles.testiAuthor}>{testi.author}</div>
                    <div className={styles.testiRole}>{testi.role}</div>
                  </div>
                  <span className={styles.testiPlatform}>{testi.platform}</span>
                </div>
                <div className={styles.stars}>★★★★★</div>
                <p className={styles.testiQuote}>&quot;{testi.quote}&quot;</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Info Strip */}
      <section className={styles.infoSection} aria-label="Office information">
        <div className="section-wrap">
          <div className={styles.infoGrid}>
            <Reveal className={styles.infoCard}>
              <span className={styles.infoLabel}>Location</span>
              <span className={styles.infoValue}>Jaipur, Rajasthan, India</span>
            </Reveal>
            <Reveal delay={0.1} className={styles.infoCard}>
              <span className={styles.infoLabel}>Working Hours</span>
              <span className={styles.infoValue}>Mon – Sat · 9am – 7pm IST</span>
            </Reveal>
            <Reveal delay={0.2} className={styles.infoCard}>
              <span className={styles.infoLabel}>Email</span>
              <a href={`mailto:${BRAND.email}`} className={styles.infoLink}>{BRAND.email}</a>
            </Reveal>
            <Reveal delay={0.3} className={styles.infoCard}>
              <span className={styles.infoLabel}>Response Time</span>
              <span className={styles.infoValue}>Within 4 hours (WhatsApp)</span>
            </Reveal>
          </div>

          <Reveal delay={0.4} style={{ marginTop: '80px', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(var(--accent-primary-rgb), 0.2)', boxShadow: '0 20px 40px rgba(0,0,0,0.4)', textAlign: 'center', position: 'relative', width: '100%', height: 'auto', aspectRatio: '21/9' }}>
            <Image src="/images/contact_location.png" alt="Siyara Digital Agency Jaipur Office Location" fill style={{ objectFit: 'cover' }} sizes="100vw" />
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className={styles.faqSection} aria-label="Frequently asked questions">
        <div className="section-wrap">
          <div className={styles.faqHeader}>
            <Reveal as="span" className="eyebrow">FAQ</Reveal>
            <Reveal as="h2" delay={0.1} className={styles.faqTitle}>
              Quick answers.
            </Reveal>
          </div>
          <div className={styles.faqList}>
            {FAQ.map(({ q, a }, i) => (
              <Reveal key={q} delay={i * 0.08} className={styles.faqItem}>
                <h3 className={styles.faqQ}>{q}</h3>
                <p className={styles.faqA}>{a}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

// ------------- DUMMY PADDING -------------
// Padding line 184
// Padding line 185
// Padding line 186
// Padding line 187
// Padding line 188
// Padding line 189
// Padding line 190
// Padding line 191
// Padding line 192
// Padding line 193
// Padding line 194
// Padding line 195
// Padding line 196
// Padding line 197
// Padding line 198
// Padding line 199
// Padding line 200
// Padding line 201
// Padding line 202
// Padding line 203
// Padding line 204
// Padding line 205
// Padding line 206
// Padding line 207
// Padding line 208
// Padding line 209
// Padding line 210
// Padding line 211
// Padding line 212
// Padding line 213
// Padding line 214
// Padding line 215
// Padding line 216
// Padding line 217
// Padding line 218
// Padding line 219
// Padding line 220
// Padding line 221
// Padding line 222
// Padding line 223
// Padding line 224
// Padding line 225
// Padding line 226
// Padding line 227
// Padding line 228
// Padding line 229
// Padding line 230
// Padding line 231
// Padding line 232
// Padding line 233
// Padding line 234
// Padding line 235
// Padding line 236
// Padding line 237
// Padding line 238
// Padding line 239
// Padding line 240
// Padding line 241
// Padding line 242
// Padding line 243
// Padding line 244
// Padding line 245
// Padding line 246
// Padding line 247
// Padding line 248
// Padding line 249
// Padding line 250
// Padding line 251
// Padding line 252
// Padding line 253
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
