import React from 'react'
import "./Lightequip.css"
import { useContext } from 'react'
import { myContext } from '../../App'
import { Link } from 'react-router-dom'


const LightEquipment = () => {
    const {data}=useContext(myContext)
  return (
    <div className='main-light'>
        {
            data.filter((item)=>item.Subcategory==="lightequipment")
            .map((item,index)=>{
                return (
                    <Link to={`/displauprod/${item._id}`}> <div key={index} className='sub-light'>
                        <h1>{item.Title}</h1>
                        <h1>{item.Description}</h1>
                        <h1>{item.Category}</h1>
                        <h1>{item.Subcategory}</h1>
                        <img src={item.Image} alt='lightequipment'/>
                        <h1>{item.Price}</h1>
                        <button className="">Add to cart</button>

                    </div></Link>
                )
            })
        }
    </div>
  )
}

export default LightEquipment