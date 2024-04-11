import React from 'react'
import "./Menglass.css"
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { myContext } from '../../App'

const Menglass = () => {
  const {data}=useContext(myContext)
  return (
    <div className='main-glass'>
      {
        data.filter((item)=>item.Subcategory==="menglass")
        .map((item,index)=>{
          return (
            <Link to={`/displauprod/${item._id}`}><div key={index} className='sub-glass'>
              <h1>{item.Title}</h1>
              <h1>{item.Description}</h1>
              <h1>{item.Category}</h1>
              <h1>{item.Subcategory}</h1>
              <img src={item.Image} alt='menglass'/>
              <h1>{item.Price}</h1>
            
            </div></Link>
          )
        })
      }
    </div>
  )
}

export default Menglass