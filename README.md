# Athlight — Next.js Website

## Stack
- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion

## Project Structure

```
app/
  layout.tsx          # Root layout + metadata
  page.tsx            # Home page (hero + features + waitlist)
  globals.css         # Global styles + CSS variables
  science/
    page.tsx          # Science page

components/
  Nav.tsx             # Navigation (active link state)
  Hero.tsx            # Hero section with animations
  Features.tsx        # 3-column feature grid
  Waitlist.tsx        # Email waitlist form (reusable)
  Footer.tsx          # Footer links
  science/
    ScienceHero.tsx   # Science page hero
    Mechanism.tsx     # DNA disruption + wavelength diagram
    EfficacyData.tsx  # Pathogen reduction bars
    Chamber.tsx       # Reflective chamber + coverage bars
    Safety.tsx        # 4 safety systems
    Studies.tsx       # 6 peer-reviewed studies grid
```

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Deploy to Vercel (recommended)

1. Push this folder to a GitHub repo
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your GitHub repo
4. Click Deploy — done

Vercel auto-detects Next.js. No config needed.

## Deploy to Netlify

1. Run `npm run build` — outputs to `/out`
2. Go to [netlify.com/drop](https://netlify.com/drop)
3. Drag the `/out` folder in

## Add a real waitlist backend

The form in `components/Waitlist.tsx` currently shows a success message locally.
To capture real emails, replace the `submit` function with a POST to:

- **Loops.so** — `https://app.loops.so/api/newsletter-form/{your-form-id}`
- **Mailchimp** — use their embed API endpoint
- **Your own API route** — add `app/api/waitlist/route.ts`

## Customize

- Colors: edit CSS variables in `app/globals.css`
- Copy: edit each component directly
- Fonts: swap in `app/layout.tsx` Google Fonts import
