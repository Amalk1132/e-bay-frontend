import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
import Image1 from "../Asset/indus-main.webp"
import Image2 from "../Asset/indu-submain.webp"
import Image3 from "../Asset/indu-1.webp"
import Image4 from "../Asset/indu-2.webp"
import Image5 from "../Asset/indu-3.webp"
import Image6 from "../Asset/indu-4.webp"
import Image7 from "../Asset/indu-5.webp"
import Image8 from "../Asset/indu-6.webp"
import Image9 from "../Asset/indu-7.webp"
import Image10 from "../Asset/indu-8.webp"
import Image11 from "../Asset/indu-9.webp"
import Image12 from "../Asset/indu-10.webp"

const IndustrialEquip = () => {
  return (
    <div>
    <div className="elect-head w-full  p-8">

      <img src={Image1} alt="" />
      <h1 className="absolute top-32 p-12 text-3xl text-white">
       Professional tools
      </h1>
      <span className="absolute top-40 p-14 text-lg text-white ">
 The tools and equipment you need to<br/> complete the job

      </span>
    </div>
  <div className="flex w-full">
    <div className="  w-1/5 ">
      <h1 className="ml-8">Shop by Category</h1>
      <ul className="">
        <li className="mt-2 text-black ml-8">Healthcare, Lab&Dental</li>
        <li className="mt-2 text-black ml-8">Metalworking&Manufacturing<br/>
CNG</li>
        <li className="mt-2 text-black ml-8">Heavy Equipment parts</li>
        <li className="mt-2 text-black ml-8">Office Equipment & <br/>Supplies</li>
        <li className="mt-2 text-black ml-8">HVAC & Refrigeration</li>
        <li className="mt-2 text-black ml-8">Building materials &<br/> supplies</li>
        <li className="mt-2 text-black ml-8">Printing and graphic<br/> equipment</li>
        <li className="mt-2 text-black ml-8">Restaurant & Food Service
</li>
<li className="mt-2 text-black ml-8">Agriculture Equipment</li>
<li className="mt-2 text-black ml-8">Restaurants</li>
<br/>

<hr/>
<br/>


      </ul>
      
    </div>
   <div className="w-3/4">
   <div className=" ">
      <img src={Image2} alt="" className='ml-11' />
      <h1 className='absolute top-96 p-12 ml-5 text-3xl '>Light industrial equipment</h1>
      <h4 className='absolute bottom-48 p-12 ml-5 text-lg'>Find the tools you need to get the job done.</h4>
      <button className='absolute bottom-14 ml-28 border border-black p-1 w-32 hover:bg-black hover:text-white  text-start'>Shop Now</button>
      <FaArrowRight className='absolute bottom-16 ml-52 '/>
    </div>
    
    <h1 className="text-shop ">Shop by Category</h1>
    <div className="flex gap-9 ml-9 ">
      <div>
        <img
          src={Image3}
          alt=""
          className="h-48 w-48 border hover:border-black rounded-2xl"
        />
        <h2 className='mt-2'>Healthcare, Lab&Dental</h2>
      </div>
      
      <div>
        <img
          src={Image4}
          alt=""
          className="h-48 w-52 border hover:border-black rounded-2xl"
        />
        <h4  className="mt-2 "> Metalworking&Manufacturing
        <br/>CNG</h4>
      </div>
      <div>
        <img
          src={Image5}
          alt=""
          className="h-48 w-52 border hover:border-black rounded-2xl"
        />
        <h4 className=" mt-2">Heavy Equipment parts</h4>
      </div>
      <div>
        <img
          src={Image6}
          alt=""
          className="h-48 w-48 border hover:border-black rounded-2xl"
        />
        <h4 className="  mt-2">Office Equipment &Supplies</h4>
      </div>
      <div>
        <img
          src={Image7}
          alt=""
          className="h-48 w-48 border hover:border-black rounded-2xl"
        />
        <h4 className=" mt-2 ">HVAC & Refrigeration</h4>
      </div>
      
    </div>
    <br />
    <br />
 
 
    <div className="flex gap-9 ml-9">
      <div className="">
        <img
          src={Image8}
          alt=""
          className="h-48 w-48 border hover:border-black rounded-2xl"
        />
        <h2 className='mt-2'>Building materials & supplies</h2>
        
      </div>
      <div className="">
        <img
          src={Image9}
          alt=""
          className="h-48 w-48 border hover:border-black rounded-2xl"
        />
        <h2 className='mt-2'>Printing and graphic equipment</h2>
      </div>
      <div className="">
        <img
          src={Image10}
          alt=""
          className="h-48 w-48 border hover:border-black rounded-2xl"
        />
        <h2 className='mt-2'>Restaurant & Food Service</h2>
      </div>
      <div className="">
        <img
          src={Image11}
          alt=""
          className="h-48 w-48 border hover:border-black rounded-2xl"
        />
        <h2 className='mt-2'>Agriculture Equipment</h2>
      </div>
      <div className="">
        <img
          src={Image12}
          alt=""
          className="h-48 w-48 border hover:border-black rounded-2xl"
        />
        <h2 className='mt-2 '>Restaurants </h2>
      </div>
    </div>
   </div>

  </div>
    <br />
    <hr />
  </div>
  )
}

export default IndustrialEquip