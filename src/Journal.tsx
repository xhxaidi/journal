import { useEffect, useRef, useState, useSyncExternalStore, type CSSProperties } from 'react'
import { at, Nav, Near, type Page } from './bits'
import { AboutLeft, AboutRight, BackCover, ContactLeft, Cover, Endpaper, Opening } from './pages'
import { projects } from './projects'

type Spread = { id: string; tab?: string; color?: string; Left: Page; Right: Page }

// Spread j shows pages 2j (left) and 2j+1 (right). Leaf i carries spread i-1's right page on its
// front and spread i's left page on its back; the last right page sits on the back board.
const SPREADS: Spread[] = [
  { id: 'start', Left: Endpaper, Right: Opening },
  { id: 'about', tab: 'About', color: '#F5DE3C', Left: AboutLeft, Right: AboutRight },
  ...projects,
  { id: 'contact', tab: 'Contact', color: '#E9E2D2', Left: ContactLeft, Right: BackCover },
]
const N = SPREADS.length
const TURN = 1.3 // seconds per page turn
const pad = (n: number) => String(n).padStart(2, '0')
const ABOUT = SPREADS.findIndex((s) => s.id === 'about') + 1
// a #hash picks the spread; with none, the journal opens on About
const spreadFromHash = () => SPREADS.findIndex((s) => '#' + s.id === location.hash) + 1 || ABOUT

const onResize = (cb: () => void) => (addEventListener('resize', cb), () => removeEventListener('resize', cb))
const small = matchMedia('(max-width: 899px), (prefers-reduced-motion: reduce)')
const onSmall = (cb: () => void) => (small.addEventListener('change', cb), () => small.removeEventListener('change', cb))

export default function Journal() {
  return useSyncExternalStore(onSmall, () => small.matches) ? <Stack /> : <Book />
}

function Defs() {
  return (
    <svg aria-hidden="true" width="0" height="0" style={{ position: 'absolute' }}>
      <filter id="grain"><feTurbulence type="fractalNoise" baseFrequency=".85" numOctaves="2" stitchTiles="stitch" /><feColorMatrix values="0 0 0 0 .42  0 0 0 0 .35  0 0 0 0 .24  0 0 0 .2 0" /></filter>
      <filter id="leather"><feTurbulence type="fractalNoise" baseFrequency=".7" numOctaves="4" seed="4" stitchTiles="stitch" /><feColorMatrix values="0 0 0 0 .22  0 0 0 0 .11  0 0 0 0 .03  0 0 0 .6 -.14" /></filter>
      <filter id="scuff"><feTurbulence type="fractalNoise" baseFrequency=".012 .03" numOctaves="3" seed="9" stitchTiles="stitch" /><feColorMatrix values="0 0 0 0 1  0 0 0 0 .9  0 0 0 0 .75  0 0 0 .9 -.42" /></filter>
      <linearGradient id="mb" x1="0" y1="0" x2="0.11" y2="0.07" spreadMethod="repeat">
        {[['0', '#1D3F8F'], ['.18', '#16294F'], ['.3', '#E9DFC8'], ['.38', '#C98E2B'], ['.52', '#7A1F1F'], ['.62', '#E9DFC8'], ['.74', '#2F6E73'], ['1', '#1D3F8F']].map(([o, c]) => <stop key={o} offset={o} stopColor={c} />)}
      </linearGradient>
      {[['marb', 11], ['marb2', 23]].map(([id, seed]) => (
        <filter key={id} id={String(id)} x="0" y="0" width="100%" height="100%"><feTurbulence type="turbulence" baseFrequency=".006 .011" numOctaves="4" seed={seed} result="t" /><feDisplacementMap in="SourceGraphic" in2="t" scale="160" xChannelSelector="R" yChannelSelector="G" /></filter>
      ))}
      <filter id="stain" x="-10%" y="-10%" width="120%" height="120%"><feTurbulence type="fractalNoise" baseFrequency=".035" numOctaves="2" seed="5" /><feDisplacementMap in="SourceGraphic" scale="9" /></filter>
    </svg>
  )
}

