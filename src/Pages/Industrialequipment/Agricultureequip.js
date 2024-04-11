import React from 'react'
import { useContext } from 'react'
import { myContext } from '../../App'
import { Link } from 'react-router-dom'


const Agricultureequip = () => {
    const {data}=useContext(myContext)
  return (
    <div className='main-agri'>
        {
            data.filter((item)=>item.Subcategory==="agricultureequip")
            .map((item,index)=>{
                return (
                    <Link to={`/displauprod/${item._id}`}> <div key={index} className='sub-agri'>
                        <h1>{item.Title}</h1>
                        <h1>{item.Title}</h1>
                        <h1>{item.Title}</h1>
                        <h1>{item.Title}</h1>
                        <img src={item.Image} alt='agriculture'/>
                        <h1>{item.Title}</h1>
                        <button className="">Add to cart</button>

                    </div></Link>
                )
            })
        }
    </div>
  )
}

export default Agricultureequip