import React, { useState } from 'react'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import { useDispatch } from 'react-redux'
import { decrementAction, incrementAction } from './Reducers/counterReducer'

const App = () => { 

  const dispatch = useDispatch()
  return (
    <div>
      <button onClick={()=> dispatch(incrementAction())}>Increment</button>
     <button onClick={()=>dispatch(decrementAction())}>Decrement</button>
      {/* <button onClick={()=>dispatch(ResetHandler())}>Reset</button> */}
      
      <Home />
      <About/>
      <Contact/>


    </div>
  )
}

export default App