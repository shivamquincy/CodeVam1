import { BrowserRouter, Route,Routes } from 'react-router-dom'
import { useState } from 'react'
import React from 'react'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Notf from './notf/Notf'
import Plans  from './pages/plans/Plans'
import './App.css'
import Footer from './compopnents/Footer'
import Navbar from './compopnents/Navbar'
import {links} from "./data" 
import Com from './pages/com/Com'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
     <Navbar />
      <Routes>
        <Route index element={<Home/>}/>
        <Route path = 'about' element={<About/>}/>
        <Route path = 'plans' element={<Plans/>}/>
        <Route path = 'community' element={<Com/>}/>
        <Route path = 'about' element={<About/>}/>
        <Route path = '*' element={<Notf/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
