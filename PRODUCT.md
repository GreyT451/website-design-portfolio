# Product

## Register

brand

## Users

Primary: senior design studios and recruiters at firms including Bould
Design, KISKA, and Kohler, hiring for industrial design roles.

Secondary: creative directors evaluating process rigor and editorial
maturity.

## Product Purpose

Portfolio site of Shreyas Gharat, industrial and product designer, SCAD
graduate, M.A. Industrial Design, currently open to work. Live at
https://www.shreyasgharat.com on Wix Studio. Seven case studies total
planned; six pages currently built.

Each page is a self contained index.html in its own folder, deployed via
GitHub Pages and embedded in Wix through a Custom Element widget. Never a
plain Wix Embed widget: it has a known iframe height and scroll isolation
bug, already hit and fixed once on the home page grid. Pages must work
inside that embed context.

## Brand Personality

Editorial, restrained, and work first: type led layouts, generous
whitespace, honest copy, annotation over decoration. The site reads as one
practice, not unrelated pages. Cohesion comes from structure and type;
distinction comes from each project's own accent colour and context.

## Anti-references

- Templated sameness: pages that feel like one theme applied repeatedly.
- AI sounding language: "showcases," "leverages," "seamlessly," "robust,"
  "delve," or similar.
- Inflated claims: if a metric was never validated, it is removed, not
  softened or qualified.
- Image dumping without annotation, which reads as output, not thinking.
- Overselling student and early career work. Informal feedback framing is
  preferable to invented metrics.

## Design Principles

1. Cohesion from structure and type, distinction from each project's own
   accent and subject treatment.
2. Process and research rigor are the primary credibility signals for this
   audience, not visual embellishment.
3. Every visual needs framing or a callout.
4. Business problems are named early and explicitly.
5. Text is locked before shifting to renders and image production.

## Constraints

- Site wide type system: Fraunces (display and editorial headlines), Work
  Sans (UI and body), DM Sans (secondary body and captions). Two deviations
  exist in code: the home page grid (Barlow family, documented as an
  unresolved exception) and the chef page (Bricolage Grotesque and Hanken
  Grotesk, a documented project level choice in its page note, per the
  cohesion and distinction split). New pages follow the system.
- Writing rules bind all page copy: no hyphens anywhere including compound
  adjectives and ranges (rewrite instead), no em dashes, verified
  programmatically after build.
- Deployment: GitHub Pages plus Wix Custom Element widget, per page, always.

## Accessibility & Inclusion

Open item. No accessibility standard has been committed for the existing
six pages, and none is being adopted retroactively. To be decided.
