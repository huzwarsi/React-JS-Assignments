import React from 'react'
import { useDispatch } from 'react-redux'
import { constant } from '../Store/Constants'

const About = () => {

  const dispatch = useDispatch()
  return (
    <div >
         <h1 onClick={()=> dispatch({
          type : constant.Increment
         })}>About</h1>

    </div>
  )
}

export default About