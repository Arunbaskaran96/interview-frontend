import React from 'react'
import { useState } from 'react'
import Hoc from './Hoc'

function B(props) {
    const {counter,increment}=props
  return (
    <div>
        <button onMouseOver={increment} >Click-B-{counter}</button>
    </div>
  )
}
 
export default Hoc(B)