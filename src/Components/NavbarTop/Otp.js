import { useState } from "react"
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Otp=()=>{
    const [Otp,setOtp]=useState(" ");

    const Navigate=useNavigate();


    const handlesubmit=(e)=>{
        e.preventDefault();
        axios.post("http://localhost:8090/user/verify",Otp)
        .then((res)=>{
            if(res.data.status==="success"){
                toast.success("otp verified ");
                Navigate("/");

            }
           
        }).catch((e)=>{
            // toast.error(e)
            console.log(e);
        })

        

    }
    return (
        <div>
            <form onSubmit={handlesubmit}>
            <input type="tel" name="otp" value={Otp} onChange={(e)=>setOtp(e.target.value)}/>
            <button>verify otp</button>
            </form>
        </div>
    )
}
export default Otp