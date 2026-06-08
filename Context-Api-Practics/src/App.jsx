import React, { useContext } from 'react'
import Button from './Components/Button'
import { ContextApi } from './Context/Counter'

const App = () => {
  const counterContext = useContext(ContextApi)

  
  return (
    <div>
      <h1>Count is {counterContext.count}</h1>
      <Button/>
    </div>
  )
}

export default App