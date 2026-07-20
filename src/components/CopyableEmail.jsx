import React, { useState } from 'react'

export default function CopyableEmail({ email, className = '' }) {
  const [copied, setCopied] = useState(false)

  const handleClick = async (e) => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch (err) {
      // clipboard API unavailable — mailto: below still fires normally
    }
  }

  return (
    <a href={`mailto:${email}`} className={className} onClick={handleClick}>
      {copied ? 'Copied ✓' : email}
    </a>
  )
}
