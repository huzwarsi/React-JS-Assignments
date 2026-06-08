import React, { createContext, useState } from 'react'


export const ContextApi = createContext()
const Counter = ({children}) => {

    const [count, setCount] = useState(0)
  return (
    
        <ContextApi.Provider value={{count,setCount}}>
            {children}
        </ContextApi.Provider>
  )
}

export default Counter