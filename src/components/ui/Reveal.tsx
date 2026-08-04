'use client'

import { m } from 'framer-motion'
import { ReactNode } from 'react'

export function Reveal({ 
  children, 
  delay = 0, 
  className = "",
  as = "div",
  ...props
}: { 
  children: ReactNode
  delay?: number
  className?: string
  as?: any
  [key: string]: any
}) {
  const Component = typeof as === 'string' ? (m as any)[as] : m(as)

  return (
    <Component
      className={className}
      initial={{ opacity: 0.01, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -50px 0px" }}
      transition={{ duration: 0.65, delay: delay, ease: [0.16, 1, 0.3, 1] }}
      style={props.style}
      {...props}
    >
      {children}
    </Component>
  )
}

