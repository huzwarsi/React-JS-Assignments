import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white px-8 py-4 shadow-lg">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-wide text-blue-400">
          Logo
        </h1>

        {/* Links */}
        <div className="flex items-center gap-8 text-lg">
          <Link
            to="/"
            className="hover:text-blue-400 transition duration-300"
          >
            Home
          </Link>

          <Link
            to="/about"
            className="hover:text-blue-400 transition duration-300"
          >
            About
          </Link>

          <Link
            to="/contact"
            className="hover:text-blue-400 transition duration-300"
          >
            Contact
          </Link>


          
          <Link
            to="/Product"
            className="hover:text-blue-400 transition duration-300"
          >
            Product
          </Link>

          <Link to='Courses'
            className="hover:text-blue-400 transition duration-300"
          
          >Courses</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar