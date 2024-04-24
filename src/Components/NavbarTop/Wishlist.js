import React, { useEffect } from 'react'
import { useContext } from 'react';
import { myContext } from '../../App';
import { useState } from 'react';
import axios from "axios";
import toast from "react-hot-toast"




const Wishlist = () => {
  const { user } = useContext(myContext);
const [wishlist, setWishlist] = useState([]);

  useEffect(()=>{
    axios.get(`http://localhost:8090/user/viewwishlist/${user._id}`)
    .then((res)=>setWishlist(res.data))
    .catch((e)=>console.log("error",e))
  },[user._id])

  const removeWishlist = async (itemId) => {
    try {
      await axios.delete(
        `http://localhost:8090/user/removewishlist/${itemId}/${user._id}`
      );
      toast.success("item removed successfully");
      const updatedWishlist = wishlist.filter((item) => item._id !== itemId);
      setWishlist(updatedWishlist);
    } catch (error) {
      toast.error("Error removing item from wishlist:");
    }
  };

  return (
    <div  className='w[100%]'>
      {wishlist.map((item,index)=>{
        return (
          <div key={index} className='w-[1000px] border border-black mt-5 flex justify-between ml-72'>
            <div>
            <img src={item.Image} alt='img' className='w-[290px] h-[250px]'/>

            </div>
          
            
            {item.Category === "Mobiles" ? (
                        <div className=''>
                          
                          <h1>Ram: {item.Description.RAM}</h1>
                          <h1>{item.Description.Color}</h1>
                          <h1>Rom:{item.Description.ROM}</h1>
                          <h1>{item.Description.Display}</h1>
                          <h1>{item.Description.Processor}</h1>
                        </div>
                      ) : (
                     
                        item.Description
                      )}
                      <div><h1>{item.Qty}</h1></div>
            
            <div className='h-10 w-[100px] ml-[100px] '> <h1>Rs:{item.Price}</h1></div>
            <button  className='mt-[140px] mr-7 underline 'onClick={()=>removeWishlist(item._id)}>remove</button>
            <button className='mt-[180px] mr-7 bg-blue-600 rounded-3xl w-[170px] h-[30px] text-white'>Buy it Now</button>
           
          </div>
        )
      })}
    </div>
  )
}

export default Wishlist