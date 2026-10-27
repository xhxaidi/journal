import type { ReactNode } from 'react'
import { at, hl, Paper, rgba, Stub, Turn, type Project } from '../bits'

const C = '#D9622B'

// isometric ink sketch: map footprints extruded into voxel blocks
const A = 20, OX = 200, OY = 128
const P = (i: number, j: number, k: number) => `${(OX + (i - j) * A * 0.866).toFixed(1)} ${(OY + (i + j) * A * 0.5 - k * A).toFixed(1)}`
const poly = (...pts: string[]) => 'M' + pts.join(' L') + ' Z'
const seg = (a: string, b: string) => `M${a} L${b}`
type Block = [i: number, j: number, w: number, d: number, h: number, park?: true]
const BLOCKS = ([[0, 0, 2, 2, 5], [3, 0, 2, 1, 3], [6, 0, 1, 1, 4], [0, 3, 1, 2, 2], [3, 2, 2, 2, 7], [6, 3, 2, 2, 1, true], [1, 6, 3, 1, 2], [5, 6, 1, 1, 5]] as Block[])
  .sort((a, b) => a[0] + a[1] - b[0] - b[1])
  .map(([i, j, w, d, h, park]) => {
    const lines: string[] = []
    for (let k = 1; k < h; k++) lines.push(seg(P(i + w, j, k), P(i + w, j + d, k)), seg(P(i, j + d, k), P(i + w, j + d, k)))
    for (let t = 1; t < d; t++) lines.push(seg(P(i + w, j + t, 0), P(i + w, j + t, h)))
    for (let t = 1; t < w; t++) lines.push(seg(P(i + t, j + d, 0), P(i + t, j + d, h)))
    const [top, right, left] = park ? ['#B9D7A8', '#94BD86', '#7CA66F'] : i === 3 && j === 2 ? [rgba(C, 0.45), rgba(C, 0.3), rgba(C, 0.55)] : ['#FBF8F0', '#E9DFCB', '#D6C8AC']
    return [
      { d: poly(P(i, j + d, 0), P(i + w, j + d, 0), P(i + w, j + d, h), P(i, j + d, h)), fill: left },
      { d: poly(P(i + w, j, 0), P(i + w, j + d, 0), P(i + w, j + d, h), P(i + w, j, h)), fill: right },
      { d: poly(P(i, j, h), P(i + w, j, h), P(i + w, j + d, h), P(i, j + d, h)), fill: top },
      { d: lines.join(' '), fill: 'none' },
    ]
  })

function Sketch() {
  return (
    <div role="img" aria-label="Ink sketch: voxel buildings extruded from map footprints" style={at(336, 222, { width: 290, height: 218 })}>
      <div style={{ position: 'absolute', width: 400, height: 300, transform: 'scale(.72)', transformOrigin: '0 0' }}>
        <svg aria-hidden="true" width="400" height="300" style={{ position: 'absolute', inset: 0, overflow: 'visible' }}>
          <path d={poly(P(-1, -1, 0), P(9, -1, 0), P(9, 9, 0), P(-1, 9, 0))} fill="none" stroke="#3A362F" strokeWidth="1" strokeDasharray="4 5" />
          {BLOCKS.flat().map((f, i) => (f.fill === 'none'
            ? f.d && <path key={i} d={f.d} fill="none" stroke="#1B1A17" strokeWidth=".6" opacity=".55" />
            : <path key={i} d={f.d} fill={f.fill} stroke="#1B1A17" strokeWidth="1.3" strokeLinejoin="round" />))}
        </svg>
        {[[92, 52], [300, 30], [40, 214], [330, 236]].map(([l, t], i) => <span key={i} className="num" style={at(l, t)}>{i + 1}</span>)}
      </div>
    </div>
  )
}

const NOTES: ReactNode[] = ['footprint straight from OSM', <>height from <span className="mono" style={{ fontSize: 13 }}>building:levels</span>, guess if missing</>, 'roads sink into the ground', 'parks become green voxels']

