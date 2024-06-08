import React from 'react'
import BestGear from '../components/BestGear.jsx'
import Cards from '../components/Cards'
import Features from '../components/Features'
import Hero from '../components/Hero'

function Landing() {
  return (
    <div>
      <Hero/>
      <Features/>
      <Cards/>
      <BestGear/>
    </div>
  )
}

export default Landing
