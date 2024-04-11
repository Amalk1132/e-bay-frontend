import React from 'react'
import "./Jwerly.css"
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { myContext } from '../../App'


const Jwelery = () => {
  const {data}=useContext(myContext)
  return (
    <div className='main-jwelry'>
      {
        data.filter((item)=>item.Subcategory==="jwellry")
        .map((item,index)=>{
          return (
            <Link to={`/displauprod/${item._id}`}><div key={index} className='sub-jwelry'>
              <h1>{item.Title}</h1>
              <h1>{item.Description}</h1>
              <h1>{item.Category}</h1>
              <h1>{item.Subcategory}</h1>
              <h1>{item.Price}</h1>
              <button className="">Add to cart</button>

            </div></Link>
          )
        })
      }
    </div>
  )
}

export default Jwelery