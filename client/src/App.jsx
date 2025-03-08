import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import HomePage from './pages/home/HomePage'
import SignupPage from './pages/signup/SignupPage'
import AboutPage from './pages/about/AboutPage'
import ProductsPage from './pages/products/ProductsPage'
import PricingPage from './pages/pricing/PricingPage'
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path="/open-account" element={<SignupPage/>}/>
      <Route path ="/about" element={<AboutPage/>}/>
      <Route path="/products" element={<ProductsPage/>}/>
      <Route path="/charges" element={<PricingPage/>}/>
      <Route path="support" element={<SignupPage/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App