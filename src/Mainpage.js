import "./App.css";
import ebayimg from "../src/Components/Asset/ebay 1.jpg";
import {  Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";




function Mainpage() {
  return (
    

    
    <div className=" w-full h-screen ">
      <div className="bg-white w-full h-8">
        <ul className=" h-8 p-0 m-0 flex justify-between items-center ">
          <li className="w-[80%] ml-5">
            <Link to="/signup" className="no-underline">
              sign up
            </Link>
          </li>
          <li>
            <Link to="/wishlist" className="no-underline">
              wishlist
            </Link>
          </li>
          <span className="mr-14 gap-0">
            <FaHeart />
          </span>
          <li className="mr-10">
            <Link to="/addtocart" className="no-underline">
              add to cart
            </Link>
          </li>
        </ul>
      </div>
      <div className=" w-full border border-current h-20 flex justify-center items-center">
        <ul className="flex justify-center gap-2 items-center pt-3 w-full">
          <li className="font-semibold text-5xl flex ">
            <img className="w-24 h-16" src={ebayimg} alt="ebay"/>
          </li>

          <li className="bg-white w-[50%]">
            <div className="flex items-center border border-black">
              <span>
                <FaSearch />
              </span>
              <input
                type="text"
                placeholder="search for anything"
                className="border focus:outline-none ps-2 w-[75%] h-10"
              />
              <span className="m-2">All Categories</span>
              <FaChevronDown />
            </div>
          </li>
          <li>
            <button className="bg-blue-500 w-32 h-10">search</button>
          </li>
        </ul>
      </div>

      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/electronics">Electronics</Link></li>
          <li><Link to='/motors'>Motors</Link></li>
          <li><Link>Fashion</Link></li>
          <li><Link>Sports</Link></li>
          <li><Link>HealthandBeauty</Link></li>
          <li><Link>IndustrialEquip</Link></li>
          <li><Link>Homeandgarden</Link></li>
        </ul>
      </div>

     

     
    </div>
  );
}

export default Mainpage;
