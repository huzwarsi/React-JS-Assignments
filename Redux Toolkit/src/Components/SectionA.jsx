import React from 'react'
import { useSelector } from 'react-redux'
import { store } from '../Store/Store'

const SectionA = () => {
  const counter = useSelector((store)=> store.counter)
  return (
    <div>
        <h1>Section A {counter.count}</h1>
    </div>
  )
}

export default SectionA