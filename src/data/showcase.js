import { projects } from './projects.js'
import { caseStudies } from './caseStudies.js'

// Order matches reviewer feedback: lead with the strongest work (Guidehouse),
// interleaved with personal projects.
const order = [
  { kind: 'work', slug: 'enterprise-healthcare-analytics' },
  { kind: 'personal', slug: 'ventureforge-ai' },
  { kind: 'work', slug: 'intelligent-document-processing' },
  { kind: 'personal', slug: 'trade-journal' },
  { kind: 'personal', slug: 'payvault' },
  { kind: 'personal', slug: 'cortexon-academy' },
]

export const showcase = order
  .map(({ kind, slug }) => {
    const item = kind === 'work' ? caseStudies.find((c) => c.slug === slug) : projects.find((p) => p.slug === slug)
    if (!item) return null
    return {
      ...item,
      kind,
      path: kind === 'work' ? `/work/${slug}` : `/projects/${slug}`,
    }
  })
  .filter(Boolean)
