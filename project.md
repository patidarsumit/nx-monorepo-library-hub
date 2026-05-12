# Library Hub — Enterprise Nx Angular Project Architecture

## 1. Project Overview

**Library Hub** is an internal company library and resource management platform built with **Nx + Angular**.

The goal of this project is not only to build a simple library CRUD application, but to learn and implement a professional, enterprise-style Angular architecture that can scale in a large organization.

This project should be treated as a real internal company platform where employees can search and borrow books/resources, admins can manage inventory and requests, and managers can view useful reports.

---

## 2. What We Want to Achieve

The main goal is to build a scalable frontend system using:

- Nx monorepo architecture
- Angular standalone components
- Domain-based library structure
- Lazy-loaded feature modules/routes
- Shared UI components
- Data-access layer separation
- Role-based access control
- Professional enterprise folder structure
- Testable and maintainable frontend code
- Future-ready architecture for microfrontends and backend integration

This project should help understand how large organizations structure frontend applications.

---

## 3. Business Problem

Many companies maintain books, training resources, certifications, documents, and learning materials internally.

Without a proper system, employees may face issues such as:

- Not knowing which books/resources are available
- Manual tracking of issued and returned books
- No visibility on overdue items
- No reservation system
- No reporting for resource usage
- No centralized admin workflow

Library Hub solves this by providing a centralized internal platform.

---

## 4. Main Users

| User Role | Responsibility |
|---|---|
| Employee | Search books, view details, request borrow, view borrowed items |
| Librarian/Admin | Manage books, approve requests, issue/return books |
| Manager | View reports and resource usage trends |

---

## 5. High-Level Features

### Employee Features

- View available books/resources
- Search and filter books
- View book details
- Request to borrow a book
- View current borrowed books
- View due dates
- Reserve unavailable books

### Admin Features

- Add new books
- Edit book details
- Remove/archive books
- Approve borrow requests
- Mark books as issued
- Mark books as returned
- Track overdue books

### Reports Features

- Most borrowed books
- Active borrow requests
- Overdue books
- Category-wise book usage
- Monthly borrowing trends

---

## 6. Current Nx Workspace Structure

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
│   │   ├── auth/
│   │   └── utils/
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

## 7. Application Layer

### apps/library-portal

This is the main Angular application.

Responsibilities:

- Application bootstrap
- Main routing
- App shell/layout
- Lazy-loading domain features
- Connecting high-level navigation
- Keeping app-level configuration

The app should not contain heavy business logic. Business features should live inside libraries.

### apps/library-portal-e2e

This is the Playwright E2E test project.

Responsibilities:

- End-to-end tests
- Navigation flow testing
- User journey testing
- Regression testing

---

## 8. Shared Libraries

### libs/shared/ui

This library contains reusable UI components that can be used across all domains.

Examples:

- Header
- Sidebar
- Page title
- Buttons
- Cards
- Modal
- Table
- Empty state
- Loader

Rules:

- Should not contain business logic
- Should not call APIs directly
- Should remain reusable and presentation-focused

---

### libs/shared/auth

This library contains authentication and authorization logic.

Examples:

- Auth guards
- Role guards
- Permission helpers
- Auth state
- Login/logout utilities
- Token helpers

Future use:

- Employee/Admin/Manager role handling
- Route-level permission checks
- UI permission checks

---

### libs/shared/utils

This library contains reusable helper functions.

Examples:

- Date formatting
- String formatting
- Common constants
- Validation helpers
- Array/object utilities

Rules:

- Should be framework-light where possible
- Should not contain domain-specific logic
- Should not depend on feature libraries

---

## 9. Books Domain

The books domain handles all book/resource-related functionality.

### libs/books/feature-list

This is a feature library for the book listing page.

Responsibilities:

- Display list of books
- Search books
- Filter by category, author, status
- Connect to books data-access library
- Use books-ui components for presentation

Example route:

```text
/books
```

Expected components:

- BookListPageComponent
- BookFiltersComponent if needed
- BookSearchComponent if needed

---

### libs/books/feature-detail

This is a feature library for the book detail page.

Responsibilities:

- Display detailed book information
- Show availability status
- Show borrow/reserve action
- Fetch book by ID through data-access

Example route:

```text
/books/:id
```

Expected components:

- BookDetailPageComponent

---

### libs/books/data-access

This library owns book-related API calls, state, and models.

Responsibilities:

- Fetch books
- Fetch book by ID
- Create/update/delete books
- Maintain book state if needed
- Provide facade/service for book operations

