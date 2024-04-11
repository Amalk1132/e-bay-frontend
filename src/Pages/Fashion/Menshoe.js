import React from 'react'
import { Link } from 'react-router-dom'
import "./Menshoe.css"
import { useContext } from 'react'
import { myContext } from '../../App'
const Menshoe = () => {
  const {data}=useContext(myContext)
  return (
    <div className='main-mshoe'>
      {
        data.filter((item)=>item.Gender==="men")
        .map((item,index)=>{
          return (
            <Link to={`/displauprod/${item._id}`}><div key={index} className='sub-mshoe'>
              <h1>{item.Title}</h1>
              <h1>{item.Description}</h1>
              <h1>{item.Category}</h1>
              <h1>{item.Gender}</h1>
              <h1>{item.Subcategory}</h1>
              <img src={item.Image} alt="shoe"/>
              <h1>{item.Price}</h1>
              <button className="">Add to cart</button>

            </div></Link>
          )
        })
      }
    </div>
  )
}

export default Menshoe