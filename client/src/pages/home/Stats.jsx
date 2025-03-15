import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
function Stats() {
  return (
    <div>
      <div className="container">
        <div className="row mt-5">
          <div className="col-6 p-3">
            <h1 className='mb-4'>Trust with confidence</h1>
            <div>
            <h4>Customer-first always</h4>
            <p>That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>
            </div>
            
            <div>
            <h4>Customer-first always</h4>
            <p>That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>
            </div>
            <div>
            <h4>The Zerodha universe</h4>
            <p>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
            </div>
            <div>
            <h4>Do better with money</h4>
            <p>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
            </div>

          </div>

          
          <div className="col-6">
            <img style={{maxWidth:"100%"}} src="/images/ecosystem.png" alt="ecosystem"/>
            <div style={{display:"flex", gap:"10px" ,justifyContent:"center" ,marginBottom:"15px",textDecoration:"none"}}>
            <a style={{textDecoration:"none"}} href="#">Explore our products <FaArrowRightLong />
            </a>
            <a style={{textDecoration:"none"}} href="#">Try Kite demo <FaArrowRightLong /></a>
            </div>
          </div>
          <div>
            
          </div>
          <img style={{width:"50%" , margin:"0 auto"}} src="/images/pressLogos.png" alt ="press logo"/>
        </div>
      </div>
    </div>
  )
}

export default Stats