import React from 'react'
import { Link, Outlet } from 'react-router-dom'



const Product = () =>{

  return (
    <div className="flex flex-col items-center justify-center h-full gap-6">
      
      {/* <h1 className="text-[40px] font-bold">
        Product
        </h1> */}
      <div className="flex gap-8 text-xl font-semibold">
        <Link to="Men">Men</Link>
        <Link to="Womens">Women</Link>
        <Link to="Kids">Kids</Link>
      </div>

      <Outlet />

    </div>
  )
}


export default Product