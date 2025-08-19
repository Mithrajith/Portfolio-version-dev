# **Mithrajith – Pixel Violet Portfolio (Design & Animation Spec)**

> A dark–violet, pixel‑styled, buttery‑smooth React portfolio with maximal yet tasteful motion. This markdown is the single source of truth for how it should *look, feel, and move*.

---

## 1) Brand & Theme

**Vibe:** Neo‑retro pixel UI meets modern glass. High‑contrast, rich motion, zero jank.

**Primary Palette (Dark Violet):**

* `--bg`: #0E0A1F (page background — deep space violet)
* `--surface`: #15102A (cards/panels)
* `--violet`: #7C3AED (primary accent)
* `--violet-2`: #A78BFA (soft accent / glows)
* `--cyan`: #22D3EE (secondary accent / scanlines)
* `--lime`: #A3E635 (success / highlights)
* `--rose`: #FB7185 (errors / sparks)
* `--text`: #EDE9FE (primary text)
* `--muted`: #A1A1AA (secondary text)

**Lighting:** Subtle bloom + pixel glow on focus/hover. Soft inner‑shadow in cards for CRT depth.

**Textures:**

* 1px dither/scanline overlay (opacity 4–6%).
* Pixel grid (8px base) with slight parallax.

**Typography:**

* **Display:** "Press Start 2P" or "VT323" (for pixel headings)
* **Body:** "Inter" or "Manrope" (readability)
* Letter‑spacing +1–2% on headings; body line‑height 1.7.

**Iconography:** Lucide icons with 1px outline mode; add pixelated shadow (nearest‑neighbor).

---

## 2) Layout & Structure

**Grid:** 12‑col fluid grid. Spacing unit = 8px (the pixel).

**Shell:** Dock‑style header (fixed), magnetic cursor, floating command palette (`⌘/Ctrl + K`).

**Routes:** `/` Home · `/about` · `/skills` · `/projects` · `/lab` (playground) · `/contact`.

**Particles:** Low‑poly glowing particles with depth of field; reacts to cursor velocity.

---

## 3) Motion System (Framer Motion)

**Global Motion Rules**

* Duration tiers: 120ms (micro), 240ms (UI), 420–600ms (scenes), 1.2–2.0s (hero set‑pieces).
* Easing: `spring` with medium bounce; or `cubic-bezier(0.16, 1, 0.3, 1)` for UI.
* Stagger: 60–80ms between siblings.
* Prefers-reduced-motion respected (disable heavy parallax/particles).

**Entrance Pattern (per section)**

* Stage 1: Dim background → scanline sweep.
* Stage 2: Pixel dissolve → content tiles upsample from 16px blocks.
* Stage 3: Glow settle + tiny shake (1–2px) → focus halo.

**Micro‑Interactions**

* **Hover lift:** y:-2px, scale:1.01, glow pulse.
* **Press:** scale:0.98, chromatic aberration blink.
* **Focus ring:** dotted 1px neon stencil + 6px soft outer glow.
* **Magnetic cursor:** elements nudge \~4–8px toward pointer; cursor shows crosshair on links.
* **Audio tick (optional):** 8‑bit blip on buttons (low volume, user‑toggle).

---

## 4) Page‑by‑Page

### Home (`/`)

* **Hero:**

  * Big pixel title: `Mithrajith.dev` with scanline shimmer traveling left→right.
  * Sub‑headline types on (character by character) with variable speed + occasional glitch.
  * **3D Pixel Planet (optional):** Three.js voxel planet spinning at 0.5rpm; hover scrubs rotation.
* **CTA Chips:** "About", "Projects", "Contact" — float in, bob subtly, leave a neon trail.
* **Background:** Parallax starfield; particles repel on cursor proximity.

**Home Animations**

* Logo boot sequence (1.4s): power‑on glow → CRT bloom → logo resolves from 16px → 1px grid.
* Command palette appears with a burst of pixel dust on `⌘/Ctrl+K`.

### About (`/about`)

* **Timeline:** Pixel cards connected by dotted neon lines; scroll reveals with wipe transitions.
* **Avatar:** Pixel‑art portrait that blinks every \~8s; hover to flip to wireframe mode.
* **Fun Stats:** Counters count up with easing; bars fill with pixel blocks.

**About Animations**

* Cards pop in with 8‑bit coin sound (optional); on hover, cards show scanline magnifier.

### Skills (`/skills`)

* **Skill Grid:** 8×N tiles. Each tile displays skill name + tiny spark particles.
* **Meters:** Pixel health bars (HP style) that fill when scrolled into view.
* **Filter Chips:** Animate in/out with spring; active chip glows and emits tiny pixels.

**Skills Animations**

* On hover, tiles flip like sprite sheets (front: icon, back: proficiency stars).
* On click, tile expands into modal with mini demo (e.g., drag physics sandbox for React).

