import type { CSSProperties, ReactNode } from 'react'
import { at, hl, Paper, Shot, Turn, type Project } from '../bits'

const INK = '#140B04' // Sombra's near-black
const EMBER = '#E8601A' // the black hole's ring
const LIVE = 'https://sombra.hasanzaidi.com'
const CODE = 'https://github.com/xhxaidi/sombra-landing-page'
const IMG = '/images/sombra/'

// black paper photo corners holding a print in place
const CORNERS: [CSSProperties, string][] = [
  [{ left: -5, top: -5 }, 'polygon(0 0,100% 0,0 100%)'],
  [{ right: -5, top: -5 }, 'polygon(0 0,100% 0,100% 100%)'],
  [{ left: -5, bottom: -5 }, 'polygon(0 0,0 100%,100% 100%)'],
  [{ right: -5, bottom: -5 }, 'polygon(100% 0,100% 100%,0 100%)'],
]

function Left({ n }: { n: number }) {
  return (
    <Paper side="left" n={n}>
      <div className="mono" style={{ position: 'absolute', right: 64, top: 38, fontSize: 11, letterSpacing: '.24em', color: '#3A362F' }}>OCT 2026 · REDESIGN</div>
      <div className="hand" style={at(64, 70, { fontSize: 26, color: '#3A362F' })}>my own redesign of a real product —</div>
      <h2 className="marker" style={at(58, 98, { margin: 0, fontSize: 84, fontWeight: 400, lineHeight: 1, color: INK, transform: 'rotate(-2deg)' })}>Sombra</h2>
      <span className="rubber" style={at(410, 118, { fontSize: 15, padding: '7px 12px', borderColor: EMBER, color: EMBER, outline: `1.5px solid ${EMBER}`, outlineOffset: 3, transform: 'rotate(8deg)' })}>Redesign</span>
      <div style={at(64, 206, { fontSize: 28, fontStyle: 'italic' })}>Trade in the <span style={{ background: INK, color: '#F2EDE3', padding: '0 .22em' }}>shadow.</span></div>
      <div className="mono" style={at(64, 252, { fontSize: 10, letterSpacing: '.2em', color: '#5A554C' })}>PRODUCT BY BONSOL LABS · REDESIGN + BUILD BY ME</div>

      {/* the hero visual, as a print */}
      <div className="lift" style={at(64, 290, { width: 320, padding: 10, boxSizing: 'border-box', background: '#FDFBF6', transform: 'rotate(-2deg)', boxShadow: '0 10px 22px rgba(40,30,10,.25)' })}>
        <Shot src={IMG + 'ascii-blackhole.gif'} alt="ASCII black hole: an orange ring of characters swirling around a dark centre" style={{ width: 300, height: 274, background: '#030303' }} />
        {CORNERS.map(([pos, clip], i) => <span key={i} aria-hidden="true" style={{ position: 'absolute', width: 28, height: 28, background: '#1B1A17', clipPath: clip, ...pos }} />)}
      </div>
      <div className="hand" style={at(412, 300, { width: 200, fontSize: 21, lineHeight: 1.1 })}>not a 3D model. it's text: each cell picks a character by brightness</div>
      <svg aria-hidden="true" width="60" height="70" style={at(372, 320, { overflow: 'visible' })}><path d="M40 6 C 22 14, 12 30, 10 52 M10 52 l-6 -10 M10 52 l9 -7" fill="none" stroke="#1B1A17" strokeWidth="1.8" strokeLinecap="round" /></svg>
      <div className="mono" style={at(414, 392, { padding: '5px 8px', border: '1.5px solid #1B1A17', background: '#FBF8F0', fontSize: 13, letterSpacing: '.08em', whiteSpace: 'pre', transform: 'rotate(-1.5deg)' })}>{' .,:;-~=+*xoO#%@'}</div>
      <div className="hand" style={at(412, 446, { width: 205, fontSize: 21, lineHeight: 1.1 })}>“nothing escapes to the public chain” → so: <span style={{ ...hl(EMBER), whiteSpace: 'nowrap' }}>a black hole</span></div>

      {/* the idea, on a ruled index card */}
      <div className="lift" style={at(64, 598, {
        width: 360, height: 176, boxSizing: 'border-box', padding: '8px 16px 0 46px', transform: 'rotate(1deg)', boxShadow: '0 6px 14px rgba(40,30,10,.2)',
        background: 'linear-gradient(90deg, transparent 34px, rgba(194,49,31,.45) 34px 36px, transparent 36px), repeating-linear-gradient(180deg, transparent 0 27px, rgba(29,63,143,.2) 27px 28px) 0 8px / 100% 100% no-repeat, #FCFBF7',
      })}>
        <div className="mono" style={{ height: 28, display: 'flex', alignItems: 'center', fontSize: 10, letterSpacing: '.22em', color: '#3A362F' }}>THE IDEA</div>
        <div className="hand" style={{ fontSize: 20, lineHeight: '28px' }}>Give every privacy claim a picture. Black hole: nothing escapes. Sealed cells: balances only you open. Quantum fridge: why post-quantum.</div>
      </div>

      {/* cell foam, through a lens */}
      <div className="lift" style={at(452, 560, { width: 150, height: 150, borderRadius: '50%', overflow: 'hidden', border: '6px solid #FDFBF6', boxShadow: '0 8px 16px rgba(40,30,10,.3)' })}>
        <Shot src={IMG + 'blobs.gif'} alt="WebGL cell foam: glowing bubbles drifting, swelling and shrinking" style={{ width: 150, height: 150, background: '#030303' }} />
      </div>
      <div className="hand" style={at(450, 722, { width: 170, fontSize: 20, lineHeight: 1.05, transform: 'rotate(-3deg)' })}>sealed cells: one WebGL shader</div>
    </Paper>
  )
}

