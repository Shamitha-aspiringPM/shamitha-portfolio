import React, { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { projects } from '../data/projects.js'

const changelog = [
  {
    date: 'PRESENT',
    role: 'Senior Technical Product Analyst',
    org: 'Guidehouse',
    note: 'Working across healthcare & enterprise SaaS engagements — translating consulting-side requirements into structured product specs.',
  },
  {
    date: 'PREVIOUS',
    role: 'Product Role',
    org: 'Kaos Agency',
    note: 'Owned product decisions in a startup setting — smaller team, faster loop between idea and ship.',
  },
  {
    date: 'EARLIER',
    role: 'Technology Role',
    org: 'Wipro Technologies',
    note: 'Foundational years building the technical grounding this product work now stands on.',
  },
]

function StatusTag({ status }) {
  return <span className={`status-tag status-${status.toLowerCase()}`}>{status}</span>
}

const FILTERS = ['ALL', 'LIVE', 'SHIPPED']

export default function Home() {
  const [filter, setFilter] = useState('ALL')

  const visible = useMemo(
    () => (filter === 'ALL' ? projects : projects.filter((p) => p.status === filter)),
    [filter],
  )

  return (
    <>
      <header className="hero">
        <div className="hero-photo-wrap">
          <img src="/shamitha.png" alt="Portrait of Shamitha Srinivas" className="hero-photo" />
        </div>
        <div className="hero-copy">
          <p className="eyebrow">PRODUCT PORTFOLIO — MYSURU, INDIA</p>
          <h1>Shamitha Srinivas</h1>
          <p className="hero-role">Senior Technical Product Analyst, Guidehouse</p>
          <p className="hero-tagline">
            I turn ambiguous problems into shipped products — four case studies below, each
            taken from spec to live deploy.
          </p>
          <div className="hero-status">
            <span className="status-tag status-open">OPEN TO</span>
            <span className="hero-status-text">Product Manager · Associate PM · Product Owner roles</span>
          </div>
          <div className="hero-links">
            <a href="https://github.com/Shamitha-aspiringPM" target="_blank" rel="noreferrer">
              GitHub ↗
            </a>
            <a href="https://www.linkedin.com/in/shamitha-srinivas" target="_blank" rel="noreferrer">
              LinkedIn ↗
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="section">
          <div className="section-head-row">
            <div>
              <p className="eyebrow">SHIPPED</p>
              <h2 className="section-title">Product tickets, closed</h2>
            </div>
            <div className="filter-group" role="group" aria-label="Filter projects by status">
              {FILTERS.map((f) => (
                <button
                  key={f}
                  className={`filter-btn ${filter === f ? 'filter-btn-active' : ''}`}
                  onClick={() => setFilter(f)}
                  aria-pressed={filter === f}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          <div className="ticket-grid">
            {visible.map((p) => (
              <Link to={`/projects/${p.slug}`} className="ticket" key={p.id}>
                <div className="ticket-head">
                  <span className="ticket-id">{p.id}</span>
                  <StatusTag status={p.status} />
                </div>
                <h3 className="ticket-name">{p.name}</h3>
                <p className="ticket-summary">{p.summary}</p>
                <ul className="ticket-tags">
                  {p.tags.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
                <span className="ticket-open">Open ticket →</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="section">
          <p className="eyebrow">CHANGELOG</p>
          <h2 className="section-title">Where the product thinking comes from</h2>
          <div className="changelog">
            {changelog.map((c) => (
              <div className="changelog-row" key={c.org}>
                <span className="changelog-date">{c.date}</span>
                <div className="changelog-body">
                  <p className="changelog-role">
                    {c.role} <span className="changelog-org">— {c.org}</span>
                  </p>
                  <p className="changelog-note">{c.note}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  )
}
