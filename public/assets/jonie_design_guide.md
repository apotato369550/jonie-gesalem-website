# Jonie Gesalem Website — Design Guide

**Design Intent**: Royal Gold and Blue — a personal legacy site that reads like a formal calling card: dignified, civic, rooted in 40 years of Chinese-Filipino business leadership in Cebu. Respect, continuity, humility, service.

**Reference Points**: Rotary calling card (royal blue + gold palette, Chinese characters 葉長青 as first-class identity), business card back (high-information, serif + sans mix, clean layout), Yap Fraternity website (editorial typography, gold header, linen texture body, generous whitespace).

**Current Stack**: React + Tailwind v4 with `@theme` tokens in `src/index.css`. Components in `src/App.jsx`. No design tokens file separate from `index.css` — all token changes land in the `@theme` block.

**Scope**: `src/index.css`, `src/App.jsx`

---

## 1. Color System

### Token Definitions

All values go inside the `@theme {}` block in `src/index.css`.

#### Brand Colors

| Token | Value | Replaces | Rationale |
|---|---|---|---|
| `--color-blue-primary` | `#1B3A8F` | `#003F87` | Pulled from calling card royal blue — slightly warmer than the current pure-navy, matches the Rotary badge hue |
| `--color-blue-dark` | `#122866` | (new) | Deeper shade for hover states, footer emphasis |
| `--color-navy-dark` | `#0D1F4E` | `#002A5C` | True dark navy for overlays and footer background |
| `--color-blue-light` | `#1B7FC4` | unchanged | Retained — useful for inline link accents |
| `--color-blue-sky` | `#5BA8D0` | unchanged | Retained — may be used for photo backgrounds |
| `--color-gold` | `#B8860B` | `#C9900C` | Darker, more aged gilt — closer to calling card gold, less orange. Antique gold rather than amber. |
| `--color-gold-light` | `#D4A017` | `#E8B84B` | Mid-tone gold for hover and secondary accent — less yellow, more warm |
| `--color-gold-pale` | `#F0E0A0` | (new) | Very pale gold tint for section backgrounds, subtle warmth |

#### Neutral / Surface Colors

| Token | Value | Replaces | Rationale |
|---|---|---|---|
| `--color-off-white` | `#F8F5EE` | `#F7F5F1` | Warmer ivory — closer to linen/paper, matches Yap site body texture |
| `--color-surface` | `#FFFFFF` | (new semantic) | Card and panel backgrounds |
| `--color-surface-warm` | `#FAF7F2` | (new semantic) | Section alternating background — slightly warmer than off-white |
| `--color-divider` | `#B8860B` | (new semantic) | Gold thin lines between sections — same as `--color-gold` |
| `--color-divider-subtle` | `#E8E0D0` | (new semantic) | Warm-gray borders on cards, inputs |
| `--color-overlay` | `rgba(13, 31, 78, 0.72)` | (new semantic) | Dark navy overlay for hero photo treatment |

#### Text Colors

| Token | Value | Replaces | Rationale |
|---|---|---|---|
| `--color-ink` | `#1C1A16` | `#1A1A1A` | Warm charcoal — near-black with a brown undertone, not cold |
| `--color-ink-muted` | `#6B6457` | `#5C5C5C` | Warm gray-brown, not neutral gray — matches the ivory background warmth |
| `--color-ink-secondary` | `#8A8070` | (new) | Even lighter, for captions, meta, timestamps |
| `--color-ink-on-dark` | `#F8F5EE` | (new) | Text on navy/dark blue backgrounds |
| `--color-ink-gold` | `#B8860B` | (new semantic) | Gold-tinted text, for highlighted names or accents in headings |

---

## 2. Typography

### Font Families

Add to `@theme {}` block. Requires Google Fonts import (see implementation note below).

| Token | Value | Replaces |
|---|---|---|
| `--font-display` | `'Cormorant Garamond', 'EB Garamond', Georgia, serif` | (new) |
| `--font-body` | `'Source Sans 3', 'Inter', system-ui, sans-serif` | replaces `--font-sans` |
| `--font-sans` | `'Inter', system-ui, sans-serif` | unchanged — retained as utility fallback |
| `--font-serif-sc` | `'Noto Serif SC', 'Songti SC', serif` | unchanged |

