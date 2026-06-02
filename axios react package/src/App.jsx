
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const App =  () => {

  const [state , setState]= useState(0)



    useEffect( ()=>{
      axios.get('https://api.adviceslip.com/advice').then((res)=> {console.log(res)})
    
    },[state])
  
  return (
    <div>
      <button onClick={()=>{setState(state + 1)}}>Get Data</button>
    </div>
  )
}

export default App