type S = { intro: boolean; progress: number; band: boolean; opened: boolean; turned: number; from: number; turning: boolean }
const INIT: S = { intro: true, progress: 0, band: true, opened: false, turned: 0, from: 0, turning: false }

function Book() {
  const scale = useSyncExternalStore(onResize, () => Math.min(innerWidth / 1440, innerHeight / 900))
  const [s, setS] = useState(INIT)
  const now = useRef(s)
  now.current = s
  const timers = useRef<number[]>([])
  const later = (fn: () => void, ms: number) => void timers.current.push(window.setTimeout(fn, ms))
  const set = (p: Partial<S>) => setS((o) => ({ ...o, ...p }))

  const goTo = (n: number) => {
    const c = now.current
    if (n === c.turned) return
    set({ from: c.turned, turned: n, turning: true })
    later(() => set({ turning: false }), TURN * 550 + (Math.abs(n - c.turned) - 1) * 140)
  }
  const open = () => {
    const c = now.current
    if (c.opened || !c.band) return
    const target = spreadFromHash()
    set({ intro: false, progress: 100, band: false })
    later(() => { set({ opened: true }); goTo(target) }, 520)
  }
  const close = () => {
    const c = now.current
    if (!c.opened) return
    const tail = (c.turned - 1) * 140
    goTo(0)
    later(() => set({ opened: false }), TURN * 600 + tail)
    later(() => set({ band: true }), TURN * 1000 + tail + 700)
  }
  const next = () => { const c = now.current; if (c.opened && c.turned < N) goTo(c.turned + 1) }
  const prev = () => { const c = now.current; if (c.opened && c.turned > 1) goTo(c.turned - 1) }
  const replay = () => { timers.current.forEach(clearTimeout); timers.current = []; setS(INIT) }

  // loader: the pencil draws to 100%, then the journal opens itself
  useEffect(() => {
    if (!s.intro) return
    const t = s.progress < 100 ? setTimeout(() => set({ progress: Math.min(100, s.progress + 3) }), 60) : setTimeout(open, 450)
    return () => clearTimeout(t)
  }, [s.intro, s.progress])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => (e.key === 'ArrowRight' ? next() : e.key === 'ArrowLeft' ? prev() : undefined)
    const onHash = () => { if (now.current.opened) goTo(spreadFromHash()) }
    addEventListener('keydown', onKey)
    addEventListener('hashchange', onHash)
    return () => { removeEventListener('keydown', onKey); removeEventListener('hashchange', onHash); timers.current.forEach(clearTimeout) }
  }, [])

  useEffect(() => {
    if (!s.intro) history.replaceState(null, '', s.opened && s.turned ? '#' + SPREADS[s.turned - 1].id : location.pathname + location.search)
  }, [s.intro, s.opened, s.turned])

  const lo = Math.min(s.from, s.turned), hi = Math.max(s.from, s.turned), fwd = s.turned > s.from
  const moving = (i: number) => i >= lo && i < hi
  const near = (spread: number) => Math.abs(spread - (s.turned - 1)) <= 1
  const leaf = (i: number): CSSProperties => {
    const on = i < s.turned
    const delay = moving(i) ? (fwd ? i - lo : hi - 1 - i) * 0.14 : 0
    const lift = moving(i) && s.turning ? 34 : 0
    return {
      position: 'absolute', left: 600, top: 0, width: 600, height: 750, transformOrigin: '0 50%', transformStyle: 'preserve-3d', willChange: 'rotate, translate',
      rotate: `y ${on ? -180 : 0}deg`,
      translate: `0 0 ${(on ? i + 1 : N - i) + lift}px`,
      transition: `rotate ${TURN}s cubic-bezier(.42,.08,.2,1) ${delay}s, translate ${TURN / 2}s ${s.turning ? 'cubic-bezier(.2,.7,.3,1)' : 'cubic-bezier(.55,0,.75,.35)'} ${s.turning ? delay : 0}s`,
    }
  }
  const shade = (i: number, back: boolean): CSSProperties => ({
    position: 'absolute', inset: 0, pointerEvents: 'none',
    background: `linear-gradient(${back ? 270 : 90}deg, rgba(30,20,8,.28) 0%, rgba(30,20,8,.08) 22%, rgba(30,20,8,0) 48%, rgba(255,250,240,.22) 74%, rgba(255,250,240,.05) 84%, rgba(30,20,8,.2) 100%)`,
    opacity: moving(i) && s.turning ? 1 : 0,
    transition: `opacity ${TURN / 2}s cubic-bezier(.4,0,.2,1)`,
  })

  const j = s.turned - 1
  const label = j < 0 ? '' : j === 0 ? 'ENDPAPER · P. 01' : j === N - 1 ? `P. ${pad(2 * j)} · BACK COVER` : `P. ${pad(2 * j)} – ${pad(2 * j + 1)}`
  const tabs = SPREADS.map((sp, i) => ({ ...sp, n: i + 1 })).filter((t) => t.tab)
  const step = Math.min(106, 700 / tabs.length)
  const Last = SPREADS[N - 1].Right
  const tipX = 4 + (468 * s.progress) / 100

  return (
    <Nav.Provider value={{ next, close }}>
      <div className="desk">
        <Defs />
        <div className="stage" style={{ transform: `translate(-50%, -50%) scale(${scale})` }}>
          <Dressing />

          <div style={{ position: 'absolute', inset: 0, perspective: 2800, perspectiveOrigin: '50% 35%' }}>
            <div className="book" style={{
              position: 'absolute', left: 120, top: 66, width: 1200, height: 750, transformStyle: 'preserve-3d', transformOrigin: '50% 50%',
              transform: s.opened ? 'translateX(0) translateY(0) scale(1) rotateX(6deg) rotateZ(0deg)' : 'translateX(-300px) translateY(10px) scale(.78) rotateX(16deg) rotateZ(-3deg)',
              transition: 'transform 1.5s cubic-bezier(.65,0,.35,1)',
            }}>
              {/* boards and page edges */}
              <div aria-hidden="true" style={at(596, -10, { width: 618, height: 778, background: 'radial-gradient(ellipse at 60% 30%, #9A6434, #7A4A24 60%, #5C3518)', borderRadius: '2px 4px 4px 2px', transform: 'translateZ(-3px)', boxShadow: '0 34px 60px rgba(0,0,0,.5), 0 8px 16px rgba(0,0,0,.3)' })} />
              <div aria-hidden="true" style={at(-14, -10, { width: 618, height: 778, background: 'radial-gradient(ellipse at 40% 30%,#9A6434,#7A4A24 60%,#5C3518)', borderRadius: '4px 2px 2px 4px', transform: 'translateZ(-3px)', boxShadow: '0 34px 60px rgba(0,0,0,.5)', opacity: s.turned ? 1 : 0, transition: `opacity .3s ${s.turned ? TURN / 2 : 0}s` })} />
              <div aria-hidden="true" className="airmail" style={at(600, 750, { width: 598, height: 8, transform: 'translateZ(-2px)' })} />
              <div aria-hidden="true" className="airmail" style={at(2, 750, { width: 598, height: 8, transform: 'translateZ(-2px)', opacity: s.turned > 1 ? 1 : 0, transition: 'opacity .3s' })} />

              <div inert={s.turned !== N} style={at(600, 0, { width: 600, height: 750, overflow: 'hidden', transform: 'translateZ(-1px)' })}>
                <Near.Provider value={near(N - 1)}><Last n={2 * N - 1} /></Near.Provider>
              </div>

              {SPREADS.map((sp, i) => {
                const Front = i ? SPREADS[i - 1].Right : Cover
                return (
                  <div key={sp.id} style={leaf(i)}>
                    <div className="face" inert={s.turned !== i}>
                      <Near.Provider value={near(i - 1)}><Front n={2 * i - 1} /></Near.Provider>
                      <div aria-hidden="true" style={shade(i, false)} />
                    </div>
                    <div className="face back" inert={s.turned !== i + 1}>
                      <Near.Provider value={near(i)}><sp.Left n={2 * i} /></Near.Provider>
                      <div aria-hidden="true" style={shade(i, true)} />
                    </div>
                  </div>
                )
              })}

              {/* elastic band */}
              <div aria-hidden="true" style={at(1132, -14, {
                width: 15, height: 780, borderRadius: 3,
                background: 'repeating-linear-gradient(0deg,rgba(255,255,255,.06) 0 2px,transparent 2px 4px),linear-gradient(90deg,#060504,#2e2a27 45%,#121110 60%,#060504)',
                boxShadow: '3px 0 6px rgba(0,0,0,.55)',
                transform: 'translateZ(9px) ' + (s.band ? 'translateX(0) rotateZ(0deg)' : 'translateX(150px) translateY(30px) rotateZ(9deg)'),
                opacity: s.band ? 1 : s.opened ? 0 : 0.9,
                transition: `transform .55s cubic-bezier(.3,.7,.2,1), opacity .4s ${s.band ? '0s' : '.3s'}`,
              })} />
            </div>
          </div>

          {/* page corners */}
          {s.opened && s.turned < N && <button className="ear" onClick={next} aria-label="Turn to next page" style={at(1222, 722, { width: 96, height: 96, background: 'linear-gradient(315deg, transparent 50%, #E6DFCF 50%, #FBF8F0 62%, rgba(0,0,0,.12) 64%, transparent 66%)' })} />}
          {s.opened && s.turned > 1 && <button className="ear" onClick={prev} aria-label="Turn to previous page" style={at(122, 722, { width: 96, height: 96, background: 'linear-gradient(45deg, transparent 50%, #E6DFCF 50%, #FBF8F0 62%, rgba(0,0,0,.12) 64%, transparent 66%)' })} />}

          {/* index tabs */}
          <nav aria-label="Journal index" inert={!s.opened} style={at(0, 0, { opacity: s.opened && s.turned ? 1 : 0, transition: `opacity .5s ${s.opened ? '1s' : '0s'}` })}>
            {tabs.map((t, i) => {
              const active = t.n === s.turned
              return (
                <button key={t.id} className="tabbtn mono" onClick={() => goTo(t.n)} aria-current={active || undefined} style={at(active ? 1324 : 1316, 100 + i * step, {
                  width: 40, height: step - 10, padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', writingMode: 'vertical-rl',
                  fontSize: 11, letterSpacing: '.16em', textTransform: 'uppercase', fontWeight: active ? 600 : 400, color: '#1B1A17', background: t.color,
                  borderRadius: '0 6px 6px 0', boxShadow: '2px 2px 4px rgba(0,0,0,.35)',
                })}>{t.tab}</button>
              )
            })}
          </nav>

          {/* loader: a pencil drawing the progress line on the mat */}
          <div style={at(440, 790, { width: 480, height: 90, opacity: s.intro ? 1 : 0, pointerEvents: 'none', transition: 'opacity .4s' })}>
            <div className="hand" style={at(4, -6, { fontSize: 26, color: '#E9E4D6' })}>sharpening pencils…</div>
            <div className="mono" style={{ position: 'absolute', right: 0, top: 4, fontSize: 12, letterSpacing: '.16em', color: '#CFE0D6' }}>LOADING {String(s.progress).padStart(3, '0')}%</div>
            <svg role="img" aria-label={`Loading ${s.progress} percent`} width="480" height="60" style={at(0, 30, { overflow: 'visible' })}>
              <path d="M4 26 C 60 20, 120 34, 200 25 S 360 18, 472 27" fill="none" stroke="rgba(233,228,214,.18)" strokeWidth="2" strokeDasharray="3 7" strokeLinecap="round" />
              <path d="M4 26 C 60 20, 120 34, 200 25 S 360 18, 472 27" pathLength={100} fill="none" stroke="#E9E4D6" strokeWidth="2.6" strokeLinecap="round" strokeDasharray={`${s.progress} 100`} />
            </svg>
            <div aria-hidden="true" style={at(tipX, 49, { display: 'flex', alignItems: 'center', transform: 'rotate(-26deg)', transformOrigin: '0 50%', filter: 'drop-shadow(8px 10px 5px rgba(0,0,0,.45))' })}>
              <div style={{ width: 12, height: 14, background: '#2b2b2b', clipPath: 'polygon(0 50%,100% 0,100% 100%)' }} />
              <div style={{ width: 22, height: 14, background: '#E9C894', clipPath: 'polygon(0 30%,100% 0,100% 100%,0 70%)' }} />
              <div style={{ width: 160, height: 14, background: 'linear-gradient(180deg,#F2C64A,#D9A62A 50%,#EAB93B)' }} />
              <div style={{ width: 14, height: 14, background: 'linear-gradient(180deg,#e2e2e2,#9a9a9a 50%,#cfcfcf)' }} />
              <div style={{ width: 16, height: 14, borderRadius: '0 4px 4px 0', background: '#E58B8B' }} />
            </div>
          </div>

          {/* click the closed journal to open it */}
          {!s.opened && s.band && <>
            <button onClick={open} tabIndex={-1} aria-hidden="true" style={at(430, 150, { width: 470, height: 590, background: 'none', border: 0, cursor: 'pointer' })} />
            <button className="hand" onClick={open} style={at(960, 420, { fontSize: 30, color: '#F2EDE3', background: 'none', border: 0, padding: 0, cursor: 'pointer', transform: 'rotate(-6deg)' })}>{s.intro && s.progress >= 100 ? 'opening…' : 'tap to open →'}</button>
          </>}

          {/* controls */}
          <div inert={!s.opened} style={{ position: 'absolute', left: 0, right: 0, top: 836, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 12, opacity: s.opened ? 1 : 0, transition: 'opacity .5s' }}>
            <button className="ctl" onClick={prev} disabled={s.turned <= 1}>← PREV</button>
            <span className="mono" style={{ minWidth: 190, textAlign: 'center', fontSize: 11, letterSpacing: '.2em', color: '#CFE0D6' }}>{label}</span>
            <button className="ctl" onClick={next} disabled={s.turned >= N}>NEXT →</button>
            <button className="ctl" onClick={close} style={{ marginLeft: 18 }}>CLOSE ↺</button>
          </div>
          <button className="ctl" onClick={replay} style={{ position: 'absolute', right: 24, bottom: 18 }}>REPLAY INTRO</button>
        </div>
      </div>
    </Nav.Provider>
  )
}

