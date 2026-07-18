import React, { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Nav from './components/Nav.jsx'
import Home from './pages/Home.jsx'
import ProjectPage from './pages/ProjectPage.jsx'
import CaseStudyPage from './pages/CaseStudyPage.jsx'
import { identifyPageView } from './analytics.js'

export default function App() {
  const location = useLocation()

  useEffect(() => {
    identifyPageView(location.pathname)
  }, [location.pathname])

  return (
    <div className="page">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:slug" element={<ProjectPage />} />
        <Route path="/work/:slug" element={<CaseStudyPage />} />
      </Routes>
      <footer className="footer">
        <p>Shamitha S — Mysore, India</p>
        <div className="footer-links">
          <a href="https://github.com/Shamitha-aspiringPM" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/shamitha-srinivas" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="mailto:pentoshamitha@gmail.com">Email</a>
        </div>
      </footer>
    </div>
  )
}
