import {Routes, Route} from 'react-router-dom'
import React from 'react'
import './App.css'

import Home from './components/Home'
import Services from "./components/Services";
import Careers from './components/Careers'
import About from './components/About'
import Contact from './components/Contact'

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

import Web from './components/courses/Web';
function App() {
  

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/services" element={<Services />} />
        <Route path='/careers' element={<Careers/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>

        <Route path='/web' element={<Web/>}/>
        
      </Routes>

      <Footer/>
    </div>
  )
}

export default App