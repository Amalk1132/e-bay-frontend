import React from "react";
import { useContext } from "react";
import { myContext } from "../App";
import { Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

import "./Computerandacc.css";
const ComputersandAcc = () => {
  const { data } = useContext(myContext);
  const { user } = useContext(myContext);

  const handleAddtocart = (productId) => {
    axios
      .post(`http://localhost:8090/user/addtocart/${user._id}/${productId}`)
      .then((res) => toast.success("addes to cart"))
      .catch((e) => toast.error("item in cart"));
  };
  // const Description=item.Description.length>20?item.Description.substring(0,20):item.Description
  return (
    <div className="main-computer">
      {data
        .filter((item) => item.Category === "laptop")
        .map((item, index) => {
          return (
            
              <div className="sub-computer" key={index}>
                <div className="com-img">
                <Link to={`/displayprod/${item._id}`}> <img src={item.Image} alt="laptop" /></Link>
                </div>
                <div className="com-part">
                  <h1>{item.Title}</h1>
                  <h1>{item.Description}</h1>
                  <br />
                  <h1 className="">Rs: {item.Price}</h1>
                  <button
                    className="bg-blue-500 border border-black w-32 m-7 h-10 rounded-lg"
                    onClick={() => handleAddtocart(item._id)}
                  >
                    Add to cart
                  </button>
                  <button className="bg-red-500 border border-black w-32 m-7 h-10 rounded-lg">
                    Wishlist
                  </button>
                </div>
              </div>
            
          );
        })}
    </div>
  );
};

export default ComputersandAcc;
