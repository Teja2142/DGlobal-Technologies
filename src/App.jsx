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

import Api from './components/courses/Api';
import Cloud from './components/courses/Cloud';
import Data from './components/courses/Data';
import Digital from './components/courses/Digital';
import IoT from './components/courses/IoT';
import Mobile from './components/courses/Mobile';
import Training from './components/courses/Training';
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

        <Route path='/api' element={<Api/>}/>
        <Route path='/cloud' element={<Cloud/>}/>
        <Route path='/data' element={<Data/>}/>
        <Route path='/digital' element={<Digital/>}/>
        {/*<Route path='/Iot' element={<IoT/>}/>*/}
        <Route path='/mobile' element={<Mobile/>}/>
        <Route path='/training' element={<Training/>}/>
        <Route path='/web' element={<Web/>}/>
        
      </Routes>

      <Footer/>
    </div>
  )
}

export default App