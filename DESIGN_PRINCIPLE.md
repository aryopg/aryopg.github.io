# Design Principles

This document defines the visual and interaction rules for `aryopg.com`. The current design is explicitly Bauhaus-inspired, adapted for an academic/research personal website. Future edits should preserve this language unless there is an explicit redesign.

## Design Intent

The site should feel like an academic personal website with a precise Bauhaus-inspired editorial character:

- serious but not sterile
- research-first, not marketing-first
- typographic, sparse, and readable
- geometric accents used sparingly
- fast static pages with minimal interaction

Avoid turning the site into a startup landing page. New features should support scanning research, publications, CV, contact details, and project pages.

## Bauhaus Inspiration

The visual language borrows from Bauhaus principles: clear geometry, functional composition, strong primary accents, disciplined typography, and minimal ornament. The goal is not to mimic a poster literally, but to use Bauhaus ideas to make a research site feel distinctive, structured, and legible.

In practice:

- use simple geometric forms: square, circle, triangle, line
- use strong red/blue/yellow accents against paper/ink neutrals
- use asymmetry and spacing intentionally
- prefer function over decoration
- make hierarchy through type, borders, and layout rather than imagery or effects
- keep components planar and print-like
- avoid soft SaaS conventions such as rounded cards, gradients, glass effects, and decorative blobs

## Active Pages

The active public pages are:

- `index.html`: home page
- `publications/index.html`: publication list
- `cv/index.html`: CV
- `Nav.dc.html`: shared sidebar and theme toggle

## Color System

Use the existing CSS variables. Do not introduce a new palette unless doing a deliberate redesign.

### Light Theme

```css
--paper: #f2efe6;
--ink: #16120d;
--muted: #6f685c;
--line: #16120d;
--line-soft: #d8d2c4;
--red: #d2402c;
--blue: #234a9e;
--yellow: #b98a10;
```

### Dark Theme

```css
--paper: #15120d;
--ink: #efeadf;
--muted: #9a9282;
--line: #efeadf;
--line-soft: #352f26;
--red: #e8614b;
--blue: #6f9be0;
--yellow: #f1b338;
```

### Usage Rules

- `--paper`: page background and panel background.
- `--ink`: main text, hard borders, active nav marks.
- `--muted`: dates, metadata, secondary text.
- `--line`: strong dividers and primary borders.
- `--line-soft`: subtle dividers and placeholder backgrounds.
- `--blue`: links and research/navigation accents.
- `--red`: availability/accent labels and occasional warning-like emphasis.
- `--yellow`: selection color and limited highlight/availability tint.

Use `color-mix()` only for soft overlays or shadows, as already done in the availability banner and modal overlay.

## Typography

The site uses Computer Modern web fonts:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/aaaakshat/cm-web-fonts@latest/fonts.css">
```

### Font Families

- Main prose and headings: `'Computer Modern Serif', Georgia, serif`
- Metadata, labels, dates, buttons: `'Computer Modern Typewriter', monospace`

### Type Scale

Follow the existing scale:

- Home hero heading: `42px`, `line-height: 1.12`, bold.
- Page headings: `40px`, bold.
- Sidebar name: `33px`, bold.
- Section item titles: `19px-20px`, bold.
- Body prose: `18px-19px`, `line-height: 1.45-1.6`.
- Metadata/date labels: `12px-13px`, typewriter.
- Small helper labels: `11px-12.5px`, typewriter.

### Text Rules

- Keep prose concise and research-specific.
- Use uppercase typewriter labels for sections such as `NEWS`, `SELECTED PUBLICATIONS`, `AVAILABLE`.
- Use letter spacing only for small typewriter labels, usually `.06em` to `.16em`.
- Do not use large marketing copy, slogans, or decorative taglines beyond the current home hero.

## Layout

The main site shell is a two-column layout:

```html
<div data-shell style="display:flex;min-height:100vh;background:var(--paper)">
  <dc-import name="Nav" ...></dc-import>
  <main data-main style="flex:1;min-width:0;padding:72px 64px;...">
