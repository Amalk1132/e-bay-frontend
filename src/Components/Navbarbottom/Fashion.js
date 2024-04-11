import React from 'react'
import Image1 from "../Asset/mainpage.webp"
import Image2 from "../Asset/women-cloth.webp"
import Image3 from "../Asset/bags.webp"
import Image4 from "../Asset/women-sho.webp"
import Image5 from "../Asset/mens-cloth.webp"
import Image6 from "../Asset/belt.webp"
import Image7 from "../Asset/men'shoe.webp"
import Image8 from "../Asset/watch.webp"
import Image9 from "../Asset/jwelery.webp"
import Image10 from "../Asset/beauty.webp"
import Image11 from "../Asset/men'glass.webp"
import Image12 from "../Asset/womens'glass.webp"
import { Link } from 'react-router-dom'


const Fashion = () => {
  return (
    <div>
      <div className="w-full  p-8">
        <img src={Image1} alt="" />
        <h1 className="absolute top-32 p-16 text-3xl">
        Dress to impress

        </h1>
        
       
        <span className="absolute top-40 p-16 text-lg mt-4">
        Dress to impress and make the best of every day.
       
   </span>

      </div>
    <div className="flex w-full">
      <div className="  w-1/5 ">
        <h1 className="ml-8"> Category</h1>
        <ul className="">
          <Link to="/womencloth"><li className="mt-2 text-black ml-8">Women's clothing</li></Link>
          <Link to="/womenbags"><li className="mt-2 text-black ml-8">Women's bags & handbags</li></Link>
          <Link to="/womenshoe"> <li className="mt-2 text-black ml-8">Women's shoe</li></Link>
          <Link to="/mencloth"><li className="mt-2 text-black ml-8">Men's clothing</li></Link>
          <Link to="/menaccessories"> <li className="mt-2 text-black ml-8">Men's Accessories</li></Link>
          <Link to="/menshoe"><li className="mt-2 text-black ml-8">Men's shoes</li></Link>
          <Link to="/watches"><li className="mt-2 text-black ml-8">Watches</li></Link>
          <Link to="/jwellry"> <li className="mt-2 text-black ml-8">Jwelry</li></Link>
          <Link to="/beauty"> <li className="mt-2 text-black ml-8">Beauty</li></Link>
          <Link to="/mensunglass"> <li className="mt-2 text-black ml-8">Men's sunglass</li></Link>
          <Link to="/womensunglass"> <li className="mt-2 text-black ml-8">Women's sunglass</li></Link>
<br/>

<hr/>
<br/>
        </ul>
        
      </div>
     <div className="w-3/4">
     
      <div className="flex gap-5  mt-8">

       <Link to="/womencloth"><div >
          <img src={Image2} alt="" className="h-64 w-96 border hover:border-black" />
        </div></Link> 


        <Link to="/womenbags"><div>
          <img src={Image3} alt="" className="h-64 w-96 border hover:border-black" />
        </div></Link> 


        <Link to="/womenshoe"><div>
          <img src={Image4} alt="" className="h-64 w-96 border hover:border-black" />
        </div></Link>
      </div>
      
      <div className="flex gap-5  mt-8 ">
      <Link to="/mencloth"> <div> 
          <img
            src={Image5}
            alt=""
            className="h-64 w-96 border hover:border-black"
          />
     
        </div></Link>
        
       <Link to="/menaccessories"><div>
          <img
            src={Image6}
            alt=""
            className="h-64 w-96 border hover:border-black"
          />
          
        </div></Link> 

       <Link to="/menshoe"><div>
          <img
            src={Image7}
            alt=""
            className="h-64 w-96 border hover:border-black"
          />
          
        </div></Link> 

       
       </div>
      
    
      <div className="flex gap-5  mt-8">
        
      <Link to="/watches"> <div className="">
          <img
            src={Image8}
            alt=""
            className='border hover:border-black'
            
          />
        </div></Link> 

         <Link to="/jwellry"> <div className="">
          <img
            src={Image9}
            alt=""
            className='border hover:border-black'
           
          />
        </div></Link> 
       
       
       
      </div>
      <div className="flex gap-5  mt-8">
       <Link to="/beauty"> <div className="">
          <img
            src={Image10}
            alt=""
            className='ml-64 border hover:border-black'
            
          />
        </div></Link>
        
       
       
       
      </div>
      <div className="flex gap-5  mt-8">
       <Link to="/mensunglass"> <div className="">
          <img
            src={Image11}
            alt=""
            className='border hover:border-black'
            
          />
        </div></Link>

       <Link to="/womensunglass"> <div className="">
          <img
            src={Image12}
            alt=""
            className='border hover:border-black'
           
          />
        </div></Link>
       
       
       
      </div>
     </div>

    </div>
      <br />
      <hr />
    </div>
  )
}

export default Fashion