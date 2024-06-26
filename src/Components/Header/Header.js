import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown, FaHeart } from "react-icons/fa6";
import Image1 from "../Asset/ebay-img.png";
import { myContext } from "../../App";
import { FaCartShopping } from "react-icons/fa6";
import axios from "axios";

const Header = () => {
  const [Searchinput, setSearchinput] = useState(" ");
  const { user } = useContext(myContext);
  const [count,setCount]=useState(0);

  const handleclick = () => {};

  useEffect(()=>{
    axios.get(`http://localhost:8090/user/cartcount/${user._id}`)
    .then((res)=>setCount(res.data.data))
    .catch((e)=>console.log("error",e));

  },[count])

  return (
    <div>
      <div className=" w-full  ">
        <div className="bg-white w-full h-8">
          <ul className=" h-8 p-0 m-0 flex justify-between items-center ">
            <li className="w-[80%] ml-5">
              {user.username ? (
                <p>{user.username}</p>
              ) : (
                <Link to="/signup" className="no-underline">
                  sign up
                </Link>
              )}
            </li>
            <li>
              <Link to="/wishlist" className="no-underline">
                wishlist
              </Link>
            </li>
            <span className="mr-14 gap-0">
              <FaHeart />
            </span>
            <li className="mr-10 relative ">
              <Link to="/addtocart" className="no-underline">

              <FaCartShopping className="mr-11" />
              </Link>
              <p className="absolute -top-3 ml-4  text-red-600 font-bold">{count}</p>
            </li>
          </ul>
        </div>
        <div className=" w-full border border-current h-20 flex justify-center items-center">
          <ul className="flex justify-center gap-2 items-center pt-3 w-full">
            <li className="font-semibold text-5xl flex ">
              <Link to="/">
                <img className="w-24 h-16" src={Image1} alt="ebay" />
              </Link>
            </li>

            <li className="bg-white w-[50%]">
              <div className="flex items-center border border-black">
                <span></span>
                <input
                  type="text"
                  placeholder="search for anything"
                  value={Searchinput}
                  onChange={(e) => setSearchinput(e.target.value)}
                  className="border focus:outline-none ps-2 w-[75%] h-10"
                />
                <span className="m-2">All Categories</span>
                <FaChevronDown />
              </div>
            </li>
            <li>
              <button
                className="bg-blue-700 text-black w-32 h-10"
                onClick={handleclick}
              >
                search
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;

export function Lastnav() {
  return (
    <div>
      <ul className=" flex justify-center gap-11 p-o m-0">
        <li className="text-base ml-12">
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/electronics">Electronics</Link>
        </li>
        <li>
          <Link to="/motors">Motors</Link>
        </li>
        <li>
          <Link to="/fashion">Fashion</Link>
        </li>
        <li>
          <Link to="/sports">Sports</Link>
        </li>
        <li>
          <Link to="/healthandbeauty">HealthandBeauty</Link>
        </li>
        <li>
          <Link to="/industrialequipment">industrialequipment</Link>
        </li>
        <li className="mr-10">
          <Link to="/homeandgarden">Homeandgarden</Link>
        </li>
      </ul>
    </div>
  );
}
