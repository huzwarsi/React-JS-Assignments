import React from 'react'

const Button = (props) => {

    // const changeTheme = () =>{
    //     props.setTheme(

    //         props.theme === 'light' ? 'Dark' : 'light'
    //     )
        
    // }

    console.log(props);
  return (

    <>
    <h4>{props.theme}</h4>

    
  <button >Change Theme</button>
    </>
  )
}

export default Button