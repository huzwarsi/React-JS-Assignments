import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from './Components/Navbar'
import Course from './pages/Course'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <div>
      <Navbar/>
    <Routes>
      <Route  path='/' element={<Home/>} />
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>} />
      <Route path='/Course' element={<Course/>} />
      <Route path='*' element={<NotFound/>} />


    </Routes>
    </div>
  )
}

export default App