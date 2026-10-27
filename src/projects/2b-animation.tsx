import type { CSSProperties } from 'react'
import { at, Paper, Shot, Turn, type Project } from '../bits'

const INK = '#2B2724'
const PURPLE = '#7B4FD8' // the blade's lightning
const LIVE = 'https://2b.hasanzaidi.com/'
const CODE = 'https://github.com/xhxaidi/2B-animation'
const IMG = '/images/2b-animation/'

// a band of 35mm sprocket holes
const sprockets: CSSProperties = { height: 24, background: 'repeating-linear-gradient(90deg, transparent 0 7px, #EDE6D6 7px 17px, transparent 17px 24px) 0 6px / 100% 12px no-repeat' }

const XSHEET = [
  ['01', 'three machines close in', 'machine footsteps'],
  ['02', 'she draws the katana', 'sword draw'],
  ['03', 'backflip, cut the first one', 'whoosh, crackle'],
  ['04', 'spin slash through the other two', 'clangs, booms'],
  ['05', 'sheathe, rest', 'wind bed'],
  ['06', 'loop, about every 16 s', 'pad + arpeggio'],
]
const cols = '44px 1fr 170px'

function Left({ n }: { n: number }) {
  return (
    <Paper side="left" n={n}>
      <div className="mono" style={{ position: 'absolute', right: 64, top: 38, fontSize: 11, letterSpacing: '.24em', color: '#3A362F' }}>OCT 2026 · FAN ART</div>
      <div className="hand" style={at(64, 70, { fontSize: 22, color: '#3A362F' })}>
        part 2 of 3: Pixel Court → <span style={{ padding: '0 6px', border: `1.8px solid ${PURPLE}`, borderRadius: '50%', color: PURPLE }}>2B</span> → Emberhollow
      </div>
      <h2 className="marker" style={at(58, 104, { margin: 0, fontSize: 68, fontWeight: 400, lineHeight: 1, color: INK, transform: 'rotate(-2deg)' })}>Pixel Dance</h2>
      <div className="marker" style={at(512, 96, { fontSize: 40, color: PURPLE, transform: 'rotate(8deg)' })}>(2B)</div>
      <div className="hand" style={at(64, 182, { width: 530, fontSize: 23, lineHeight: 1.12 })}>real-time pixel-art 3D in three.js. She draws, backflips through one machine, spins through two more and sheathes again.</div>

      {/* the whole move, on a strip of film */}
      <div className="lift" style={at(52, 252, { width: 546, background: '#141210', transform: 'rotate(-1.5deg)', boxShadow: '0 12px 24px rgba(40,30,10,.3)' })}>
        <div aria-hidden="true" style={sprockets} />
        <Shot src={IMG + 'fight-wide.gif'} alt="2B's whole sword move in the default isometric view: the draw, the backflip slash through the first machine, the spinning slash through the other two, smoke blasts, the sheathe" style={{ width: 500, height: 312, margin: '0 23px', background: '#000' }} />
        <div aria-hidden="true" style={{ ...sprockets, height: 34, backgroundPosition: '0 17px', position: 'relative' }}>
          <span className="mono" style={{ position: 'absolute', right: 28, top: 3, fontSize: 8, letterSpacing: '.2em', color: '#E8A23A' }}>▸ 2B · FIGHT · 20 FPS · SIM 7.1–14.2 S</span>
        </div>
      </div>

      {/* exposure sheet: the beats of the choreography */}
      <div style={at(64, 636, { width: 522, border: `1.5px solid ${INK}`, background: 'rgba(251,248,240,.6)' })}>
        <div className="mono" style={{ display: 'grid', gridTemplateColumns: cols, fontSize: 9, letterSpacing: '.2em', background: 'rgba(43,39,36,.08)', borderBottom: `1.5px solid ${INK}` }}>
          {['BEAT', 'ACTION · X-SHEET', 'SFX'].map((h) => <span key={h} style={{ padding: '5px 8px', borderLeft: h === 'BEAT' ? 'none' : `1px solid rgba(43,39,36,.35)` }}>{h}</span>)}
        </div>
        {XSHEET.map((row) => (
          <div key={row[0]} style={{ display: 'grid', gridTemplateColumns: cols, borderTop: '1px solid rgba(43,39,36,.2)', height: 21, alignItems: 'center' }}>
            {row.map((cell, i) => <span key={i} className={i ? 'hand' : 'mono'} style={{ padding: '0 8px', fontSize: i ? 17 : 10, lineHeight: '21px', color: i === 2 ? PURPLE : INK, borderLeft: i ? '1px solid rgba(43,39,36,.35)' : 'none', whiteSpace: 'nowrap' }}>{cell}</span>)}
          </div>
        ))}
      </div>
    </Paper>
  )
}

