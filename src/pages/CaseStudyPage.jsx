import React from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { getCaseStudy, caseStudies } from '../data/caseStudies.js'
import WorkflowDiagram from '../components/WorkflowDiagram.jsx'

function StatusTag({ status }) {
  return <span className={`status-tag status-${status.toLowerCase()}`}>{status}</span>
}

export default function CaseStudyPage() {
  const { slug } = useParams()
  const item = getCaseStudy(slug)

  if (!item) return <Navigate to="/" replace />

  const index = caseStudies.findIndex((c) => c.slug === slug)
  const next = caseStudies[(index + 1) % caseStudies.length]

  return (
    <main className="project-page case-study-page">
      <div className="project-head">
        <div className="ticket-head">
          <span className="ticket-id">{item.id}</span>
          <StatusTag status={item.status} />
        </div>
        <h1 className="project-title">{item.name}</h1>
        <p className="case-study-tagline">{item.tagline}</p>
        <ul className="ticket-tags">
          {item.tags.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </div>

      <WorkflowDiagram steps={item.diagram} />

      <div className="case-study-sections">
        <section className="case-study-section">
          <p className="eyebrow">PROBLEM</p>
          <p>{item.problem}</p>
        </section>

        <section className="case-study-section">
          <p className="eyebrow">CHALLENGE</p>
          <p>{item.challenge}</p>
        </section>

        <section className="case-study-section">
          <p className="eyebrow">MY ROLE</p>
          <ul className="case-study-list">
            {item.role.map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </ul>
        </section>

        <section className="case-study-section">
          <p className="eyebrow">SOLUTION</p>
          <p>{item.solution}</p>
        </section>

        <section className="case-study-section">
          <p className="eyebrow">OUTCOME</p>
          <ul className="case-study-list case-study-outcome">
            {item.outcome.map((o, i) => (
              <li key={i}>{o}</li>
            ))}
          </ul>
        </section>

        <section className="case-study-section">
          <p className="eyebrow">LESSONS LEARNED</p>
          <p>{item.lessons}</p>
        </section>
      </div>

      <div className="project-next">
        <span className="eyebrow">NEXT CASE STUDY</span>
        <Link to={`/work/${next.slug}`} className="project-next-link">
          {next.name} →
        </Link>
      </div>
    </main>
  )
}
