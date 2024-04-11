import React from 'react'
import { useContext } from 'react'
import { myContext } from '../../App'
import "./Womencloth.css"
import { Link } from 'react-router-dom'
const Womencloth = () => {
  const {data}=useContext(myContext)
  return (
    <div className='main-wocl'>
      {
        data.filter((item)=>item.Subcategory==="Womencloth")
        .map((item,index)=>{
          return (
           <Link  to={`/displayprod/${item._id}`}><div key={index} className='sub-wocl'>
              
              <img src={item.Image} alt="womencloth"/>
              <h1>{item.Title}</h1>
              <h1>{item.Price}</h1>
              
            </div></Link> 
          )
        })
      }
    </div>
  )
}

export default Womencloth