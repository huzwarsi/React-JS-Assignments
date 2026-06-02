import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navigation = () => {

    const navigate = useNavigate()
  return (
    <div>
             <button  onClick={()=> navigate('/') } className='bg-green-800 rounded text-white cursor-pointer p-3 ml-5 mt-7'>Return to Home Page</button>
             <button  onClick={()=> navigate(-1) } className='bg-green-800 rounded text-white cursor-pointer p-3 ml-5 mt-7'>Back</button>
             <button  onClick={()=> navigate(+1) } className='bg-green-800 rounded text-white cursor-pointer p-3 ml-5 mt-7'>Next</button>



    </div>
  )
}

export default Navigation