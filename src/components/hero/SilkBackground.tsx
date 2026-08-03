'use client'

import { useEffect, useRef, useCallback, useState } from 'react'

/* ------------------------------------------------------------------ */
/*  GLSL Shaders                                                      */
/* ------------------------------------------------------------------ */

const vertexShader = /* glsl */ `
  attribute vec2 position;
  attribute vec2 uv;
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 0.0, 1.0);
  }
`

const fragmentShader = /* glsl */ `
  precision highp float;

  varying vec2 vUv;

  uniform float uTime;
  uniform float uSpeed;
  uniform float uNoiseIntensity;
  uniform vec3  uColor;          /* #06402B forest green silk color */
  uniform vec2  uMouse;
  uniform float uMouseSensitivity;

  /* ---- Fast procedural noise ---- */
  const float E = 2.71828182845904523536;

  float hash(vec2 p) {
    vec2 r = E * sin(E * p);
    return fract(r.x * r.y * (1.0 + p.x));
  }

  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);

    float a = hash(i);
    float b = hash(i + vec2(1.0, 0.0));
    float c = hash(i + vec2(0.0, 1.0));
    float d = hash(i + vec2(1.0, 1.0));

    return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
  }

  /* Multi-octave FBM for organic fabric folds */
  float fbm(vec2 p) {
    float value = 0.0;
    float amp = 0.5;
    vec2 shift = vec2(100.0);
    for (int i = 0; i < 5; i++) {
      value += amp * noise(p);
      p = p * 2.0 + shift;
      amp *= 0.5;
    }
    return value;
  }

  void main() {
    vec2 uv = vUv;

    /* Mouse displacement */
    vec2 mouseOffset = (uMouse - 0.5) * uMouseSensitivity;
    uv += mouseOffset * 0.25 * sin(uv.yx * 3.14159);

    float t = uTime * uSpeed * 0.35;

    /* Silk wave coordinates */
    vec2 p = uv * vec2(2.8, 1.6);

    /* Domain warping for organic silk flow */
    vec2 q = vec2(
      fbm(p + vec2(0.0, t * 0.4)),
      fbm(p + vec2(5.2, t * 0.3))
    );

    vec2 r = vec2(
      fbm(p + 3.2 * q + vec2(1.7, 9.2) + t * 0.15),
      fbm(p + 3.2 * q + vec2(8.3, 2.8) + t * 0.2)
    );

    /* Vertical silk curtain folds structure */
    float verticalFolds = 0.5 + 0.5 * sin(uv.x * 12.0 + r.x * 3.5 + t * 0.2);
    float pattern = fbm(p + r * uNoiseIntensity) * 0.45 + verticalFolds * 0.55;

    /* Contrast curves: fold peaks catch green light, fold troughs stay pitch black */
    float foldLight = pow(clamp(pattern, 0.0, 1.0), 1.25);
    float sheen = pow(clamp((pattern - 0.32) * 1.5, 0.0, 1.0), 2.8);

    /* ============================================================
       COLOR COMPOSITION
       Base: PITCH BLACK (vec3(0.0))
       Curtain: Rich Forest Green (#06402B) Silk Folds with Emerald Luster
    ============================================================ */
    vec3 pitchBlack = vec3(0.0);
    vec3 greenSilk = uColor * 2.5;                       /* Deep vibrant green #06402B */
    vec3 emeraldSheen = vec3(0.22, 0.88, 0.55);          /* Luminous emerald silk sheen */

    /* Green silk folds on pitch black background */
    vec3 col = mix(pitchBlack, greenSilk, foldLight);

    /* Glossy emerald sheen on lit silk crests */
    col += emeraldSheen * sheen * 0.95;

    gl_FragColor = vec4(col, 1.0);
  }
`

/* ------------------------------------------------------------------ */
/*  Helpers                                                           */
/* ------------------------------------------------------------------ */

function hexToRgbNormalized(hex: string): [number, number, number] {
  const clean = hex.replace('#', '')
  return [
    parseInt(clean.slice(0, 2), 16) / 255,
    parseInt(clean.slice(2, 4), 16) / 255,
    parseInt(clean.slice(4, 6), 16) / 255,
  ]
}

/* ------------------------------------------------------------------ */
/*  Props                                                             */
/* ------------------------------------------------------------------ */

interface SilkBackgroundProps {
  color?: string
  speed?: number
  noiseIntensity?: number
  mouseSensitivity?: number
  /** 0–1: higher = smoother / more lagged mouse follow (0.9 → lerp 0.1/frame) */
  damping?: number
  className?: string
}

/* ------------------------------------------------------------------ */
/*  Component                                                         */
/* ------------------------------------------------------------------ */

