'use client'

import { m } from 'framer-motion'
import styles from './AbstractSphere.module.css'

export function AbstractSphere() {
  const ellipses = Array.from({ length: 12 })

  return (
    <div className={styles.sphereContainer}>
      <div className={styles.glow} aria-hidden="true" />
      
      <m.div
        className={styles.sphereWrapper}
        animate={{
          y: [0, -8, 0],
          rotate: [0, 360],
        }}
        transition={{
          y: {
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut"
          },
          rotate: {
            duration: 60,
            repeat: Infinity,
            ease: "linear"
          }
        }}
      >
        <svg
          viewBox="0 0 400 400"
          className={styles.svgGlobe}
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="sphereGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--accent-gold)" />
              <stop offset="50%" stopColor="var(--accent-primary)" />
              <stop offset="100%" stopColor="var(--accent-deep)" />
            </linearGradient>
          </defs>

          {/* Outer circle for stability */}
          <circle 
            cx="200" 
            cy="200" 
            r="180" 
            fill="none" 
            stroke="url(#sphereGrad)" 
            strokeWidth="1.5"
            opacity="0.8"
          />

          {/* Intersecting ellipses */}
          {ellipses.map((_, i) => (
            <ellipse
              key={i}
              cx="200"
              cy="200"
              rx="180"
              ry="50"
              fill="none"
              stroke="url(#sphereGrad)"
              strokeWidth="1.5"
              opacity="0.6"
              transform={`rotate(${i * 15} 200 200)`}
            />
          ))}
        </svg>
      </m.div>
    </div>
  )
}
