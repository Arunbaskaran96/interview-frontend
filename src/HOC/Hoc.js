import React from 'react'
import { useState } from 'react'

const Hoc=(wrappedComponent)=>{
    function Hoc() {
        const[counter,setCounter]=useState(0)
        function increment(){
            setCounter(counter+1)
        }
        return (
          <wrappedComponent counter={counter} increment={increment} />
        )
      }
}

export default Hoc