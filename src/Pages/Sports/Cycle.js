import React from 'react'
import "./Cycle.css"
import { useContext } from 'react'
import { myContext } from '../../App'
import { Link } from 'react-router-dom'
const Cycle = () => {
    const {data}=useContext(myContext)
  return (
    <div className='main-cycle'>

        {
            data.filter((item)=>item.Subcategory==="cycle")
            .map((item,index)=>{
                return(
                    <Link to={`/displayprod/${item._id}`}>   <div key={index} className='sub-cycle'>
                        <h1>{item.Title}</h1>
                        <h1>{item.Description}</h1>
                        <h1>{item.Category}</h1>
                        <h1>{item.Subcategory}</h1>
                        <img src={item.Image}alt="cycle"/>
                        <h1>{item.Price}</h1>
                        <button className="">Add to cart</button>
                    </div></Link>
                )
            })
        }
    </div>
  )
}

export default Cycle