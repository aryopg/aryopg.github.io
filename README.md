# aryopg.com

Personal website for Aryo Pradipta Gema. Bauhaus palette, Computer Modern Roman type.
Built as self-contained HTML pages — no build step, no framework install.
Hosted on **GitHub Pages** (repo `aryopg/aryopg.github.io`, custom domain `aryopg.com`).

## Pages & URL layout
Clean URLs come from a directory layout (GitHub Pages serves the folder's `index.html`):

- `index.html` → `aryopg.com/` — home (about, news, selected publications, contact)
- `publications/index.html` → `aryopg.com/publications` — full list with type filters
- `cv/index.html` → `aryopg.com/cv` — CV (also offers `cv.pdf` for download)
- `Nav.dc.html` (root) — shared sidebar, theme toggle, and the easter egg (imported by every page)
- `support.js` (root) — the runtime that renders the pages (do not edit; see note below)

Shared files (`Nav.dc.html`, `support.js`, `data/`, `cv.pdf`) live at the repo root and are
referenced by **root-absolute paths** (`/support.js`, `/data/…`). Keep internal links
absolute — `Nav` is injected into each page's context, so relative paths break in subfolders.

## Updating content — edit one file, push, done
All content lives in `data/`:

| To change…              | Edit                    |
|-------------------------|-------------------------|
| Name, bio, links        | `data/site.js`          |
| News / updates feed     | `data/news.js`          |
| Publications            | `data/publications.js`  |
| CV (education/jobs/etc.) | `data/cv.js`           |

Each file is commented with the shape of an entry. Adding a paper or news item =
copy a line, edit it, commit. The home page auto-shows the latest 5 news items and
any publication marked `selected: true`.

Replace the CV PDF by overwriting `cv.pdf`. Add your photo as `photo.jpg` and point
the `[ photo ]` placeholder in `index.html` at it.

## Easter egg
Type `cot` anywhere on the site (or click the faint `cot↵` in the sidebar) to open a
Chain-of-Thought Faithfulness audit mini-game. Scenarios live in `Nav.dc.html`.

## Dark mode
Light/dark toggle in the sidebar; respects the visitor's system preference and
remembers their choice (localStorage).

## SEO / Google Knowledge Panel
- JSON-LD `Person` structured data is embedded in `index.html` (`sameAs` links to
  Scholar, GitHub, X, LinkedIn — the strongest signal for a knowledge panel).
- Per-page `<title>`, meta description, canonical, and Open Graph tags are set.
- `sitemap.xml` and `robots.txt` are included.
- After deploy: submit the site in Google Search Control and request indexing.

## Deploy — GitHub Pages
1. Push this folder to the `aryopg/aryopg.github.io` repo, `main` branch. Every push
   auto-publishes (no build step).
2. Repo **Settings → Pages → Source = Deploy from a branch → `main` / `/ (root)`**.
3. **Custom domain:** set `aryopg.com` (the `CNAME` file already contains it); after the
   certificate provisions, tick **Enforce HTTPS**.
4. **DNS (Cloudflare):** point the apex at GitHub Pages — `A` records to
   `185.199.108.153`, `.109.153`, `.110.153`, `.111.153` (plus the matching `AAAA`), or
   CNAME-flatten `aryopg.com` → `aryopg.github.io`. Set the records to **DNS only (grey
   cloud)** so GitHub can issue the cert; if you later enable the Cloudflare proxy, set
   SSL/TLS mode to **Full (strict)** to avoid a redirect loop.

`CNAME` (custom domain) and the empty `.nojekyll` (so Jekyll leaves the files alone) are
required at the repo root. There is **no `_redirects`** — that was Cloudflare-only; clean
URLs now come from the directory layout above.

> **Project pages** (e.g. `aryopg.com/locos`) live in their own repos: with the custom
> domain set on this user-site repo, GitHub automatically serves each project repo at
> `aryopg.com/<repo-name>/`.

## Local preview
Run a static server from the repo root (don't use `file://` — pages load data via
`import('/data/*.js')` and `fetch`, which need HTTP):

    python3 -m http.server 8000

Then visit `http://localhost:8000/`, `/publications/`, `/cv/`. A plain static server
resolves the folder URLs the same way GitHub Pages does.

## Note on `support.js`
It's generated (`do not edit`) — with one deliberate exception documented in `CLAUDE.md`:
`COMPONENT_DIR` is `""` so `<dc-import>` fetches components by root-absolute path
(`/Nav.dc.html`), which is what makes the subfolder pages work. Re-apply if regenerated.
