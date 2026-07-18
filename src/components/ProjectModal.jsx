import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

function StatusTag({ status }) {
  return <span className={`status-tag status-${status.toLowerCase()}`}>{status}</span>
}

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [project, onClose])

  if (!project) return null

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal-panel"
        role="dialog"
        aria-modal="true"
        aria-label={project.name}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose} aria-label="Close preview">
          ✕
        </button>

        {project.origin && <p className="modal-origin">{project.origin}</p>}

        <div className="modal-title-row">
          <h3 className="modal-title">{project.name}</h3>
          <StatusTag status={project.status} />
        </div>

        <ul className="ticket-tags modal-tags">
          {project.tags.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>

        {project.video && (
          <div className="modal-video-wrap">
            <video controls className="project-video" preload="metadata">
              <source src={project.video} type="video/mp4" />
            </video>
          </div>
        )}

        <div className="modal-body">
          <p>{project.caseStudy[0]}</p>
        </div>

        <div className="modal-links">
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
          <Link to={`/projects/${project.slug}`} className="modal-full-link">
            Full write-up →
          </Link>
        </div>
      </div>
    </div>
  )
}
