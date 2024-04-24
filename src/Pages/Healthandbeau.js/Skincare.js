import React from "react";
import "./Skincare.css";
import { useContext } from "react";
import { myContext } from "../../App";
import { Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const Skincare = () => {
  const { data } = useContext(myContext);
  const { user } = useContext(myContext);

  const handleAddtocart = (productId) => {
    axios
      .post(`http://localhost:8090/user/addtocart/${user._id}/${productId}`)
      .then((res) => toast.success("addes to cart"))
      .catch((e) => toast.error("item in cart"));
  };
  return (
    <div className="main-skin">
      {data
        .filter((item) => item.Subcategory === "skincare")
        .map((item, index) => {
          return (
            <div key={index} className="sub-skin">
              <div className="skin-img">
                <Link to={`/displayprod/${item._id}`}>
                  {" "}
                  <img src={item.Image} alt="skincare" />
                </Link>
              </div>

              <div className="skin-part">
                <h1>{item.Title}</h1>

                <h1>Rs : {item.Price}.00</h1>
                <button
                  className="bg-blue-500 border border-black w-32 m-7 h-10 rounded-lg"
                  onClick={() => handleAddtocart(item._id)}
                >
                  Add to cart
                </button>
                <button className="bg-red-400 border border-black w-32 m-7 h-10 rounded-lg">
                  Wishlist
                </button>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Skincare;
