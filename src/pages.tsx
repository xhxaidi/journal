import type { CSSProperties, ReactNode } from 'react'
import { at, Marbled, Paper, Shot, Turn } from './bits'

const EMAIL = 'xhxaidi@gmail.com'
const GITHUB = 'https://github.com/xhxaidi'
const SITE = 'https://hasanzaidi.com'

// 600×750, front of the first leaf; the only face not authored at 650×812
export function Cover() {
  const fill: CSSProperties = { position: 'absolute', inset: 0 }
  return (
    <div style={{ ...fill, borderRadius: '2px 4px 4px 2px', background: 'radial-gradient(ellipse 80% 60% at 38% 28%, #B9844C 0%, #9A6434 38%, #7A4A24 75%, #5C3518 100%)', boxShadow: 'inset 0 0 44px rgba(45,22,6,.6), inset 0 0 8px rgba(35,16,4,.7)' }}>
      <svg aria-hidden="true" width="600" height="750" style={{ ...fill, opacity: 0.85, mixBlendMode: 'multiply' }}><rect width="600" height="750" filter="url(#leather)" /></svg>
      <svg aria-hidden="true" width="600" height="750" style={{ ...fill, opacity: 0.18, mixBlendMode: 'soft-light' }}><rect width="600" height="750" filter="url(#scuff)" /></svg>
      <div aria-hidden="true" style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 38, background: 'linear-gradient(90deg, #3E2410, #6A4020 45%, rgba(106,64,32,0))' }} />
      <div aria-hidden="true" style={{ position: 'absolute', left: 34, top: 0, bottom: 0, width: 3, background: 'linear-gradient(90deg, rgba(40,20,6,.5), rgba(255,220,170,.16))' }} />
      {/* burnished edge, soft creases, corner wear */}
      <div aria-hidden="true" style={{ ...fill, borderRadius: 'inherit', boxShadow: 'inset 0 0 0 3px rgba(48,24,8,.55), inset 0 0 0 4px rgba(255,214,160,.1)' }} />
      <div aria-hidden="true" style={{ ...fill, background: 'linear-gradient(118deg, transparent 38%, rgba(255,226,180,.08) 41%, transparent 45%), linear-gradient(64deg, transparent 69%, rgba(40,20,5,.14) 72%, transparent 76%), radial-gradient(circle at 100% 100%, rgba(255,214,160,.14), transparent 16%), radial-gradient(circle at 100% 0, rgba(255,214,160,.12), transparent 14%)' }} />
      {/* saddle stitch */}
      <svg aria-hidden="true" width="600" height="750" style={fill}>
        <rect x="52.8" y="20.8" width="528" height="710" rx="2" fill="none" stroke="rgba(30,14,4,.45)" strokeWidth="3" strokeDasharray="8 6" />
        <rect x="52" y="20" width="528" height="710" rx="2" fill="none" stroke="#E3C99A" strokeWidth="1.8" strokeDasharray="8 6" strokeLinecap="round" />
      </svg>
      {/* blind deboss */}
      <div style={{ position: 'absolute', left: 38, right: 0, top: '17%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, color: 'rgba(58,30,10,.66)', textShadow: '0 1px 0 rgba(255,222,176,.3), 0 -1px 0 rgba(28,12,2,.38)' }}>
        <div className="mono" style={{ fontSize: 11, letterSpacing: '.5em' }}>Nº 01</div>
        <div style={{ width: 140, height: 140, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'inset 0 2px 3px rgba(28,12,2,.45), 0 1px 0 rgba(255,222,176,.25)' }}>
          <div style={{ width: 118, height: 118, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'inset 0 1px 2px rgba(28,12,2,.4), 0 1px 0 rgba(255,222,176,.2)', fontStyle: 'italic', fontSize: 60, lineHeight: 1 }}>hz</div>
        </div>
        <div style={{ fontSize: 27, letterSpacing: '.34em', textTransform: 'uppercase', paddingLeft: '.34em' }}>Field Journal</div>
        <div aria-hidden="true" style={{ width: 160, height: 2, boxShadow: 'inset 0 1px 1px rgba(28,12,2,.5), 0 1px 0 rgba(255,222,176,.25)' }} />
        <div className="mono" style={{ fontSize: 11, letterSpacing: '.34em' }}>PROJECTS · 2024 —</div>
      </div>
      {/* stitched name patch, foil stamped */}
      <div style={{ position: 'absolute', left: 38, right: 0, bottom: 70, display: 'flex', justifyContent: 'center' }}>
        <div className="mono" style={{ padding: '12px 26px', borderRadius: 6, background: 'linear-gradient(180deg, #5A3418, #43260E)', boxShadow: '0 2px 3px rgba(20,8,0,.45), inset 0 1px 0 rgba(255,214,160,.14)', outline: '1.5px dashed rgba(227,201,154,.6)', outlineOffset: -5, fontSize: 12, fontWeight: 600, letterSpacing: '.32em', color: '#E2C27E', textShadow: '0 1px 0 rgba(0,0,0,.35)' }}>H. ZAIDI</div>
      </div>
    </div>
  )
}

