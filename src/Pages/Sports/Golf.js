import React from 'react'

import "./Golf.css"
import { useContext } from 'react'
import { myContext } from '../../App'
import { Link } from 'react-router-dom'
const Golf = () => {
    const {data}=useContext(myContext)
  return (
    <div className='main-golf'>
        {
            data.filter((item)=>item.Subcategory==="golf")
            .map((item,index)=>{
                return (
                    <Link to={`/displayprod/${item._id}`}>   <div key={index} className='sub-golf'>
                        <h1>{item.Title}</h1>
                        <h1>{item.Description}</h1>
                        <h1>{item.Category}</h1>
                        <h1>{item.Subcategory}</h1>
                        <img src={item.Image} alt='golf'/>
                        <h1>{item.Price}</h1>
                       

                    </div></Link>
                )
            })
        }
    </div>
  )
}

export default Golf