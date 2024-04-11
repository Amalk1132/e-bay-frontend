import React from 'react'
import "./Beauty.css"
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { myContext } from '../../App'

const Beauty = () => {
  const {data}=useContext(myContext)
  return (
    <div className='main-beauty'>
      {
        data.filter((item)=>item.Subcategory==="beauty")
        .map((item,index)=>{
          return (
            <Link to={`/displauprod/${item._id}`}><div key={index} className='sub-beauty'>
              <h1>{item.Title}</h1>
              <h1>{item.Description}</h1>
              <h1>{item.Category}</h1>
              <h1>{item.Subcategory}</h1>
             <img src={item.Image} alt="beauty"/>
              <h1>{item.IPricemage}</h1>
              <button className="">Add to cart</button>

            </div></Link>
          )
        })
      }
    </div>
  )
}

export default Beauty