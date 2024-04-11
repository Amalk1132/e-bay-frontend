import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "./Display.css"

const Displyprod = () => {
    const[data,setData]=useState({})
    const {id}=useParams();
    console.log(id);

    useEffect(()=>{
        axios.get(`http://localhost:8090/user/product/${id}`)
        .then((res)=>setData(res.data))
        .catch((e)=>console.log(e))
    },[id])
    console.log(data.Description);
   
    // useEffect(() => {
    //     if (data.Description) {
    //         console.log(data.Description.Display);
    //     }
    // }, [data]);
  return (
    <div className='display-main'>
       
       <div className='disp-2'><img src={data.Image} alt=''/>
       </div> 
       <div className='disp-3' >
      <h1>{data.Title}</h1> 

       </div>
    </div>
  )
}

export default Displyprod