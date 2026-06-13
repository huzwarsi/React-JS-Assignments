import React, { useReducer } from 'react'

const Counter = () => {
    
    const [state, dispatch] = useReducer(reducer, {count : 0})
    function  reducer(state,action){
        switch(action.type){
            case 'Increment' : 
            return {count : state.count + 1}
             case 'Decrement' : 
            return {count : state.count - 1}

             case 'Reset' : 
            return {count : state.count = 0}
            default : state
        }
    }
  return (
    <div>
        <h2>Count is : {state.count}</h2>
        <button onClick={()=> dispatch({type : 'Increment'}) }>+</button>
        <button onClick={()=> dispatch({type : 'Decrement'}) }>-</button>
        <button onClick={()=> dispatch({type : 'Reset'}) }>Reset</button>


    </div>
  )
}

export default Counter