import React from 'react'
import HeroSection from './HeroSection'
import Stats from './Stats'
import Pricing from './Pricing'
import Education from './Education'
import Navbar from './Navbar'
function HomePage() {
  return (
    <>
    <Navbar/>
    <HeroSection/>
    <Stats/>
    <Pricing/>
    <Education/>

    </>
  )
}

export default HomePage