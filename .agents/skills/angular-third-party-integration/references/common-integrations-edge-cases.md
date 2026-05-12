# Common Integration Edge Cases

Known issues, workarounds, and framework-specific quirks encountered during third-party library integrations. This file is a living document — agents **MUST** append new findings during each integration session.

## How to Use This File

Before integrating a library, search this file for the library name. If found, append the documented workarounds to the generated `.llms.txt` context file for that library.

---

## Template for New Entries

```markdown
### [Library Name] vX.X + Angular vXX

**Problem:** [Description]
**Root Cause:** [Why it happens]
**Fix:** [Exact steps]
**Date Discovered:** YYYY-MM-DD
```

---

<!-- Add entries below this line -->

### @spartan-ng/cli v0.0.1-alpha.656 + Angular v21

**Problem:** `ng g @spartan-ng/cli:init --defaults --interactive=false` still shows interactive prompts. The "Choose which application" prompt uses a fuzzy-search select that does not respond to plain Enter key in `expect` automation.
**Root Cause:** The Spartan CLI schematic always forces the application selection prompt regardless of `--defaults` or `--interactive=false` flags.
**Fix:** Use `expect` with `send "my-supapp\r"` (type the full app name then Enter) after matching "Choose which application". The `--defaults` flag alone is insufficient.
**Date Discovered:** 2026-03-25

### @spartan-ng/cli:ui (icon) v0.0.1-alpha.656 + Angular v21

**Problem:** The generated `libs/ui/` directory is outside `src/`, causing TypeScript compilation errors because `tsconfig.app.json` only includes `src/**/*.ts`.
**Root Cause:** Spartan CLI copies helm components to `libs/ui/` which is not in the default Angular app include path.
**Fix:** Add `"libs/**/*.ts"` to the `include` array in `tsconfig.app.json`.
**Date Discovered:** 2026-03-25

### Genkit v1.30.1 + Angular v21 SSR

**Problem:** Build warnings about `node-domexception` and `web-streams-polyfill` not being ESM modules.
**Root Cause:** Genkit's upstream dependency `fetch-blob` uses CommonJS modules internally.
**Fix:** These are non-blocking warnings from the Angular build. No action needed; they don't affect functionality.
**Date Discovered:** 2026-03-25

### Genkit v1.30.1 — Import Order in server.ts

**Problem:** Adding Genkit imports to `server.ts` can cause `import-x/order` ESLint errors if imports are placed after the first non-import statement.
**Root Cause:** Genkit import (`@genkit-ai/express`) and local flow import need to be grouped with other imports at the top, before any `const` declarations.
**Fix:** Ensure all Genkit-related imports are placed in the correct import groups at the top of `server.ts`: external packages (`@genkit-ai/express`) with other external imports, and local flow files (`./genkit/...`) in the local imports group.
**Date Discovered:** 2026-03-25

### @angular/material v21.2.5 + Angular v21

**Problem:** `provideAnimationsAsync()` can fail the Angular build with `Could not resolve "@angular/animations/browser"` immediately after `ng add @angular/material --defaults`.
**Root Cause:** The Material schematic updated theme files but did not add `@angular/animations` to dependencies in this workspace, while the async animation provider dynamically imports it.
**Fix:** Install `@angular/animations` with the same Angular major version as the app, then keep `provideAnimationsAsync()` in the application config.
**Date Discovered:** 2026-04-08

### tailwindcss v4.2.2 + Angular v21 (SCSS workspace)

**Problem:** Mixing Tailwind v4 directly into the existing global SCSS entrypoint can create Sass workflow friction because Tailwind v4 is designed around a CSS-first pipeline.
**Root Cause:** Tailwind v4's official compatibility guidance discourages using Tailwind itself as a Sass preprocessor workflow, while Angular projects may still use SCSS for app styles.
**Fix:** Keep Tailwind in a dedicated CSS entry file such as `src/tailwind.css`, configure PostCSS with `@tailwindcss/postcss`, and load that CSS alongside the existing SCSS global stylesheet in `angular.json`.
**Date Discovered:** 2026-04-09

### tailwindcss v4.2.2 + Angular v21 build warning

**Problem:** Angular build may emit a non-blocking CSS warning like `Expected ";" [css-syntax-error]` pointing at generated `@layer utilities` output from `src/tailwind.css`.
**Root Cause:** Angular's CSS parser surfaces a warning while processing Tailwind v4 layered output, even though Tailwind utilities are generated and the application bundle completes successfully.
**Fix:** Treat as non-blocking if the bundle succeeds and Tailwind utilities render correctly. Verify utility output in the app and keep the CSS-first PostCSS setup. Revisit when Angular or Tailwind releases a parser-side fix.
**Date Discovered:** 2026-04-09
