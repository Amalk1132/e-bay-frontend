import React from 'react'
import Images1 from "../Asset/sports-main.webp"
import Images2 from "../Asset/sub-main.webp"
import Images3 from "../Asset/skateboard.webp"
import Images4 from "../Asset/gym.webp"
import Images6 from "../Asset/fising.webp"
import Images7 from '../Asset/cycle.webp'
import Images8 from "../Asset/tenis.webp"
import Images9 from "../Asset/boxing.webp"
import Images10 from "../Asset/golf.webp"
import { Link } from 'react-router-dom'
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
       <Link to={"/outdoorspo"}><li className="mt-2 text-black ml-8">outdoor sports</li></Link> 
       <Link to={"/fitnessandyoga"}><li className="mt-2 text-black ml-8">Fitness & yoga</li></Link>
       <Link to={"/fishing"}><li className="mt-2 text-black ml-8">Fishing</li></Link>
       <Link to={"/cycle"}><li className="mt-2 text-black ml-8">Cycle</li></Link>
       <Link to={"/tennis"}><li className="mt-2 text-black ml-8">Tennis </li></Link> 
       <Link to={"/boxingandmartialarts"}> <li className="mt-2 text-black ml-8">Boxing, Martial Arts</li></Link>
       <Link to={"/golf"}><li className="mt-2 text-black ml-8">Golf</li></Link> 

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

     <Link to="/outdoorspo"><div>
        <img
          src={Images3}
          alt=""
          className=" border hover:border-black  h-50 w-56 "
        />
        <h4 className=" ml-10 mt-4">outdoor sports</h4>
      </div>
      </Link> 

     <Link to={"/fitnessandyoga"}> <div>
        <img
          src={Images4}
          alt=""
          className=" border hover:border-black h-50 w-56  "
        />
        <h4  className=" ml-10 mt-4 ">Fitness & yoga</h4>
      </div></Link>
      
     <Link to={"/fishing"} ><div>
        <img
          src={Images6}
          alt=""
          className=" border hover:border-black h-50 w-56  "
        />
        <h4 className=' ml-10 mt-4' >Fishing</h4>
      </div></Link>

      <Link to={"/cycle"}><div>
        <img
          src={Images7}
          alt=""
          className=" border hover:border-black "
        />
        <h4 className=' ml-10 mt-4'>Cycle</h4>
      </div></Link>

    </div>
    <br />
    <br />
  
   
    <div className="flex gap-9 ">
    <Link to={"/tennis"}> <div className="">
        <img
          src={Images8}
          alt=""
          className=" border hover:border-black  h-50 w-56"
        />
         <h4 className=' ml-10 mt-4'>Tennis  </h4>
      </div></Link>

    <Link to={"/boxingandmartialarts"}> <div className="">
        <img
          src={Images9}
          alt=""
          className=" border hover:border-black  h-50 w-56"
        />
         <h4 className=' ml-10 mt-4'>Boxing, Martial Arts</h4>
      </div></Link> 

     <Link to={"/golf"}> <div className="">
        <img
          src={Images10}
          alt=""
          className=" border hover:border-black  h-50 w-56"
        />
         <h4 className=' ml-20 mt-4'>Golf</h4>
      </div></Link>
     
    </div>
   </div>

  </div>
    <br />
    <hr />
  </div>
  )
}

export default Sports