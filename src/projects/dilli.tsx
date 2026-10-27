import type { CSSProperties } from 'react'
import { at, hl, Paper, Shot, Turn, type Project } from '../bits'

const C = '#D9622B'
const INK = '#1B1A17'
const YELLOW = '#E8B421'
const BLUE = '#24508F' // blueprint
const LIVE = 'https://dilli.bluntbrain.com'
const CODE = 'https://github.com/xhxaidi/ncr-minecraft'
const LEAD = 'https://github.com/bluntbrain'
const IMG = '/images/dilli/'

// the in-game hotbar, slot by slot (from the HUD screenshot)
const HOTBAR = [
  'repeating-linear-gradient(180deg, #EDE5D0 0 4px, #D9CFB6 4px 6px)',
  '#F4F2EC',
  '#C8543A',
  'repeating-linear-gradient(180deg, transparent 0 5px, #5E2418 5px 6px), repeating-linear-gradient(90deg, #A9452F 0 10px, #5E2418 10px 11px)',
  'repeating-linear-gradient(180deg, #C9C4B8 0 4px, #A8A396 4px 6px)',
  '#4A4A4C',
  'repeating-linear-gradient(90deg, #8B5A33 0 5px, #6E4424 5px 6px)',
  'radial-gradient(#2E6E2A 1px, transparent 1.5px) 0 0 / 4px 4px, #3F8F3A',
  'linear-gradient(135deg, rgba(255,255,255,.5), transparent 50%), #8CC0EC',
]

