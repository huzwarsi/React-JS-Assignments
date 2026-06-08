import React, { useContext } from 'react'
import { ContextApi } from '../Context/Counter';

const Button = () => {
    const counterContext = useContext(ContextApi)
    const {count , setCount} = counterContext

    const Increment = () =>{

        console.log('Increement clicked');
        setCount(count + 1)
        
    }

    const Decrement = () =>{
        console.log('Decrement clicked');
        setCount(count -1)


    }
  return (
    <div>
        <button onClick={Increment}>Increment</button>
        <button onClick={Decrement}>Decrement</button>

    </div>
  )
}

export default Button