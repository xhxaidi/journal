# flex — context

Demo media (GIFs, screenshots, videos) for my projects, kept in one place so each project's README
and my portfolio can link to it.

## Layout

```
public/
├── images/<project>/   # .png screenshots and .gif loops
└── videos/<project>/   # .mp4 (keep each under 100MB, GitHub's hard limit)
```

`<project>` is the project's folder name, lowercase.

## Conventions

- Every project gets at least **1 GIF and 2 screenshots**.
- GIFs: 720–960px wide, 12–20 fps, 4–8s, loop, under ~8MB so they render inline on GitHub.
  Full-screen 3D motion is heavy: 720px · 12fps · 64 colours · no dither is what fits.
- Screenshots: PNG, 1440×900 viewport.
- Every file gets one row in its project's table below: what it shows and how it was captured, so
  it can be re-shot later.

Embed from another repo's README:

```md
![Cyber Hub flyover](https://raw.githubusercontent.com/xhxaidi/flex/main/public/images/dilli/flyover-cyberhub.gif)
```

---

## Projects

<!-- one section per project; keep the table format -->

### Dilli Blocks (`dilli`)

A Minecraft-style voxel sandbox in the browser that builds real Delhi and Gurugram districts from
OpenStreetMap data. Every block can be mined and rebuilt.

- **Source:** live at https://dilli.bluntbrain.com · **Stack:** three.js, cached OpenStreetMap (Overpass) data
- **Districts:** India Gate, Old Delhi, Connaught Place, Qutub Minar, Cyber Hub, Cyber City. Cyber Hub and CP are the most detailed maps.

| File | Shows | Captured |
|---|---|---|
| `public/images/dilli/flyover-cyberhub.gif` | Flight over DLF Cyber Hub: approach from the east, over the amphitheatre, down the plaza past the fountain and skywalk, then up past a DLF glass tower toward the Rapid Metro line | Scripted camera, 7s, 140 frames rendered one by one at 1440×900, encoded at 720px · 12fps · 64 colours (6.9MB) |
| `public/images/dilli/flyover-connaught-place.gif` | Sweeping arc around CP's Central Park from south to east to north, showing the giant flag, the amphitheatre, the inner and outer circles and the colonnaded blocks | Same method, 7s, 720px · 12fps · 64 colours (8.0MB) |
| `public/images/dilli/cyberhub-hud.png` | In-game view with the full HUD: district directory, "DLF Cyber Hub" location card, hotbar and controls. Twin retail strips, amphitheatre and a DLF tower behind | 1440×900; entered as Guest Explorer, camera at (100, 55, 70) looking at (-20, 12, -10) |
| `public/images/dilli/connaught-place-aerial.png` | Clean aerial of Connaught Place: Central Park, the flag, the amphitheatre ring and the radial roads | 1440×900, HUD hidden; camera at (85, 62, 85) looking at (0, 22, 0) |

**How to re-shoot.** Playwright in headed Chromium with `--use-angle=metal` (headless falls back to
slow software WebGL). The game doesn't expose its state, so a `page.route` on `/assets/index-*.js`
rewrites `this.player=new bm(` to `window.__game=this,this.player=new bm(` in the local copy only.
Minified names change on every deploy, so search for `requestPointerLock` to find the player class.
Then:

1. Wait until `__game.loading` is false.
2. Call `__game.loadPreset('cyber-hub' | 'connaught-place')`.
3. Wait again until `__game.currentPreset.id` matches the preset you asked for. Skipping this
   renders the previous world.
4. Set `player.enabled=false`, then set `player.position`, `yaw` and `pitch` per frame along a
   Catmull-Rom path. Wait two `requestAnimationFrame`s before each screenshot.

To hide the HUD, use the CSS `body *{visibility:hidden} #game canvas{visibility:visible} #hotbar *{visibility:hidden}`.

### Pixel Dance (2B) (`2b-animation`)

A real-time pixel-art 3D fan-art animation of 2B from *NieR:Automata*. She draws her katana, backflips
through one machine and cuts down two more with a spinning slash, in wind-blown grass ringed by robot
wreckage.

