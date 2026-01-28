# Agent Control Plane Marketing Site

Production-ready marketing site for AGENT CONTROL PLANE (AlgoPilotX), built with Next.js 14, TypeScript, Tailwind CSS, and shadcn/ui.

## Getting Started

```bash
npm install
npm run dev
```

Open `http://localhost:3000` to view the site.

## Environment Variables

Create a `.env.local` file if you want email delivery and analytics.

```bash
SMTP_HOST=
SMTP_PORT=
SMTP_USER=
SMTP_PASS=
SMTP_TO=

NEXT_PUBLIC_POSTHOG_KEY=
NEXT_PUBLIC_POSTHOG_HOST=
```

- If SMTP variables are missing, the lead API logs to the console.
- In development, leads are stored in `data/leads.json`.

## API

`POST /api/lead`

Payload:

```json
{
  "name": "Jane Doe",
  "email": "jane@company.com",
  "company": "Company",
  "role": "VP Engineering",
  "agents": "11–50",
  "useCase": "Need approvals and cost controls",
  "website": ""
}
```

## Deployment

The site is ready for Vercel or Railway:

- Vercel: import the repo and set the environment variables above.
- Railway: deploy as a Node app, set environment variables, and use `npm run build`/`npm run start`.

## Project Structure

- `app/` — Next.js App Router pages and API routes
- `components/` — UI and layout components
- `lib/` — constants and analytics helpers
- `data/` — local lead storage in development