**Google Fonts import to add at top of `src/index.css`** (before `@import "tailwindcss"`):
```
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Source+Sans+3:wght@300;400;600;700&family=Noto+Serif+SC:wght@400;500;700&display=swap');
```

**Rationale for Cormorant Garamond**: High-contrast serif with extreme stroke variation — historically associated with refined print, law firms, luxury institutions. Pairs exceptionally well with CJK characters because its tall x-height and open apertures give room for Noto Serif SC to breathe alongside it. Not trendy. Carries formal gravitas without stiffness.

**Source Sans 3 over Inter**: Designed for editorial and UI contexts, slightly more humanist than Inter — the warmth matches the ivory background. Inter is retained as fallback.

### Type Scale

Add to `@theme {}` block:

| Token | Value | Usage |
|---|---|---|
| `--text-display` | `3.5rem / 1.15` | Hero name, page title |
| `--text-headline` | `2.25rem / 1.2` | Section headers (H2) |
| `--text-subhead` | `1.5rem / 1.3` | Card titles, org names (H3) |
| `--text-body-lg` | `1.125rem / 1.7` | Lead paragraph, hero subtitle |
| `--text-body` | `1rem / 1.65` | Body copy (current `body` setting — retain) |
| `--text-label` | `0.75rem / 1.4` | Badges, captions, uppercase labels |
| `--text-chinese-display` | `3rem / 1.0` | 葉長青 in hero |
| `--text-chinese-inline` | `1.5rem / 1.0` | 葉長青 inline in header/footer |

### Typography Rules

**Display headings** (H1, H2, section titles): `font-display`, weight 600, color `--color-ink` or `--color-blue-primary`. Never pure black on white — always warm ink on warm ivory.

**Body text**: `font-body` (Source Sans 3), weight 400, `--color-ink`.

**Labels and badges**: `font-body`, weight 700, `letter-spacing: 0.08em`, `text-transform: uppercase`, size `0.75rem`.

**Chinese characters 葉長青**: Always `font-serif-sc` (Noto Serif SC), weight 700. In hero: `3rem`, color `--color-gold` (`#B8860B`). In header/footer: `1.5rem`, color same gold or white depending on background. Never smaller than `1.25rem`. Never rendered in sans-serif.

---

## 3. Spacing & Layout Tokens

Add to `@theme {}` block:

| Token | Value | Notes |
|---|---|---|
| `--space-unit` | `8px` | Base unit — all spacing is multiples |
| `--space-xs` | `4px` | 0.5u |
| `--space-sm` | `8px` | 1u |
| `--space-md` | `16px` | 2u |
| `--space-lg` | `24px` | 3u |
| `--space-xl` | `40px` | 5u |
| `--space-2xl` | `64px` | 8u |
| `--space-3xl` | `96px` | 12u |
| `--section-padding-y` | `96px` | Vertical padding per section — editorial breathing room |
| `--section-padding-x` | `24px` | Horizontal gutter on mobile |
| `--card-padding` | `32px` | Internal card padding |
| `--max-width-site` | `1140px` | unchanged |
| `--max-width-content` | `720px` | Prose column max-width |

---

## 4. Component Style Specs

### Navbar

**Treatment**: Royal blue background (`--color-blue-primary`, `#1B3A8F`), full-width, fixed or sticky. Left: 葉長青 in gold (`1.5rem`, `font-serif-sc`, `#B8860B`) followed by "JONATHAN GESALEM" in white caps, Source Sans 3, weight 700, `0.1em` letter-spacing, `0.875rem`. Right: navigation links in white, weight 400, `0.05em` letter-spacing. Bottom border: `2px solid #B8860B` (gold underline on the nav bar itself, not per-link). No rounded corners. No box shadow.

Current: `bg-white border-b border-gray-200` → becomes `bg-[#1B3A8F] border-b-2 border-[#B8860B]`

**Hover state on nav links**: text color transitions to `#D4A017` (gold-light), transition `150ms ease`.

