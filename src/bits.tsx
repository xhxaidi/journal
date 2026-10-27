import { createContext, useContext, useState, type CSSProperties, type FC, type ReactNode } from 'react'

export type Page = FC<{ n: number }>
export type Project = { id: string; tab: string; color: string; Left: Page; Right: Page }

export const at = (left: number, top: number, s: CSSProperties = {}): CSSProperties => ({ position: 'absolute', left, top, ...s })

export const rgba = (hex: string, a: number) => {
  const n = parseInt(hex.slice(1), 16)
  return `rgba(${(n >> 16) & 255},${(n >> 8) & 255},${n & 255},${a})`
}

// highlighter stroke in any ink
export const hl = (c: string): CSSProperties => ({
  background: `linear-gradient(100deg,${rgba(c, 0)} 1%,${rgba(c, 0.38)} 3%,${rgba(c, 0.28)} 95%,${rgba(c, 0)} 99%)`,
  padding: '0 .16em',
  WebkitBoxDecorationBreak: 'clone',
  boxDecorationBreak: 'clone',
})

// "turn the page" links: flip the book on desktop, scroll the stack on mobile
export const Nav = createContext({ next: (_from: HTMLElement) => {}, close: () => {} })

export function Turn({ close, style, children }: { close?: boolean; style: CSSProperties; children: ReactNode }) {
  const nav = useContext(Nav)
  return (
    <button className="hand linkbtn" style={{ position: 'absolute', fontSize: 28, ...style }} onClick={(e) => (close ? nav.close() : nav.next(e.currentTarget))}>
      {children}
    </button>
  )
}

// Every page is in the DOM at once, so media waits until its spread is open or next to it;
// otherwise the first visit downloads every project's GIFs.
export const Near = createContext(true)

export function Shot({ src, alt, style }: { src: string; alt: string; style: CSSProperties }) {
  const near = useContext(Near)
  const [seen, setSeen] = useState(near)
  if (near && !seen) setSeen(true)
  return seen
    ? <img src={src} alt={alt} loading="lazy" decoding="async" style={{ display: 'block', objectFit: 'cover', ...style }} />
    : <div role="img" aria-label={alt} style={style} />
}

export function Paper({ side, n, children }: { side: 'left' | 'right'; n: number; children: ReactNode }) {
  return (
    <div className="pg">
      <svg aria-hidden="true" width="650" height="812" className="grain"><rect width="650" height="812" filter="url(#grain)" /></svg>
      <div aria-hidden="true" className={'gutter ' + side} />
      <div className={'mono folio ' + side}>P. {String(n).padStart(2, '0')}</div>
      {children}
    </div>
  )
}

export function Marbled({ filter, shade, children }: { filter: string; shade: string; children: ReactNode }) {
  return (
    <div className="pg" style={{ background: '#1D2A4A' }}>
      <svg aria-hidden="true" width="650" height="812" style={{ position: 'absolute', inset: 0 }}><rect x="-120" y="-120" width="890" height="1052" fill="url(#mb)" filter={`url(#${filter})`} /></svg>
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: shade, boxShadow: 'inset 0 0 0 10px #6B4021' }} />
      {children}
    </div>
  )
}
