import React from 'react'
import Title from '../components/Title'
import ServicesComponent from '../components/Service'
import QuoteRequestForm from '../components/Quote'
import TeamMembers from '../components/Team'

function Team() {
  return (
    <div>
    <Title text={'Our Team'} link={'Team'}/>
    <TeamMembers />
    </div>
  )
}

export default Team