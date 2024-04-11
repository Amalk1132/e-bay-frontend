import React from 'react'

import "./Makeup.css"
import { useContext } from 'react'
import { myContext } from '../../App'
import { Link } from 'react-router-dom'


const Makeup = () => {
  const {data}=useContext(myContext)
  return (
    <div className='main-makeup'>
          {data.filter((item)=>item.Subcategory==="makeup")
        .map((item,index)=>{
            return (
              <Link to={`/displayprod/${item._id}`}>    <div key={index} className='sub-makeup'>
                       <h1>{item.Title}</h1>
                    <h1>{item.Description}</h1>
                    <h1>{item.Category}</h1>
                    <h1>{item.Subcategory}</h1>
                    <img src={item.Image} alt='makeup'/>
                    <h1>{item.Price}</h1>
                    <button className="">Add to cart</button>
                    
                </div></Link>
            )
        })}
    </div>
  )
}

export default Makeup