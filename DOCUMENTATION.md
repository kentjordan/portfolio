# Portfolio — Developer Documentation

Kent John Jordan's personal portfolio site, built with Next.js (App Router). This document covers how the project is organized, every route it serves, where the content lives, and how to make common changes.

_Last reviewed 2026-11-08 against Next.js 16.3.2._

## Contents

- [Overview](#overview)
- [Getting started](#getting-started)
- [Project structure](#project-structure)
- [Routes](#routes)
- [Content model](#content-model)
- [Common tasks](#common-tasks)
- [Styling and state](#styling-and-state)
- [Configuration](#configuration)
- [Known issues](#known-issues)

## Overview

- One long home page (hero, services, tech stack, projects, testimonials, certificates, bio) plus detail pages for each project and certificate category.
- **No backend.** There are no API routes, database, CMS, server actions or environment variables. Projects, certificates and all copy are hard-coded in the source, so changing content means editing code and redeploying.
- Deployed on Vercel, with Node.js pinned to 24.x.

### Tech stack

| Concern | Library |
| --- | --- |
| Framework | Next.js 16.3.2, App Router |
| React | The React 19.3 canary bundled inside Next.js. `package.json` still lists `react@^18`, but App Router pages don't use that copy. |
| Language | TypeScript 5, `strict` mode |
| Styling | Tailwind CSS 3.4, `tailwindcss-animate`, shadcn/ui setup |
| Carousels | Embla (`embla-carousel-react` + autoplay plugin) through the shadcn `Carousel` component |
| Animation | Framer Motion (mobile menu fade-in), `react-type-animation` (hero typewriter) |
| Gradient text | `react-text-gradients` |
| State | Zustand (only the mobile menu's open/closed flag) |
| Icons | `react-icons`, `lucide-react`, `devicons-react` (technology logos) |
| Fonts | `next/font/google`: Anton for section headings and the hero headline, Roboto for the navbar, hero intro and card titles. Everything else uses Tailwind's default system font stack. |

## Getting started

Use Node.js 24.x (pinned in `package.json` under `engines`; Vercel builds with it) and npm.

```bash
npm install
npm run dev      # http://localhost:3000
```

| Command | What it does |
| --- | --- |
| `npm run dev` | Development server with hot reload on port 3000. |
| `npm run build` | Production build. Vercel runs this, and it fails on TypeScript errors. |
| `npm start` | Serves the production build. Run `npm run build` first. |
| `npm run lint` | **Broken.** It calls `next lint`, which Next.js 16 removed. Use the ESLint command below. |
| `npx eslint src --ext .ts,.tsx` | Lints the source. |
| `npx tsc --noEmit` | Type-checks without building. |

## Project structure

```text
src/
├── app/                        Routes (one folder per URL segment)
│   ├── layout.tsx              Root layout: navbar, mobile menu, page, footer; site <title>
│   ├── globals.css             Tailwind layers, shadcn CSS variables, smooth scrolling
│   ├── page.tsx                /              home page
│   ├── works/page.tsx          /works         project carousels
│   ├── works/[id]/page.tsx     /works/:id     project detail
│   ├── certs/[field]/page.tsx  /certs/:field  certificate gallery
│   ├── contact/page.tsx        /contact
│   ├── about/page.tsx          /about         placeholder
│   ├── blogs/page.tsx          /blogs         placeholder
│   └── portfolio/page.tsx      /portfolio     placeholder
├── components/
│   ├── navbar.tsx              Desktop navbar and the mobile menu overlay (MobileNavbarMenu)
│   ├── footer.tsx
│   ├── home/                   One component per home-page section, plus item.tsx (project card)
│   ├── certs/CertItem.tsx      Certificate category card used on the home page
│   ├── technologies/           TechItem (logo tile) and TechDialog (full technology list)
│   └── ui/                     shadcn/ui components: button, carousel
├── models/                     Project data (hard-coded)
│   ├── useFromClients.ts       Freelance projects
│   └── usePersonalProjects.ts  Personal projects
├── types/works.d.ts            WorkItem interface
├── zustand/store.tsx           useNavbarStore: mobile menu toggle
├── lib/utils.ts                cn() helper for merging Tailwind classes
├── assets/                     Images imported by components (projects, certificates, me.png)
└── global.d.ts                 Lets TypeScript import *.png files
```

`public/` contains only `next.svg` and `vercel.svg`, both unused leftovers from the starter template.

## Routes

Every route shares the root layout, with the navbar on top and the footer at the bottom.

| Route | File | Renders | Linked from |
| --- | --- | --- | --- |
| `/` | [src/app/page.tsx](src/app/page.tsx) | Home page | Navbar, mobile menu, footer |
| `/works/[id]` | [src/app/works/[id]/page.tsx](src/app/works/[id]/page.tsx) | One project | Project cards |
| `/certs/[field]` | [src/app/certs/[field]/page.tsx](src/app/certs/[field]/page.tsx) | One certificate category | Certificate cards on `/` |
| `/contact` | [src/app/contact/page.tsx](src/app/contact/page.tsx) | Contact email | "Contact me", "Resume/CV", mobile menu, footer |
| `/works` | [src/app/works/page.tsx](src/app/works/page.tsx) | The same carousels as the home page's Works section | Nothing |
| `/about`, `/blogs`, `/portfolio` | `src/app/<name>/page.tsx` | "Under Development" placeholder | Nothing (the Blogs links are commented out) |

The other URLs the site serves are Next.js built-ins: `/favicon.ico` (from `src/app/favicon.ico`), imported images under `/_next/static/media/`, and the `/_next/image` optimizer used by `next/image`.

The project has no route handlers (`route.ts`), middleware, server actions, `generateStaticParams`, or custom `not-found`, `error` or `loading` pages. An unknown path gets Next's default 404 page.

### `/` — home

A client component (`"use client"`) that stacks seven sections. Navigation links jump to them with `/#anchor`, and `scroll-behavior: smooth` in `globals.css` animates the scroll.

| Anchor | Component | Content |
| --- | --- | --- |
| `#home` | `home/landing.tsx` | Hero: intro text, typewriter headline, social links, photo |
| `#offer` | `home/offer.tsx` | "What I Can Do?" service cards |
| `#techstack` | `home/technologies.tsx` | Two category cards (Web/Mobile, ML/AI). Clicking one opens `TechDialog` with the full list. |
| `#works` | `home/portfolio.tsx` | "Recent Works": autoplaying carousels of freelance and personal projects |
| (none) | `home/testimonials.tsx` | Client testimonials |
| `#certificates` | `home/certificates.tsx` | Certificate category cards linking to `/certs/[field]` |
| `#about-me` | `home/about_me.tsx` | Bio |

### `/works/[id]` — project detail

A client component. It reads both project lists, finds the entry whose `id` matches the URL, and shows its title, description, "View Live" link, `body`, `tech_stack` chips and every image in `img_url`. "View Live" appears only when `isOnDevelopment` is `false` and `view_url` is not empty.

| `id` | Title | List | "View Live" |
| --- | --- | --- | --- |
| `go-explore` | Go Explore Batangas | Freelance | Hidden (`isOnDevelopment: true`) |
| `cliemb` | CLIEMB: Monitoring System | Freelance | Hidden (`isOnDevelopment: true`) |
| `ptd` | Peach Tree Designs | Freelance | Hidden (`isOnDevelopment: true`) |
| `sent` | Sent | Personal | Shown |
| `digits-classification` | Digits Classification | Personal | Shown |
| `sentiment-analysis` | Sentiment Analysis | Personal | Shown |
| `lr-visualizer` | Linear Regression Visualizer | Personal | Shown |
| `covid-tracker` | COVID 19 Data Tracker | Personal | Hidden (`isOnDevelopment: true`, no URL) |
| `kabsahi-cart` | Kabsahi Cart | Personal | Shown |
| `calculator` | Calculator | Personal | Shown |
| `bs-visualizer` | Binary Search Visualizer | Personal | Shown |

An unknown `id` returns HTTP 200 with an empty page, not a 404. All content renders in the browser, so the server HTML contains empty headings (see [Known issues](#known-issues)).

### `/certs/[field]` — certificate gallery

A server component with one hard-coded block per `field`:

| `field` | Heading | Images in `src/assets/certificates/` |
| --- | --- | --- |
| `ml` | Machine Learning Certifications | `cert-3`, `cert-4`, `cert-5`, `cert-6` |
| `math-ml-ds` | Mathematics for Machine Learning and Data Science Specialization | `cert-7` |
| `nlp` | Natural Language Processing Specialization | `cert-8` |
| `others` | Other Certifications | `cert-2`, `cert-1` |

An unknown `field` returns HTTP 200 with an empty page.

### `/contact`

Shows the contact email address, `job.kjordan@gmail.com`.

## Content model

### Projects

Each project is a `WorkItem` (`src/types/works.d.ts`):

| Field | Type | Required | Used for |
| --- | --- | --- | --- |
| `id` | `string` | Yes | URL slug (`/works/<id>`). Must be unique across both lists. |
| `title` | `string` | Yes | Card title and detail-page heading |
| `description` | `string` | Yes | Card text and detail-page subheading |
| `body` | `string` | No | Paragraph on the detail page |
| `tech_stack` | `string[]` | No | Chips on the detail page |
| `img_url` | `(string \| StaticImageData)[]` | Yes | The first image is the card thumbnail; the detail page shows all of them |
| `view_url` | `string` | Yes | "View Live" link. Use `""` when there isn't one. |
| `isOnDevelopment` | `boolean` | Yes | `true` hides "View Live" |
| `tags` | `string[]` | Yes | Labels on the card |

The two lists live in `src/models/useFromClients.ts` (freelance) and `src/models/usePersonalProjects.ts` (personal). Array order is carousel order. The freelance list is duplicated inside its carousel so Embla has enough slides to loop.

Both files are React hooks that wrap a constant array in `useState`; the setters are never used. Because they're hooks, only client components can read them, which is why the home page and `/works/[id]` are client components.

### Certificates

Certificates aren't data-driven. Each category is spread across three files:

1. `src/components/certs/CertItem.tsx`: the `field` union type (`"others" | "ml" | "math-ml-ds" | "nlp"`).
2. `src/components/home/certificates.tsx`: the home-page card, a thumbnail image stacked on a background image.
3. `src/app/certs/[field]/page.tsx`: the gallery block with heading, description and images.

Images live in `src/assets/certificates/` and are loaded with `require()`.

## Common tasks

### Add a project

1. Add screenshots under `src/assets/<project>/`.
2. Import them at the top of `useFromClients.ts` (freelance) or `usePersonalProjects.ts` (personal).
3. Add an entry to the array at the position where it should appear in the carousel:

   ```ts
   import MyApp0 from "@/assets/my-app/0.png";
   import MyApp1 from "@/assets/my-app/1.png";

   {
       id: "my-app",
       title: "My App",
       description: "One-line summary shown on the card.",
       body: "Longer paragraph shown on the detail page.",
       tech_stack: ["NEXT.js", "PostgreSQL"],
       img_url: [MyApp0, MyApp1],   // first image = card thumbnail
       view_url: "https://my-app.example.com",
       isOnDevelopment: false,
       tags: ["NEXT.JS", "POSTGRE-SQL"],
   },
   ```

4. Open `/works/my-app` to check it.

Use imported images, not URL strings. The detail page renders `<Image>` without `width` or `height`, which only works for static imports. A remote URL would also need its host added to `images.remotePatterns` in `next.config.js`.

To hide a project, delete or comment out its entry. The `ls-visualizer` entry in `usePersonalProjects.ts` is commented out this way.

### Add a certificate

- **To an existing category:** add the image to `src/assets/certificates/` and an `<Image>` to that category's block in `src/app/certs/[field]/page.tsx`.
- **As a new category:** add the new value to the `field` union in `CertItem.tsx`, a `<CertItem>` card in `home/certificates.tsx`, and a matching `field === "<value>"` block in `src/app/certs/[field]/page.tsx`.

### Change navigation links

The links are defined in three places, so update all of them:

1. `Navbar` in `src/components/navbar.tsx` (desktop, `lg` and wider)
2. `MobileNavbarMenu` in the same file (the overlay opened by the hamburger icon)
3. `src/components/footer.tsx`

### Edit other content

| What | Where |
| --- | --- |
| Hero intro, typewriter phrases, social links | `src/components/home/landing.tsx`. The phrases are the `sequence` array, alternating text and a pause in milliseconds. |
| Hero photo | `src/assets/me.png` |
| Services ("What I Can Do?") | `src/components/home/offer.tsx` |
| Technology cards and the full lists | `src/components/home/technologies.tsx` and `src/components/technologies/TechDialog.tsx` |
| Testimonials | `src/components/home/testimonials.tsx` |
| Bio | `src/components/home/about_me.tsx` |
| Contact email | `src/app/contact/page.tsx` |
| Site title and description (shared by every page) | `metadata` in `src/app/layout.tsx` |
| Carousel autoplay speed | `Autoplay({ delay })` in `src/components/home/portfolio.tsx`: 1800 ms for freelance, 2000 ms for personal |

## Styling and state

- **Dark theme.** `<body>` gets `bg-black text-white` in `layout.tsx`. Components use hard-coded Tailwind colors: neutral and stone grays, `sky-500` hover borders, and a cyan gradient on section headings (`#0ED2F7` to `#B2FEFA`, fallback `#6DD5FA`).
- **shadcn/ui** is configured (`components.json`, the CSS variables in `globals.css`, the theme extension in `tailwind.config.ts`), but only `Button` and `Carousel` come from it. The `.dark` variables are never active because no element gets the `dark` class.
- **Fonts** are loaded with `next/font/google` inside each component rather than once in the layout.
- **Layout.** Content is at most 1400px wide on the home page and 1280px on the other pages. The desktop navbar appears from the `lg` breakpoint (1024px); below that, a hamburger icon opens the mobile menu.
- **State.** The mobile menu's open flag lives in the Zustand store (`src/zustand/store.tsx`). The technology dialog uses local `useState` in `technologies.tsx`.

## Configuration

| File | Purpose |
| --- | --- |
| `next.config.js` | Allows remote images from `https://picsum.photos` (currently unused) |
| `tsconfig.json` | Strict TypeScript; `@/*` maps to `./src/*` |
| `tailwind.config.ts` | Scans `src/**/*.{ts,tsx}`; shadcn theme colors; `tailwindcss-animate` plugin |
| `postcss.config.js` | Tailwind and Autoprefixer |
| `components.json` | shadcn/ui CLI settings (aliases `@/components` and `@/lib/utils`) |
| `.eslintrc.json` | Extends `next/core-web-vitals` |
| `package.json` | `engines.node: "24.x"`, which Vercel builds with |

No environment variables are read anywhere, so there's no `.env` file to set up.

## Known issues

Found in a code review on 2026-11-08, with HTTP behavior confirmed against the dev server. Line numbers are as of that date.

### Routes and SEO

- **Unknown IDs return 200, not 404.** `/works/<unknown>` and `/certs/<unknown>` render an empty page with status 200. Calling `notFound()` for unrecognized values fixes it; for `/works/[id]`, that's easiest after the change in the next item.
- **Project pages are empty until JavaScript runs.** `/works/[id]` looks up its project in a `useEffect`, so the server HTML has empty headings, and search engines and link previews see a blank page. Every page also shares the one `<title>`, "Kent Jordan". Exporting the project data as plain arrays instead of hooks would let `/works/[id]` become a server component with `generateStaticParams` and `generateMetadata`.
- **Some routes aren't linked.** Nothing links to `/works`, `/about`, `/blogs` or `/portfolio`, and the last three are placeholders.

### Navigation and UI

- **The hamburger menu does nothing between 768px and 1023px wide** (tablets, small laptop windows). The hamburger icon shows below `lg`, but the overlay it opens has `md:hidden` (`components/navbar.tsx:29`), so it stays invisible from `md` upward.
- **Cards aren't links.** Project and certificate cards are `div`s that set `window.location.href` (`components/home/item.tsx:28`, `components/certs/CertItem.tsx:17`). Every click reloads the whole page, and the cards can't be reached with the keyboard or opened in a new tab. Switching to `<Link>` fixes all three.
- **Freelance projects never show "View Live"**, because all three are marked `isOnDevelopment: true`.
- **"Resume/CV" isn't a download.** The navbar shows a download icon, but the link goes to `/contact`.
- **The contact email isn't clickable.** `/contact` shows it as plain text rather than a `mailto:` link.

### Hero (`components/home/landing.tsx`)

- **The headline is empty in the server HTML.** `react-type-animation` adds its cursor CSS only in the browser, so the `<h1>` has no height until JavaScript loads, and then the hero shifts. Crawlers see an empty main heading.
- **The server HTML includes `max-height:undefinedpx`** (lines 14–18). The height is measured once with `useLayoutEffect` and never updates on resize or rotation. Tailwind's `h-svh` or `h-dvh` classes do the same job in CSS.
- **The photo is a plain `<img>`** (line 82) that loads the original 496 KB, 1082×924 PNG. It's the only ESLint warning in the project. `next/image` would serve a resized WebP.
- **`sm:text-6xl` on the `<h1>` has no effect** (line 36). The inner span sets `text-5xl` (line 53), so the headline is 48px at every screen size.

### Tooling and dependencies

- `npm run lint` is broken (see [Getting started](#getting-started)), and `eslint-config-next` is still on 14.0.2. Point the script at ESLint directly: `eslint src --ext .ts,.tsx`.
- `package.json` lists React 18 and `@types/react` 18, but the App Router runs the React 19 canary bundled with Next.js.
- `README.md` is still the create-next-app boilerplate. It says the project loads the Inter font, which it doesn't.

### Unused code and assets

- Stub components `components/home/social_media.tsx` and `components/home/expertise.tsx`
- Images `assets/cliemb4.png`, `assets/image_gallery.png` and `assets/threads-clone.png`, plus `assets/linear_search.png`, which is imported only for the commented-out `ls-visualizer` entry
- `public/next.svg` and `public/vercel.svg`
- The `lucide` dependency (only `lucide-react` is imported) and `@types/swiper`
- The `Roboto_Condensed` import in `TechDialog.tsx`
- The `picsum.photos` entry in `next.config.js`
