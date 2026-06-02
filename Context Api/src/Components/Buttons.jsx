import React from 'react'
import { useContext } from 'react'
import { ContextApi } from '../Context/Counter'

const Buttons = () => {
  const CounterContext = useContext(ContextApi)
  
  const {count , setCount} = CounterContext



  const Increment = () =>{
    console.log('.....');
    
    setCount(count + 1)
  }

  const Decrement = () =>{
      setCount(count - 1)

  }

    return (
    <div>
      <button onClick={Increment}>Increment</button>
      <button  onClick={Decrement}>Decrement</button>
    </div>
  )
}

export default Buttons