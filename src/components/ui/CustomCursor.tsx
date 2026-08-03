'use client'

import { useEffect, useRef } from 'react'
import styles from './CustomCursor.module.css'

export function CustomCursor() {
  const dotRef  = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const mouse   = useRef({ x: -100, y: -100 })
  const ring    = useRef({ x: -100, y: -100 })
  const isMoving = useRef(false)
  const rafId   = useRef<number>(0)
  const idleTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const dot  = dotRef.current
    const ringEl = ringRef.current
    if (!dot || !ringEl) return

    // Mobile / touch device check — exit completely with zero overhead
    if (window.matchMedia('(pointer: coarse)').matches) return

    // 1. Mouse movement listener with RAF auto-pause on idle
    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY }
      dot.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`

      if (!isMoving.current) {
        isMoving.current = true;
        rafId.current = requestAnimationFrame(animate)
      }

      if (idleTimer.current) clearTimeout(idleTimer.current)
      idleTimer.current = setTimeout(() => {
        isMoving.current = false
      }, 150)
    }

    // 2. Smooth ring interpolation (lerp)
    const animate = () => {
      const dx = mouse.current.x - ring.current.x
      const dy = mouse.current.y - ring.current.y
      
      ring.current.x += dx * 0.18
      ring.current.y += dy * 0.18

      ringEl.style.transform = `translate3d(${ring.current.x}px, ${ring.current.y}px, 0) translate(-50%, -50%)`

      if (isMoving.current || Math.abs(dx) > 0.1 || Math.abs(dy) > 0.1) {
        rafId.current = requestAnimationFrame(animate)
      } else {
        isMoving.current = false
      }
    }

    // 3. Delegation-based hover detection for dynamic DOM compatibility
    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null
      if (target?.closest('a, button, [role="button"], input, textarea, select, [data-cursor-hover]')) {
        document.body.classList.add('cursor-hover')
      }
    }

    const onMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null
      if (target?.closest('a, button, [role="button"], input, textarea, select, [data-cursor-hover]')) {
        document.body.classList.remove('cursor-hover')
      }
    }

    document.addEventListener('mousemove', onMove, { passive: true })
    document.addEventListener('mouseover', onMouseOver, { passive: true })
    document.addEventListener('mouseout', onMouseOut, { passive: true })

    return () => {
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onMouseOver)
      document.removeEventListener('mouseout', onMouseOut)
      if (idleTimer.current) clearTimeout(idleTimer.current)
      cancelAnimationFrame(rafId.current)
    }
  }, [])

  return (
    <>
      <div ref={dotRef}  className={styles.dot}  aria-hidden="true" />
      <div ref={ringRef} className={styles.ring} aria-hidden="true" />
    </>
  )
}
