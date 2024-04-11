import "./Audio.css"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { myContext } from "../App"

const AudioHeadphone=()=>{
    const {data}=useContext(myContext)
    return (
        <div className="main-aud">
            {
                data.filter((item)=>item.Category==="headphones")
                .map((item,index)=>{
                    return (
                        <Link to={`/displayprod/${item._id}`}> <div className="sub-aud" key={index}>
                            <h1>{item.Title}</h1>
                            <h1>{item.Description}</h1>
                            <h1>{item.Category}</h1>
                            <img src={item.Image} alt="electronics"/>
                            <h1>{item.Price}</h1>
                            <button className="">Add to cart</button>
                        </div></Link> 
                    )
                })
            }
        </div>
    )
}

export default AudioHeadphone