- **Source:** `pix/2b-animation/` (dance.html) · **Stack:** three.js 0.160 (jsdelivr import map) and OrbitControls, plain ES modules with no build step, a custom GLSL post pass (ACES tone map, 4×4 Bayer dither, 9 levels per channel), Verlet cloth and hair, generated Web Audio sound
- **Run:** `python3 -m http.server 8765` in `pix/`, then open `/2b-animation/dance.html`. Drag or scroll to orbit and zoom. `C` is the cinematic camera, `O` the wide orbit, `R` records, `M` mutes.

| File | Shows | Captured |
|---|---|---|
| `public/images/2b-animation/fight-wide.gif` | The whole sword move in the default isometric view: draw, the backflip slash that splits the first machine, landing, the spinning slash through the other two, smoke blasts, sheathe | dance.html at 1920×1200 on a virtual clock at 20fps, sim time 7.1–14.2s, scaled down 2× (nearest) to 960×600, with a 0.5s crossfade loop. 6.55s, 131 frames |
| `public/images/2b-animation/fight-robot-cam.gif` | The `?cine` robot-cam take: machines closing in, takeoff, the backflip cut with lightning, the spin slash in slow motion, a close-up, the pull-out | dance.html?cine at 1920×1200, 15fps, scaled down 2× (nearest) to 960×600. The page's own 4:3 frame adds black side bars. Hard-cut loop. 5.8s, 87 frames |
| `public/images/2b-animation/backflip-cut.png` | Mid-backflip: a pale slash arc, purple lightning, the first machine splitting in a white-hot flash, sun rays | dance.html at 1440×900, sim time ≈ 9.8s |
| `public/images/2b-animation/spin-slash-closeup.png` | Robot-cam close-up of the spinning slash: long blade trail, lightning, a burning machine, Pod at her shoulder | dance.html?cine at 1440×900, during the spin's slow motion |

Not copied: `pixel-dance-cinematic.mp4` (223MB) and `pixel-dance-orbit.mp4` (195MB) are too big for
GitHub. `pixel-dance-orbit-small.mp4` (8.7MB) could go in `public/videos/2b-animation/`.

### Pixel Court (`basketball`)

A tiny isometric pixel-art basketball court that plays itself: three jointed players run a rotating
3-point shootout in a light drizzle.

- **Source:** `pix/basketball/` (index.html) · **Stack:** three.js 0.160 (jsdelivr import map), plain ES modules with no build step, a custom GLSL post pass (ACES, Bayer dither, nearest upscale), canvas textures
- **Run:** `python3 -m http.server 8765` in `pix/`, then open `/basketball/index.html`. Watch-only, no controls.

| File | Shows | Captured |
|---|---|---|
| `public/images/basketball/court-shootout.gif` | Two made threes in a row (YELLOW, then WHITE): the shots, the net stretching, roles rotating, players running, the drizzle | index.html at 1440×900 on a virtual clock at 20fps, sim time 27.4–35.4s, an unscaled 960×600 crop around the court, with a 0.5s crossfade loop. 7.55s, 151 frames |
| `public/images/basketball/court-make.png` | The ball dropping through the stretched net, with the scoreboard just ticked to YELLOW 3 | index.html at 1440×900, sim time 29.0s |
| `public/images/basketball/court-shot-release.png` | WHITE releasing a three from the arc while BLACK and YELLOW crash the hoop, scoreboard top-left | index.html at 1440×900, sim time 33.5s |

Never include `tJ6fU1cwFCPS4lgy.mp4`. It's the third-party reference video the court was built from.

### Emberhollow (`test-game`)

A small playable top-down action RPG in a pixel-art village at dusk. You fight stag-beetle
"shellbacks", collect the embers they drop and bring five to the sealed gate.

- **Source:** `pix/test-game/` (village.html) · **Stack:** three.js 0.160 (jsdelivr import map), plain ES modules with no build step, canvas-painted textures, instanced foliage and grass, a custom dither post pass with vignette, DOM HUD and dialogue
- **Run:** `python3 -m http.server 8765` in `pix/`, then open `/test-game/village.html`. WASD or arrows move, J, Space or click attacks, K or Shift rolls, E talks, the mouse wheel zooms.

