// import React, { useState } from 'react'

// const App = () => {

//   const [count , setCount ] = useState(0)
//   function Increment (){

//     setCount(count + 1)
//   }
//   return (
//     <div>
//       <h1>Hello React JS</h1>
//       <h2>{count}</h2>
//       <button onClick={Increment}>Click</button>

//     </div>
//   )
// }

// export default App




import React from 'react'

const App = () => {
  
  return (
    <div id='parent'>
      <Buttons  title={'A'} bg={'red'}/>
      <Buttons  title={'B'} bg={'yellow'}/>
      <Buttons title={'C'} bg={'white'}/>
      <Buttons  bg={'brown'}/>

      <Buttons title={'E'} bg={'blue'}/>

      
    </div>
  )
}

export default App

const Buttons = ({title , bg}) => {

  
  return (
    <div>
      <button style={
        {
          width : '200px',
          padding : '40px',
          backgroundColor : bg,
          fontSize : '30px',
          borderRadius : '20px'

        }
      }>{title || 'No data'}</button>
      
      
    </div>
  )
}

export {Buttons}