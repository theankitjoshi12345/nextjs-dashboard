# Next.js Dashboard Learning Project

> **On hold:** I am currently focusing on Django and TypeScript, so I am not completing this Next.js project at this time.

A learning project based on the [Next.js App Router course](https://nextjs.org/learn). The repository includes dashboard navigation, reusable UI components, invoice/customer views, PostgreSQL data helpers, and seed/query routes.

## Current state
The dashboard, customer, and invoice page entry points are placeholders. Several UI components and data helpers come from the course starter. The presence of components or a NextAuth dependency does not mean the full dashboard or authentication flow is implemented.

## Stack
Next.js App Router, React, TypeScript, Tailwind CSS, PostgreSQL, and pnpm.

## Run locally
Install Node.js and pnpm, then:
```sh
pnpm install
cp .env.example .env.local
pnpm dev
```
Open http://localhost:3000. Populate the environment variables with your own local/development database configuration if using database-backed routes. Keep `.env.local` and credentials out of source control. Consult the linked course for database setup.

## Reviewer notes
- `app/dashboard/`: navigation/layout and placeholder pages.
- `app/ui/`: dashboard, invoice, customer, and login UI components.
- `app/lib/`: types, formatting utilities, placeholder data, and PostgreSQL helpers.
- `app/seed/route.ts` and `app/query/route.ts`: development database routes; review before exposing a deployment.

`pnpm build` builds the app, and `pnpm start` serves a successful production build. No automated test script is configured. A working hosted demo, completed CRUD flow, or Claude/Gemini integration is not claimed.

## Attribution and license
Based on the Next.js course starter. See [LICENSE](LICENSE); upstream code and assets retain their original rights.
