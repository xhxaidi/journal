# Field Journal

**Live:** https://journal.hasanzaidi.com

My portfolio, built as a leather field journal lying on a green cutting mat. A pencil draws a loading
line, the elastic band slides off, the cover swings open, and you flip through the pages. Each project
gets its own two-page spread, laid out like a notebook page: tape, stamps, tickets, sketches and
handwritten notes, a different arrangement on every spread.

## Projects in the journal

| Spread | Live | Code |
|---|---|---|
| Sombra: a redesign of a private, post-quantum Solana wallet | [sombra.hasanzaidi.com](https://sombra.hasanzaidi.com) | [sombra-landing-page](https://github.com/xhxaidi/sombra-landing-page) |
| BeanX: an AI coffee guide for iOS | not public yet | [frontend](https://github.com/xhxaidi/BeanX_frontend) · [backend](https://github.com/xhxaidi/BeanX_backend) |
| Pixel Court: a pixel-art basketball court that plays itself | [basketball.hasanzaidi.com](https://basketball.hasanzaidi.com) | [basketball-pix](https://github.com/xhxaidi/basketball-pix) |
| Pixel Dance (2B): real-time pixel-art fan animation | [2b.hasanzaidi.com](https://2b.hasanzaidi.com) | [2B-animation](https://github.com/xhxaidi/2B-animation) |
| Emberhollow: a small playable top-down action RPG | [emberhollow.hasanzaidi.com](https://emberhollow.hasanzaidi.com) | [test-rpg-game](https://github.com/xhxaidi/test-rpg-game) |
| Dilli Blocks: Delhi in voxels from OpenStreetMap, a team build led by [bluntbrain](https://github.com/bluntbrain) | [dilli.bluntbrain.com](https://dilli.bluntbrain.com) | [ncr-minecraft](https://github.com/xhxaidi/ncr-minecraft) |

## Getting around

- **Turn pages:** the arrow keys, the NEXT and PREV buttons, or the page corners.
- **Jump to a spread:** use the coloured index tabs.
- **Link to a spread:** add its id to the URL, for example `/#sombra`. The ids are `start`, `about`, `sombra`, `beanx`, `basketball`, `2b-animation`, `test-game`, `dilli` and `contact`. With no hash, the journal opens on page one.
- **Close and replay:** "Close" shuts the journal, and "tap to open" or a click on the cover opens it again. "Replay intro" runs the loader again.
- **Phones and reduced motion:** on screens narrower than 900px, or when the system asks for reduced motion, there's no 3D. The pages are stacked in one scrolling column, with the tabs as a strip along the top.

## Run it

Requires [Bun](https://bun.sh).

```sh
bun install
bun run dev       # http://localhost:5173
bun run build     # type-check, then build to dist/
bun run preview   # serve the build
```

Vercel builds and deploys `main`.

## How it's built

Vite + React + TypeScript, plus the four Google Fonts (Caveat, Permanent Marker, IBM Plex Mono,
Newsreader). There are no UI or animation libraries: the page turns are CSS 3D transforms and
transitions.

```
src/
  main.tsx          mounts the journal
  Journal.tsx       the engine: 1440×900 stage scaled to the window, loader, cover, page turns,
                    tabs, controls, #hash links, and the stacked mobile view
  pages.tsx         the fixed pages: cover, endpaper, P. 01, About, Contact, inside back cover
  bits.tsx          shared pieces: Paper (a page), Marbled, Turn (page-turn link), Shot (lazy image)
  styles.css        the mat, paper, tape, stamps and other shared looks
  projects/
    index.ts        the order of the project spreads
    <id>.tsx        one file per project: its left and right page
public/images/      the media, one folder per project (see CONTEXT.md)
```

- **Pages:** each page is drawn at 650×812 and placed with absolute positioning, like a real page layout.
- **Spreads:** spread *j* shows page 2*j* on the left and page 2*j*+1 on the right, and the page numbers follow from that.
- **Media:** every page is in the DOM at once, so images use `Shot`. It only loads once its spread is open or next to the open one, which keeps the first visit from downloading every GIF.

## Adding a project

1. Put its media in `public/images/<id>/`, and add a row for each file in [`CONTEXT.md`](CONTEXT.md). That file lists the size limits and how each file was captured.
2. Create `src/projects/<id>.tsx`. It exports `{ id, tab, color, Left, Right }`, where `Left` and `Right` each return a `<Paper>` page.
3. Add it to the list in `src/projects/index.ts`. Its tab and page numbers follow automatically.
4. Every project page links to both the live site and the source.

## Notes

- Dilli Blocks map data © OpenStreetMap contributors.
- Pixel Dance (2B) is fan art. 2B and NieR:Automata belong to Square Enix.
- The journal's look comes from a Claude design canvas, "Xaidi — Field Journal Portfolio".
