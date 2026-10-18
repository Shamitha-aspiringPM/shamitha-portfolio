export const caseStudies = [
  {
    id: 'WORK-01',
    slug: 'enterprise-healthcare-analytics',
    status: 'LIVE',
    name: 'Enterprise Healthcare Analytics Platform',
    tagline: 'Guidehouse · U.S. Healthcare Payer Analytics · Power BI → React + AI',
    summary:
      'Owning the transformation of fragmented Power BI reporting into a unified, AI-powered analytics product for U.S. healthcare payer clients.',
    tags: ['Product Strategy', 'React', 'Power BI', 'AI-Powered Insights', 'Payer Analytics'],
    diagram: ['Discovery', 'Pain Points', 'Research', 'Prioritization', 'MVP', 'Release', 'Metrics'],
    problem:
      'Legacy payer analytics at Guidehouse depended on fragmented Power BI reporting spread across 20+ disconnected modules — payer intelligence, provider intelligence, financial intelligence, and market intelligence — with no unified, AI-assisted way to surface insights like market share or total cost of care.',
    challenge:
      'Business logic was scattered across dashboards built up over years, stakeholder needs spanned four distinct analytics domains, and any modernization had to happen without disrupting reporting that internal business teams already relied on daily.',
    role: [
      'Led product discovery and defined requirements across payer, provider, financial, and market intelligence modules',
      'Proposed and secured leadership buy-in for the Power BI → React + AI transformation',
      'Owned roadmap, stakeholder alignment, and delivery end-to-end in a Product Manager capacity',
      'Structured and modernized third-party vendor data refresh pipelines feeding the platform',
    ],
    solution:
      'Proposed and led the transformation of legacy Power BI dashboards into a scalable React-based analytics product with AI-powered insight generation and a chatbot interface, delivering market share and total cost of care insights for U.S. healthcare payer clients. In parallel, defined requirements and drove delivery for the underlying 20+ module platform, and modernized the third-party vendor data refresh pipelines across 10+ datasets feeding it.',
    outcome: [
      'Projected 40–50% reduction in manual effort for payer-provider claims analytics with AI assistance',
      '30% higher adoption among internal business teams',
      '60% less manual validation effort across 10+ vendor data pipelines',
    ],
    lessons:
      'Modernizing analytics that people already rely on daily means the roadmap has to prove value incrementally — buy-in came from showing AI-assisted insight generation on real payer data before asking anyone to change their workflow.',
  },
  {
    id: 'WORK-02',
    slug: 'intelligent-document-processing',
    status: 'LIVE',
    name: 'Intelligent Document Processing (IDP)',
    tagline: 'Guidehouse · OCR · LLM Extraction · EOB → 835 Conversion',
    summary:
      'Leading an OCR and LLM-based extraction pipeline that converts payer EOB documents into the standardized 835 remittance format.',
    tags: ['OCR', 'LLM Extraction', 'Healthcare EDI', 'Claims Data'],
    diagram: ['Intake EOB', 'OCR Extraction', 'LLM Structuring', '835 Mapping', 'Validation', 'Structured Claims Data'],
    problem:
      'Payer-issued Explanation of Benefits (EOB) documents arrive unstructured, and converting them into the standardized 835 (ERA/remittance) format was a manual, error-prone process that slowed claims data downstream.',
    challenge:
      'EOB formats vary by payer, extraction needed to be accurate enough to trust for claims data, and the output had to map cleanly onto the 835 standard rather than just producing loosely structured text.',
    role: [
      'Leading requirements and delivery for the OCR/LLM extraction pipeline',
      'Defining the EOB-to-835 mapping logic in partnership with engineering',
      'Owning accuracy and processing-time targets for the initiative',
    ],
    solution:
      'Leading an OCR-based Intelligent Document Processing initiative that uses OCR and LLM-based extraction to convert EOB documents into 835 (ERA/remittance) format for U.S. healthcare payer clients.',
    outcome: ['Targeting 91% extraction accuracy', '60–70% less manual document processing time'],
    lessons:
      'Healthcare EDI formats reward precision over speed — getting extraction accuracy right mattered more than shipping fast, since downstream claims systems have zero tolerance for malformed 835 output.',
  },
]

export const getCaseStudy = (slug) => caseStudies.find((c) => c.slug === slug)