| File | Shows | Captured |
|---|---|---|
| `public/images/test-game/shellback-fight.gif` | The hero, with the cat at his feet, meets a shellback in the plaza: two sweeps with hit flashes, a golden spin finisher, shell halves flying off, an ember drop | village.html at 1440×900, played by a scripted bot on a virtual clock at 15fps, sim time 19.3–24.5s, a 640×400 crop scaled exactly 1.5× to 960×600, with a 0.4s crossfade loop. 4.87s, 73 frames |
| `public/images/test-game/plaza-spin-attack.png` | The spin attack's golden crescent hitting a shellback, with the full HUD (5 hearts, runes 0/5), the glowing well, the hooded stranger, the cat and a timber house | village.html at 1440×900, bot play, sim time ≈ 22.5s |
| `public/images/test-game/sealed-gate-dialogue.png` | At the sealed gate with 5 embers, a swirling void in the arch, and the dialogue "You press 5 embers into the runes. The stone drinks the warmth." | village.html at 1440×900, after about 62s of bot play, sim time ≈ 68.7s |
| `public/images/test-game/gate-open.png` | The gate open and glowing warm, with the banner "Somewhere, a bell rings." The HUD shows 2 of 5 hearts | village.html at 1440×900, sim time ≈ 76s |

**How the pix media was made.** An init script took over `performance.now` and
`requestAnimationFrame`, so each frame advanced exactly 1/60s of simulated time and the frames are
perfectly even. Scale factors are whole numbers so the pixel art stays sharp. Emberhollow was played
by a bot pressing the game's real keys.

### BeanX (`beanx`)

An AI coffee guide for iOS. Scan a coffee packet to get a brew recipe for those beans, follow a guided
brew timer, and log every cup to a passport with a map and a shareable recipe card.

