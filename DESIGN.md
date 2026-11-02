---
name: Mindak pricing
description: Editorial print system from the Mindak Instagram grid, set for the web.
colors:
  paper: "#F1EEE8"
  paper-2: "#E8E4DC"
  ink: "#0E0E0E"
  ink-2: "#5C5A55"
  rule: "#0E0E0E1F"
  lime: "#E3F06B"
  signal: "#F25C1F"
  sky: "#8CCBF0"
typography:
  display: { family: "Inter Tight", weight: 600, size: "clamp(48px, 8vw, 112px)", lineHeight: 0.9, tracking: "-0.04em" }
  serif: { family: "Instrument Serif", weight: 400, lineHeight: 0.95, tracking: "-0.02em" }
  body: { family: "Inter Tight", weight: 400, size: "16px", lineHeight: 1.5 }
  meta: { family: "Inter Tight", weight: 500, size: "11-12px", tracking: "0.04em", case: upper }
  arabic: { family: "IBM Plex Sans Arabic", weight: 600 }
radius: { max: "4px" }
motion:
  ease-out: "cubic-bezier(0.23, 1, 0.32, 1)"
  ui: "160-260ms"
  reveal: "400-600ms"
---

# Design System: Mindak pricing

## Overview

**Creative North Star: "The poster on the studio wall"**

Every screen reads like one of the @mindak.studio posters: warm off-white paper, black type, a stacked tight grotesk lock-up, a condensed editorial serif, one loud accent, and tiny print metadata in the corners. Depth comes from paper against ink, never from blur. The page is a printed catalogue: a visible hairline grid, square corners, tabular prices.

**Key Characteristics:**
- Paper ground, ink type, one accent per viewport.
- Corner metadata frame (Mindak Studio / 2026 / All rights reserved / +213).
- Highlighter mark: flat lime block, rotated -1.5deg, behind at most two phrases per page.
- Index marks (01) (02) (03) from the hiring posters.
- The featured plan is the one ink moment, with paper sheets peeking behind.

## Colors

### Primary
- **Paper** (#F1EEE8): page ground, like the chair posters.
- **Ink** (#0E0E0E): text, rules, featured card and closing block.

### Secondary
- **Highlighter lime** (#E3F06B): background only, never as text on paper. Active tab, featured label, highlighter marks, primary CTA on ink.
- **Signal orange** (#F25C1F): the "tue" box. One use per screen at most.

### Neutral
- **Paper 2** (#E8E4DC): inset areas, option cells, sheets behind the featured card.
- **Ink 2** (#5C5A55): secondary text and meta. 5.9:1 on paper.
- **Rule** (#0E0E0E1F): 1px hairlines.

### Named Rules
**The One Accent Rule.** Max one accent colour visible per viewport. No gradients, glows, coloured shadows, glass, or purple.

## Typography

**Display Font:** Inter Tight 600
**Serif:** Instrument Serif (roman + italic)
**Arabic:** IBM Plex Sans Arabic 600, one Darja line only

### Hierarchy
- **Display** (600, clamp(48px, 8vw, 112px), 0.9): stacked lock-up, hero and closing.
- **Section title** (Instrument Serif, clamp(40px, 5vw, 72px), 0.95): one italic word per title.
- **Price** (Instrument Serif, 56–72px, tabular): "DA" set in meta beside it.
- **Body** (Inter Tight 400, 16px, 1.5, max 60ch).
- **Meta** (Inter Tight 500, 11–12px, uppercase, 0.04em, ink-2).

## Layout

Container 1200px, gutters 20px / 40px. 12-column grid, left-aligned. Plan cards share one row joined by hairlines; on mobile they stack, featured first. Sections 96–160px apart on desktop, 64–96px on mobile.

## Elevation & Depth

No shadows. Depth is paper vs ink, plus the two offset paper sheets (4px, 8px) behind the featured card only.

## Components

- **Buttons:** square, flat. Primary = ink fill / paper text (lime fill / ink text on ink). Press scale 0.97, 120ms. Hover changes colour only.
- **Tabs:** text tabs on a hairline; a lime block slides between them (shared layoutId).
- **Checks:** 1.5px ink stroke, inline SVG. Not included = en dash in ink-2.

## Do's and Don'ts

- Do keep prices tabular with a narrow no-break space: 89 000 DA.
- Don't use emoji, pill badges, rounded-2xl cards, green checks or red crosses.
