import axios from 'axios'
import React, { useEffect, useState } from 'react'

function MiniComponents() {
  const [data,setData]=useState([])
  const[search,setSearch]=useState([])


  useEffect(()=>{
    getItems()
  },[])

  const getItems=async()=>{
    try {
      const {data}=await axios.get("https://dog.ceo/api/breeds/list/all")
      // const result=(Object.entries(data.message)).map((e)=>( { [e[0]]: e[1] } ))
      const result=Object.values(data.message)
      // setData(result)
      setData(data.message)
    } catch (error) {
      console.log(error)
    }
  }

  // // const key=Object.values(data)
  // console.log(data)

  const filterData=(e)=>{
    if(data){
      const res=Object.keys(data).filter(item=>item.startsWith(e.target.value)).reduce((acc,val)=>{
        acc[val]=data[val]
        return acc
      },{})
      setData(res)
    }
  }

  const reloadData=(e)=>{
    if(e.key=="Backspace"){
      getItems()
    }
  }





  return (
    <div className='container-fluid' >
      <div className='row' style={{textAlign:"center",marginBottom:"20px",marginTop:"20px"}}>
        <div className='col-12'>
          <input type='text' placeholder='Search here...' onChange={filterData} onKeyDown={reloadData}/><br/>
        </div>
      </div>
      <div className='row'>
        <div className='col-12'>
        <table class="table table-dark">
  <thead>
    <tr>
      <th scope="col">keys</th>
      <th scope="col">values</th>
    </tr>
  </thead>
  <tbody>
    {/* {
      data.map((item)=>{
        return(
          <tr>
          <td>{item}</td>
          <td style={{paddingLeft:"100px"}}>{Object.values(item)}</td>
        </tr>
        )
      })
    } */}
    {
      Object.keys(data).map((key)=>{
        return(
          <tr>
            <td>{key}</td>
            <td>{data[key]}</td>
          </tr>
        )
      })
    }
  </tbody>
</table>
        </div>
      </div>
    </div>
  )
}

export default MiniComponents