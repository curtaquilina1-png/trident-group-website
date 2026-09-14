# Trident Group Solutions Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build and validate the approved Trident Group Solutions multi-page static website for GitHub Pages.

**Architecture:** Dependency-free HTML, CSS, and JavaScript with crawlable individual pages. Shared assets implement consistent navigation, portfolio filters, cookie preferences, and the adaptive enquiry flow.

**Tech Stack:** HTML5, CSS3, browser JavaScript, Node.js built-in test runner, GitHub Pages.

**Spec:** `docs/superpowers/specs/2026-09-14-trident-group-website-design.md`

## Global Constraints

- Use no invented facts, statistics, accreditations, clients, addresses, project values, testimonials, or stock imagery.
- Preserve exact placeholders for unverified business information.
- Use semantic, keyboard-accessible, mobile-first markup with visible focus and reduced-motion support.
- Keep all pages functional without a build step.

---

### Task 1: Acceptance checks

**Files:** Create `tests/site.test.mjs`; create `package.json`.

- [ ] Add tests for required pages, metadata, accessibility landmarks, placeholders, and adaptive-form hooks.
- [ ] Run `npm test` and confirm failure because the website files do not exist.

### Task 2: Shared experience and homepage

**Files:** Create `assets/site.css`, `assets/site.js`, `index.html`, `404.html`, `CNAME`.

- [ ] Implement the industrial visual system and responsive navigation.
- [ ] Implement the approved homepage sections and mobile WhatsApp action using the verified placeholder.
- [ ] Run `npm test` and use failures to guide remaining pages.

### Task 3: Service, audience, and company pages

**Files:** Create division, audience, about, equipment, contact, insights, and service HTML pages.

- [ ] Add unique titles, descriptions, canonical URLs, breadcrumbs, and direct verified copy.
- [ ] Include only confirmed services and equipment/access statements.

### Task 4: Portfolio and enquiry journey

**Files:** Create `our-work.html`, `request-a-quote.html`; modify `assets/site.js`.

- [ ] Add anonymised selected-work records and keyboard-operable filters.
- [ ] Add role-adaptive fields, validation, privacy wording, file limits, spam trap, reference and next steps.

### Task 5: Legal and technical SEO

**Files:** Create legal pages, `robots.txt`, `sitemap.xml`, `site.webmanifest`.

- [ ] Add conservative draft legal copy with launch-review warnings.
- [ ] Add crawl controls, sitemap entries, local-business JSON-LD with placeholders, and manifest.

### Task 6: Verification and GitHub handoff

**Files:** Modify `README.md`.

- [ ] Run `npm test` and a local HTTP smoke check.
- [ ] Inspect mobile and desktop renders for overflow and broken interaction.
- [ ] Commit to a dedicated branch and publish the verified source to the correct public repository.