// backflip pose sketch: stick figures along the arc, one full turn backwards
const POSES = Array.from({ length: 6 }, (_, i) => {
  const t = i / 5
  return { x: 26 + t * 144, y: 168 - Math.sin(Math.PI * t) * 104, r: -360 * t }
})

// the 4×4 Bayer matrix behind the dither, shown at its 9 levels
const BAYER = [0, 8, 2, 10, 12, 4, 14, 6, 3, 11, 1, 9, 15, 7, 13, 5]
const SWATCHES = Array.from({ length: 9 }, (_, k) => BAYER.map((b) => (b + 0.5) / 16 < k / 8))

const PARTS = [
  ['A1', 'body: lathe profiles, jointed fingers'],
  ['A2', 'hair: Verlet strands'],
  ['A3', 'skirt: Verlet cloth, flares on the spin'],
  ['A4', 'feet: 2-bone IK, planted feet stay put'],
  ['B1', '3 machines that split along the cut'],
  ['B2', '16,000 grass blades, shader wind'],
  ['C1', 'sound: Web Audio, zero audio files'],
]

function Right({ n }: { n: number }) {
  const bracket = { position: 'absolute', width: 18, height: 18, borderColor: 'rgba(255,255,255,.8)', borderStyle: 'solid', borderWidth: 0 } as const
  return (
    <Paper side="right" n={n}>
      {/* the robot-cam take, through a viewfinder */}
      <div className="lift" style={at(64, 90, { width: 350, padding: 10, boxSizing: 'border-box', background: '#141210', borderRadius: 6, transform: 'rotate(1deg)', boxShadow: '0 12px 24px rgba(40,30,10,.3)' })}>
        <Shot src={IMG + 'fight-robot-cam.gif'} alt="The cinematic robot-cam take: machines closing in, the backflip cut with lightning, the spin slash in slow motion, a close-up, the pull-out" style={{ width: 330, height: 206, background: '#000' }} />
        <span aria-hidden="true" style={{ ...bracket, left: 20, top: 20, borderLeftWidth: 2, borderTopWidth: 2 }} />
        <span aria-hidden="true" style={{ ...bracket, right: 20, top: 20, borderRightWidth: 2, borderTopWidth: 2 }} />
        <span aria-hidden="true" style={{ ...bracket, left: 20, bottom: 20, borderLeftWidth: 2, borderBottomWidth: 2 }} />
        <span aria-hidden="true" style={{ ...bracket, right: 20, bottom: 20, borderRightWidth: 2, borderBottomWidth: 2 }} />
        <span className="mono" style={{ position: 'absolute', left: 44, top: 22, fontSize: 9, letterSpacing: '.2em', color: '#FFFFFF' }}><span style={{ color: '#FF3B30' }}>●</span> REC</span>
        <span className="mono" style={{ position: 'absolute', right: 44, bottom: 22, fontSize: 9, letterSpacing: '.2em', color: '#FFFFFF' }}>ROBOT CAM · C</span>
      </div>

      <svg role="img" aria-label="Pose sketch: six stick figures along an arc, turning one full backflip" width="200" height="200" viewBox="0 0 200 200" style={at(424, 74)}>
        <path d={'M' + POSES.map((p) => `${p.x} ${p.y}`).join(' L')} fill="none" stroke={PURPLE} strokeWidth="1.4" strokeDasharray="4 5" />
        <line x1="6" y1="192" x2="194" y2="192" stroke="#5A554C" strokeWidth="1.2" />
        {POSES.map((p, i) => (
          <g key={i} transform={`translate(${p.x} ${p.y}) rotate(${p.r})`} stroke={INK} strokeWidth="1.6" strokeLinecap="round" fill="none" opacity={0.45 + i * 0.11}>
            <circle cx="0" cy="-30" r="6" />
            <path d="M0 -24 V0 M0 0 L-7 22 M0 0 L7 22 M0 -18 L-12 -6 M0 -18 L12 -8" />
          </g>
        ))}
      </svg>
      <div className="hand" style={at(430, 276, { width: 190, fontSize: 19, lineHeight: 1.05 })}>the backflip: one full turn back, feet land in IK</div>

      <div className="mono" style={at(64, 340, { fontSize: 11, letterSpacing: '.22em', color: '#3A362F' })}>PARTS · HOW SHE'S BUILT</div>
      <div style={at(64, 364, { width: 340, display: 'flex', flexDirection: 'column', gap: 6 })}>
        {PARTS.map(([code, text]) => (
          <div key={code} style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
            <span className="mono" style={{ width: 30, flex: 'none', textAlign: 'center', fontSize: 10, fontWeight: 600, padding: '2px 0', border: `1.5px solid ${INK}`, borderRadius: 10 }}>{code}</span>
            <span className="hand" style={{ fontSize: 19, lineHeight: 1.05 }}>{text}</span>
          </div>
        ))}
      </div>

      {/* the look, as a paint chip */}
      <div className="lift" style={at(424, 340, { width: 196, padding: '12px 12px 10px', boxSizing: 'border-box', background: '#FBF8F0', transform: 'rotate(-2deg)', boxShadow: '0 6px 12px rgba(40,30,10,.2)' })}>
        <svg role="img" aria-label="4 by 4 Bayer dither at its 9 levels, dark to light" width="172" height="20" viewBox="0 0 172 20" shapeRendering="crispEdges">
          {SWATCHES.map((lit, k) => lit.map((on, p) => <rect key={k * 16 + p} x={k * 19 + (p % 4) * 4.5} y={Math.floor(p / 4) * 5} width="4.5" height="5" fill={on ? '#E9E1CF' : INK} />))}
        </svg>
        <div className="mono" style={{ marginTop: 8, fontSize: 8.5, letterSpacing: '.14em', color: '#5A554C' }}>ACES → 4×4 BAYER → 9 LEVELS</div>
        <div className="hand" style={{ fontSize: 18, lineHeight: 1.05 }}>the whole look, in one swatch</div>
      </div>

      {/* source: a film canister */}
      <a href={CODE} target="_blank" rel="noreferrer" className="lift" style={at(64, 584, {
        width: 150, height: 150, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', color: INK,
        background: 'radial-gradient(circle at 35% 30%, #EFEFEC, #A9A8A2 55%, #77766F)', boxShadow: 'inset 0 0 0 6px rgba(0,0,0,.08), inset 0 0 0 12px rgba(255,255,255,.25), 0 8px 16px rgba(40,30,10,.3)',
      })}>
        <span className="mono" style={{ width: 112, height: 112, borderRadius: '50%', background: '#F4EFE4', border: `2px solid ${INK}`, boxSizing: 'border-box', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 3 }}>
          <span style={{ fontSize: 7.5, letterSpacing: '.2em' }}>REEL 02 · SOURCE</span>
          <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: '.08em' }}>VIEW CODE ↗</span>
          <span style={{ fontSize: 8, letterSpacing: '.04em', lineHeight: 1.3, color: '#5A554C', textAlign: 'center' }}>xhxaidi/<br />2B-animation</span>
        </span>
      </a>
      <div className="hand" style={at(236, 596, { width: 160, fontSize: 18, lineHeight: 1.05, color: '#3A362F' })}>it runs live: drag to orbit, C for the robot cam, R records a loop →</div>

      {/* live: a clapperboard */}
      <a href={LIVE} target="_blank" rel="noreferrer" className="lift" style={at(410, 482, { width: 210, height: 150, textDecoration: 'none', transform: 'rotate(-3deg)', filter: 'drop-shadow(0 8px 10px rgba(40,30,10,.3))' })}>
        <span aria-hidden="true" style={{ position: 'absolute', left: 0, top: 6, width: 210, height: 22, background: 'repeating-linear-gradient(-45deg, #1B1A17 0 14px, #F2EDE3 14px 28px)', transform: 'rotate(-9deg)', transformOrigin: '0 100%' }} />
        <span aria-hidden="true" style={{ position: 'absolute', left: 0, top: 28, width: 210, height: 18, background: 'repeating-linear-gradient(45deg, #1B1A17 0 14px, #F2EDE3 14px 28px)' }} />
        <span style={{ position: 'absolute', left: 0, top: 46, width: 210, height: 104, boxSizing: 'border-box', padding: '8px 12px', background: INK, borderRadius: '0 0 6px 6px', color: '#F2EDE3', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <span style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', borderBottom: '1px solid rgba(242,237,227,.35)' }}><span className="mono" style={{ fontSize: 7.5, letterSpacing: '.2em' }}>PROD.</span><span className="hand" style={{ fontSize: 19 }}>Pixel Dance (2B)</span></span>
          <span style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', borderBottom: '1px solid rgba(242,237,227,.35)' }}><span className="mono" style={{ fontSize: 7.5, letterSpacing: '.2em' }}>SCENE 02 · TAKE</span><span className="mono" style={{ fontSize: 13, fontWeight: 600, letterSpacing: '.1em' }}>LIVE ↗</span></span>
          <span className="mono" style={{ fontSize: 9.5, letterSpacing: '.06em', color: '#D9CCF5' }}>2b.hasanzaidi.com</span>
        </span>
      </a>

      <div className="mono" style={at(236, 700, { width: 360, fontSize: 8.5, letterSpacing: '.14em', lineHeight: 1.5, color: '#5A554C' })}>FAN ART · 2B AND NIER:AUTOMATA BELONG TO SQUARE ENIX</div>
      <Turn style={{ right: 48, bottom: 30, fontSize: 26 }}>turn the page →</Turn>
    </Paper>
  )
}

export default { id: '2b-animation', tab: '2B', color: '#BFB2E3', Left, Right } satisfies Project
