import React from 'react'
import "./Hp.css"
import { useContext } from 'react'
import { myContext } from '../../App'
import { Link } from 'react-router-dom'
const Hp = () => {
  const {data}=useContext(myContext)
  return (
    <div className="main-hp">
    {data.filter((item)=>item.Brand==="hp").map((item,index)=>{
        return (
          <Link to={`/displayprod/${item._id}`}><div key={index} className='hp-block'>
                <img src={item.Image} alt='electronics'/>
                <h1>{item.Title}</h1>              
                <h1>{item.Price}</h1>
             
                

            </div></Link>
        ) 
    })}
</div>
  )
}

export default Hp