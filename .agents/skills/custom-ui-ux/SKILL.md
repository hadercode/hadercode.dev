---
name: custom-ui-ux
description: "Guidelines and utilities for crafting highly customized, premium, non-generic portfolios with unique UX and editorial-style design."
---

# Unique UI/UX Design System Guidelines

This skill guides the construction of the portfolio website to ensure it does not look like a generic, AI-generated template. It defines visual principles, layouts, and interactive behaviors that result in a premium, editorial, and craft-centered digital presence.

## 1. Editorial Typography & Layout
- **Font Pairing**: 
  - **Headings**: Use a bold, high-character Display or Serif font (e.g., *Syne*, *Clash Display*, or *Playfair Display* via Google Fonts).
  - **Body & Metadata**: Use a clean, functional Monospace or Geometric Sans-serif (e.g., *Space Mono*, *Plus Jakarta Sans*, or *Outfit*).
- **Asymmetric Grid**: Break the standard centered layout. Use varying column offsets, overlapping cards, and floating elements.
- **Negative Space**: Embrace whitespace. Let elements breathe with substantial padding (`py-24`, `py-32`) to feel like a premium art book.

## 2. Organic and Sophisticated Color Palette
Avoid standard Tailwind blues/indigos. Use a curated "Neo-Minimalist" or "Earth-Tech" palette:
- **Dark Mode (Default)**:
  - Base: Deep obsidian/charcoal with warm undertones (`#0d0d0c`)
  - Surface: Warm muted grey (`#171715`)
  - Accent 1 (Primary): Wasabi Green / Acid Lime (`#d4ff3f` or `#cbf3f0`)
  - Accent 2 (Secondary): Soft Terracotta or Copper (`#e76f51` or `#dfa06e`)
  - Text: Warm white (`#f4f4f3`) and muted slate-grey for descriptions.

## 3. High-Fidelity Micro-interactions
- **Cursor Effects**: A magnetic cursor or a subtle lag-trailing circle that expands on hover of interactive elements.
- **Interactive Project Cards**: Cards that tilt slightly on hover (using CSS transform or vanilla JavaScript) and reveal rich content or dynamic images.
- **Text Reveal Animations**: Splitting text into letters/words and revealing them with a smooth CSS translation or blur transition when they enter the viewport.
- **Magnetic Buttons**: Elements that pull towards the cursor when hovered.

## 4. Astro View Transitions
- Enable `<ViewTransitions />` in Astro to allow seamless, app-like page transitions.
- Maintain persistent state or audio players across pages if applicable.
- Customize transition animations to be slower and smoother (e.g., `cubic-bezier(0.16, 1, 0.3, 1)` easing).

## 5. Layout Architectures
- **Horizontal Scroll Sections**: For displaying projects or timeline elements, creating a showcase experience.
- **Infinite Marquee**: Sleek, slow-moving ticker tapes for tags, technologies, or status indicators.
- **Minimalist Floating Menu**: An persistent interactive navigation widget rather than a standard top navbar.