Possible files:

```text
books-api.service.ts
books.facade.ts
book.model.ts
book-status.enum.ts
```

Rules:

- Feature libraries can use data-access
- UI libraries should not use data-access directly
- API logic should not be written inside components

---

### libs/books/ui

This library contains reusable book-specific UI components.

Examples:

- BookCardComponent
- BookStatusBadgeComponent
- BookCoverComponent
- BookInfoComponent

Rules:

- Should receive data using `@Input`
- Should emit actions using `@Output`
- Should not call APIs
- Should not know about routing unless required

---

## 10. Borrowing Domain

The borrowing domain handles borrow requests, issue flow, return flow, and reservations.

### libs/borrowing/feature-requests

Responsibilities:

- Display borrow requests
- Create borrow request
- Show request status
- Admin approval/rejection UI
- Connect to borrowing data-access

Example route:

```text
/borrowing/requests
```

Possible statuses:

- Pending
- Approved
- Rejected
- Issued
- Returned
- Overdue

---

### libs/borrowing/data-access

Responsibilities:

- Fetch borrow requests
- Create borrow request
- Approve request
- Reject request
- Issue book
- Return book
- Track due dates

Possible files:

```text
borrowing-api.service.ts
borrowing.facade.ts
borrow-request.model.ts
borrow-status.enum.ts
```

---

## 11. Reports Domain

The reports domain provides dashboard and analytics features.

### libs/reports/feature-dashboard

Responsibilities:

- Display dashboard cards
- Show charts
- Show borrowing summary
- Show overdue summary
- Show top borrowed books

Example route:

```text
/reports
```

---

### libs/reports/data-access

Responsibilities:

- Fetch dashboard summary
- Fetch chart data
- Fetch report metrics
- Provide reports facade/service

Possible reports:

- Total books
- Active borrowed books
- Pending requests
- Overdue books
- Most borrowed categories

---

## 12. Recommended Routing Plan

The main app should lazy-load feature libraries.

Example routes:

```text
/
  Redirect to /books

/books
  Book list page

/books/:id
  Book detail page

/borrowing/requests
  Borrow request management

/reports
  Reports dashboard
```

Recommended app route structure:

```ts
export const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'books',
    pathMatch: 'full',
  },
  {
    path: 'books',
    loadComponent: () =>
      import('@library-hub/books/feature-list').then(
        (m) => m.BookListComponent
      ),
  },
  {
    path: 'books/:id',
    loadComponent: () =>
      import('@library-hub/books/feature-detail').then(
        (m) => m.BookDetailComponent
      ),
  },
  {
    path: 'borrowing/requests',
    loadComponent: () =>
      import('@library-hub/borrowing/feature-requests').then(
        (m) => m.BorrowingRequestsComponent
      ),
  },
  {
    path: 'reports',
    loadComponent: () =>
      import('@library-hub/reports/feature-dashboard').then(
        (m) => m.ReportsDashboardComponent
      ),
  },
];
```

Note: Actual exported component names should match generated files.

---

## 13. Architecture Rules

### Rule 1: Apps should be thin

The Angular app should mainly compose features.

Avoid putting domain logic directly inside `apps/library-portal`.

---

### Rule 2: Feature libraries can use data-access and UI

Allowed:

```text
books-feature-list -> books-data-access
books-feature-list -> books-ui
books-feature-list -> shared-ui
```

---

### Rule 3: UI libraries should be dumb

UI components should not call APIs directly.

Bad:

```text
books-ui -> books-data-access
```

Good:

```text
books-feature-list -> books-data-access
books-feature-list -> books-ui
```

---

### Rule 4: Shared libraries should not depend on domain libraries

Bad:

```text
shared-ui -> books-data-access
shared-utils -> borrowing-data-access
```

Good:

```text
books-feature-list -> shared-ui
borrowing-feature-requests -> shared-ui
reports-feature-dashboard -> shared-ui
```

---

### Rule 5: Data-access owns API/state logic

Do not write HTTP calls inside page components.

Bad:

```ts
BookListComponent directly calls HttpClient
```

Good:

```ts
BookListComponent -> BooksFacade -> BooksApiService -> HttpClient
```

---

## 14. Suggested Development Phases

### Phase 1: App Shell and Layout

Build:

- Header
- Sidebar
- Shell layout
- Main navigation
- Router outlet

Routes:

- Books
- Borrowing Requests
- Reports

---