export function Endpaper() {
  return (
    <Marbled filter="marb" shade="linear-gradient(90deg, rgba(0,0,0,0) 86%, rgba(0,0,0,.35))">
      <div style={at(165, 250, { width: 320, padding: 8, background: '#F3EEE2', borderRadius: 6, boxShadow: '0 3px 8px rgba(0,0,0,.35)', transform: 'rotate(-1.2deg)' })}>
        <div style={{ border: '1.5px solid #2A2620', outline: '1px solid #2A2620', outlineOffset: -6, borderRadius: 4, padding: '22px 26px 20px', textAlign: 'center' }}>
          <div className="mono" style={{ fontSize: 11, letterSpacing: '.3em', color: '#4A453C' }}>PROPERTY OF</div>
          <div className="hand" style={{ fontSize: 50, lineHeight: 1, marginTop: 8 }}>Hasan Zaidi</div>
          <div className="hand" style={{ fontSize: 24, color: '#4A453C' }}>— “Xaidi” —</div>
          <div style={{ height: 1, background: '#2A2620', margin: '14px 0 12px' }} />
          <div className="mono" style={{ fontSize: 10, letterSpacing: '.22em', color: '#4A453C' }}>IF FOUND, PLEASE RETURN TO</div>
          <a href={'mailto:' + EMAIL} className="mono" style={{ display: 'inline-block', marginTop: 6, fontSize: 14 }}>{EMAIL}</a>
          <div className="mono" style={{ marginTop: 14, fontSize: 11, letterSpacing: '.3em', fontWeight: 600 }}>BLOCK 270226</div>
        </div>
      </div>
    </Marbled>
  )
}

export function Opening({ n }: { n: number }) {
  const ink = { fontFamily: 'IBM Plex Mono, monospace', fill: '#C2311F' }
  return (
    <Paper side="right" n={n}>
      <div style={{ position: 'absolute', left: 0, right: 0, top: 230, textAlign: 'center' }}>
        <div className="hand" style={{ fontSize: 34, color: '#3A362F' }}>a field journal of</div>
        <h1 className="marker" style={{ margin: '6px 0 0', fontSize: 76, fontWeight: 400, lineHeight: 0.95, color: '#C2311F', transform: 'rotate(-2deg)' }}>things I<br />built</h1>
        <div className="hand" style={{ marginTop: 22, fontSize: 30, color: '#3A362F' }}>2024 → still going</div>
      </div>
      <svg role="img" aria-label="Postmark: Noida, Aligarh, Delhi NCR, 27 Oct 2026" width="170" height="170" viewBox="0 0 170 170" style={at(400, 530, { transform: 'rotate(-14deg)', opacity: 0.82 })}>
        <defs><path id="ring" d="M85 85 m-62 0 a62 62 0 1 1 124 0 a62 62 0 1 1 -124 0" /></defs>
        <circle cx="85" cy="85" r="78" fill="none" stroke="#C2311F" strokeWidth="3" />
        <circle cx="85" cy="85" r="46" fill="none" stroke="#C2311F" strokeWidth="2" />
        <text {...ink} fontSize="12.5" letterSpacing="3"><textPath href="#ring">NOIDA · ALIGARH · DELHI NCR ·</textPath></text>
        <text {...ink} x="85" y="82" textAnchor="middle" fontSize="15" fontWeight="600">27 OCT</text>
        <text {...ink} x="85" y="100" textAnchor="middle" fontSize="13">2026</text>
      </svg>
      <Turn style={{ right: 48, bottom: 36 }}>turn the page →</Turn>
    </Paper>
  )
}