// coffee mug, pen and hand grinder lying on the mat
const GRINDER: [number, number, number, number, string, CSSProperties?][] = [
  [0, 9, 118, 92, 'linear-gradient(180deg, #060606, #2a2a2a 30%, #171717 62%, #050505)', { borderRadius: '8px 2px 2px 8px' }],
  [118, 7, 5, 96, '#000'],
  [123, 5, 206, 100, 'repeating-linear-gradient(60deg, rgba(255,255,255,.08) 0 1px, transparent 1px 4px), linear-gradient(180deg, #070707, #303030 30%, #1a1a1a 62%, #060606)'],
  [329, 3, 24, 104, 'repeating-linear-gradient(180deg, rgba(225,225,225,.75) 0 1px, transparent 1px 5px) left/8px 100% no-repeat, linear-gradient(180deg, #050505, #262626 30%, #121212 62%, #030303)'],
  [346, 53, 4, 4, '#E03A2E', { borderRadius: '50%' }],
  [353, 4, 40, 102, 'repeating-linear-gradient(180deg, rgba(255,255,255,.1) 0 1px, transparent 1px 3px), linear-gradient(180deg, #060606, #2c2c2c 30%, #161616 62%, #040404)', { borderRadius: '0 4px 4px 0' }],
  [393, 38, 16, 34, 'linear-gradient(180deg, #080808, #2e2e2e 40%, #0a0a0a)', { borderRadius: '0 5px 5px 0' }],
  [398, -22, 12, 66, 'linear-gradient(90deg, #9a9a9a, #f4f4f4 45%, #8e8e8e)', { borderRadius: 3 }],
  [392, -32, 24, 18, 'linear-gradient(180deg, #f0f0f0, #a8a8a8 55%, #d6d6d6)', { borderRadius: 3 }],
  [180, -28, 216, 11, 'linear-gradient(180deg, #f2f2f2, #a3a3a3 55%, #dcdcdc)', { borderRadius: 5 }],
  [172, -31, 14, 17, 'linear-gradient(180deg, #e6e6e6, #9c9c9c 55%, #cfcfcf)', { borderRadius: 2 }],
  [136, -45, 40, 40, 'radial-gradient(circle at 40% 35%, #3a3a3a, #0c0c0c 70%)', { borderRadius: '50%', border: '3px solid #bdbdbd' }],
]

