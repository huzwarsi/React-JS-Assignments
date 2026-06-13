import React, { useReducer, useState } from 'react'

const Test = () => {

    const [checked,toggle]  = useReducer((checked)=> !checked , false )
  return (
    <div>
       <input type='checkbox' 
        onChange={toggle}
       />
        {checked ? 'checked' : 'not checked'}
    </div>
  )
}

export default Test