export function AboutLeft({ n }: { n: number }) {
  return (
    <Paper side="left" n={n}>
      <div className="mono" style={at(388, 84, { fontSize: 11, letterSpacing: '.24em', color: '#3A362F' })}>27 OCT 2026</div>
      <div className="lift" style={at(92, 104, { width: 300, padding: '14px 14px 58px', boxSizing: 'border-box', background: '#FDFBF6', transform: 'rotate(-3deg)', boxShadow: '0 1px 1px rgba(0,0,0,.12), 0 8px 18px rgba(40,30,10,.22)' })}>
        <Shot src="/images/about/look-what-ive-cooked.jpg" alt="Hasan, grinning, holding up two dark wooden boards" style={{ width: 272, height: 340, background: '#E9E4DA' }} />
        <div className="hand" style={{ position: 'absolute', left: 22, bottom: 12, fontSize: 26, color: '#3A362F' }}>look what I've cooked</div>
      </div>
      <div aria-hidden="true" className="tape" style={at(186, 88, { width: 120, height: 34, transform: 'rotate(4deg)' })} />
      <h2 className="marker" style={at(70, 548, { margin: 0, fontSize: 82, fontWeight: 400, lineHeight: 0.9, color: '#C2311F', transform: 'rotate(-2deg)' })}>Hasan<br />Zaidi</h2>
      <div className="hand" style={at(360, 640, { fontSize: 30, color: '#3A362F', transform: 'rotate(-4deg)' })}>← “Xaidi” to most people</div>
      <svg aria-hidden="true" width="300" height="20" viewBox="0 0 300 20" style={at(70, 734)}><path d="M2 12 C 60 4, 120 16, 180 9 S 260 6, 296 11" fill="none" stroke="#C2311F" strokeWidth="3" strokeLinecap="round" /></svg>
    </Paper>
  )
}

// perforated postage-stamp link
function Stamp({ href, bg, fg, kicker, label, sub, rot, mt = 0, children }: { href: string; bg: string; fg: string; kicker: string; label: string; sub?: string; rot: number; mt?: number; children: ReactNode }) {
  return (
    <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="perf lift" style={{ display: 'block', textDecoration: 'none', transform: `rotate(${rot}deg)`, marginTop: mt }}>
      <span style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: 92, height: 112, padding: 10, boxSizing: 'border-box', background: bg, color: fg }}>
        <span className="mono" style={{ fontSize: 9, letterSpacing: '.16em' }}>{kicker}</span>
        {children}
        <span style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <span className="marker" style={{ fontSize: 18 }}>{label}</span>
          {sub && <span className="mono" style={{ fontSize: 7.5, letterSpacing: '.02em' }}>{sub}</span>}
        </span>
      </span>
    </a>
  )
}

