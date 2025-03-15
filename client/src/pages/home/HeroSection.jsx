import React from 'react'
import Stats from './Stats'

function HeroSection() {
  return (
    <div>
      <div className="container">
        <div className="row text-center p-5">
          <img src="/images/homeHero.png" alt ='Hero section image'/>
          <h1  style={{fontSize:"45px"}}>Invest in everything</h1>
          <p style={{fontSize:"20px"}} >Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
          <button className="btn btn-primary mt-2 " style={{width:"20%",margin: "0 auto"}}>Sign up for free</button>
        </div>
      </div>
      
    </div>
  )
}

export default HeroSection