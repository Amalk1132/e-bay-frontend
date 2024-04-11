import React from 'react'
import "./Watch.css"
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { myContext } from '../../App'
const Watches = () => {
  const {data}=useContext(myContext)
  return (
    <div className='main-watch'>
      {
        data.filter((item)=>item.Category==="watch")
        .map((item,index)=>{
          return (
            <Link to={`/displauprod/${item._id}`}> <div key={index} className='sub-watch'>
              <h1>{item.Title}</h1>
              <h1>{item.Description}</h1>
              <h1>{item.Category}</h1>
              <img src={item.Image}alt='watch'/>
              <h1>{item.Price}</h1>
              <h1>{item.Brand}</h1>
              <button className="">Add to cart</button>

            </div></Link>
          )
        })
      }
    </div>
  )
}

export default Watches