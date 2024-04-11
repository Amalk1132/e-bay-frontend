import React from 'react'
import { useContext } from 'react'
import { myContext } from '../../App'
import "./Womenshoe.css"
import { Link } from 'react-router-dom'

const Womenshoe = () => {
  const {data}=useContext(myContext)
  return (
    <div className='main-womenshoe'>

      {
        data.filter((item)=>item.Gender==="women")
        .map((item,index)=>{
          return(
            <Link to={`/displayprod/${item._id}`}><div key={index} className='sub-womenshoe'>
              <h1>{item.Title}</h1>
              <h1>{item.Description}</h1>
              <h1>{item.Category}</h1>
              <h1>{item.Gender}</h1>
              <h1>{item.Subcategory}</h1>
              <img src={item.Image} alt='womenshoe'/>
              <h1>{item.Price}</h1>
              <button className="">Add to cart</button>
            </div></Link>
          )
        })
      }
    </div>
  )
}

export default Womenshoe