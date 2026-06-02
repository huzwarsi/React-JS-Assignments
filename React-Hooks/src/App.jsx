// // import React, { useState } from 'react'

// // const App = () => {
// //   const [num, setNum] = useState(10)

// //   const btn = ()=>{
// //     setNum(prev => prev + 1)
// //   }
 
// //   return (
// //     <div>
// //     <h1>Hello Huzaifa your number is {num}</h1>
// //     <button  onClick={btn}>click</button>
// //     </div>
// //   )
// // }

// // export default App



// import React, { useState } from 'react'

// const App = () => {
//   const [count , setCount] = useState(0)

//   const increase = ()=>{
//     setCount(prev => prev + 1)
//   }

//   const decrease = ()=>{
//     setCount(prev => prev - 1)
//   } 

//   const Jumb5 = ()=>{
//     setCount(prev => (prev + 5))
    

//   }
//   return (
//     <div><h1>Counter</h1>
//     <h2>{count}</h2>
//     <button onClick={increase}>Clicked to increase</button>
//     <button onClick={decrease}>Clicked to decrease</button>
//     <button onClick={Jumb5}>Clicked to Jump 5</button>


    
//     </div>
//   )
// }

// export default App




// import React, { useState } from 'react'

// const App = () => {

  
//   const [Details , setDetails] = useState({name : 'Huzaifa Ali Warsi', age : 19})
//   const newDetails = ()=>{
//    const  newDetail = {...Details}
//     newDetail.name = 'Khuzaima';
//     newDetail.age = 18
//     setDetails(newDetail)
//   }
//   return (
//     <div>
//       <h1>Your name is {Details.name} & age is {Details.age}</h1>
//       <button onClick={newDetails}>New User</button>

//     </div>
//   )
// }

// export default App




// import React, { useState } from 'react'

// const App = () => {

//   const [title , setTitle]= useState('')

//   const submitHandler = (e) =>{
//      e.preventDefault()
//     console.log('Form Submitted by', title);
//     setTitle('')

    
//   }
//   return (
//     <div>
//       <form onSubmit={ (e)=>{

//       submitHandler(e)}}  action="">
        
//       <input type="text" name="" id="" value={title} onChange={(e)=>{
//         setTitle(e.target.value)
//       }} />
//       <button >
//         Submit
//       </button>

//       </form>
//     </div>
//   )
// }

// export default App



import React, { useEffect, useState } from 'react'
import './App.css'



const App =  () => {

  const [state , setState] = useState(0)
  const [newState, setnewState] = useState(0)
console.log('Btn clicked');

useEffect(()=>{
  
fetch('https://api.hiringmine.com/api/users?limit=10&pageNo=1&keyWord=&category')
.then((res)=> res.json())
.then((res)=> console.log(res)
)
},[])
  


  return (
    <div>
      <h1>Use Effect Application</h1>
      <button onClick={()=> setState(state + 1)}>Click me</button>
      <button onClick={()=> setnewState(newState + 1)}>Click me Independent state</button>

    </div>
  )
}

export default App