function Left({ n }: { n: number }) {
  return (
    <Paper side="left" n={n}>
      <div className="mono" style={{ position: 'absolute', right: 64, top: 38, fontSize: 11, letterSpacing: '.24em', color: '#3A362F' }}>JUL 2026 · GURUGRAM</div>
      <h2 className="marker" style={at(60, 74, { margin: 0, fontSize: 76, fontWeight: 400, lineHeight: 1, color: C, transform: 'rotate(-2deg)' })}>Dilli Blocks</h2>
      <div aria-hidden="true" className="tape" style={at(420, 76, { width: 110, height: 28, background: rgba(C, 0.45), transform: 'rotate(10deg)' })} />

      <div className="mono step" style={at(64, 190)}><span className="num">1</span>THE IDEA</div>
      <div className="hand" style={at(64, 226, { width: 262, fontSize: 23, lineHeight: 1.16 })}>
        <p style={{ margin: '0 0 10px' }}>Every map of Delhi I use is flat: lanes, mohallas, rooftops, all squashed into grey lines.</p>
        <p style={{ margin: 0 }}>OpenStreetMap already has the footprints. So: <span style={hl(C)}>turn a neighbourhood into voxels</span> you can look around, block by block.</p>
      </div>

      <div className="mono step" style={at(350, 190)}><span className="num">2</span>NOTES</div>
      <Sketch />
      <div className="hand" style={at(350, 456, { width: 262, display: 'flex', flexDirection: 'column', gap: 7, fontSize: 20, lineHeight: 1.08 })}>
        {NOTES.map((note, i) => <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}><span className="num">{i + 1}</span><span>{note}</span></div>)}
      </div>

      <div className="lift" style={at(64, 494, { width: 128, padding: '7px 7px 26px', background: '#FDFBF6', transform: 'rotate(-3deg)', boxShadow: '0 6px 12px rgba(40,30,10,.2)' })}>
        <div style={{ height: 88, background: 'linear-gradient(150deg, #A9B9A3, #5E7461)', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}><span className="mono" style={{ fontSize: 8, letterSpacing: '.14em', color: '#F4F1E8', padding: 6 }}>[ REF · PIXEL CITY ]</span></div>
        <div className="hand" style={{ position: 'absolute', left: 9, bottom: 3, fontSize: 17, color: '#3A362F' }}>the vibe</div>
      </div>
      <div aria-hidden="true" className="tape" style={at(98, 484, { width: 62, height: 20, background: rgba(C, 0.5), transform: 'rotate(-6deg)' })} />
      <div className="hand lift" style={at(212, 500, { width: 124, height: 120, padding: 12, boxSizing: 'border-box', background: '#F7E36A', transform: 'rotate(3deg)', boxShadow: '0 10px 14px rgba(40,30,10,.2)', fontSize: 19, lineHeight: 1.05 })}>one neighbourhood. make it feel good first.</div>

      <div className="stub lift" style={at(64, 670, { display: 'flex', width: 360, height: 96, background: '#E8DCC2', transform: 'rotate(-1.5deg)', boxShadow: '0 6px 14px rgba(40,30,10,.2)' })}>
        <div className="mono" style={{ flex: 1, padding: '14px 18px 12px 24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', fontSize: 10, letterSpacing: '.14em', color: '#3A362F' }}>
          <span>ADMIT ONE · HACKATHON</span>
          <span style={{ fontSize: 16, letterSpacing: '.06em', fontWeight: 600, color: '#1B1A17' }}>OpenAI Build Week</span>
          <span>MASTERS' UNION · GURUGRAM · JUL 2026</span>
        </div>
        <div className="mono" style={{ width: 64, borderLeft: '2px dashed #9C8F74', display: 'flex', alignItems: 'center', justifyContent: 'center', writingMode: 'vertical-rl', fontSize: 10, letterSpacing: '.2em', color: '#3A362F' }}>Nº 0726</div>
      </div>
    </Paper>
  )
}

const STACK: [string, string?][] = [['Vite'], ['React', '#1D3F8F'], ['TypeScript'], ['Three.js', C], ['OpenStreetMap', '#2F6E73']]
const TILTS = [-3, 2, -1, 3, -2]
const LOG: [string, ReactNode][] = [
  ['DECISION', <>One <span style={hl(C)}>instanced mesh</span> per material: thousands of voxels, a handful of draw calls.</>],
  ['CHALLENGE', 'Most buildings have no height tag, so a fallback height keeps the skyline from going flat.'],
  ['DECISION', 'Hackathon clock: one neighbourhood done well, not the whole city done badly.'],
]

function Right({ n }: { n: number }) {
  return (
    <Paper side="right" n={n}>
      <div className="mono step" style={at(64, 66)}><span className="num">3</span>EXECUTION</div>
      <div style={at(64, 102, { width: 540, display: 'flex', flexWrap: 'wrap', gap: '10px 12px', alignItems: 'center' })}>
        {STACK.map(([name, ink], i) => <span key={name} className="rubber" style={{ transform: `rotate(${TILTS[i]}deg)`, borderColor: ink, color: ink }}>{name}</span>)}
      </div>
      <div style={at(64, 160, { width: 530, display: 'flex', flexDirection: 'column', gap: 10 })}>
        {LOG.map(([kind, text], i) => (
          <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
            <span className="num">{i + 1}</span>
            <div><div className="mono" style={{ fontSize: 9, letterSpacing: '.22em', color: '#5A554C' }}>{kind}</div><div className="hand" style={{ fontSize: 21, lineHeight: 1.1 }}>{text}</div></div>
          </div>
        ))}
      </div>

      <div className="mono step" style={at(64, 380)}><span className="num">4</span>FINAL RESULT</div>
      <div className="mono" style={{ position: 'absolute', right: 64, top: 386, fontSize: 11, letterSpacing: '.24em', color: '#3A362F' }}>JULY 2026</div>
      <div className="lift" style={at(64, 414, { width: 340, padding: 10, background: '#FFFFFF', transform: 'rotate(-1deg)', boxShadow: '0 10px 22px rgba(40,30,10,.22)' })}>
        <div style={{ height: 214, background: 'linear-gradient(170deg, #C9D6E2 0%, #E9D9BE 55%, #B88C5E 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><span className="mono" style={{ fontSize: 10, letterSpacing: '.2em' }}>[ RESULT · HERO RENDER ]</span></div>
      </div>
      <div aria-hidden="true" className="tape" style={at(46, 404, { width: 90, height: 26, background: rgba(C, 0.45), transform: 'rotate(-22deg)' })} />
      <div className="hand" style={at(424, 420, { width: 180, fontSize: 30, lineHeight: 1, transform: 'rotate(-4deg)' })}>a whole mohalla, in blocks.</div>

      {/* placeholder links: the real ones come in Phase 3 */}
      <Stub kicker="ADMIT ONE" title="VISIT LIVE ↗" sub="[ LIVE URL ]" no="Nº 01" bg={rgba(C, 0.85)} style={{ left: 424, top: 512, transform: 'rotate(-2deg)' }} />
      <Stub href="https://github.com/xhxaidi" kicker="SOURCE" title="VIEW CODE ↗" sub="GITHUB · XHXAIDI" no="Nº 02" style={{ left: 424, top: 610, transform: 'rotate(1.5deg)' }} />
      <Turn style={{ right: 48, bottom: 30, fontSize: 26 }}>say hi →</Turn>
    </Paper>
  )
}

export default { id: 'dilli', tab: 'Dilli Blocks', color: C, Left, Right } satisfies Project
