import React from 'react'
import Images1 from "../Asset/main-health.webp"
import Images2 from "../Asset/health6.webp"
import Images3 from "../Asset/health1.webp"
import Images4 from "../Asset/health5.webp"
import Images5 from "../Asset/health7.webp"
import Images6 from "../Asset/health8.webp"
import Images7 from "../Asset/health9.webp"
import Images8 from "../Asset/healthpen.webp"
import Images9 from "../Asset/health10.webp"
import Images10 from "../Asset/health11.webp"

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
        <li className="mt-2 text-black ml-8">Skin Care</li>
        <li className="mt-2 text-black ml-8">Fragrances</li>
        <li className="mt-2 text-black ml-8">Makeup</li>
        <li className="mt-2 text-black ml-8">Vitamins & Lifestyle Supplements</li>
        <li className="mt-2 text-black ml-8">Natural & Alternative Remedies</li>
        <li className="mt-2 text-black ml-8">Health Care</li>
        <li className="mt-2 text-black ml-8">Hair Care & Styling</li>
        <li className="mt-2 text-black ml-8">Bath & Body</li>
        <li className="mt-2 text-black ml-8">Oral Care</li>
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
      <div>
        <img
          src={Images2}
          alt=""
          className=" border hover:border-black   "
        />
        <h4 className=" ">Skin Care</h4>
      </div>
      
      <div>
        <img
          src={Images3}
          alt=""
          className=" border hover:border-black   "
        />
        <h4  className=" ">Fragrances</h4>
      </div>
      <div>
        <img
          src={Images4}
          alt=""
          className=" border hover:border-black  "
        />
        <h4 className="  ">Makeup</h4>
      </div>
      <div>
        <img
          src={Images5}
          alt=""
          className=" border hover:border-black   "
        />
        <h4 className=' ' >Vitamins &  Supplements</h4>
      </div>
      <div>
        <img
          src={Images6}
          alt=""
          className=" border hover:border-black "
        />
        <h4 className=' '>Natural  Remedies</h4>
      </div>
    </div>
    <br />
    <br />
  
   
    <div className="flex gap-9 ">
      <div className="">
        <img
          src={Images7}
          alt=""
          className=" border hover:border-black  "
        />
         <h4 className=' '>Health Care</h4>
      </div>
      <div className="">
        <img
          src={Images8}
          alt=""
          className=" border hover:border-black "
        />
         <h4 className=' '>Hair Care & Styling</h4>
      </div>
      <div className="">
        <img
          src={Images9}
          alt=""
          className=" border hover:border-black  "
        />
         <h4 className=' '>Bath & Body</h4>
      </div>
      <div className="">
        <img
          src={Images10}
          alt=""
          className=" border hover:border-black  "
        />
         <h4 className=' '>Oral Care</h4>
      </div>
      
     
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