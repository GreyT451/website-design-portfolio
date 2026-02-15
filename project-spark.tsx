/**
 * Spark — UX Case Study
 * Framer custom code component
 *
 * HOW TO USE IN FRAMER
 * 1. In Framer, open the Assets panel → Code → New Code File
 * 2. Paste this entire file
 * 3. Drag the component onto the canvas
 * 4. Use Property Controls (right panel) to customise accent color,
 *    your name, and the "next project" link
 *
 * DEPENDENCIES
 * framer-motion is available natively inside Framer.
 * No additional npm installs are required.
 */

import { motion, useScroll, useTransform } from "framer-motion"
import { addPropertyControls, ControlType } from "framer"
import type { CSSProperties } from "react"

// ─────────────────────────────────────────────────────────────────────────────
// ANIMATION VARIANTS
// ─────────────────────────────────────────────────────────────────────────────

const EASE = [0.4, 0, 0.2, 1] as const

const revealVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: EASE },
    },
}

const heroVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (delay: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.65, delay, ease: EASE },
    }),
}

// ─────────────────────────────────────────────────────────────────────────────
// HELPER COMPONENTS
// ─────────────────────────────────────────────────────────────────────────────

/** Scroll-triggered fade-up wrapper — replaces IntersectionObserver */
function Reveal({
    children,
    className = "",
    style,
}: {
    children: React.ReactNode
    className?: string
    style?: CSSProperties
}) {
    return (
        <motion.div
            className={className}
            style={style}
            variants={revealVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "0px 0px -40px 0px" }}
        >
            {children}
        </motion.div>
    )
}

/** Image placeholder block */
function Ph({
    label,
    cls = "",
    style,
}: {
    label: string
    cls?: string
    style?: CSSProperties
}) {
    return (
        <div className={`ph ${cls}`} style={style}>
            <span className="ph-label">{label}</span>
        </div>
    )
}