- **Source:** `BeanX-APP/` · [frontend](https://github.com/xhxaidi/BeanX_frontend) · [backend](https://github.com/xhxaidi/BeanX_backend) · **Stack:** Expo SDK 54 (expo-router v6), React Native 0.81, TypeScript, iOS 26 Liquid Glass native tabs, react-native-maps (Apple Maps), Clerk auth, Gemini 2.5 Flash, and a Bun + Elysia + Prisma backend on Neon Postgres
- **Run:** the existing dev-client build on the iPhone 17 simulator (iOS 26.4). Metro ran as `npx expo start --dev-client --no-dev --minify` with `EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY=REPLACE_ME EXPO_PUBLIC_API_URL=` set for that process only. That puts the app in its standalone mode: demo auth, seed data, no backend. Screens were opened with `frontend://` deep links and captured with `simctl io`, with the status bar fixed at 9:41.
- **Caveats:**
  - The passport shows the app's built-in demo user ("Sam") because the Clerk session had expired.
  - The recipe is the app's canned fallback ("Morning Clarity · V60"), not a live Gemini answer. The direct-Gemini path needs an `AIza…` key and the local key starts with `AQ.`.
  - Re-shoot signed in for real data.

| File | Shows | Captured |
|---|---|---|
| `public/images/beanx/logo.png` | BeanX app icon: a cherry-red line-art pour-over brewer on a cream square, with the dripper and carafe forming an X and a coffee bean in the base | Copied from `frontend/assets/images/logo.png` (the `icon` in app.json), 2000×2000, no transparency |
| `public/images/beanx/logo-mark.png` | The same mark on a transparent background, for placing over any colour | Copied from `frontend/assets/images/logo-mark.png` (used in-app by `BeanXMark` in `src/ds/icons.tsx`), 1683×1683 with transparency |
| `public/images/beanx/scan-to-recipe.gif` | The Brew tab's "Scan your beans", the camera viewfinder, the scan sweep, the detected-bean card (Yirgacheffe Konga, flavor tags) with method chips, "Brew it with V60", then the recipe card (dose, water, temperature, grind, time) | `frontend://brew`, then the scan button, shutter and V60. 440×956, 15fps, 8.1s, loops |
| `public/images/beanx/brew-timer.gif` | The guided brew session: dial timer counting 0:40 to 0:47, the step auto-advancing from Bloom (33g) to First pour (150g), the progress bar filling | `frontend://brew-guide?id=e-yirgacheffe-konga&autostart=1`. 440×956, 15fps, 8.0s, loops |
| `public/images/beanx/passport.png` | Passport, "Sam's brew log": stat tiles (brews, favorite method, average rating), bean entry cards with ratings and flavor tags, the Liquid Glass tab bar | `frontend://passport`, 603×1311 (half of the 1206×2622 native size) |
| `public/images/beanx/passport-map.png` | Passport's Map tab: Apple Maps with origin pins (Ethiopia, Kenya, Colombia), tiles for origins, cafés and continents, "Your coffees" chips | `frontend://passport`, then the Map tab, 603×1311 |
| `public/images/beanx/recipe.png` | Brew chat after a scan: the barista prompt, the recipe card "Morning Clarity · V60" with "Brew this now" and "Save to my passport", follow-up chips | End state of the scan flow, 603×1311 |
| `public/images/beanx/share-card.png` | The "Share recipe" sheet: the brewer's recipe card (Yirgacheffe Konga, 5★, flavor tags, recipe grid, tasting-note quote) with an "Include my note" toggle | `frontend://share/e-yirgacheffe-konga`, 603×1311 |
| `public/images/beanx/explore.png` | Explore, "Explore the bean world": a search bar, coffee origins with flags, the brew-method list (V60, French press, Aeropress, Moka, Chemex) | `frontend://explore`, 603×1311 |

Skipped: the coffee detail screen (`coffee/[id]`), because its "SWEETNESS" label wraps as "SWEETNE / SS".
That's a layout bug to fix before capturing it.

### Sombra (`sombra`)

The landing site for Sombra, a private, post-quantum, Solana-native wallet. It has live ASCII, WebGL
and three.js visuals and an interactive wallet prototype.

- **Source:** `sombra/` · **Stack:** Next.js 16, React 19, three.js
- **Run:** `npx next build`, then `npx next start -p 3100`. Each asset renders alone at `/boards/<Name>`; `/boards` lists them all. Captured with Node Playwright in headed Chromium. The animated boards were rendered frame by frame on a frozen clock. The wallet was recorded in real time.

| File | Shows | Captured |
|---|---|---|
| `public/images/sombra/ascii-blackhole.gif` | ASCII black hole: an orange ring of characters swirling around a dark centre (`Main.jsx`) | `/boards/Main` at 1600×1180, cropped around the ring to 800×730. 5.3s, 15fps. The loop point is the closest-matching frame with a 0.4s crossfade, so the characters blend briefly there |
| `public/images/sombra/quantum-computer.gif` | three.js wireframe of a quantum-computer dilution fridge (gold plates, copper wiring) splitting into 4 stages and rejoining while it turns (`Quantum.jsx`) | `/boards/Quantum` at 1200×1500, cropped to 900×1500, encoded at 432×720 · 12fps · 32 colours (7.3MB). 9s, one split-and-rejoin cycle, seamless. The spin was raised to one turn per 9s (about 2.8× the site's speed) so the loop closes |
| `public/images/sombra/blobs.gif` | WebGL "cell foam": a cluster of glowing bubbles with bright seams, drifting, swelling and shrinking (`Foam.jsx`) | `/boards/Foam` at 1600×1180, cropped to 800×656 grayscale. 8s, 15fps, seamless forward-and-back loop (8.2MB) |
| `public/images/sombra/wallet-ui.gif` | Wallet prototype flow: the welcome screen with a pulsing orb, Skip, the dashboard loading, claiming devnet tokens, shielding 250 USDC (STARK "proving" bar, then Done), the "Shielded" toast (`Wallet.jsx`) | `/wallet` at 390×844, 2× scale, encoded at 460×996. 10.1s, 15fps, real-time recording. White tap rings were added at capture so the taps are visible |
| `public/images/sombra/landing-hero.png` | Landing hero: the "Privacy that Outlives Quantum" headline, the nav and the ASCII black hole band | `/` at 1440×900, top of the page |
| `public/images/sombra/landing-wallet-tour.png` | Scroll-driven wallet tour, chapter "01 · One wallet, two balances": the phone dashboard flanked by feature cards | `/` at 1440×900, scrolled to 2700px |

"Blobs" here means the WebGL `Foam.jsx`. The landing page itself uses a dimmer ASCII version
(`Cells.jsx`, "ASCII Cell Foam") in its "Every balance, a sealed cell" section. That one isn't
included yet.

Not copied: `sombra-demo.mp4` (85MB) and `sombra-tour.mp4` (66MB) are under GitHub's 100MB limit but
too heavy for this repo. Compress them before adding them to `public/videos/sombra/`.
