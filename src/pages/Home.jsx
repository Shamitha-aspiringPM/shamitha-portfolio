import React, { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { projects } from '../data/projects.js'
import {
  experience,
  skillGroups,
  education,
  certifications,
  accomplishments,
  contact,
} from '../data/resume.js'

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
          <img src="/shamitha.png" alt="Portrait of Shamitha S" className="hero-photo" />
        </div>
        <div className="hero-copy">
          <p className="eyebrow">HEALTHCARE SAAS · ENTERPRISE ANALYTICS · AI PRODUCTS</p>
          <h1>Shamitha S</h1>
          <p className="hero-role">Product Owner &amp; Senior Technical Product Analyst</p>
          <p className="hero-tagline">
            7+ years turning ambiguous problems into shipped products across healthcare SaaS,
            enterprise analytics, and AI-driven development — from discovery to delivery.
          </p>
          <div className="hero-links">
            <a href="https://github.com/Shamitha-aspiringPM" target="_blank" rel="noreferrer">
              GitHub ↗
            </a>
            <a href="https://www.linkedin.com/in/shamitha-srinivas" target="_blank" rel="noreferrer">
              LinkedIn ↗
            </a>
            <a href={`mailto:${contact.email}`}>Email ↗</a>
            <a href={`tel:${contact.phone.replace(/\s+/g, '')}`}>{contact.phone}</a>
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
          <h2 className="section-title">Experience</h2>
          <div className="changelog">
            {experience.map((c) => (
              <div className="changelog-row" key={c.org}>
                <span className="changelog-date">{c.date}</span>
                <div className="changelog-body">
                  <p className="changelog-role">
                    {c.role} <span className="changelog-org">— {c.org}</span>
                  </p>
                  <ul className="changelog-bullets">
                    {c.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section">
          <p className="eyebrow">STACK</p>
          <h2 className="section-title">Skills</h2>
          <div className="skill-groups">
            {skillGroups.map((g) => (
              <div className="skill-group" key={g.label}>
                <p className="skill-group-label">{g.label}</p>
                <ul className="skill-pills">
                  {g.skills.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="section">
          <p className="eyebrow">RECORD</p>
          <h2 className="section-title">Education &amp; credentials</h2>
          <div className="credentials-grid">
            <div className="credential-card">
              <p className="credential-label">Education</p>
              <p className="credential-main">{education.degree}</p>
              <p className="credential-sub">
                {education.school} — {education.date}
              </p>
            </div>
            <div className="credential-card">
              <p className="credential-label">Certifications</p>
              <ul className="credential-list">
                {certifications.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </div>
            <div className="credential-card">
              <p className="credential-label">Accomplishments</p>
              <ul className="credential-list">
                {accomplishments.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
