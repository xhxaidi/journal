import type { CSSProperties } from 'react'
import { at, Paper, Shot, Turn, type Project } from '../bits'

const INK = '#3A2A1E'
const EMBER = '#E8892B'
const TEAL = '#3FA7A0' // the well's glow
const VIOLET = '#5B4A8E' // the sealed gate's void
const ROOF = '#C2502E'
const LIVE = 'https://emberhollow.hasanzaidi.com/'
const CODE = 'https://github.com/xhxaidi/test-rpg-game'
const IMG = '/images/test-game/'

const FLAME = 'M8 1 C 9 5, 14 7, 13.5 11.5 C 13 15, 10.5 17, 8 17 C 5 17, 2.5 15, 2.5 11.5 C 2.5 8.5, 5 7.5, 5.5 4.5 C 6.8 6, 7.6 6.2, 8 1 Z'
function Ember({ size = 18, style }: { size?: number; style?: CSSProperties }) {
  return (
    <svg aria-hidden="true" width={size} height={size * 1.1} viewBox="0 0 16 18" style={style}>
      <path d={FLAME} fill={EMBER} stroke={INK} strokeWidth="1" />
      <path d="M8 8 C 9 10, 11 11, 10.5 13.5 C 10 15.5, 6 15.5, 5.5 13.5 C 5.2 12, 7 11, 8 8 Z" fill="#FFD27A" />
    </svg>
  )
}

// the village, as a hand-drawn map (layout from village.js, roughly)
const TREES = Array.from({ length: 24 }, (_, i) => {
  const a = (i / 24) * Math.PI * 2
  return { x: 158 + Math.cos(a) * 144, y: 132 + Math.sin(a) * 116, r: i % 3 ? 10 : 13 }
})
function House({ x, y }: { x: number; y: number }) {
  return (
    <g stroke={INK} strokeWidth="1.3" strokeLinejoin="round">
      <rect x={x - 12} y={y} width="24" height="15" fill="#EFE3C8" />
      <path d={`M${x - 15} ${y} L${x} ${y - 11} L${x + 15} ${y} Z`} fill={ROOF} />
    </g>
  )
}
function VillageMap() {
  return (
    <svg role="img" aria-label="Hand-drawn map of the village: a ring of woods, Maren's shop with the sealed gate behind it, the square with its well, The Tired Lantern, an old car, and the path you start on" width="316" height="260" viewBox="0 0 316 260" style={at(12, 12)}>
      {TREES.map((t, i) => <circle key={i} cx={t.x} cy={t.y} r={t.r} fill="#8DA868" stroke={INK} strokeWidth="1.2" />)}
      <g fill="none" stroke={INK} strokeWidth="1.6" strokeDasharray="3 4" strokeLinecap="round">
        <path d="M158 86 V110" />
        <path d="M158 170 C 150 196, 170 220, 158 244" />
        <circle cx="158" cy="140" r="30" />
      </g>
      {/* the sealed gate, behind the shop */}
      <path d="M145 46 V32 a13 13 0 0 1 26 0 V46 Z" fill={VIOLET} stroke={INK} strokeWidth="1.8" />
      <path d="M188 22 l8 8 M196 22 l-8 8" stroke={EMBER} strokeWidth="2.6" strokeLinecap="round" />
      {/* Maren's shop, striped awning */}
      <House x={158} y={66} />
      {[0, 1, 2, 3, 4].map((i) => <rect key={i} x={146 + i * 4.8} y="81" width="4.8" height="5" fill={i % 2 ? '#F4EFE4' : ROOF} stroke={INK} strokeWidth=".6" />)}
      <House x={88} y={108} />
      <House x={226} y={108} />
      <House x={84} y={176} />
      <House x={228} y={176} />
      <circle cx="158" cy="140" r="8" fill={TEAL} stroke={INK} strokeWidth="1.4" />
      <rect x="216" y="210" width="28" height="14" rx="5" fill="#B9C2B0" stroke={INK} strokeWidth="1.3" />
      <path d="M218 212 q4 6 8 0 q4 6 8 0 q4 6 8 0" fill="none" stroke="#4E7A3A" strokeWidth="1.4" />
      <circle cx="158" cy="244" r="4" fill={EMBER} stroke={INK} strokeWidth="1" />
      <g fontFamily="Caveat, cursive" fontSize="13.5" fill={INK} stroke="#F1E3C2" strokeWidth="3.5" strokeLinejoin="round" paintOrder="stroke">
        <text x="200" y="40">sealed gate</text>
        <text x="182" y="74">Maren's shop</text>
        <text x="170" y="158">well</text>
        <text x="200" y="136">the Tired Lantern</text>
        <text x="206" y="240">old car</text>
        <text x="168" y="252">you start here</text>
        <text x="30" y="40">N ↑</text>
        <text x="26" y="196" transform="rotate(-90 26 196)">the woods · shellbacks</text>
      </g>
    </svg>
  )
}

