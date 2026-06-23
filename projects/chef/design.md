# Chef — Design Doc

> Reimagined portfolio case study for **Chef**, a countertop cooking companion (Industrial Design × UX).
> This doc is the design system + content map behind `chef-reimagined.html`.

---

## 0. Meta

| | |
|---|---|
| **Project** | Chef — a countertop cooking companion |
| **Disciplines** | Industrial Design, CMF, Product UX |
| **Context** | SCAD — self-initiated concept |
| **Deliverable** | Award-style single-page case study (`chef-reimagined.html`) |
| **Source** | `Chef.pdf` / `Chef1.pdf` (full-page export of the original Wix project) + Wix "Portfolio Website" |
| **Status** | Reimagined web build, v1 |

> **Note on sources:** I could not reach the original Obsidian vault or the "portfolio website design.md" from this environment (the remote container only has the git repo), so this doc follows a standard case-study design-doc structure rather than mirroring that exact template. All substantive copy is taken verbatim from your work — nothing is omitted.

---

## 1. The brief in one line

Make home cooking effortless, personal, and joyful — by giving the kitchen a calm, tactile companion that sits between *fast-food convenience* and *the satisfaction of cooking for yourself*.

The page's single job: convince a design recruiter, in one scroll, that this is an award-level industrial-design + UX case study.

---

## 2. Design concept — "Mise en Place"

The whole piece lives on one tension that is **true to the project**:

- **Warmth** of home cooking — dusty rose, clay, paper, soft foam, kitchen light.
- **Precision** of industrial design — the project literally ships CMF specs, technical drawings, and a Do/Don't design-parameter language (clean lines, 90° angles, uniform radius, perfect geometry).

So the page reads like a **warm engineering dossier**: editorial and tactile, but structured with monospaced spec labels, figure numbers, and a precise grid. Light "prep" sections on paper alternate with full-bleed dark "service" sections built from the cinematic kitchen renders.

This deliberately avoids the generic AI-portfolio look (cream + high-contrast serif + terracotta). The accent is **dusty rose / mauve** — pulled straight from the product's own CMF — not terracotta, and the type is all grotesque + mono, no display serif.

---

## 3. Tokens

### Color

| Token | Hex | Role |
|---|---|---|
| `--paper` | `#EDE4D4` | Warm oat paper — light base |
| `--ink` | `#1B1612` | Warm near-black — text + dark sections |
| `--rose` | `#C68C84` | **Dusty rose — the product's signature CMF. Primary accent.** |
| `--rose-deep` | `#A66B63` | Rose, pressed/active |
| `--clay` | `#6E5A4C` | Taupe-brown — the design-statement material band |
| `--amber` | `#E2873A` | The app's warm glow — used *only* around the interface |
| `--sage` | `#9DB29A` | Green CMF variant — secondary, tiny doses |
| `--mist` | `#D8CCB9` | Panel / hairline tint |

### Type

| Role | Face | Notes |
|---|---|---|
| Display | **Bricolage Grotesque** 700–800 | Tight tracking, set huge. Geometric-but-warm. |
| Body | **Hanken Grotesk** 400/500 | Calm, readable. |
| Utility / data | **Space Mono** | Eyebrows, figure numbers, spec labels, captions — the "dossier" voice. |

Type scale uses `clamp()` for fluid sizing; display tracks negative, mono tracks positive (`+0.18em`, uppercase).

### Layout & signature

- **Spec rail:** a persistent edge rail with mono section numbers (`01 — PROBLEM` … `08 — IN SITU`) — the structural device. Numbering is justified here because the case study *is* a sequence.
- **The roll:** the device sits on a cylindrical roll; that cylinder becomes the recurring motif — the scroll-progress indicator and section ticks.
- **Memorable moment:** the 8-step **Storyboard pins and scrolls horizontally** as you scroll vertically.

---

## 4. Motion

| Where | Effect |
|---|---|
| Hero load | Eyebrow → headline word stagger → device render clip-in |
| Sections | IntersectionObserver fade/clip-up with child stagger |
| Full-bleed renders | Scroll parallax (image drifts slower than page) |
| Stats | Count-up on first view (100+, 7, 3, 61, 58, 31) |
| Storyboard | Sticky pin + horizontal translate driven by scroll progress |
| Links / cards | Magnetic hover, hairline underline grow |
| Pillars | Slow marquee of Enjoyable · Convenient · Personal · Informative |

