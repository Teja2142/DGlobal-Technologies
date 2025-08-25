import {Routes, Route} from 'react-router-dom'
import React from 'react'
import './App.css'

import Home from './components/Home'
import Careers from './components/Careers'
import About from './components/About'
import Contact from './components/Contact'

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

import Healthcare from './components/industries/Healthcare';
import FinanceBanking from './components/industries/FinanceBanking';
import RetailECommerce from './components/industries/RetailECommerce';
import Energy from './components/industries/Energy';
import Manufacturing from './components/industries/Manufacturing';
import LogisticsSupplyChain from './components/industries/LogisticsSupplyChain';
import ContractStaffing from './components/ContractStaffing';
import ProjectDelivery from './components/ProjectDelivery';

import ConsultantInterestForm from './components/ConsultantInterestForm';
import JobDescriptionPage from './components/JobDescriptionPage'
import HiringInterestForm from './components/HiringInterestForm'
import ResumeUpload from './components/ResumeUpload'
import BlogInsights from './components/BlogInsights'

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
        <Route path='/blogs' element={<BlogInsights/>}/>

        <Route path='/healthcare' element={<Healthcare/>}/>
        <Route path='/finance' element={<FinanceBanking/>}/>
        <Route path='/retail' element={<RetailECommerce/>}/>
        <Route path='/energy' element={<Energy/>}/>
        <Route path='/manufacturing' element={<Manufacturing/>}/>
        <Route path='/logistics' element={<LogisticsSupplyChain/>}/>

        <Route path='/consultantform' element={<ConsultantInterestForm/>}/>
        <Route path='/jobdescription' element={<JobDescriptionPage/>}/>
        <Route path='/hiringform' element={<HiringInterestForm/>}/>
        <Route path='/resumeupload' element={<ResumeUpload/>}/>
        
      </Routes>

      <Footer/>
    </div>
  )
}

export default App