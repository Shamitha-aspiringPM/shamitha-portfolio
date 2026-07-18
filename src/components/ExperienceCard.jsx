import React, { useState } from 'react'

export default function ExperienceCard({ item, defaultOpen }) {
  const [open, setOpen] = useState(!!defaultOpen)

  return (
    <div className={`exp-card ${open ? 'exp-card-open' : ''}`}>
      <button className="exp-head" onClick={() => setOpen((o) => !o)} aria-expanded={open}>
        <span className="exp-date">{item.date}</span>
        <div className="exp-head-main">
          <p className="exp-role">
            {item.role} <span className="exp-org">— {item.org}</span>
            {item.current && <span className="status-tag status-live exp-current">CURRENT</span>}
          </p>
          <p className="exp-tagline">{item.tagline}</p>
        </div>
        <span className={`exp-chevron ${open ? 'exp-chevron-open' : ''}`} aria-hidden="true">
          ▾
        </span>
      </button>

      {open && (
        <div className="exp-body">
          <p className="exp-summary">{item.summary}</p>

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
      )}
    </div>
  )
}
