import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Display.css";
import { CiHeart } from "react-icons/ci";
import { myContext } from "../App";
import toast from "react-hot-toast"





const Displyprod = () => {
  const [data, setData] = useState({});
  const { id } = useParams();
  const {user}=useContext(myContext)
  console.log(id);

  

  useEffect(() => {
    axios
      .get(`http://localhost:8090/user/product/${id}`)
      .then((res) => setData(res.data))
      .catch((e) => console.log(e));
  }, [id]);
  console.log(data.Description);

  

  
 const handleAddtoCart=()=>{
  axios.post(`http://localhost:8090/user/addtocart/${user._id}/${data._id}`)
  .then((res)=>toast.success("added to cart "))
  .catch((e)=>toast.error("item in cart"))
  
 }
 const handleAddtoWishlist=()=>{
  axios.post(`http://localhost:8090/user/addWishlist/${user._id}/${data._id}`)
  .then((res)=>toast.success("add to wishlist"))
  .catch((e)=>toast.error("item in wishlist"))
 }

  return (
    <div className="display-main">
      <div className="disp-2">
        <img src={data.Image} alt="" />
      </div>
      <div className="ml-9 ">
       { data.Category==="Mobiles"?
       <div>
        <p>{data?.Description?.Color}</p>
        <p>{data?.Description?.RAM}</p>
        <p>{data?.Description?.ROM}</p>
        <p>{data?.Description?.Display}</p>
        <p>{data?.Description?.Processor}</p>
       </div>
       :<h1>{data.Description}</h1>}
        <h4>$9.95 Shipping Per Order! Up to 40 Items. US Only</h4>
        <br />
        <br />
        <h1>Rs:{data.Price}</h1>
        <br />
        <h4>
          Condition:
          <b>New</b>
         
        </h4>
        <br/>
        <div className="select-main">
        
          <div className="w-[100%]">
            {data.Category === "Fashion"&& (
                <div className="select-main">
            <h1>Select style:</h1>

              <select className="select-option">
                <option value="">-select-</option>
                <option value="">S</option>
                <option value="">M </option>
                <option value="">L </option>
              </select>
          </div>
         

            )}
            <br/>
            <div className="qty-main flex">
              <div className="qty-sub">
              <h1>Quantity :</h1>

              </div>
              <div className=" ml-2 w-12 h-9  border border-black rounded-md bg-gray-50">
                <h1>1</h1>               
              </div>
            

            </div>
            <br/>
            <br/>
            <button className=" w-[500px] h-14 bg-blue-600 ml-9 rounded-2xl border border-black mt-2  text-white text-base">Buy It Now</button><br/>
              <button className="  w-[500px] h-14  ml-9 rounded-2xl border border-blue-500 mt-2 text-blue-500 "onClick={handleAddtoCart}>Add to Cart</button><br/>
              <button className="  w-[500px] h-14 ml-9 rounded-2xl border border-blue-500 mt-2 text-blue-500  flex items-center justify-center gap-2"onClick={handleAddtoWishlist}><CiHeart />Add to Watchlist</button> 

            

           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Displyprod;
