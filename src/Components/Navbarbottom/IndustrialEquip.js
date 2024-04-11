import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
import Image1 from "../Asset/indus-main.webp"
import Image2 from "../Asset/indu-submain.webp"
import Image3 from "../Asset/indu-1.webp"
// import Image4 from "../Asset/indu-2.webp"
// import Image5 from "../Asset/indu-3.webp"
import Image6 from "../Asset/indu-4.webp"
import Image7 from "../Asset/indu-5.webp"
// import Image8 from "../Asset/indu-6.webp"
import Image9 from "../Asset/indu-7.webp"
import Image10 from "../Asset/indu-8.webp"
import Image11 from "../Asset/indu-9.webp"
// import Image12 from "../Asset/indu-10.webp"
import { Link } from 'react-router-dom';

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
        <Link to="/labanddenta"><li className="mt-2 text-black ml-8">Healthcare, Lab&Dental</li></Link>
        <Link to="/officeequipment"> <li className="mt-2 text-black ml-8">Office Equipment & <br/>Supplies</li></Link>
        <Link to="/hvac"> <li className="mt-2 text-black ml-8">HVAC & Refrigeration</li></Link>
        <Link to="/agricultureequip"> <li className="mt-2 text-black ml-8">Agriculture & Forestry<br/> Equipment</li></Link>
        <Link to="/printingandgrap"> <li className="mt-2 text-black ml-8">Printing and graphic<br/> equipment</li></Link>
        <Link to="/restaurent"><li className="mt-2 text-black ml-8">Restaurant & Food Service</li></Link>
        


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
     <Link to="/lightequipment"> <button className='absolute bottom-14 ml-28 border border-black p-1 w-32 hover:bg-black hover:text-white  text-start'>Shop Now</button></Link>
      <FaArrowRight className='absolute bottom-16 ml-52 '/>
    </div>
    
    <h1 className="text-shop ">Shop by Category</h1>
    <div className="flex gap-9 ml-9 ">
    <Link to="/labanddenta"><div>
        <img
          src={Image3}
          alt=""
          className="h-48 w-48 border hover:border-black rounded-2xl"
        />
        <h2 className='mt-2'> Lab&Dental</h2>
      </div></Link> 
      
   
      <Link to="/officeequipment"><div>
        <img
          src={Image6}
          alt=""
          className="h-48 w-48 border hover:border-black rounded-2xl"
        />
        <h4 className="  mt-2">Office Equipment &Supplies</h4>
      </div></Link> 


      <Link to="/hvac"><div>
        <img
          src={Image7}
          alt=""
          className="h-48 w-48 border hover:border-black rounded-2xl"
        />
        <h4 className=" mt-2 ">HVAC & Refrigeration</h4>
      </div></Link> 

     <Link to="/agricultureequip"> <div className="">
        <img
          src={Image11 }
          alt=""
          className="h-48 w-48 border hover:border-black rounded-2xl"
        />
        <h2 className='mt-2'>Agriculture & Forestry Equipment</h2>
        
      </div></Link> 
      
    </div>
    <br />
    <br />
 
 
    <div className="flex gap-9 ml-9">
     
    <Link to="/printingandgrap"><div className="">
        <img
          src={Image9}
          alt=""
          className="h-48 w-48 border hover:border-black rounded-2xl"
        />
        <h2 className='mt-2'>Printing and graphic equipment</h2>
      </div></Link> 

     <Link to="/restaurent"><div className="">
        <img
          src={Image10}
          alt=""
          className="h-48 w-48 border hover:border-black rounded-2xl"
        />
        <h2 className='mt-2'>Restaurant & Food Service</h2>
      </div></Link> 
     
     
    </div>
   </div>

  </div>
    <br />
    <hr />
  </div>
  )
}

export default IndustrialEquip