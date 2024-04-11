import React from 'react'
import "./Fishing.css"
import { useContext } from 'react'
import { myContext } from '../../App'
import { Link } from 'react-router-dom'
const Fishing = () => {
  const {data}=useContext(myContext)
  return (
    <div className='main-fishing'>
      {
        data.filter((item)=>item.Subcategory==="fishing")
        .map((item,index)=>{
          return (
            <Link to={`/displayprod/${item._id}`}>  <div key={index} className='sub-fishing'>
              <h1>{item.Title}</h1>
              <h1>{item.Description}</h1>
              <h1>{item.Category}</h1>
              <h1>{item.Subcategory}</h1>
              <img src={item.Image} alt='fishing'/>
              <h1>{item.Price}</h1>
              <button className="">Add to cart</button>

            </div></Link>
          )
        })
      }
    </div>
  )
}

export default Fishing