import { at, Paper, Shot, Turn, type Project } from '../bits'

const INK = '#1F2A24'
const ORANGE = '#E2701F' // the ball
const GREEN = '#2F6E5A'
const LIVE = 'https://basketball.hasanzaidi.com'
const CODE = 'https://github.com/xhxaidi/basketball-pix'
const IMG = '/images/basketball/'

const bulbs = { height: 10, background: 'radial-gradient(circle, #FFD86B 2.5px, transparent 3px) 0 0 / 14px 10px repeat-x' }

function Left({ n }: { n: number }) {
  return (
    <Paper side="left" n={n}>
      <div className="mono" style={{ position: 'absolute', right: 64, top: 38, fontSize: 11, letterSpacing: '.24em', color: '#3A362F' }}>OCT 2026 · THREE.JS</div>
      <div className="hand" style={at(64, 70, { fontSize: 22, color: '#3A362F' })}>
        part 1 of 3: <span style={{ padding: '0 6px', border: `1.8px solid ${ORANGE}`, borderRadius: '50%', color: ORANGE }}>Pixel Court</span> → 2B → Emberhollow
      </div>
      <h2 className="marker" style={at(58, 104, { margin: 0, fontSize: 68, fontWeight: 400, lineHeight: 1, color: INK, transform: 'rotate(-2deg)' })}>Pixel Court</h2>
      <svg aria-hidden="true" width="56" height="56" viewBox="0 0 56 56" style={at(468, 100, { transform: 'rotate(18deg)' })}>
        <circle cx="28" cy="28" r="24" fill={ORANGE} stroke={INK} strokeWidth="2" />
        <path d="M4 28 H52 M28 4 V52 M11 11 C 22 20, 22 36, 11 45 M45 11 C 34 20, 34 36, 45 45" fill="none" stroke={INK} strokeWidth="1.8" />
      </svg>
      <div className="hand" style={at(64, 182, { width: 530, fontSize: 23, lineHeight: 1.12 })}>a tiny isometric court that plays itself: three players run a 3-point shootout in a light drizzle.</div>

      {/* the GIF, up on the big screen */}
      <div className="lift" style={at(52, 252, { width: 546, padding: '18px 18px 30px', boxSizing: 'border-box', background: '#1B1A17', borderRadius: 8, transform: 'rotate(1deg)', boxShadow: '0 12px 24px rgba(40,30,10,.3)' })}>
        <div aria-hidden="true" style={{ ...bulbs, position: 'absolute', left: 14, right: 14, top: 4 }} />
        <Shot src={IMG + 'court-shootout.gif'} alt="Pixel Court: two made threes in a row, the net stretching, roles rotating, players running, light drizzle" style={{ width: 510, height: 319, background: '#FFFFFF' }} />
        <div aria-hidden="true" style={{ ...bulbs, position: 'absolute', left: 14, right: 14, bottom: 4 }} />
        <div className="mono" style={{ position: 'absolute', left: 0, right: 0, bottom: 11, textAlign: 'center', fontSize: 9, letterSpacing: '.24em', color: '#F2EDE3' }}>INSTANT REPLAY · TWO THREES IN A ROW</div>
      </div>

      {/* where it came from, on a torn notebook scrap */}
      <div className="lift" style={at(64, 644, {
        width: 300, height: 144, boxSizing: 'border-box', padding: '20px 14px 0 16px', transform: 'rotate(-2deg)', boxShadow: '0 6px 12px rgba(40,30,10,.2)',
        background: 'radial-gradient(circle, #F2EDE3 3px, transparent 3.5px) 6px 3px / 16px 10px repeat-x, repeating-linear-gradient(180deg, transparent 0 23px, rgba(29,63,143,.16) 23px 24px) 0 18px / 100% 100% no-repeat, #FDFCF7',
      })}>
        <div className="hand" style={{ fontSize: 19, lineHeight: '24px' }}>it started with a short clip of a pixel-art court. the goal: rebuild that look live in 3D, not sprites. real light, real shadows, real motion.</div>
      </div>

      {/* rain check */}
      <svg aria-hidden="true" width="120" height="78" viewBox="0 0 120 78" style={at(404, 640)}>
        <path d="M24 40 C 8 40, 8 18, 26 20 C 30 4, 58 2, 64 18 C 76 8, 98 14, 94 30 C 108 32, 106 48, 92 48 H 28" fill="#FBF8F0" stroke={INK} strokeWidth="1.8" strokeLinejoin="round" />
        {[[34, 56], [52, 62], [70, 56], [88, 62], [44, 72], [78, 72]].map(([x, y], i) => <path key={i} d={`M${x} ${y} l-3 7`} stroke="#1D3F8F" strokeWidth="2" strokeLinecap="round" />)}
      </svg>
      <div className="hand" style={at(398, 722, { width: 210, fontSize: 19, lineHeight: 1.05, transform: 'rotate(-2deg)' })}>light drizzle over the patch only, tiny splashes where the drops land</div>
    </Paper>
  )
}