const BUILD: ReactNode[] = [
  'Next.js 16 + React 19, one component per section',
  'the black hole is plain JS and text, no WebGL',
  'cell foam: a raw WebGL fragment shader',
  'quantum fridge in three.js: black solids, glowing edges',
  'a wallet you can actually click through',
  <>every visual also lives alone at <span className="mono" style={{ fontSize: 13 }}>/boards</span></>,
]

const RECEIPT = [['KEY EXCHANGE', 'ML-KEM-768'], ['ENCRYPTION', 'CHACHA20-POLY1305'], ['PROOFS', 'RISC0 STARK'], ['PROOF TIME', '~2 S'], ['SETTLES ON', 'SOLANA L1'], ['BRIDGES', '0'], ['WRAPPED TOKENS', '0']]
const TEAR = 'polygon(0 0,100% 0,' + Array.from({ length: 21 }, (_, i) => `${100 - i * 5}% ${i % 2 ? '100%' : 'calc(100% - 7px)'}`).join(',') + ')'
const rule: CSSProperties = { borderTop: '1.5px dashed #9C8F74', margin: '9px 0' }

// a link as an access card (dark) or a plain card (light)
function Pass({ href, kicker, title, sub, dark, style }: { href: string; kicker: string; title: string; sub: string; dark?: boolean; style: CSSProperties }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="mono lift" style={{
      position: 'absolute', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxSizing: 'border-box', padding: '14px 16px', textDecoration: 'none', borderRadius: 12,
      background: dark ? INK : '#FBF8F0', color: dark ? '#F2EDE3' : INK, border: dark ? 'none' : `1.5px solid ${INK}`, boxShadow: '0 8px 16px rgba(40,30,10,.28)', ...style,
    }}>
      <span style={{ fontSize: 9, letterSpacing: '.22em' }}>{kicker}</span>
      {dark && <span aria-hidden="true" style={{ position: 'absolute', right: 16, top: 34, width: 38, height: 30, borderRadius: 5, background: 'linear-gradient(135deg, #F3D2B3, #C9A27A)', boxShadow: 'inset 0 0 0 1px rgba(20,11,4,.35)' }} />}
      <span style={{ fontSize: 15, fontWeight: 600, letterSpacing: '.12em' }}>{title}</span>
      <span style={{ fontSize: 9.5, letterSpacing: '.06em', color: dark ? '#F3D2B3' : '#5A554C' }}>{sub}</span>
    </a>
  )
}

