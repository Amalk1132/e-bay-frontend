import React from 'react'
import "./Tennis.css"
import { useContext } from 'react'
import { myContext } from '../../App'
import { Link } from 'react-router-dom'

const Tennis = () => {
    const {data}=useContext(myContext)
  return (
    <div className='main-tennis'>

        {
            data.filter((item)=>item.Subcategory==="tennis")
            .map((item,index)=>{
                return (
                    <Link to={`/displayprod/${item._id}`}>  <div key={index} className='sub-tennis'>
                        <h1>{item.Title}</h1>
                        <h1>{item.Description}</h1>
                        <h1>{item.Category}</h1>
                        <h1>{item.Subcategory}</h1>
                        <img src={item.Image} alt="tennis"/>
                        <h1>{item.Price}</h1>
                        <button className="">Add to cart</button>
                    </div></Link>
                )
            })
        }
    </div>
  )
}

export default Tennis