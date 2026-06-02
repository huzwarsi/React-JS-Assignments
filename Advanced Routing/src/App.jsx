import React from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import { Route, Routes, useParams } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import NotFound from './Components/NotFound'
import Product from './Components/Product'
import Men from './Components/Men'
import Womens from './Components/Womens'
import Kids from './Components/Kids'
import Courses from './Components/Courses'
import CourseDetail from './Components/CourseDetail'
import Navigation from './Components/Navigation'

const App = () => {

  
  
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      
      <Navbar />
      <Navigation/>

      <div className="flex-1 flex items-center justify-center">
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='product' element={<Product/>} >
          <Route path='Men' element={<Men/>} />
          <Route path='Womens' element={<Womens/>} />
          <Route path='Kids' element={<Kids/>} />

          </Route>
          <Route path='Courses' element={<Courses/>} />
          <Route path='Courses/:id' element={<CourseDetail/>} />





          <Route path='*' element={<NotFound/>} />
        </Routes>
      </div>

      <Footer />

    </div>
  )
}

export default App