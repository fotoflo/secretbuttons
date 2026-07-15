# Bug Fix: Banner Clipped Under Header

**Date:** 2026-07-15  
**Severity:** Medium

## Symptom

On the home page, the top of the book banner image (the blue border and "THE" row of the logo) was cut off. The issue appeared first on mobile, then was reported on wide desktop viewports as well.

## Root Cause

The design, recreated from the original WordPress theme, pulls the banner up with `.moveup { margin-top: -20px }` so it tucks under the header. The header (`.site-header`) has `z-index: 6` and a white background, so it painted **over** the top 20px of the image.

The original theme avoided this because `.site-inner` carried `z-index: 999`, placing content above the header. That critical stacking-context rule was missed in the first port.

## The Fix

In `app/globals.css`, `.site-inner` was given `position: relative; z-index: 999;` (matching the original theme), so the pulled-up banner paints above the header. On mobile (≤1023px), `.moveup` is additionally zeroed out (`margin-top: 0 !important`) so the banner can't overlap the menu button.

### Before

```css
.site-inner {
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 30px;
  flex: 1;
  background-color: #fff;
  /* Missing z-index stack rules */
}
```

### After

```css
.site-inner {
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 30px;
  flex: 1;
  background-color: #fff;
  /* Above .site-header (z-index 6) so the pulled-up banner isn't clipped */
  position: relative;
  z-index: 999;
}
```

Mobile-specific override (at ≤1023px breakpoint):

```css
.moveup {
  margin-top: 0 !important;
}
```

This resets the upward pull on small screens so the banner sits naturally below the menu button instead of trying to tuck behind it.

## Why It Was Hard to Find

The overlap was invisible at 1440px (the screenshot-comparison viewport) because layout whitespace absorbed it. It only became visible at mobile widths and very wide viewports where the tight spacing exposed the clipping.

## Key Rule

When porting CSS from an existing site, port the **stacking-context rules** (z-index/position) along with the visual ones. Negative-margin overlaps depend on their parent's z-index stack to render correctly.

## Files Involved

- `app/globals.css`
