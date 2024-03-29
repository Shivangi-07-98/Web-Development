import React from 'react'

export function LearnExport() {
  return (
    <>
    <h2 style={{
      display: 'block',
      color: 'yellow',
      backgroundColor: 'red'
      }}>
    Mission Impossible!!</h2>
    </>
  )
}

// export default LearnExport

// If you write <div style={ color: 'yellow' }> directly like this in React JSX, it would result in a syntax error because JSX expects the value of the style attribute to be a JavaScript object.