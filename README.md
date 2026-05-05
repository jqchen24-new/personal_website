# Personal website

Static site built with [Astro](https://astro.build/): home, a **Writing** section for articles, and a **Resume** page with a PDF download.

## Local development

```sh
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321).

```sh
npm run build   # production build to dist/
npm run preview # serve dist/ locally
```

## Customize content

| What | Where |
|------|--------|
| Site title and tagline | [`src/site.ts`](src/site.ts) |
| Articles (Markdown) | [`src/content/articles/`](src/content/articles/) — filename becomes the URL slug (`my-post.md` → `/writing/my-post`) |
| Article frontmatter | `title`, `description`, `pubDate`, optional `updatedDate`, optional `linkedinUrl` |
| Resume (structured data) | [`src/data/resume.yaml`](src/data/resume.yaml) — top-level key **`resume`** must stay as-is (entry id for the collection) |
| Resume PDF | Add **`public/resume.pdf`**. The resume page links to `/resume.pdf`; until the file exists, that download will 404. |
| LinkedIn images | Save files under e.g. `public/images/posts/` and reference them in Markdown: `![alt](/images/posts/name.png)` |

### Migrating posts from LinkedIn

LinkedIn does not provide a clean export. Copy the article body from the browser, strip UI chrome, then paste into a new `.md` file or replace the placeholder files in `src/content/articles/`.

Keep the HTML resume and PDF in sync when you update your CV (or regenerate the PDF from the same source you use for `resume.yaml`).

## Deploy

Build output is static (`dist/`). Connect the repo to any static host:

- **[Vercel](https://vercel.com/)** — import repo; framework preset Astro; build `npm run build`, output `dist`.
- **[Netlify](https://www.netlify.com/)** — same build command and publish directory `dist`.
- **[Cloudflare Pages](https://pages.cloudflare.com/)** — build `npm run build`, output `dist`.

Environment variables are optional for this template; add them in the host dashboard if you introduce analytics or forms later.

## Project layout

```text
src/
  content.config.ts    # article + resume collection schemas
  content/articles/    # blog posts (.md)
  data/resume.yaml     # resume entry under key `resume`
  layouts/BaseLayout.astro
  pages/
    index.astro
    resume.astro
    writing/index.astro
    writing/[...slug].astro
  styles/global.css
public/                # favicon, resume.pdf, images
```