export default function SilkBackground({
  color = '#06402B',
  speed = 1.2,
  noiseIntensity = 1.2,
  mouseSensitivity = 0.15,
  damping = 0.9,
  className,
}: SilkBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const animFrameRef = useRef<number>(0)
  const cleanupRef = useRef<(() => void) | null>(null)

  /* Store mutable state for the animation loop without re-renders */
  const stateRef = useRef({
    mouseTarget: [0.5, 0.5] as [number, number],
    mouseCurrent: [0.5, 0.5] as [number, number],
  })

  /* ---- Reduced-motion detection (safe for SSR) ---- */
  const [reducedMotion, setReducedMotion] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReducedMotion(mq.matches)
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  /* ---- Mouse handler (stable ref) ---- */
  const onMouseMove = useCallback((e: MouseEvent) => {
    stateRef.current.mouseTarget = [
      e.clientX / window.innerWidth,
      1.0 - e.clientY / window.innerHeight, // flip Y for GL coords
    ]
  }, [])

  /* ---- Main effect: create OGL context, run animation, clean up ---- */
  useEffect(() => {
    if (reducedMotion) return
    const container = containerRef.current
    if (!container) return

    let cancelled = false

    ;(async () => {
      const { Renderer, Program, Mesh, Triangle } = await import('ogl')

      if (cancelled || !container) return

      /* ---- Renderer ---- */
      const isMobile = window.innerWidth <= 768
      const dpr = isMobile
        ? Math.min(window.devicePixelRatio, 1.5)
        : Math.min(window.devicePixelRatio, 2)

      const renderer = new Renderer({
        dpr,
        alpha: false,
        antialias: false,
        powerPreference: 'low-power',
      })

      const gl = renderer.gl
      container.appendChild(gl.canvas as HTMLCanvasElement)

      /* Style the canvas to fill the container */
      const canvas = gl.canvas as HTMLCanvasElement
      canvas.style.position = 'absolute'
      canvas.style.top = '0'
      canvas.style.left = '0'
      canvas.style.width = '100%'
      canvas.style.height = '100%'
      canvas.style.display = 'block'
      canvas.style.pointerEvents = 'none'

      /* ---- Geometry (full-screen triangle — cheaper than a quad) ---- */
      const geometry = new Triangle(gl)

      /* ---- Program (shader material) ---- */
      const [r, g, b] = hexToRgbNormalized(color)

      const program = new Program(gl, {
        vertex: vertexShader,
        fragment: fragmentShader,
        uniforms: {
          uTime: { value: 0 },
          uSpeed: { value: speed },
          uNoiseIntensity: { value: noiseIntensity },
          uColor: { value: [r, g, b] },
          uMouse: { value: [0.5, 0.5] },
          uMouseSensitivity: { value: mouseSensitivity },
        },
      })

      const mesh = new Mesh(gl, { geometry, program })

      /* ---- Resize handler ---- */
      const onResize = () => {
        if (!container) return
        const w = container.clientWidth || window.innerWidth
        const h = container.clientHeight || window.innerHeight
        renderer.setSize(w, h)
      }
      onResize()
      window.addEventListener('resize', onResize, { passive: true })

      /* ---- Mouse listener ---- */
      window.addEventListener('mousemove', onMouseMove, { passive: true })

      /* ---- Animation loop with off-screen pause observer ---- */
      const lerpFactor = 1 - damping  // damping 0.9 → lerp 0.1 → smooth lag
      const startTime = performance.now()
      let isVisible = true

      const animate = () => {
        if (cancelled || !isVisible) return
        animFrameRef.current = requestAnimationFrame(animate)

        /* Smoothly interpolate mouse position */
        const s = stateRef.current
        s.mouseCurrent[0] += (s.mouseTarget[0] - s.mouseCurrent[0]) * lerpFactor
        s.mouseCurrent[1] += (s.mouseTarget[1] - s.mouseCurrent[1]) * lerpFactor

        /* Update uniforms */
        program.uniforms.uTime.value = (performance.now() - startTime) / 1000
        program.uniforms.uMouse.value = [s.mouseCurrent[0], s.mouseCurrent[1]]

        renderer.render({ scene: mesh })
      }

      const observer = new IntersectionObserver(([entry]) => {
        const wasVisible = isVisible
        isVisible = entry.isIntersecting
        if (isVisible && !wasVisible && !cancelled) {
          cancelAnimationFrame(animFrameRef.current)
          animFrameRef.current = requestAnimationFrame(animate)
        }
      }, { threshold: 0 })

      if (container) observer.observe(container)

      animFrameRef.current = requestAnimationFrame(animate)

      /* ---- Stash full cleanup so unmount can call it ---- */
      cleanupRef.current = () => {
        cancelled = true
        observer.disconnect()
        cancelAnimationFrame(animFrameRef.current)
        window.removeEventListener('resize', onResize)
        window.removeEventListener('mousemove', onMouseMove)

        /* Tear down GL resources */
        geometry.remove()
        program.remove()
        renderer.gl.getExtension('WEBGL_lose_context')?.loseContext()

        /* Remove canvas from DOM */
        if (canvas.parentNode) {
          canvas.parentNode.removeChild(canvas)
        }
      }
    })()

    return () => {
      cancelled = true
      if (cleanupRef.current) {
        cleanupRef.current()
        cleanupRef.current = null
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reducedMotion]) // re-run if reduced-motion toggles

  /* ---- Reduced-motion fallback ---- */
  if (reducedMotion) {
    return (
      <div
        className={className}
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', background: '#000000', pointerEvents: 'none' }}
        aria-hidden="true"
      />
    )
  }

  return (
    <div
      ref={containerRef}
      className={className}
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', overflow: 'hidden', pointerEvents: 'none' }}
      aria-hidden="true"
    />
  )
}

