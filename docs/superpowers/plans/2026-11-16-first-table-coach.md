# First Table Coach Implementation Plan

**Goal:** Add the project to funnyday.xyz and publish its branded landing page.
**Architecture:** Existing static HTML/CSS/JS, same GitHub Pages deployment. Separate page assets and bilingual dictionary.
**Tech Stack:** HTML, CSS, JavaScript, local product assets.
**Spec:** docs/superpowers/specs/2026-11-16-first-table-coach-design.md

## Global Constraints
- Use verified app colors and real screenshots; preserve other projects.
- No invented pricing or live App Store claim; English/Chinese copy and keyboard-accessible controls.
- Preserve existing GitHub Pages audience and domain.

## Review Focus
- Narrow screens must not overflow.
- Both languages must update content and metadata consistently.
- Navigation, FAQ and contact links must work without extra dependencies.
- All local assets and legal links must resolve.
- Content must remain readable without JavaScript and with reduced motion.

### Task 1: Landing page
- [x] Create first-table-coach/index.html, styles.css and script.js using real assets.
- [x] Verify rendered desktop and mobile layout, bilingual behavior and links.

### Task 2: Studio integration
- [x] Add branded project card and English/Chinese copy to index.html, styles.css, i18n.js.
- [x] Update sitemap and verify homepage plus new route.

### Task 3: Publish
- [ ] Review diff and resources; commit exact verified changes.
- [ ] Publish through existing GitHub Pages branch and verify live URLs.

## Validation record
- Browser checked at 320, 421, 768 and 1440 pixels; no horizontal overflow or broken images.
- Language toggle updates content, title, metadata, image descriptions and legal anchors.
- Preview selection, native FAQ and homepage-to-landing navigation work; console clean.
- Source integrity check verified local resources, anchors, H1, IDs, JSON-LD; JavaScript syntax and whitespace checks passed.
- Independent review found CTA contrast 3.94:1; changed button background to app terracottaDark #A3511A (5.38:1 with #FDFAF4 text). Small orange labels also use dark variant.
