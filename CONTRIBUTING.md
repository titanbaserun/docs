# Contributing to Titanbase Docs

Thanks for helping improve the Titanbase documentation! Clear docs are as valuable as code, and contributions of every size are welcome — from fixing a typo to writing a whole new guide.

## Ways to help

- **Fix mistakes** — typos, broken links, outdated commands, or incorrect examples.
- **Clarify** — rewrite confusing passages, add missing context, improve examples.
- **Expand** — document a feature, add a guide, or contribute a tutorial.

If you spot something but aren't sure how to fix it, [open an issue](https://github.com/titanbaserun/docs/issues) — that helps too.

## Local setup

Requirements: Node.js 20+ and npm (or pnpm/yarn).

```bash
git clone https://github.com/titanbaserun/docs
cd docs
npm install
npm run dev
```

Open http://localhost:3000 and edit any file under `app/`. Changes hot-reload.

## How content works

- Each page is an MDX file at `app/<route>/page.mdx`.
- Add a `metadata` export (`title`, `description`) at the top of every page.
- Register the page in the sidebar by adding it to `nav` in [`lib/site.ts`](./lib/site.ts).
- Reusable components live in `components/mdx.tsx`: `<Cards>`, `<Card>`, and `<Callout>`.

### Style guidelines

- Write in clear, direct English. Prefer short sentences.
- Use sentence case for headings.
- Keep code samples minimal and runnable.
- Reference abstract IR types in `code` (e.g. `uuid`, `timestamp`).
- Use `<Callout>` sparingly for genuinely important notes.

## Submitting changes

1. Fork the repository.
2. Create a branch: `git checkout -b docs/my-change`.
3. Make your edits and run `npm run build` to confirm it compiles.
4. Open a pull request against `main` with a short description of what changed and why.

All pull requests are reviewed before merge. We use squash merges to keep history clean.

## Commit messages

Follow conventional commits:

```
docs: clarify many-to-many join tables
docs: fix broken link on the CLI page
fix: correct PostgreSQL type mapping table
```

## Code of conduct

This project follows the [Contributor Covenant](./CODE_OF_CONDUCT.md). By participating, you agree to uphold it.

## License

By contributing, you agree that your contributions are licensed under [Apache-2.0](./LICENSE).
