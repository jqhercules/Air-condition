import React from 'react'
import SummaryStyles from './styles/SummaryStyles'

function Summary() {
  return (
    <SummaryStyles>
      <h1 className="Summary__title">Compare your Air</h1>
      <p className="Summary__desc">Compare the air quality between cities in the UK.</p>
      <p className="Summary__desc">Select cities to compare using the search tool below.</p>
    </SummaryStyles>
  )
}

export default Summary
