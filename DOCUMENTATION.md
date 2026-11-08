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
| Animation | Framer Motion (mobile drawer slide-in, hero parallax); plain CSS transitions for the sidebar's show/hide and rail |
| Gradient text | `react-text-gradients` |
| State | Zustand (only the mobile drawer's open/closed flag) |
| Icons | `react-icons`, `lucide-react`, `devicons-react` (technology logos). `devicons-react` has no Seaborn or SciPy logo, so Seaborn's is devicon's SVG in `src/assets/tech/` and SciPy's is the `react-icons` Simple Icons glyph. |
| Fonts | `next/font/google`: Anton for section headings and service card titles, Roboto for the sidebar, hero intro and the other card titles. Everything else uses Tailwind's default system font stack. |

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
│   ├── layout.tsx              Root layout: sidebar, mobile drawer, page, footer; site <title>
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
│   ├── navbar.tsx              Sidebar (lg and up) and slide-in drawer (MobileNavbarMenu); links in navItems
│   ├── footer.tsx
│   ├── home/                   One component per home-page section, plus item.tsx (project card), category_tags.tsx (a project's category labels) and section.tsx (Section, SectionHeading)
│   ├── certs/CertItem.tsx      Certificate category card used on the home page
│   ├── technologies/           stack.ts (every technology and its logo), TechItem (logo tile with the technology's name), TechIcons (a project's technologies as logos or logo-and-name chips), logos.tsx (logos devicons-react lacks)
│   └── ui/                     shadcn/ui components: button, carousel
├── models/                     Project data (hard-coded)
│   ├── useFromClients.ts       Freelance projects
│   └── usePersonalProjects.ts  Personal projects
├── types/works.d.ts            WorkItem interface
├── zustand/store.tsx           useNavbarStore: mobile drawer toggle
├── lib/utils.ts                cn() helper for merging Tailwind classes; pagePaddingX (shared side padding)
├── assets/                     Images imported by components (projects, certificates, me.png, tech/ logos)
└── global.d.ts                 Lets TypeScript import *.png files
```

`public/` contains only `next.svg` and `vercel.svg`, both unused leftovers from the starter template.

## Routes

Every route shares the root layout: the sidebar on the left (a slide-in drawer below 1024px) and the footer at the bottom. On the home page the sidebar stays hidden until you scroll past the hero.

| Route | File | Renders | Linked from |
| --- | --- | --- | --- |
| `/` | [src/app/page.tsx](src/app/page.tsx) | Home page | Sidebar, mobile drawer, footer |
| `/works/[id]` | [src/app/works/[id]/page.tsx](src/app/works/[id]/page.tsx) | One project | Project cards |
| `/certs/[field]` | [src/app/certs/[field]/page.tsx](src/app/certs/[field]/page.tsx) | One certificate category | Certificate cards on `/` |
| `/contact` | [src/app/contact/page.tsx](src/app/contact/page.tsx) | Contact email | "Contact me" in the sidebar, footer |
| `/works` | [src/app/works/page.tsx](src/app/works/page.tsx) | The same carousels as the home page's Works section | Nothing |
| `/about`, `/blogs`, `/portfolio` | `src/app/<name>/page.tsx` | "Under Development" placeholder | Nothing (the Blogs links are commented out) |

The other URLs the site serves are Next.js built-ins: `/favicon.ico` (from `src/app/favicon.ico`), imported images under `/_next/static/media/`, and the `/_next/image` optimizer used by `next/image`.

The project has no route handlers (`route.ts`), middleware, server actions, `generateStaticParams`, or custom `not-found`, `error` or `loading` pages. An unknown path gets Next's default 404 page.

### `/` — home

A client component (`"use client"`) that stacks seven sections. Navigation links jump to them with `/#anchor`, and `scroll-behavior: smooth` in `globals.css` animates the scroll. The sidebar highlights whichever section is crossing a line 40% down the viewport (`useActiveSection` in `navbar.tsx`, an `IntersectionObserver`): that link's icon and label turn blue, and a blue stretch slides along the rail, a line running through the link icons.

The hero fills the screen on its own: the sidebar (and, below `lg`, the floating menu button) stays hidden while it's on screen and slides in once the hero no longer reaches the bottom 10% of the viewport, which is when the next section starts scrolling in (`useNavVisible` in `navbar.tsx`, a second `IntersectionObserver`). Scrolling back up hides them again. Every other page shows them all the time.

The hero is layered (`landing.tsx`). The photo is a background anchored to the bottom: 792px wide from `lg` (narrower on short screens, so it never outgrows the hero), and 82.5% of the screen height below `lg`, cropped at the sides. It drifts down at 40% of the scroll speed (Framer Motion's `useScroll`). A black gradient covers the bottom 40% of the hero, so the photo melts into black instead of being cut off; the intro and social links sit on that gradient and fade out over the first 400px of scroll. With reduced motion turned on, nothing moves.

| Anchor | Component | Content |
| --- | --- | --- |
| `#home` | `home/landing.tsx` | Hero: a short intro (the page's only `<h1>`) and social links over a parallax photo |
| `#offer` | `home/offer.tsx` | "What I Can Do?" service cards |
| `#techstack` | `home/technologies.tsx` | Every technology as a logo tile, grouped into Web/Mobile and ML/AI |
| `#works` | `home/portfolio.tsx` | "Recent Works": autoplaying carousels of freelance and personal projects, each with previous/next buttons in its label row. Swiping or clicking a button stops that carousel's autoplay. |
| (none) | `home/testimonials.tsx` | Client testimonials |
| `#certificates` | `home/certificates.tsx` | Certificate category cards linking to `/certs/[field]` |
| `#about-me` | `home/about_me.tsx` | Bio (selectable, unlike the rest of the page), with a Listen button that plays a recording of it |

### `/works/[id]` — project detail

A client component. It reads both project lists, finds the entry whose `id` matches the URL, and shows its category labels, title, description, "View Live" link, `body`, technologies (logo-and-name chips) and every image in `img_url`. "View Live" appears only when `isOnDevelopment` is `false` and `view_url` is not empty.

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
| `img_url` | `(string \| StaticImageData)[]` | Yes | The first image is the card thumbnail; the detail page shows all of them |
| `view_url` | `string` | Yes | "View Live" link. Use `""` when there isn't one. |
| `isOnDevelopment` | `boolean` | Yes | `true` hides "View Live" |
| `categories` | `WorkCategory[]` | Yes | Labels on the card and above the detail-page heading: `"Web App"`, `"Mobile App"`, `"ML/AI"` |
| `tech` | `TechName[]` | Yes | Logos on the card, logo-and-name chips on the detail page. Only names from the Tech Stack section (`src/components/technologies/stack.ts`) type-check; use `[]` when none apply. |

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
       img_url: [MyApp0, MyApp1],   // first image = card thumbnail
       view_url: "https://my-app.example.com",
       isOnDevelopment: false,
       categories: ["Web App"],
       tech: ["NEXT.js", "PostgreSQL"],
   },
   ```

4. Open `/works/my-app` to check it.

Use imported images, not URL strings. The detail page renders `<Image>` without `width` or `height`, which only works for static imports. A remote URL would also need its host added to `images.remotePatterns` in `next.config.js`.

To hide a project, delete or comment out its entry. The `ls-visualizer` entry in `usePersonalProjects.ts` is commented out this way.

### Add a certificate

- **To an existing category:** add the image to `src/assets/certificates/` and an `<Image>` to that category's block in `src/app/certs/[field]/page.tsx`.
- **As a new category:** add the new value to the `field` union in `CertItem.tsx`, a `<CertItem>` card in `home/certificates.tsx`, and a matching `field === "<value>"` block in `src/app/certs/[field]/page.tsx`.

### Change navigation links

The links are defined in two places, so update both:

1. `navItems` in `src/components/navbar.tsx`. The desktop sidebar and the mobile drawer both render from it. Each entry's `id` is the home-page section the sidebar highlights while that section is on screen. The rail is drawn from `LINK_HEIGHT_REM`, `RAIL_STEP_REM` and `ICON_CENTER_X_REM` above `SidebarContent`, which mirror the link classes (height, gap, left padding and icon box); change them together.
2. `src/components/footer.tsx`

### Edit other content

| What | Where |
| --- | --- |
| Hero intro and social links | `src/components/home/landing.tsx`. Keep the intro to a sentence or two so the hero fits one screen; the longer story belongs in the bio. |
| Hero photo | `src/assets/me.png` |
| Services ("What I Can Do?") | `src/components/home/offer.tsx` |
| Technologies | `groups` in `src/components/technologies/stack.ts`, which feeds both the Tech Stack section and the logos on project cards. Logos come from `devicons-react`; for one it lacks, add the SVG to `src/assets/tech/` and wrap it in `technologies/logos.tsx` like `SeabornOriginal`. A wordmark logo is unreadable at card size, so give it a `SmallIcon` for the cards, as NEXT.js has. |
| Testimonials | `src/components/home/testimonials.tsx` |
| Bio | `src/components/home/about_me.tsx` |
| Bio recording | `src/assets/who-am-i.mp3`. Replace the file to change it; the Listen button reads the length from the file. It's referenced with `new URL("…", import.meta.url)`, which the bundler turns into a hashed `/_next/static/media/` URL, so no config is needed. |
| Contact email | `src/app/contact/page.tsx` |
| Site title and description (shared by every page) | `metadata` in `src/app/layout.tsx` |
| Carousel autoplay speed | The `delay` props on the two `ProjectCarousel`s in `src/components/home/portfolio.tsx`: 1800 ms for freelance, 2000 ms for personal |

## Styling and state

- **Dark theme.** `<body>` gets `bg-black text-white` in `layout.tsx`. Components use hard-coded Tailwind colors: neutral and stone grays, `sky-500` hover borders, and a cyan gradient on section headings (`#0ED2F7` to `#B2FEFA`, fallback `#6DD5FA`).
- **shadcn/ui** is configured (`components.json`, the CSS variables in `globals.css`, the theme extension in `tailwind.config.ts`), but only `Button` and `Carousel` come from it. The `.dark` variables are never active because no element gets the `dark` class.
- **Fonts** are loaded with `next/font/google` inside each component rather than once in the layout.
- **Layout.** From the `lg` breakpoint (1024px) a fixed 240px sidebar sits on the left and `<body>` gets `lg:pl-60`, so every page fills the remaining width. Below `lg`, a floating menu button opens the same sidebar as a drawer. Side padding comes from `pagePaddingX` in `lib/utils.ts` (24px on phones, 40px from `sm`, 64px from `lg`, 80px from `xl`), used by every home section, the footer, `/contact`, `/works/[id]` and `/certs/[field]`; change it there to resize the margins site-wide. Home sections are built from `Section` and `SectionHeading` (`components/home/section.tsx`): the same vertical padding, a 1152px (`max-w-6xl`) column, and headings, grids and text aligned to the column's left edge. Section subtitles have no width cap, so they only wrap when the column is too narrow. The hero is the exception: it stays centered and spans the whole screen, because the sidebar is hidden over it. From `lg` up, `lg:-ml-60 lg:w-[calc(100%+15rem)]` in `landing.tsx` cancels the gutter, so changing the sidebar width means updating `w-60` in `navbar.tsx`, `lg:pl-60` in `layout.tsx` and those two classes. Other pages are at most 1280px wide. Because the sidebar narrows the content area, the three-card carousels only start at `xl` (1280px). The three service cards sit in one row from `md` (768px). The four certificate cards sit in one row from `md` (768px) and two by two below that; each card's image stack scales to its column.
- **Type scale.** Section titles are `text-3xl sm:text-4xl` (Anton). The hero intro (the page's `<h1>`) is 18px, 21px from `sm`. Card titles are 16–18px and body text 14–16px. Keep new sections on this scale.
- **State.** The mobile drawer's open flag lives in the Zustand store (`src/zustand/store.tsx`).

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

- **Cards aren't links.** Project and certificate cards are `div`s that set `window.location.href` (`components/home/item.tsx:24`, `components/certs/CertItem.tsx:30`). Every click reloads the whole page, and the cards can't be reached with the keyboard or opened in a new tab. Switching to `<Link>` fixes all three.
- **Freelance projects never show "View Live"**, because all three are marked `isOnDevelopment: true`.
- **The contact email isn't clickable.** `/contact` shows it as plain text rather than a `mailto:` link.

### Tooling and dependencies

- `npm run lint` is broken (see [Getting started](#getting-started)), and `eslint-config-next` is still on 14.0.2. Point the script at ESLint directly: `eslint src --ext .ts,.tsx`.
- `package.json` lists React 18 and `@types/react` 18, but the App Router runs the React 19 canary bundled with Next.js.
- `README.md` is still the create-next-app boilerplate. It says the project loads the Inter font, which it doesn't.

### Unused code and assets

- Stub components `components/home/social_media.tsx` and `components/home/expertise.tsx`
- Images `assets/cliemb4.png`, `assets/image_gallery.png` and `assets/threads-clone.png`, plus `assets/linear_search.png`, which is imported only for the commented-out `ls-visualizer` entry
- `public/next.svg` and `public/vercel.svg`
- The `lucide` dependency (only `lucide-react` is imported), `react-type-animation` (left over from the removed hero typewriter) and `@types/swiper`
- The `picsum.photos` entry in `next.config.js`
