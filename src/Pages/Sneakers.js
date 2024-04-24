import React from "react";
import { useContext } from "react";
import { myContext } from "../App";
import { Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import "./Sneakers.css";

const Sneakers = () => {
  const { data } = useContext(myContext);
  const {user}=useContext(myContext);

  const handleAddtocart = (productId) => {
    axios
      .post(`http://localhost:8090/user/addtocart/${user._id}/${productId}`)
      .then((res) => toast.success("addes to cart"))
      .catch((e) => toast.error("item in cart"));
  };
  return (
    <div>
      {data
        .filter((item) => item.Gender === "men" || item.Gender === "women")
        .map((item, index) => {
          return (
            
              <div key={index} className="sub-sneaker">
                <div className="sneaker-img">
                <Link to={`/displayprod/${item._id}`}> <img src={item.Image} alt="set" /></Link>
                </div>
                <div className="sneaker-part">
                  <h1>{item.Title}</h1>
                  <h1>{item.Gender}</h1>
                  <h1>Rs: {item.Price}.00</h1>
                  <button className="bg-blue-500 border border-black w-32 m-7 h-10 rounded-lg"onClick={()=>handleAddtocart(item._id)}>
                    Add to cart
                  </button>
                  <button className="bg-red-500 border border-black w-32 m-7 h-10 rounded-lg">
                    wishlist
                  </button>
                </div>
              </div>
            
          );
        })}
    </div>
  );
};

export default Sneakers;
