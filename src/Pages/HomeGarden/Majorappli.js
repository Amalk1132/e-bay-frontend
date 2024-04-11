import React from 'react'
import "./Major.css"
import { useContext } from 'react'
import { myContext } from '../../App'
import { Link } from 'react-router-dom'

const Majorappli = () => {
  const {data}=useContext(myContext)
  return (
    <div className='main-maj'>
    {
        data.filter((item)=>item.Subcategory==="majorappli")
        .map((item,index)=>{
            return (
              <Link to={`/displauprod/${item._id}`}> <div key={index } className='sub-maj'>
                    <h1>{item.Title}</h1>
                    <h1>{item.Description}</h1>
                    <h1>{item.Category}</h1>
                    <h1>{item.Subcategory}</h1>
                    <img src={item.Image} alt="maj"/>
                    <h1>{item.Price}</h1>
                    <button className="">Add to cart</button>
                    
                </div></Link>
            )
        })
    }
    </div>
  )
}

export default Majorappli