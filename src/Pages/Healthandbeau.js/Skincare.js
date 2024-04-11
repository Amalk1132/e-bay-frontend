import React from 'react'
import "./Skincare.css"
import { useContext } from 'react'
import { myContext } from '../../App'
import { Link } from 'react-router-dom'


const Skincare = () => {
  const {data}=useContext(myContext)
  return (
    <div className='main-skin'>

        {data.filter((item)=>item.Subcategory==="skincare")
        .map((item,index)=>{
            return (
              <Link to={`/displayprod/${item._id}`}>   <div key={index} className='sub-skin'>
                    <h1>{item.Title}</h1>
                    <h1>{item.Description}</h1>
                    <h1>{item.Category}</h1>
                    <h1>{item.Subcategory}</h1>
                    <img src={item.Image}alt='skincare'/>
                    <h1>{item.Price}</h1>
                    <button className="">Add to cart</button>

                </div></Link>
            )
        })}
    </div>
  )
}

export default Skincare