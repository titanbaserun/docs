# Changelog

All notable changes to the Titanbase documentation site are documented here.

## [0.3.0] — June 2026

### Added

- SQL import reference page (`/import`) documenting `@titanbase/import-postgres`: editor entry points, the supported PostgreSQL DDL subset, line-aware warnings, and library usage.
- Schema diff & migrations reference page (`/diff`) documenting `diffSchemas()` in `@titanbase/core` and `generatePostgresMigrationDraft()` in `@titanbase/export-postgres`, including destructive/breaking warnings and the editor Compare flow.

### Changed

- Moved PostgreSQL SQL import from Planned to **Available** (shipped in product 0.4.0).
- Moved schema diff and PostgreSQL migration drafts to **Available** (shipped in product 0.5.0).
- Updated Architecture: `@titanbase/import-postgres` is now implemented; schema diff lives in `@titanbase/core`; migration drafts live in `@titanbase/export-postgres`.
- Updated navigation, Introduction, Quickstart, and CLI pages to reflect the shipped import and diff capabilities.

[0.3.0]: https://github.com/titanbaserun/docs/releases/tag/v0.3.0

## [0.2.0] — June 2026

### Added

- Diagnostics reference page documenting severity levels and common schema checks.
- Planned section with PostgreSQL SQL Import, Desktop App, and Titanbase Cloud pages.
- `Status` component (Available / Planned / Experimental) and feature-status labels across pages.
- Available-now and Planned feature lists on the Introduction page.

### Changed

- Rewrote the `.titan.json` format and Type system references to match the real `@titanbase/core` schema (`titanVersion`, `project`, `dialect`, id-based tables/columns/indexes/relations, string defaults, enums by type name, composite relations, editor table positions).
- Rewrote the Exporters page around the implemented exporters: Titan JSON, PostgreSQL SQL, Mermaid, Prisma, and Drizzle.
- Updated Architecture to list implemented packages and a separate Planned packages section.
- Reframed the CLI page as Planned and marked the Plugin API as Experimental with the real `ExportResult` shape.
- Reorganized navigation into Getting Started, Concepts, Reference, Planned, and Contributing.

[0.2.0]: https://github.com/titanbaserun/docs/releases/tag/v0.2.0

## [0.1.0] — June 2026

Initial release of the documentation site at [docs.titanbase.run](https://docs.titanbase.run).

### Added

- Next.js + MDX documentation site with Titanbase branding.
- Getting Started: Introduction and Quickstart.
- Concepts: Architecture and the IR model.
- Reference: `.titan.json` format, Type system, Exporters, and CLI.
- Extend: Plugin API and Contributing.
- Sidebar navigation, on-this-page table of contents, and prev/next pager.
- Project meta: README, CONTRIBUTING, CODE_OF_CONDUCT, SECURITY, and CI workflow.

[0.1.0]: https://github.com/titanbaserun/docs/releases/tag/v0.1.0