```

### Sidebar

- Width: `300px`
- Sticky on desktop: `position:sticky; top:0`
- Full-height on desktop: `height:100vh`
- Border: `border-right:2px solid var(--line)`
- Padding: `38px 30px`
- Contains:
  - red square home mark
  - name
  - role lines
  - nav links
  - external links
  - theme toggle
  - CoT easter egg trigger

### Main Content

- Desktop padding: `72px 64px`
- Home max width: `760px`
- Publication page max width: `780px`
- CV page max width: `760px`
- Long prose should stay around `62ch` when possible.

### Mobile

At `max-width: 860px`:

- Stack shell vertically.
- Sidebar becomes full-width and non-sticky.
- Sidebar border moves from right to bottom.
- Main padding becomes `40px 26px`.

Any new page should include the same responsive shell rules.

## Shape Language

The visual identity uses simple geometric marks:

- square
- circle
- triangle
- hard dividers
- boxed panels

Use these sparingly. They are accents, not decoration.

### Rules

- Corners are generally square. Avoid rounded cards.
- `border-radius:50%` is reserved for circles.
- Avoid gradients, decorative blobs, or soft modern SaaS backgrounds.
- Avoid nested cards.
- Prefer borders and whitespace over shadows.
- When shadows are used, they should be hard offset shadows using `color-mix()` with `--ink`, as in the availability banner or modal.

## Components

### Links

Inline links use blue text and usually a bottom border:

```css
color: var(--blue);
text-decoration: none;
border-bottom: 1px solid var(--blue);
```

External social links in the sidebar use muted text and become ink on hover.

Use the `target="_blank" rel="noopener"` pattern for external links. For personal profile links in the sidebar, keep `rel="me noopener"`.

### Buttons

Buttons are square-edged, typewriter, and border-first:

```css
font-family: 'Computer Modern Typewriter', monospace;
font-size: 13px;
background: none;
border: 1.5px solid var(--line);
color: var(--ink);
cursor: pointer;
padding: 6px 13px;
border-radius: 0;
```

Hover states invert or use a primary accent:

```html
style-hover="background:var(--ink);color:var(--paper)"
```

Avoid pill buttons.

### Section Headers

Section headers usually use:

- typewriter
- `12px`
- uppercase
- letter spacing `.14em-.16em`
- muted color
- bottom border or adjacent geometric mark

Example:

```html
<div style="font-family:'Computer Modern Typewriter',monospace;font-size:12px;letter-spacing:.16em;color:var(--muted)">NEWS</div>
```

### Availability Banner

The availability banner is intentionally near the top of the home page. Preserve its high visibility.

Current style:

- `border:2px solid var(--line)`
- yellow-tinted `color-mix()` background
- hard offset shadow
- red uppercase `AVAILABLE` label
- body text at `19px`, bold

Clickable inline expansion should look like a text link, not like a separate UI widget.

### Publications

Publication lists are dense and typographic:

- title first, bold
- authors or venue metadata below
- typewriter metadata for venue/year
- bottom border between items
- no card grid
- no oversized thumbnails on list pages

Project pages may include one strong figure or screenshot, but the list view should stay text-first.

### CV

CV sections use:

- strong section dividers
- date columns in typewriter
- institution/company links in blue
- compact notes under each role

Keep CV content scannable and conservative.

## Interaction Rules

Interactions should be small and purposeful:

- theme toggle
- expandable research items
- expandable availability phrase
- CoT easter egg
- publication filters

Avoid heavy animations. Existing hover transitions are short and simple.

The CoT easter egg is part of the site personality. Preserve it unless explicitly removed.

## Data And Content Rules

Most editable content should live in `data/`:

- `data/site.js`: identity, bio, availability, links, research focus
- `data/news.js`: news feed
- `data/publications.js`: publications
- `data/cv.js`: CV data

Prefer adding data fields and rendering them in templates over hardcoding repeated content in multiple pages.

Use the existing Markdown-link parser pattern for simple inline links:

```text
[Visible text](https://example.com)
```

If a new content field needs inline links, parse it into segments like the bio and sidebar role lines.

## DC Runtime Rules

The site uses `.dc.html` pages with `support.js`. `support.js` is generated and should not be edited manually.

When adding a page:

1. Include `<script src="./support.js"></script>` with the correct relative path.
2. Wrap the page in `<x-dc>`.
3. Use `<helmet>` for title, meta, canonical, CSS, and structured data.
4. Import the shared nav with `<dc-import name="Nav" current="...">`.
5. Add page logic inside `<script type="text/x-dc" data-dc-script>`.
6. Add clean URL redirects in `_redirects`.
7. Add canonical URLs and update `sitemap.xml`.

Do not edit `support.js`.

## SEO Design Rules

Design changes should support entity clarity:

- The name `Aryo Pradipta Gema` should remain prominent.
- The home page should remain the canonical profile page.
- External profiles should stay visible in the sidebar.
- Publication/project pages should link to arXiv, code, demos, and citation data where available.
- Structured data should match visible content.
- Avoid hidden SEO-only text.

## Project Page Guidelines

Future project pages should follow the site language:

- no marketing hero
- no card-heavy landing page
- title, authors, venue, links, abstract, selected figure/demo, citation
- one-column readable layout with optional compact metadata block
- `ScholarlyArticle` JSON-LD
- canonical URL
- clean redirect from `/projects/<slug>`

Use the main domain for canonical project summaries. External GitHub Pages demos can be linked as demo/code artifacts.

## Do

- Reuse the color variables.
- Reuse the shared `Nav`.
- Keep pages typographic and compact.
- Use hard borders and simple geometric accents.
- Keep content in `data/` where practical.
- Validate mobile layout at `max-width:860px`.
- Preserve light/dark theme behavior.
- Keep SEO metadata and sitemap current.

## Do Not

- Do not add a marketing landing-page layout.
- Do not add gradient blobs, bokeh, glassmorphism, or decorative background art.
- Do not create rounded card grids for research/publications.
- Do not introduce a second unrelated color palette.
- Do not hide important content only inside interactions.
- Do not restore Blog navigation unless explicitly requested.
- Do not edit `support.js` directly.
- Do not duplicate CV/publication data across multiple hardcoded pages if it can live in `data/`.

## Handoff Checklist For New Features

Before finishing a new feature or page:

1. Does it use the existing color variables?
2. Does it use Computer Modern Serif/Typewriter appropriately?
3. Does it work in both light and dark themes?
4. Does it work below `860px` width?
5. Does it avoid rounded cards and marketing-style sections?
6. Is repeated content stored in `data/`?
7. Are links styled consistently?
8. Are canonical URLs, redirects, sitemap, and metadata updated if a page was added?
9. Is structured data accurate and visible-content-aligned?
10. Has the rendered page been smoke-tested in a browser?
