import "./Electromics .css";
import React from "react";
import Images1 from "../Asset/ele-main.webp";
import Images2 from "../Asset/s-l1200.webp";
import Images3 from "../Asset/smartph.webp";
import Images4 from "../Asset/computer.webp";

import Images6 from "../Asset/s-l225 (8).webp";
import Images7 from "../Asset/s-l225 (14).webp";

import { Link } from "react-router-dom";
import Images10 from "../Asset/s-l225 (6).webp";
import Images11 from "../Asset/s-l225 (7).webp";
import Images12 from "../Asset/s-l225 (11).webp";
import Images13 from "../Asset/hp-img.webp";
import Images14 from "../Asset/lenovo.webp";
import Images15 from "../Asset/s-l225 (3).webp";

const Electronics = () => {
  return (
    <div>
      <div className="elect-head w-full  p-8">
        <img src={Images1} alt="" />
        <h1 className="absolute top-32 p-16 text-3xl">
          Welcome to the world of tech
        </h1>
        <span className="absolute top-40 p-16 text-lg">
          Browse all the devices you need, from
          <br />
          smartphones to PCs.
        </span>
      </div>
    <div className="flex w-full">
      <div className="  w-1/5 ">
        <h1 className="ml-8">Shop by Category</h1>
        <ul className="">
          <Link to="/camera"><li className="mt-2 text-black ml-8">Camera</li></Link>
          <Link to="/smartphandwatch"><li className="mt-2 text-black ml-8">smartphones & smartWatches</li></Link>
         <Link to="/computersandacc"><li className="mt-2 text-black ml-8">Computers & accessories</li></Link> 
          
         <Link to="/tvandacc"><li className="mt-2 text-black ml-8">TV, Video & Home Audio<br/> Electronics</li></Link>
      
         <Link to="/audioheadphone"><li className="mt-2 text-black ml-8">Portable Adio &<br/> Headphone</li></Link> 
         </ul>
<br/>

<hr/>
<br/>

  <h1  className="ml-8 text-black">Your favorite brands</h1>
  <ul>
   <Link to="/apple" ><li className="ml-8 mt-2 text-black">Apple</li></Link>
   <Link to="/dell" ><li className="ml-8 mt-2 text-black">Dell</li></Link>
     <Link to="/hp" ><li className="ml-8 mt-2 text-black">hp</li></Link>
     <Link to="/lenovo" >  <li className="ml-8 mt-2 text-black">Lenovo</li></Link>
     <Link to="/samsung" > <li className="ml-8 mt-2 text-black">Samsung</li></Link>
</ul>
        
        
      </div>
     <div className="w-3/4">
     <div className=" ">
        <img src={Images2} alt="" />
      </div>
      <div className="flex gap-5   mt-8">
        <div >
         <Link to="/smartphandwatch"><img src={Images3} alt="" className="h-64 w-96" /></Link> 
        </div>
        <div>
         <Link to="/computersandacc"><img src={Images4} alt="" className="h-64 w-96" /></Link> 
        </div>
        
      </div>
      <h1 className="text-shop ">Shop by Category</h1>
      <div className="flex gap-9 ml-9 ">
        <div>
          <Link to="/tvandacc"><img
            src={Images6}
            alt=""
            className="h-48 w-48 border hover:border-black rounded-2xl"
          /></Link>
          <h4 className="  mt-4 ml-9">TV, Video & Home<br/> Audio Electronics</h4>
        </div>
        
        <div>
          <Link to="/camera"><img
            src={Images7}
            alt=""
            className="h-48 w-52 border hover:border-black rounded-2xl"
          /></Link>
          <h4  className=" mt-4 ml-20">Camera</h4>
        </div>
       
       
        <div>
          <Link to="/audioheadphone"><img
            src={Images10}
            alt=""
            className="h-48 w-48 border hover:border-black rounded-2xl"
          /></Link>
          <h4 className=" mt-4 ml-9">Portable Adio <br/>& Headphones</h4>
        </div>
      </div>
      <br />
      <br />
      <hr />
      <h1 className="text-brand">Shop by Brand</h1>
      <div className="flex gap-9 ">
       <Link to="/apple"><div className="box-1">
          <img
            src={Images11}
            alt=""
            className="h-48 w-44 border hover:border-black"
          />
        </div></Link> 

        <Link to="/dell"> <div className="box-2">
          <img
            src={Images12}
            alt=""
            className="h-48 w-44 border hover:border-black"
          />
        </div></Link>

         <Link to="/hp"><div className="box-3">
          <img
            src={Images13}
            alt=""
            className="h-48 w-44  border hover:border-black"
          />
        </div></Link>

        <Link to="/lenovo"> <div className="box-4">
          <img
            src={Images14}
            alt=""
            className="h-48 w-44  border hover:border-black"
          />
        </div></Link>

        <Link to="/samsung"> <div className="box-5">
          <img
            src={Images15}
            alt=""
            className="h-48 w-44  border hover:border-black"
          />
        </div>
        </Link>
      </div>
     </div>

    </div>
      <br />
      <hr />
    </div>
  );
};

export default Electronics;