function Right({ n }: { n: number }) {
  return (
    <Paper side="right" n={n}>
      <div className="mono" style={at(64, 66, { fontSize: 11, letterSpacing: '.12em', color: '#3A362F' })}>[ 01_BUILD ]</div>
      <ul className="hand" style={at(64, 94, { width: 350, margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 6, fontSize: 20, lineHeight: 1.1 })}>
        {BUILD.map((item, i) => (
          <li key={i} style={{ display: 'flex', gap: 10 }}>
            <svg aria-hidden="true" width="18" height="18" viewBox="0 0 18 18" style={{ flex: 'none', marginTop: 2 }}><rect x="1" y="1" width="16" height="16" fill="none" stroke="#1B1A17" strokeWidth="1.4" /><path d="M4 9.5 l3.5 3.5 L16.5 1.5" fill="none" stroke={EMBER} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
            <span>{item}</span>
          </li>
        ))}
      </ul>

      {/* the wallet prototype, clipped in */}
      <div className="lift" style={at(452, 92, { width: 150, padding: 6, boxSizing: 'border-box', background: '#1B1A17', borderRadius: 22, transform: 'rotate(3deg)', boxShadow: '0 12px 24px rgba(40,30,10,.3)' })}>
        <Shot src={IMG + 'wallet-ui.gif'} alt="Wallet prototype: claiming devnet tokens, shielding 250 USDC while a STARK proof bar fills, then a Shielded toast" style={{ width: 138, height: 299, borderRadius: 17, background: '#030303' }} />
      </div>
      <svg aria-hidden="true" width="28" height="70" style={at(560, 64, { transform: 'rotate(10deg)' })}><path d="M8 62 V14 a6 6 0 0 1 12 0 V54 a4 4 0 0 1 -8 0 V22" fill="none" stroke="#8E8A82" strokeWidth="2.6" strokeLinecap="round" /></svg>
      <div className="hand" style={at(440, 418, { width: 180, fontSize: 19, lineHeight: 1.1 })}>the wallet: claim devnet tokens, shield 250 USDC, watch the STARK bar fill</div>

      {/* what the product does, as a receipt */}
      <div className="mono" style={at(64, 352, { fontSize: 11, letterSpacing: '.12em', color: '#3A362F' })}>[ 02_WHAT_IT_DOES ]</div>
      <div className="lift" style={at(64, 380, { width: 230, transform: 'rotate(-1deg)', filter: 'drop-shadow(0 6px 8px rgba(40,30,10,.22))' })}>
        <div className="mono" style={{ padding: '16px 16px 26px', background: '#FBFAF6', clipPath: TEAR, fontSize: 10.5, color: '#2A2620' }}>
          <div style={{ textAlign: 'center', fontSize: 14, fontWeight: 600, letterSpacing: '.3em' }}>SOMBRA</div>
          <div style={{ textAlign: 'center', fontSize: 9, letterSpacing: '.18em', marginTop: 2 }}>PRIVACY RECEIPT · DEVNET</div>
          <div style={rule} />
          {RECEIPT.map(([k, v]) => <div key={k} style={{ display: 'flex', justifyContent: 'space-between', lineHeight: 1.6 }}><span>{k}</span><span>{v}</span></div>)}
          <div style={rule} />
          <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 600, fontSize: 12 }}><span>LEAKED TO CHAIN</span><span>0.00</span></div>
          <div style={{ textAlign: 'center', fontSize: 9, letterSpacing: '.2em', margin: '10px 0 8px' }}>* NOTHING ESCAPES *</div>
          <div aria-hidden="true" style={{ height: 26, background: 'repeating-linear-gradient(90deg, #2A2620 0 2px, transparent 2px 4px, #2A2620 4px 5px, transparent 5px 8px, #2A2620 8px 11px, transparent 11px 12px)' }} />
        </div>
      </div>

      {/* the quantum fridge, a tall print */}
      <div className="lift" style={at(306, 380, { width: 126, padding: '8px 8px 30px', boxSizing: 'border-box', background: '#FDFBF6', transform: 'rotate(4deg)', boxShadow: '0 8px 16px rgba(40,30,10,.25)' })}>
        <Shot src={IMG + 'quantum-computer.gif'} alt="three.js wireframe of a quantum-computer dilution fridge, splitting into stages and rejoining as it turns" style={{ width: 110, height: 183, background: '#030303' }} />
        <div className="hand" style={{ position: 'absolute', left: 8, bottom: 4, fontSize: 17, color: '#3A362F' }}>why post-quantum</div>
      </div>
      <div aria-hidden="true" className="tape" style={at(338, 370, { width: 64, height: 20, transform: 'rotate(-4deg)' })} />

      <Pass dark href={LIVE} kicker="SHIELDED ACCESS · LIVE" title="VISIT LIVE ↗" sub="sombra.hasanzaidi.com" style={{ left: 384, top: 592, width: 220, height: 112, transform: 'rotate(-3deg)' }} />
      <Pass href={CODE} kicker="SOURCE · GITHUB" title="VIEW CODE ↗" sub="xhxaidi/sombra-landing-page" style={{ left: 398, top: 716, width: 210, height: 78, padding: '11px 16px', transform: 'rotate(2deg)' }} />
      <Turn style={{ left: 64, bottom: 30, fontSize: 26 }}>turn the page →</Turn>
    </Paper>
  )
}

export default { id: 'sombra', tab: 'Sombra', color: '#9D998F', Left, Right } satisfies Project
