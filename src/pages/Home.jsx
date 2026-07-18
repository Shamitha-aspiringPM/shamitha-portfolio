import React, { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { showcase } from '../data/showcase.js'
import { manifesto, specialization, currentlyExploring } from '../data/about.js'
import Icon from '../components/Icon.jsx'
import ExperienceTabs from '../components/ExperienceTabs.jsx'
import StatCard from '../components/StatCard.jsx'
import Reveal from '../components/Reveal.jsx'
import { track } from '../analytics.js'
import {
  experience,
  stats,
  skillGroups,
  education,
  certifications,
  accomplishments,
  languages,
  contact,
} from '../data/resume.js'

function StatusTag({ status }) {
  return <span className={`status-tag status-${status.toLowerCase()}`}>{status}</span>
}

const FILTERS = ['ALL', 'WORK', 'PERSONAL']

export default function Home() {
  const [filter, setFilter] = useState('ALL')

  const visible = useMemo(
    () => (filter === 'ALL' ? showcase : showcase.filter((p) => p.kind === filter.toLowerCase())),
    [filter],
  )

  const [previewSlug, setPreviewSlug] = useState(showcase[0]?.slug)
  const preview = visible.find((p) => p.slug === previewSlug) || visible[0]

  return (
    <>
      <header className="hero">
        <div className="hero-glow" aria-hidden="true" />
        <div className="hero-photo-frame">
          <div className="hero-photo-wrap">
            <img src="/shamitha.png" alt="Portrait of Shamitha S" className="hero-photo" />
          </div>
        </div>
        <div className="hero-copy">
          <p className="eyebrow">PAYER · PROVIDER · FINANCIAL · MARKET INTELLIGENCE</p>
          <h1>Shamitha S</h1>
          <p className="hero-role">Product Owner &amp; Senior Technical Product Analyst</p>
          <p className="hero-tagline">
            Building enterprise healthcare analytics products across U.S. payer, provider,
            financial, and market intelligence — plus AI prototypes shipped independently.
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

      <Reveal className="manifesto">
        <p className="manifesto-lead">{manifesto.lead}</p>
        <p className="manifesto-intro">{manifesto.intro}</p>
        <div className="manifesto-body">
          {manifesto.body.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <p className="manifesto-closing">{manifesto.closing}</p>
        <div className="specialization-box">
          <p className="eyebrow">WHAT I SPECIALIZE IN</p>
          <p className="specialization-text">{specialization}</p>
        </div>
      </Reveal>

      <Reveal className="exploring-strip">
        <span className="exploring-label">Currently exploring</span>
        <ul className="exploring-pills">
          {currentlyExploring.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
      </Reveal>

      <Reveal className="stats-strip">
        {stats.map((s) => (
          <StatCard stat={s} key={s.label} />
        ))}
      </Reveal>

      <main>
        <section className="section">
          <Reveal>
            <div className="section-head-row">
              <div>
                <p className="eyebrow">WHAT I'VE BUILT</p>
                <h2 className="section-title">Work case studies &amp; independent products</h2>
                <p className="section-hint">Hover to preview, click to open the full write-up.</p>
              </div>
              <div className="filter-group" role="group" aria-label="Filter by type">
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
          </Reveal>

          <Reveal className="project-showcase">
            <div className="project-list-col">
              {visible.map((p, i) => (
                <Link
                  to={p.path}
                  key={p.slug}
                  className={`project-list-item ${preview?.slug === p.slug ? 'is-active' : ''}`}
                  onMouseEnter={() => setPreviewSlug(p.slug)}
                  onFocus={() => setPreviewSlug(p.slug)}
                  onClick={() => track('Project Opened', { project: p.name, kind: p.kind })}
                >
                  <span className="project-list-num">{String(i + 1).padStart(2, '0')}</span>
                  <div className="project-list-main">
                    <span className="project-list-name">{p.name}</span>
                    <span className="project-list-kind">
                      {p.kind === 'work' ? 'CASE STUDY' : 'PERSONAL PROJECT'}
                    </span>
                  </div>
                  <StatusTag status={p.status} />
                </Link>
              ))}
            </div>

            {preview && (
              <div className={`project-preview-panel accent-${visible.indexOf(preview) % 2}`}>
                {preview.origin && <p className="preview-origin">{preview.origin}</p>}
                <h3 className="preview-name">{preview.name}</h3>
                <p className="preview-summary">{preview.summary}</p>
                <ul className="ticket-tags">
                  {preview.tags.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
                <span className="preview-cta">
                  {preview.kind === 'work' ? 'Open case study →' : 'Open project →'}
                </span>
              </div>
            )}
          </Reveal>
        </section>

        <section className="section">
          <Reveal>
            <p className="eyebrow">CHANGELOG</p>
            <h2 className="section-title">Experience</h2>
            <p className="section-hint">Switch companies with the tabs below.</p>
          </Reveal>
          <Reveal>
            <ExperienceTabs items={experience} />
          </Reveal>
        </section>

        <section className="section">
          <Reveal>
            <p className="eyebrow">STACK</p>
            <h2 className="section-title">Skills</h2>
          </Reveal>
          <div className="skill-groups">
            {skillGroups.map((g, i) => (
              <Reveal key={g.label} delay={i * 60} className="skill-group">
                <p className="skill-group-label">
                  <Icon name={g.icon} /> {g.label}
                </p>
                <ul className="skill-pills">
                  {g.skills.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="section">
          <Reveal>
            <p className="eyebrow">RECORD</p>
            <h2 className="section-title">Education &amp; credentials</h2>
          </Reveal>
          <div className="credentials-grid">
            <Reveal className="credential-card">
              <p className="credential-label">Education</p>
              <p className="credential-main">{education.degree}</p>
              <p className="credential-sub">
                {education.school} — {education.date}
              </p>
            </Reveal>
            <Reveal className="credential-card" delay={60}>
              <p className="credential-label">Certifications</p>
              <ul className="credential-list">
                {certifications.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </Reveal>
            <Reveal className="credential-card" delay={120}>
              <p className="credential-label">Accomplishments</p>
              <ul className="credential-list">
                {accomplishments.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
            </Reveal>
            <Reveal className="credential-card" delay={180}>
              <p className="credential-label">Languages</p>
              <ul className="credential-list credential-list-inline">
                {languages.map((l) => (
                  <li key={l}>{l}</li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>
      </main>
    </>
  )
}
