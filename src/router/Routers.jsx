import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home/Home'
import About from '../pages/About/About'
import Portfolio from "../pages/Portfolio/Portfolio"
import Services from "../pages/services/Services"
import Contact from "../pages/Contact us/Contact"
import Navbar from '../components/Navbar/Navbar'


function routers() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Navigate to="/home"/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/portfolio' element={<Portfolio/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default routers
