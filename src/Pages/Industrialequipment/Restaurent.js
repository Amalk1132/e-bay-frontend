import React from 'react'
import "./Restaurent.css"
import { useContext } from 'react'
import { myContext } from '../../App'
import { Link } from 'react-router-dom'


const Restaurent = () => {
    const {data}=useContext(myContext)
  return (
    <div className='main-res'>
        {
            data.filter((item)=>item.Subcategory==="restaurent")
            .map((item,index)=>{
                return (
                    <Link to={`/displauprod/${item._id}`}><div key={index} className='sub-res'>
                        <h1>{item.Title}</h1>
                        <h1>{item.Description}</h1>
                        <h1>{item.Category}</h1>
                        <h1>{item.Subcategory}</h1>
                        <img src={item.Image} alt='restaurent'/>
                        <h1>{item.Price}</h1>
                        <button className="">Add to cart</button>

                    </div></Link>
                )
            })
        }
    </div>
  )
}

export default Restaurent