// ─────────────────────────────────────────────────────────────────────────────
// GLOBAL CSS
// Injected via <style> — Framer's custom code environment supports this.
// Remove .reveal / .fade-up rules; framer-motion handles those now.
// ─────────────────────────────────────────────────────────────────────────────

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

  .sg-root *, .sg-root *::before, .sg-root *::after { box-sizing: border-box; margin: 0; padding: 0; }
  .sg-root { font-family: 'Inter', sans-serif; font-size: 16px; line-height: 1.7;
    -webkit-font-smoothing: antialiased; background: #FFFFFF; color: #111111; }
  .sg-root img { display: block; max-width: 100%; }
  .sg-root a { color: inherit; text-decoration: none; }

  /* ── Tokens ── */
  .sg-root {
    --bg:            #FFFFFF;
    --bg-card:       #F9F9F9;
    --bg-raised:     #F2F2F2;
    --text-primary:  #111111;
    --text-secondary:#555555;
    --text-muted:    #999999;
    --accent:        #111111;
    --border:        rgba(0,0,0,.08);
    --border-strong: rgba(0,0,0,.14);
    --section-gap:   120px;
    --content-max:   1120px;
    --rail:          48px;
    --r-sm: 6px; --r-md: 12px; --r-lg: 16px; --r-xl: 20px;
    --ease: cubic-bezier(.4,0,.2,1);
  }

  /* ── Typography ── */
  .sg-root .display-xl { font-size: clamp(44px,6vw,88px); font-weight: 700;
    line-height: 1.04; letter-spacing: -.04em; }
  .sg-root .display-lg { font-size: clamp(30px,4vw,56px); font-weight: 700;
    line-height: 1.08; letter-spacing: -.03em; }
  .sg-root .display-md { font-size: clamp(20px,2.5vw,36px); font-weight: 700;
    line-height: 1.2;  letter-spacing: -.02em; }
  .sg-root .label { font-size: 11px; font-weight: 600; letter-spacing: .12em;
    text-transform: uppercase; color: #999999; }
  .sg-root .body-lg  { font-size: 18px; line-height: 1.72; color: #555555; }
  .sg-root .body-md  { font-size: 15px; line-height: 1.7;  color: #555555; }
  .sg-root .body-sm  { font-size: 13px; line-height: 1.6;  color: #999999; }

  /* ── Layout ── */
  .sg-root .container { max-width: var(--content-max); margin: 0 auto; padding: 0 var(--rail); }
  .sg-root section { padding: var(--section-gap) 0; }
  .sg-root .divider { border: none; border-top: 1px solid var(--border); margin: 0; }

  /* ── Placeholders ── */
  .sg-root .ph { background: #F5F5F5; border: 1.5px dashed #C8C8C8; border-radius: var(--r-md);
    display: flex; flex-direction: column; align-items: center; justify-content: center;
    gap: 10px; overflow: hidden; }
  .sg-root .ph-label { font-size: 11px; font-weight: 500; letter-spacing: .08em;
    text-transform: uppercase; text-align: center; padding: 0 20px; color: #AAAAAA; }
  .sg-root .ph--hero      { height: 540px; border-radius: var(--r-xl); }
  .sg-root .ph--screen-lg { aspect-ratio: 16/9; }
  .sg-root .ph--screen-md { aspect-ratio: 4/3; }
  .sg-root .ph--screen-sm { aspect-ratio: 3/4; }
  .sg-root .ph--banner    { height: 260px; }
  .sg-root .ph--card      { height: 220px; }
  .sg-root .ph--old   { background: #FBF7F6; border-color: #DDD0CC; }
  .sg-root .ph--new   { background: #F6FAF6; border-color: #C4D8C4; }
  .sg-root .ph--final { background: #F6F7FB; border-color: #C4CADC; }

  /* ── Nav ── */
  .sg-root .nav { position: sticky; top: 0; z-index: 100; background: #111111; }
  .sg-root .nav__inner { max-width: var(--content-max); margin: 0 auto; padding: 0 var(--rail);
    height: 60px; display: flex; align-items: center; justify-content: space-between; }
  .sg-root .nav__logo { font-weight: 700; font-size: 13px; letter-spacing: .02em; color: #FFFFFF;
    border: 1px solid rgba(255,255,255,.3); padding: 5px 10px; }
  .sg-root .nav__links { display: flex; align-items: center; gap: 28px; list-style: none; }
  .sg-root .nav__links a { font-size: 13px; font-weight: 400; color: rgba(255,255,255,.55);
    transition: color .2s; }
  .sg-root .nav__links a:hover,
  .sg-root .nav__links a.active { color: #FFFFFF; }
  .sg-root .nav__resume { font-size: 13px; font-weight: 500; color: rgba(255,255,255,.55);
    border: 1px solid rgba(255,255,255,.25); padding: 6px 14px; transition: color .2s; }
  .sg-root .nav__resume:hover { color: #FFFFFF; }

  /* ── Hero ── */
  .sg-root .hero { padding-top: 80px; padding-bottom: 80px; }
  .sg-root .hero__tags { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 28px; }
  .sg-root .tag { font-size: 11px; font-weight: 500; letter-spacing: .06em; text-transform: uppercase;
    padding: 5px 12px; border-radius: 4px; border: 1px solid #DDDDDD; color: #666666; background: #FFFFFF; }
  .sg-root .tag--accent { border-color: #111111; color: #111111; font-weight: 600; }
  .sg-root .hero__title { max-width: 860px; margin-bottom: 28px; }
  .sg-root .hero__subtitle { max-width: 560px; margin-bottom: 48px; }
  .sg-root .hero__meta { display: flex; flex-wrap: wrap; gap: 32px; padding: 24px 0;
    border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); margin-bottom: 64px; }
  .sg-root .hero__meta-item { display: flex; flex-direction: column; gap: 4px; }
  .sg-root .hero__meta-key { font-size: 11px; font-weight: 600; text-transform: uppercase;
    letter-spacing: .1em; color: #999999; }
  .sg-root .hero__meta-val { font-size: 14px; font-weight: 500; color: #111111; }
  .sg-root .hero__img { width: 100%; }

  /* ── Section header ── */
  .sg-root .section-header { margin-bottom: 56px; }
  .sg-root .section-header .label { margin-bottom: 14px; }

  /* ── Stat strip ── */
  .sg-root .stat-strip { display: grid; grid-template-columns: repeat(4,1fr); gap: 1px;
    background: var(--border); border: 1px solid var(--border); border-radius: var(--r-lg); overflow: hidden; }
  .sg-root .stat-strip__item { background: var(--bg-card); padding: 32px 28px;
    display: flex; flex-direction: column; gap: 8px; }
  .sg-root .stat-strip__label { font-size: 11px; font-weight: 600; text-transform: uppercase;
    letter-spacing: .1em; color: #999999; }
  .sg-root .stat-strip__value { font-size: 20px; font-weight: 700; color: #111111; }
  .sg-root .stat-strip__sub { font-size: 12px; color: #999999; margin-top: 2px; }

  /* ── Problem ── */
  .sg-root .problem__layout { display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: start; }
  .sg-root .callout { padding: 28px 32px; border-left: 3px solid #111111; background: #F5F5F5;
    border-radius: 0 var(--r-md) var(--r-md) 0; }
  .sg-root .callout__text { font-size: 22px; font-weight: 600; line-height: 1.45; letter-spacing: -.02em; }
  .sg-root .pain-list { list-style: none; display: flex; flex-direction: column; gap: 16px; margin-top: 24px; }
  .sg-root .pain-list li { display: flex; gap: 14px; align-items: flex-start;
    font-size: 15px; color: #555555; }
  .sg-root .pain-list li::before { content: ''; flex-shrink: 0; width: 5px; height: 5px;
    border-radius: 50%; background: #111111; margin-top: 9px; }

  /* ── Goals ── */
  .sg-root .goals-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
  .sg-root .goals-card { background: var(--bg-card); border: 1px solid var(--border);
    border-radius: var(--r-lg); padding: 32px; }
  .sg-root .goals-card__title { font-size: 18px; font-weight: 700; margin-bottom: 20px;
    display: flex; align-items: center; gap: 10px; }
  .sg-root .goals-card__title .icon { width: 28px; height: 28px; border-radius: 6px;
    display: flex; align-items: center; justify-content: center; font-size: 14px; background: #F2F2F2; }
  .sg-root .goals-list { list-style: none; display: flex; flex-direction: column; gap: 14px; }
  .sg-root .goals-list li { font-size: 14px; color: #555555; padding-left: 20px; position: relative; }
  .sg-root .goals-list li::before { content: '→'; position: absolute; left: 0; color: #111111; font-weight: 600; }

  /* ── Process ── */
  .sg-root .process-track { display: grid; grid-template-columns: repeat(5,1fr); position: relative;
    margin-bottom: 48px; }
  .sg-root .process-track::before { content: ''; position: absolute; top: 22px; left: 5%; right: 5%;
    height: 1px; background: #DDDDDD; }
  .sg-root .process-step { display: flex; flex-direction: column; align-items: center; gap: 14px;
    position: relative; z-index: 1; }
  .sg-root .process-step__dot { width: 44px; height: 44px; border-radius: 50%;
    background: var(--bg-card); border: 2px solid var(--border-strong);
    display: flex; align-items: center; justify-content: center;
    font-size: 16px; font-weight: 700; color: #999999; transition: all .3s; }
  .sg-root .process-step--done .process-step__dot { background: #111111; border-color: #111111; color: #FFFFFF; }
  .sg-root .process-step__name { font-size: 12px; font-weight: 600; letter-spacing: .06em;
    text-transform: uppercase; color: #999999; text-align: center; }
  .sg-root .process-step--done .process-step__name { color: #555555; }
  .sg-root .process-cards { display: grid; grid-template-columns: repeat(5,1fr); gap: 16px; }
  .sg-root .process-card { background: var(--bg-card); border: 1px solid var(--border);
    border-radius: var(--r-md); padding: 20px 18px; }
  .sg-root .process-card__phase { font-size: 10px; font-weight: 600; text-transform: uppercase;
    letter-spacing: .1em; color: #999999; margin-bottom: 8px; }
  .sg-root .process-card__desc { font-size: 13px; color: #555555; line-height: 1.6; }

  /* ── Research ── */
  .sg-root .insight-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 20px; margin-top: 40px; }
  .sg-root .insight-card { background: var(--bg-card); border: 1px solid var(--border);
    border-radius: var(--r-lg); padding: 28px; }
  .sg-root .insight-card__num { font-size: 48px; font-weight: 700; color: #111111; line-height: 1;
    margin-bottom: 12px; letter-spacing: -.04em; }
  .sg-root .insight-card__claim { font-size: 15px; font-weight: 600; color: #111111; margin-bottom: 8px; }
  .sg-root .insight-card__detail { font-size: 13px; color: #999999; line-height: 1.6; }
  .sg-root .research-ph-row { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-top: 40px; }

  /* ── Before / After ── */
  .sg-root .ba-section { display: flex; flex-direction: column; gap: 80px; }
  .sg-root .ba-block__header { display: flex; align-items: center; gap: 16px; margin-bottom: 32px; }
  .sg-root .ba-block__title { font-size: 22px; font-weight: 700; }
  .sg-root .ba-block__desc { font-size: 14px; color: #555555; max-width: 680px;
    margin-bottom: 28px; line-height: 1.7; }
  .sg-root .ba-compare { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
  .sg-root .ba-col__badge { display: inline-flex; align-items: center; gap: 6px; font-size: 11px;
    font-weight: 700; letter-spacing: .08em; text-transform: uppercase; padding: 4px 12px;
    border-radius: 4px; margin-bottom: 12px; }
  .sg-root .ba-col__badge--old { background: #F5F5F5; color: #888888; border: 1px solid #DDDDDD; }
  .sg-root .ba-col__badge--new { background: #111111; color: #FFFFFF; border: 1px solid #111111; }
  .sg-root .ba-col__caption { font-size: 13px; color: #999999; margin-top: 12px; line-height: 1.55; }
  .sg-root .change-list { list-style: none; display: flex; flex-direction: column; gap: 10px; margin-top: 20px; }
  .sg-root .change-list li { font-size: 13px; color: #555555; padding-left: 18px; position: relative; }
  .sg-root .change-list li::before { content: '↑'; position: absolute; left: 0; color: #111111; font-weight: 600; }

  /* ── Platform split ── */
  .sg-root .platform-split { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; align-items: start; }

  /* ── Design decisions ── */
  .sg-root .decision-list { display: flex; flex-direction: column; gap: 1px;
    background: var(--border); border: 1px solid var(--border); border-radius: var(--r-lg); overflow: hidden; }
  .sg-root .decision-item { background: var(--bg-card); padding: 28px 32px;
    display: grid; grid-template-columns: 40px 1fr; gap: 20px; align-items: start; }
  .sg-root .decision-item__num { font-size: 28px; font-weight: 700; color: #CCCCCC; line-height: 1; }
  .sg-root .decision-item__title { font-size: 15px; font-weight: 600; color: #111111; margin-bottom: 6px; }
  .sg-root .decision-item__body { font-size: 13px; color: #555555; line-height: 1.65; }

  /* ── Final showcase ── */
  .sg-root .final-showcase { display: flex; flex-direction: column; gap: 24px; }
  .sg-root .final-row-1 { display: grid; grid-template-columns: 1.6fr 1fr; gap: 24px; }
  .sg-root .final-row-2 { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 24px; }
  .sg-root .final-row-3 { display: grid; grid-template-columns: repeat(4,1fr); gap: 20px; }

  /* ── Outcomes ── */
  .sg-root .outcome-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 20px; margin-top: 40px; }
  .sg-root .outcome-card { background: var(--bg-card); border: 1px solid var(--border);
    border-radius: var(--r-lg); padding: 28px 24px; display: flex; flex-direction: column; gap: 8px; }
  .sg-root .outcome-card__val { font-size: 44px; font-weight: 700; color: #111111; line-height: 1; letter-spacing: -.04em; }
  .sg-root .outcome-card__label { font-size: 13px; font-weight: 600; color: #111111; }
  .sg-root .outcome-card__note  { font-size: 12px; color: #999999; margin-top: 4px; }

  /* ── Learnings ── */
  .sg-root .learnings-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 20px; }
  .sg-root .learning-card { background: var(--bg-card); border: 1px solid var(--border);
    border-radius: var(--r-lg); padding: 28px; }
  .sg-root .learning-card__index { font-size: 11px; font-weight: 600; color: #999999;
    letter-spacing: .1em; text-transform: uppercase; margin-bottom: 14px; }
  .sg-root .learning-card__title { font-size: 16px; font-weight: 600; margin-bottom: 10px; }
  .sg-root .learning-card__body  { font-size: 14px; color: #555555; line-height: 1.65; }

  /* ── Tools ── */
  .sg-root .tools-row { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 20px; }
  .sg-root .tool-chip { background: var(--bg-raised); border: 1px solid var(--border-strong);
    border-radius: var(--r-sm); padding: 8px 16px; font-size: 13px; font-weight: 500;
    color: #555555; display: flex; align-items: center; gap: 7px; }
  .sg-root .tool-chip .dot { width: 5px; height: 5px; border-radius: 50%;
    background: #111111; flex-shrink: 0; }

  /* ── Next project ── */
  .sg-root .next-project { border-top: 1px solid var(--border); padding: var(--section-gap) 0; }
  .sg-root .next-project__inner { display: flex; align-items: center;
    justify-content: space-between; gap: 32px; }
  .sg-root .next-project__title { font-size: clamp(28px,3.5vw,52px); font-weight: 700;
    letter-spacing: -.03em; color: #111111; }

  /* ── Buttons ── */
  .sg-root .btn { display: inline-flex; align-items: center; gap: 8px; padding: 14px 24px;
    border-radius: 0; font-size: 13px; font-weight: 600; letter-spacing: .02em;
    cursor: pointer; transition: opacity .18s; }
  .sg-root .btn--primary { background: #111111; color: #FFFFFF; border: 1px solid #111111; }
  .sg-root .btn--primary:hover { opacity: .8; }
  .sg-root .btn--ghost { background: transparent; border: 1px solid #111111; color: #111111; }
  .sg-root .btn--ghost:hover { background: #111111; color: #FFFFFF; }

  /* ── Footer ── */
  .sg-root footer { background: #111111; padding: 36px 0; }
  .sg-root .footer__inner { max-width: var(--content-max); margin: 0 auto; padding: 0 var(--rail);
    display: flex; align-items: center; justify-content: space-between; }
  .sg-root .footer__copy { font-size: 13px; color: rgba(255,255,255,.45); }
  .sg-root .footer__links { display: flex; gap: 20px; }
  .sg-root .footer__links a { font-size: 13px; color: rgba(255,255,255,.45); transition: color .2s; }
  .sg-root .footer__links a:hover { color: #FFFFFF; }

  /* ── Responsive ── */
  @media (max-width: 900px) {
    .sg-root { --rail: 24px; --section-gap: 80px; }
    .sg-root .stat-strip       { grid-template-columns: 1fr 1fr; }
    .sg-root .problem__layout  { grid-template-columns: 1fr; gap: 32px; }
    .sg-root .goals-grid       { grid-template-columns: 1fr; }
    .sg-root .process-track    { grid-template-columns: repeat(3,1fr); }
    .sg-root .process-cards    { grid-template-columns: 1fr 1fr; }
    .sg-root .insight-grid     { grid-template-columns: 1fr 1fr; }
    .sg-root .research-ph-row  { grid-template-columns: 1fr; }
    .sg-root .ba-compare       { grid-template-columns: 1fr; }
    .sg-root .platform-split   { grid-template-columns: 1fr; }
    .sg-root .final-row-1      { grid-template-columns: 1fr; }
    .sg-root .final-row-2      { grid-template-columns: 1fr 1fr; }
    .sg-root .final-row-3      { grid-template-columns: 1fr 1fr; }
    .sg-root .outcome-grid     { grid-template-columns: 1fr 1fr; }
    .sg-root .learnings-grid   { grid-template-columns: 1fr; }
    .sg-root .next-project__inner { flex-direction: column; align-items: flex-start; }
  }
  @media (max-width: 580px) {
    .sg-root .stat-strip     { grid-template-columns: 1fr; }
    .sg-root .process-track  { grid-template-columns: repeat(2,1fr); }
    .sg-root .process-cards  { grid-template-columns: 1fr; }
    .sg-root .insight-grid   { grid-template-columns: 1fr; }
    .sg-root .outcome-grid   { grid-template-columns: 1fr; }
    .sg-root .final-row-2,
    .sg-root .final-row-3    { grid-template-columns: 1fr; }
    .sg-root .nav__links     { display: none; }
  }
`

// ─────────────────────────────────────────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────────────────────────────────────────

interface Props {
    designerName?: string
    accentColor?: string
    nextProjectLabel?: string
    nextProjectHref?: string
}

export default function SparkCaseStudy({
    designerName = "Shreyas Gharat",
    nextProjectLabel = "View Next Project",
    nextProjectHref = "#",
}: Props) {
    return (
        <div className="sg-root">
            <style>{css}</style>

            {/* ── NAV ───────────────────────────────────────────────── */}
            <nav className="nav">
                <div className="nav__inner">
                    <span className="nav__logo">{designerName}</span>
                    <ul className="nav__links">
                        <li><a href="#">Work</a></li>
                        <li><a href="#" className="active">Spark</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#" className="nav__resume">Resume ↗</a></li>
                    </ul>
                </div>
            </nav>

            <main>
                {/* ── HERO ──────────────────────────────────────────── */}
                <section className="hero">
                    <div className="container">

                        <motion.div
                            className="hero__tags"
                            variants={heroVariants}
                            initial="hidden"
                            animate="visible"
                            custom={0}
                        >
                            <span className="tag tag--accent">Case Study</span>
                            <span className="tag">UI / UX Design</span>
                            <span className="tag">Website Redesign</span>
                            <span className="tag">Mobile App</span>
                            <span className="tag">Client Project</span>
                        </motion.div>

                        <motion.h1
                            className="display-xl hero__title"
                            variants={heroVariants}
                            initial="hidden"
                            animate="visible"
                            custom={0.1}
                        >
                            Spark — Reimagining a Digital Experience from the Ground Up
                        </motion.h1>

                        <motion.p
                            className="body-lg hero__subtitle"
                            variants={heroVariants}
                            initial="hidden"
                            animate="visible"
                            custom={0.2}
                        >
                            A comprehensive redesign of Spark's website and mobile app, moving from
                            a cluttered, conversion-poor interface to a focused, accessible, and
                            performance-first product.
                        </motion.p>

                        <motion.div
                            className="hero__meta"
                            variants={heroVariants}
                            initial="hidden"
                            animate="visible"
                            custom={0.3}
                        >
                            {[
                                ["Role",     "Lead UI/UX Designer"],
                                ["Industry", "SaaS / B2C"],
                                ["Timeline", "14 Weeks · 2023–2024"],
                                ["Platform", "Web + iOS + Android"],
                                ["Team",     "2 Designers · 1 PM · Dev Team"],
                            ].map(([k, v]) => (
                                <div className="hero__meta-item" key={k}>
                                    <span className="hero__meta-key">{k}</span>
                                    <span className="hero__meta-val">{v}</span>
                                </div>
                            ))}
                        </motion.div>

                        <motion.div
                            className="hero__img"
                            variants={heroVariants}
                            initial="hidden"
                            animate="visible"
                            custom={0.4}
                        >
                            <Ph
                                label={"Hero Banner — Full project spread\n(desktop + mobile screens, 1440×600)"}
                                cls="ph--hero"
                                style={{ width: "100%" }}
                            />
                        </motion.div>
                    </div>
                </section>

                <hr className="divider" />

                {/* ── OVERVIEW STRIP ────────────────────────────────── */}
                <section style={{ padding: "64px 0" }}>
                    <div className="container">
                        <Reveal>
                            <div className="stat-strip">
                                {[
                                    ["My Contribution", "End-to-End Design",  "Research → Handoff"],
                                    ["Deliverables",    "120+ Screens",        "Web, iOS, Android"],
                                    ["Design System",   "Built from Zero",     "Components, tokens, docs"],
                                    ["Tools",           "Figma · FigJam",      "Maze · Loom · Notion"],
                                ].map(([label, value, sub]) => (
                                    <div className="stat-strip__item" key={label}>
                                        <span className="stat-strip__label">{label}</span>
                                        <span className="stat-strip__value">{value}</span>
                                        <span className="stat-strip__sub">{sub}</span>
                                    </div>
                                ))}
                            </div>
                        </Reveal>
                    </div>
                </section>

                <hr className="divider" />

                {/* ── PROBLEM STATEMENT ─────────────────────────────── */}
                <section>
                    <div className="container">
                        <Reveal className="section-header">
                            <p className="label">01 — Problem</p>
                            <h2 className="display-lg">What needed to change, and why</h2>
                        </Reveal>

                        <div className="problem__layout">
                            <Reveal>
                                <div className="callout">
                                    <p className="callout__text">
                                        "Users could not find what they came for — and left without
                                        converting. The product was ready; the experience wasn't."
                                    </p>
                                </div>
                                <p className="body-md" style={{ marginTop: 28 }}>
                                    Spark had a working product but a website and app that failed to
                                    communicate its value clearly. Analytics showed high bounce rates on
                                    the landing page, low feature discovery inside the app, and
                                    significant drop-off during the onboarding flow.
                                </p>
                                <p className="body-md" style={{ marginTop: 16 }}>
                                    Stakeholder interviews and a UX audit revealed that the existing
                                    design had accumulated technical debt — overlapping patterns,
                                    inconsistent hierarchy, and no design system. Mobile users were
                                    particularly underserved, with a near-direct port of the desktop
                                    experience.
                                </p>
                            </Reveal>

                            <Reveal>
                                <p className="label" style={{ marginBottom: 16 }}>Core Pain Points</p>
                                <ul className="pain-list">
                                    {[
                                        "Homepage failed to communicate the core value proposition within 5 seconds",
                                        "Navigation was multi-level and non-standard, increasing cognitive load",
                                        "Onboarding flow had 11 steps with no progress indication — 62% abandoned it",
                                        "Mobile app was a responsive clone of the desktop, not a native-feeling experience",
                                        "No design system — every new feature introduced new inconsistencies",
                                        "CTAs were buried below the fold and lacked visual hierarchy",
                                        "Typography was undersized and lacked contrast on key conversion pages",
                                    ].map((item) => (
                                        <li key={item}>{item}</li>
                                    ))}
                                </ul>
                            </Reveal>
                        </div>

                        <Reveal className="research-ph-row" style={{ marginTop: 48 }}>
                            <Ph label={"Analytics Dashboard Screenshot\n(Heatmap / session data, 16:9)"} cls="ph--banner" />
                            <Ph label={"UX Audit Summary — Annotated Screens\n(Annotated screenshots, 16:9)"} cls="ph--banner" />
                        </Reveal>
                    </div>
                </section>

                <hr className="divider" />

                {/* ── GOALS & CONSTRAINTS ───────────────────────────── */}
                <section>
                    <div className="container">
                        <Reveal className="section-header">
                            <p className="label">02 — Goals &amp; Constraints</p>
                            <h2 className="display-lg">What success looks like</h2>
                        </Reveal>

                        <Reveal className="goals-grid">
                            <div className="goals-card">
                                <h3 className="goals-card__title">
                                    <span className="icon">🎯</span>
                                    Design Goals
                                </h3>
                                <ul className="goals-list">
                                    {[
                                        "Increase free-trial signups by improving homepage clarity and CTA visibility",
                                        "Reduce onboarding drop-off by streamlining the flow to 5 steps or fewer",
                                        "Build a scalable design system that the dev team can maintain independently",
                                        "Deliver a genuinely native mobile experience — not a responsive web copy",
                                        "Achieve WCAG AA accessibility compliance across all surfaces",
                                        "Reduce support tickets related to navigation and feature discovery",
                                    ].map((item) => <li key={item}>{item}</li>)}
                                </ul>
                            </div>

                            <div className="goals-card">
                                <h3 className="goals-card__title">
                                    <span className="icon">⚡</span>
                                    Constraints
                                </h3>
                                <ul className="goals-list">
                                    {[
                                        "Brand identity (logo, primary color) was locked — not open for change",
                                        "Development team was mid-sprint — no major infrastructure changes in scope",
                                        "Launch deadline tied to a marketing campaign — non-negotiable",
                                        "Existing user data could not be migrated, so flows needed backward compatibility",
                                        "No dedicated illustration or motion designer on the team",
                                        "Budget limited prototyping to one round of moderated usability testing",
                                    ].map((item) => <li key={item}>{item}</li>)}
                                </ul>
                            </div>
                        </Reveal>
                    </div>
                </section>

                <hr className="divider" />

                {/* ── ROLE & TOOLS ──────────────────────────────────── */}
                <section style={{ padding: "80px 0" }}>
                    <div className="container">
                        <Reveal style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64 }}>
                            <div>
                                <p className="label" style={{ marginBottom: 16 }}>My Role</p>
                                <h3 className="display-md" style={{ marginBottom: 16 }}>Lead UI/UX Designer</h3>
                                <p className="body-md">
                                    I owned the end-to-end design process — from running the initial UX
                                    audit and stakeholder workshops, through research synthesis, information
                                    architecture, wireframing, visual design, and design system
                                    construction, to final handoff with annotated specs.
                                </p>
                                <p className="body-md" style={{ marginTop: 12 }}>
                                    I worked closely with the PM to scope and prioritize, collaborated with
                                    developers daily during the build phase, and facilitated all usability
                                    testing sessions.
                                </p>
                            </div>
                            <div>
                                <p className="label" style={{ marginBottom: 16 }}>Tools Used</p>
                                <div className="tools-row">
                                    {["Figma","FigJam","Maze","Notion","Loom","Hotjar","Google Analytics","Zeroheight"].map((t) => (
                                        <span className="tool-chip" key={t}>
                                            <span className="dot" />
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </section>

                <hr className="divider" />

                {/* ── PROCESS ───────────────────────────────────────── */}
                <section>
                    <div className="container">
                        <Reveal className="section-header">
                            <p className="label">03 — Process</p>
                            <h2 className="display-lg">How I approached the problem</h2>
                        </Reveal>

                        <Reveal className="process-track">
                            {["Discover","Define","Ideate","Design","Validate"].map((name, i) => (
                                <div className="process-step process-step--done" key={name}>
                                    <div className="process-step__dot">{i + 1}</div>
                                    <span className="process-step__name">{name}</span>
                                </div>
                            ))}
                        </Reveal>

                        <Reveal className="process-cards">
                            {[
                                ["Discover", "Heuristic audit, stakeholder interviews, analytics deep-dive, competitor analysis, 8 user interviews."],
                                ["Define",   "Affinity mapping, persona refinement, Jobs-to-be-Done framework, reframed problem statement."],
                                ["Ideate",   "Crazy-8s, design studio with PM, IA restructuring, flow mapping, low-fidelity wireframes."],
                                ["Design",   "High-fidelity UI, design system construction (tokens, components, patterns), mobile-native flows."],
                                ["Validate", "Moderated usability testing (n=6), Maze unmoderated test, iteration rounds, dev handoff."],
                            ].map(([phase, desc]) => (
                                <div className="process-card" key={phase}>
                                    <div className="process-card__phase">{phase}</div>
                                    <p className="process-card__desc">{desc}</p>
                                </div>
                            ))}
                        </Reveal>

                        <Reveal style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 20, marginTop: 40 }}>
                            <Ph label={"Affinity Mapping / FigJam Board\n(4:3 aspect ratio)"} cls="ph--card" />
                            <Ph label={"User Journey Map\n(4:3 aspect ratio)"} cls="ph--card" />
                            <Ph label={"Sitemap — Revised IA\n(4:3 aspect ratio)"} cls="ph--card" />
                        </Reveal>
                    </div>
                </section>

                <hr className="divider" />

                {/* ── RESEARCH INSIGHTS ─────────────────────────────── */}
                <section>
                    <div className="container">
                        <Reveal className="section-header">
                            <p className="label">04 — Research</p>
                            <h2 className="display-lg">What the data told us</h2>
                            <p className="body-lg" style={{ marginTop: 16, maxWidth: 640 }}>
                                Eight user interviews, heatmap analysis, and funnel data combined to
                                surface clear patterns. These shaped every design decision that followed.
                            </p>
                        </Reveal>

                        <Reveal className="insight-grid">
                            {[
                                ["62%",  "Onboarding abandonment rate",          "More than half of new sign-ups never completed setup. Exit surveys cited confusion and perceived length as primary reasons."],
                                ["8s",   "Average time on homepage before bounce","Heatmaps showed users scanning without finding a clear next action. The CTA was visible only 38% of the time on a 1280px viewport."],
                                ["7/8",  "Users couldn't locate a core feature",  "In moderated sessions, 7 of 8 participants failed to find the reporting dashboard without assistance."],
                            ].map(([num, claim, detail]) => (
                                <div className="insight-card" key={num}>
                                    <div className="insight-card__num">{num}</div>
                                    <div className="insight-card__claim">{claim}</div>
                                    <p className="insight-card__detail">{detail}</p>
                                </div>
                            ))}
                        </Reveal>

                        <Reveal className="research-ph-row" style={{ marginTop: 32 }}>
                            <Ph label={"User Interview Notes — Synthesized Themes\n(FigJam board export, 16:9)"} cls="ph--banner" />
                            <Ph label={"Persona — Primary User Profile\n(Persona card, 4:3)"} cls="ph--banner" />
                        </Reveal>
                    </div>
                </section>

                <hr className="divider" />

                {/* ── BEFORE / AFTER — WEBSITE ──────────────────────── */}
                <section>
                    <div className="container">
                        <Reveal className="section-header">
                            <p className="label">05 — Iterations</p>
                            <h2 className="display-lg">Old vs. New — Website</h2>
                            <p className="body-lg" style={{ marginTop: 16, maxWidth: 600 }}>
                                Each screen comparison shows what the original design communicated,
                                where it failed, and how the redesign addresses the root cause.
                            </p>
                        </Reveal>

                        <div className="ba-section">
                            {[
                                {
                                    num: "Screen 01",
                                    title: "Homepage — Hero & Above-the-Fold",
                                    desc: "The original hero tried to do too much — product tagline, feature list, testimonials, and a demo video competed for the same visual space. The redesign establishes a single dominant message and a clear primary action.",
                                    oldLabel: "Original Homepage — Hero Section\n(16:9, 1440px desktop)",
                                    newLabel: "Redesigned Homepage — Hero Section\n(16:9, 1440px desktop)",
                                    oldCaption: "Cluttered hero with 3 competing CTAs, 4 different font sizes, and a background video that slowed LCP to 4.8s.",
                                    newCaption: "Single headline, one primary CTA, one secondary action. Backed by a concise value statement and a trust signal row.",
                                    changes: ["Eliminated 2 redundant CTAs", "Replaced video background with static illustration", "Added above-fold social proof strip"],
                                    cls: "ph--screen-lg",
                                },
                                {
                                    num: "Screen 02",
                                    title: "Navigation — Global & Mobile",
                                    desc: "The original nav had 9 top-level items with fly-out sub-menus. Card-sorting with 12 users informed a flatter IA with 5 primary destinations.",
                                    oldLabel: "Original Navigation — Desktop & Mobile\n(4:3 composite)",
                                    newLabel: "Redesigned Navigation — Desktop & Mobile\n(4:3 composite)",
                                    oldCaption: "9 top-level items, nested dropdowns, no visual hierarchy between primary and utility links.",
                                    newCaption: "5 primary items, clear utility link separation, full-screen mobile menu with task grouping.",
                                    changes: ["Reduced nav items from 9 to 5", "Introduced mega-menu only for Products", "Mobile nav rebuilt as overlay with grouped tasks"],
                                    cls: "ph--screen-md",
                                },
                                {
                                    num: "Screen 03",
                                    title: "Onboarding Flow",
                                    desc: "The 11-step onboarding was rebuilt as a 5-step progressive disclosure flow. Non-critical steps were deferred to the product's empty states.",
                                    oldLabel: "Original Onboarding — All Steps Overview\n(16:9, flow diagram or composite)",
                                    newLabel: "Redesigned Onboarding — Condensed Flow\n(16:9, flow diagram or composite)",
                                    oldCaption: "11 mandatory steps, no progress indicator, no skip option, 62% abandonment rate.",
                                    newCaption: "5 core steps, persistent progress bar, contextual skip, deferred non-critical setup.",
                                    changes: ["Reduced steps from 11 to 5", "Added persistent progress indicator", "Deferred profile setup to post-onboarding empty states"],
                                    cls: "ph--screen-lg",
                                },
                            ].map(({ num, title, desc, oldLabel, newLabel, oldCaption, newCaption, changes, cls }) => (
                                <Reveal key={num}>
                                    <div className="ba-block__header">
                                        <span className="label" style={{ fontSize: 13 }}>{num}</span>
                                        <h3 className="ba-block__title">{title}</h3>
                                    </div>
                                    <p className="ba-block__desc">{desc}</p>
                                    <div className="ba-compare">
                                        <div>
                                            <span className="ba-col__badge ba-col__badge--old">✕ Before</span>
                                            <Ph label={oldLabel} cls={`${cls} ph--old`} />
                                            <p className="ba-col__caption">{oldCaption}</p>
                                        </div>
                                        <div>
                                            <span className="ba-col__badge ba-col__badge--new">✓ After</span>
                                            <Ph label={newLabel} cls={`${cls} ph--new`} />
                                            <p className="ba-col__caption">{newCaption}</p>
                                            <ul className="change-list">
                                                {changes.map((c) => <li key={c}>{c}</li>)}
                                            </ul>
                                        </div>
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </section>

                <hr className="divider" />

                {/* ── BEFORE / AFTER — MOBILE APP ───────────────────── */}
                <section>
                    <div className="container">
                        <Reveal className="section-header">
                            <p className="label">05b — Mobile Iterations</p>
                            <h2 className="display-lg">Old vs. New — Mobile App</h2>
                            <p className="body-lg" style={{ marginTop: 16, maxWidth: 600 }}>
                                The mobile app required a separate design track. Screens were designed
                                mobile-first — starting from user goals and native platform patterns.
                            </p>
                        </Reveal>

                        <Reveal>
                            <div className="ba-block__header">
                                <span className="label" style={{ fontSize: 13 }}>Mobile 01</span>
                                <h3 className="ba-block__title">Dashboard — Home Screen</h3>
                            </div>
                            <p className="ba-block__desc">
                                The original mobile dashboard was a scaled-down version of the web
                                dashboard. The redesigned version uses a scrollable card feed, prioritises
                                the most-used actions via a persistent bottom bar, and adapts data
                                visualisation to touch interactions.
                            </p>
                            <div className="platform-split">
                                <div className="ba-compare">
                                    <div>
                                        <span className="ba-col__badge ba-col__badge--old">✕ Before</span>
                                        <Ph label={"Original Mobile Dashboard\n(9:16 phone frame)"} cls="ph--screen-sm ph--old" style={{ maxWidth: "100%" }} />
                                    </div>
                                    <div>
                                        <span className="ba-col__badge ba-col__badge--new">✓ After</span>
                                        <Ph label={"Redesigned Mobile Dashboard\n(9:16 phone frame)"} cls="ph--screen-sm ph--new" style={{ maxWidth: "100%" }} />
                                    </div>
                                </div>
                                <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: 28 }}>
                                    <div>
                                        <p className="label" style={{ marginBottom: 12 }}>Key Changes</p>
                                        <ul className="change-list">
                                            {[
                                                "Switched from grid to prioritized card feed",
                                                "Persistent 5-tab bottom nav replaces hamburger",
                                                "Primary action floating button for quick entry",
                                                "Data charts rebuilt as swipeable sparklines",
                                                "Reduced visible data density by 40%",
                                            ].map((c) => <li key={c}>{c}</li>)}
                                        </ul>
                                    </div>
                                    <Ph label={"Usage Flow Comparison\n(Before vs. After task path)"} cls="ph--card" style={{ height: 180 }} />
                                </div>
                            </div>
                        </Reveal>

                        <Reveal style={{ marginTop: 48 }}>
                            <p className="label" style={{ marginBottom: 20 }}>Additional Mobile Screens — Redesigned</p>
                            <div className="final-row-3">
                                {[
                                    ["Search & Filter\n(9:16)",  "Full-screen search with smart suggestions and recent history"],
                                    ["Detail View\n(9:16)",      "Progressive disclosure — summary first, details on expand"],
                                    ["Settings\n(9:16)",         "Grouped settings with inline toggles and clear labels"],
                                    ["Notifications\n(9:16)",    "Grouped by date, swipe-to-dismiss, batch actions"],
                                ].map(([label, caption]) => (
                                    <div key={label}>
                                        <Ph label={label} cls="ph--screen-sm ph--new" style={{ maxWidth: "100%" }} />
                                        <p className="body-sm" style={{ marginTop: 10 }}>{caption}</p>
                                    </div>
                                ))}
                            </div>
                        </Reveal>
                    </div>
                </section>

                <hr className="divider" />

                {/* ── DESIGN DECISIONS ──────────────────────────────── */}
                <section>
                    <div className="container">
                        <Reveal className="section-header">
                            <p className="label">06 — Design Decisions</p>
                            <h2 className="display-lg">Decisions I had to defend</h2>
                            <p className="body-lg" style={{ marginTop: 16, maxWidth: 600 }}>
                                Not every design choice was straightforward. These are the decisions
                                that required research backing and stakeholder alignment.
                            </p>
                        </Reveal>

                        <Reveal className="decision-list">
                            {[
                                {
                                    n: "01",
                                    title: "Removing the homepage video background",
                                    body: "Stakeholders were attached to the video — it felt \"premium.\" However, Lighthouse showed it was pushing LCP to 4.8s, and heatmaps showed users weren't watching past 3 seconds. We replaced it with a static illustration that loaded in 300ms and used the saved budget to fund two additional user interviews. No one questioned it after seeing the performance numbers.",
                                },
                                {
                                    n: "02",
                                    title: "Choosing a bottom tab bar over a hamburger menu on mobile",
                                    body: "The client preferred a hamburger menu to \"keep the interface clean.\" Research consistently shows bottom navigation outperforms hamburger menus in discovery, speed, and user satisfaction on mobile. We ran an A/B prototype test with Maze (n=40) — the bottom bar scored 31% faster task completion. The data made the case.",
                                },
                                {
                                    n: "03",
                                    title: "Deferring profile setup to empty states",
                                    body: "Moving profile completion out of onboarding was a risk — the dev team was concerned users would never return to complete it. We designed contextual empty states that prompted completion only when relevant. Post-launch data showed 71% of users completed their profile within the first session — higher than before.",
                                },
                                {
                                    n: "04",
                                    title: "Building a design system instead of one-off components",
                                    body: "The original brief was to \"redesign the screens.\" I advocated for a component-based system because without it, consistency would erode within months. I scoped it to the 80/20 — core components only. This added two weeks but reduced design-to-dev friction significantly and gave the team a shared language.",
                                },
                            ].map(({ n, title, body }) => (
                                <div className="decision-item" key={n}>
                                    <span className="decision-item__num">{n}</span>
                                    <div>
                                        <div className="decision-item__title">{title}</div>
                                        <p className="decision-item__body">{body}</p>
                                    </div>
                                </div>
                            ))}
                        </Reveal>
                    </div>
                </section>

                <hr className="divider" />

                {/* ── FINAL DESIGN ──────────────────────────────────── */}
                <section>
                    <div className="container">
                        <Reveal className="section-header">
                            <p className="label">07 — Final Design</p>
                            <h2 className="display-lg">The finished product</h2>
                            <p className="body-lg" style={{ marginTop: 16, maxWidth: 600 }}>
                                Across 120+ screens, the design system, and handoff documentation.
                                A curated selection of the final, production-ready work.
                            </p>
                        </Reveal>

                        <div className="final-showcase">
                            <Reveal className="final-row-1">
                                <Ph label={"Final — Website Homepage\n(Full-page scroll or 16:9 crop, 1440px)"} cls="ph--final" style={{ minHeight: 440 }} />
                                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                                    <Ph label={"Final — Pricing Page\n(16:9)"} cls="ph--final" style={{ flex: 1, minHeight: 200 }} />
                                    <Ph label={"Final — Features Overview\n(16:9)"} cls="ph--final" style={{ flex: 1, minHeight: 200 }} />
                                </div>
                            </Reveal>

                            <Reveal className="final-row-2">
                                <Ph label={"Final — App Dashboard\n(16:9)"}     cls="ph--screen-lg ph--final" />
                                <Ph label={"Final — Reports View\n(16:9)"}      cls="ph--screen-lg ph--final" />
                                <Ph label={"Final — Settings & Profile\n(16:9)"} cls="ph--screen-lg ph--final" />
                            </Reveal>

                            <Reveal>
                                <p className="label" style={{ marginBottom: 20 }}>Mobile — iOS &amp; Android</p>
                                <div className="final-row-3">
                                    {["Home Feed","Dashboard","Onboarding Step 3","Profile & Account"].map((l) => (
                                        <Ph key={l} label={`${l}\n(9:16)`} cls="ph--screen-sm ph--final" style={{ maxWidth: "100%" }} />
                                    ))}
                                </div>
                            </Reveal>

                            <Reveal>
                                <p className="label" style={{ marginBottom: 20 }}>Design System — Component Library</p>
                                <Ph label={"Design System — Component Overview Sheet\n(Figma export: buttons, inputs, cards, typography, color tokens — 16:9)"} cls="ph--banner" style={{ height: 360 }} />
                            </Reveal>
                        </div>
                    </div>
                </section>

                <hr className="divider" />

                {/* ── OUTCOMES ──────────────────────────────────────── */}
                <section>
                    <div className="container">
                        <Reveal className="section-header">
                            <p className="label">08 — Outcomes</p>
                            <h2 className="display-lg">Measurable results</h2>
                            <p className="body-lg" style={{ marginTop: 16, maxWidth: 600 }}>
                                Measured 60 days post-launch against the 60-day pre-launch baseline.
                                Metrics sourced from Google Analytics, Hotjar, and the client's CRM.
                            </p>
                        </Reveal>

                        <Reveal className="outcome-grid">
                            {[
                                ["+38%", "Free trial sign-ups",          "Attributed to homepage clarity and CTA visibility improvements"],
                                ["−54%", "Onboarding abandonment",        "From 62% to 28% — flow reduced from 11 to 5 steps"],
                                ["4.6★", "App store rating",              "Up from 3.1 — 200+ new reviews citing \"easier to use\""],
                                ["−41%", "Navigation support tickets",    "Users finding features without help desk intervention"],
                            ].map(([val, label, note]) => (
                                <div className="outcome-card" key={val}>
                                    <div className="outcome-card__val">{val}</div>
                                    <div className="outcome-card__label">{label}</div>
                                    <div className="outcome-card__note">{note}</div>
                                </div>
                            ))}
                        </Reveal>

                        <Reveal style={{ marginTop: 32 }}>
                            <Ph label={"Before / After — Analytics Dashboard Comparison\n(Side-by-side GA4 screenshots, 16:9)"} cls="ph--banner" />
                        </Reveal>
                    </div>
                </section>

                <hr className="divider" />

                {/* ── LEARNINGS ─────────────────────────────────────── */}
                <section>
                    <div className="container">
                        <Reveal className="section-header">
                            <p className="label">09 — Learnings</p>
                            <h2 className="display-lg">What I'd carry forward</h2>
                        </Reveal>

                        <Reveal className="learnings-grid">
                            {[
                                ["01", "Lead with data, not opinions",          "Every significant pushback I faced dissolved once I brought numbers. Design intuition is valuable, but data is what moves stakeholder decisions. I learned to build the evidence before the meeting, not during it."],
                                ["02", "Scope the design system, don't skip it","I initially underestimated how much time a component library would take. But scoping it to the 80/20 — building only what would be reused 3+ times — made it viable within timeline. Systems work pays back within weeks."],
                                ["03", "Mobile first, mobile different",         "The biggest mistake on the original product was treating mobile as a smaller desktop. Designing the mobile app as a separate product — with its own flows, its own interaction patterns, its own IA — is what made the difference."],
                                ["04", "Involve devs in the design phase",       "Running weekly design reviews with the development team from week four onwards reduced rework by a large margin. Engineers flagged feasibility early; I caught edge cases I'd missed."],
                                ["05", "Constraints create better design",       "The fixed brand colors and locked infrastructure pushed me to solve problems within tight rails. Some of the best decisions in the redesign came from working within constraints, not around them."],
                                ["06", "What I'd do differently",                "I'd push for a second round of usability testing after the first major revision — we shipped with one moderated session and one unmoderated test. More testing would have given us higher confidence."],
                            ].map(([idx, title, body]) => (
                                <div className="learning-card" key={idx}>
                                    <div className="learning-card__index">{idx}</div>
                                    <h4 className="learning-card__title">{title}</h4>
                                    <p className="learning-card__body">{body}</p>
                                </div>
                            ))}
                        </Reveal>
                    </div>
                </section>

                <hr className="divider" />

                {/* ── NEXT STEPS ────────────────────────────────────── */}
                <section style={{ padding: "64px 0" }}>
                    <div className="container">
                        <Reveal style={{
                            background: "var(--bg-card)",
                            border: "1px solid var(--border)",
                            borderRadius: "var(--r-xl)",
                            padding: 48,
                        }}>
                            <p className="label" style={{ marginBottom: 14 }}>10 — Next Steps</p>
                            <h3 className="display-md" style={{ marginBottom: 20, maxWidth: 560 }}>
                                Where the product goes from here
                            </h3>
                            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 24 }}>
                                {[
                                    ["Accessibility Audit",    "A third-party WCAG AA audit is scheduled. Color contrast in secondary states and keyboard navigation in modals need refinement."],
                                    ["Dark Mode",              "Tokens are structured to support a dark theme. Implementation is scoped for Q2 — the system is ready, it's a build priority."],
                                    ["Personalisation Layer",  "The dashboard is the highest-engagement surface. Exploring widget customisation and role-based default views for the next cycle."],
                                ].map(([title, body]) => (
                                    <div key={title}>
                                        <p style={{ fontSize: 13, fontWeight: 600, color: "#111111", marginBottom: 6 }}>{title}</p>
                                        <p className="body-sm">{body}</p>
                                    </div>
                                ))}
                            </div>
                        </Reveal>
                    </div>
                </section>
            </main>

            {/* ── NEXT PROJECT ──────────────────────────────────────── */}
            <div className="next-project">
                <div className="container">
                    <Reveal className="next-project__inner">
                        <div>
                            <p className="label" style={{ marginBottom: 8 }}>Next Case Study</p>
                            <h2 className="next-project__title">→ {nextProjectLabel}</h2>
                            <p className="body-md" style={{ marginTop: 10 }}>
                                Replace this with the title of your next project.
                            </p>
                        </div>
                        <a href={nextProjectHref} className="btn btn--primary">
                            Open Case Study
                            <span style={{ fontSize: 18 }}>↗</span>
                        </a>
                    </Reveal>
                </div>
            </div>

            {/* ── FOOTER ────────────────────────────────────────────── */}
            <footer>
                <div className="footer__inner">
                    <span className="footer__copy">© 2024 {designerName}. All rights reserved.</span>
                    <div className="footer__links">
                        <a href="#">LinkedIn ↗</a>
                        <a href="#">Dribbble ↗</a>
                        <a href="#">Email ↗</a>
                    </div>
                </div>
            </footer>
        </div>
    )
}

// ─────────────────────────────────────────────────────────────────────────────
// FRAMER PROPERTY CONTROLS
// Lets you edit key values directly from the Framer right panel.
// ─────────────────────────────────────────────────────────────────────────────

addPropertyControls(SparkCaseStudy, {
    designerName: {
        type: ControlType.String,
        title: "Designer Name",
        defaultValue: "Shreyas Gharat",
    },
    nextProjectLabel: {
        type: ControlType.String,
        title: "Next Project Label",
        defaultValue: "View Next Project",
    },
    nextProjectHref: {
        type: ControlType.String,
        title: "Next Project URL",
        defaultValue: "#",
    },
})
