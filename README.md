# Maker's Terminal

Source for [javiercazares.dev](https://javiercazares.dev), the personal portfolio of Javier Cazares. The site looks like a command-line tool: monospace type, hard borders, square corners and instant hover states. It is available in English and Spanish and has light and dark themes.

## Stack

- **[Astro 7](https://astro.build)**: static site generation
- **[Tailwind CSS v4](https://tailwindcss.com)**: via `@tailwindcss/vite`; design tokens live in [`src/styles/global.css`](src/styles/global.css) (there is no `tailwind.config.js`)
- **TypeScript** (strict)
- **Cloudflare Workers**: serves the built site and handles the contact form API
- **Cloudflare Turnstile** + **[Resend](https://resend.com)**: spam protection and email delivery for the contact form

## Getting started

Requires Node.js `>=22.12.0`.

```sh
npm install
npm run dev          # http://localhost:4321
```

To run the dev server in the background, use `npx astro dev --background`. Manage it with `astro dev status`, `astro dev logs` and `astro dev stop`.

### Commands

| Command              | Action                                                    |
| :------------------- | :-------------------------------------------------------- |
| `npm run dev`        | Start the Astro dev server                                |
| `npm run build`      | Build the static site to `./dist/`                        |
| `npm run preview`    | Preview the static build (no Worker, no `/api/*`)         |
| `npm run preview:cf` | Build, then run the full site and Worker with `wrangler dev` |

## Project structure

```text
/
├── public/                  # Static assets: favicons, OG image, portrait, project screenshots
├── src/
│   ├── assets/stack-icons/  # Technology logos used in the stack section
│   ├── components/          # Astro components (StackBoard, CareerLog, ThemeToggle, …)
│   ├── data/
│   │   ├── projects.ts      # Project cards and their article pages
│   │   ├── stack.ts         # Technologies shown in "The Stack"
│   │   └── career.ts        # Entries for the git-log-style career timeline
│   ├── pages/
│   │   ├── index.astro      # Home: hero, work, stack, career log, contact
│   │   └── projects/[slug].astro  # Generated article page for each project
│   └── styles/global.css    # Tailwind import, @theme tokens, global styles
├── worker/index.ts          # Cloudflare Worker: POST /api/contact
├── wrangler.jsonc           # Worker, assets binding and custom domain config
└── astro.config.mjs
```

## Content

Most content is plain TypeScript data, so you rarely need to edit the pages themselves:

- **Projects**: add an entry to [`src/data/projects.ts`](src/data/projects.ts). This creates the home page card and a `/projects/<slug>/` article. [PROJECTS.md](PROJECTS.md) walks through every field.
- **Stack**: add technologies to [`src/data/stack.ts`](src/data/stack.ts) and their icons to `src/assets/stack-icons/`. Icon sources and licenses are listed in [the icons' LICENSE.md](src/assets/stack-icons/LICENSE.md).
- **Career**: add commits to [`src/data/career.ts`](src/data/career.ts).

All user-facing copy is localized. Data files use `{ en, es }` records, and home page strings live in the `translations` object in [`src/pages/index.astro`](src/pages/index.astro). Update both languages together.

## Contact form

The form posts to `/api/contact`. [`wrangler.jsonc`](wrangler.jsonc) sends only `/api/*` requests to the Worker; static assets serve everything else. The Worker:

1. drops submissions that fill the honeypot field,
2. checks the message (5,000 characters max) and the optional reply email,
3. verifies the Turnstile token,
4. sends the message to `CONTACT_TO` through Resend.

### Environment

| Variable                    | Where             | Purpose                                          |
| :-------------------------- | :---------------- | :----------------------------------------------- |
| `PUBLIC_TURNSTILE_SITE_KEY` | `.env` (build)    | Turnstile site key; falls back to Cloudflare's test key |
| `RESEND_API_KEY`            | `.dev.vars` / secret | Resend API key                                |
| `TURNSTILE_SECRET_KEY`      | `.dev.vars` / secret | Turnstile secret key                          |
| `CONTACT_TO`                | `.dev.vars` / secret | Inbox that receives messages                  |
| `CONTACT_FROM`              | `wrangler.jsonc` var | Sender address; must be a domain verified in Resend |

For local testing, copy [`.env.example`](.env.example) to `.env` and [`.dev.vars.example`](.dev.vars.example) to `.dev.vars`, then run `npm run preview:cf`. The example keys are Cloudflare's always-pass test keys.

## Deployment

The site is deployed as a Cloudflare Worker with static assets, on the `javiercazares.dev` and `www.javiercazares.dev` custom domains.

### Automatic (GitHub Actions)

Every push to `main` triggers [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which builds the site and runs `wrangler deploy`. This includes merged pull requests. You can also start a deploy by hand from the **Actions** tab ("Run workflow").

The workflow needs these settings in the repository (**Settings → Secrets and variables → Actions**):

| Name                        | Type     | Value                                                         |
| :-------------------------- | :------- | :------------------------------------------------------------ |
| `CLOUDFLARE_API_TOKEN`      | Secret   | API token created from the "Edit Cloudflare Workers" template |
| `CLOUDFLARE_ACCOUNT_ID`     | Secret   | Your Cloudflare account ID                                    |
| `PUBLIC_TURNSTILE_SITE_KEY` | Variable | Production Turnstile site key, built into the site            |

### Manual

```sh
npm run build
npx wrangler deploy
```

### Worker secrets

The contact form's runtime secrets live on the Worker itself and stay set between deploys. Set them once, and again only when a value changes:

```sh
npx wrangler secret put RESEND_API_KEY
npx wrangler secret put TURNSTILE_SECRET_KEY
npx wrangler secret put CONTACT_TO
```

## Design rules

The full design system is in [CLAUDE.md](CLAUDE.md). The short version:

- Monospace type only: JetBrains Mono, then Fira Code, then Space Mono.
- `0px` border radius everywhere, with visible `1px` borders.
- Hard offset shadows only. No blur, gradients or glassmorphism.
- Hover states change instantly and invert colors. No transitions.
- Main headings end in a blinking `_` cursor.
