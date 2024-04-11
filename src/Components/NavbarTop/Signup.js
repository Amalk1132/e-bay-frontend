// import React, { useEffect } from "react";
// import Otp from "../NavbarTop/Otp";
import "./Signup.css";
import {  useNavigate } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import Image1 from "../Asset/ebay-img.png";
import axios from "axios";

const Signup = () => {

  const [Otp,setOtp]=useState(" ");

  const Navigate=useNavigate();


  const handlesubmit=(e)=>{
      e.preventDefault();
      axios.post("http://localhost:8090/user/verify",{formValues,Otp})
      .then((res)=>{
          if(res.data.status==="success"){
              toast.success("otp verified ");
              Navigate("/login");

          }
         
      }).catch((e)=>{
          // toast.error(e)
          console.log(e);
      })

      

  }


  
  const [formValues, setformValues] = useState({
    username: "",
    email: "",
    password: "",
    phone: ""

  });



    const [Formerrors, setFormErrors] = useState({});
    const [ShowOtp,setShowOtp]=useState(false);

    const handlechange = (e) => {
      const { name, value } = e.target;
      setformValues({ ...formValues, [name]: value });
    };

  const Handlesubmit= async(e)=>{
    e.preventDefault();
    const errors= validate(formValues);
     setFormErrors(validate(formValues));

     if(Object.keys(errors).length===0){
  
      axios.post("http://localhost:8090/user/register",formValues)
      .then((res)=>{
        if(res.data==="success"){
          setShowOtp(true);
          
        }else{
          toast.error("already user exist")
        }
      }).catch((e)=>{
        toast.error(e.response.data);

      })

      
      
     }
    
 

  }

  const validate=(values)=>{
    const errors={}
    const regex=/^[A-Z0-9._%+-]+@[A-Z0-9.-]+[A-Z]{2,}$/i;

    if(!values.username){
      errors.username="Enter your username";
    }
    if(!values.email){
      errors.email="Enter your email"
    }else if(!regex.test(values.email)){
      errors.email="Invalid email"
    }

    if(!values.password){
      errors.password="enter your password"
    }
    if(!values.phone){
      errors.phone="Enter the phone number"
    }
    return errors;

  }
 



  return (
    <>
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className={`flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 ${ShowOtp ? "hidden":"block"}`}>
       
          <Link to="/"><img
            className="w-28 h-16 mr-2"
            src={Image1}
            alt="logo"
          />
          </Link>
        
       
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Create an account
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={Handlesubmit}>
              <div>
              <div>
              <label className=" mb-2 text-sm font-medium text-gray-900" >
                  Your name
                </label>
                <input
                  type="text"
                  name="username"
                  value={formValues.username}
                  onChange={handlechange}
                 
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="enter your name"
                  // required
                />
                <p className="text-red-600">{Formerrors.username}</p>
                 </div>
                 <div>
                  <br/>

                <label
                
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formValues.email}
                  onChange={handlechange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  // required
                />
                 <p className="text-red-600">{Formerrors.email}</p>
                </div>
               
                
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                 value={formValues.password}
                 onChange={handlechange}
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  // required
                />
                 <p className="text-red-600">{Formerrors.password}</p>
              </div>
              <div>
                <label
                  htmlFor=""
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  phone number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formValues.phone}
                  onChange={handlechange}
                  placeholder="phone number"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  // required
                />
                 <p className="text-red-600">{Formerrors.phone}</p>
              </div>
              <div className="flex items-start">
                
               
              </div>
              <button
                type="submit"
                className=" w-10 md:w-72 h-11 text-black text-center  bg-blue-500 border border-black rounded-lg ml-10"
              >
                Create an account
              </button>
              <br/>
              <br/>
              <Link to="/login"><p className="text-sm font-light text-black dark:text-gray-400">
                Already have an account?{" "}
              Login here    
              </p></Link>
            </form>
          </div>
        </div>
      </div>
    
    </section>
    <div className={`w-screen  h-96 flex justify-center ${ShowOtp?"block":"hidden"}`}>
    {/* <div className=""> */}
            <form onSubmit={handlesubmit}>
            <input type="tel" name="otp" value={Otp} onChange={(e)=>setOtp(e.target.value)}/>
            <button className="border border-black w-24 ml-2 bg-blue-500 rounded-md" >verify otp</button>
            </form>
        </div>

    </>
  );
};

export default Signup;
