'use client'

export function SkipNav() {
  return (
    <a
      href="#main-content"
      className="skip-nav"
      onFocus={(e) => { (e.currentTarget as HTMLAnchorElement).dataset.focused = 'true' }}
      onBlur={(e) => { delete (e.currentTarget as HTMLAnchorElement).dataset.focused }}
    >
      Skip to main content
    </a>
  )
}