// pixel hearts, like the HUD
const HEART = ['.XX.XX.', 'XXXXXXX', 'XXXXXXX', '.XXXXX.', '..XXX..', '...X...']

const KEYS: [string[], string][] = [
  [['J'], 'attack: two sweeps, then a spin'],
  [['K'], 'roll (invulnerable)'],
  [['E'], 'talk'],
]
const cap: CSSProperties = { width: 26, height: 26, boxSizing: 'border-box', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: '#F4EFE4', border: `1.5px solid ${INK}`, borderBottomWidth: 4, borderRadius: 5, fontFamily: 'IBM Plex Mono, monospace', fontSize: 11, fontWeight: 600, color: INK }

function Left({ n }: { n: number }) {
  return (
    <Paper side="left" n={n}>
      <div className="mono" style={{ position: 'absolute', right: 64, top: 38, fontSize: 11, letterSpacing: '.24em', color: '#3A362F' }}>OCT 2026 · PLAYABLE</div>
      <div className="hand" style={at(64, 70, { fontSize: 22, color: '#3A362F' })}>
        part 3 of 3: Pixel Court → 2B → <span style={{ padding: '0 6px', border: `1.8px solid ${EMBER}`, borderRadius: '50%', color: EMBER }}>Emberhollow</span>
      </div>
      <h2 className="marker" style={at(58, 104, { margin: 0, fontSize: 64, fontWeight: 400, lineHeight: 1, color: INK, transform: 'rotate(-2deg)' })}>Emberhollow</h2>
      <Ember size={40} style={at(530, 98, { transform: 'rotate(10deg)' })} />
      <div className="hand" style={at(64, 180, { width: 530, fontSize: 23, lineHeight: 1.12 })}>a small playable top-down action RPG at golden hour: fight shellbacks, collect embers, open the sealed gate.</div>

      {/* the fight, on an old CRT */}
      <div className="lift" style={at(56, 252, { width: 366, height: 232, borderRadius: 14, background: 'linear-gradient(160deg, #7A5534, #4E3420)', transform: 'rotate(-1.5deg)', boxShadow: '0 12px 24px rgba(40,30,10,.35), inset 0 2px 0 rgba(255,220,170,.2)' })}>
        <div style={{ position: 'absolute', left: 14, top: 14, width: 290, height: 181, borderRadius: 16, overflow: 'hidden', background: '#000', boxShadow: 'inset 0 0 0 3px #1B1A17' }}>
          <Shot src={IMG + 'shellback-fight.gif'} alt="Emberhollow: the hero fights a shellback in the plaza with two sweeps and a golden spin finisher; the shell halves fly off and an ember drops" style={{ width: 290, height: 181 }} />
          <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'repeating-linear-gradient(180deg, rgba(0,0,0,.16) 0 1px, transparent 1px 3px), radial-gradient(ellipse at 30% 20%, rgba(255,255,255,.14), transparent 45%)' }} />
        </div>
        {[30, 76].map((y) => <div key={y} aria-hidden="true" style={{ position: 'absolute', left: 318, top: y, width: 30, height: 30, borderRadius: '50%', background: 'radial-gradient(circle at 35% 30%, #EEE, #8E8B84 70%)', boxShadow: '0 2px 3px rgba(0,0,0,.4)' }} />)}
        <div aria-hidden="true" style={{ position: 'absolute', left: 318, top: 124, width: 30, height: 70, background: 'radial-gradient(circle, rgba(0,0,0,.45) 1.5px, transparent 2px) 0 0 / 6px 6px' }} />
        <div className="mono" style={{ position: 'absolute', left: 16, bottom: 8, fontSize: 8, letterSpacing: '.24em', color: '#E9D3B0' }}>EMBERHOLLOW · CH 01</div>
      </div>

      {/* controls, as keycaps */}
      <div style={at(442, 254, { width: 176 })}>
        <div className="mono" style={{ fontSize: 9, letterSpacing: '.24em', color: '#5A554C', marginBottom: 8 }}>CONTROLS</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
          <span style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 26px)', gap: 3 }}>
            <span /><span style={cap}>W</span><span />
            <span style={cap}>A</span><span style={cap}>S</span><span style={cap}>D</span>
          </span>
          <span className="hand" style={{ fontSize: 18 }}>move</span>
        </div>
        {KEYS.map(([keys, text]) => (
          <div key={keys[0]} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
            <span style={{ ...cap, flex: 'none' }}>{keys[0]}</span>
            <span className="hand" style={{ fontSize: 17, lineHeight: 1.02 }}>{text}</span>
          </div>
        ))}
      </div>

      {/* the village map, on parchment */}
      <div className="lift" style={at(56, 506, { width: 340, height: 284, borderRadius: 4, transform: 'rotate(1deg)', background: 'radial-gradient(ellipse at center, #F1E3C2 55%, #DCC193 85%, #B8915A 100%)', boxShadow: '0 8px 16px rgba(40,30,10,.25)' })}>
        <VillageMap />
      </div>

      <div style={at(416, 508, { width: 200 })}>
        <svg role="img" aria-label="5 hearts" width="140" height="21" viewBox="0 0 140 21" shapeRendering="crispEdges">
          {[0, 1, 2, 3, 4].map((h) => HEART.map((row, y) => [...row].map((c, x) => c === 'X' && <rect key={`${h}-${x}-${y}`} x={h * 28 + x * 3.4} y={y * 3.4} width="3.4" height="3.4" fill="#D7262E" />)))}
        </svg>
        <div className="hand" style={{ fontSize: 17, lineHeight: 1.05, marginTop: 6 }}>5 hearts. at 0, the lamps carry you home to the square.</div>
      </div>
      <div style={at(416, 618, { width: 200 })}>
        <div className="mono" style={{ fontSize: 9, letterSpacing: '.22em', color: '#5A554C', marginBottom: 4 }}>WHO LIVES HERE</div>
        {['Maren, the shopkeeper', 'a hooded stranger with glowing eyes, by the well', 'a cat that wanders over and sits by you'].map((who) => (
          <div key={who} className="hand" style={{ display: 'flex', gap: 6, fontSize: 17, lineHeight: 1.02, marginBottom: 5 }}><span style={{ color: EMBER }}>✦</span><span>{who}</span></div>
        ))}
      </div>
    </Paper>
  )
}

