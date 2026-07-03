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

## Design notes

- Each project has a design/context note in my Obsidian vault at /home/shreyas/Obsidian/Portfolio Website/. Before any design or content work on a project page, find and read its note there.
- Folder and note names in the vault do not exactly match the project folder names here (for example, the fun page's note is "Off the Clock.md" under Fun/). Search the vault folder rather than assuming a path.
- Those notes are the source of truth for design language, locked content, and known issues. If a note conflicts with what's in the HTML, ask me instead of picking one.

## Rules

1. **One live `index.html` per project folder, plus its `assets/`.** Edit in place. Never create `v2`, `-new`, `-copy`, or other duplicate files alongside it — if a page needs a new direction, use `_archive/` for the old version once the new one replaces it.
2. **`_archive/` is read-only history.** Never edit or delete anything inside it. It exists so past drafts and explorations aren't lost, not as a working directory.
3. **Large originals belong in `_raw-assets/`, never in a live project folder.** A project's `assets/` folder should contain only files its `index.html` actually references. Unreferenced/original photos, videos, `.tif` files, and PDFs go in `_raw-assets/<project>/`.

## Known gaps (as of 2026-07-02 migration)

- ~~`fun/index.html` referenced `assets/CAD/Gun.jpg`~~ — resolved 2026-07-02: the file never existed anywhere in the old tree, so the dead array entry was removed from `fun/index.html`.

## Version control

- This folder is a git repository. Claude Code operates git (init, add, commit, etc.); Shreyas speaks plain English about what he wants and Claude Code translates that into git actions.
- Commit immediately after each approved change, before starting the next task, with a one-line plain-English commit message.
- Push to origin after every commit. Local work must never end a session unpushed.
- Never commit `_raw-assets/` or `_archive/` — both are excluded via `.gitignore` and should stay that way.
- Before any large or risky change, commit first so there is a clean point to return to.
