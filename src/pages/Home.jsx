import React from 'react'
import Carousel from '../components/Carousel'
import About from '../components/AboutComponent'
import ServicesComponent from '../components/Service'
import FeatureComponent from '../components/Feature'
import QuoteRequestForm from '../components/Quote'
import Team from '../components/Team'
import TestimonialSection from '../components/Testimonial'
import BlogCard from '../components/Blog'

function Home() {
  return (
    <div>
        <Carousel />
        <About />
        <ServicesComponent />
        <FeatureComponent />
        <QuoteRequestForm />
        <Team />
        <TestimonialSection />
        <BlogCard />
    </div>
  )
}

export default Home
