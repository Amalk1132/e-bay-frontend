import React from 'react'
import { Link } from 'react-router-dom'
import Image1 from "../Asset/01_P_Aeng.jpg"

import Image3 from "../Asset/04_Sneakerseng.jpg"
import Image4 from "../Asset/05_Watcheseng.jpg"
import Image5 from "../Asset/06_Handbagseng.jpg"
import Image6 from "../Asset/07_Start Sellingeng.jpg"
import Image7 from "../Asset/01_Trading Cards.jpg"

const Body = () => {
  return (
    
        <div className=" w-full  mt-6   ">
           <ul className="flex justify-between">
        <Link to="/"><li><h1 className="ml-60">Explore Popular Categories</h1></li></Link>
        <li className=" mr-32"><Link to="">See all </Link></li>
        </ul>
        <div className='flex m-16 gap-3 p-10'>
        <div className=''><img src={Image1} alt='tyre'/><p>part & accessories</p></div>
        {/* <div className=''><img src={Image2} alt='tyre'/> pre-love luxury</div> */}
        <div className=''><img src={Image3} alt='tyre'/>sneakers</div>
       <Link to="/watches"> <div className=''><img src={Image4} alt='tyre'/>watches</div></Link>
        <Link to="/womenbags" ><div className=''><img src={Image5} alt='tyre'/>hand bag</div></Link>
        <div className=''><img src={Image6} alt='tyre'/> start selling</div>
        <div className=''><img src={Image7} alt='tyre'/>Trading Cards</div>
        </div>
      </div>
       
        
    
  )}
  

export default Body