import React from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { getProject } from '../data/projects.js'
import { showcase } from '../data/showcase.js'

function StatusTag({ status }) {
  return <span className={`status-tag status-${status.toLowerCase().replace(/\s+/g, '-')}`}>{status}</span>
}

export default function ProjectPage() {
  const { slug } = useParams()
  const project = getProject(slug)

  if (!project) return <Navigate to="/" replace />

  const index = showcase.findIndex((s) => s.slug === slug)
  const num = showcase[index]?.num
  const next = showcase[(index + 1) % showcase.length]

  return (
    <main className="project-page">
      <div className="project-head">
        <div className="ticket-head">
          <span className="ticket-id">
            {String(num).padStart(2, '0')} / {String(showcase.length).padStart(2, '0')}
          </span>
          <StatusTag status={project.status} />
        </div>
        <h1 className="project-title">{project.name}</h1>
        {project.origin && <p className="project-origin">{project.origin}</p>}
        <ul className="ticket-tags">
          {project.tags.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
        <div className="project-links">
          {project.live && (
            <a href={project.live} target="_blank" rel="noreferrer">
              View live ↗
            </a>
          )}
          {project.notionCaseStudy && (
            <a href={project.notionCaseStudy} target="_blank" rel="noreferrer">
              Case study ↗
            </a>
          )}
          <a href={project.repo} target="_blank" rel="noreferrer">
            Source ↗
          </a>
        </div>
      </div>

      {project.video && (
        <div className="project-video-wrap">
          <video controls className="project-video" preload="metadata">
            <source src={project.video} type="video/mp4" />
            Your browser doesn't support embedded video — you can{' '}
            <a href={project.video}>download the demo</a> instead.
          </video>
        </div>
      )}

      <div className="project-body">
        {project.caseStudy.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>

      <div className="project-next">
        <span className="eyebrow">NEXT — {next.kind === 'work' ? 'CASE STUDY' : 'PROJECT'}</span>
        <Link to={next.path} className="project-next-link">
          {next.name} →
        </Link>
      </div>
    </main>
  )
}