### Phase 2: Books Feature

Build:

- Static book list page
- Book card component
- Book detail page
- Mock books service
- Search/filter UI

---

### Phase 3: Borrowing Feature

Build:

- Borrow request list
- Request status badges
- Borrow request form
- Approve/reject actions
- Mock borrowing service

---

### Phase 4: Reports Feature

Build:

- Dashboard cards
- Basic metrics
- Simple charts
- Mock reports service

---

### Phase 5: Auth and Permissions

Build:

- Mock login
- User roles
- Route guards
- Permission-based menu items

Roles:

- Employee
- Admin
- Manager

---

### Phase 6: Backend Integration

Possible backend options:

- Mock JSON server first
- NestJS API later
- PostgreSQL later

Expected API endpoints:

```text
GET /books
GET /books/:id
POST /books
PUT /books/:id
DELETE /books/:id

GET /borrow-requests
POST /borrow-requests
PATCH /borrow-requests/:id/approve
PATCH /borrow-requests/:id/reject
PATCH /borrow-requests/:id/return

GET /reports/dashboard
```

---

## 15. Suggested Models

### Book

```ts
export interface Book {
  id: string;
  title: string;
  author: string;
  category: string;
  isbn: string;
  status: BookStatus;
  totalCopies: number;
  availableCopies: number;
  description?: string;
  coverUrl?: string;
}
```

### BookStatus

```ts
export enum BookStatus {
  Available = 'available',
  Borrowed = 'borrowed',
  Reserved = 'reserved',
  Archived = 'archived',
}
```

### BorrowRequest

```ts
export interface BorrowRequest {
  id: string;
  bookId: string;
  employeeId: string;
  requestedDate: string;
  dueDate?: string;
  returnedDate?: string;
  status: BorrowRequestStatus;
}
```

### BorrowRequestStatus

```ts
export enum BorrowRequestStatus {
  Pending = 'pending',
  Approved = 'approved',
  Rejected = 'rejected',
  Issued = 'issued',
  Returned = 'returned',
  Overdue = 'overdue',
}
```

---

## 16. Suggested UI Pages

### Main Layout

- Sidebar navigation
- Header
- Content area
- Responsive design

### Books Page

- Page title
- Search bar
- Category filter
- Availability filter
- Book cards/list
- Empty state

### Book Detail Page

- Book information
- Availability
- Borrow/reserve button
- Related books placeholder

### Borrowing Requests Page

- Table/list of requests
- Status filter
- Approve/reject buttons for admin
- Return action

### Reports Dashboard

- Total books
- Borrowed books
- Pending requests
- Overdue books
- Popular books chart

---

## 17. Testing Strategy

### Unit Tests

Use unit tests for:

- utility functions
- services
- facades
- components with inputs/outputs

### Component Tests

Use component tests for:

- book card rendering
- status badge rendering
- empty state rendering
- form validation

### E2E Tests

Use Playwright for:

- navigation
- book list page load
- book detail navigation
- borrowing request flow
- reports page load

---

## 18. Nx Commands

### Show Projects

```bash
npx nx show projects
```

### Run App

```bash
npx nx serve library-portal
```

### Build App

```bash
npx nx build library-portal
```

### Test Project

```bash
npx nx test books-feature-list
```

### Run E2E

```bash
npx nx e2e library-portal-e2e
```

### Dependency Graph

```bash
npx nx graph
```

### Dry Run Generator

```bash
npx nx g @nx/angular:component some/path --dry-run
```

---

## 19. What Codex Should Do Next

Codex should implement the project in this order:

1. Create app shell layout in `apps/library-portal`
2. Create shared UI components:
   - header
   - sidebar
   - page title
3. Configure main app routing
4. Implement books mock data and data-access service
5. Implement books list page
6. Implement book card component
7. Implement book detail page
8. Implement borrowing request mock data and page
9. Implement reports dashboard with mock metrics
10. Add basic role-based auth mock
11. Add unit tests for core services/components
12. Add basic Playwright E2E navigation tests

---

## 20. Final Goal

The final application should demonstrate how to build an enterprise-grade Angular frontend using Nx.

It should not be treated as a basic CRUD app.

It should demonstrate:

- clean architecture
- domain separation
- reusable UI
- API abstraction
- role-based access
- lazy loading
- maintainability
- testability
- scalability

This project should be useful as a learning project, architecture showcase, and interview discussion project.


skills
npx nx configure-ai-agents
npx skills add https://github.com/angular/skills