---

### Hero Section

**Treatment**: Full-bleed section, navy dark background (`#0D1F4E`). Two-column layout — left column (60%): text content; right column (40%): portrait photo with `--color-overlay` scrim treatment.

Left column content stack (top to bottom):
1. 葉長青 — `font-serif-sc`, weight 700, `3rem`, color `#B8860B` (gold), `letter-spacing: 0.05em`
2. Full name — `font-display` (Cormorant Garamond), weight 600, `3.5rem / 1.15`, color `#F8F5EE` (ink-on-dark)
3. Title line — Source Sans 3, weight 300, `1.125rem`, color `rgba(248, 245, 238, 0.75)`, letter-spacing `0.12em`, uppercase: "Entrepreneur · Civic Leader · Cebu"
4. Thin gold horizontal rule: `1px solid #B8860B`, width `80px`, margin `24px 0`
5. Lead paragraph — Source Sans 3, weight 400, `1.125rem`, color `rgba(248, 245, 238, 0.85)`, max-width `540px`

Right column: photo. If no full-bleed photo available, use `--color-blue-primary` (`#1B3A8F`) as background with photo cropped to portrait ratio. No border-radius on the photo — hard rectangle, flush with section edge on desktop.

Mobile: single column, text stacks above, photo becomes a shorter strip below. 葉長青 reduces to `2rem`.

---

### Section Headers (H2 reusable pattern)

Every content section header follows this pattern:
- Text: `font-display` (Cormorant Garamond), weight 600, `2.25rem`, color `--color-blue-primary` (`#1B3A8F`)
- Below text: a `3px` wide, `48px` long rule in `#B8860B` (gold), `margin-top: 12px`
- Below rule: subhead/descriptor in Source Sans 3, weight 400, `1rem`, `--color-ink-muted` (`#6B6457`)

Current: `text-3xl font-bold text-color-blue-primary` with no decorative element → add gold underline rule as a pseudo-element or an explicit `<div>` element.

---

### Cards (Companies grid)

| Property | Current | New |
|---|---|---|
| Background | `bg-white` | `bg-white` — unchanged |
| Border radius | `rounded-lg` (8px) | `rounded` (4px) — slightly less rounded, more formal |
| Border | none | `border border-[#E8E0D0]` — `--color-divider-subtle` |
| Left accent | none | `border-l-4 border-l-[#B8860B]` — 4px gold left border |
| Shadow | `shadow-sm` | `shadow-sm` — unchanged |
| Shadow hover | `hover:shadow-md` | `hover:shadow-md` — unchanged |
| Padding | `p-6` (24px) | `p-8` (32px) — `--card-padding` |
| Logo container bg | `bg-gray-100` | `bg-[#FAF7F2]` — `--color-surface-warm` |
| Company name | `font-bold text-lg text-color-ink` | `font-display font-semibold text-xl text-[#1C1A16]` — Cormorant Garamond |
| City/meta text | `text-sm text-color-ink-muted` | `text-xs text-[#6B6457] uppercase tracking-widest font-body` — small caps treatment |

---

### Organization Cards

| Property | Current | New |
|---|---|---|
| Background | `bg-white` | `bg-white` |
| Border | none | `border border-[#E8E0D0]` |
| Left accent | none | `border-l-4 border-l-[#1B3A8F]` — blue left border (contrast with companies which get gold) |
| Padding | `p-6` (24px) | `p-8` (32px) |
| Org name | `text-2xl font-bold text-color-ink` | `font-display font-semibold text-2xl text-[#1C1A16]` |
| Detail line | `text-sm text-color-ink-muted` | `text-xs text-[#8A8070] uppercase tracking-widest` |
| Body text | `text-color-ink` | `text-[#1C1A16] leading-relaxed` — unchanged effectively |

---

### Badges (org role labels)

Current: `bg-color-gold text-white px-3 py-1 rounded text-sm font-semibold`

