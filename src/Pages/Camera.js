
import React from "react"
import "./Camera.css"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { myContext } from "../App"

const Camera=()=>{
    const {data}=useContext(myContext)



    return (
        <div className="main-cam">
            {
                data.filter((item)=>item.Category==="camera")
                .map((item,index)=>{
                    return (
                        <Link to={`/displayprod/${item._id}`}> <div key={index} className="sub-cam">
                           <h1> {item.Title}</h1>
                           <h1> {item.Description}</h1>
                           <h1> {item.Category}</h1>
                           <img src={item.Image}alt="electronics"/>
                           <h1> {item.Price}</h1>                                                                  
                        </div></Link>
                    )
                })
            }
        </div>
    )
}

export default Camera