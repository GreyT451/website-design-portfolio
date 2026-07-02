# CLAUDE.md — Portfolio Website

Consolidated project structure. Migrated from `~/Obsidian/Portfolio Website/` and the old scattered `~/AI-Project/Portfolio Website/` layout on 2026-07-02. Backup of both pre-consolidation trees: `/home/shreyas/_pre-consolidation-backup-2026-07-01.tar.gz`.

## Structure

```
Portfolio Website/
├── CLAUDE.md              this file
├── spark/                 live case study — index.html + assets/
├── chef/                  live case study — index.html + assets/
├── fun/                   live "Off the Clock" page — index.html + assets/{CAD,Cars,comfy UI,Renders}/
├── landing/                live home page — index.html + assets/
├── about/                 live info page — index.html + assets/
├── truckola/              live case study — index.html + assets/
├── _archive/              old drafts, frozen, never edited — subfolders per project + footer/, ideas/
└── _raw-assets/           large original photos/videos/exports, organized by project — spark/, landing/, fun/
```

Each project folder's `index.html` is the deployed markup. Case study notes and design-language documentation live in the Obsidian vault at `~/Obsidian/Portfolio Website/` (`.md` files only, source of truth for content/design decisions — see `Portfolio-website.md`).

## Rules

1. **One live `index.html` per project folder, plus its `assets/`.** Edit in place. Never create `v2`, `-new`, `-copy`, or other duplicate files alongside it — if a page needs a new direction, use `_archive/` for the old version once the new one replaces it.
2. **`_archive/` is read-only history.** Never edit or delete anything inside it. It exists so past drafts and explorations aren't lost, not as a working directory.
3. **Large originals belong in `_raw-assets/`, never in a live project folder.** A project's `assets/` folder should contain only files its `index.html` actually references. Unreferenced/original photos, videos, `.tif` files, and PDFs go in `_raw-assets/<project>/`.

## Known gaps (as of 2026-07-02 migration)

- `fun/index.html` references `assets/CAD/Gun.jpg`, which does not exist in the source assets and was not found anywhere in the old tree. The reference is broken until the file is supplied.
