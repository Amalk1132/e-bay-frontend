import React from 'react'
import { Link } from 'react-router-dom'
import Image1 from "../Asset/01_P_Aeng.jpg"
import "./Body.css"

import Image3 from "../Asset/04_Sneakerseng.jpg"
import Image4 from "../Asset/05_Watcheseng.jpg"
import Image5 from "../Asset/06_Handbagseng.jpg"
import Image6 from "../Asset/toy-1.jpg"
import Image7 from "../Asset/01_Trading Cards.jpg"

const Body = () => {
  return (
    
        <div className=" w-full  mt-6   ">
           <ul className="flex justify-between">
        <Link to="/"><li><h1 className="ml-60">Explore Popular Categories</h1></li></Link>
        <li className=" mr-32"><Link to="">See all </Link></li>
        </ul>
        <div className='flex m-16 gap-3 p-10'>
        <div className='tyre'><img src={Image1} alt='tyre'/><p><h2>part & accessories</h2></p></div>
     
        <Link to="/sneakers" ><div className='sneaker'><img src={Image3} alt='sneaker'/><h2>sneakers</h2></div></Link>
       <Link to="/watches"> <div className='watch'><img src={Image4} alt='tyre'/><h2>watches</h2></div></Link>
        <Link to="/womenbags" ><div className='bag'><img src={Image5} alt='tyre'/><h2>hand bag</h2></div></Link>
        <Link to="/toys"><div className='toys'><img src={Image6} alt='tyre'/><h2> Toys</h2></div></Link>
        <Link to="/tradecard" ><div className='card'><img src={Image7} alt='tyre'/><h2>Trading Cards</h2></div></Link>
        </div>
      </div>
       
        
    
  )}
  

export default Body