import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Nav() {
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <nav className="nav">
      <Link to="/" className="nav-brand">
        {isHome ? 'Shamitha S' : '← Back to portfolio'}
      </Link>
      <div className="nav-links">
        <a href="https://github.com/Shamitha-aspiringPM" target="_blank" rel="noreferrer">
          GitHub ↗
        </a>
        <a href="https://www.linkedin.com/in/shamitha-srinivas" target="_blank" rel="noreferrer">
          LinkedIn ↗
        </a>
      </div>
    </nav>
  )
}
