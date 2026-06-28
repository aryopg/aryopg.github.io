# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Personal academic website for Aryo Pradipta Gema. Static, no build step, no framework
install, no `package.json`. Pages are self-contained `.dc.html`-style HTML files rendered
in the browser by a custom React-based runtime (`support.js`). **Hosted on GitHub Pages**
(repo `aryopg/aryopg.github.io`) with custom domain `aryopg.com` (see `CNAME`).

## Hosting & URL layout (GitHub Pages)

GitHub Pages can't strip extensions like Cloudflare's `_redirects` did, so **clean URLs
come from a directory layout** — each page is an `index.html` in its own folder:

- `index.html` → `aryopg.com/`
- `publications/index.html` → `aryopg.com/publications`
- `cv/index.html` → `aryopg.com/cv`

Shared files stay at repo **root** and are referenced by **root-absolute paths**:
`Nav.dc.html`, `support.js`, `data/`, `cv.pdf`.

**Critical convention — all internal references must be root-absolute (`/…`), never
relative (`./…`).** Because `Nav` is fetched and injected into the *host page's* DOM
context, a relative URL inside it (or inside a subdirectory page) resolves against the
wrong base. This applies to `<script src="/support.js">`, every `import('/data/*.js')`,
internal links (`/`, `/publications`, `/cv`), and `cv.pdf` → `/cv.pdf`.

`CNAME` (contains `aryopg.com`) and an empty `.nojekyll` (so Jekyll doesn't touch the
files) are required at root. There is no `_redirects` (Cloudflare-only; removed).

## Commands

There is no build, lint, or test setup. The only workflow is preview + deploy.

- **Local preview:** `python3 -m http.server 8000` from the repo root, then open
  `http://localhost:8000/`, `/publications/`, `/cv/`. Use a server, not `file://` — pages
  load content via dynamic `import('/data/*.js')` and `fetch`, which need HTTP. (A plain
  static server resolves the trailing-slash folder URLs the same way GitHub Pages does.)
- **Deploy:** push to `main` of `aryopg/aryopg.github.io`. Pages source = *Deploy from a
  branch* → `main` / root. Every push auto-publishes.

## Architecture

### The `.dc.html` format and `support.js`

Each page is an HTML file wrapping its markup in `<x-dc>…</x-dc>` plus a logic block:

```html
<script type="text/x-dc" data-dc-script>
class Component extends DCLogic {
  state = { ... };
  async componentDidMount() { /* import data, this.setState(...) */ }
  renderVals() { return { /* values bound into the template */ }; }
}
</script>
```

`support.js` is the runtime that finds `<x-dc>`, runs the `Component`, and renders. It
supports these template directives:

- `{{ expr }}` — bind a value/callback from `renderVals()`.
- `<sc-if value="{{ cond }}">…</sc-if>` — conditional.
- `<sc-for list="{{ arr }}" as="item">…</sc-for>` — repeat.
- `<dc-import name="Nav" current="home">` — embed another `.dc.html` component
  (`Nav.dc.html` is imported by every page for the sidebar/theme toggle/easter egg).
- `hint-*` attributes (`hint-size`, `hint-placeholder-count`, `hint-placeholder-val`) are
  layout/placeholder hints only — they do not affect runtime output. Keep them when copying.

**`support.js` is generated** (`// GENERATED from dc-runtime/src/*.ts — do not edit`). The
`dc-runtime` source is not in this repo, so don't hand-edit it — **with one deliberate,
documented exception:** `COMPONENT_DIR` is set to `""` (not `"."`) so `<dc-import>` fetches
components by root-absolute path (`/Nav.dc.html`) and works from pages nested in
subdirectories. **If `support.js` is ever regenerated, re-apply this edit.**

### Content lives in `data/`, not in markup

Pages pull all content from ES modules in `data/` (`site.js`, `news.js`, `publications.js`,
`cv.js`), imported in `componentDidMount`. To change copy, edit the data file —
not the page HTML. Each file documents its entry shape in comments.

- Home auto-shows the latest 5 `news` items and any publication with `selected: true`.
- Inline links use Markdown `[text](url)` syntax, parsed by a `parseLinks()` regex in the
  page's `Component` (not a full Markdown engine — only links).

### Pages

- `index.html` (root) — home (bio, news, selected publications, contact). Contains the
  JSON-LD `Person` structured data and per-page SEO/OG meta.
- `publications/index.html` — full list with type filters.
- `cv/index.html` — CV; also serves `cv.pdf` for download.
- `Nav.dc.html` (root) — shared sidebar + theme toggle + the `cot` easter egg (a
  CoT-faithfulness mini-game; scenarios are defined inline here). Imported by every page via
  `<dc-import name="Nav">`; fetched from `/Nav.dc.html`.

## Conventions

- **Design language is fixed — read `DESIGN_PRINCIPLE.md` before any visual change.** The
  site is deliberately Bauhaus-inspired (geometric forms; red/blue/yellow accents on
  paper/ink neutrals; Computer Modern type). Use the existing CSS variables (`--paper`,
  `--ink`, `--red`, `--blue`, `--yellow`, etc.); do not introduce a new palette. No rounded
  cards, gradients, glass, or SaaS landing-page styling.
- Light/dark theming is driven by the `[data-theme]` attribute and the CSS variables under
  it; an inline script in each page sets the initial theme from localStorage / system
  preference before paint.
- Styling is inline `style="…"` on elements (no separate CSS files beyond the `<style>`
  block per page). Match that.
- When editing SEO: keep the JSON-LD `sameAs` links, `sitemap.xml`, and `robots.txt` in sync
  with reality — they drive the Google knowledge panel.
