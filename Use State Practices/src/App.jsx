// import React, { useState } from "react";

// const App = () => {
//   const [mode, changeMode] = useState("white");

//   function modeChanger() {
//     changeMode(mode == 'white' ? 'black' : 'white')
//   }

//   return (

//     <div
//       id="parent"
//       style={{
//         backgroundColor : mode,
//         color : mode == 'black' ? 'white' : 'black',
//         height: "100vh",
//         width: "100vw",
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "center",
//         alignItems: "center",
//         transition: "0.4s ease",
//       }}
//     >
//       <h1>Color Mode Changer</h1>
//       <button style={{
//         backgroundColor : mode == 'black'? 'white' : '',
//         color : mode == 'black' ? 'white' : 'black'
//       }} onClick={modeChanger}>Toggle Mode</button>
//     </div>
//   );
// };

// export default App;
import React, { useState } from 'react'
import './index.css' // CSS file ko import karna mat bhooliyega

const StepWizardUI = () => {


  const [step , setStep ] = useState(1)


  const nextBtn = ()=>{
    console.log('clicked');
    if(step < 3){

      setStep(step + 1)
    }
    
  }
  return (
    <div className="wizard-container">
      
      {/* 1. Circles Row */}
      <div className="circles-row">
        <div className="circle-item" style={{backgroundColor : step == 1 ? 'blue' : 'gray'}}>1</div>
        <div className="circle-item" style={{backgroundColor : step == 2 ? 'blue' : 'gray'}} >2</div>
        <div className="circle-item" style={{backgroundColor : step == 3 ? 'blue' : 'gray'}} >3</div>
      </div>

      {/* 2. Main Heading */}
      <h1 className="wizard-heading">Step 1: Learn React</h1>

      {/* 3. Connected Buttons */}
      <div className="button-group">
        <button className="wizard-btn btn-border-right" >Previous</button>
        <button className="wizard-btn" onClick={nextBtn}>Next</button>
      </div>

    </div>
  )
}

export default StepWizardUI