const BOX = [
  ['FG%', 'about 45% of shots go in'],
  ['ROSTER', '3 jointed players, built from capsules'],
  ['STYLES', 'glider, bouncy, swagger'],
  ['GESTURES', 'clap, fist pump, shrug, +4 more'],
  ['WEATHER', 'light drizzle'],
  ['CONTROLS', 'none: it plays itself'],
]

const PIPE = ['render at ¼ size (PX = 4)', 'ACES tone map', '4×4 Bayer dither, 9 levels a channel', 'upscale nearest: every art pixel stays crisp']

function Right({ n }: { n: number }) {
  return (
    <Paper side="right" n={n}>
      {/* coach's clipboard: the rotation */}
      <div className="lift" style={at(64, 64, { width: 300, height: 326, borderRadius: 10, background: 'linear-gradient(135deg, #C29A68, #A97D4C)', transform: 'rotate(-1.5deg)', boxShadow: '0 10px 20px rgba(40,30,10,.3)' })}>
        <div style={{ position: 'absolute', left: 14, right: 14, top: 34, bottom: 14, background: '#FDFCF8', boxShadow: '0 1px 2px rgba(0,0,0,.2)' }}>
          <div className="mono" style={{ position: 'absolute', left: 10, top: 8, fontSize: 9, letterSpacing: '.22em', color: '#5A554C' }}>PLAY 01 · THE SHOOTOUT</div>
          <svg role="img" aria-label="Play diagram: player 1 shoots from the wing, player 2 rebounds under the hoop and passes to player 3, who waves for it; the roles rotate after every shot" width="272" height="250" viewBox="0 0 272 250" style={at(0, 24)}>
            <g fill="none" stroke={INK} strokeWidth="1.8" strokeLinecap="round">
              <path d="M10 8 H262" />
              <path d="M116 22 H156" strokeWidth="3" />
              <circle cx="136" cy="32" r="8" stroke={ORANGE} />
              <path d="M104 8 V112 H168 V8" />
              <path d="M104 112 A32 32 0 0 0 168 112" strokeDasharray="4 4" />
              <path d="M24 8 V56 A112 112 0 0 0 248 56 V8" />
            </g>
            {/* the shot, the rebound, the pass */}
            <g fill="none" strokeWidth="2" strokeLinecap="round">
              <path d="M58 150 Q 66 50 128 38" stroke={ORANGE} strokeDasharray="5 5" />
              <path d="M146 40 L160 62" stroke={INK} />
              <path d="M170 82 Q 236 104 230 168" stroke={INK} strokeDasharray="5 5" />
              <path d="M222 160 l8 9 l5 -11" stroke={INK} />
              <path d="M150 54 l10 8 l-1 -12" stroke={INK} />
            </g>
            {[[50, 162, '1'], [166, 74, '2'], [232, 182, '3']].map(([x, y, label]) => (
              <g key={label}>
                <circle cx={x} cy={y} r="11" fill="#FDFCF8" stroke={INK} strokeWidth="1.8" />
                <text x={x} y={Number(y) + 4.5} textAnchor="middle" fontFamily="IBM Plex Mono, monospace" fontSize="12" fontWeight="600" fill={INK}>{label}</text>
              </g>
            ))}
            <g fontFamily="Caveat, cursive" fontSize="16" fill={INK}>
              <text x="20" y="190">shoots</text>
              <text x="182" y="70">rebounds</text>
              <text x="146" y="214">waves for the pass</text>
              <text x="40" y="236" fill={ORANGE}>↻ roles rotate every shot</text>
            </g>
          </svg>
        </div>
        <div aria-hidden="true" style={{ position: 'absolute', left: 100, top: -8, width: 100, height: 34, borderRadius: 6, background: 'linear-gradient(180deg, #F2F2F0, #A9A9A4 60%, #D6D6D2)', boxShadow: '0 2px 4px rgba(0,0,0,.35)' }} />
      </div>

      {/* box score */}
      <div className="lift" style={at(392, 70, { width: 228, background: '#FBF8F0', border: `1.5px solid ${INK}`, transform: 'rotate(1.5deg)', boxShadow: '0 6px 12px rgba(40,30,10,.2)' })}>
        <div className="mono" style={{ padding: '5px 10px', background: ORANGE, color: '#FFFFFF', fontSize: 9, letterSpacing: '.24em', fontWeight: 600 }}>BOX SCORE</div>
        {BOX.map(([k, v]) => (
          <div key={k} style={{ padding: '4px 10px 5px', borderTop: '1px solid rgba(31,42,36,.18)' }}>
            <div className="mono" style={{ fontSize: 8.5, letterSpacing: '.2em', color: '#5A554C' }}>{k}</div>
            <div className="hand" style={{ fontSize: 18, lineHeight: 1.05 }}>{v}</div>
          </div>
        ))}
      </div>

      {/* a loupe over the rim: the art pixels, up close */}
      <div aria-hidden="true" style={at(196, 548, { width: 22, height: 92, borderRadius: 8, background: 'linear-gradient(90deg, #2A2925, #4A4842 50%, #1E1D1A)', transform: 'rotate(-40deg)', transformOrigin: 'top center' })} />
      <div className="lift" style={at(64, 410, { width: 160, height: 160, borderRadius: '50%', overflow: 'hidden', border: '8px solid #2A2925', boxShadow: '0 8px 16px rgba(40,30,10,.35), inset 0 0 0 2px rgba(255,255,255,.4)' })}>
        <Shot src={IMG + 'court-make.png'} alt="Close-up of the hoop at 2×: the ball dropping through the net, every art pixel visible" style={{ position: 'absolute', left: -1696, top: -396, width: 2880, height: 1800, maxWidth: 'none', imageRendering: 'pixelated' }} />
      </div>

      <div className="mono" style={at(264, 408, { fontSize: 10, letterSpacing: '.2em', color: '#3A362F' })}>HOW IT LOOKS THE WAY IT DOES</div>
      <div style={at(264, 432, { width: 350, display: 'flex', flexDirection: 'column', gap: 7 })}>
        {PIPE.map((step, i) => (
          <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
            <span className="mono" style={{ width: 20, height: 20, flex: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', background: ORANGE, color: '#FFFFFF', fontSize: 11, fontWeight: 600, boxShadow: '3px 3px 0 #1F2A24' }}>{i + 1}</span>
            <span className="hand" style={{ fontSize: 19, lineHeight: 1.05 }}>{step}</span>
          </div>
        ))}
        <div className="hand" style={{ fontSize: 19, color: ORANGE, transform: 'rotate(-2deg)', marginTop: 4 }}>this pipeline became 2B, then Emberhollow →</div>
      </div>

      {/* source: the scoreboard */}
      <a href={CODE} target="_blank" rel="noreferrer" className="mono lift" style={at(64, 650, {
        width: 240, height: 104, boxSizing: 'border-box', padding: '10px 14px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', textDecoration: 'none',
        background: 'radial-gradient(rgba(255,255,255,.06) 1px, transparent 1.3px) 0 0 / 4px 4px, #151513', border: '3px solid #3A3833', borderRadius: 6, transform: 'rotate(1.5deg)', boxShadow: '0 8px 16px rgba(40,30,10,.3)',
      })}>
        <span style={{ fontSize: 8.5, letterSpacing: '.22em', color: '#F5C451' }}>SOURCE · GITHUB</span>
        <span style={{ fontSize: 18, fontWeight: 600, letterSpacing: '.14em', color: '#FF8A3D', textShadow: '0 0 6px rgba(255,138,61,.7)' }}>VIEW CODE ↗</span>
        <span style={{ fontSize: 9, letterSpacing: '.06em', color: '#9FD8A8', textShadow: '0 0 4px rgba(159,216,168,.6)' }}>xhxaidi/basketball-pix</span>
      </a>

      {/* live: a felt pennant */}
      <a href={LIVE} target="_blank" rel="noreferrer" className="lift" style={at(318, 600, { width: 300, height: 130, textDecoration: 'none', transform: 'rotate(-4deg)', filter: 'drop-shadow(0 6px 8px rgba(40,30,10,.3))' })}>
        <span aria-hidden="true" style={{ position: 'absolute', inset: 0, clipPath: 'polygon(0 0, 100% 50%, 0 100%)', background: `linear-gradient(90deg, #F2EDE3 0 26px, ${GREEN} 26px)` }}>
          <span style={{ position: 'absolute', left: 30, top: 0, bottom: 0, borderLeft: '2px dashed rgba(242,237,227,.7)' }} />
        </span>
        <span style={{ position: 'absolute', left: 42, top: 0, bottom: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 2 }}>
          <span className="mono" style={{ fontSize: 11, fontWeight: 600, letterSpacing: '.18em', color: '#F5C451' }}>LIVE ↗</span>
          <span className="marker" style={{ fontSize: 22, color: '#F2EDE3' }}>Pixel Court</span>
          <span className="mono" style={{ fontSize: 8.5, letterSpacing: '.04em', color: '#F2EDE3' }}>basketball.hasanzaidi.com</span>
        </span>
      </a>

      <Turn style={{ right: 48, bottom: 26, fontSize: 26 }}>turn the page →</Turn>
    </Paper>
  )
}

export default { id: 'basketball', tab: 'Pixel Court', color: '#A6CDA2', Left, Right } satisfies Project
