import React, { useState } from 'react'
import Button from './Components/Button'

const App = () => {
  const [theme, setTheme] = useState('Dark')

  return (
    <div>
      <h1 >Theme is {theme}</h1>
      <Button theme={theme}   ></Button>
    </div>
  )
}

export default App