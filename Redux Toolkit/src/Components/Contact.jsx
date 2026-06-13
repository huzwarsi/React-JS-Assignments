import React from 'react'
import { useDispatch } from 'react-redux'
import { constant } from '../Store/Constants'

const Contact = () => {
  const dispatch = useDispatch()
  return (
    <div>
        <h1 onClick={()=>dispatch({type : constant.Decrement})}>Contact</h1>
    </div>
  )
}

export default Contact