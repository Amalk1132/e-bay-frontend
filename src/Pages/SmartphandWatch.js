import React from "react";
import data from "../Components/Data/Products";
import "./Smartph.css"
import { useContext } from "react";
import { myContext } from "../App";
import { Link } from "react-router-dom";

const SmartphandWatches=()=>{
  const {data}=useContext(myContext)
  return (
    <div className="main-ph">
      {
        data.filter((item)=>item.Category==="Mobiles" )
        .map((item,index)=>{

          return (

            <Link to={`/displayprod/${item._id}`}> <div className="sub-ph" key={index}>            
              <h1>{item.Title}</h1>
              <h1>{item.Description.RAM}</h1>
              <h1>{item.Description.Color}</h1>
              <h1>{item.Description.ROM}</h1>
              <h1>{item.Description.Display}</h1>
              <h1>{item.Description.Processor}</h1>
              <h1>{item.Price}</h1>
             <img src={item.Image} alt="electronics"/>
          
            </div>   </Link>
            
          )
        })
      }
    </div>
  )
}
export default SmartphandWatches;
