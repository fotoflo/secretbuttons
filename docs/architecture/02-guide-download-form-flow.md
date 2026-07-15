# Guide Download Form Flow

## Overview

The guide download form gathers user information (name, email, organization, location) and sends it via Resend email API to Ellen. The form is gated behind submission and includes spam protection via honeypot and time-trap mechanisms. After successful submission, users are redirected to a thank-you page. Local development sends emails to the developer; production emails go to Ellen.

## Form Flow

### User Journey

1. **User visits** `/download-the-study-guide-and-teachers-guide`
2. **Form renders** with fields: name, email, organization, city, state, zip
3. **User fills and submits** (honeypot and time-trap hidden fields auto-populate on client)
4. **Server action validates** honeypot and time-trap; escapes all text inputs
5. **Resend API sends email** to configured recipient with form summary
6. **User redirected** to `/thank-you` page

### Client-Side Components

**`app/guide-downloads/page.tsx`**:
- Renders `SiteHeader` with title "Download the Guides"
- Uses `.site-inner` and `.entry-content` wrappers for consistent styling
- Golden-ratio layout: `.col-golden-left` (61.8%) has form, `.col-golden-right` (38.2%) empty
- Form is server action bound to `submitDownloadForm` via `<form action={...}>`
- Includes `FormTimer` component and honeypot input

**`components/FormTimer.tsx`** (client component):
- On mount, sets hidden `started_at` input to `Date.now()` (epoch milliseconds)
- Used server-side to detect if submission happened too quickly (< 3 seconds)

**Form fields** (all required):
- `name`: Text input (max inherited)
- `email`: Email input
- `organization`: Text input
- `city`, `state`, `zip`: Text inputs (zip maxLength: 10)
- `website`: Hidden honeypot (aria-hidden, tabIndex: -1, should stay blank)
- `started_at`: Hidden timer field

### Server-Side Processing

**`app/guide-downloads/actions.ts`**:

1. **Honeypot check**:
   ```
   if (formData.get("website")) redirect("/thank-you");
   ```
   If the hidden `website` field is filled, assume bot → silent redirect.

2. **Time-trap check**:
   ```
   const startedAt = Number(formData.get("started_at") || 0);
   if (startedAt && Date.now() - startedAt < 3000) {
     redirect("/thank-you");
   }
   ```
   If form was submitted < 3 seconds after rendering, assume bot → silent redirect.

3. **Text escaping**:
   - All form fields passed through `esc()` function
   - Limits each field to 500 characters
   - Escapes HTML special chars: `&`, `<`, `>` → entities
   - Prevents XSS in email HTML

4. **Email construction**:
   - Compiles form data into HTML table
   - Subject: `"Guide download: {name} ({organization})"`
   - Body: Summary table with name, email, organization, city/state/zip

5. **Resend API call**:
   ```
   POST https://api.resend.com/emails
   Authorization: Bearer ${RESEND_API_KEY}
   {
     "from": ${FORM_EMAIL_FROM},
     "to": [${FORM_EMAIL_TO}],
     "subject": "...",
     "html": "..."
   }
   ```

6. **Logging & redirect**:
   - Console logs form data as JSON (for debugging)
   - Redirects to `/thank-you` regardless of email success/failure

## Environment Variables

### Production (Ellen's inbox)

- **`RESEND_API_KEY`**: Resend account API key (keep secret)
- **`FORM_EMAIL_TO`**: `ellen@visualanguage.net` (recipient)
- **`FORM_EMAIL_FROM`**: `noreply@visualanguage.net` or similar (sender)

Set in Vercel environment variables (Settings → Environment Variables).

### Local Development (fotoflo's inbox)

- **`.env.local`** (not committed):
  ```
  RESEND_API_KEY=re_xxxxx...
  FORM_EMAIL_TO=fotoflo@gmail.com
  FORM_EMAIL_FROM=noreply@visualanguage.net
  ```

## Data Flow Diagram

```
┌─────────────────────────────────────────────────┐
│ User visits /download-the-study-guide-and...    │
│ guide-downloads/page.tsx renders                │
└────────────────┬────────────────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────────────────┐
│ Client renders form with:                       │
│  - FormTimer: sets started_at = Date.now()      │
│  - Honeypot: website field (hidden)             │
│  - Real fields: name, email, organization, ... │
└────────────────┬────────────────────────────────┘
                 │
        User fills & submits
                 │
                 ▼
┌─────────────────────────────────────────────────┐
│ submitDownloadForm server action triggers       │
│ formData contains all fields                    │
└────────────────┬────────────────────────────────┘
                 │
        ┌────────┴────────┐
        ▼                 ▼
    ┌────────┐       ┌──────────┐
    │Honeypot│       │Time-trap │
    │check   │       │check     │
    └────┬───┘       └──────┬───┘
         │ filled             │ < 3s
         └─────────┬──────────┘
                   │ Bot detected → silent redirect
                   ▼
           /thank-you (no email)
                   │
        ┌──────────┴──────────┐
        ▼                     ▼
    [human]              [bot behavior]
    Escapes fields      (no email sent)
         │
         ▼
  Compose HTML email
  with form summary
         │
         ▼
  Resend API call
  POST /emails
         │
         ▼
  ┌──────────────┐
  │Check status  │
  │ (log error   │
  │  if not ok)  │
  └──────┬───────┘
         │
         ▼
 Redirect /thank-you
 (always, success or fail)
```

## Key Files

- **`app/guide-downloads/page.tsx`**: Form UI, FormTimer integration, honeypot hidden field
- **`app/guide-downloads/actions.ts`**: Server action, Resend API call, spam checks, escaping
- **`components/FormTimer.tsx`**: Client-only timestamp recorder
- **`app/thank-you/page.tsx`**: Redirect destination page
- **`.env.local` (dev) / Vercel env vars (prod)**: Email credentials

## Important Patterns

1. **Spam protection**: Honeypot + time-trap prevents most automated bots without CAPTCHAs
2. **Silent failures**: Bots are redirected silently; legitimate users see thank-you regardless
3. **Text escaping**: All user input escaped in `esc()` before inserting into HTML email
4. **Server action form binding**: Form's `action` prop points to server action function directly
5. **Env var branching**: Code checks environment to send to Ellen (prod) or developer (dev)
6. **Error resilience**: If Resend call fails, user still sees thank-you (email may not arrive, but no error thrown)

## Troubleshooting

- **Email not received**: Check `RESEND_API_KEY`, `FORM_EMAIL_TO`, `FORM_EMAIL_FROM` in env vars
- **Form always redirects**: Verify `FormTimer` is rendering (check network tab for `started_at` field)
- **Honeypot not working**: Ensure form field `name="website"` exists and honeypot class hides it (no CSS `display: none`, use `left: -9999px`)
- **Local dev emails**: Create `.env.local` with test Resend key and `FORM_EMAIL_TO=your@email.com`

