import React from 'react'
import Title from '../components/Title'
import ServicesComponent from '../components/Service'
import QuoteRequestForm from '../components/Quote'

function Service() {
  return (
    <div>
    <Title text={'Services'} link={'/service'}/>
    <ServicesComponent />
    <QuoteRequestForm />
    </div>
  )
}

export default Service
