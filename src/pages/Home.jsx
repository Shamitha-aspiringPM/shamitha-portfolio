import React, { useState, useMemo } from 'react'
import { projects } from '../data/projects.js'
import { manifesto } from '../data/about.js'
import Icon from '../components/Icon.jsx'
import ExperienceCard from '../components/ExperienceCard.jsx'
import ProjectModal from '../components/ProjectModal.jsx'
import Reveal from '../components/Reveal.jsx'
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

const FILTERS = ['ALL', 'LIVE', 'SHIPPED']

export default function Home() {
  const [filter, setFilter] = useState('ALL')
  const [activeProject, setActiveProject] = useState(null)

  const visible = useMemo(
    () => (filter === 'ALL' ? projects : projects.filter((p) => p.status === filter)),
    [filter],
  )

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
          <p className="eyebrow">HEALTHCARE SAAS · ENTERPRISE ANALYTICS · AI PRODUCTS</p>
          <h1>Shamitha S</h1>
          <p className="hero-role">Product Owner &amp; Senior Technical Product Analyst</p>
          <p className="hero-tagline">
            7+ years turning ambiguous problems into shipped products across U.S. healthcare
            SaaS, enterprise analytics, and AI-driven development — from discovery to delivery.
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
      </Reveal>

      <Reveal className="stats-strip">
        {stats.map((s) => (
          <div className="stat-block" key={s.label}>
            <p className="stat-value">{s.value}</p>
            <p className="stat-label">{s.label}</p>
          </div>
        ))}
      </Reveal>

      <main>
        <section className="section">
          <Reveal>
            <div className="section-head-row">
              <div>
                <p className="eyebrow">WHAT I'VE BUILT</p>
                <h2 className="section-title">Products that started as friction</h2>
                <p className="section-hint">Click any project to preview it here.</p>
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
          </Reveal>

          <div className="project-rows">
            {visible.map((p, i) => (
              <Reveal key={p.id} delay={i * 60}>
                <button className="project-row" onClick={() => setActiveProject(p)}>
                  <span className="project-row-num">{String(i + 1).padStart(2, '0')}</span>
                  <div className="project-row-body">
                    {p.origin && <p className="project-row-origin">{p.origin}</p>}
                    <div className="project-row-title-line">
                      <h3 className="project-row-name">{p.name}</h3>
                      <StatusTag status={p.status} />
                    </div>
                    <p className="project-row-summary">{p.summary}</p>
                    <ul className="ticket-tags">
                      {p.tags.map((t) => (
                        <li key={t}>{t}</li>
                      ))}
                    </ul>
                  </div>
                  <span className="project-row-arrow" aria-hidden="true">＋</span>
                </button>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="section">
          <Reveal>
            <p className="eyebrow">CHANGELOG</p>
            <h2 className="section-title">Experience</h2>
            <p className="section-hint">Tap a role to expand the full write-up.</p>
          </Reveal>
          <div className="exp-list">
            {experience.map((item, i) => (
              <Reveal key={item.org} delay={i * 60}>
                <ExperienceCard item={item} defaultOpen={i === 0} />
              </Reveal>
            ))}
          </div>
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

      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
    </>
  )
}
