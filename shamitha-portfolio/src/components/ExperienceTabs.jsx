import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { track } from '../analytics.js'

export default function ExperienceTabs({ items }) {
  const [active, setActive] = useState(0)
  const item = items[active]

  const selectTab = (i) => {
    setActive(i)
    track('Experience Tab Viewed', { org: items[i].org })
  }

  return (
    <div className="exp-tabs">
      <div className="exp-tab-strip" role="tablist" aria-label="Work experience">
        {items.map((it, i) => (
          <button
            key={it.org}
            role="tab"
            aria-selected={active === i}
            className={`exp-tab ${active === i ? 'exp-tab-active' : ''}`}
            onClick={() => selectTab(i)}
          >
            <span className="exp-tab-org">
              {it.org}
              {it.current && <span className="exp-tab-dot" aria-hidden="true" />}
            </span>
            <span className="exp-tab-date">{it.date}</span>
          </button>
        ))}
      </div>

      <div className="exp-tab-panel" key={active}>
        <p className="exp-role">
          {item.role}
          {item.current && <span className="status-tag status-live exp-current">CURRENT</span>}
        </p>
        <p className="exp-tagline">{item.tagline}</p>
        <p className="exp-summary">{item.summary}</p>

        {item.highlights && (
          <ul className="case-study-list exp-highlights">
            {item.highlights.map((h, i) => (
              <li key={i}>{h}</li>
            ))}
          </ul>
        )}

        {item.caseStudySlug && (
          <Link to={`/work/${item.caseStudySlug}`} className="exp-case-study-link">
            Read the full case study →
          </Link>
        )}

        {item.products && (
          <div className="exp-products">
            {item.products.map((p) => (
              <div className="exp-product" key={p.name}>
                <p className="exp-product-name">{p.name}</p>
                <ul>
                  {p.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        <ul className="exp-expertise">
          {item.expertise.map((e) => (
            <li key={e}>{e}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
