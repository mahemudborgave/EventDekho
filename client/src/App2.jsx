import React, { useState, useEffect, createContext } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import FooterComp from './components/FooterComp'

function App2() {
  return (
    <>  
        <Navbar />
        <div className='h-30'></div>
        <Outlet />  
        <FooterComp />
        <ToastContainer />
    </>
  )
}

export default App2