| Property | Current | New |
|---|---|---|
| Background | `#C9900C` | `#1B3A8F` — royal blue background (not gold) |
| Text color | `text-white` | `text-[#F8F5EE]` |
| Border radius | `rounded` | `rounded-none` — rectangular, more formal |
| Typography | `text-sm font-semibold` | `text-xs font-bold uppercase tracking-widest` |
| Padding | `px-3 py-1` | `px-3 py-1.5` |

**Rationale**: Badge reads as an institutional credential, not a tag. Blue background reads as official; gold was too casual.

---

### Buttons

**Primary** (not yet in codebase — spec for future use):
- Background: `#1B3A8F` (blue-primary)
- Text: `#F8F5EE` (ink-on-dark), Source Sans 3, weight 700, `0.08em` letter-spacing, uppercase
- Padding: `12px 32px`
- Border: none
- Border-radius: `2px` — nearly square, formal
- Hover: background `#122866` (blue-dark), text `#D4A017` (gold-light), transition `150ms ease`

**Secondary / Ghost**:
- Background: transparent
- Border: `2px solid #1B3A8F`
- Text: `#1B3A8F`, same typography as primary
- Hover: background `#1B3A8F`, text `#F8F5EE`, transition `150ms ease`

---

### Dividers (between sections)

Not present in current code. Add between major `<section>` elements:

```
<div style="width: 64px; height: 2px; background: #B8860B; margin: 0 auto;" />
```

Or as a Tailwind utility: `w-16 h-0.5 bg-[#B8860B] mx-auto`

Thin centered gold bar. Not full-width. Subtle punctuation mark between sections.

---

### Footer

Current: `bg-white border-t border-gray-200`

| Property | Current | New |
|---|---|---|
| Background | `bg-white` | `bg-[#0D1F4E]` — navy-dark |
| Border | `border-t border-gray-200` | `border-t-2 border-[#B8860B]` — gold top border |
| Padding | `py-8` | `py-12 px-6` |
| Content layout | single centered copyright line | three-column: left (葉長青 + full name), center (copyright), right (contact/social if any) |
| 葉長青 in footer | absent | `font-serif-sc`, weight 700, `1.5rem`, color `#B8860B` (gold) |
| Name in footer | absent | Source Sans 3, weight 700, `0.875rem`, uppercase, `letter-spacing: 0.1em`, color `#F8F5EE` |
| Copyright line | `text-color-ink-muted text-sm` | `text-[rgba(248,245,238,0.55)] text-xs` |

---

## 5. Motif Guidance

### Chinese Characters 葉長青

These are not decorative. They are a statement of identity — family name, clan, pride. Treat them with the same visual weight as the Latin name.

Rules:
- Font always `Noto Serif SC`, weight 700. Never a sans-serif Chinese font.
- Minimum size: `1.25rem` (`20px`) at any usage
- Colors by context:
  - On dark blue (hero, footer, navbar): `#B8860B` (gold)
  - On white/ivory (card, section): `#1B3A8F` (blue-primary)
  - Never rendered in muted or secondary text color
- Placement hierarchy: appears in navbar (small, beside name), hero (large, stacked above name), footer (medium, beside name). Not in every card — that would dilute the significance.
- Letter-spacing: `0.05em` — CJK characters need a small amount of breathing room

### Texture

Apply a subtle linen/paper texture to the `body` / `--color-off-white` background. This softens the ivory and adds material warmth without visual noise.

Implementation:
```css
body {
  background-color: var(--color-off-white); /* #F8F5EE */
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4'%3E%3Crect width='4' height='4' fill='%23F8F5EE'/%3E%3Crect x='0' y='0' width='1' height='1' fill='%23EDE8DE' opacity='0.4'/%3E%3Crect x='2' y='2' width='1' height='1' fill='%23EDE8DE' opacity='0.4'/%3E%3C/svg%3E");
}
```

Alternative: use a `noise.svg` or CSS `filter: url(#noise)` approach if SVG data URI feels too brittle.

Keep the texture on `body` only — cards, navbar, footer do not get texture. Those surfaces are solid.

### Iconography

No icon library needed for this scope. The Chinese characters serve as the primary visual motif. If icons are added later:
- Use line-weight icons only, stroke weight `1.5px` — nothing filled, nothing bold
- Color: `--color-gold` or `--color-blue-primary` only
- No rounded icon styles — straight geometry (aligns with the formal register)

