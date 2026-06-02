import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-black text-white px-10 py-5 flex items-center justify-between shadow-lg">
      
      {/* Logo */}
      <h1 className="text-3xl font-bold text-green-400">
        Huzaifa.dev
      </h1>

      {/* Links */}
      <div className="flex items-center gap-8 text-lg font-medium">
        
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/course'>Course</Link>

      </div>
    </nav>
  );
};

export default Navbar;