export function AboutRight({ n }: { n: number }) {
  const caveat = { fontFamily: 'Caveat, cursive', fontSize: 20, fill: '#1B1A17' }
  const tiny = { fontFamily: 'IBM Plex Mono, monospace', fontSize: 8, letterSpacing: 1.5, fill: '#5A554C' }
  return (
    <Paper side="right" n={n}>
      <div className="hand" style={at(72, 76, { width: 520, fontSize: 26, lineHeight: 1.22 })}>
        <p style={{ margin: '0 0 14px', fontSize: 40, fontWeight: 700 }}>hi —</p>
        <p style={{ margin: '0 0 14px' }}>I'm a CS undergrad at <span className="hl">AMU</span>, and alongside that I'm working through the <span className="hl">IIT Madras BS</span> in Data Science.</p>
        <p style={{ margin: '0 0 14px' }}>I build <span className="hl">full-stack</span> apps.</p>
        <p style={{ margin: '0 0 14px' }}>Full-stack developer, crazy about <span className="hl">great design</span>, and a <span className="hl">coffee connoisseur</span>.</p>
        <p style={{ margin: 0 }}>Now looking for internships and junior roles building AI products.</p>
      </div>
      <div style={at(66, 566, { display: 'flex', gap: 18, alignItems: 'flex-start' })}>
        <Stamp href={GITHUB} bg="#1D3F8F" fg="#F2EDE3" kicker="POSTE · 01" label="GitHub" rot={-4}>
          <svg aria-hidden="true" width="30" height="22" viewBox="0 0 30 22" fill="none" stroke="#F2EDE3" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 4 2 11l7 7M21 4l7 7-7 7M17 2l-4 18" /></svg>
        </Stamp>
        <Stamp href={'mailto:' + EMAIL} bg="#B0291C" fg="#F2EDE3" kicker="PAR AVION" label="Email" rot={2} mt={10}>
          <svg aria-hidden="true" width="30" height="22" viewBox="0 0 30 22" fill="none" stroke="#F2EDE3" strokeWidth="2.2" strokeLinejoin="round"><rect x="2" y="3" width="26" height="16" rx="1" /><path d="m2 4 13 9 13-9" /></svg>
        </Stamp>
        <Stamp href={SITE} bg="#E3A72F" fg="#1B1A17" kicker="WEB · HOME" label="Website" sub="hasanzaidi.com" rot={-1.5}>
          <svg aria-hidden="true" width="26" height="26" viewBox="0 0 26 26" fill="none" stroke="#1B1A17" strokeWidth="2"><circle cx="13" cy="13" r="11" /><path d="M2 13h22 M13 2c-4 4-4 18 0 22 M13 2c4 4 4 18 0 22" /></svg>
        </Stamp>
      </div>
      <svg role="img" aria-label="Hand-drawn map: based between Noida and Aligarh, Delhi NCR" width="210" height="190" viewBox="0 0 210 190" style={at(418, 556)}>
        <rect x="4" y="4" width="202" height="182" fill="#FBF8F0" stroke="#3A362F" strokeWidth="1.2" transform="rotate(1.5 105 95)" />
        <path d="M40 10 C 30 50, 56 70, 44 100 S 56 150, 40 184" fill="none" stroke="#1D3F8F" strokeWidth="2.5" strokeLinecap="round" opacity=".7" />
        <text x="16" y="70" fontFamily="Caveat, cursive" fontSize="14" fill="#1D3F8F" transform="rotate(-80 16 70)">Yamuna</text>
        <path d="M66 58 C 100 80, 120 104, 156 138" fill="none" stroke="#3A362F" strokeWidth="1.6" strokeDasharray="5 5" />
        <circle cx="64" cy="56" r="5" fill="#C2311F" />
        <path d="M150 132 l12 12 M162 132 l-12 12" stroke="#C2311F" strokeWidth="3" strokeLinecap="round" />
        <text {...caveat} x="74" y="46">Noida</text>
        <text {...caveat} x="110" y="168">Aligarh</text>
        <text {...tiny} x="98" y="104" transform="rotate(36 98 104)">~130 KM</text>
        <text {...tiny} x="130" y="24">N ↑</text>
      </svg>
      <div className="hand" style={at(448, 748, { fontSize: 22, color: '#3A362F', transform: 'rotate(-3deg)' })}>based here, mostly</div>
      <Turn style={{ left: 70, bottom: 34 }}>→ projects, turn the page</Turn>
    </Paper>
  )
}

const PASS = [['FROM', 'YOU'], ['TO', 'XAIDI'], ['FLIGHT', 'HZ 2026'], ['GATE', 'INBOX'], ['SEAT', 'ANY'], ['BOARDING', 'NOW']]

export function ContactLeft({ n }: { n: number }) {
  return (
    <Paper side="left" n={n}>
      <div className="hand" style={at(64, 92, { fontSize: 32, color: '#3A362F' })}>last page. so —</div>
      <h2 className="marker" style={at(60, 132, { margin: 0, fontSize: 64, fontWeight: 400, lineHeight: 0.95, color: '#C2311F', transform: 'rotate(-2deg)' })}>let's build<br />something.</h2>
      {/* boarding pass */}
      <div className="lift" style={at(40, 330, { width: 570, height: 262, display: 'flex', background: '#FBF9F3', transform: 'rotate(-1.5deg)', boxShadow: '0 1px 1px rgba(0,0,0,.12), 0 10px 22px rgba(40,30,10,.22)' })}>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <div className="mono" style={{ height: 38, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 18px', background: '#1D3F8F', color: '#F2EDE3', fontSize: 11, letterSpacing: '.24em', fontWeight: 600 }}><span>BOARDING PASS</span><span>PAR AVION ✈</span></div>
          <div style={{ flex: 1, padding: '14px 18px', display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: '12px 16px' }}>
            {PASS.map(([k, v]) => <div key={k}><div className="lbl">{k}</div><div className="val">{v}</div></div>)}
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', padding: '0 18px 14px' }}>
            <div aria-hidden="true" style={{ width: 220, height: 34, background: 'repeating-linear-gradient(90deg, #1B1A17 0 2px, transparent 2px 4px, #1B1A17 4px 5px, transparent 5px 8px, #1B1A17 8px 11px, transparent 11px 12px)' }} />
            <a href={'mailto:' + EMAIL} className="mono" style={{ padding: '10px 14px', background: '#C2311F', color: '#FFFFFF', fontSize: 12, fontWeight: 600, letterSpacing: '.2em', textDecoration: 'none' }}>CHECK IN →</a>
          </div>
        </div>
        <div style={{ width: 150, borderLeft: '2px dashed #B5AA92', padding: '52px 14px 14px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: 10 }}>
          <div><div className="lbl">PASSENGER</div><div className="mono" style={{ fontSize: 13, fontWeight: 600 }}>H. ZAIDI</div></div>
          <div><div className="lbl">CONTACT</div><div className="mono" style={{ fontSize: 11, wordBreak: 'break-all' }}>{EMAIL}</div></div>
          <div><div className="lbl">BASE</div><div className="mono" style={{ fontSize: 12, fontWeight: 600 }}>DEL / NCR</div></div>
        </div>
      </div>
      <div className="hand" style={at(70, 640, { width: 480, fontSize: 26, lineHeight: 1.2 })}>Internships, junior roles, a weird side project: if it ships, I'm in. Email is fastest.</div>
      <div className="mono" style={{ position: 'absolute', right: 56, bottom: 36, fontSize: 11, letterSpacing: '.3em', color: '#5A554C' }}>— FIN —</div>
    </Paper>
  )
}

const card: CSSProperties = { width: 200, height: 250, padding: 18, boxSizing: 'border-box', textDecoration: 'none', boxShadow: '0 6px 12px rgba(0,0,0,.35)' }
const RECIPE = ['15g coffee, medium-fine', '250g water @ 94°C', '', '0:00 bloom 45g, swirl', '0:45 pour to 150g', '1:15 pour to 250g', 'gentle swirl, let it drain', '', 'done by ~3:00 ✓']

// inside back cover: link cards in the pocket, a V60 napkin
export function BackCover() {
  return (
    <Marbled filter="marb2" shade="linear-gradient(90deg, rgba(0,0,0,.35), rgba(0,0,0,0) 12%)">
      <a href={GITHUB} target="_blank" rel="noreferrer" className="lift" style={at(90, 232, { ...card, background: '#F2EDE3', transform: 'rotate(-7deg)' })}>
        <span className="lbl" style={{ display: 'block' }}>01 · CODE</span>
        <span className="marker" style={{ display: 'block', marginTop: 8, fontSize: 30, color: '#1D3F8F' }}>GitHub</span>
        <span className="mono" style={{ display: 'block', marginTop: 6, fontSize: 12 }}>/xhxaidi</span>
      </a>
      <a href={SITE} target="_blank" rel="noreferrer" className="lift" style={at(236, 204, { ...card, background: '#F7E36A', transform: 'rotate(2deg)' })}>
        <span className="lbl" style={{ display: 'block', color: '#3A362F' }}>02 · HOME</span>
        <span className="marker" style={{ display: 'block', marginTop: 8, fontSize: 30, color: '#1B1A17' }}>this site</span>
        <span className="mono" style={{ display: 'block', marginTop: 6, fontSize: 12 }}>hasanzaidi.com</span>
      </a>
      {/* the pocket */}
      <div style={{ position: 'absolute', left: 30, right: 30, top: 400, bottom: 30, background: 'linear-gradient(180deg, #2A2925, #1E1D1A)', borderTop: '3px solid #3A3833', boxShadow: '0 -8px 16px rgba(0,0,0,.35)' }}>
        <div aria-hidden="true" style={{ position: 'absolute', left: 0, right: 0, top: 10, borderTop: '1.5px dashed rgba(242,237,227,.35)' }} />
        <div className="hand" style={at(36, 54, { fontSize: 30, color: '#E9E4D6' })}>receipts, tickets, links.</div>
        <div className="mono" style={{ position: 'absolute', left: 36, bottom: 30, fontSize: 10, letterSpacing: '.26em', color: '#B9B3A5' }}>NOIDA · ALIGARH · 2026</div>
        <Turn close style={{ right: 36, bottom: 22, color: '#F2EDE3' }}>close the journal ↺</Turn>
      </div>
      {/* napkin, tucked in front of the pocket */}
      <div className="lift" style={at(340, 292, { width: 236, height: 318, transform: 'rotate(6deg)', filter: 'drop-shadow(0 6px 8px rgba(0,0,0,.35))' })}>
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, transparent 49.6%, rgba(0,0,0,.06) 50%, transparent 50.4%), linear-gradient(0deg, transparent 49.6%, rgba(0,0,0,.05) 50%, transparent 50.4%), radial-gradient(circle, rgba(0,0,0,.06) 1px, transparent 1.6px) 0 0/9px 9px, #FBFAF5', clipPath: 'polygon(2% 1%, 20% 0, 40% 1.5%, 60% .3%, 80% 1.6%, 98% 0, 100% 20%, 98.6% 40%, 100% 60%, 98.8% 80%, 100% 99%, 80% 98.4%, 60% 100%, 40% 98.6%, 20% 100%, 0 99%, 1.4% 80%, 0 60%, 1.2% 40%, 0 20%)' }} />
        <svg aria-hidden="true" width="236" height="318" style={{ position: 'absolute', inset: 0, mixBlendMode: 'multiply' }}>
          <g filter="url(#stain)">
            <circle cx="150" cy="226" r="74" fill="rgba(160,105,50,.07)" />
            <circle cx="150" cy="226" r="74" fill="none" stroke="rgba(140,85,35,.5)" strokeWidth="3.5" strokeDasharray="180 14 90 8 160" />
            <circle cx="151" cy="227" r="70" fill="none" stroke="rgba(140,85,35,.18)" strokeWidth="7" />
          </g>
        </svg>
        <div className="hand" style={{ position: 'absolute', left: 24, top: 20, right: 18, fontSize: 21, lineHeight: 1.18, color: '#2B3A6B' }}>
          <div style={{ fontSize: 27, fontWeight: 700, textDecoration: 'underline', textDecorationThickness: 1.5, textUnderlineOffset: 4, marginBottom: 6 }}>V60 · 1:16</div>
          {RECIPE.map((line, i) => (line ? <div key={i}>{line}</div> : <div key={i} style={{ height: 6 }} />))}
        </div>
      </div>
    </Marbled>
  )
}
