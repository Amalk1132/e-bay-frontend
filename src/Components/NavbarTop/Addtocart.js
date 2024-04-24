import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { myContext } from "../../App";
import "./Addtocart.css";
import { SiCashapp } from "react-icons/si";
import { AiOutlineInfoCircle } from "react-icons/ai";
import toast from "react-hot-toast";
// import

const Addtocart = () => {
  const { user } = useContext(myContext);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [isloading, setIsloading] = useState(true);

  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + curr.Price, 0));
  }, [cart]);

  useEffect(() => {
    axios
      .get(`http://localhost:8090/user/viewcart/${user._id}`)
      .then((res) => setCart(res.data))
      .catch((e) => {
        console.log("error", e);
      });
  }, [user._id]);

  // const updateCart = async (userId, updatedCart) => {
  //   try {
  //     const response = await axios.put(
  //       http://localhost:4323/api/update-cart/${userId},
  //       updatedCart
  //     );
  //     console.log(response.data);
  //   } catch (error) {
  //     console.error("Error updating cart:", error);
  //   }
  // };

  // const handleQuantityChange = (index, quantity) => {
  //   const updatedCartItems = [...cartItems];
  //   updatedCartItems[index].quantity = quantity;
  //   setCartItems(updatedCartItems);
  //   updateCart(userId, updatedCartItems);
  // };

  const removeCart = async (itemId) => {
    try {
      await axios.delete(
        `http://localhost:8090/user/deletecartitem/${itemId}/${user._id}`
      );
      toast.success("item removed successfully");
      const updatedCartItems = cart.filter((item) => item._id !== itemId);
      setCart(updatedCartItems);
    } catch (error) {
      toast.error("Error removing item from cart:");
    }
  };

  // const calculateTotal = () => {
  //   return cartItems.reduce(
  //     (total, item) => total + (item.product.price || 0) * (item.quantity || 0),
  //     0
  //   );
  // };

  return (
    <div className="ml-[160px] ">
      <h1 className="w-64 text-4xl">Shopping cart</h1>
      <br />
      <div className="flex gap-4">
        <div>
          {/* {isloading } */}
          {cart.map((item, index) => (
            <div key={index} className="flex">
              <div className="w-[900px] h-[350px] border border-black mt-4">
                <div className="flex justify-between">
                  <div>
                    suming-31
                    <br />
                    95.1% positive feedback
                  </div>
                  <div className="flex">
                    <div className="mt-2  mr-2">Request combined shipping</div>
                    <div>
                      <AiOutlineInfoCircle className="mt-[90%] " />
                    </div>
                  </div>
                </div>
                <div className="flex">
                  <div>
                    <img
                      src={item.Image}
                      alt="data"
                      className="w-[300px] h-[200px] p-4 mt-16"
                    />
                  </div>
                  <div className="mt-24 w-[30%]">
                    <h1>
                      {item.Category === "Mobiles" ? (
                        <div>
                          
                          <h1>Ram: {item.Description.RAM}</h1>
                          <h1>{item.Description.Color}</h1>
                          <h1>Rom:{item.Description.ROM}</h1>
                          <h1>{item.Description.Display}</h1>
                          <h1>{item.Description.Processor}</h1>
                        </div>
                      ) : (
                        item.Description
                      )}

                      <br />
                    </h1>
                  </div>
                  <div className="mt-24 ml-14 ">
                    <h1>Qty</h1>
                  </div>
                  <div className="mt-24">
                    <select className="h-7 w-16 border border-black rounded-lg">
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                  </div>
                  <div className="mt-24 ml-20">
                    <h1>Rs: {item.Price}</h1>
                  </div>
                </div>
                <div className="flex justify-end">
                  <button
                    className="mr-5 underline"
                    onClick={() => removeCart(item._id)}
                  >
                    remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="checkout-fixed">
          <div className="checkout">
            <h1>Item </h1>
            <br />
            <hr />
            <br />
            <h1>Subtotal: {total}</h1>
            <sup>₹</sup>

            <br />
            <button className="text-white bg-blue-500 w-[100%]  h-12 rounded-3xl">
              Go to Checkout
            </button>
            <br />
            <br />
            <div className="flex">
              <div>
                <SiCashapp className="" />
              </div>
              <div>
                <p className="text-xs">
                  {" "}
                  Purchase protected by eBay Money Back Guarantee
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addtocart;
