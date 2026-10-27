# Online Resume

Sachin Khargie's online portfolio: a single-page app that shows my experience, projects, NeetCode progress, and a bit about me in more detail than a standard resume.

**Live site:** https://onlineresume-e0975.web.app

## Features

- **Single-page app with a custom router.** Pages switch instantly without a full reload, and browser back/forward buttons work as expected.
- **Typing headline.** The home page types and deletes a rotating list of roles.
- **Animated navigation.** The home page buttons swoop in one after another when the page loads.
- **Live particle background.** A drifting network of dots and links sits behind every page and connects to the mouse pointer.
- **Mobile friendly.** Headings scale with the screen, buttons go full width on phones, and hover effects only apply to devices with a mouse.
- **Accessible motion.** Visitors who have "reduce motion" turned on get a still background and no button animation.

## Tech stack

| Library | Version | Used for |
| --- | --- | --- |
| [TypeScript](https://www.typescriptlang.org/) | 7.0 | Language, with strict type checking |
| [Vite](https://vite.dev/) | 8.3 | Dev server and production build |
| [Typed.js](https://github.com/mattboldt/typed.js) | 3.0 | Typing animation on the home page |
| [tsParticles](https://particles.js.org/) (`@tsparticles/engine`, `@tsparticles/slim`) | 4.5 | Particle network background |
| [Firebase Hosting](https://firebase.google.com/docs/hosting) (`firebase-tools`) | 15.34 | Hosting and deployment |

The router, page rendering, and all styling are written by hand, with no UI framework or CSS library.

## Getting started

You need **Node.js 20.19 or newer** (or 22.12+), which Vite 8 requires. Check with `node -v`.

Install dependencies:

```bash
npm install
```

Start the dev server, which reloads as you edit:

```bash
npm run dev
```

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the local dev server |
| `npm run build` | Type-check, then build the site into `dist/` |
| `npm run preview` | Serve the built `dist/` folder locally |
| `npm run typecheck` | Type-check only, without building |
| `npm run emulate` | Build, then serve the site with the Firebase Hosting emulator |
| `npm run deploy` | Build, then deploy to Firebase Hosting |

## Project structure

```
index.html            Page shell: the #background canvas container and the #center content area
src/
  main.ts             Entry point: starts the router, then loads the particle background
  router.ts           Maps URL paths to page functions and handles navigation
  background.ts       tsParticles settings for the particle network
  style.css           Global styles, home page buttons, animations, and mobile layout
  pages/
    home.ts           Typing headline and navigation buttons
    experience.ts
    projects.ts
    neetcode.ts
    aboutme.ts
    contact.ts
firebase.json         Hosting config: serves dist/ and sends every URL to index.html
.firebaserc           Firebase project ID
```

### How pages work

Each page is a function that receives the `#center` element and renders into it. `router.ts` looks up the current path in its `routes` table and calls the matching page function, falling back to the home page for unknown paths. Buttons call `navigate(path)`, which updates the URL with `history.pushState` and renders the new page.

To add a page:

1. Create `src/pages/<name>.ts` exporting a function like `export function Name(container: HTMLElement) { ... }`.
2. Import it in `src/router.ts` and add it to `routes`, for example `'/name': Name`.
3. Add a button or link that calls `navigate('/name')`.

## Deployment

The site is hosted on Firebase Hosting under the project `onlineresume-e0975`.

Deploy with the Firebase CLI installed in this project, via `npx`:

```bash
npx firebase login
```

```bash
npm run deploy
```

`firebase.json` rewrites every URL to `index.html`, so links like `/projects` and page refreshes work with the client-side router.
