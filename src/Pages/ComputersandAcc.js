import React  from 'react'
import { useContext } from 'react'
import { myContext } from '../App'
import { Link } from 'react-router-dom'

import "./Computerandacc.css"
const ComputersandAcc=()=>{
    const {data}=useContext(myContext)
    return (
        <div className='main-computer'>
            {
                data.filter((item)=>item.Category==="laptop")
                .map((item,index)=>{
                    return (
                       <Link to={`/displayprod/${item._id}`}><div className='sub-computer'key={index}>
                            <h1>{item.Description}</h1>
                            <br/>
                            <br/>
                         <img src={item.Image} alt='laptop'/>
                            <h1 className='ml-28'>Price: {item.Price}</h1>
                            
                           
                        </div></Link> 
                    )
                })
            }
            </div>
    )
}

export default ComputersandAcc