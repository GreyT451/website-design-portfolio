# Design

Two layers. The global substrate applies to every page and is scanned from
the six built pages plus Portfolio-website.md (the authority where they
disagree). The page system below it belongs to the page named in its
heading and inherits the substrate without restating it.

---

## Global substrate (all pages)

### Typography

| Role | Face |
|---|---|
| Display and editorial headlines | Fraunces |
| UI and body | Work Sans |
| Secondary body, captions, labels | DM Sans |

Documented per page deviations exist (landing grid: Barlow family; chef:
Bricolage Grotesque and Hanken Grotesk). New pages follow the system.
Reference implementation: truckola/index.html.

### Structure and discipline

- One self contained index.html per page folder. Inline CSS and JS, no
  build step, Google Fonts as the only external request.
- Editorial long scroll: type led sections, generous whitespace, hairline
  rules (ink at 10 to 16 percent alpha), content max width 1180 to 1320px,
  clamp() based fluid padding.
- Annotation discipline: every visual carries a caption or callout, set in
  DM Sans, small, often uppercase with letter spacing. Figures are framed,
  never dumped.
- Footer pattern: three part row. Copyright and type credit ("© 2026
  Shreyas Gharat. Set in Fraunces, Work Sans & DM Sans."), back to top
  link, "Designed & built by hand."
- ::selection tinted to the page accent. Scroll progress indicators and
  fixed atmosphere layers (grain) are established precedents.
- Reduced motion media checks appear in existing pages and new pages keep
  the pattern, as a page level practice (site accessibility standard
  remains an open item per PRODUCT.md).

### Embed constraints (inherited from PRODUCT.md, plus code precedent)

- Deployed via GitHub Pages, embedded in Wix via the Embed HTML element
  in Website address mode pointing at the page's GitHub Pages URL; Code
  mode (pasted HTML) where page to Wix messaging is needed.
- No viewport height dependent layouts (100vh sections, vh based pinning).
  Chef shipped broken inside the embed until its viewport height CSS was
  removed. Measure elements, not the viewport.
- Explicit block display and full width on sections (landing precedent:
  the host flex context can lay sections side by side otherwise).

### Copy rules (inherited from PRODUCT.md)

No hyphens anywhere in page copy including compound adjectives and ranges
(rewrite instead). No em dashes. No fabricated or unvalidated metrics. No
AI sounding language. Verified programmatically after build.

---

## Wise Cart page system

Everything in this section is a fresh proposal for this page. Wise Cart
owns accent, CMF treatment, imagery, and motion per the site's cohesion
and distinction split. Type and structure inherit from the substrate.

### Concept: the page is the strip

The product's one expressive element is the LED strip on the handle that
shifts along a balance color scale while everything else is quiet light
gray polymer and graphite. The page borrows exactly that logic: a
monochrome studio surface where color appears only as light emitted by
the strip motif. No decorative color anywhere else. The page itself
behaves like the cart: calm object, live signal.

Scene sentence: a reviewer scrolls at a desk in daylight; the product
lives under bright retail light; the surface is bright, clinical, and
still, and the only color is the signal.

### Color

Base is a cool neutral studio white (chroma near zero, deliberately not
the warm paper of chef and truckola, and not another red accent page;
about, fun, landing, and truckola all run reds). All chroma on the page
comes from the LED spectrum, used as emitted light: thin strips, glows,
underlines. Never as fills for panels, buttons, or text blocks.

| Token | Value | Role |
|---|---|---|
| --studio | #F4F5F3 | Page base, cool neutral studio white |
| --studio-2 | #E9EBE8 | Panel and placeholder tint |
| --ink | #131511 | Text, near black |
| --ink-soft | #43463F | Secondary text (passes 4.5:1 on --studio) |
| --graphite | #26282A | Product strap and wheel tone, dark UI chrome |
| --void | #0D0E0C | Dark chapter base (display section, hero title block) |
| --line | rgba(19,21,17,.14) | Hairlines on light |
| --line-d | rgba(244,245,243,.16) | Hairlines on dark |
| --led-blue | #3B82F6 | Spectrum stop: meat, seafood |
| --led-green | #2EC06B | Spectrum stop: fruits, vegetables |
| --led-yellow | #F2C230 | Spectrum stop: dairy |
| --led-red | #E5484D | Spectrum stop: fats, sugar, oil |
| --strip | linear-gradient(90deg, --led-blue, --led-green, --led-yellow, --led-red) | The balance spectrum |

Category colors come from the project's own display legend. No single
spectrum stop is ever promoted to a flat accent: the LED is framed as
balance, not good versus bad, and a green interaction accent would
reintroduce health coding. All interaction states (hover, focus, active,
selection) use the gradient underline or a gradient edge; focus rings use
--ink on light and --studio on dark.

### The strip motif

One device, used consistently, nowhere decorated beyond it:

- A 3px scroll progress strip fixed at the top edge, filling left to
  right with the spectrum gradient as the reader moves through the page.
  The page reads its own balance as you shop it.
- Section dividers: a short 2px strip segment instead of a full hairline
  where a chapter changes.
- Figure accents: active or hovered figures get a 2px strip edge on one
  side (top or bottom, never left or right side stripes).
- In the dark display chapter, the strip renders with a soft glow
  (box shadow of its own color), since there it depicts the actual LED.

### Layout and section order

Long scroll, alternating light studio and two dark chapters. Sections and
their required imagery, driven by the source PDF:

1. **Hero** (light): final render, white cart on studio ground. Title in
   Fraunces, tagline, LED strip draws in under the title on load.
2. **Meta strip**: bracketed [course] [school] [duration] row, DM Sans.
   Stays bracketed.
3. **Challenge** (dark chapter 1): the problem framing and three failure
   points from the PDF, set as an annotated list, not a card grid.
4. **Concept** (light): concept render (blue basket cart) plus the three
   hardware pieces as an annotated diagram row: handle base scanner, LED
   balance strip, under basket weight sensing. Balance framing, not good
   versus bad.
5. **Why this stack** (light): the technology reasoning as a short
   rejected/rejected/chosen sequence. Full basket image detection
   rejected (stacking and occlusion), lidar rejected (disproportionate
   hardware), scan plus weight chosen, with the 2024 Amazon Just Walk
   Out pullback as commercial precedent.
6. **Process** (light): sketches in a horizontal scroll shelf (the aisle),
   drag or scroll to move along it. Form exploration lineup and the
   handle frame family as wide figures. Refinement stage: sketchbook
   pages, foam and cardboard prototypes.
7. **The display** (dark chapter 2): the LED legend rebuilt as live HTML
   (not an image), category rows with their spectrum bars, next to the
   handle unit mockup render. This is where the strip motif glows.
8. **User flow** (dark, continues chapter 2): scan, shop, checkout as
   three steps with the app mockups. Steps advance by scroll position
   within the section, element measured, no viewport pinning.
9. **Business case** (light): revenue stream roles, manufacturing cost,
   market figures, retail chains. Only figures already present in the
   source PDF; nothing new is invented.
   Copy lock flag: the source PDF's market figures are internally
   inconsistent ($23B headline vs $28.3 billion body; $4.9B US headline
   vs $4,938 billion body). These must be resolved or dropped when copy
   is written; they may not be reproduced as printed.
10. **Final renders** (light): grid of finals. No cart nesting render;
    that design question is unresolved and is not visualized.
11. **Reflection**: bracketed placeholder paragraphs. Stays bracketed.
12. **Footer**: substrate pattern verbatim.

### Imagery

- Interim assets are cropped from the source PDF export (real renders,
  sketches, prototypes, app mockups) into wisecart/assets/, replaced by
  clean exports later. No empty gray boxes: the project has real imagery
  and the page uses it from day one.
- Renders sit on the studio base with no added frames (their own studio
  ground merges with the page). Process imagery (sketches, prototypes)
  gets hairline frames and DM Sans captions.
- Any slot with no usable PDF crop gets the placeholder treatment: a
  --studio-2 block, hairline frame, 2px strip edge, and a DM Sans caption
  naming exactly what belongs there.
- Alt text names the object specifically ("final render, cart with twin
  baskets under studio light", not "cart render").
- Content color is exempt from the chrome rule: photographs, app UI
  mockups, and the nutrition pyramid carry their own color as content.
  The emitted light rule governs page chrome only. App mockups sit in
  neutral graphite device frames so their orange UI reads as the app's
  own interface, never as a page accent.

### Motion

Dynamic and fluid is the direction; the budget is spent on choreography,
not on per element gimmicks. Vanilla JS, IntersectionObserver plus one
scroll handler, transform and opacity only, exponential ease out curves
(cubic-bezier(.16,1,.3,1) family). No motion library.

- Load: hero render settles (small translate and fade), then the LED
  strip draws in under the title, once.
- Scroll: the progress strip fills continuously. Figures reveal with a
  short rise and fade, staggered when they arrive as a group, and each
  reveal enhances an already visible default (content never hidden until
  animated).
- The aisle shelf scrolls horizontally with inertia; wheel and drag both
  work; keyboard focus scrolls items into view.
- The user flow steps crossfade and slide as the reader passes element
  measured thresholds. No scrolljacking, no pinned 100vh scenes.
- Dark chapters: the strip glow breathes very slowly (opacity 0.85 to 1),
  the one ambient animation on the page.
- prefers-reduced-motion: every entrance becomes an instant or crossfade
  state, the progress strip stays but fills without transition, the
  breathing glow stops, the aisle becomes a plain scrollable row.

### What this page does not do

- No warm paper base, no red accent (five pages already own those moves).
- No spectrum colors as text, panel fills, or button backgrounds.
- No card grids for the challenge or business sections; annotated lists
  and figure rows instead.
- No cart nesting imagery.
- No invented metrics beyond the PDF's own figures.
