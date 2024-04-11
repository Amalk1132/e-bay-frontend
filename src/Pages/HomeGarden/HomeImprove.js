import React from 'react'
import "./Homeimpro.css"
import { useContext } from 'react'
import { myContext } from '../../App'
import { Link } from 'react-router-dom'

const HomeImprove = () => {
  const {data}=useContext(myContext)
  return (
    <div className='main-homie'>
    {
        data.filter((item)=>item.Subcategory==="homeimpro")
        .map((item,index)=>{
            return (
              <Link to={`/displauprod/${item._id}`}><div key={index } className='sub-homie'>
                    <h1>{item.Title}</h1>
                    <h1>{item.Description}</h1>
                    <h1>{item.Category}</h1>
                    <h1>{item.Subcategory}</h1>
                    <img src={item.Image} alt='homeimpr'/>
                    <h1>{item.Price}</h1>
                    <button className="">Add to cart</button>
                 
                </div></Link>
            )
        })
    }
    </div>
  )
}

export default HomeImprove