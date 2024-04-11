import React from "react";
import "./Homegarden.css";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import Images1 from "../Asset/home-main.webp";
import Images2 from "../Asset/home-sub.webp";
import Images3 from "../Asset/home-1.webp";

import Images6 from "../Asset/home-4.webp";

import Images8 from "../Asset/home-7.webp";
import Images12 from "../Asset/home-11.webp";

import Images15 from "../Asset/home-14.webp";
import Images16 from "../Asset/home-15.webp";
import Images17 from "../Asset/home-16.webp";

import Images19 from "../Asset/home-18.webp";
import Image18 from "../Asset/home-9.webp"
import Images21 from "../Asset/home-20.webp";
import Images22 from "../Asset/home-22.webp"

const Homeandgarden = () => {
  return (
    <div>
      <div className="elect-head w-full  p-8">
        <img src={Images1} alt="" />
        <h1 className="absolute top-32 p-16 text-3xl">Home & Garden</h1>
        <span className="absolute top-40 p-16 text-lg">
          The place to spruce up your space since 1995.
        </span>
      </div>
      <div className="flex w-full">
        <div className="  w-1/5 ">
          <h1 className="ml-8">Shop Home Essentials</h1>
          <ul className="">
           <Link to={'/furniture'}> <li className="mt-2 text-black ml-8">Furniture</li></Link>
            <Link  to={'/light'}><li className="mt-2 text-black ml-8">Lighting </li></Link>
            <Link  to={'/kitchen'}> <li className="mt-2 text-black ml-8">Kitchen, & Bar Supplies</li></Link>
            <Link  to={'/homeappli'}><li className="mt-2 text-black ml-8">Home appliances</li></Link>
           
            <br />

            <hr />
            <br />

            <h1 className="ml-8 text-black">Shop More Categories</h1>
            <ul>
            <Link  to={'/vaccumcleaner'}><li className="ml-8 mt-2 text-black">Vacuum cleaners</li></Link> 
            <Link  to={'/homeimpro'}><li className="ml-8 mt-2 text-black">Home Improvement</li></Link> 
            <Link  to={'/majorappli'}> <li className="ml-8 mt-2 text-black">Major Appliances</li></Link> 
              <Link  to={'/lawnmowers'}><li className="ml-8 mt-2 text-black">Lawn Mowers,Accessories</li></Link>
              <Link  to={'/presurewasher'}><li className="ml-8 mt-2 text-black">Pressure Washers</li></Link>
              <Link  to={'/generator'}> <li className="ml-8 mt-2 text-black"> Generators</li></Link>
              <Link  to={'/window'}> <li className="ml-8 mt-2 text-black"> Window Treatments</li></Link>
            </ul>
          </ul>
        </div>
        <div className="w-3/4">
          <div className="flex ">
            <div className="home-sub ">
              <h1 className="p-4 text-2xl">
                Your home,
                <br /> rediscovered
              </h1>
              <h2 className="ml-3 text-xl ">
                Practical ideas to make your space yours.
              </h2>

              <Link to={"/homediscov"}><button className="absolute bottom-16 border border-black w-32 ml-9 h-9 text-xl hover:bg-black hover:text-white">
                See all
              </button></Link>
              <FaArrowRight className="icon" />
            </div>
            <div className="">
              <img src={Images2} alt="" className="img-home-sub" />
            </div>
          </div>

          <h1 className="text-shop ">Shop Home Essentials</h1>
          <div className="flex gap-9 ml-9 ">

          <Link  to={'/furniture'}> <div>
              <img
                src={Images3}
                alt=""
                className="h-48 w-48 border hover:border-black rounded-2xl"
              />
              <h4 className="  mt-4 text-center">Furniture</h4>
            </div></Link>

          
           
            <Link  to={'/light'}>  <div>
              <img
                src={Images6}
                alt=""
                className="h-48 w-48 border hover:border-black rounded-2xl"
              />
              <h4 className=" mt-4 text-center">Lighting </h4>
            </div></Link>

            <Link  to={'/kitchen'}><div>
              <img
                src={Images8}
                alt=""
                className="h-48 w-48 border hover:border-black rounded-2xl"
              />
              <h4 className=" mt-4 text-center">Kitchen, & Bar Supplies</h4>
            </div></Link>

            
            <Link  to={'/homeappli'}> <div>
              <img
                src={Images12}
                alt=""
                className="h-48 w-48 border hover:border-black rounded-2xl"
              />
              <h4 className=" mt-4 text-center ">Home appliances</h4>
            </div></Link>
            
          </div>


          <br />
          <br />
          <hr />
          <h1 className="text-brand ">Shop More Categories</h1>
          <div className="flex gap-9 ">

          <Link  to={'/vaccumcleaner'}> <div className="">
              <img
                src={Images21}
                alt=""
                className="h-48 w-44 border hover:border-black"
              />
              <h2 className="text-center mt-3">Vacuum cleaners</h2>
            </div></Link>
            
          
            <Link  to={'/homeimpro'}><div className="">
              <img
                src={Images15}
                alt=""
                className="h-48 w-44  border hover:border-black"
              />
               <h2 className="text-center mt-3">Home Improvement</h2>
            </div></Link>

            <Link  to={'/majorappli'}><div className="">
              <img
                src={Images16}
                alt=""
                className="h-48 w-44  border hover:border-black"
              />
               <h2 className="text-center mt-3">Major Appliances</h2>
            </div></Link>
            <Link  to={'/window'}><div className="">
              <img
                src={Image18}
                alt=""
                className="h-48 w-44  border hover:border-black"
              />
               <h2 className="text-center mt-3">Window Treatments</h2>
            </div></Link>
          </div>
          <div className="flex gap-9 mt-8">

          <Link  to={'/generator'}><div className="">
              <img
                src={Images17}
                alt=""
                className="h-48 w-44  border hover:border-black"
              />
               <h2 className="text-center mt-3">Generators</h2>
            </div></Link>

            <Link  to={'/lawnmowers'}><div className="">
              <img
                src={Images19}
                alt=""
                className="h-48 w-44  border hover:border-black"
              />
               <h2 className="text-center mt-3">Lawn Mowers,Accessories</h2>
            </div></Link>
           
           <Link to={"/presurewasher"}> <div className="">
              <img
                src={Images22}
                alt=""
                className="h-48 w-44  border hover:border-black"
              />
               <h2 className="text-center mt-3">Pressure Washers</h2>
            </div></Link>

          </div>
        </div>
      </div>
      <br />
      <hr />
    </div>
  );
};

export default Homeandgarden;