function Left({ n }: { n: number }) {
  return (
    <Paper side="left" n={n}>
      <div className="mono" style={{ position: 'absolute', right: 64, top: 38, fontSize: 11, letterSpacing: '.24em', color: '#3A362F' }}>JUL 2026 · GURUGRAM</div>
      <div aria-hidden="true" style={at(64, 88, { width: 22, height: 22, background: 'linear-gradient(135deg, #F7B24A, #E07A1F)', transform: 'rotate(45deg)', boxShadow: '0 2px 0 rgba(0,0,0,.2)' })} />
      <h2 className="marker" style={at(100, 66, { margin: 0, fontSize: 64, fontWeight: 400, lineHeight: 1, color: C, transform: 'rotate(-2deg)' })}>Dilli Blocks</h2>
      <div className="mono" style={at(104, 138, { fontSize: 10, letterSpacing: '.3em', color: '#5A554C' })}>REAL NCR · MINEABLE</div>
      <div className="hand" style={at(64, 164, { width: 540, fontSize: 22, lineHeight: 1.1 })}>Minecraft-style Delhi in the browser, built from OpenStreetMap: every block can be mined and rebuilt.</div>

      {/* the flyover, as a postcard home */}
      <div className="lift" style={at(63, 222, { width: 524, padding: '12px 12px 0', boxSizing: 'border-box', background: '#FBF8F0', transform: 'rotate(-1.2deg)', boxShadow: '0 12px 24px rgba(40,30,10,.25)' })}>
        <Shot src={IMG + 'flyover-cyberhub.gif'} alt="Flight over DLF Cyber Hub in voxels: the amphitheatre, the plaza past the fountain and skywalk, up past a glass tower toward the Rapid Metro line" style={{ width: 500, height: 312, background: '#C9D6E2' }} />
        <div style={{ height: 36, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span className="hand" style={{ fontSize: 23 }}>Greetings from <span style={{ color: C }}>Cyber Hub</span></span>
          <span className="mono" style={{ fontSize: 8.5, letterSpacing: '.18em', color: '#5A554C' }}>DLF · GURUGRAM · 7 S FLYOVER</span>
        </div>
      </div>
      <div className="perf lift" style={at(506, 204, { transform: 'rotate(7deg)' })}>
        <div style={{ width: 62, height: 74, boxSizing: 'border-box', padding: 6, background: YELLOW, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between' }}>
          <span className="mono" style={{ fontSize: 7, letterSpacing: '.16em' }}>DILLI</span>
          <svg aria-hidden="true" width="28" height="28" viewBox="0 0 28 28"><path d="M14 3 L25 9 L14 15 L3 9 Z" fill="#FBF8F0" stroke={INK} strokeWidth="1.3" strokeLinejoin="round" /><path d="M3 9 V20 L14 26 V15 Z" fill={C} stroke={INK} strokeWidth="1.3" strokeLinejoin="round" /><path d="M25 9 V20 L14 26 V15 Z" fill="#B8481E" stroke={INK} strokeWidth="1.3" strokeLinejoin="round" /></svg>
          <span className="mono" style={{ fontSize: 8, fontWeight: 600 }}>₹5</span>
        </div>
      </div>

      {/* the hackathon, as a lanyard badge */}
      <svg aria-hidden="true" width="170" height="44" style={at(0, 592)}>
        <path d="M0 10 C 50 4, 110 14, 152 34" fill="none" stroke={C} strokeWidth="10" strokeLinecap="round" />
        <rect x="142" y="28" width="22" height="14" rx="3" fill="#B5B2AA" stroke={INK} strokeWidth="1.2" />
      </svg>
      <div className="lift" style={at(64, 618, { width: 200, background: '#FDFCF8', border: `1.5px solid ${INK}`, borderRadius: 8, overflow: 'hidden', transform: 'rotate(-2deg)', boxShadow: '0 8px 16px rgba(40,30,10,.25)' })}>
        <div className="mono" style={{ padding: '6px 10px', background: C, color: '#FFFFFF', fontSize: 9, fontWeight: 600, letterSpacing: '.22em' }}>OPENAI BUILD WEEK</div>
        <div style={{ padding: '8px 12px 10px' }}>
          <div className="mono" style={{ fontSize: 8, letterSpacing: '.22em', color: '#5A554C' }}>HACKER</div>
          <div className="mono" style={{ fontSize: 17, fontWeight: 600, letterSpacing: '.08em' }}>H. ZAIDI</div>
          <div style={{ borderTop: `1px dashed ${INK}`, opacity: 0.4, margin: '6px 0' }} />
          <div className="mono" style={{ fontSize: 8, letterSpacing: '.22em', color: '#5A554C' }}>TEAM</div>
          <a href={LEAD} target="_blank" rel="noreferrer" className="hand" style={{ fontSize: 19 }}>led by <span style={hl(C)}>bluntbrain</span> ↗</a>
          <div className="mono" style={{ fontSize: 7.5, letterSpacing: '.12em', color: '#5A554C', marginTop: 4 }}>MASTERS' UNION · GURUGRAM · JUL 2026</div>
        </div>
      </div>

      {/* the hotbar */}
      <div className="hand" style={at(292, 600, { width: 320, fontSize: 19, lineHeight: 1.06 })}>every block can be mined and rebuilt: hold click to mine, right click to build, scroll for blocks.</div>
      <div role="img" aria-label="The in-game hotbar: nine block types, the first one selected" style={at(292, 676, { display: 'flex', gap: 3, padding: 4, background: 'rgba(27,34,34,.88)', borderRadius: 3 })}>
        {HOTBAR.map((bg, i) => (
          <span key={i} style={{ position: 'relative', width: 31, height: 31, boxSizing: 'border-box', padding: 3, border: `2px solid ${i ? '#3C4A4A' : YELLOW}`, background: '#22302F' }}>
            <span style={{ display: 'block', width: '100%', height: '100%', background: bg, boxShadow: 'inset 0 0 0 1px rgba(0,0,0,.25)' }} />
            <span className="mono" style={{ position: 'absolute', right: 1, bottom: -1, fontSize: 7, color: '#E9E4D6' }}>{i + 1}</span>
          </span>
        ))}
      </div>
      <div className="hand" style={at(292, 722, { width: 320, fontSize: 18, lineHeight: 1.05, color: C, transform: 'rotate(-1deg)' })}>one instanced mesh per material: thousands of voxels, a handful of draw calls.</div>
    </Paper>
  )
}

// iso sketch for the blueprint: map footprints extruded into voxel blocks
const A = 20, OX = 200, OY = 128
const P = (i: number, j: number, k: number) => `${(OX + (i - j) * A * 0.866).toFixed(1)} ${(OY + (i + j) * A * 0.5 - k * A).toFixed(1)}`
const poly = (...pts: string[]) => 'M' + pts.join(' L') + ' Z'
type Block = [i: number, j: number, w: number, d: number, h: number, park?: true]
const BLOCKS = ([[0, 0, 2, 2, 5], [3, 0, 2, 1, 3], [6, 0, 1, 1, 4], [0, 3, 1, 2, 2], [3, 2, 2, 2, 7], [6, 3, 2, 2, 1, true], [1, 6, 3, 1, 2], [5, 6, 1, 1, 5]] as Block[])
  .sort((a, b) => a[0] + a[1] - b[0] - b[1])
  .flatMap(([i, j, w, d, h, park]) => {
    const tint = park ? 'rgba(150,230,170,' : i === 3 && j === 2 ? 'rgba(255,170,110,' : 'rgba(255,255,255,'
    return [
      { d: poly(P(i, j + d, 0), P(i + w, j + d, 0), P(i + w, j + d, h), P(i, j + d, h)), fill: tint + '.32)' },
      { d: poly(P(i + w, j, 0), P(i + w, j + d, 0), P(i + w, j + d, h), P(i + w, j, h)), fill: tint + '.18)' },
      { d: poly(P(i, j, h), P(i + w, j, h), P(i + w, j + d, h), P(i, j + d, h)), fill: tint + '.45)' },
    ]
  })
const PIPELINE = ['footprint straight from OSM', 'height from building:levels, guessed if missing', 'roads sink into the ground', 'parks become green voxels']

const STACK: [string, number, number][] = [['Vite', 92, -3], ['React', 104, 2], ['TypeScript', 150, -1.5], ['three.js', 128, 3], ['OpenStreetMap', 176, -2]]

function Right({ n }: { n: number }) {
  return (
    <Paper side="right" n={n}>
      {/* Connaught Place, from above */}
      <div className="lift" style={at(52, 58, { width: 400, padding: '10px 10px 0', boxSizing: 'border-box', background: '#FFFFFF', transform: 'rotate(-1deg)', boxShadow: '0 10px 20px rgba(40,30,10,.22)' })}>
        <Shot src={IMG + 'connaught-place-aerial.png'} alt="Aerial of Connaught Place in voxels: Central Park, the giant flag, the amphitheatre ring and the radial roads" style={{ width: 380, height: 238, background: '#A9C4D6' }} />
        <div className="hand" style={{ height: 32, display: 'flex', alignItems: 'center', fontSize: 20 }}>Connaught Place, from above</div>
      </div>
      <div aria-hidden="true" className="tape" style={at(200, 46, { width: 96, height: 24, transform: 'rotate(3deg)' })} />
      <div className="hand" style={at(470, 76, { width: 140, fontSize: 18, lineHeight: 1.08 })}>
        six districts: India Gate, Old Delhi, CP, Qutub Minar, Cyber Hub, Cyber City.
        <div style={{ marginTop: 8, color: C }}>CP and Cyber Hub are the most detailed.</div>
      </div>

      {/* how a footprint becomes blocks, as a blueprint */}
      <div className="lift" style={at(52, 344, {
        width: 300, height: 296, transform: 'rotate(-1.2deg)', boxShadow: '0 8px 16px rgba(40,30,10,.25)', color: '#FFFFFF',
        background: `linear-gradient(rgba(255,255,255,.12) 1px, transparent 1px) 0 0 / 20px 20px, linear-gradient(90deg, rgba(255,255,255,.12) 1px, transparent 1px) 0 0 / 20px 20px, ${BLUE}`,
      })}>
        <div className="mono" style={{ position: 'absolute', left: 12, top: 10, fontSize: 9, letterSpacing: '.22em' }}>BLUEPRINT · FOOTPRINT → BLOCKS</div>
        <svg role="img" aria-label="Sketch: voxel buildings extruded from map footprints, one park in green" width="200" height="150" viewBox="0 0 400 300" style={at(50, 26)}>
          <path d={poly(P(-1, -1, 0), P(9, -1, 0), P(9, 9, 0), P(-1, 9, 0))} fill="none" stroke="rgba(255,255,255,.6)" strokeWidth="1.4" strokeDasharray="4 5" />
          {BLOCKS.map((f, i) => <path key={i} d={f.d} fill={f.fill} stroke="#FFFFFF" strokeWidth="1.6" strokeLinejoin="round" />)}
        </svg>
        <div style={at(14, 180, { width: 272, display: 'flex', flexDirection: 'column', gap: 4 })}>
          {PIPELINE.map((step, i) => (
            <div key={i} style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
              <span className="mono" style={{ width: 16, height: 16, flex: 'none', marginTop: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1.4px solid #FFFFFF', fontSize: 10 }}>{i + 1}</span>
              <span className="hand" style={{ fontSize: 17, lineHeight: 1.05 }}>{step}</span>
            </div>
          ))}
        </div>
      </div>

      {/* the stack, on masking tape */}
      <div className="mono" style={at(380, 346, { fontSize: 9, letterSpacing: '.24em', color: '#5A554C' })}>BUILT WITH</div>
      <div style={at(380, 364, { display: 'flex', flexDirection: 'column', gap: 6 })}>
        {STACK.map(([name, w, r]) => <span key={name} className="tape hand" style={{ width: w, height: 28, boxSizing: 'border-box', padding: '1px 12px', fontSize: 20, lineHeight: '26px', background: 'rgba(236,228,203,.92)', transform: `rotate(${r}deg)` }}>{name}</span>)}
      </div>

      <div className="hand" style={at(380, 548, { width: 228, fontSize: 18, lineHeight: 1.05 })}>
        <p style={{ margin: '0 0 8px' }}><b style={{ color: C }}>challenge:</b> most buildings have no height tag, so a fallback height keeps the skyline from going flat.</p>
        <p style={{ margin: 0 }}><b style={{ color: C }}>decision:</b> hackathon clock, so one neighbourhood done well first. it grew to six districts.</p>
      </div>
      <div className="mono" style={at(380, 712, { width: 228, fontSize: 7.5, letterSpacing: '.14em', lineHeight: 1.5, color: '#5A554C' })}>MAP DATA © OPENSTREETMAP CONTRIBUTORS</div>

      {/* live: a metro token */}
      <a href={LIVE} target="_blank" rel="noreferrer" className="mono lift" style={at(64, 658, {
        width: 118, height: 118, borderRadius: '50%', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 3, textDecoration: 'none', color: '#FFFFFF',
        background: 'radial-gradient(circle at 35% 30%, #4A7FD0, #1F4F9C 70%)', border: '3px solid #173C78', boxShadow: 'inset 0 0 0 7px rgba(255,255,255,.12), 0 8px 14px rgba(40,30,10,.3)',
      })}>
        <span style={{ fontSize: 7, letterSpacing: '.2em' }}>ENTRY TOKEN</span>
        <span style={{ fontSize: 13, fontWeight: 600, letterSpacing: '.1em' }}>LIVE ↗</span>
        <span style={{ fontSize: 7, letterSpacing: '.02em' }}>dilli.bluntbrain.com</span>
      </a>

      {/* source: a patang */}
      <svg aria-hidden="true" width="120" height="40" style={at(262, 772)}><path d="M8 4 C 30 30, 50 0, 72 24 S 104 14, 116 34" fill="none" stroke={INK} strokeWidth="1.4" /><path d="M40 12 l6 -6 l2 8 Z M84 22 l6 -6 l2 8 Z" fill={C} /></svg>
      <div className="lift" style={at(206, 650, { width: 128, height: 128, filter: 'drop-shadow(0 8px 10px rgba(40,30,10,.3))', transform: 'rotate(-8deg)' })}>
        <a href={CODE} target="_blank" rel="noreferrer" className="mono" style={{
          position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', color: INK,
          clipPath: 'polygon(50% 0, 100% 50%, 50% 100%, 0 50%)', background: `conic-gradient(from 45deg, ${C} 0 25%, #F4EFE4 0 50%, ${C} 0 75%, #F4EFE4 0)`,
        }}>
          <span style={{ padding: '5px 7px', background: '#FBF8F0', border: `1.2px solid ${INK}`, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
            <span style={{ fontSize: 9, fontWeight: 600, letterSpacing: '.06em' }}>VIEW CODE ↗</span>
            <span style={{ fontSize: 7, color: '#5A554C' }}>ncr-minecraft</span>
          </span>
        </a>
      </div>

      <Turn style={{ right: 48, bottom: 30, fontSize: 26 }}>say hi →</Turn>
    </Paper>
  )
}

export default { id: 'dilli', tab: 'Dilli Blocks', color: C, Left, Right } satisfies Project
