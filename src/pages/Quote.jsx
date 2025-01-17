import React from 'react'
import Title from '../components/Title'
import FeatureComponent from '../components/Feature'
import QuoteRequestForm from '../components/Quote'

function QuotePage() {
  return (
    <div>
      <Title text={'Free Quote'} link={'Quote'}/>
      <QuoteRequestForm/>
    </div>
  )
}

export default QuotePage
