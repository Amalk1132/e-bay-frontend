import "./Electromics .css";
import React from "react";
import Images1 from "../Asset/ele-main.webp";
import Images2 from "../Asset/s-l1200.webp";
import Images3 from "../Asset/smartph.webp";
import Images4 from "../Asset/computer.webp";
import Images5 from "../Asset/tablet.webp";
import Images6 from "../Asset/s-l225 (8).webp";
import Images7 from "../Asset/s-l225 (14).webp";
import Images8 from "../Asset/s-l225 (13).webp";
import Images9 from "../Asset/s-l225 (4).webp";
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
          <li className="mt-2 text-black ml-8">Camera</li>
          <li className="mt-2 text-black ml-8">smartphones & smartWatches</li>
          <li className="mt-2 text-black ml-8">Computers & accessories</li>
          <li className="mt-2 text-black ml-8">Tablet & eReders</li>
          <li className="mt-2 text-black ml-8">TV, Video & Home Audio<br/> Electronics</li>
          <li className="mt-2 text-black ml-8">Video Games</li>
          <li className="mt-2 text-black ml-8">Surveillance & Smart<br/> Home Electronics</li>
          <li className="mt-2 text-black ml-8">Portable Adio &<br/> Headphones
</li>
<br/>

<hr/>
<br/>

  <h1  className="ml-8 text-black">Your favorite brands</h1>
  <ul>
    <li className="ml-8 mt-2 text-black">Apple</li>
    <li className="ml-8 mt-2 text-black">Dell</li>
    <li className="ml-8 mt-2 text-black">hp</li>
    <li className="ml-8 mt-2 text-black">Lenovo</li>
    <li className="ml-8 mt-2 text-black">Samsung</li>
</ul>
        </ul>
        
      </div>
     <div className="w-3/4">
     <div className=" ">
        <img src={Images2} alt="" />
      </div>
      <div className="flex gap-5   mt-8">
        <div >
          <img src={Images3} alt="" className="h-64 w-96" />
        </div>
        <div>
          <img src={Images4} alt="" className="h-64 w-96" />
        </div>
        
      </div>
      <h1 className="text-shop ">Shop by Category</h1>
      <div className="flex gap-9 ml-9 ">
        <div>
          <img
            src={Images6}
            alt=""
            className="h-48 w-48 border hover:border-black rounded-2xl"
          />
          <h4 className="  mt-4 ">TV, Video & Home Audio Electronics</h4>
        </div>
        
        <div>
          <img
            src={Images7}
            alt=""
            className="h-48 w-52 border hover:border-black rounded-2xl"
          />
          <h4  className=" mt-4 ml-9">Cameras</h4>
        </div>
        <div>
          <img
            src={Images8}
            alt=""
            className="h-48 w-52 border hover:border-black rounded-2xl"
          />
          <h4 className=" mt-4 ml-9">Video Games</h4>
        </div>
        <div>
          <img
            src={Images9}
            alt=""
            className="h-48 w-48 border hover:border-black rounded-2xl"
          />
          <h4 className=" mt-4 ">Surveillance & Smart Home Electronics</h4>
        </div>
        <div>
          <img
            src={Images10}
            alt=""
            className="h-48 w-48 border hover:border-black rounded-2xl"
          />
          <h4 className=" mt-4 ml-9">Portable Adio & Headphones</h4>
        </div>
      </div>
      <br />
      <br />
      <hr />
      <h1 className="text-brand">Shop by Brand</h1>
      <div className="flex gap-9 ">
        <div className="box-1">
          <img
            src={Images11}
            alt=""
            className="h-48 w-44 border hover:border-black"
          />
        </div>
        <div className="box-2">
          <img
            src={Images12}
            alt=""
            className="h-48 w-44 border hover:border-black"
          />
        </div>
        <div className="box-3">
          <img
            src={Images13}
            alt=""
            className="h-48 w-44  border hover:border-black"
          />
        </div>
        <div className="box-4">
          <img
            src={Images14}
            alt=""
            className="h-48 w-44  border hover:border-black"
          />
        </div>
        <div className="box-5">
          <img
            src={Images15}
            alt=""
            className="h-48 w-44  border hover:border-black"
          />
        </div>
      </div>
     </div>

    </div>
      <br />
      <hr />
    </div>
  );
};

export default Electronics;
