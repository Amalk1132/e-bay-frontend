import React from 'react'
import Images1 from "../Asset/sports-main.webp"
import Images2 from "../Asset/sub-main.webp"
import Images3 from "../Asset/skateboard.webp"
import Images4 from "../Asset/gym.webp"
import Images5 from "../Asset/board.webp"
import Images6 from "../Asset/fising.webp"
import Images7 from '../Asset/cycle.webp'
import Images8 from "../Asset/tenis.webp"
import Images9 from "../Asset/boxing.webp"
import Images10 from "../Asset/golf.webp"
const Sports = () => {
  return (
    
    <div>
    <div className="elect-head w-full  p-8">
      <img src={Images1} alt="" />
      <h1 className="absolute top-32 p-16 text-3xl">
      Sporting Goods & Equipment
      </h1>
      <span className="absolute top-40 p-16 text-lg">
      Shop the gear you need for your outdoor<br/>activities, team sports, and workout routines.
      </span>
    </div>
  <div className="flex w-full">
    <div className="  w-1/5 ">
      <h1 className="ml-8">Shop by Category</h1>
      <ul className="">
        <li className="mt-2 text-black ml-8">outdoor sports</li>
        <li className="mt-2 text-black ml-8">Fitness & yoga</li>
        <li className="mt-2 text-black ml-8">Indoor games</li>
        <li className="mt-2 text-black ml-8">Fishing</li>
        <li className="mt-2 text-black ml-8">Cycle</li>
        <li className="mt-2 text-black ml-8">Tennis & Racquet Sports</li>
        <li className="mt-2 text-black ml-8">Boxing, Martial Arts</li>
        <li className="mt-2 text-black ml-8">Golf
</li>
<br/>

<hr/>
<br/>


      </ul>
      
    </div>
   <div className="w-3/4">
   <div className="w-full ">
      <img src={Images2} alt="" className='w-screen ml-11'/>
      <h1 className='absolute top-80 p-16 text-3xl '>Your Gym, Right at Home
</h1>
<h2 className='absolute bottom-56 p-16 text-xl  '>
Hit your fitness goals from the comfort of your home</h2>
    </div>
   
    <h1 className="text-shop ">Shop by Category</h1>
    <div className="flex gap-9 ml-9 ">
      <div>
        <img
          src={Images3}
          alt=""
          className=" border hover:border-black  h-50 w-56 "
        />
        <h4 className=" ml-10 mt-4">outdoor sports</h4>
      </div>
      
      <div>
        <img
          src={Images4}
          alt=""
          className=" border hover:border-black h-50 w-56  "
        />
        <h4  className=" ml-10 mt-4 ">Fitness & yoga</h4>
      </div>
      <div>
        <img
          src={Images5}
          alt=""
          className=" border hover:border-black h-50 w-56  "
        />
        <h4 className=" ml-10 mt-4 ">Indoor games</h4>
      </div>
      <div>
        <img
          src={Images6}
          alt=""
          className=" border hover:border-black h-50 w-56  "
        />
        <h4 className=' ml-10 mt-4' >Fishing</h4>
      </div>
      <div>
        <img
          src={Images7}
          alt=""
          className=" border hover:border-black "
        />
        <h4 className=' ml-10 mt-4'>Cycle</h4>
      </div>
    </div>
    <br />
    <br />
  
   
    <div className="flex gap-9 ">
      <div className="">
        <img
          src={Images8}
          alt=""
          className=" border hover:border-black  h-50 w-56"
        />
         <h4 className=' ml-10 mt-4'>Tennis & Racquet Sports  </h4>
      </div>
      <div className="">
        <img
          src={Images9}
          alt=""
          className=" border hover:border-black  h-50 w-56"
        />
         <h4 className=' ml-10 mt-4'>Boxing, Martial Arts</h4>
      </div>
      <div className="">
        <img
          src={Images10}
          alt=""
          className=" border hover:border-black  h-50 w-56"
        />
         <h4 className=' ml-20 mt-4'>Golf</h4>
      </div>
     
    </div>
   </div>

  </div>
    <br />
    <hr />
  </div>
  )
}

export default Sports