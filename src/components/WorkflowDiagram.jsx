import React from 'react'

export default function WorkflowDiagram({ steps }) {
  return (
    <div className="workflow-diagram" role="img" aria-label={`Process: ${steps.join(' to ')}`}>
      {steps.map((step, i) => (
        <React.Fragment key={step}>
          <span className="workflow-step">{step}</span>
          {i < steps.length - 1 && (
            <span className="workflow-arrow" aria-hidden="true">
              →
            </span>
          )}
        </React.Fragment>
      ))}
    </div>
  )
}
