import React from 'react'

import "./Womenglass.css"
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { myContext } from '../../App'

const Womeglass = () => {
  const {data}=useContext(myContext)
  return (
    <div className='main-womenglass'>
      {
        data.filter((item)=>item.Subcategory==="womenglass")
        .map((item,index)=>{
          return (
            <Link to={`/displauprod/${item._id}`}><div key={index} className='sub-womenglass'>
              <h1>{item.Title}</h1>             
              <h1>{item.Description}</h1>
              <h1>{item.Category}</h1>
              <h1>{item.Subcategory}</h1>
             <img src={item.Image}alt="womenglass"/>
              <h1>{item.Price}</h1>
              <button className="">Add to cart</button>
            </div></Link>
          )
        })
      }
    </div>
  )
}

export default Womeglass