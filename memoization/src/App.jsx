import React, { useEffect, useState } from 'react'
import { memo } from 'react';

const App = () => {
  const [state, setState] = useState(true)
  console.log('App component is rendring');
  

  return (
    <>
    <button onClick={()=>setState(!state)}>State Changer</button>
    <Home/>
    <About/>
    <Contact/>
    </>
    
  )
}

export default App


const Home = memo(()=>{
  console.log('Home component is rendring');
  
  return(
    <h1>Hello</h1>
  )
})


const About = memo(()=>{
  console.log('About component is rendring');
  
  return(
    <h1>About</h1>
  )
})


const Contact = ()=>{
  console.log('Contact component is rendring');
  
  return(
    <h1>Contact</h1>
  )
}