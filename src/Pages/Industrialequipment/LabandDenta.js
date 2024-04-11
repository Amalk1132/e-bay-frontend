import React from 'react'
import "./Lab.css"
import { useContext } from 'react'
import { myContext } from '../../App'
import { Link } from 'react-router-dom'


const LabandDenta = () => {
    const {data}=useContext(myContext)
  return (
    <div className='main-lab'>
    {
        data.filter((item)=>item.Subcategory==="labanddenta")
        .map((item,index)=>{
            return (
                <Link to={`/displauprod/${item._id}`}> <div key={index} className='sub-lab'>
                    <h1>{item.Title}</h1>
                    <h1>{item.Description}</h1>
                    <h1>{item.Category}</h1>
                    <h1>{item.Subcategory}</h1>
                    <img src={item.Image} alt='labanddental'/>
                    <h1>{item.Price}</h1>
                    <button className="">Add to cart</button>

                </div></Link>
            )
        })
    }
</div>
  )
}

export default LabandDenta