### Projects (`/projects`)

* **Card Design:**

  * Pixel frame, inner glass, glowing corners.
  * Thumbnail transitions from low‑res mosaic → sharp image on hover.
* **Hover Storyboard:**

  * Title jiggle, tech stack badges slide from edges, live link button beams in.
* **Detail View:**

  * Route transition: mosaic dissolve; content slides with parallax layers.

**Projects Animations**

* Infinite marquee of tags (pause on hover).
* Magnetic drag to reorder project cards (spring physics).
* Spotlight shader follows cursor inside card revealing sharp detail.

### Lab/Playground (`/lab`)

* Mini experiments: shader toys, pixel shaders, physics demos; each with start/stop buttons.

### Contact (`/contact`)

* **Form:** Retro terminal input with caret; input focus plays beam sound.
* **Validation:** Pixel shake on error; confetti pixels on success; button flips to a check mark.

---

## 5) Components & States

**Buttons**

* States: default → hover (lift + glow) → active (press + chroma) → loading (scanline loop) → success (flip to ✓).

**Cards**

* Idle oscillation ≤ 1px; focus halo; depth shadow toggled by cursor distance.

**Nav**

* Dock icons wobble on hover; active page has underglow + dot.
* Page transition laser swipe across the top.

**Tooltips**

* Pixel speech bubbles with tail; fade/scale in.

**Modals**

* CRT‑open (vertical stretch) with scanline; ESC to CRT‑close.

**Scroll**

* Smooth inertia; progress bar with pixel ticks; section titles snap with sound (optional).

---

## 6) Tech & Implementation

**Stack**

* React + Vite
* **Framer Motion** for animation orchestration
* **Lenis** (or Smooth Scroll) for buttery scrolling
* **Three.js** (optional) for voxel/3D hero
* **Zustand** for UI state (sound on/off, reduced motion, theme)
* Tailwind CSS + CSS variables for theme

**Performance Budget**

* LCP < 2.5s, TTI < 2.0s on mid‑range device
* Images: pre‑blur placeholder → sharpen on hover/visible
* Use `motion` `layoutId` for route morphs; avoid reflow on every frame
* `prefers-reduced-motion` turns off heavy parallax, particles, audio

**Accessibility**

* High color contrast (WCAG AA+)
* Focus visible at all times (neon dotted ring)
* Motion toggle in header, keyboard‑navigable dock
* All audio is optional and muted by default

---

## 7) Sample Motion Blueprints (Framer Motion)

```tsx
// Pixel dissolve entrance
const pixelVariants = {
  hidden: { filter: 'blur(8px)', opacity: 0, transform: 'translateY(8px) scale(0.98)' },
  show: {
    filter: 'blur(0px)', opacity: 1, transform: 'translateY(0px) scale(1)',
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  }
}

// Hover lift with glow
const hover = {
  whileHover: { y: -2, scale: 1.01, boxShadow: '0 0 12px var(--violet-2)' },
  whileTap: { scale: 0.98 }
}

// Route transition using layoutId
<motion.div layoutId={`card-${id}`} variants={pixelVariants} initial="hidden" animate="show" />
```

```css
/* Pixel textures */
:root{
  --scanlines: repeating-linear-gradient(
    to bottom, rgba(255,255,255,0.03) 0 1px, transparent 1px 3px
  );
}

.pixel-surface{ background: var(--surface); box-shadow: inset 0 0 0 1px rgba(255,255,255,0.05); }
.crt{ background-image: var(--scanlines); image-rendering: pixelated; }
```

---

## 8) Hover & Easter Eggs

* **Konami Code:** triggers secret neon theme.
* **Caps Lock On:** header shows tiny warning sprite.
* **Long Hover on Logo:** pixel planet grows rings.
* **404 Page:** Isometric pixel room with flickering lamp; door opens on click.

---

## 9) Content Checklist

* [ ] Hero headline & subtitle
* [ ] Short bio with pixel avatar
* [ ] Skills with grouped expertise (Frontend, Backend, Tools)
* [ ] 6–10 Projects (live + repo)
* [ ] Lab playground experiments
* [ ] Contact form + socials
* [ ] Motion toggle & sound toggle

---

## 10) Deliverables

* Reusable Motion primitives (enter, hover, press, route morph)
* Theme tokens (colors, radii, shadows, z‑index)
* Components: Button, Card, DockNav, Tooltip, Modal, Meter, Chip, ProjectCard
* Demo pages wired with real content placeholders

---

## 11) Tone & Copy

Friendly, confident, playful. Short sentences. Occasional retro references. Keep it crisp.

> "Crafted with pixels, polish, and a pinch of magic."

---

### Done Right, Viewers Will Think:

> *“Wait… how is that animation even happening?”*