---

## 6. Parallelization Map

The CSS approach is Tailwind v4 `@theme` block. There are no separate token files — all tokens live in `src/index.css`. Component styling lives in `src/App.jsx` as Tailwind utility classes.

**Dependency rule**: Token changes in `src/index.css` must be applied before component utility class changes are tested, because custom token names referenced in `bg-[--token]` syntax need to resolve.

---

### Batch 0 — Design Tokens (must run first)

**File**: `src/index.css`

**Task**: Replace the entire `@theme {}` block and add the Google Fonts `@import` at the top. Full replacement — not a diff — because token names are changing, values are changing, and new tokens are being added.

Changes:
- Add Google Fonts `@import` (Cormorant Garamond, Source Sans 3, Noto Serif SC) before `@import "tailwindcss"`
- Replace all color tokens per Section 1 table above
- Add spacing tokens per Section 3 table above
- Add `--font-display` and `--font-body` tokens
- Update `body` rule: `font-family: var(--font-body)`, add linen texture background-image
- No other files touched in this batch

---

### Batch 1 — Navbar + Footer (parallel-safe after Batch 0)

**File**: `src/App.jsx` — `<header>` block (lines 7–16) and `<footer>` block (lines 83–90)

These two blocks do not share markup. They can be specced as one task for a single agent since they're in the same file, or split if agents are truly isolated per-section.

**Header changes**:
- Outer `<header>`: `bg-white border-b border-gray-200` → `bg-[#1B3A8F] border-b-2 border-[#B8860B] sticky top-0 z-50`
- Inner `<div>`: `py-12` → `py-4` — navbar is compact, not the hero
- Add 葉長青 span before H1: `<span className="font-serif-sc text-2xl text-[#B8860B] tracking-[0.05em] mr-3">葉長青</span>`
- H1: `text-4xl font-bold text-color-blue-primary mb-2` → `text-sm font-bold text-[#F8F5EE] uppercase tracking-[0.1em] mb-0`
- Remove subtitle `<p>` from navbar — subtitle belongs in the Hero section, not the nav

**Footer changes**:
- Outer `<footer>`: `bg-white border-t border-gray-200 mt-20` → `bg-[#0D1F4E] border-t-2 border-[#B8860B] mt-0`
- Inner `<div>`: `py-8` → `py-12`
- Replace single centered `<p>` with three-column flex layout:
  - Left: 葉長青 (`font-serif-sc text-2xl text-[#B8860B]`) + name ("JONATHAN GESALEM", `text-xs text-[#F8F5EE] uppercase tracking-[0.1em]`)
  - Center: copyright (`text-xs text-[rgba(248,245,238,0.55)]`)
  - Right: location/contact (`text-xs text-[rgba(248,245,238,0.55)]`, content: "Cebu, Philippines")

---

### Batch 2 — Hero Section (parallel-safe after Batch 0, independent of Batch 1)

**File**: `src/App.jsx` — current `<header>` block is serving dual purpose as hero. A new `<section>` element must be inserted after the `<header>` navbar and before `<main>`.

**Task**: Insert a new hero `<section>` element immediately after `</header>` (line 16 currently), before `<main>`.

Hero markup structure:
- Outer `<section>`: `bg-[#0D1F4E] relative overflow-hidden`
- Inner wrapper: `max-w-[1140px] mx-auto px-6 py-[96px] flex gap-16 items-center`
- Left column (text): `flex-1`
  - 葉長青: `font-serif-sc text-[3rem] text-[#B8860B] leading-none tracking-[0.05em] mb-4`
  - Name: `font-display text-[3.5rem] leading-[1.15] font-semibold text-[#F8F5EE] mb-3`
  - Title: `text-[1.125rem] text-[rgba(248,245,238,0.75)] uppercase tracking-[0.12em] font-light mb-6`; content: "Entrepreneur · Civic Leader · Cebu"
  - Gold rule: `w-16 h-[1px] bg-[#B8860B] mb-6`
  - Lead paragraph: `text-[1.125rem] text-[rgba(248,245,238,0.85)] leading-[1.7] max-w-[540px]`; content: "Forty years building Cebu. One Dunkin' Donuts in 1986 became fourteen companies across Mindanao and the Visayas. Service through Rotary, family through the Yap Fraternity."
