import React from 'react'
import "./Hvac.css"
import { useContext } from 'react'
import { myContext } from '../../App'
import { Link } from 'react-router-dom'


const Hvac = () => {
    const {data}=useContext(myContext)
  return (
    <div className='main-hvac'>
        {
            data.filter((item)=>item.Subcategory==="hvac")
            .map((item,index)=>{
                return (
                    <Link to={`/displauprod/${item._id}`}><div key={index} className='sub-hvac'>
                        <h1>{item.Title}</h1>
                        <h1>{item.Description}</h1>
                        <h1>{item.Category}</h1>
                        <h1>{item.Subcategory}</h1>
                        <img src={item.Image} alt='hvac'/>
                        <h1>{item.Price}</h1>
                        <button className="">Add to cart</button>

                    </div></Link>
                )
            })
        }
    </div>
  )
}

export default Hvac