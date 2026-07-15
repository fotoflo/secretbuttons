# Site Structure & Design System

## Overview

The Secret Buttons is a Next.js 16 App Router site that faithfully recreates the original WordPress design. The site uses a cohesive design language centered on ITC American Typewriter titles, Interstate body font, and a red (#a42c1e) / blue (#2c5ba3) palette over a button-pattern background. The architecture uses a header-title pattern on every page and a critical z-index stacking technique to handle a pulled-up banner on the home page.

## Site Structure

### Pages

All content pages follow the same layout pattern:

- **`app/page.tsx`** — Home: renders `SiteHeader` (title: "Welcome To") with priority banner image and Book schema JSON-LD
- **`app/about-the-book/page.tsx`** — About page
- **`app/download-the-study-guide-and-teachers-guide/page.tsx`** — Guide listing page
- **`app/guide-downloads/page.tsx`** — Guide download form (requires name, email, organization, city, state, zip)
- **`app/shareyour-family-story/page.tsx`** — Submit family story
- **`app/share-your-art/page.tsx`** — Submit art
- **`app/how-to-order/page.tsx`** — Order information
- **`app/thank-you/page.tsx`** — Redirect destination after form submission

Additional system pages:
- **`app/sitemap.ts`** — XML sitemap
- **`app/robots.ts`** — robots.txt
- **`app/not-found.tsx`** — 404 fallback

### Root Layout & Metadata

**`app/layout.tsx`**:
- Loads Adobe Typekit kit `wtc6zza` (provides `itc-american-typewriter` and `interstate` fonts)
- Sets `metadataBase` from `VERCEL_PROJECT_PRODUCTION_URL` (production) or `http://localhost:3000` (dev)
- Configures GA4 with ID `G-RM41V067HE` via gtag.js script
- Renders skip link for accessibility
- Wraps all children in `.site-container` flex column layout with footer

### Header & Navigation Pattern

**`components/SiteHeader.tsx`** (client component):
- Accepts optional `title` prop (e.g., "Welcome To", "Download the Guides")
- Renders `.entry-title-area` with large lowercased `<h1>` when title is provided
- Shows responsive hamburger menu on screens ≤ 1023px
- Navigation items: Home, About the Book, The Study Guide and Teachers Guide, Share Your Family Story, Share Your Art, How to Order
- Highlights current route with `aria-current="page"`

## Design System

**CSS: `app/globals.css`**

### Fonts & Colors

- **Titles**: `itc-american-typewriter` (with fallbacks: American Typewriter, Georgia, serif)
- **Body**: `interstate` (with fallbacks: Helvetica Neue, Helvetica, Arial, sans-serif)
- **Red**: `#a42c1e` (accents, links, borders)
- **Blue**: `#2c5ba3` (headings, links on hover, interactive focus)
- **Background**: Button-pattern image from `/images/secret_buttons_pattern-1.jpg` (tiled)

### Key Classes

- **`.site-container`**: Flex column, min-height 100vh
- **`.site-inner`**: Max-width 1300px, centered, white background, **z-index: 999** (keeps content above header)
- **`.site-header`**: Flex row, max-width 1300px, z-index 6, wraps on narrow screens
- **`.entry-title-area h1`**: 135px American Typewriter, -10px letter-spacing, lowercase, blue color
- **`.nav-primary`**: Flex row with red vertical separators between items
- **`.entry-content`**: Main content area, 60px bottom padding
- **`.button`**: Red background, uppercase, 20px font, transitions to blue on hover/focus
- **`.button.button-blue`**: Starts blue, transitions to red

### Z-Index Stacking Gotcha

The home page banner (`.moveup` class) is pulled up with `margin-top: -20px` to visually overlap the header. The `.site-inner` container uses **z-index: 999** to stay above the `.site-header` (z-index: 6), ensuring the banner appears behind the white content area rather than floating in front.

On mobile (≤ 1023px), the `.moveup` rule switches to `margin-top: 0` to remove the pull-up and prevent layout issues.

### Responsive Breakpoints

- **≥ 1280px**: Desktop layout with side-by-side nav
- **1024–1279px**: Smaller title (100px), nav remains visible
- **840–1023px**: Hamburger menu, full-width title (120px), `.moveup` disabled, flex-direction column
- **< 840px**: Smallest title (72px), reduced font sizes, reduced padding, column layouts stack

### Utility Classes

- **`.moveup`**: `margin-top: -20px` (disabled on mobile)
- **`.aligncenter`**: `text-align: center`
- **`.text-red` / `.text-blue`**: Color text without link underline
- **`.break-line`**: `display: block` on desktop, `display: inline` on mobile (allows nav line wrapping)
- **`.col-golden-left` / `.col-golden-right`**: Golden-ratio 61.8% / 38.2% flex split
- **`.col-half` / `.col-third`**: Equal flex divisions (stack on mobile)

## Key Files

- **`app/layout.tsx`**: Root layout, fonts, GA4, footer, skip link
- **`app/globals.css`**: Entire design system (2,500+ lines recreating WordPress theme)
- **`app/page.tsx`**: Home page with banner and schema.org Book JSON-LD
- **`components/SiteHeader.tsx`**: Reusable header with title and navigation
- **`next.config.ts`**: Redirects from old WordPress URLs to new paths
- **`lib/site.ts`**: `baseUrl` helper for absolute URLs in metadata and schema

## Important Patterns

1. **Header re-use**: Every page uses `<SiteHeader title="Page Title" />` immediately after opening tags
2. **Content wrapper**: Content is always inside `.site-inner` (flex: 1 for vertical spacing, white background for contrast)
3. **Font loading**: Fonts are loaded in `<head>` from Typekit; system fallbacks ensure readable text during FOIT
4. **GA4 SPA routing**: `GaPageView` component in root layout tracks client-side navigation
5. **Accessibility**: Skip link, focus outlines (blue 3px), `aria-current` on nav, proper heading hierarchy
6. **Old URL redirects**: WordPress feed and PDF paths redirect to new Next.js routes

