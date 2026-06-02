import React from 'react'
import Buttons from './Components/Buttons'
import { useContext } from 'react'
import { ContextApi } from './Context/Counter'

const App = () => {

  const CounterContext = useContext(ContextApi)
  return (
    <div>
      <h1>Count is {CounterContext.count} </h1>
      <Buttons/>


    </div>
  )
}

export default App