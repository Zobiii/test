# C# Docs Template (Preact + Vite + Tailwind)

A static documentation-site boilerplate focused on source-generated TSX pages.

## Why this layout

- Each symbol page is a standalone TSX module (`src/pages/api/T_*.tsx`).
- DocID routing: `T:System.String` -> `/api/T_System_String/`.
- Multi-page Vite build outputs static HTML files suitable for NGINX.
- Shared UI components keep generated docs minimal.

## Scripts

```bash
pnpm install
pnpm dev
pnpm build
pnpm check
```
