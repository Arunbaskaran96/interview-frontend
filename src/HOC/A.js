import React from 'react'
import { useState } from 'react'
import Hoc from './Hoc'

function A(props) {
    const {counter,increment}=props
  return (
    <div>
        <button onClick={increment}>Click-A-{counter}</button>
    </div>
  )
}

export default Hoc(A)