- Right column: `w-[360px] h-[480px] bg-[#1B3A8F] flex-shrink-0` — placeholder for photo, no border-radius

**Dependency note**: Batch 1 and Batch 2 both touch `src/App.jsx`. They must NOT run simultaneously — they will produce conflicting edits. Run Batch 1 first, then Batch 2, or spec them as a single sequential agent task on the same file.

**Revised sequencing recommendation**: Combine Batch 1 + Batch 2 into a single agent task touching `src/App.jsx`, since both edit the same file.

---

### Batch 3 — Content Sections (after Batch 1+2 complete)

**File**: `src/App.jsx` — `<main>` block (lines 19–81)

**Task**: Restyle the Companies grid and Organizations list per Section 4 specs above.

Companies grid changes (map over current `.map()` block):
- Card outer div: `rounded-lg` → `rounded border border-[#E8E0D0] border-l-4 border-l-[#B8860B] p-8`
- Logo container: `bg-gray-100` → `bg-[#FAF7F2]`
- Company name: `font-bold text-lg text-color-ink` → `font-display font-semibold text-xl text-[#1C1A16]`
- City text: `text-sm text-color-ink-muted` → `text-xs text-[#6B6457] uppercase tracking-widest`

Organizations list changes:
- Article: `bg-white rounded-lg p-6 shadow-sm` → `bg-white border border-[#E8E0D0] border-l-4 border-l-[#1B3A8F] p-8`
- Badge span: `bg-color-gold text-white px-3 py-1 rounded text-sm font-semibold` → `bg-[#1B3A8F] text-[#F8F5EE] px-3 py-1.5 text-xs font-bold uppercase tracking-widest`
- Org name: `text-2xl font-bold text-color-ink` → `font-display font-semibold text-2xl text-[#1C1A16]`
- Detail line: `text-sm text-color-ink-muted` → `text-xs text-[#8A8070] uppercase tracking-widest`

Section header changes (H2 + descriptor, for both sections):
- Wrap current H2 + P in a `<div className="mb-10">` if not already wrapped
- H2: `text-3xl font-bold text-color-blue-primary mb-2` → `font-display font-semibold text-[2.25rem] text-[#1B3A8F] mb-3`
- Add gold rule after H2 (before the P): `<div className="w-12 h-[3px] bg-[#B8860B] mb-3" />`
- P descriptor: `text-color-ink-muted mb-10` → `text-[#6B6457] text-base mb-0` (margin now handled by the wrapper's `mb-10`)

Add gold section divider between Companies and Organizations sections:
- Between `</section>` and `<section>` (line 54–56): insert `<div className="w-16 h-0.5 bg-[#B8860B] mx-auto my-16" />`

---

## Open Questions

1. **Hero photo**: Is there a portrait photo available in `/assets/` for the hero right column, or should the agent leave a blue placeholder? If a photo exists, confirm path and preferred crop ratio.
2. **Navbar links**: Should the navbar include anchor links to sections (e.g., Companies, Organizations, Contact)? Currently there are no nav links in the header — confirm if they should be added in Batch 1.
3. **Contact section**: The calling card back shows phone, email, and address. Should a contact section be added below Organizations, or is that out of scope for this design pass?

## Assumptions

- Tailwind v4 is confirmed — `@theme {}` block is the correct token location, not `tailwind.config.js`.
- Cormorant Garamond is acceptable from Google Fonts — it is free and open source.
- No external texture asset is needed — the linen texture will be implemented as an inline SVG data URI in CSS.
- The `max-w-site` / `1140px` site-wide max-width is correct and unchanged.
- `src/App.jsx` is the single component file — no separate Navbar, Footer, Hero component files exist yet. All Batch 1/2/3 edits land in this one file.
- Batch 1 and Batch 2 are collapsed into a single sequential task because they edit the same file.