function Dressing() {
  return (
    <div aria-hidden="true">
      <div style={at(1250, -120, { width: 300, height: 300, borderRadius: '50%', background: 'radial-gradient(circle at 42% 40%, #FBF7EE 0 60%, #E3DACA 72%, #CFC4B0 100%)', boxShadow: '18px 26px 40px rgba(0,0,0,.45)' })}>
        <div style={{ position: 'absolute', inset: 34, borderRadius: '50%', background: 'radial-gradient(circle, #1B0F07 0 52%, #3A2213 70%, #6B4224 86%, #8C5A33 100%)' }} />
      </div>
      <div style={at(-40, 820, { width: 300, height: 16, transform: 'rotate(-20deg)', transformOrigin: 'left center', display: 'flex', filter: 'drop-shadow(6px 10px 6px rgba(0,0,0,.45))' })}>
        <div style={{ width: 240, height: 16, background: 'linear-gradient(180deg,#3a3a3a,#0e0e0e 55%,#1d1d1d)' }} />
        <div style={{ width: 30, height: 16, background: 'linear-gradient(180deg,#e9d9a6,#b8954a 55%,#d8c085)' }} />
        <div style={{ width: 30, height: 16, background: '#111', clipPath: 'polygon(0 0,100% 42%,100% 58%,0 100%)' }} />
      </div>
      <div style={at(15, 345, { width: 430, height: 110, transform: 'rotate(-70deg) scale(1.45)', filter: 'drop-shadow(14px 20px 14px rgba(0,0,0,.5)) drop-shadow(3px 4px 3px rgba(0,0,0,.4))' })}>
        {GRINDER.map(([l, t, w, h, bg, more], i) => <div key={i} style={at(l, t, { width: w, height: h, background: bg, ...more })} />)}
        <div style={at(212, 41, { width: 28, height: 28, borderRadius: '50%', background: 'radial-gradient(circle at 40% 35%, #fafafa, #cfcfcf 60%, #9c9c9c)', boxShadow: '0 1px 1px rgba(0,0,0,.6)', display: 'flex', alignItems: 'center', justifyContent: 'center' })}>
          <div style={{ width: 9, height: 9, borderRadius: '50%', border: '1.5px solid #2a2a2a' }} />
        </div>
      </div>
    </div>
  )
}

