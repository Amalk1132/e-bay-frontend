import React from 'react'

import "./Healthcare.css"
import { useContext } from 'react'
import { myContext } from '../../App'
import { Link } from 'react-router-dom'


const Healthcare = () => {
  const {data}=useContext(myContext)
  return (
    <div className='main-health'>
          {data.filter((item)=>item.Subcategory==="healthcare")
        .map((item,index)=>{
            return (
              <Link to={`/displayprod/${item._id}`}>   <div key={index} className='sub-health'>
                      <h1>{item.Title}</h1>
                    <h1>{item.Description}</h1>
                    <h1>{item.Category}</h1>
                    <h1>{item.Subcategory}</h1>
                    <img src={item.Image} alt='healthcare'/>
                    <h1>{item.Price}</h1>
                    <button className="">Add to cart</button>
                    
                    
                </div></Link>
            )
        })}
    </div>
  )
}

export default Healthcare