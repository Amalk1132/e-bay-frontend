import React from 'react'
import "./TvandAcc.css"
import { useContext } from 'react'
import { myContext } from '../App'
import { Link } from 'react-router-dom'
const TvandAcc=()=>{
    const {data}=useContext(myContext)
    return (
        <div className="main-tv-appli">
            {
                data.filter((item)=>item.Category==="home-electronics")
                .map((item,index)=>{
                    return (
                        <Link to={`/displayprod/${item._id}`}>  <div key={index} className='sub-tv-appli'>
                            <h1>{item.Title}</h1>
                            <h1>{item.Description}</h1>
                            <h1>{item.Category}</h1>
                            <h1>{item.Price}</h1>
                            <img src={item.Image} alt="electronics"/>
                        

                        </div></Link>
                    )
                })
            }

            </div>
    )
}

export default TvandAcc