// mobile and reduced motion: every page stacked, tabs as a strip
function Stack() {
  const k = useSyncExternalStore(onResize, () => Math.min(1, (innerWidth - 24) / 650))
  useEffect(() => { if (!location.hash) document.getElementById('about')?.scrollIntoView() }, [])
  const nav = {
    next: (from: HTMLElement) => from.closest('section')?.nextElementSibling?.scrollIntoView(),
    close: () => scrollTo(0, 0),
  }
  return (
    <Nav.Provider value={nav}>
      <Defs />
      <nav className="strip" aria-label="Journal index">
        {SPREADS.filter((sp) => sp.tab).map((sp) => <a key={sp.id} href={'#' + sp.id} className="mono" style={{ background: sp.color }}>{sp.tab}</a>)}
      </nav>
      <main className="stack">
        {SPREADS.flatMap((sp, j) => ([sp.Left, sp.Right] as Page[]).map((P, side) => (
          <section key={sp.id + side} id={side ? undefined : sp.id} className="sheet" style={{ width: 650 * k, height: 812 * k }}>
            <div style={{ width: 650, height: 812, transform: `scale(${k})`, transformOrigin: '0 0' }}><P n={2 * j + side} /></div>
          </section>
        )))}
      </main>
    </Nav.Provider>
  )
}
