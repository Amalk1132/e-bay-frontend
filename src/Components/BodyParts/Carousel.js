import { useState } from "react";
import { FaCircleArrowRight, FaCircleArrowLeft } from "react-icons/fa6";
 export default function Carousel({slides}){

    let[Current,setCurrent]=useState(0);

    let previousSlide=()=>{
        if(Current===0) setCurrent(slides.length-1);
        else setCurrent(Current-1);
    }
    let nextSlide=()=>{
        if(Current===slides.length-1) setCurrent(0);
        else setCurrent(Current+1);
    }


    return (
        <div className="overflow-hidden relative" >
        <div className={`flex transition ease-out duration-300 `}
            style={{
                transform:`translateX(-${Current*100}%)`,
            }}>
            {slides.map((s)=>{
                return <img src={s} alt="image" className="w-90 rounded-xl"/>;

            })}
         
        </div>
        <div className="absolute top-0 h-full w-full justify-between items-center flex text-white px-10
        text-3xl">
       
            <button onClick={previousSlide}><FaCircleArrowLeft /></button>
            <button onClick={nextSlide}><FaCircleArrowRight /></button>
        </div>
       
        </div>
    )
}