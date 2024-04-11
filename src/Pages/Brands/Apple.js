
import data from '../../Components/Data/Products'
import "./Apple.css"
import { useContext } from 'react'
import { myContext } from '../../App'
import { Link } from 'react-router-dom'



const Apple = () => {
    const {data}=useContext(myContext)
   
  return (
    <div className="main-apple">
        {data.filter((item)=>item.Brand==="apple").map((item,index)=>{
            return (
               <Link to={`/displayprod/${item._id}`}><div key={index} className='apple-block'>
                    <img src={item.Image} alt='electronics'/>
                    <h1>{item.Title}</h1>                              
                    <h1>{item.Price}</h1>                                                  
                </div>
                </Link> 
            ) 
        })}
    </div>
  )
}

export default Apple