export const projects = [
  {
    id: 'PORT-01',
    slug: 'ventureforge-ai',
    status: 'LIVE',
    name: 'VentureForge AI',
    summary:
      'AI-powered startup strategy tool. Takes a raw idea and returns a structured go-to-market strategy.',
    tags: ['React', 'Vite', 'Anthropic API', 'Mixpanel'],
    live: 'https://ventureforge-ai-ten.vercel.app',
    repo: 'https://github.com/Shamitha-aspiringPM',
    caseStudy: [
      'VentureForge AI takes a raw startup idea and turns it into a structured go-to-market strategy — problem framing, target segment, positioning, and next steps.',
      'The product runs on the Anthropic API behind a Vercel serverless proxy, so the API key never touches the client. Usage is tracked with Mixpanel to see how people actually move through the flow, not just whether it loads.',
      'The interesting product problem here wasn\u2019t the AI call — it was designing a flow that turns a vague, one-line idea into something structured enough to be useful, without the input form itself becoming a chore.',
    ],
  },
  {
    id: 'PORT-02',
    slug: 'payvault',
    status: 'LIVE',
    name: 'PayVault',
    summary: 'A UPI payment app prototype built around a familiar, high-stakes flow.',
    tags: ['React', 'Product Prototype', 'Fintech UX'],
    live: 'https://prototype-payvault.netlify.app',
    repo: 'https://github.com/Shamitha-aspiringPM',
    notionCaseStudy: 'https://app.notion.com/p/PayVault-3892b3a793688013894bcd3cf209879e',
    caseStudy: [
      'PayVault is a prototype of a UPI payment flow — request, confirm, send — built to demonstrate product thinking around an interaction most people already trust and use daily.',
      'The design challenge in a payment flow isn\u2019t the happy path, it\u2019s the moments right before and after a transaction: confirming the right amount is going to the right person, and making the outcome unambiguous the instant it happens.',
      'The full write-up — problem framing, flow decisions, and what I\u2019d change next — is in the linked case study.',
    ],
  },
  {
    id: 'PORT-03',
    slug: 'trade-journal',
    status: 'SHIPPED',
    name: 'Trade Journal',
    summary: 'A full-stack intraday trading journal, built end-to-end.',
    tags: ['React', 'Vite', 'Supabase'],
    live: null,
    repo: 'https://github.com/Shamitha-aspiringPM',
    video: '/video/trade-journal-demo.mp4',
    caseStudy: [
      'Trade Journal is a full-stack intraday trading journal — log trades, review them, and track patterns over time. Built end-to-end: schema, auth, and deploy.',
      'React + Vite on the front end, Supabase for auth and data, deployed on Vercel. Getting from local dev to a working deploy meant working through real environment friction along the way — Windows PowerShell quirks, a Vite version conflict, and Supabase auth configuration that didn\u2019t work on the first pass.',
      'The demo below walks through the actual product.',
    ],
  },
  {
    id: 'PORT-04',
    slug: 'cortexon-academy',
    status: 'LIVE',
    name: 'Cortexon Academy',
    summary: 'A multi-page website for a Mysore-based Abacus and Vedic Mathematics academy.',
    tags: ['React', 'Vite', 'Client Project'],
    live: null,
    repo: 'https://github.com/Shamitha-aspiringPM',
    caseStudy: [
      'A complete multi-page website built for Cortexon Academy LLP, a Mysore-based Abacus and Vedic Mathematics academy — a real local business, not a self-directed exercise.',
      'Built with React and Vite, deployed on Vercel. Working with an actual client meant designing for their students and parents as the real audience, not an abstract one.',
    ],
  },
]

export const getProject = (slug) => projects.find((p) => p.slug === slug)
