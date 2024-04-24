import React from "react";
import "./Jwerly.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { myContext } from "../../App";
import axios from "axios";
import toast from "react-hot-toast"

const Jwelery = () => {
  const { data } = useContext(myContext);
  const {user}=useContext(myContext)

  const handleAddtocart=(productId)=>{
    axios.post(`http://localhost:8090/user/addtocart/${user._id}/${productId}`)
    .then((res)=>toast.success("addes to cart"))
    .catch((e)=>toast.error("item in cart"))

  }
  return (
    <div className="main-jwelry">
      {data
        .filter((item) => item.Subcategory === "jwellry")
        .map((item, index) => {
          return (
            <Link to={`/displauprod/${item._id}`}>
              <div key={index} className="sub-jwelry">
                <div>
                  
                </div>
                <div></div>
                <h1>{item.Title}</h1>
                <h1>{item.Description}</h1>
                <h1>{item.Category}</h1>
                <h1>{item.Subcategory}</h1>
                <h1>{item.Price}</h1>
                <button className="bg-blue-500 border border-black w-32 m-7 h-10 rounded-lg" onClick={()=>handleAddtocart(item._id)}>
                  Add to cart
                </button>
                <button className="bg-red-500 border border-black w-32 m-7 h-10 rounded-lg">
                  Wishlist
                </button>
              </div>
            </Link>
          );
        })}
    </div>
  );
};

export default Jwelery;
