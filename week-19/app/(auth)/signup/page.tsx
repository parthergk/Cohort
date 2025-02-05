"use client"
import axios from "axios";
import React, { useState } from "react";

const SignUp = () => {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  return <div>
    <input type="text" placeholder="Enter your email" onChange={(e)=>setEmail(e.target.value)}/>
    <input type="text" placeholder="Enter your password" onChange={(e)=>setPassword(e.target.value)}/>
    <button onClick={()=>{
        axios.post('http://localhost:3000/api/auth/signup', {
            email,
            password
        })
    }}>SignUp</button>
  </div>;
};

export default SignUp;