// a crop of a 1440×900 screenshot around the gate, as a save-slot thumbnail
const gateCrop: CSSProperties = { position: 'absolute', left: -156, top: 0, width: 499, height: 312, maxWidth: 'none' }
const SAVES = [
  { file: 'sealed-gate-dialogue.png', title: 'SAVE 01 · THE SEALED GATE', alt: 'The sealed gate with a swirling violet void in its arch, the hero standing before it' },
  { file: 'gate-open.png', title: 'SAVE 02 · A BELL RINGS', alt: 'The gate open and glowing warm, with the banner: Somewhere, a bell rings.' },
]

const BEAST = [
  ['HABITAT', 'the woods around the village'],
  ['BEHAVIOR', 'chases you, rears up, charges'],
  ['ON DEFEAT', 'the shell splits and flies off; it drops an ember'],
  ['TIP', "roll through the charge: you can't be hit mid-roll"],
]
const FEEL = ['golden crescent sword arcs', 'hit-stop, screen shake, sparks, knockback', 'about 11,000 grass tufts part around anything that walks', 'fireflies, falling leaves, violet fog, sun shafts']

function Right({ n }: { n: number }) {
  return (
    <Paper side="right" n={n}>
      {/* the quest, on a scroll */}
      <div className="lift" style={at(64, 72, { width: 330, transform: 'rotate(-1deg)', filter: 'drop-shadow(0 6px 10px rgba(40,30,10,.25))' })}>
        <div aria-hidden="true" style={{ position: 'absolute', left: -8, right: -8, top: -9, height: 18, borderRadius: 9, background: 'linear-gradient(180deg, #C9A574, #8E6A3E 60%, #B48D5C)' }} />
        <div style={{ padding: '18px 22px 20px', background: '#F1E3C2' }}>
          <div className="mono" style={{ fontSize: 9, letterSpacing: '.3em', color: '#7A5A3A' }}>QUEST</div>
          <div className="marker" style={{ fontSize: 26, color: INK, margin: '2px 0 6px' }}>The Sealed Gate</div>
          <div className="hand" style={{ fontSize: 18, lineHeight: 1.1 }}>Shellbacks crawl out of the woods. Each one drops an ember. Bring five to the gate behind the shop: each one lights a rune.</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 10 }}>
            {[0, 1, 2, 3, 4].map((i) => <Ember key={i} />)}
            <span className="mono" style={{ fontSize: 10, letterSpacing: '.16em', marginLeft: 6 }}>RUNES 5/5</span>
            <span className="hand" style={{ fontSize: 17, color: EMBER, marginLeft: 4 }}>→ it opens</span>
          </div>
        </div>
        <div aria-hidden="true" style={{ position: 'absolute', left: -8, right: -8, bottom: -9, height: 18, borderRadius: 9, background: 'linear-gradient(180deg, #C9A574, #8E6A3E 60%, #B48D5C)' }} />
      </div>

      {/* two save slots: before and after */}
      <div style={at(410, 66, { width: 210, display: 'flex', flexDirection: 'column', gap: 12 })}>
        {SAVES.map((s, i) => (
          <div key={s.file} className="lift" style={{ padding: 6, background: '#1B1A17', border: `2px solid ${i ? EMBER : '#6E6A60'}`, borderRadius: 4, transform: `rotate(${i ? 1.5 : -1}deg)`, boxShadow: '0 6px 12px rgba(40,30,10,.25)' }}>
            <div className="mono" style={{ fontSize: 8, letterSpacing: '.18em', color: i ? '#FFD27A' : '#E9E4D6', marginBottom: 4 }}>{s.title}</div>
            <div style={{ position: 'relative', width: 194, height: 121, overflow: 'hidden', background: '#2B2620' }}>
              <Shot src={IMG + s.file} alt={s.alt} style={gateCrop} />
            </div>
          </div>
        ))}
      </div>

      {/* bestiary entry */}
      <div className="lift" style={at(64, 312, { width: 330, boxSizing: 'border-box', padding: '12px 16px 10px', background: '#FBF8F0', border: `1.5px solid ${INK}`, outline: `1px solid ${INK}`, outlineOffset: -5, transform: 'rotate(1deg)', boxShadow: '0 6px 12px rgba(40,30,10,.2)' })}>
        <div className="mono" style={{ fontSize: 9, letterSpacing: '.24em', color: '#5A554C', borderBottom: `1px dashed ${INK}`, paddingBottom: 4 }}>BESTIARY · Nº 01</div>
        <div className="marker" style={{ fontSize: 26, color: INK, margin: '4px 0 2px' }}>Shellback</div>
        <svg role="img" aria-label="Doodle of a shellback, a stag beetle" width="92" height="74" viewBox="0 0 92 74" style={{ position: 'absolute', right: 16, top: 22 }}>
          <g fill="none" stroke={INK} strokeWidth="1.6" strokeLinecap="round">
            <path d="M24 30 l-14 -6 M24 40 l-16 2 M26 50 l-14 10 M68 30 l14 -6 M68 40 l16 2 M66 50 l14 10" />
            <path d="M40 18 C 34 10, 30 6, 24 6 M52 18 C 58 10, 62 6, 68 6" strokeWidth="2.2" />
          </g>
          <ellipse cx="46" cy="22" rx="10" ry="7" fill="#5A3A22" stroke={INK} strokeWidth="1.6" />
          <ellipse cx="46" cy="46" rx="20" ry="22" fill="#7A4E2A" stroke={INK} strokeWidth="1.6" />
          <path d="M46 26 V68" stroke={INK} strokeWidth="1.4" />
          <ellipse cx="39" cy="38" rx="4" ry="6" fill="rgba(255,220,170,.35)" />
        </svg>
        {BEAST.map(([k, v]) => (
          <div key={k} style={{ marginBottom: 4, paddingRight: k === 'HABITAT' ? 96 : 0 }}>
            <div className="mono" style={{ fontSize: 8, letterSpacing: '.2em', color: '#5A554C' }}>{k}</div>
            <div className="hand" style={{ fontSize: 17, lineHeight: 1.02 }}>{v}</div>
          </div>
        ))}
      </div>

      <div className="mono" style={at(64, 566, { fontSize: 9, letterSpacing: '.24em', color: '#5A554C' })}>GAME FEEL</div>
      <div style={at(64, 584, { width: 330 })}>
        {FEEL.map((f) => <div key={f} className="hand" style={{ display: 'flex', gap: 8, fontSize: 18, lineHeight: 1.05, marginBottom: 4 }}><Ember size={12} style={{ flex: 'none', marginTop: 3 }} /><span>{f}</span></div>)}
      </div>
      <div className="hand" style={at(64, 700, { width: 330, fontSize: 18, lineHeight: 1.05, color: EMBER, transform: 'rotate(-1deg)' })}>status: a playable sketch, not a finished game. no sound yet.</div>

      {/* live: a game cartridge */}
      <a href={LIVE} target="_blank" rel="noreferrer" className="lift" style={at(416, 410, {
        width: 196, height: 166, textDecoration: 'none', transform: 'rotate(2deg)', filter: 'drop-shadow(0 8px 10px rgba(40,30,10,.3))',
        background: 'repeating-linear-gradient(180deg, rgba(0,0,0,.12) 0 2px, transparent 2px 5px) 0 0 / 100% 20px no-repeat, linear-gradient(180deg, #B5B2AA, #8F8C85)',
        clipPath: 'polygon(0 12px, 12px 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%)',
      })}>
        <span style={{ position: 'absolute', left: 14, right: 14, top: 28, bottom: 16, borderRadius: 4, padding: '10px 12px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', background: 'linear-gradient(170deg, #F2B45A, #C2502E 55%, #4B3A6B)' }}>
          <span className="mono" style={{ fontSize: 11, fontWeight: 600, letterSpacing: '.18em', color: '#FFF4DC' }}>PLAY ↗</span>
          <span className="marker" style={{ fontSize: 21, color: '#FFF4DC', textShadow: '0 2px 0 rgba(58,42,30,.6)' }}>Emberhollow</span>
          <span className="mono" style={{ fontSize: 7.5, letterSpacing: '.04em', color: '#FFF4DC' }}>emberhollow.hasanzaidi.com</span>
        </span>
      </a>

      {/* source: a floppy disk */}
      <a href={CODE} target="_blank" rel="noreferrer" className="lift" style={at(446, 596, {
        width: 150, height: 156, textDecoration: 'none', color: INK, transform: 'rotate(-3deg)', filter: 'drop-shadow(0 8px 10px rgba(40,30,10,.3))',
        background: '#26416E', borderRadius: 4, clipPath: 'polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 0 100%)',
      })}>
        <span aria-hidden="true" style={{ position: 'absolute', left: 34, top: 0, width: 80, height: 48, background: 'linear-gradient(90deg, #C9C9C4, #EDEDE9 50%, #B5B5AF)' }}>
          <span style={{ position: 'absolute', left: 50, top: 8, width: 16, height: 32, background: '#1B1A17' }} />
        </span>
        <span className="mono" style={{ position: 'absolute', left: 12, right: 12, top: 60, bottom: 10, padding: '6px 8px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', background: 'repeating-linear-gradient(180deg, #FBF8F0 0 15px, rgba(29,63,143,.18) 15px 16px)' }}>
          <span style={{ fontSize: 7.5, letterSpacing: '.2em' }}>SOURCE · GITHUB</span>
          <span style={{ fontSize: 12, fontWeight: 600, letterSpacing: '.08em' }}>VIEW CODE ↗</span>
          <span style={{ fontSize: 8, lineHeight: 1.25, color: '#5A554C' }}>xhxaidi/<br />test-rpg-game</span>
        </span>
      </a>

      <Turn style={{ left: 64, bottom: 26, fontSize: 26 }}>turn the page →</Turn>
    </Paper>
  )
}

// soft hyphen so the long name can break across the narrow index tab
export default { id: 'test-game', tab: 'Ember­hollow', color: '#8FCBC4', Left, Right } satisfies Project
