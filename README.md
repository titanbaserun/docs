# Titanbase Docs

The official documentation for [Titanbase](https://titanbase.run) — the open-source, local-first visual schema designer for relational databases.

Live at **[docs.titanbase.run](https://docs.titanbase.run)**.

## Stack

- [Next.js](https://nextjs.org) (App Router)
- [MDX](https://mdxjs.com) via `@next/mdx` with `remark-gfm`
- [Tailwind CSS](https://tailwindcss.com) v4

## Development

Requirements: Node.js 20+ and a package manager (npm, pnpm, or yarn).

```bash
# Install dependencies
npm install

# Start the dev server at http://localhost:3000
npm run dev

# Type-check
npm run typecheck

# Production build
npm run build
```

## Project structure

```
docs/
├── app/                    # Routes — each page is a page.mdx
│   ├── page.mdx            # Introduction (/)
│   ├── quickstart/
│   ├── concepts/
│   ├── format/
│   ├── exporters/
│   ├── cli/
│   ├── plugins/
│   └── contributing/
├── components/             # Header, Sidebar, Toc, Pager, MDX helpers
├── lib/site.ts             # Site metadata + sidebar navigation
├── mdx-components.tsx       # Markdown → styled components mapping
└── public/                 # Logos, favicons, robots.txt
```

## Writing docs

Every page is an MDX file at `app/<route>/page.mdx`. Add the route to the sidebar in [`lib/site.ts`](./lib/site.ts).

```mdx
export const metadata = {
  title: "Page title",
  description: "Short description for SEO.",
};

# Page title

Your content here. Standard Markdown works, plus these components:

import { Cards, Card, Callout } from "@/components/mdx";

<Callout type="tip">Helpful aside.</Callout>
```

Available components: `<Cards>` / `<Card>` for link grids and `<Callout type="note | tip | warning">` for admonitions.

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md). Documentation fixes, clarifications, and examples are always welcome.

## License

Licensed under [Apache-2.0](./LICENSE). The Titanbase product lives at [titanbaserun/titanbase](https://github.com/titanbaserun/titanbase).
