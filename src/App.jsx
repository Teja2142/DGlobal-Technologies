import {Routes, Route} from 'react-router-dom'
import React from 'react'
import './App.css'

import Home from './components/Home'
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

import Healthcare from './components/industries/Healthcare';
import FinanceBanking from './components/industries/FinanceBanking';
import RetailECommerce from './components/industries/RetailECommerce';
import Energy from './components/industries/Energy';
import Manufacturing from './components/industries/Manufacturing';
import LogisticsSupplyChain from './components/industries/LogisticsSupplyChain';
import ContractStaffing from './components/ContractStaffing';
import ProjectDelivery from './components/ProjectDelivery';

import ConsultantInterestForm from './components/ConsultantInterestForm';

function App() {
  

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/contractstaffing" element={<ContractStaffing />} />
        <Route path="/projectdelivery" element={<ProjectDelivery />} />
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

        <Route path='/healthcare' element={<Healthcare/>}/>
        <Route path='/finance' element={<FinanceBanking/>}/>
        <Route path='/retail' element={<RetailECommerce/>}/>
        <Route path='/energy' element={<Energy/>}/>
        <Route path='/manufacturing' element={<Manufacturing/>}/>
        <Route path='/logistics' element={<LogisticsSupplyChain/>}/>

        <Route path='/consultantform' element={<ConsultantInterestForm/>}/>
        
      </Routes>

      <Footer/>
    </div>
  )
}

export default App