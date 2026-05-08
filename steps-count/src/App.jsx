import React, { useState } from 'react'

const App = () => {

  const [step,setStep] = useState(1)

  const arry = [
    'step 1 : Learn React',
    'Step 2 : Earn you Income',
    'Step 3 : Invest your Income'
  ]

  function NextHandler(){
    if(step < 3){
      setStep( step + 1)
    }
  }


  function prevousHandler (){
    if(step > 1){
      setStep( step - 1)
    }
  }
  return (
    
    <>

    <div id='parent'> 
    <h1>React Step Assignment</h1>


</div>

<div id='circles'>

    <div style={{
      backgroundColor :  step == 1 ? 'blue' : 'white'
    }}> 1</div>
    <div style={{
      backgroundColor : step == 2 ? 'blue' : 'white'
    }}>2</div>
    <div style={{
       backgroundColor : step == 3 ? 'blue' : 'white'
    }}>3</div>

  </div>

  <div id='heading'>


  <h2>{arry[step -1]}</h2>
  </div>

  <div id='btns'>

    <button onClick={prevousHandler} >Previous</button>
    <button onClick={NextHandler}>Next</button>
  </div>
    
    </>

    
    
  )
}

export default App