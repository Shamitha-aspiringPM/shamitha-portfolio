import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav.jsx'
import Home from './pages/Home.jsx'
import ProjectPage from './pages/ProjectPage.jsx'

export default function App() {
  return (
    <div className="page">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:slug" element={<ProjectPage />} />
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