All motion is disabled under `prefers-reduced-motion` (storyboard falls back to a normal grid; reveals show instantly).

---

## 5. Content map (nothing omitted)

Order of sections and the **verbatim** copy carried from the original:

1. **Hero** — "Chef", tagline, meta. Original nav: *S G · Home · Work · Fun · Info*.
2. **Problem Statement** — full quote:
   > "In today's fast-paced lifestyle, young city dwellers and busy professionals often struggle to find the time, energy, and inspiration to cook at home. They increasingly rely on fast food, frozen meals, and takeout. Compromising both their health and culinary creativity. Despite smart appliances and cooking apps, there's lack of solutions seamlessly blend convenience, personalization, and engagement to make home cooking effortless and enjoyable."
3. **Research** — 100+ Surveys · 7 Interviews · 3 Observations.
4. **Product Positioning** — "To understand the gap in the less function and more Interactive products." Axes: Single-Function / Multi-Function × Traditional / Interactive. Stats: **61%** order out due to lack of energy and time · **58%** prefers dining out · **31%** confused about what to cook.
5. **Interviews** — Age group 25–40. Personas: Significant Singles · Young City Solos · Promising Families. Quotes:
   - "At times there is no motivation to cook or i don't know what to cook. We end up ordering food or Frozen food."
   - "Health is more of a priority to me than taste."
   - "We enjoy hosting our friends with home cooked food."
   - "We prefer home cooked food. But due to our lifestyle, lack of time and energy we aren't able to do that frequently."
6. **Design Statement** —
   > "To work on a product that empowers users to express themselves, promotes engagement and inspires motivation towards the cooking process"

   Pillars: Enjoyable · Convenient · Personal · Informative.
7. **Design & Iterations** — sketches, exploded studies, cardboard + foam models.
8. **Design Parameters / Small Details** (Do · Don't):
   - **Small Details** — Using highlights in form of thin strips of light or change of material.
   - **Clean lines** — Straight lines, 90 degree angles, Minimal curved edges.
   - **Uniform Radius** — Corners are uniformly with perfect radius.
   - **Geometric shapes** — Following perfect geometry i.e. regular rectangles or squares or circles. No ovals, parallelogram, etc.
   - **Colour and Material Break** — There will be a distinct line of separation for the change in color or material of the form.
   - **Distinctive shapes** — When two elements intersect, they will blend by keeping their own identity.
9. **Components / Anatomy** — Button · Back Stand · LED indicator · Projector · Wire outlet.
10. **Usability** — Adjustable to any angle · Back Stand.
11. **Storyboard** (8 steps): 1. Buy the ingredients · 2. Scans the receipt · 3. Uploads · 4. Arrives home · 5. Clicks on the device · 6. Selects the recipe · 7. Follows the cooking steps · 8. Meal is served.
12. **Interface** — the recipe-driven app (Set Time, Shopping list, meal cards, Meals · Inventory · Routine · Events; 23 meals prepared / 43h spent).
13. **In situ** — final cinematic kitchen render.
14. **Footer** — Back to Projects.

---

## 6. Assets

Real product renders/photos extracted from the source PDF (optimized, in `./assets/`, ~2.2 MB). **No external/stock images were used — every photo is from your own work.** (Stock hosts are blocked by this environment's network policy anyway, which kept the page fully self-contained.)

Key: `hero-twin` (dusty-rose twin devices), `final-kitchen` + `kitchen-wide` (cinematic), `app-ui` / `app-screen-*` / `app-context` (interface), `detail-projector` / `detail-wire` (sage CMF macros), `anatomy-green` (components), `sketches*` / `proto-*` / `cmf-samples` (process), `story-scan*` (in-hand component prototypes), `comp-*` (positioning references), `food-collage` (takeout), `real-context`.

The four human-action storyboard steps (buy ingredients · scan receipt · upload · arrive home) use **inline SVG line icons** drawn in the project's own sketch language, so the "you" steps stay distinct from the photographed "Chef" steps.

---

## 7. Build notes

- Single self-contained file: `chef-reimagined.html` (inline CSS + JS, zero dependencies, fonts via Google Fonts).
- Quality floor: responsive to mobile, visible keyboard focus, reduced-motion respected, semantic landmarks, alt text.
- To view: open `chef-reimagined.html` with the `assets/` folder beside it.
