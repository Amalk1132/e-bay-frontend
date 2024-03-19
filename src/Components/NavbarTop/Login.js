import React, { useEffect, useState, } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"

import "./Login.css";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const Login = () => {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  


  const navigate =useNavigate();

  const handelsubmit =async (e) => {
    e.preventDefault()
    console.log(email,password)
    try {
    const response=axios.post("http://localhost:8090/user/login",
    {email,password},{withCredentials:true})

    if(response.data){
      toast.success('Successfully toasted!')
      navigate('/')
    }
      
    } catch (error){
      toast.success('an error occured')
    }
  

  };
  



  return (
    <div className="login-main">
      <div className=" login-page">
        <h1 className="text-center p-10 font-bold  "> login page</h1>
        <hr />
        <div className="border-section">
          <br />
          <form onSubmit={handelsubmit}>
            <label className="ml-14 ">email</label>
            <br />
            <input
              type="email"
              name="email"
              placeholder="enter your email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              required
              className="ml-14 w-72 h-9 rounded-lg"
            />
            
            <br />
            <br />
            <label className="ml-14">password</label>
            <br />

            <input
              type="password"
              name="password"
              placeholder="********"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              required
              className="ml-14 w-72 h-9 rounded-lg"
            />
            
            <br />
            <br />
            <button className="lg-btn">login</button>
            <br />
            <br />
            <Link to={"/signup"}>
              {" "}
              <button className="ml-20">Need an Account ? click here.</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;