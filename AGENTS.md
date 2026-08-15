# Project Architecture & Engineering Standards

This repository follows a strict, modular, type-safe architecture for a static Next.js application with bilingual (English & Japanese) support. All future changes and features must adhere to the patterns defined below.

---

## 1. Directory Structure & Separation of Concerns

```
src/
├── app/                  # Next.js App Router (layout, page, static routes, SEO)
│   ├── layout.tsx        # Root layout with bilingual JSON-LD schema & meta tags
│   ├── robots.ts         # Static robots.txt generator
│   └── sitemap.ts        # Static sitemap.xml generator
├── components/           # Pure UI presentation components
│   ├── sections/         # Page sections (e.g. hero.tsx)
│   ├── icons.tsx         # Self-hosted SVG icons using currentColor
│   └── index.ts          # Central barrel export for components
├── hooks/                # Headless custom hooks (state & browser logic)
│   ├── use-theme.ts      # Theme state via useSyncExternalStore
│   ├── use-locale.ts     # Locale state & document sync via useSyncExternalStore
│   ├── use-disclosure.ts # Modal lifecycle, body scroll lock, Escape key handler
│   └── index.ts          # Central barrel export for hooks
├── lib/                  # Application configuration, i18n & utilities
│   ├── dictionaries/     # Bilingual dictionary files (en.ts, ja.ts)
│   ├── site-config.ts    # Locale-agnostic site configuration & social links
│   ├── i18n.ts           # i18n helper functions and type guards
│   ├── utils.ts          # Pure utility functions (cn, delay, safeStorage, copyToClipboard)
│   └── index.ts          # Central barrel export for lib
└── types/                # Central Single Source of Truth (SSOT) for domain models
    └── index.ts          # Dictionary, SocialLink, ThemeMode, HighlightItem, etc.
```

---

## 2. Architectural Principles & Rules

### A. State Decoupling via Custom Hooks
- **No Direct Browser Storage / Media Query logic in UI Components**: Always encapsulate `localStorage`, `matchMedia`, or window event listeners inside dedicated hooks in `src/hooks/`.
- **Hydration Safety**: Use `useSyncExternalStore` for client-side state (`theme`, `locale`) to eliminate SSR hydration mismatch warnings and render cascades.
- **Modal Logic**: Use the `useDisclosure` hook for managing modal visibility, scroll-locking `document.body`, and `Escape` key listeners.

### B. Single Source of Truth for Types (`src/types/index.ts`)
- All shared interfaces, union types, and domain shapes must be defined in `src/types/index.ts`.
- Use `readonly` modifier for dictionary, configuration, and list definitions to enforce immutability.
- Use `satisfies Record<KeyType, ...>` or discriminated unions for mapping objects (e.g., icon maps, topic maps).

### C. Bilingual Parity (English & Japanese)
- Every UI string, placeholder, tag, or label must have a corresponding key in `src/lib/dictionaries/en.ts` and `src/lib/dictionaries/ja.ts`.
- **Identity & Titles**:
  - English: `IFTEKHAR I ASIF` / `AI-NATIVE PRODUCT & TECH LEADER`
  - Japanese: `イドリス イフテカール アシフ` / `AIネイティブ プロダクト & 技術リーダー`
  - Location: `TOKYO, JAPAN` / `東京、日本`

### D. Privacy & Security
- **No Plaintext Contact Emails in Public Frontend**: Do not expose raw email addresses in public UI text or `mailto:` anchors.
- All user inquiries must be handled through the accessible **`ContactModal`** component.

### E. Modern ES / TypeScript Standards
- Prefer arrow functions and functional composition.
- Use optional chaining (`?.`), nullish coalescing (`??`), and type guards (e.g. `isLocale`).
- Clean barrel exports (`index.ts`) for `@/components`, `@/hooks`, and `@/lib`.

### F. Build & Deployment Compatibility
- Configuration must maintain `output: "export"` compatibility for GitHub Pages in `next.config.ts`.
- Package manager: **pnpm** (requires Node.js >= 22.13 due to `node:sqlite`).
- Verify all changes with:
  ```bash
  pnpm lint
  pnpm build
  ```
