# Field Journal — build plan

Design: https://claude.ai/artifact/DTED2eR3yjXuWv4z2jvYCU ("Xaidi — Field Journal Portfolio").
A leather field journal lies on a green cutting mat. It loads, opens, and you flip through the pages.
On desktop it's a fixed 1440×900 stage scaled to fit the window. Mobile and reduced-motion get stacked
pages instead.

**Stack:** Vite + React + TypeScript, run with Bun. Plain CSS, with no UI or animation libraries: the
page turns are CSS 3D transitions, as in the prototype. Media is served straight from `public/`
(`/images/<project>/…`).

**Run:** `bun install`, then `bun run dev`. `bun run build` type-checks and builds to `dist/`.

**Workflow:** after each phase, and after each project in Phase 3, stop. The user commits by hand and
says "continue".

## Phase 1 — Setup

- [x] Vite + React + TS in the repo root (`package.json`, `index.html`, `vite.config.ts`, `tsconfig.json`, `src/main.tsx`)
- [x] Packages: `react`, `react-dom`; dev: `vite`, `@vitejs/plugin-react`, `typescript`, `@types/react`, `@types/react-dom`
- [x] Fonts: Caveat, Permanent Marker, IBM Plex Mono, Newsreader (Google Fonts)
- [x] `.gitignore`: `node_modules`, `dist`
- [x] `bun run build` passes; the dev server serves `/images/…`

## Phase 2 — Design

Each artboard becomes a component, in this order:

1. Shared look (`src/styles.css`): mat grid, paper grain, airmail edge, washi tape, perforated stamps, ticket stubs, rubber stamps, number badges, highlighter, `.lift` hover.
2. Stage: 1440×900, scaled to fit the window.
3. **00 Loader:** the closed journal on the mat (mug, pen, washi rolls, grinder), with a pencil drawing the progress line.
4. **Opening:** the elastic band slides off and the cover swings open.
5. **Flip engine:**
   - leaves with front and back faces, turned with a stagger, lift and shading
   - index tabs to jump between spreads
   - prev, next, close and replay controls
   - page-corner hotspots and arrow keys
   - a URL hash for each spread
6. **01 Endpaper / P.01:** marbled endpaper, the "Property of" label, "things I built", the postmark.
7. **02 About, P.02–03:** polaroid, name, bio, stamp links (GitHub, Email, Website), hand-drawn map.
8. **03 Project spread template:** built as the Dilli Blocks sample, with idea, notes, execution and result, plus the GitHub and live ticket stubs.
9. **04 Back cover / contact:** boarding pass, pocket with link cards, V60 napkin, "close the journal".
10. **06 Mobile / reduced-motion:** the tabs become a top strip, one page per screen, no 3D.

Status: all 10 done. Checked in Chromium at 1440×900, 1280×720 and 390×844. That covered the loader,
opening, arrow keys, tabs, deep link (`/#dilli`), close and replay.

Decisions and open items:

- Headings use Permanent Marker, the main prototype's font. Hidayatullah is still possible if you send its font file.
- The About polaroid shows a placeholder until you send a portrait.
- Mobile shows the same 650×812 pages scaled to the screen width, not a separate mobile layout for each page.

Where things live:

- `src/Journal.tsx`: the engine
- `src/pages.tsx`: the fixed pages
- `src/projects/<id>.tsx`: one file per spread, listed in `src/projects/index.ts`
- `src/bits.tsx`: shared pieces such as `Paper`, `Stub` and `Turn`

## Phase 3 — Projects, one at a time

For each project:

1. You pick the project, and I ask you to paste its **GitHub link** and **live link**.
2. I build its spread with an arrangement of its own, different from the other spreads. It gets scribbles, sticky notes, tickets and project notes (idea, notes, build, result), plus its media from `public/images/<project>/`.
3. Every project page shows both links. That's required.
4. I add its tab to the index and check the build.
5. I stop. You commit, then say "continue".

Candidates:

- Dilli Blocks (`dilli`)
- BeanX (`beanx`)
- Sombra (`sombra`)
- Pixel Dance 2B (`2b-animation`)
- Pixel Court (`basketball`)
- Emberhollow (`test-game`)
- Intertwine and tether: in the design's tabs, but no media yet

Done:

- **Sombra** (`src/projects/sombra.tsx`), pages 04–05:
  - live: https://sombra.hasanzaidi.com · code: https://github.com/xhxaidi/sombra-landing-page
  - framed ASCII black-hole print, index card, cell-foam lens, build checklist, clipped-on wallet phone, privacy receipt, quantum-fridge print, access-card links
  - media loads only when its spread is open or next to the open one (`Shot` in `src/bits.tsx`)
- **BeanX** (`src/projects/beanx.tsx`), pages 06–07:
  - code: https://github.com/xhxaidi/BeanX_frontend and https://github.com/xhxaidi/BeanX_backend
  - live: not public yet. The order docket says so and doesn't link. Swap in the App Store or TestFlight URL when there is one.
  - logo and title, the README's job line, the scan phone with a hand-drawn five-step flow, origin visa stamps from the demo passport, a coffee ring
  - the commit timeline as a brew log, the brew-timer phone, the stack on a coffee-bag label, repo punch cards
- **Pixel Court** (`src/projects/basketball.tsx`), pages 08–09, just before 2B so the series reads in order:
  - live: https://basketball.hasanzaidi.com · code: https://github.com/xhxaidi/basketball-pix
  - series note, the shootout GIF on a jumbotron, the origin story on a torn notebook scrap, a drizzle doodle
  - a clipboard play diagram of the rotation, a box score, a pixel loupe over the rim, the 4-step render pipeline
  - LED scoreboard (source), felt pennant (live). The third-party reference clip is never included.
- **Pixel Dance (2B)** (`src/projects/2b-animation.tsx`), pages 10–11:
  - live: https://2b.hasanzaidi.com/ · code: https://github.com/xhxaidi/2B-animation
  - series note, the fight GIF on a 35mm film strip, an X-sheet of the beats with their sound cues
  - the robot-cam GIF in a viewfinder, a backflip pose sketch, a parts list, a Bayer dither swatch
  - clapperboard (live), film canister (source), fan-art notice
- **Emberhollow** (`src/projects/test-game.tsx`), pages 12–13, finishing the series:
  - live: https://emberhollow.hasanzaidi.com/ · code: https://github.com/xhxaidi/test-rpg-game
  - series note, the fight GIF on a CRT, keycap controls, a parchment village map, pixel hearts, the villagers
  - a quest scroll with 5 ember runes, before/after gate save slots, a shellback bestiary card, game-feel notes, the README's status ("playable sketch, no sound yet")
  - game cartridge (live), floppy disk (source). The tab label uses a soft hyphen so "Ember-hollow" fits its tab.
- **Dilli Blocks** (`src/projects/dilli.tsx`), pages 14–15, rebuilt from scratch rather than reusing the design's template:
  - live: https://dilli.bluntbrain.com · code: https://github.com/xhxaidi/ncr-minecraft
  - a team build, led by bluntbrain (https://github.com/bluntbrain), credited on the hackathon badge
  - the Cyber Hub flyover as a "Greetings from" postcard with a stamp, an OpenAI Build Week lanyard badge, the in-game hotbar and controls
  - the Connaught Place aerial with a note on the six districts, the OSM-to-voxels pipeline on a blueprint, the stack on masking tape, the challenge and decision notes, OSM attribution
  - metro token (live), kite (source)
  - removed the old template's `Stub` component and the `.stub`, `.num` and `.step` CSS, which nothing uses any more

Not in scope: deploying to hasanzaidi.com. Add a Phase 4 if you want it.
