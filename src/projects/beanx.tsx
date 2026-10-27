import type { CSSProperties, ReactNode } from 'react'
import { at, Paper, Shot, Turn, type Project } from '../bits'

const RED = '#D7262E' // the app's red
const GREEN = '#3E7F66'
const INK = '#2A1E17' // coffee-dark ink
const IMG = '/images/beanx/'

// white iPhone frame around a 440×956 screen recording
function Phone({ src, alt, style }: { src: string; alt: string; style: CSSProperties }) {
  return (
    <div className="lift" style={{ position: 'absolute', width: 160, padding: 6, boxSizing: 'border-box', background: '#F7F4EE', border: '1.5px solid #CFC8BA', borderRadius: 26, boxShadow: '0 12px 24px rgba(40,30,10,.25)', ...style }}>
      <Shot src={src} alt={alt} style={{ width: 145, height: 315, borderRadius: 20, background: '#FFFFFF' }} />
    </div>
  )
}

const FLOW = ['snap the coffee bag', 'Gemini reads roast, origin and flavor notes', 'pick a method: V60, Aeropress, moka…', 'get a recipe for these beans', 'brew it, log it to the passport']

function Left({ n }: { n: number }) {
  return (
    <Paper side="left" n={n}>
      {/* someone put a cup down here */}
      <svg aria-hidden="true" width="170" height="170" style={at(24, 700, { mixBlendMode: 'multiply' })}>
        <g filter="url(#stain)">
          <circle cx="85" cy="85" r="66" fill="rgba(160,105,50,.06)" />
          <circle cx="85" cy="85" r="66" fill="none" stroke="rgba(140,85,35,.45)" strokeWidth="3.5" strokeDasharray="160 12 80 10 140" />
          <circle cx="86" cy="86" r="62" fill="none" stroke="rgba(140,85,35,.16)" strokeWidth="7" />
        </g>
      </svg>

      <div className="mono" style={{ position: 'absolute', right: 64, top: 38, fontSize: 11, letterSpacing: '.24em', color: '#3A362F' }}>JUN – AUG 2026 · iOS</div>
      <div style={at(56, 62, { transform: 'rotate(-6deg)' })}>
        <Shot src={IMG + 'logo-mark.png'} alt="BeanX logo: a red line-art pour-over brewer forming an X" style={{ width: 100, height: 100, objectFit: 'contain' }} />
      </div>
      <h2 className="marker" style={at(170, 72, { margin: 0, fontSize: 84, fontWeight: 400, lineHeight: 1, color: INK, transform: 'rotate(-2deg)' })}>Bean<span style={{ color: RED }}>X</span></h2>
      <div className="hand" style={at(174, 166, { fontSize: 26, color: '#3A362F' })}>an AI coffee guide, for iOS</div>

      <div style={at(64, 226, { width: 530, fontSize: 24, lineHeight: 1.2, fontStyle: 'italic' })}>“Help me brew this bag well, remember how I did it…”</div>
      <div className="hand" style={at(380, 288, { fontSize: 20, color: '#3A362F', transform: 'rotate(-2deg)' })}>— the one job, from my README</div>

      <Phone src={IMG + 'scan-to-recipe.gif'} alt="BeanX scan flow: Scan your beans, the camera scan, the detected Yirgacheffe Konga card, Brew it with V60, then the recipe card" style={{ left: 64, top: 330, transform: 'rotate(-3deg)' }} />
      <div className="hand" style={at(70, 678, { width: 190, fontSize: 19, lineHeight: 1.05 })}>scan to recipe, start to finish</div>

      {/* the flow, hand-drawn */}
      <div style={at(262, 334, { width: 350 })}>
        <svg aria-hidden="true" width="4" height="210" style={at(16, 30)}><line x1="2" y1="0" x2="2" y2="210" stroke={RED} strokeWidth="1.6" strokeDasharray="3 6" strokeLinecap="round" /></svg>
        {FLOW.map((step, i) => (
          <div key={i} style={{ position: 'relative', display: 'flex', gap: 12, alignItems: 'center', height: 50 }}>
            <span style={{ position: 'relative', width: 34, height: 34, flex: 'none', borderRadius: '50%', background: '#F2EDE3' }}>
              <svg aria-hidden="true" width="34" height="34" viewBox="0 0 34 34" style={{ position: 'absolute', inset: 0, transform: `rotate(${i * 67}deg)` }}><path d="M17 3 C 27 2, 32 9, 31 17 C 30 27, 22 32, 15 31 C 7 30, 2 24, 3 16 C 4 8, 10 3, 19 4" fill="none" stroke={RED} strokeWidth="1.8" strokeLinecap="round" /></svg>
              <span className="hand" style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, fontWeight: 700, color: RED }}>{i + 1}</span>
            </span>
            <span className="hand" style={{ fontSize: 21, lineHeight: 1.05 }}>{step}</span>
          </div>
        ))}
      </div>

      {/* origin stamps, from the app's demo passport */}
      <svg role="img" aria-label="Passport stamp: Ethiopia, Yirgacheffe" width="118" height="118" viewBox="0 0 118 118" style={at(264, 614, { transform: 'rotate(-12deg)', opacity: 0.85 })}>
        <defs><path id="beanx-eth" d="M59 59 m-42 0 a42 42 0 1 1 84 0 a42 42 0 1 1 -84 0" /></defs>
        <circle cx="59" cy="59" r="55" fill="none" stroke={RED} strokeWidth="2.5" />
        <circle cx="59" cy="59" r="32" fill="none" stroke={RED} strokeWidth="1.5" />
        <text fontFamily="IBM Plex Mono, monospace" fontSize="9.5" letterSpacing="2.4" fill={RED}><textPath href="#beanx-eth">YIRGACHEFFE · SIDAMO · ARRIVED ·</textPath></text>
        <text x="59" y="57" textAnchor="middle" fontFamily="IBM Plex Mono, monospace" fontSize="10.5" fontWeight="600" fill={RED}>ETHIOPIA</text>
        <text x="59" y="70" textAnchor="middle" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill={RED}>✓ BREWED</text>
      </svg>
      <div className="mono" style={at(402, 608, { width: 150, padding: '8px 10px', boxSizing: 'border-box', border: `2px solid ${GREEN}`, outline: `1px solid ${GREEN}`, outlineOffset: 3, color: GREEN, textAlign: 'center', transform: 'rotate(7deg)', opacity: 0.85 })}>
        <div style={{ fontSize: 8, letterSpacing: '.24em' }}>ENTRY · ORIGIN</div>
        <div style={{ fontSize: 16, fontWeight: 600, letterSpacing: '.14em', margin: '3px 0' }}>COLOMBIA</div>
        <div style={{ fontSize: 8.5, letterSpacing: '.16em' }}>HUILA · 1700 M</div>
      </div>
      <div className="mono" style={at(420, 704, { width: 168, height: 66, borderRadius: '50%', border: '2px solid #1D3F8F', color: '#1D3F8F', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', transform: 'rotate(-5deg)', opacity: 0.85 })}>
        <div style={{ fontSize: 15, fontWeight: 600, letterSpacing: '.18em' }}>KENYA</div>
        <div style={{ fontSize: 8.5, letterSpacing: '.18em' }}>NYERI · LOGGED</div>
      </div>
      <div className="hand" style={at(266, 740, { width: 140, fontSize: 19, lineHeight: 1.05, color: '#3A362F' })}>(the app's demo passport)</div>
    </Paper>
  )
}

const LOG: [string, string, ReactNode][] = [
  ['0:00', 'BLOOM · JUN 18', 'first commit'],
  ['0:45', 'FIRST POUR · JUN 23', 'the app: scan, recipe, passport'],
  ['1:15', 'SECOND POUR · JUL 06', 'sign-in with Clerk'],
  ['1:30', 'THIRD POUR · JUL 07', 'its own backend: Bun + Elysia + Prisma'],
  ['2:15', 'DRAWDOWN · JUL 31', <>app ↔ backend: passport saved in Postgres, Gemini behind the API</>],
  ['3:00', 'REST · NOW', 'not public yet'],
]

const BAG: [string, string][] = [
  ['ORIGIN', 'Expo SDK 54 · React Native 0.81 · TypeScript'],
  ['PROCESS', 'Bun · Elysia · Prisma · Postgres on Neon · Clerk'],
  ['TASTING NOTES', 'Gemini 2.5 Flash, Liquid Glass tabs, Apple Maps'],
]

// café punch card linking to a repo
function Punch({ href, kicker, sub, style }: { href: string; kicker: string; sub: string; style: CSSProperties }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="mono lift" style={{ position: 'absolute', display: 'flex', width: 224, height: 88, boxSizing: 'border-box', padding: '12px 12px 12px 14px', borderRadius: 8, textDecoration: 'none', background: '#FBF8F0', border: `1.5px solid ${INK}`, color: INK, boxShadow: '0 6px 12px rgba(40,30,10,.2)', ...style }}>
      <span style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <span style={{ fontSize: 9, letterSpacing: '.22em', color: RED }}>{kicker}</span>
        <span style={{ fontSize: 15, fontWeight: 600, letterSpacing: '.12em' }}>VIEW CODE ↗</span>
        <span style={{ fontSize: 9.5, letterSpacing: '.04em', color: '#5A554C' }}>{sub}</span>
      </span>
      <span aria-hidden="true" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        {[1, 1, 0, 0].map((punched, i) => <span key={i} style={{ width: 12, height: 12, borderRadius: '50%', border: punched ? 'none' : `1.5px solid ${INK}`, background: punched ? '#F2EDE3' : 'none', boxShadow: punched ? 'inset 0 1px 3px rgba(0,0,0,.45)' : 'none', boxSizing: 'border-box' }} />)}
      </span>
    </a>
  )
}

function Right({ n }: { n: number }) {
  return (
    <Paper side="right" n={n}>
      <div className="mono" style={at(64, 66, { fontSize: 11, letterSpacing: '.22em', color: '#3A362F' })}>BREW LOG · HOW BEANX WAS BREWED</div>
      <div style={at(64, 98, { width: 350, display: 'flex', flexDirection: 'column', gap: 10 })}>
        <svg aria-hidden="true" width="4" height="270" style={at(24, 16)}><line x1="2" y1="0" x2="2" y2="270" stroke={RED} strokeWidth="1.6" strokeDasharray="1 5" strokeLinecap="round" /></svg>
        {LOG.map(([t, label, text]) => (
          <div key={t} style={{ position: 'relative', display: 'flex', gap: 14, alignItems: 'flex-start' }}>
            <span className="mono" style={{ width: 50, flex: 'none', padding: '3px 0', textAlign: 'center', fontSize: 13, fontWeight: 600, background: INK, color: '#F2EDE3', borderRadius: 3 }}>{t}</span>
            <span>
              <span className="mono" style={{ display: 'block', fontSize: 9, letterSpacing: '.2em', color: '#5A554C' }}>{label}</span>
              <span className="hand" style={{ display: 'block', fontSize: 20, lineHeight: 1.05 }}>{text}</span>
            </span>
          </div>
        ))}
      </div>

      <Phone src={IMG + 'brew-timer.gif'} alt="BeanX guided brew: the dial timer counting up as the step moves from Bloom to First pour" style={{ left: 446, top: 66, transform: 'rotate(3deg)' }} />
      <div className="hand" style={at(440, 410, { width: 176, fontSize: 19, lineHeight: 1.05 })}>guided brew: the dial counts, steps move on by themselves</div>

      {/* the stack, on a coffee bag */}
      <div className="lift" style={at(64, 420, { width: 290, height: 292, transform: 'rotate(-2deg)', filter: 'drop-shadow(0 8px 12px rgba(40,30,10,.25))' })}>
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, borderRadius: '3px 3px 6px 6px', background: 'repeating-linear-gradient(90deg, rgba(60,35,15,.28) 0 2px, transparent 2px 6px) 0 0 / 100% 22px no-repeat, linear-gradient(180deg, rgba(60,35,15,.18), transparent 12%), #C49A6C' }} />
        <div aria-hidden="true" style={{ position: 'absolute', right: 20, top: 30, width: 22, height: 22, borderRadius: '50%', background: 'radial-gradient(circle, #6B4A2E 0 3px, #E9DFCB 3.5px 6px, #B98E62 6.5px)', boxShadow: '0 1px 2px rgba(0,0,0,.3)' }} />
        <div style={{ position: 'absolute', left: 22, right: 22, top: 58, bottom: 18, padding: '12px 14px', background: '#F7F1E4', boxShadow: '0 1px 2px rgba(0,0,0,.2)' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
            <span className="marker" style={{ fontSize: 22, color: RED }}>beanx</span>
            <span className="mono" style={{ fontSize: 9, letterSpacing: '.28em', color: INK }}>HOUSE BLEND</span>
          </div>
          <div style={{ borderTop: `1.5px dashed ${INK}`, opacity: 0.4, margin: '6px 0 8px' }} />
          {BAG.map(([k, v]) => (
            <div key={k} style={{ marginBottom: 6 }}>
              <div className="mono" style={{ fontSize: 8.5, letterSpacing: '.22em', color: '#5A554C' }}>{k}</div>
              <div className="hand" style={{ fontSize: 18, lineHeight: 1.02, color: INK }}>{v}</div>
            </div>
          ))}
        </div>
      </div>

      <Punch href="https://github.com/xhxaidi/BeanX_frontend" kicker="SOURCE · FRONTEND" sub="xhxaidi/BeanX_frontend" style={{ left: 384, top: 494, transform: 'rotate(-2deg)' }} />
      <Punch href="https://github.com/xhxaidi/BeanX_backend" kicker="SOURCE · BACKEND" sub="xhxaidi/BeanX_backend" style={{ left: 396, top: 598, transform: 'rotate(1.5deg)' }} />

      {/* the live link: an order docket, still brewing */}
      <div className="mono" style={at(382, 704, { width: 220, height: 80, boxSizing: 'border-box', padding: '14px 14px 10px', background: 'radial-gradient(circle, #F2EDE3 2.5px, transparent 3px) 0 -4px / 10px 10px repeat-x, #FFFDF8', boxShadow: '0 6px 12px rgba(40,30,10,.2)', transform: 'rotate(-1deg)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' })}>
        <span style={{ fontSize: 9, letterSpacing: '.22em', color: '#5A554C' }}>ORDER Nº 01 · LIVE</span>
        <span style={{ fontSize: 14, fontWeight: 600, letterSpacing: '.1em' }}>BEANX FOR iOS</span>
        <span className="rubber" style={{ alignSelf: 'flex-start', whiteSpace: 'nowrap', fontSize: 9.5, padding: '2px 7px', borderColor: RED, color: RED, transform: 'rotate(-2deg)' }}>Not public yet</span>
      </div>

      <Turn style={{ left: 64, bottom: 30, fontSize: 26 }}>turn the page →</Turn>
    </Paper>
  )
}

export default { id: 'beanx', tab: 'BeanX', color: '#DDB0CC', Left, Right } satisfies Project
