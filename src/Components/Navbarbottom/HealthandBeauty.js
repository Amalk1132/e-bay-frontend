import React from 'react'
import Images1 from "../Asset/main-health.webp"
import Images2 from "../Asset/health6.webp"
import Images3 from "../Asset/health1.webp"
import Images4 from "../Asset/health5.webp"
import Images5 from "../Asset/health7.webp"
import Images8 from "../Asset/healthpen.webp"
import Images10 from "../Asset/health11.webp"
import { Link } from 'react-router-dom'

const HealthandBeauty = () => {
  return (
    <div>
      <div>
    <div className="elect-head w-full  p-8">
      <img src="" alt="" />
      <h1 className="absolute top-32 p-16 text-3xl">
      
      </h1>
      <span className="absolute top-40 p-16 text-lg">
    
      </span>
    </div>
  <div className="flex w-full">
    <div className="  w-1/5 ">
      <h1 className="ml-8">Shop by Category</h1>
      <ul className="">
       <Link to={"/skincare"}><li className="mt-2 text-black ml-8">Skin Care</li></Link>
       <Link to={"/fragrances"}><li className="mt-2 text-black ml-8">Fragrances</li></Link>
       <Link to={"/makeup"}><li className="mt-2 text-black ml-8">Makeup</li></Link>
       <Link to={"/healthcare"}><li className="mt-2 text-black ml-8">Health Cares</li></Link>
       <Link to={"/haircare"}><li className="mt-2 text-black ml-8">Hair Care & Styling</li></Link> 
       <Link to={"/oralcare"}><li className="mt-2 text-black ml-8">Oral Care</li></Link> 
<br/>

<hr/>
<br/>


      </ul>
      
    </div>
   <div className="w-3/4 ">
   <div className="w-full  ">
      <img src={Images1} alt="" className='w-screen ml-11 h-96 '/>
      <h1 className='absolute top-44 p-16 text-3xl text-pink-300 '>Save big on your<br/> beauty toolkit

</h1>
<h2 className='absolute top-60 p-16 text-xl text-pink-300   '>
Shop beauty, fragrance, and more.</h2>
    </div>
   
    <h1 className="text-shop ">Shop by Category</h1>
    <div className="flex gap-9 ml-9 ">
    <Link to={"/skincare"}><div>
        <img
          src={Images2}
          alt=""
          className=" border hover:border-black   "
        />
        <h4 className=" ml-16 ">Skin Care</h4>
      </div></Link> 
      
      <Link to={"/fragrances"}><div>
        <img
          src={Images3}
          alt=""
          className=" border hover:border-black   "
        />
        <h4  className=" ml-16 ">Fragrances</h4>
      </div></Link> 


      <Link to={"/makeup"}><div>
        <img
          src={Images4}
          alt=""
          className=" border hover:border-black  "
        />
        <h4 className=" ml-16  ">Makeup</h4>
      </div></Link>

      <Link to={"/healthCare"}> <div>
        <img
          src={Images5}
          alt=""
          className=" border hover:border-black   "
        />
        <h4 className='ml-16 ' >Health Care</h4>
      </div></Link> 
     
    </div>
    <br />
    <br />
  
   
    <div className="flex gap-9 ">
     
      <Link to={"/haircare"}><div className="">
        <img
          src={Images8}
          alt=""
          className=" border hover:border-black "
        />
         <h4 className=' ml-16 '>Hair Care & Styling</h4>
      </div></Link>  
      
      <Link to={"/oralcare"}> <div className="">
        <img
          src={Images10}
          alt=""
          className=" border hover:border-black  "
        />
         <h4 className='ml-16  '>Oral Care</h4>
      </div></Link> 
      
     
    </div>
   </div>

  </div>
    <br />
    <hr />
  </div>
    </div>
  )
}

export default HealthandBeauty