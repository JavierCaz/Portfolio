# Adding a project

Project cards and project articles are generated from [`src/data/projects.ts`](src/data/projects.ts). Add one object to the `projects` array and the portfolio card and `/projects/<slug>/` article page are created from it.

## What to edit

1. Add a project object to `projects` in `src/data/projects.ts`.
2. Set a URL-safe, unique `slug` (for example, `my-new-project`) and the next display `number` (`02`, `03`, …).
3. Fill `name`, `type`, `cardDescription`, and the article `title`, `dek`, `intro`, and `sections` in both `en` and `es`.
4. Set `cardArt` and, optionally, `cardImage`. Add the technology names to `stack`. Add `demoUrl` and `repositoryUrl` when those links are available; both are optional.
5. Write the article as sections. Each section has a `heading` and `blocks`; a block can be a paragraph, a list, or an image. For an image block, provide a public asset path plus localized `alt` text and `caption` values:

   ```ts
   {
     type: 'image',
     src: '/images/projects/my-project/feature.png',
     alt: { en: 'Screenshot of the feature', es: 'Captura de la función' },
     caption: { en: 'The feature in use.', es: 'La función en uso.' },
   }
   ```

6. Set `article.introImage` to add a figure after the introduction paragraphs. To add more images within an article, insert another `type: 'image'` block wherever it belongs in a section’s `blocks` list.

The homepage card and article URL are generated automatically. The article template is [`src/pages/projects/[slug].astro`](src/pages/projects/%5Bslug%5D.astro). You only need to change that template or the homepage when you want a new layout or a different card treatment. Each card's art comes from `cardArt` (the two-line wordmark, a localized tag line, and a theme class) plus the optional `cardImage` screenshot (1200×792). To give a project its own colours, add a theme class next to `.art-atlas` / `.art-ledger` in `src/styles/global.css`.

## First project: Debatra

Debatra is already the first entry in `src/data/projects.ts`. Its Spanish article is based on your supplied draft, with spelling and phrasing cleaned up; an English version is included as well. The intro image and first section image currently use clearly labeled SVG placeholders in `public/images/projects/debatra/`. Replace those files with your screenshots, or change the `src` values to your own image paths. The article links to the [live demo](https://debatra.vercel.app/) and [GitHub repository](https://github.com/JavierCaz/Debatra). Roadmap items are clearly introduced as planned work, not implemented features.

When adding more projects, keep technical claims and roadmap status accurate, and update both languages together.

## Second project: PayTrack

PayTrack is the second entry. Its story comes from the earlier WordPress posts. Its screenshots were taken from the [PayTrack repository](https://github.com/JavierCaz/PayTrack) running on web with the bundled `test-data.json`, using real SQLite (sql.js) in place of the web build's in-memory shim, which can't run the dashboard queries. The intro image is the promotional graphic from the old site. The article has no roadmap section because no planned work was documented.
