import React from 'react'
import { useSelector } from 'react-redux'

const SectionA = () => {
  const counter = useSelector((state)=> state.counter)
  return (
    <div>
        <h1>Section A {counter.count}</h1>
    </div>
  )
}

export default SectionA