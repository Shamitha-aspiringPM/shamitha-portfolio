import React, { useState } from 'react'
import { track } from '../analytics.js'

export default function StatCard({ stat }) {
  const [flipped, setFlipped] = useState(false)

  const toggle = () => {
    setFlipped((f) => !f)
    if (!flipped) track('Stat Card Flipped', { stat: stat.label })
  }

  return (
    <button
      className={`stat-card ${flipped ? 'stat-card-flipped' : ''}`}
      onClick={toggle}
      aria-pressed={flipped}
      aria-label={`${stat.value} — ${stat.label}. Tap for detail.`}
    >
      <div className="stat-card-inner">
        <div className="stat-card-face stat-card-front">
          <p className="stat-value">{stat.value}</p>
          <p className="stat-label">{stat.label}</p>
          <span className="stat-card-hint">tap ↻</span>
        </div>
        <div className="stat-card-face stat-card-back">
          <p className="stat-detail">{stat.detail}</p>
        </div>
      </div>
    </button>
  )
}
