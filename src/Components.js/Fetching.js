import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import MiniComponents from './MiniComponents'

function Fetching() {
    const [data,setData]=useState([])
    const [search,setSearch]=useState([])

    useEffect(()=>{
        getItems()
    },[])

    const getItems=async()=>{
        try {
            const {data}=await axios.get("https://dog.ceo/api/breeds/list/all")
            setData(data.message)
            setSearch(data.message)
        } catch (error) {
            console.log(error)
        }
    }
    let keys=Object.keys(data)
    // console.log(keys)
    let values=Object.values(data)
    // console.log(values)

    // const handlechange=()=>{
    //     console.log()
    // }
    console.log(search)
    const filterData=(e)=>{
        const res=keys.filter(item=>item.startsWith(e.target.value))
        setData(res)
    }
    console.log(search)
  return (
    <div className='container-fluid main-container'>
        <div className='row card-1' style={{textAlign:"center"}}>
            <div className='col-12'>
                <input onChange={filterData} type='text'/><br/>
            </div>
        </div>
        <div className='row card-2'>
            <ul className='col-6'>
                {
                    keys.map((item)=>{
                        return(
  
                            <li>{item}</li>

                        )
                    })
                }
            </ul>
            <ul className='col-6'>
                {
                    values.map((data)=>{
                        return(
                            <li>{data}</li>
                        )
                    })
                }
            </ul>
        </div>
    </div>
  )
}

export default Fetching