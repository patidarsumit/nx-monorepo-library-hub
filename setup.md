# Library Hub — Nx + Angular Enterprise Setup

## 1. Delete Existing Workspace

```bash
cd ~/sumit
rm -rf library-hub
```

---

# 2. Create Fresh Nx Angular Workspace

```bash
npx create-nx-workspace@latest library-hub \
  --preset=angular-monorepo \
  --appName=library-portal \
  --bundler=esbuild \
  --style=scss \
  --routing=true \
  --ssr=false \
  --unitTestRunner=vitest \
  --e2eTestRunner=playwright \
  --nxCloud=skip
```

---

# 3. Go Inside Workspace

```bash
cd library-hub
```

---

# 4. Generate Shared Libraries

## Shared UI

```bash
npx nx g @nx/angular:library \
  --name=shared-ui \
  --directory=libs/shared/ui \
  --standalone \
  --unitTestRunner=vitest-analog
```

## Shared Utils

```bash
npx nx g @nx/angular:library \
  --name=shared-utils \
  --directory=libs/shared/utils \
  --standalone \
  --unitTestRunner=vitest-analog
```

## Shared Auth

```bash
npx nx g @nx/angular:library \
  --name=shared-auth \
  --directory=libs/shared/auth \
  --standalone \
  --unitTestRunner=vitest-analog
```

---

# 5. Generate Books Domain Libraries

## Books Feature List

```bash
npx nx g @nx/angular:library \
  --name=books-feature-list \
  --directory=libs/books/feature-list \
  --standalone \
  --unitTestRunner=vitest-analog
```

## Books Feature Detail

```bash
npx nx g @nx/angular:library \
  --name=books-feature-detail \
  --directory=libs/books/feature-detail \
  --standalone \
  --unitTestRunner=vitest-analog
```

## Books Data Access

```bash
npx nx g @nx/angular:library \
  --name=books-data-access \
  --directory=libs/books/data-access \
  --standalone \
  --unitTestRunner=vitest-analog
```

## Books UI

```bash
npx nx g @nx/angular:library \
  --name=books-ui \
  --directory=libs/books/ui \
  --standalone \
  --unitTestRunner=vitest-analog
```

---

# 6. Generate Borrowing Domain Libraries

## Borrowing Feature Requests

```bash
npx nx g @nx/angular:library \
  --name=borrowing-feature-requests \
  --directory=libs/borrowing/feature-requests \
  --standalone \
  --unitTestRunner=vitest-analog
```

## Borrowing Data Access

```bash
npx nx g @nx/angular:library \
  --name=borrowing-data-access \
  --directory=libs/borrowing/data-access \
  --standalone \
  --unitTestRunner=vitest-analog
```

---

# 7. Generate Reports Domain Libraries

## Reports Feature Dashboard

```bash
npx nx g @nx/angular:library \
  --name=reports-feature-dashboard \
  --directory=libs/reports/feature-dashboard \
  --standalone \
  --unitTestRunner=vitest-analog
```

## Reports Data Access

```bash
npx nx g @nx/angular:library \
  --name=reports-data-access \
  --directory=libs/reports/data-access \
  --standalone \
  --unitTestRunner=vitest-analog
```

---

# 8. Verify Projects

```bash
npx nx show projects
```

Expected output:

```text
library-portal
library-portal-e2e

shared-ui
shared-utils
shared-auth

books-feature-list
books-feature-detail
books-data-access
books-ui

borrowing-feature-requests
borrowing-data-access

reports-feature-dashboard
reports-data-access
```

---

# 9. Generate Components (Nx v22 Syntax)

## App Shell

```bash
npx nx g @nx/angular:component \
  apps/library-portal/src/app/layout/shell
```

---

## Shared UI Components

### Header

```bash
npx nx g @nx/angular:component \
  libs/shared/ui/src/lib/components/header \
  --export
```

### Sidebar

```bash
npx nx g @nx/angular:component \
  libs/shared/ui/src/lib/components/sidebar \
  --export
```

### Page Title

```bash
npx nx g @nx/angular:component \
  libs/shared/ui/src/lib/components/page-title \
  --export
```

---

## Books Components

### Book List Page

```bash
npx nx g @nx/angular:component \
  libs/books/feature-list/src/lib/pages/book-list \
  --export
```

### Book Detail Page

```bash
npx nx g @nx/angular:component \
  libs/books/feature-detail/src/lib/pages/book-detail \
  --export
```

### Book Card Component

```bash
npx nx g @nx/angular:component \
  libs/books/ui/src/lib/components/book-card \
  --export
```

---

# 10. Run Application

```bash
npx nx serve library-portal
```

Open:

```text
http://localhost:4200
```

---

# Final Enterprise Structure

```text
library-hub/
│
├── apps/
│   ├── library-portal/
│   └── library-portal-e2e/
│
├── libs/
│   ├── shared/
│   │   ├── ui/
│   │   ├── utils/
│   │   └── auth/
│   │
│   ├── books/
│   │   ├── feature-list/
│   │   ├── feature-detail/
│   │   ├── data-access/
│   │   └── ui/
│   │
│   ├── borrowing/
│   │   ├── feature-requests/
│   │   └── data-access/
│   │
│   └── reports/
│       ├── feature-dashboard/
│       └── data-access/
│
├── nx.json
├── package.json
├── tsconfig.base.json
└── eslint.config.mjs
```

---

# Useful Nx Commands

## Show Projects

```bash
npx nx show projects
```

## Dependency Graph

```bash
npx nx graph
```

## Dry Run Generator

```bash
npx nx g @nx/angular:component some/path --dry-run
```

## Generator Help

```bash
npx nx g @nx/angular:component --help
```
