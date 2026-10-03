# Maker's Terminal — Portfolio

Brutalist, developer-centric portfolio site for Javier Cazares. Command-line inspired, but polished for the web.

## Tech Stack

- **Astro 7** (static)
- **Tailwind CSS v4** (via `@tailwindcss/vite` plugin — no `tailwind.config.js`)
- **TypeScript** (strict)
- **Typography**: JetBrains Mono / Fira Code / Space Mono, loaded from Google Fonts

## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Design System

These are hard rules. Every page, component, and style must obey them.

### Colors

| Token | Value | Use |
| --- | --- | --- |
| Background | `#000000` (or charcoal) | Page background |
| Foreground | `#FFFFFF` | Text |
| Accent (green) | `#00FF41` | Hover fills, highlights, cursor |
| Accent (cyan) | `#00E5FF` | Secondary accent (suggested) |
| Accent (yellow) | `#FFD500` | Warning/harsh accent (suggested) |

Pick one primary accent (green by default). Cyan and yellow are optional secondary accents for specific states.

### Typography

- **100% monospace.** No proportional/serif fonts anywhere.
- Fonts: `JetBrains Mono` (primary), `Fira Code` or `Space Mono` (fallback), then `monospace`.
- Legible but unambiguously technical. Headings and body both use the mono stack.

### UI Component Rules

- **0px border-radius everywhere.** No rounded corners, ever.
- **Visible `1px solid` borders** around sections, buttons, images, and inputs — create a blueprint/grid feel.
- **Sharp, harsh shadows** — no soft/ambient blur. Use `shadow-[4px_4px_0_#000]` or hard offset shadows.
- No glassmorphism, no gradients, no soft edges.

### Interactions

- **Instant hover effects.** No `transition-*`, no `duration-*`, no easing. State changes are immediate.
- **Invert colors on hover** — e.g. black text on green background (`hover:bg-[#00FF41] hover:text-black`).
- **Blinking cursor `_`** at the end of main headings (CSS `animate-pulse` or a custom blink keyframe).
- Micro-interactions should read like code highlighting, not smooth UI.

## Page Sections

Translate each section as specified below.

### 1. Header / Navigation

Style like a command prompt, not a standard menu.

- Prompt: `javier@dev-environment:~$`
- Raw text links, bracketed: `[ PROJECTS ]`, `[ SKILLS ]`, `[ CONTACT ]`.

### 2. Intro (The Terminal Output)

Keep text punchy and raw.

```
> execute greeting.sh
Hello, I'm Javier Cazares.
Developer passionate about creating software with purpose.
Building, experimenting, and scaling ideas since 2018.
```

### 3. Portfolio (The Big Visual Cards)

Break the terminal rules here for maximum visual impact.

- **Layout**: CSS Grid with thick `1px`–`2px` borders separating everything. 1–2 massive cards per row.
- **Card**: large, high-quality project image taking ~80% of the card. Below it, a starkly separated text block:
  - Title: `PROJECT_01: E-COMMERCE_ENGINE`
  - Tech stack in brackets: `[ Angular | AWS ]`
- **Hover**: grayscale the image, or overlay a matrix-green tint.

### 4. Skills (The Config File)

**No progress bars.** Display the tech stack as a JSON/YAML block or terminal output:

```json
{
  "frontend": ["Angular", "React"],
  "backend": [".NET", "SQL"],
  "infrastructure": ["AWS"]
}
```

### 5. Experience (The Git Log)

No heavy paragraphs or corporate padding. Treat work history like a system log:

```
[2022-2026] Sr. Web Consultant @ Apex Systems
[2021-2022] App Developer @ Bosch
```

Focus on role + impact. Drop standard CV bullet points.

### 6. Contact (The Input Prompt)

Command line awaiting input, not a standard form.

- Prompt: `> System ready. Enter your idea below:`
- Massive, brutalist text box with a harsh border.
- Glowing submit button labelled `[ EXECUTE SEND ]` or `[ INITIALIZE COLLABORATION ]`.

## Styling Engine

**Tailwind CSS v4.** Define design tokens in `src/styles/global.css` via `@theme` (v4 has no `tailwind.config.js`):

```css
@import "tailwindcss";

@theme {
  --color-terminal-green: #00ff41;
  --color-terminal-black: #000000;
  --font-mono: "JetBrains Mono", "Fira Code", "Space Mono", monospace;
}
```

- Load fonts from Google Fonts (`<link>` in the head, or `@fontsource/...` packages).
- Enforce the brutalist rules globally: `0px` borders, stark backgrounds, harsh shadows, no rounded corners, no transitions.
