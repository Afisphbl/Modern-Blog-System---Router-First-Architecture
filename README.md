# Modern Blog System (Router-First Architecture)

A modern, responsive blog web application built with React, Vite, and React Router Data APIs.

The project follows a router-first approach where route loaders and actions are the primary place for fetching and mutating data. It includes post listing, filtering, searching, detailed post views, author pages, and full post CRUD operations using a local JSON API.

## Live Purpose

This web app is designed to demonstrate how to build a clean, scalable blog frontend using:

- React Router `createBrowserRouter`
- Route-level `loader` and `action`
- Form submissions through router actions
- Local mock backend with `json-server`

## Features

- Responsive home page with featured posts
- Posts page with category filtering and text search via URL query params
- Post details page with edit and delete actions
- Create and edit post forms using router actions
- Author profile page with all posts by that author
- Reusable UI components (navbar, cards, forms, loading/error states)
- Graceful loading and error handling at route level

## Tech Stack

- React 19
- React Router DOM 6 (Data API style)
- Vite 8
- JSON Server
- Lucide React (icons)
- ESLint 9

## Router-First Architecture

The app is organized around route responsibilities:

- `loader`: fetches route data before rendering
- `action`: handles form submissions and mutations
- `errorElement`: route-level error boundary UI

Primary routes:

- `/` -> Home with featured posts
- `/posts` -> All posts + filter/search
- `/posts/:postId` -> Post detail
- `/posts/:postId/edit` -> Edit post
- `/posts/new` -> Create post
- `/authors/:authorId` -> Author profile + authored posts

## Getting Started

### 1. Clone and install dependencies

```bash
npm install
```

### 2. Configure environment variables

Create a `.env` file in the project root:

```env
VITE_BASE_URL=http://localhost:3001
```

### 3. Run backend mock API

```bash
npm run server
```

This starts `json-server` using `src/data/db.json` on port `3001`.

### 4. Run frontend

```bash
npm run dev
```

Open the URL shown by Vite (usually `http://localhost:5173`).

## Available Scripts

- `npm run dev` - Start Vite development server
- `npm run build` - Create production build
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint checks
- `npm run server` - Start JSON Server API

## Project Structure

```text
.
|- src/
|  |- api/                # Data access helpers (posts/authors)
|  |- components/         # Reusable UI components
|  |- data/               # Local mock database (db.json)
|  |- pages/              # Route pages and route loaders/actions
|  |- router/             # Layout and router-related styles
|  |- App.jsx             # Router definition
|  |- main.jsx            # React entry point
|  |- index.css           # Global styles
|- index.html
|- package.json
|- vite.config.js
|- eslint.config.js
```

## Data Model (Mock API)

`posts` example:

```json
{
  "id": "2",
  "title": "Why Tailwind CSS V4 is a Game Changer",
  "content": "...",
  "category": "CSS",
  "authorId": "1",
  "author": "Ahmed",
  "date": "2026-01-10",
  "image": "https://picsum.photos/400/200?random=2"
}
```

`authors` example:

```json
{
  "id": "1",
  "name": "Ahmed",
  "bio": "Frontend developer passionate about modern web technologies."
}
```

## Future Improvements

- Add authentication and role-based permissions (admin/editor)
- Add rich text editor support for post content
- Add pagination and sorting for larger post collections
- Add image upload with cloud storage integration
- Add form validation with clearer inline error messages
- Add unit and integration tests (React Testing Library + Vitest)
- Add API abstraction with request caching and retry strategy
- Add CI pipeline (lint, test, build) with GitHub Actions
- Improve accessibility coverage (keyboard and screen reader audits)
- Add dark mode and user preferences persistence

## Author

- **Abduselam Seid**
- Email: `abuabdurehman0308@gmail.com`

## License

This project is currently unlicensed. Add a `LICENSE` file to define usage and distribution terms.
