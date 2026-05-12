# Library Hub

Library Hub is an internal library and resource management platform built with
Nx and Angular. The project is structured as an enterprise-style Angular
monorepo so features can grow by domain while the app shell stays thin.

## Current Workspace

```text
library-hub/
├── apps/
│   ├── library-portal/
│   └── library-portal-e2e/
├── libs/
│   ├── shared/
│   │   ├── ui/
│   │   ├── auth/
│   │   └── utils/
│   ├── books/
│   │   ├── feature-list/
│   │   ├── feature-detail/
│   │   ├── data-access/
│   │   └── ui/
│   ├── borrowing/
│   │   ├── feature-requests/
│   │   └── data-access/
│   └── reports/
│       ├── feature-dashboard/
│       └── data-access/
├── nx.json
├── package.json
├── tsconfig.base.json
└── eslint.config.mjs
```

## Tech Stack

- Angular `21`
- Nx `22`
- Standalone Angular components
- Jest for unit tests
- Cypress for e2e tests
- ESLint with Nx module-boundary support
- SCSS at the app level, CSS for generated components

## Project Goals

- Keep the application layer thin.
- Organize business features by domain.
- Lazy-load feature libraries from the app router.
- Keep shared UI presentation-focused.
- Keep API/state/data logic inside data-access libraries.
- Add role-based access through shared auth.
- Use Nx tags and module-boundary rules to protect architecture.

## Main Domains

### App: `apps/library-portal`

Owns bootstrap, application configuration, global routing, and the shell
layout. It should compose libraries rather than contain business logic.

### Shared Libraries

- `libs/shared/ui`: reusable layout and presentation components.
- `libs/shared/auth`: authentication, authorization, guards, and permissions.
- `libs/shared/utils`: reusable formatting, validation, and helper utilities.

### Books Domain

- `libs/books/feature-list`: book list page, search, and filtering.
- `libs/books/feature-detail`: book detail page and borrow/reserve actions.
- `libs/books/data-access`: book models, mock/API services, and facades.
- `libs/books/ui`: book-specific presentational components.

### Borrowing Domain

- `libs/borrowing/feature-requests`: borrow request views and admin workflow.
- `libs/borrowing/data-access`: borrow request models, services, and facades.

### Reports Domain

- `libs/reports/feature-dashboard`: dashboard and reporting views.
- `libs/reports/data-access`: report metrics, summaries, and facades.

## Current Status

This workspace is still in the scaffold phase.

- The app builds successfully.
- Lint passes for all projects.
- Jest unit tests pass for all test-enabled projects.
- The route table is currently empty.
- The app still renders the generated Nx welcome component.
- Generated components currently render placeholder "works" templates.
- Data-access libraries still contain generated placeholder components.
- Nx project tags are empty, so module-boundary rules are not enforcing the
  intended enterprise layering yet.

## Local Commands

Install dependencies:

```sh
npm install
```

Run the app:

```sh
npx nx serve library-portal
```

Build the app:

```sh
npx nx build library-portal
```

Run all lint targets:

```sh
npx nx run-many -t lint --all
```

Run all unit tests:

```sh
npx nx run-many -t test --all --runInBand
```

Show all projects:

```sh
npx nx show projects
```

Open the project graph:

```sh
npx nx graph
```

## Recommended Route Plan

The app should lazy-load feature libraries from `apps/library-portal`.

```text
/                    redirect to /books
/books               book list
/books/:id           book detail
/borrowing/requests  borrow request workflow
/reports             reports dashboard
```

## Architecture Rules

Apps should compose features and stay thin.

Feature libraries may depend on their domain data-access libraries, their domain
UI libraries, and shared libraries.

Data-access libraries should own models, services, facades, API calls, mock
data, and state helpers.

UI libraries should receive data through inputs, emit actions through outputs,
and avoid direct API or routing logic.

Shared libraries should not depend on domain libraries.

## Recommended Nx Tags

Add tags to each `project.json` before feature work grows:

```text
scope:app
scope:shared
scope:books
scope:borrowing
scope:reports

type:app
type:feature
type:data-access
type:ui
type:util
type:auth
```

Once tags exist, update `@nx/enforce-module-boundaries` in
`eslint.config.mjs` so the intended dependency direction is enforced.

## Suggested Development Phases

### Phase 1: App Shell

- Remove the Nx welcome component.
- Render the app shell.
- Build header, sidebar, and page title components.
- Add primary navigation.
- Configure lazy routes.

### Phase 2: Books

- Add book models and mock data.
- Create a books facade/service.
- Build book list and detail pages.
- Add reusable book card UI.
- Add search and filters.

### Phase 3: Borrowing

- Add borrow request models and mock data.
- Build request list and status views.
- Add request creation, approval, rejection, issue, and return flows.

### Phase 4: Reports

- Add dashboard metrics.
- Add summary cards and simple charts.
- Surface overdue, active, and category-level reporting.

## Notes

Some setup notes mention Vitest and Playwright, but the current workspace uses
Jest and Cypress. Keep the documentation and generators aligned before adding
more libraries or tests.
