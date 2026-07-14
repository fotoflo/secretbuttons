# The Secret Buttons

Website for *The Secret Buttons* by Ellen M. Shapiro — a coming-of-age story
about brave young characters in the years leading to World War II, illustrated
by Caterina Baldi.

This is a Next.js rebuild of the original WordPress site (secretbuttons.com),
keeping the original design: ITC American Typewriter titles, Interstate body
type, the red/blue palette, and the button-pattern background. All original
images and PDF guides are included in `public/`.

## Pages

- `/` — Welcome (banner)
- `/about-the-book` — "Hello!" — about Ellen and the book, video link
- `/download-the-study-guide-and-teachers-guide` — what's in the guides
- `/guide-downloads` — signup form gating the free PDFs
- `/thank-you` — download links for the Study Guide + Teacher's Guide PDFs
- `/shareyour-family-story` — "Your Stories"
- `/share-your-art` — "Your Art"
- `/how-to-order` — "Order" — Amazon/Etsy links, editions and prices

## Development

```bash
npm install
npm run dev
```

## Notes

- Fonts load from Adobe Fonts (Typekit kit `wtc6zza`). For the fonts to render
  on a new domain, add that domain to the kit's allowed domains at
  fonts.adobe.com. System fallbacks (American Typewriter / Helvetica) cover the
  gap otherwise.
- The download form currently logs entries to Vercel function logs and
  redirects to `/thank-you`. Wire it to an email service (e.g. Resend) or a
  database if a real mailing list is wanted.
- Fixed from the original: the "Upload Your Story/Art" buttons linked to a
  misspelled email domain (`visualanglanguage.net`); they now use
  `ellen@visualanguage.net`.
